const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const object = {};
  if (!animal) {
    data.species.forEach((numbers) => {
      object[`${numbers.name}`] = numbers.residents.length;
    });
    return object;
  }
  const bicho = data.species.find((specie) => specie.name.includes(animal.specie));
  object[`${animal.specie}`] = bicho.residents.length;
  return object;
};

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
