const data = require('../data/zoo_data');

const { species } = data;

/* const includeNames = species.filter((name) => name.includeNames === true); */

const getLocation = () => species.reduce((acc, curr) => {
  acc[curr.location].push(curr.name);
  return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });

const getAnimalMap = (options) => {
 
}

module.exports = getAnimalMap;
