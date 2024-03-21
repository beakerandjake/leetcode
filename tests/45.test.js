import { jump } from '../src/45.js';
import { generateTestName } from './util.js';

describe('45. Jump Game II', () => {
  [
    [[2, 3, 1, 1, 4], 2],
    [[2, 3, 0, 1, 4], 2],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(jump, ...args), () => {
      const result = jump(input);
      expect(result).toBe(expected);
    });
  });
});
