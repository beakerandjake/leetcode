import { leastInterval } from '../src/621.js';
import { arrToStr } from './util.js';

describe('621. Task Scheduler', () => {
  [
    [['A', 'A', 'A', 'B', 'B', 'B'], 2, 8],
    [['A', 'C', 'A', 'B', 'D', 'B'], 1, 6],
    [['A', 'A', 'A', 'B', 'B', 'B'], 3, 10],
    [['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2, 12],
    [['A', 'B', 'A'], 2, 4],
  ].forEach(([tasks, n, expected]) => {
    test(`${arrToStr(tasks)}, ${n} -> ${expected}`, () => {
      const result = leastInterval(tasks, n);
      expect(result).toBe(expected);
    });
  });
});
