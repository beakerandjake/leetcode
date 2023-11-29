import { MinHeap } from '../../src/dataStructures/minHeap.js';
import { arrToStr } from '../util.js';

const arrToHeap = (arr) =>
  arr.reduce((acc, x) => {
    acc.insert(x);
    return acc;
  }, new MinHeap());

describe('MinHeap', () => {
  describe('insert()', () => {
    [
      [[], 122, 122],
      [[122], 88, 88],
      [[122, 88], 67, 67],
      [[122, 88, 67], 245, 67],
      [[122, 88, 67, 245], 44, 44],
      [[122, 88, 67, 245, 44], 98, 44],
      [[122, 88, 67, 245, 44, 98], 56, 44],
      [[122, 88, 67, 245, 44, 98, 56], 37, 37],
      [[122, 88, 67, 245, 44, 98, 56, 37], 22, 22],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22], 18, 18],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 5, 5],
    ].forEach(([items, toAdd, expected]) => {
      test(`${arrToStr(items)} insert:${toAdd} -> min:${expected}`, () => {
        const heap = arrToHeap(items);
        heap.insert(toAdd);
        expect(heap.findMin()).toBe(expected);
      });
    });

    [
      [[], 122, 1],
      [[122], 88, 2],
      [[122, 88], 67, 3],
      [[122, 88, 67], 245, 4],
      [[122, 88, 67, 245], 44, 5],
      [[122, 88, 67, 245, 44], 98, 6],
      [[122, 88, 67, 245, 44, 98], 56, 7],
      [[122, 88, 67, 245, 44, 98, 56], 37, 8],
      [[122, 88, 67, 245, 44, 98, 56, 37], 22, 9],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22], 18, 10],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 5, 11],
    ].forEach(([items, toAdd, expected]) => {
      test(`${arrToStr(items)} insert:${toAdd} -> size:${expected}`, () => {
        const heap = arrToHeap(items);
        heap.insert(toAdd);
        expect(heap.size).toBe(expected);
      });
    });
  });

  describe('findMin()', () => {
    [
      [[], undefined],
      [[122], 122],
      [[122, 88], 88],
      [[122, 88, 67], 67],
      [[122, 88, 67, 245], 67],
      [[122, 88, 67, 245, 44], 44],
      [[122, 88, 67, 245, 44, 98], 44],
      [[122, 88, 67, 245, 44, 98, 56], 44],
      [[122, 88, 67, 245, 44, 98, 56, 37], 37],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22], 22],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 18],
    ].forEach(([items, expected]) => {
      test(`${arrToStr(items)} -> ${expected}`, () => {
        const heap = arrToHeap(items);
        const result = heap.findMin();
        expect(result).toBe(expected);
      });
    });
  });

  describe('deleteMin()', () => {
    [
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 18],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22], 22],
      [[122, 88, 67, 245, 44, 98, 56, 37], 37],
      [[122, 88, 67, 245, 44, 98, 56], 44],
      [[122, 88, 67, 245, 98, 56], 56],
      [[122, 88, 67, 245, 98], 67],
      [[122, 88, 245, 98], 88],
      [[122, 245, 98], 98],
      [[122, 245], 122],
      [[245], 245],
      [[], undefined],
    ].forEach(([items, expected]) => {
      test(`${arrToStr(items)} -> min:${expected}`, () => {
        const heap = arrToHeap(items);
        const result = heap.deleteMin();
        expect(result).toBe(expected);
      });
    });

    [
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 9],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22], 8],
      [[122, 88, 67, 245, 44, 98, 56, 37], 7],
      [[122, 88, 67, 245, 44, 98, 56], 6],
      [[122, 88, 67, 245, 98, 56], 5],
      [[122, 88, 67, 245, 98], 4],
      [[122, 88, 245, 98], 3],
      [[122, 245, 98], 2],
      [[122, 245], 1],
      [[245], 0],
      [[], 0],
    ].forEach(([items, size]) => {
      test(`${arrToStr(items)} -> new size:${size}`, () => {
        const heap = arrToHeap(items);
        heap.deleteMin();
        expect(heap.size).toBe(size);
      });
    });

    describe('called multiple times', () => {
      [
        [[], [undefined]],
        [[122], [122]],
        [
          [122, 88],
          [88, 122],
        ],
        [
          [122, 88, 67],
          [67, 88, 122],
        ],
        [
          [122, 88, 67, 245],
          [67, 88, 122, 245],
        ],
        [
          [122, 88, 67, 245, 44],
          [44, 67, 88, 122, 245],
        ],
        [
          [122, 88, 67, 245, 44, 98],
          [44, 67, 88, 98, 122, 245],
        ],
        [
          [122, 88, 67, 245, 44, 98, 56],
          [44, 56, 67, 88, 98, 122, 245],
        ],
        [
          [122, 88, 67, 245, 44, 98, 56, 37],
          [37, 44, 56, 67, 88, 98, 122, 245],
        ],
        [
          [122, 88, 67, 245, 44, 98, 56, 37, 22],
          [22, 37, 44, 56, 67, 88, 98, 122, 245],
        ],
        [
          [122, 88, 67, 245, 44, 98, 56, 37, 22, 18],
          [18, 22, 37, 44, 56, 67, 88, 98, 122, 245],
        ],
      ].forEach(([items, expected]) => {
        test(`${arrToStr(items)} -> ${arrToStr(expected)}`, () => {
          const heap = arrToHeap(items);
          const results = items.map(() => heap.deleteMin());
          expect(results).toEqual(expected);
        });
      });
    });
  });
});
