import { checkPermutation, isUnique } from '../../src/interview/ch1.js';

describe('isUnique()', () => {
  test.each([
    ['a', true],
    ['Wjk0eLRs8R', false],
    ['2AwlJjazxf', true],
    ['5bBYStnGRJ', true],
    ['1LoiK8GH9B', true],
    ['5ENpp5BXNT', false],
    ['MHGbdSCszV', true],
    ['7JkqV3V7NW', false],
  ])('%s isUnique return %s', (str, expected) => {
    const result = isUnique(str);
    expect(result).toBe(expected);
  });
});

describe('checkPermutation()', () => {
  test.each([
    ['a', 'a', false],
    ['Wjk0eLRs8R', 'eRLWjks08R', true],
    ['2AwlJjazxf', 'Axa2Jzfwlj', true],
    ['5bBYStnGRJ', 'GbR5tBnJYS', true],
    ['1LoiK8GH9B', 'ioBKG198HL', true],
    ['5ENpp5BXNT', 'TpNBp5EX5N', true],
    ['MHGbdSCszV', 'GHbzSCsMVd', true],
    ['7JkqV3V7NW', 'kW7J7VqNV3', true],
  ])('isPermutation(%s, %s) return %s', (lhs, rhs, expected) => {
    const result = checkPermutation(lhs, rhs);
    expect(result).toBe(expected);
  });
});
