import { timeRequiredToBuy } from '../src/2073.js';
import { generateTestName } from './util.js';

describe('2073. Time Needed to Buy Tickets', () => {
  [
    [[2, 3, 2], 2, 6],
    [[5, 1, 1, 1], 0, 8],
  ].forEach((args) => {
    const [tickets, k, expected] = args;
    test(generateTestName(timeRequiredToBuy, ...args), () => {
      const result = timeRequiredToBuy(tickets, k);
      expect(result).toBe(expected);
    });
  });
});
