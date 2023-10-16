import { BSTIterator } from '../../src/leetcode/173.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util.js';
// ].forEach(([funcs, args, expected]) => {
//   const stack = new MinStack();
//   test(`${arrToStr(funcs)},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
//     funcs.forEach((func, i) => {
//       const result = stack[func](args[i]);
//       // console.log(`${func}(${args[i]}) -> ${result}, ${JSON.stringify(stack)}`);
//       expect(result).toBe(expected[i]);
//     });
//   });
// });

describe('173. Binary Search Tree Iterator', () => {
  [
    [
      [7, 3, 15, null, null, 9, 20],
      [
        'next',
        'next',
        'hasNext',
        'next',
        'hasNext',
        'next',
        'hasNext',
        'next',
        'hasNext',
      ],
      [3, 7, true, 9, true, 15, true, 20, false],
    ],
  ].forEach(([tree, funcs, expected]) => {
    test(`${arrToStr(tree)} -> ${expected}`, () => {
      const iterator = new BSTIterator(arrToBst(tree));
      funcs.forEach((func, i) => {
        const result = iterator[func]();
        expect(result).toBe(expected[i]);
      });
    });
  });
});
