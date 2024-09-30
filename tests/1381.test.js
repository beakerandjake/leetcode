import { CustomStack } from '../src/1381.js';
import { generateTestName } from './util.js';

describe('1381. Design a Stack With Increment Operation', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(CustomStack, ...args), () => {
      const result = CustomStack();
      expect(result).toBe(expected);
    });
  });
});
