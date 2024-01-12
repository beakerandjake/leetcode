import { RecentCounter } from '../src/leetcode/933.js';
import { arrToStr } from './util.js';

describe('933. Number of Recent Calls', () => {
  [
    [[1], 1],
    [[1, 100], 2],
    [[1, 100, 3001], 3],
    [[1, 100, 3001, 3002], 3],
  ].forEach(([delays, expected]) => {
    test(`${arrToStr(delays)} -> ${expected}`, () => {
      const counter = new RecentCounter();
      let result;
      for (let i = 0; i < delays.length; i++) {
        result = counter.ping(delays[i]);
      }
      expect(result).toBe(expected);
    });
  });
});
