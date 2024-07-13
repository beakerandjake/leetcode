import { survivedRobotsHealths } from '../src/2751.js';
import { generateTestName } from './util.js';

describe('2751. Robot Collisions', () => {
  [
    [[5, 4, 3, 2, 1], [2, 17, 9, 15, 10], 'RRRRR', [2, 17, 9, 15, 10]],
    [[3, 5, 2, 6], [10, 10, 15, 12], 'RLRL', [14]],
    [[1, 2, 5, 6], [10, 10, 11, 11], 'RLRL', []],
  ].forEach((args) => {
    const [positions, healths, directions, expected] = args;
    test(generateTestName(survivedRobotsHealths, ...args), () => {
      const result = survivedRobotsHealths(positions, healths, directions);
      expect(result).toEqual(expected);
    });
  });
});
