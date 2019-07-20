const { object } = require("./tipos-de-datos");
const PI = require("./vars/constantes");

if (object.edad >= 25) {
  console.log(`La persona es vieja, tiene: ${object.edad}`);
} else {
  console.log(`la persona es joven, tiene: ${object.edad}`);
}
if (PI > 3.14) {
  console.log(`Valor de PI es: ${PI}`);
} else {
  console.log(`Valor de PI es menor que 3,14`);
}
