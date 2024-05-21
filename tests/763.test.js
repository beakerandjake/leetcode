import { partitionLabels } from '../src/763.js';
import { generateTestName } from './util.js';

describe('763. Partition Labels', () => {
  [
    ['ababcbacadefegdehijhklij', [9, 7, 8]],
    ['eccbbbbdec', [10]],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(partitionLabels, ...args), () => {
      const result = partitionLabels(s);
      expect(result).toEqual(expected);
    });
  });
});
