const getOpeningHours = require('../src/getOpeningHours');

const zooClosed = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed (Já que o Zoo está sempre fechado na segunda)', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(zooClosed);
  });
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(zooClosed);
  });
  it('Para os argumentos Friday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Friday', '09:00-AM')).toBe(zooClosed);
  });
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: `The abbreviation must be AM or PM`', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: `The hour should represent a number`', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow('The hour should represent a number');
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: `The minutes should represent a number`', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow('The minutes should represent a number');
  });
});
