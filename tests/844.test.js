import { backspaceCompare } from '../src/844.js';
import { generateTestName } from './util.js';

describe('844. Backspace String Compare', () => {
  [
    ['ab#c', 'ad#c', true],
    ['ab##', 'c#d#', true],
    ['a#c', 'b', false],
  ].forEach((args) => {
    const [s, t, expected] = args;
    test(generateTestName(backspaceCompare, ...args), () => {
      const result = backspaceCompare(s, t);
      expect(result).toBe(expected);
    });
  });
});
