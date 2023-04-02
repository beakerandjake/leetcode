import { josephusProblem } from '../src/josephusProblem.js';

describe('josephusProblem()', () => {
  test.each([
    [41, 3, 31],
    [41, 2, 19],
    [32, 9, 7],
    [14, 12, 8],
    [50, 31, 48],
    [3, 2, 3],
    [7, 7, 5],
  ])('%s people and skip %s, returns %s', (people, skip, expected) => {
    const result = josephusProblem(people, skip);
    expect(result).toBe(expected);
  });
});
