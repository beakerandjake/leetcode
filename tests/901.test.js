import { StockSpanner } from '../src/leetcode/901.js';
import { arrToStr } from './util.js';

describe('901. Online Stock Span', () => {
  [
    // replace with real test data
    [
      ['next', 'next', 'next', 'next', 'next', 'next', 'next'],
      [[100], [80], [60], [70], [60], [75], [85]],
      [1, 1, 1, 2, 1, 4, 6],
    ],
  ].forEach(([fns, args, expected]) => {
    test(`${arrToStr(fns)},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
      const spanner = new StockSpanner();
      fns.forEach((fn, i) => {
        const result = spanner[fn](...args[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
