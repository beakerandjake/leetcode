import { AllOne } from '../src/432.js';
import { generateTestName } from './util.js';

describe('432. All O`one Data Structure', () => {
  [
    [
      ['inc', 'inc', 'getMaxKey', 'getMinKey', 'inc', 'getMaxKey', 'getMinKey'],
      ['hello', 'hello', undefined, undefined, 'leet', undefined, undefined],
      [undefined, undefined, 'hello', 'hello', undefined, 'hello', 'leet'],
    ],
  ].forEach((args) => {
    const [fns, inputs, expected] = args;
    test(generateTestName(AllOne, ...args), () => {
      const subject = new AllOne();
      fns.forEach((fn, i) => {
        const result = subject[fn](inputs[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
