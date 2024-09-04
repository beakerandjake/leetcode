import { robotSim } from '../src/874.js';
import { generateTestName } from './util.js';

describe('874. Walking Robot Simulation', () => {
  [
    [[4, -1, 3], [], 25],
    [[4, -1, 4, -2, 4], [[2, 4]], 65],
    [[6, -1, -1, 6], [], 36],
  ].forEach((args) => {
    const [commands, obstacles, expected] = args;
    test(generateTestName(robotSim, ...args), () => {
      const result = robotSim(commands, obstacles);
      expect(result).toBe(expected);
    });
  });
});
