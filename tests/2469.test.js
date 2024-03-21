import { convertTemperature } from '../src/2469.js';
import { arrToStr } from './util.js';

describe('2469. Convert the Temperature', () => {
  [
    [36.5, [309.65, 97.7]],
    [122.11, [395.26, 251.798]],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${arrToStr(expected)}`, () => {
      const result = convertTemperature(input);
      expect(result).toEqual(expected);
    });
  });
});
