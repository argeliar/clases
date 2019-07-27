const { pokemons } = require("../mocks/pokemon");

const arrayMap = Array(20)
  .fill("")
  .map(value => Math.round(Math.random() * 10));
function fifthPosition(value, index) {
  if (value >= 5) {
    return `Es mayor o igual que 5 ${index}`;
  }
  return `es menor que 5  ${index}`;
}
const mapExample = arrayMap.map(fifthPosition).filter(v => v && v);

const mapExample2 = arrayMap.map((value, index) =>
  value >= 5 ? `mayor ${index}` : `menor ${index}`
);

function reduceFunc(prev, curr, index, array) {
  console.log(prev, curr, index, array);
  return prev + curr;
}

const reduceExample = arrayMap.reduce(reduceFunc, 0);

console.log(reduceExample);

const pokemonMapExample = pokemons.map(({ name }) => name);

const pokemonFilterExample = pokemons.filter(
  ({ weight }) => Number(weight.split(" ")[0]) > 6
);

const pikachu = pokemons.find(({ name }) => name === "Pikachu");

const types = [];
pokemons.forEach(({ type }) => {
  for (i = 0; i < type.length; i++) {
    if (types.indexOf(type[i]) === -1) {
      types.push(type[i]);
    }
  }
});

const pokemonReduceExample = pokemons.reduce((acum, value) => {
  const noPuedeEvolucionar = acum;
  if (!value.next_evolution) {
    noPuedeEvolucionar.push(value);
  }
  return noPuedeEvolucionar;
}, []);

function reducerFunction(arr, prop) {
  return (
    arr.reduce((acum, val) => acum + Number(val[prop].split(" ")[0]), 0) /
    arr.length
  );
}

function stringMaker(value, unit) {
  return `${Math.round(value)} ${unit}`;
}
const averageValues = {
  height: stringMaker(reducerFunction(pokemons, "height"), "mts"),
  weight: stringMaker(reducerFunction(pokemons, "weight"), "kgs")
};

console.log(averageValues);
