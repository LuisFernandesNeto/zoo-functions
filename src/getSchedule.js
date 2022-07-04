const data = require('../data/zoo_data');

const { hours } = data;

const animais = data.species.map((animal) => animal.name);

const getAnimalsByDay = (scheduleTarget) => {
  const days = data.species.filter((day) => day.availability.includes(scheduleTarget));
  const name = days.map((animal) => animal.name);
  return name;
};

const dias = Object.keys(hours);

const totalSchedule = () => dias.reduce((acc, dia) => {
  const object = { ...acc };
  if (dia === 'Monday') {
    object[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    const exhibition = getAnimalsByDay(dia);
    const officeHour = `Open from ${hours[dia].open}am until ${hours[dia].close}pm`;
    object[dia] = { officeHour, exhibition };
  }
  return object;
}, {});

const daySchedule = (scheduleTarget) => (
  { [scheduleTarget]: totalSchedule()[scheduleTarget] }
);

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return totalSchedule();
  }
  if (dias.includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  if (animais.includes(scheduleTarget)) {
    return data.species.find((animal) => scheduleTarget === animal.name).availability;
  }
  return totalSchedule();
};

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
