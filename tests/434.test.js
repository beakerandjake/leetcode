import { countSegments } from '../src/434.js';
import { generateTestName } from './util.js';

describe('434. Number of Segments in a String', () => {
  [
    ['Hello, my name is John', 5],
    ['Hello', 1],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(countSegments, ...args), () => {
      const result = countSegments(s);
      expect(result).toBe(expected);
    });
  });
});
