import { readBinaryWatch } from '../src/401.js';
import { arrToStr } from './util.js';

describe('401. Binary Watch', () => {
  [
    [1, ['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00']],
    [9, []],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${arrToStr(expected)}`, () => {
      const result = readBinaryWatch(input);
      expect(result).toEqual(expected);
    });
  });
});
