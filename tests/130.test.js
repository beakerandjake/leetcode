import { solve } from '../src/130.js';
import { arrToStr } from './util.js';

describe('130. Surrounded Regions', () => {
  [
    [
      [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
      [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
    ],
    [[['X']], [['X']]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      solve(input);
      expect(input).toEqual(expected);
    });
  });
});
