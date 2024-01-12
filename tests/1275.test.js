import { tictactoe } from '../src/1275.js';
import { arrToStr } from './util.js';

describe('1275. Find Winner on a Tic Tac Toe Game', () => {
  [
    // replace with real test data
    [
      [
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2],
      ],
      'A',
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = tictactoe(input);
      expect(result).toBe(expected);
    });
  });
});
