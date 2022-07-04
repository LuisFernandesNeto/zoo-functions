const data = require('../data/zoo_data');

const { employees, species } = data;

const people = (id) => employees.find((employee) => employee.id === id);

const animals = (id) => species.find((animal) => animal.id === people(id).responsibleFor[0]);

const oldestAnimal = (id) => animals(id).residents.sort((a, b) => b.age - a.age);

const getOldestFromFirstSpecies = (id) => Object.values(oldestAnimal(id)[0]);

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
