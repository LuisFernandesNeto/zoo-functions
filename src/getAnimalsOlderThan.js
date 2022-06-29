const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const nome = data.species.find((specie) => specie.name === animal);
  const idade = nome.residents.every((ano) => ano.age >= age);
  return idade;
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
