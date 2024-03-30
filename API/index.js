"use strict";
/*
Problem statement: Client that uses this API to store values
complains that saving values doesn't work.

Apparently, API will say that it saved items, but return
incorrect values when queried. Also, deleting items is erratic,
causing items to "go back in time" or return nonsensical values.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Estoy ejecutando el programa");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let itemsMap = new Map();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/items/:id", (req, res) => {
    if (!itemsMap.has(req.params.id)) {
        return res.status(404).json({ error: "Item not found" });
    }
    return res.json(itemsMap.get(req.params.id));
});
app.post("/items/:id", (req, res) => {
    const id = req.params.id;
    const value = req.body.value;
    const newItem = { id, value };
    let item = itemsMap.get(id);
    if (!value || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Body is empty or value doesn't exist" });
    }
    else if (item) {
        newItem.value = compareObject(item.value, value);
        newItem.value = cleanEmpty(newItem.value);
        itemsMap.set(id, newItem);
        return res.json(itemsMap.get(id));
    }
    itemsMap.set(id, newItem);
    console.log(itemsMap);
    return res.status(200).json(newItem);
});
app.delete("/items/:id", (req, res) => {
    if (!itemsMap.has(req.params.id)) {
        return res.status(400).json({
            error: "Item doesn't exist"
        });
    }
    itemsMap.delete(req.params.id);
    return res.status(200).json({
        message: "Item deleted successfully"
    });
});
app.listen(8081, () => {
    console.log("Running on port 8081");
});
function compareObject(one, two) {
    const final = {};
    Object.assign(final, one);
    const oldKeys = Object.keys(one);
    const newKeys = Object.keys(two);
    for (const key of newKeys) {
        const duplicate = oldKeys.find((k) => k === key);
        if (duplicate) {
            const duplicateKey = duplicate;
            console.log(`${duplicate} => old: ${one[duplicateKey]} : new: ${two[duplicateKey]}`);
        }
    }
    Object.assign(final, two);
    return final;
}
function cleanEmpty(records) {
    const newRecords = {};
    for (const values in records) {
        if (records[values].trim() !== "") {
            newRecords[values] = records[values];
        }
    }
    return newRecords;
}
//# sourceMappingURL=index.js.map