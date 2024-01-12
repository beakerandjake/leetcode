import { MovingAverage } from '../src/346.js';
import { arrToStr } from './util.js';

describe('346. Moving Average from Data Stream', () => {
  [[3, [[1], [10], [3], [5]], [1.0, 5.5, 4.66667, 6.0]]].forEach(
    ([size, args, expected]) => {
      test(`${size},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
        const queue = new MovingAverage(size);
        args.forEach((arg, i) => {
          const result = queue.next(...arg);
          expect(result).toBeCloseTo(expected[i]);
        });
      });
    }
  );
});
