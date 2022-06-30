const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const name = data.employees.find((employee) => (employee.firstName === employeeName
     || employee.lastName === employeeName));
  return name;
};
console.log(getEmployeeByName('Wilburn'));

module.exports = getEmployeeByName;
