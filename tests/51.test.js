import { solveNQueens } from '../src/51.js';
import { arrToStr } from './util.js';

describe('51. N-Queens', () => {
  [
    [
      4,
      [
        ['.Q..', '...Q', 'Q...', '..Q.'],
        ['..Q.', 'Q...', '...Q', '.Q..'],
      ],
    ],
  ].forEach(([n, expected]) => {
    test(`${n} -> ${arrToStr(expected)}`, () => {
      const result = solveNQueens(n);
      expect(result).toEqual(expected);
    });
  });
});
