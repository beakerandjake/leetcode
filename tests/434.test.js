import { countSegments } from '../src/434.js';
import { generateTestName } from './util.js';

describe('434. Number of Segments in a String', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(countSegments, ...args), () => {
      const result = countSegments();
      expect(result).toBe(expected);
    });
  });
});
