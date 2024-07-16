import { getDirections } from '../src/2096.js';
import { arrToBst, generateTestName } from './util.js';

describe('2096. Step-By-Step Directions From a Binary Tree Node to Another', () => {
  [
    [[5, 1, 2, 3, null, 6, 4], 3, 6, 'UURL'],
    [[2, 1], 2, 1, 'L'],
  ].forEach((args) => {
    const [root, startValue, destValue, expected] = args;
    test(generateTestName(getDirections, ...args), () => {
      const result = getDirections(arrToBst(root), startValue, destValue);
      expect(result).toBe(expected);
    });
  });
});
