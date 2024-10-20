import { parseBoolExpr } from '../src/1106.js';
import { generateTestName } from './util.js';

describe('1106. Parsing A Boolean Expression', () => {
  [
    ['&(|(f))', false],
    ['|(f,f,f,t)', true],
    ['!(&(f,t))', true],
  ].forEach((args) => {
    const [expression, expected] = args;
    test(generateTestName(parseBoolExpr, ...args), () => {
      const result = parseBoolExpr(expression);
      expect(result).toBe(expected);
    });
  });
});
