import { maxHeap, minHeap } from '../../src/dataStructures/heap.js';

const populateHeap = (heap, priorities) => {
  priorities.forEach((priority, index) => heap.push(index, priority));
  return heap;
};

const prioritiesToString = (priorities) => `[${priorities.join(', ')}]`;

const min = (priorities) => {
  const toReturn = Math.min(...priorities);
  return Number.isFinite(toReturn) ? toReturn : undefined;
};

const max = (priorities) => {
  const toReturn = Math.max(...priorities);
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
        expect(heap.peek()?.priority).toBe(expected);
      });
    });
  });
});

describe('max heap', () => {
  describe('push()', () => {
    [
      [[], 3],
      [[3], 5],
      [[3, 5], 22],
      [[3, 5, 22], 28],
      [[3, 5, 22, 28], 6],
      [[3, 5, 22, 28, 6], 44],
      [[3, 5, 22, 28, 6, 44], 19],
      [[3, 5, 22, 28, 6, 44, 19], 57],
      [[3, 5, 22, 28, 6, 44, 19, 57], 88],
      [[3, 5, 22, 28, 6, 44, 19, 57, 88], 17],
      [[3, 5, 22, 28, 6, 44, 19, 57, 88, 17], 122],
    ].forEach(([priorities, toAdd]) => {
      const heapString = prioritiesToString(priorities);
      const expected = max([...priorities, toAdd]);
      test(`heap: ${heapString}, add: ${toAdd}, returns: ${expected}`, () => {
        const heap = populateHeap(maxHeap(), priorities);
        heap.push(priorities.length, toAdd);
        expect(heap.peek().priority).toBe(expected);
      });
    });
  });

  describe('peek()', () => {
    [
      [],
      [3, 5],
      [3, 5, 22],
      [3, 5, 22, 28],
      [3, 5, 22, 28, 6],
      [3, 5, 22, 28, 6, 44],
      [3, 5, 22, 28, 6, 44, 19],
      [3, 5, 22, 28, 6, 44, 19, 57],
      [3, 5, 22, 28, 6, 44, 19, 57, 88],
      [3, 5, 22, 28, 6, 44, 19, 57, 88, 17, 122],
    ].forEach((priorities) => {
      const heapString = prioritiesToString(priorities);
      const expected = max(priorities);
      test(`heap: ${heapString}, returns: ${expected}`, () => {
        const heap = populateHeap(maxHeap(), priorities);
        expect(heap.peek()?.priority).toBe(expected);
      });
    });
  });

  describe('pop()', () => {
    [
      [],
      [3],
      [3, 5],
      [3, 5, 6],
      [3, 5, 6, 19],
      [3, 5, 22, 6, 19],
      [3, 5, 22, 28, 6, 19],
      [3, 5, 22, 28, 6, 44, 19],
      [3, 5, 22, 28, 6, 44, 19, 57],
      [3, 5, 22, 28, 6, 44, 19, 57, 88],
      [3, 5, 22, 28, 6, 44, 19, 57, 88, 17, 122],
    ].forEach((priorities) => {
      const heapString = prioritiesToString(priorities);
      const expected = max(priorities);
      test(`heap: ${heapString}, returns: ${expected}`, () => {
        const heap = populateHeap(maxHeap(), priorities);
        expect(heap.pop()?.priority).toBe(expected);
      });
    });
  });

  describe('update()', () => {
    [
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
      const expected = max(updatePriority(priorities, updateElement, newPriority));
      test(`heap: ${heapString}, update: ${updateElement} to: ${newPriority}, returns: ${expected}`, () => {
        const heap = populateHeap(maxHeap(), priorities);
        heap.update(updateElement, newPriority);
        expect(heap.peek()?.priority).toBe(expected);
      });
    });
  });
});
