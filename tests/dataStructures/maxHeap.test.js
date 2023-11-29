import { MaxHeap } from '../../src/dataStructures/maxHeap.js';
import { arrToStr } from '../util.js';

const arrToHeap = (arr) =>
  arr.reduce((acc, x) => {
    acc.insert(x);
    return acc;
  }, new MaxHeap());

describe('MaxHeap', () => {
  describe('insert()', () => {
    [
      [[], 122, 122],
      [[122], 88, 122],
      [[122, 88], 67, 122],
      [[122, 88, 67], 245, 245],
      [[122, 88, 67, 245], 44, 245],
      [[122, 88, 67, 245, 44], 98, 245],
      [[122, 88, 67, 245, 44, 98], 56, 245],
      [[122, 88, 67, 245, 44, 98, 56], 37, 245],
      [[122, 88, 67, 245, 44, 98, 56, 37], 22, 245],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22], 18, 245],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 377, 377],
    ].forEach(([items, toAdd, expected]) => {
      test(`${arrToStr(items)} insert:${toAdd} -> max:${expected}`, () => {
        const heap = arrToHeap(items);
        heap.insert(toAdd);
        expect(heap.findMax()).toBe(expected);
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
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 377, 11],
    ].forEach(([items, toAdd, expected]) => {
      test(`${arrToStr(items)} insert:${toAdd} -> size:${expected}`, () => {
        const heap = arrToHeap(items);
        heap.insert(toAdd);
        expect(heap.size).toBe(expected);
      });
    });
  });

  describe('findMax()', () => {
    [
      [[], undefined],
      [[2], 2],
      [[2, 88], 88],
      [[2, 88, 67], 88],
      [[2, 88, 67, 245], 245],
      [[2, 88, 67, 245, 44], 245],
      [[2, 88, 67, 245, 44, 98], 245],
      [[2, 88, 67, 245, 44, 98, 56], 245],
      [[2, 88, 67, 245, 44, 98, 56, 37], 245],
      [[2, 88, 67, 245, 44, 98, 56, 37, 22], 245],
      [[2, 88, 67, 245, 44, 98, 56, 37, 22, 377], 377],
    ].forEach(([items, expected]) => {
      test(`${arrToStr(items)} -> ${expected}`, () => {
        const heap = arrToHeap(items);
        const result = heap.findMax();
        expect(result).toBe(expected);
      });
    });
  });

  describe('deleteMax()', () => {
    [
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 245],
      [[122, 88, 67, 44, 98, 56, 37, 22, 18], 122],
      [[88, 67, 44, 98, 56, 37, 22, 18], 98],
      [[88, 67, 44, 56, 37, 22, 18], 88],
      [[67, 44, 56, 37, 22, 18], 67],
      [[44, 56, 37, 22, 18], 56],
      [[44, 37, 22, 18], 44],
      [[37, 22, 18], 37],
      [[22, 18], 22],
      [[18], 18],
      [[], undefined],
    ].forEach(([items, expected]) => {
      test(`${arrToStr(items)} -> max:${expected}`, () => {
        const heap = arrToHeap(items);
        const result = heap.deleteMax();
        expect(result).toBe(expected);
      });
    });

    [
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 9],
      [[122, 88, 67, 44, 98, 56, 37, 22, 18], 8],
      [[88, 67, 44, 98, 56, 37, 22, 18], 7],
      [[88, 67, 44, 56, 37, 22, 18], 6],
      [[67, 44, 56, 37, 22, 18], 5],
      [[44, 56, 37, 22, 18], 4],
      [[44, 37, 22, 18], 3],
      [[37, 22, 18], 2],
      [[22, 18], 1],
      [[18], 0],
      [[], 0],
    ].forEach(([items, size]) => {
      test(`${arrToStr(items)} -> new size:${size}`, () => {
        const heap = arrToHeap(items);
        heap.deleteMax();
        expect(heap.size).toBe(size);
      });
    });

    describe('called multiple times', () => {
      [
        [[], [undefined]],
        [[122], [122]],
        [
          [122, 88],
          [122, 88],
        ],
        [
          [122, 88, 67],
          [122, 88, 67],
        ],
        [
          [122, 88, 67, 245],
          [245, 122, 88, 67],
        ],
        [
          [122, 88, 67, 245, 44],
          [245, 122, 88, 67, 44],
        ],
        [
          [122, 88, 67, 245, 44, 98],
          [245, 122, 98, 88, 67, 44],
        ],
        [
          [122, 88, 67, 245, 44, 98, 56],
          [245, 122, 98, 88, 67, 56, 44],
        ],
        [
          [122, 88, 67, 245, 44, 98, 56, 37],
          [245, 122, 98, 88, 67, 56, 44, 37],
        ],
        [
          [122, 88, 67, 245, 44, 98, 56, 37, 22],
          [245, 122, 98, 88, 67, 56, 44, 37, 22],
        ],
        [
          [122, 88, 67, 245, 44, 98, 56, 37, 22, 18],
          [245, 122, 98, 88, 67, 56, 44, 37, 22, 18],
        ],
      ].forEach(([items, expected]) => {
        test(`${arrToStr(items)} -> ${arrToStr(expected)}`, () => {
          const heap = arrToHeap(items);
          const results = items.map(() => heap.deleteMax());
          expect(results).toEqual(expected);
        });
      });
    });
  });
});
