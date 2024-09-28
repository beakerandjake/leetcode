import { MyCircularDeque } from '../src/641.js';
import { generateTestName } from './util.js';

describe('641. Design Circular Deque', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(MyCircularDeque, ...args), () => {
      const result = MyCircularDeque();
      expect(result).toBe(expected);
    });
  });
});
