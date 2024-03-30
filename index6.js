"use strict";
/*
  Customer states: Application generates a CSV export of personnel data;
  upon attempting to import this data to Microsoft SQL Server, data is
  corrupted; please diagnose and advise.

  CSV is formatted exactly as table is defined: (varchar, integer, varchar, varchar).
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function parseCSV(filePath, esquema) {
    const fileContent = fs_1.default.readFileSync(filePath, "utf-8");
    const lines = fileContent.split("\n");
    const parsedCSV = [];
    const encabezado = lines[0].split(",");
    if (encabezado.length !== esquema.campos.length) {
        console.log("El encabezado no corresponde con el esquema");
        return [];
    }
    for (let i = 0; i < encabezado.length; i++) {
        if (encabezado[i].trim() !== `"${esquema.campos[i]}"`) {
            console.log("El encabezado no corresponde con el esquema");
            return [];
        }
    }
    for (const line of lines) {
        //const values = line.replace(', ', ' ').split(',');
        //const values = line.split(', ').join(' ').split(',');
        //parsedCSV.push(values);
        if (line.includes(esquema.separador)) {
            const values = line.replace("\r", "").split(',');
            const value = `"${values[1].replace('"', '').replace(' ', '')}${values[0].replace('"', ' ')}"`;
            values.shift();
            values.shift();
            values.unshift(value);
            parsedCSV.push(values);
        }
        else {
            const values = line.replace("\r", "").split(",");
            parsedCSV.push(values);
        }
    }
    return parsedCSV;
}
const filePath = "sample.csv";
const parsedData = parseCSV(filePath, {
    campos: ["name", "age", "profession", "gender"],
    separador: ", ",
    tieneEncabezado: true,
    limitador: ""
});
console.log(parsedData);
//# sourceMappingURL=index6.js.map