# Alterna - Debugging and troubleshooting

## Modulo 4

### Propositos del modulo

#### Entender los diferentes tipos de errores que se enfrentarán en la carrera y saber identificarlos en el siguiente orden:

1. Especificación 
2. Diseño
3. Expresión
4. Comportamiento de ambiente o contexto de configuración

> "Cuestiona que lo que asumes sea verdad cuando te estanques"

#### Evitar que lo primero que hagas al enfrentarte a un problema sea tirar código, primero analiza el problema y entiende como funciona todo el proceso.

#### Ser capaz de resolver problemas triviales que enfrentarás en tu desarrollo profesional.

#### Saber usar el perfilador de Node y en qué situaciones podría ayudarte.



Profesor: [Oliver Gitte](https://www.linkedin.com/in/oliver-gitte/)


# GUIDE

El primer paso que debes realizar es:
```
npm install
npx tsc
```

Para hacer funcionar uno de los algoritmos o problemas resueltos en este modulo (que no sean la API) primero debes modificar el package.json en la parte de scripts donde diga "start" y poner el nombre del archivo que puedas utilizar, luego poner: `npm start`. Si quieres modificar cualquiera de los archivos y/o modificaste alguno ten en mente que fueron realizados en typescript y no debes modificar ningun archivo de javascript, primero ejecuta `npx tsc` para transpilar a javascript y luego ejecuta el archivo de javascript, supongamos que es el index2.js, debes ejecutar en la consola `node index2.js` por ejemplo.

### API

Este proyecto usa express para el servidor, debes ejecutar `npm install` dentro de la carpeta API para instalar todas las dependencias necesarias y typescript tambien, puedes leer en el archivo las indicaciones para resolver el problema, tambien luego se indico mejorarlo usando Map en vez de arreglos. Puedes usar `npm start` para transpilar a javascript y ejecutar el servidor, tambien probar los endpoints.