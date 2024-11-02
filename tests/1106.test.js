import { parseBoolExpr } from '../src/1106.js';
import { generateTestName } from './util.js';

describe('1106. Parsing A Boolean Expression', () => {
  [
    ['t', true],
    ['f', false],
    ['!(t)', false],
    ['!(f)', true],
    ['&(t,t)', true],
    ['&(t,f)', false],
    ['&(f,f)', false],
    ['|(t,t)', true],
    ['|(t,f)', true],
    ['|(f,f)', false],
    ['&(&(t,t),&(t,t))', true],
    ['&(|(f))', false],
    ['|(f,f,f,t)', true],
    ['!(&(f,t))', true],
    ['&(&(t,t),|(t,f))', true],
  ].forEach((args) => {
    const [expression, expected] = args;
    test(generateTestName(parseBoolExpr, ...args), () => {
      const result = parseBoolExpr(expression);
      expect(result).toBe(expected);
    });
  });
});
