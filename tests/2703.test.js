import { argumentsLength } from '../src/2703.js';
import { arrToStr } from './util.js';

describe('2703. Return Length of Arguments Passed', () => {
  [
    [[5], 1],
    [[{}, null, '3'], 3],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = argumentsLength(...input);
      expect(result).toBe(expected);
    });
  });
});
