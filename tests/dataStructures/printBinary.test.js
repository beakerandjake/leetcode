import { printBinary } from '../../src/dataStructures/printBinary.js';

test.each([
  [2, ['00', '01', '10', '11']],
  [3, ['000', '001', '010', '011', '100', '101', '110', '111']],
])('printBinary(%s)=%s', (digits, expected) => {
  const result = printBinary(digits);
  expect(result).toEqual(expected);
});
