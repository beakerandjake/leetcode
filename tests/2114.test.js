import { mostWordsFound } from '../src/2114.js';

describe('2114. Maximum Number of Words Found in Sentences', () => {
  [
    [
      ['alice and bob love leetcode', 'i think so too', 'this is great thanks very much'],
      6,
    ],
    [['please wait', 'continue to fight', 'continue to win'], 3],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = mostWordsFound(input);
      expect(result).toBe(expected);
    });
  });
});
