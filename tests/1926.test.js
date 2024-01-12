import { nearestExit } from '../src/leetcode/1926.js';
import { arrToStr } from './util.js';

describe('1926. Nearest Exit from Entrance in Maze', () => {
  [
    [
      [
        ['+', '+', '.', '+'],
        ['.', '.', '.', '+'],
        ['+', '+', '+', '.'],
      ],
      [1, 2],
      1,
    ],
    [
      [
        ['+', '+', '+'],
        ['.', '.', '.'],
        ['+', '+', '+'],
      ],
      [1, 0],
      2,
    ],
  ].forEach(([maze, entrance, expected]) => {
    test(`${arrToStr(maze)},${entrance} -> ${expected}`, () => {
      const result = nearestExit(maze, entrance);
      expect(result).toBe(expected);
    });
  });
});
