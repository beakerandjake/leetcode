import { compareVersion } from '../src/165.js';
import { generateTestName } from './util.js';

describe('165. Compare Version Numbers', () => {
  [
    ['1.01', '1.001', 0],
    ['1.0', '1.0.0', 0],
    ['0.1', '1.1', -1],
  ].forEach((args) => {
    const [version1, version2, expected] = args;
    test(generateTestName(compareVersion, ...args), () => {
      const result = compareVersion(version1, version2);
      expect(result).toBe(expected);
    });
  });
});
