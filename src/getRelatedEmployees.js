const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((manager) => manager.managers.includes(id));

/* console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); */

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return data.employees.filter((manager) => manager.managers.includes(managerId))
      .map((person) => `${person.firstName} ${person.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

/* console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); */

module.exports = { isManager, getRelatedEmployees };
