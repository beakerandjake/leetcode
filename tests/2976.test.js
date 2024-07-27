import { minimumCost } from '../src/2976.js';
import { generateTestName } from './util.js';

describe('2976. Minimum Cost to Convert String I', () => {
  [
    [
      'abcd',
      'acbe',
      ['a', 'b', 'c', 'c', 'e', 'd'],
      ['b', 'c', 'b', 'e', 'b', 'e'],
      [2, 5, 5, 1, 2, 20],
      28,
    ],
    ['aaaa', 'bbbb', ['a', 'c'], ['c', 'b'], [1, 2], 12],
    ['abcd', 'abce', ['a'], ['e'], [10000], -1],
  ].forEach((args) => {
    const [source, target, original, changed, cost, expected] = args;
    test(generateTestName(minimumCost, ...args), () => {
      const result = minimumCost(source, target, original, changed, cost);
      expect(result).toBe(expected);
    });
  });
});
