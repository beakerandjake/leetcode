import { minDistance } from '../src/72.js';

describe('72. Edit Distance', () => {
  [
    ['horse', 'ros', 3],
    ['intention', 'execution', 5],
    ['', 'a', 1],
    ['catty', 'cathy', 1],
    ['plasma', 'altruism', 6],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b}-> ${expected}`, () => {
      const result = minDistance(a, b);
      expect(result).toBe(expected);
    });
  });
});
