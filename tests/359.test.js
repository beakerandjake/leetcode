import { Logger } from '../src/359.js';
import { arrToStr } from './util.js';

describe('359. Logger Rate Limiter', () => {
  [
    [
      [
        [1, 'foo'],
        [2, 'bar'],
        [3, 'foo'],
        [8, 'bar'],
        [10, 'foo'],
        [11, 'foo'],
      ],
      [true, true, false, false, false, true],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const logger = new Logger(10);
      input.forEach(([timestamp, message], i) => {
        const result = logger.shouldPrintMessage(timestamp, message);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
