import { isValidTodo, getTodoPriority } from './todoUtils';

describe('Todo Utils', () => {
  
  // VOORBEELD - Deze test is al ingevuld om te laten zien hoe het werkt
  test('VOORBEELD: isValidTodo geeft true voor normale tekst', () => {
    const result = isValidTodo('Boodschappen doen');
    expect(result).toBe(true);
  });

  test('isValidTodo geeft false voor lege string', () => {
    const result = isValidTodo('');

    expect(result).toBe(false); // Deze test faalt! Vervang deze regel met je eigen test
  });

  test('getTodoPriority geeft high voor urgent', () => {
    const result = getTodoPriority('Belangrijke vergadering');
    expect(result).toBe('low');

  });

  test('getTodoPriority geeft low voor normale todo', () => {
    const result = getTodoPriority('Boodschappen doen');
    expect(result).toBe('low'); // Deze test faalt! Vervang deze regel met je eigen test

  });

});
