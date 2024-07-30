import { sortPeople } from '../src/2418.js';
import { generateTestName } from './util.js';

describe('2418. Sort the People', () => {
  [
    [
      ['Mary', 'John', 'Emma'],
      [180, 165, 170],
      ['Mary', 'Emma', 'John'],
    ],
    [
      ['Alice', 'Bob', 'Bob'],
      [155, 185, 150],
      ['Bob', 'Alice', 'Bob'],
    ],
  ].forEach((args) => {
    const [names, heights, expected] = args;
    test(generateTestName(sortPeople, ...args), () => {
      const result = sortPeople(names, heights);
      expect(result).toEqual(expected);
    });
  });
});
