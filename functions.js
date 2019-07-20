const { object } = require("./tipos-de-datos");
function getProfession(name) {
  const foo = ["bla", "ble", "bli"];
  if (name === "Gilberto") {
    return "Es radiologo";
  }
  if (name === "Argelia") {
    return "Es administradora";
  }
  return "Es programador";
}

const getAge = name => (name === "Gilberto" ? 24 : 51);

console.log("la profesion de gilberto es:" + getProfession("Gilberto"));

console.log(`La edad de gilberto es ${getAge("Gilberto")}`);

console.log("nuevo cambio");
