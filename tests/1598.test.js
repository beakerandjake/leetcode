import { minOperations } from '../src/1598.js';
import { generateTestName } from './util.js';

describe('1598. Crawler Log Folder', () => {
  [
    [['d1/', 'd2/', '../', 'd21/', './'], 2],
    [['d1/', 'd2/', './', 'd3/', '../', 'd31/'], 3],
    [['d1/', '../', '../', '../'], 0],
  ].forEach((args) => {
    const [logs, expected] = args;
    test(generateTestName(minOperations, ...args), () => {
      const result = minOperations(logs);
      expect(result).toBe(expected);
    });
  });
});
