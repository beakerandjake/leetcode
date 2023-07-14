import { removeDups } from '../../../src/interview/ch02/removeDups.js';

const toList = (arr) => {};

describe('removeDups()', () => {
  test.each([[null, null]])('removeDups(%s) = %s', (list, expected) => {
    const result = removeDups(list);
    expect(result).toBe(expected);
  });
});
