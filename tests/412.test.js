import { fizzBuzz } from '../src/412.js';
import { arrToStr } from './util.js';

describe('412. Fizz Buzz', () => {
  [
    [3, ['1', '2', 'Fizz']],
    [5, ['1', '2', 'Fizz', '4', 'Buzz']],
    [
      15,
      [
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz',
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = fizzBuzz(input);
      expect(result).toEqual(expected);
    });
  });
});
