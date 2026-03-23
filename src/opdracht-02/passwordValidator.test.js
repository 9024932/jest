import { validatePassword } from './passwordValidator';

describe('validatePassword', () => {

  test('geldig wachtwoord', () => {
    const result = validatePassword('Password1');

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  test('te kort wachtwoord', () => {
    const result = validatePassword('Pass1');

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Minimaal 8 karakters');
  });

  test('geen nummer', () => {
    const result = validatePassword('Password');

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Moet minimaal 1 nummer bevatten');
  });

  test('geen hoofdletter', () => {
    const result = validatePassword('password1');

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
  });

  test('meerdere fouten tegelijk', () => {
    const result = validatePassword('pass');

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Minimaal 8 karakters');
    expect(result.errors).toContain('Moet minimaal 1 nummer bevatten');
    expect(result.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
  });

});