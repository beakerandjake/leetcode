import { isPathCrossing } from '../src/1496.js';
import { generateTestName } from './util.js';

describe('1496. Path Crossing', () => {
  [
    ['NES', false],
    ['NESWW', true],
    ['NNSWWEWSSESSWENNW', true],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(isPathCrossing, ...args), () => {
      const result = isPathCrossing(input);
      expect(result).toBe(expected);
    });
  });
});
