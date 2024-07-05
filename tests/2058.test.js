import { nodesBetweenCriticalPoints } from '../src/2058.js';
import { generateTestName } from './util.js';

describe('2058. Find the Minimum and Maximum Number of Nodes Between Critical Points', () => {
  [
    [
      [3, 1],
      [-1, -1],
    ],
    [
      [5, 3, 1, 2, 5, 1, 2],
      [1, 3],
    ],
    [
      [1, 3, 2, 2, 3, 2, 2, 2, 7],
      [3, 3],
    ],
  ].forEach((args) => {
    const [head, expected] = args;
    test(generateTestName(nodesBetweenCriticalPoints, ...args), () => {
      const result = nodesBetweenCriticalPoints(head);
      expect(result).toEqual(expected);
    });
  });
});
