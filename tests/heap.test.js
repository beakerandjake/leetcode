import { insert } from '../src/heap.js';

describe('insert()', () => {
  test('empty heap - element inserted at index 1', () => {
    const toInsert = 10;
    const heap = insert([], toInsert);
    expect(heap).toEqual([undefined, toInsert]);
  });
});
