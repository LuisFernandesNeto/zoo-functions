const data = require('../data/zoo_data');

const { employees, species } = data;

const arrEmployee = (names) => employees.filter((employee) => employee.firstName === names.name
|| employee.lastName === names.name || employee.id === names.id);

const objEmployee = (names) => (
  arrEmployee(names).reduce((acc, curr) => {
    acc.id = curr.id;
    acc.fullName = `${curr.firstName} ${curr.lastName}`;
    acc.species = curr.responsibleFor.map((animal) => (
      species.find((specie) => specie.id === animal).name
    ));
    acc.locations = curr.responsibleFor.map((animal) => (
      species.find((specie) => specie.id === animal).location));
    return acc;
  }, {})
);

const everyEmployee = () => employees.reduce((acc, curr) => acc.concat(objEmployee(curr)), []);

const getEmployeesCoverage = (names) => {
  if (!names) return everyEmployee();
  if (!objEmployee(names).id) throw Error('Informações inválidas');
  return objEmployee(names);
};

module.exports = getEmployeesCoverage;
