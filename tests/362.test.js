import { HitCounter } from '../src/362.js';
import { arrToStr } from './util.js';

describe('362. Design Hit Counter', () => {
  [
    [[1, 2, 3], 4, 3],
    [[1, 2, 3, 300], 300, 4],
    [[1, 2, 3, 300], 301, 3],
  ].forEach((args) => {
    const [hits, timestamp, expected] = args;
    test(`HitCounter(${arrToStr(hits)}).getHits(${timestamp}) = ${expected}`, () => {
      const hitCounter = hits.reduce((acc, x) => {
        acc.hit(x);
        return acc;
      }, new HitCounter());
      const result = hitCounter.getHits(timestamp);
      expect(result).toBe(expected);
    });
  });
});
