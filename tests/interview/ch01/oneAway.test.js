import { oneAway } from '../../../src/interview/ch01/oneAway.js';

describe('oneAway()', () => {
  test.each([
    [null, 'asdf', false],
    ['ab', 'abcd', false],
    ['abcd', 'cd', false],
    ['abcd', 'abcd', true],
    ['', 'a', true],
    ['pale', 'ple', true],
    ['pales', 'pale', true],
    ['pale', 'bale', true],
    ['pale', 'bake', false],
    ['aaaa', 'abbbb', true],
  ])('oneAway(%s, %s) = %s', (a, b, expected) => {
    const result = oneAway(a, b);
    expect(result).toBe(expected);
  });
});
