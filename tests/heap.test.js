import { minHeap } from '../src/heap.js';

const populateHeap = (heap, priorities) => {
  priorities.forEach((priority, index) => heap.push(index, priority));
  return heap;
};

const prioritiesToString = (priorities) => `[${priorities.join(', ')}]`;

const min = (priorities) => {
  const toReturn = Math.min(...priorities);
  return Number.isFinite(toReturn) ? toReturn : undefined;
};

const updatePriority = (priorities, index, newValue) => {
  const toReturn = [...priorities];
  toReturn[index] = newValue;
  return toReturn;
};

describe('min heap', () => {
  describe('push()', () => {
    [
      [[], 3],
      [[122], 88],
      [[122, 88], 67],
      [[122, 88, 67], 245],
      [[122, 88, 67, 245], 44],
      [[122, 88, 67, 245, 44], 98],
      [[122, 88, 67, 245, 44, 98], 56],
      [[122, 88, 67, 245, 44, 98, 56], 37],
      [[122, 88, 67, 245, 44, 98, 56, 37], 22],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22], 18],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 5],
    ].forEach(([priorities, toAdd]) => {
      const heapString = prioritiesToString(priorities);
      const expected = min([...priorities, toAdd]);
      test(`heap: ${heapString}, add: ${toAdd}, returns: ${expected}`, () => {
        const heap = populateHeap(minHeap(), priorities);
        heap.push(priorities.length, toAdd);
        expect(heap.peek().priority).toBe(expected);
      });
    });
  });

  describe('peek()', () => {
    [
      [],
      [122],
      [122, 88],
      [122, 88, 67],
      [122, 88, 67, 245],
      [122, 88, 67, 245, 44],
      [122, 88, 67, 245, 44, 98],
      [122, 88, 67, 245, 44, 98, 56],
      [122, 88, 67, 245, 44, 98, 56, 37],
      [122, 88, 67, 245, 44, 98, 56, 37, 22],
      [122, 88, 67, 245, 44, 98, 56, 37, 22, 18],
    ].forEach((priorities) => {
      const heapString = prioritiesToString(priorities);
      const expected = min(priorities);
      test(`heap: ${heapString}, returns: ${expected}`, () => {
        const heap = populateHeap(minHeap(), priorities);
        expect(heap.peek()?.priority).toBe(expected);
      });
    });
  });

  describe('pop()', () => {
    [
      [],
      [3],
      [122, 88],
      [122, 88, 67],
      [122, 88, 67, 245],
      [122, 88, 44, 67, 245],
      [122, 88, 44, 67, 245, 98],
      [122, 88, 44, 67, 245, 98, 22],
      [122, 88, 67, 245, 44, 98, 56, 37],
      [122, 88, 16, 245, 44, 98, 56, 37, 22],
      [122, 88, 67, 245, 44, 98, 56, 37, 22, 18],
      [122, 88, 67, 245, 44, 4, 98, 56, 37, 22, 18],
    ].forEach((priorities) => {
      const heapString = prioritiesToString(priorities);
      const expected = min(priorities);
      test(`heap: ${heapString}, returns: ${expected}`, () => {
        const heap = populateHeap(minHeap(), priorities);
        expect(heap.pop()?.priority).toBe(expected);
      });
    });
  });

  describe('update()', () => {
    [
      // [[], 6, 7],
      [[3], 0, 5],
      [[122, 88], 1, 23],
      [[122, 88, 67], 0, 188],
      [[122, 88, 67, 245], 1, 10],
      [[122, 88, 44, 67, 245], 4, 15],
      [[122, 88, 44, 67, 245, 98], 2, 78],
      [[122, 88, 44, 67, 245, 98, 22], 3, 21],
      [[122, 88, 67, 245, 44, 98, 56, 37], 5, 477],
      [[122, 88, 16, 245, 44, 98, 56, 37, 22], 8, 4],
      [[122, 88, 67, 245, 44, 98, 56, 37, 22, 18], 3, 97],
      [[122, 88, 67, 245, 44, 4, 98, 56, 37, 22, 18], 5, 282],
    ].forEach(([priorities, updateElement, newPriority]) => {
      const heapString = prioritiesToString(priorities);
      const expected = min(updatePriority(priorities, updateElement, newPriority));
      test(`heap: ${heapString}, update: ${updateElement} to: ${newPriority}, returns: ${expected}`, () => {
        const heap = populateHeap(minHeap(), priorities);
        heap.update(updateElement, newPriority);
        console.log('after', heap);
        expect(heap.peek()?.priority).toBe(expected);
      });
    });
  });
});

describe('max heap', () => {
  
});
