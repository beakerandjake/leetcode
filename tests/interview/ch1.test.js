import { checkPermutation, isUnique, urlify } from '../../src/interview/ch1.js';

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
    ['2AwflJjazxf', 'Axa2Jzffwlj', true],
    ['5bBYStnnGRJ', 'GnbR5tBnJYS', true],
    ['1Loi1K8GH19B', 'ioB1KG1981HL', true],
    ['5ENpp5BXNT', 'TpNBp5EX5N', true],
    ['MHGbdSCszV', 'GHbzSCsMVd', true],
    ['7JkqV3V7NW', 'kW7J7VqNV3', true],
    ['7JkqV3V7NW', 'kW7J7VqNV6', false],
  ])('isPermutation(%s, %s) return %s', (lhs, rhs, expected) => {
    const result = checkPermutation(lhs, rhs);
    expect(result).toBe(expected);
  });
});

describe('urlify()', () => {
  test.each([
    ['Mr John Smith    ', 13, 'Mr%20John%20Smith'],
    ['Cool John Smith    ', 15, 'Cool%20John%20Smith'],
  ])('urlify(%s, %s) return %s', (str, length, expected) => {
    const result = urlify(str, length);
    expect(result).toBe(expected);
  });
});
