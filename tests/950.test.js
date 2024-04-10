import { deckRevealedIncreasing } from '../src/950.js';
import { generateTestName } from './util.js';

describe('950. Reveal Cards In Increasing Order', () => {
  [
    [
      [17, 13, 11, 2, 3, 5, 7],
      [2, 13, 3, 11, 5, 17, 7],
    ],
    [
      [1, 1000],
      [1, 1000],
    ],
  ].forEach((args) => {
    const [deck, expected] = args;
    test(generateTestName(deckRevealedIncreasing, ...args), () => {
      const result = deckRevealedIncreasing(deck);
      expect(result).toEqual(expected);
    });
  });
});
