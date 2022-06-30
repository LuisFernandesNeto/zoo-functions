const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const object = {};
  if (!animal) {
    data.species.forEach((numbers) => {
      object[`${numbers.name}`] = numbers.residents.length;
    });
    return object;
  }
  if (!animal.sex) {
    const bicho = data.species.find((specie) => specie.name === animal.specie);
    return bicho.residents.length;
  }
  if (animal.sex) {
    const bicho2 = data.species.find((specie) => specie.name === animal.specie);
    return bicho2.residents.filter((sexo) => sexo.sex === animal.sex).length;
  }
};

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
