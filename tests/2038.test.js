import { winnerOfGame } from '../src/2038.js';
import { generateTestName } from './util.js';

describe('2038. Remove Colored Pieces if Both Neighbors are the Same Color', () => {
  [
    ['AAABABB', true],
    ['AA', false],
    ['ABBBBBBBAAA', false],
    ['AAAAABBB', true],
    ['AAAABBBB', false],
  ].forEach((args) => {
    const [colors, expected] = args;
    test(generateTestName(winnerOfGame, ...args), () => {
      const result = winnerOfGame(colors);
      expect(result).toBe(expected);
    });
  });
});
