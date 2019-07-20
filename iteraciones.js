const { list } = require("./tipos-de-datos");

for (let i = 0; i < list.length; i++) {
  if (typeof list[i] === "string") {
    console.log("el valor es un string");
  } else if (typeof list[i] === "number") {
    console.log("el valor es un numero");
  } else {
    console.log("el valor es de otro tipo");
  }
}

console.log("tipo de la lista:" + typeof list[0]);
