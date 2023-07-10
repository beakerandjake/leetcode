import { pascalsTriangle } from '../../src/dataStructures/pascalsTriangle';

describe('pacsalsTriangle()', () => {
  test.each([
    [0, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [2, 0, 1],
    [2, 1, 2],
    [2, 2, 1],
    [3, 0, 1],
    [3, 1, 3],
    [3, 2, 3],
    [3, 3, 1],
    [4, 0, 1],
    [4, 1, 4],
    [4, 2, 6],
    [4, 3, 4],
    [4, 4, 1],
    [5, 0, 1],
    [5, 1, 5],
    [5, 2, 10],
    [5, 3, 10],
    [5, 4, 5],
    [5, 5, 1],
    [6, 0, 1],
    [6, 1, 6],
    [6, 2, 15],
    [6, 3, 20],
    [6, 4, 15],
    [6, 5, 6],
    [6, 6, 1],
    [7, 0, 1],
    [7, 1, 7],
    [7, 2, 21],
    [7, 3, 35],
    [7, 4, 35],
    [7, 5, 21],
    [7, 6, 7],
    [7, 7, 1],
  ])('row:%s, col:%s = %s', (row, col, expected) => {
    const result = pascalsTriangle(row, col);
    expect(result).toBe(expected);
  });
});
