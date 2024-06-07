import { replaceWords } from '../src/648.js';
import { generateTestName } from './util.js';

describe('648. Replace Words', () => {
  [
    [
      ['cat', 'bat', 'rat'],
      'the cattle was rattled by the battery',
      'the cat was rat by the bat',
    ],
    [['a', 'b', 'c'], 'aadsfasf absbs bbab cadsfafs', 'a a b c'],
  ].forEach((args) => {
    const [dictionary, sentence, expected] = args;
    test(generateTestName(replaceWords, ...args), () => {
      const result = replaceWords(dictionary, sentence);
      expect(result).toBe(expected);
    });
  });
});
