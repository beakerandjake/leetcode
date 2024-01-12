import { simplifyPath } from '../src/71.js';

describe('71. Simplify Path', () => {
  [
    ['/home/', '/home'],
    ['/../', '/'],
    ['/home//foo/', '/home/foo'],
    ['/a/./b/../../c/', '/c'],
    ['/../../../../../a', '/a'],
    ['/', '/'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = simplifyPath(input);
      expect(result).toBe(expected);
    });
  });
});
