import { addTwoPromises } from '../src/2723.js';
import { arrToStr } from './util.js';

const toPromise = ([result, timeout]) =>
  new Promise((resolve) => setTimeout(() => resolve(result), timeout));

describe('2723. Add Two Promises', () => {
  [
    [[2, 20], [5, 60], 7],
    [[10, 50], [-12, 30], -2],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b} -> ${expected}`, async () => {
      const result = await addTwoPromises(toPromise(a), toPromise(b));
      expect(result).toBe(expected);
    });
  });
});
