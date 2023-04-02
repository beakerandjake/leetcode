import * as heapBase from './heap.js';

const lessThan = (lhs, rhs) => lhs < rhs;

export const push = (heap, item) => heapBase.push(heap, item, lessThan);

export const pop = (heap) => heapBase.pop(heap, lessThan);

export const peek = (heap) => heapBase.peek(heap);

export const update = (heap, index, priority) =>
  heapBase.update(heap, index, priority, lessThan);
