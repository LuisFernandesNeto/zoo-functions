const data = require('../data/zoo_data');



const countEntrants = (entrants) => entrants.reduce((acc, entrant) => {
  if (entrant.age < 18) {
    acc.child += 1;
  }
  if (entrant.age > 18 && entrant.age < 50) {
    acc.adult += 1;
  }
  if (entrant.age >= 50) {
   acc.senior += 1; 
  }
  return acc;
}, {child: 0, adult: 0, senior: 0});

  console.log(countEntrants([
    { name:  'Lara Carvalho', age:  5 },
    { name:  'Frederico Moreira', age:  5 },
    { name:  'Pedro Henrique Carvalho', age:  5 },
    { name:  'Maria Costa', age:  18 },
    { name:  'Núbia Souza', age:  18 },
    { name:  'Carlos Nogueira', age:  50 },
  ]));


const calculateEntry = (entrants) => {
  
};

module.exports = { calculateEntry, countEntrants };
