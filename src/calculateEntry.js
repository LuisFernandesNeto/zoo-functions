const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc, entrant) => {
  if (entrant.age < 18) {
    acc.child += 1;
  }
  if (entrant.age >= 18 && entrant.age < 50) {
    acc.adult += 1;
  }
  if (entrant.age >= 50) {
    acc.senior += 1;
  }
  return acc;
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const primeiraFuncao = countEntrants(entrants);
  const totalChildren = primeiraFuncao.child * 20.99;
  const totalAdults = primeiraFuncao.adult * 49.99;
  const totalSeniors = primeiraFuncao.senior * 24.99;
  return totalChildren + totalAdults + totalSeniors;
};

module.exports = { calculateEntry, countEntrants };
