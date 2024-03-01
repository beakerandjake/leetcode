import { defangIPaddr } from '../src/1108.js';
import { arrToStr } from './util.js';

describe('1108. Defanging an IP Address', () => {
  [
    ['1.1.1.1', '1[.]1[.]1[.]1'],
    ['255.100.50.0', '255[.]100[.]50[.]0'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = defangIPaddr(input);
      expect(result).toBe(expected);
    });
  });
});
