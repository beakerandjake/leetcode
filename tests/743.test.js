import { networkDelayTime } from '../src/743.js';
import { arrToStr } from './util.js';

describe('743. Network Delay Time', () => {
  [
    [
      [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
      ],
      4,
      2,
      2,
    ],
  ].forEach(([times, n, k, expected]) => {
    test(`${arrToStr(times)},${n},${k} -> ${expected}`, () => {
      const result = networkDelayTime(times, n, k);
      expect(result).toBe(expected);
    });
  });
});
