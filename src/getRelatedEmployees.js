const data = require('../data/zoo_data');

const isManager = (id) => {
  data.employees.find((manager) => manager.id === id);
  if(id === '9e7d4524-363c-416a-8759-8aa7e50c0992' ||
  id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8' ||
  id === '0e7b460e-acf4-4e17-bcb3-ee472265db83') {
    return true;
  }
  return false;
}
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
