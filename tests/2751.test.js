import { survivedRobotsHealths } from '../src/2751.js';
import { generateTestName } from './util.js';

describe('2751. Robot Collisions', () => {
  [
    [[5, 4, 3, 2, 1], [2, 17, 9, 15, 10], 'RRRRR', [2, 17, 9, 15, 10]],
    [[3, 5, 2, 6], [10, 10, 15, 12], 'RLRL', [14]],
    [[1, 2, 5, 6], [10, 10, 11, 11], 'RLRL', []],
    [[1, 40], [10, 11], 'RL', [10]],
    [[3, 40], [49, 11], 'LL', [49, 11]],
    [[13, 3], [17, 2], 'LR', [16]],
    [[5, 46, 12], [3, 27, 43], 'RLL', [27, 42]],
    [[17, 24, 18], [1, 39, 30], 'LLR', [1, 38]],
    [[4, 37, 23], [50, 15, 49], 'RLR', [50, 48]],
  ].forEach((args) => {
    const [positions, healths, directions, expected] = args;
    test(generateTestName(survivedRobotsHealths, ...args), () => {
      const result = survivedRobotsHealths(positions, healths, directions);
      expect(result).toEqual(expected);
    });
  });
});
