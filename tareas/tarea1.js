// Crear una función que me permita determinar
// la calificación de 3 alumnos
// uno con nota de 100, otro con nota de 80
// y el último con nota de 59

function consoleMapper(letra, nota){
    return console.log(`${nota} es igual a ${letra}` )
}
function calcularNota (nota) {
 if (nota >= 90) {
     consoleMapper('A', nota);
 } else if (nota >= 80) {
    consoleMapper('B', nota);
 } else if (nota >= 70){
    consoleMapper('C', nota);
 } else if (nota >= 60){
    consoleMapper('D', nota);
 } else {
    consoleMapper('F', nota);
 }
}

calcularNota (100)
calcularNota (80)
calcularNota (40)

// imprimir la tabla del 10 hasta el 5

const base = 10;
const limite = 5;

for (let i = 1; i <= limite; i++){
    debugger
    const resultado = base * i;
    console.log (base + ' x ' + i + ' = ' + resultado);
}


// While, iterar hasta quedar sin gasolina.

for (let gasolina = 3; gasolina > 0; gasolina--){
    console.log (`Gasolina restante ${gasolina}`);    
}
