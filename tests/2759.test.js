import { jsonParse } from '../src/2759.js';
import { generateTestName } from './util.js';

describe('1160. Find Words That Can Be Formed by Characters', () => {
  [
    ['{"a":2,"b":[1,2,3]}', { a: 2, b: [1, 2, 3] }],
    ['true', true],
    ['[1,5,"false",{"a":2}]', [1, 5, 'false', { a: 2 }]],
    ['null', null],
    ['-500', -500]
  ].forEach((args) => {
    const [str, expected] = args;
    test(generateTestName(jsonParse, ...args), () => {
      const result = jsonParse(str);
      expect(result).toEqual(expected);
    });
  });
});
