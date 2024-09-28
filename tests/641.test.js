import { MyCircularDeque } from '../src/641.js';
import { generateTestName } from './util.js';

describe('641. Design Circular Deque', () => {
  [
    [
      3,
      [
        'insertLast',
        'insertLast',
        'insertFront',
        'insertFront',
        'getRear',
        'isFull',
        'deleteLast',
        'insertFront',
        'getFront',
      ],
      [1, 2, 3, 4, undefined, undefined, undefined, 4, undefined],
      [true, true, true, false, 2, true, true, true, 4],
    ],
  ].forEach((args) => {
    const [k, fns, input, expected] = args;
    test(generateTestName(MyCircularDeque, ...args), () => {
      const queue = new MyCircularDeque(k);
      fns.forEach((fn, i) => {
        const result = queue[fn](input[i]);
        console.log(`f:${fn}, i:${input[i]}, r:${result}, q:${[...queue.values()]}`);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
