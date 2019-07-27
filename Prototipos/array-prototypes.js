const pokemonArray = require("../mocks/pokemon");

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
