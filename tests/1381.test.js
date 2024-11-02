import { CustomStack } from '../src/1381.js';
import { generateTestName } from './util.js';

describe('1381. Design a Stack With Increment Operation', () => {
  [
    [
      3,
      [
        'push',
        'push',
        'pop',
        'push',
        'push',
        'push',
        'increment',
        'increment',
        'pop',
        'pop',
        'pop',
        'pop',
      ],
      [[1], [2], [], [2], [3], [4], [5, 100], [2, 100], [], [], [], []],
      [
        undefined,
        undefined,
        2,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        103,
        202,
        201,
        -1,
      ],
    ],
  ].forEach((args) => {
    const [maxSize, fns, inputs, expected] = args;
    test(generateTestName(CustomStack, ...args), () => {
      const subject = new CustomStack(maxSize);
      fns.forEach((fn, i) => {
        const result = subject[fn](...inputs[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
