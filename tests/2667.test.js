import { createHelloWorld } from '../src/2667.js';
import { arrToStr } from './util.js';

describe('2667. Create Hello World Function', () => {
  [
    [[], 'Hello World'],
    [[{}, null, 42], 'Hello World'],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = createHelloWorld(input)();
      expect(result).toBe(expected);
    });
  });
});
