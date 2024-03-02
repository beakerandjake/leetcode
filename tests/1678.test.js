import { interpret } from '../src/1678.js';

describe('1678. Goal Parser Interpretation', () => {
  [
    ['G()(al)', 'Goal'],
    ['G()()()()(al)', 'Gooooal'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = interpret(input);
      expect(result).toBe(expected);
    });
  });
});
