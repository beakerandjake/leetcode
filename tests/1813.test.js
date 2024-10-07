import { areSentencesSimilar } from '../src/1813.js';
import { generateTestName } from './util.js';

describe('1813. Sentence Similarity III', () => {
  [
    ['My name is Haley', 'My Haley', true],
    ['of', 'A lot of words', false],
    ['Eating right now', 'Eating', true],
    [
      'IfYgEidlr a QG kUqlcd J',
      'IfYgEidlr xFi a B QG kUqlcd J HVbknBM ngNyvJo efrpY',
      false,
    ],
  ].forEach((args) => {
    const [sentence1, sentence2, expected] = args;
    test(generateTestName(areSentencesSimilar, ...args), () => {
      const result = areSentencesSimilar(sentence1, sentence2);
      expect(result).toBe(expected);
    });
  });
});
