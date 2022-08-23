
const fileSystem = require('fs') ;

fileSystem.readFile("./clase1/archivo.txt", "utf-8", (error, data) => {
    if(error){
        console.error("Error: ", error);
    } else {
        console.log("Datos: ", data);
    }
});

console.log("===========================================================");

const fileDescriptor = fileSystem.readFileSync("./clase1/archivo.txt", "utf-8")

console.log(fileDescriptor);