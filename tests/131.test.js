import { partition } from '../src/131.js';
import { generateTestName } from './util.js';

describe('131. Palindrome Partitioning', () => {
  [
    [
      'aab',
      [
        ['a', 'a', 'b'],
        ['aa', 'b'],
      ],
    ],
    ['a', [['a']]],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(partition, ...args), () => {
      const result = partition(s);
      expect(result).toEqual(expected);
    });
  });
});
