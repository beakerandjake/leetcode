import { AllOne } from '../src/432.js';
import { generateTestName } from './util.js';

describe('432. All O`one Data Structure', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(AllOne, ...args), () => {
      const result = AllOne();
      expect(result).toBe(expected);
    });
  });
});
