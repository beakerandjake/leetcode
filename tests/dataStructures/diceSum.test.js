import { diceSum } from '../../src/dataStructures/diceSum.js';

test.each([
  [
    3,
    7,
    [
      [1, 1, 5],
      [1, 2, 4],
      [1, 3, 3],
      [1, 4, 2],
      [1, 5, 1],
      [2, 1, 4],
      [2, 2, 3],
      [2, 3, 2],
      [2, 4, 1],
      [3, 1, 3],
      [3, 2, 2],
      [3, 3, 1],
      [4, 1, 2],
      [4, 2, 1],
      [5, 1, 1],
    ],
  ],
])('printBinary(%s,%s)', (numDice, sum, expected) => {
  const result = diceSum(numDice, sum);
  expect(result).toEqual(expected);
});
