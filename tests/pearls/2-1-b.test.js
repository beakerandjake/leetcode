import { rotateLeft } from '../../src/pearls/2-1-b.js';

const arr = (str) => [...str];

test.each([
  ['', 1, ''],
  ['a', 1, 'a'],
  ['abcdefgh', 1, 'bcdefgha'],
  ['abcdefgh', 2, 'cdefghab'],
  ['abcdefgh', 3, 'defghabc'],
  ['abcdefgh', 4, 'efghabcd'],
  ['abcdefgh', 5, 'fghabcde'],
  ['abcdefgh', 6, 'ghabcdef'],
  ['abcdefgh', 7, 'habcdefg'],
  ['abcdefgh', 8, 'abcdefgh'],
  ['abcdefgh', 9, 'bcdefgha'],
  ['abcdefgh', 10, 'cdefghab'],
  ['abcdefgh', 11, 'defghabc'],
  ['abcdefgh', 12, 'efghabcd'],
  ['abcdefgh', 13, 'fghabcde'],
  ['abcdefgh', 14, 'ghabcdef'],
  ['abcdefgh', 15, 'habcdefg'],
  ['abcdefgh', 16, 'abcdefgh'],
])('rotateLeft(%s, %s) = %s', (input, times, expected) => {
  const result = rotateLeft(arr(input), times);
  // console.log(`input: ${input}, times: ${times}, result: ${result.join('')}`);
  expect(result).toEqual(arr(expected));
});
