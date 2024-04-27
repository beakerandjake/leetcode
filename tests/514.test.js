import { findRotateSteps } from '../src/514.js';
import { generateTestName } from './util.js';

describe('514. Freedom Trail', () => {
  [
    ['godding', 'gd', 4],
    ['godding', 'godding', 13],
  ].forEach((args) => {
    const [ring, key, expected] = args;
    test(generateTestName(findRotateSteps, ...args), () => {
      const result = findRotateSteps(ring, key);
      expect(result).toBe(expected);
    });
  });
});
