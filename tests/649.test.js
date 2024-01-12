import { predictPartyVictory } from '../src/649.js';

describe('649. Dota2 Senate', () => {
  [
    ['RD', 'Radiant'],
    ['RDD', 'Dire'],
    ['DRRDRDRDRDDRDRDR', 'Radiant'],
    ['DDRRR', 'Dire'],
    [
      'RDRDRDDRDRDRDRDRRDRDRDRDRDRDDDDRRDRDRDRDRDRDRDRRRRRDRDRDRDRDDDDDRDRDRDRDRDRDRDRRDRDRDRDRDRDRRDRDRDRDRDRDRDRDRRDRDRDRDRDRRD',
      'Radiant',
    ],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = predictPartyVictory(input);
      expect(result).toBe(expected);
    });
  });
});
