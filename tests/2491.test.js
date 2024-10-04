import { dividePlayers } from '../src/2491.js';
import { generateTestName } from './util.js';

describe('2491. Divide Players Into Teams of Equal Skill', () => {
  [
    [[3, 2, 5, 1, 3, 4], 22],
    [[3, 4], 12],
    [[1, 1, 2, 3], -1],
  ].forEach((args) => {
    const [skill, expected] = args;
    test(generateTestName(dividePlayers, ...args), () => {
      const result = dividePlayers(skill);
      expect(result).toBe(expected);
    });
  });
});
