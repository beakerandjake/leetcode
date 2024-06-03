import { numSteps } from '../src/1404.js';
import { generateTestName } from './util.js';

describe('1404. Number of Steps to Reduce a Number in Binary Representation to One', () => {
  [
    ['1101', 6],
    ['10', 1],
    ['1', 0],
    ['1111011110000011100000110001011011110010111001010111110001', 85],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(numSteps, ...args), () => {
      const result = numSteps(s);
      expect(result).toBe(expected);
    });
  });
});
