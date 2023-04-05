/**
 * Returns the index which corresponds to the nodes left child.
 */
const leftChild = (index) => index * 2;

/**
 * Returns the index which corresponds to the nodes right child.
 */
const rightChild = (index) => index * 2 + 1;

/**
 * Returns the index of the nodes parent.
 */
const parent = (index) => Math.floor(index / 2);

/**
 * Swap elements in the heap.
 * This method modifies the heap.
 */
const swap = (heap, lhsIndex, rhsIndex) => {
  let temp = heap[lhsIndex];
  heap[lhsIndex] = heap[rhsIndex];
  heap[rhsIndex] = temp;
};

/**
 * Bubble the element up the heap until the heap property is satisfied.
 * This method modifies the heap.
 */
const bubbleUp = (heap, index, compareFn) => {
  let currentIndex = index;
  let parentIndex = parent(currentIndex);
  while (parentIndex >= 1 && compareFn(heap, parentIndex, currentIndex)) {
    swap(heap, parentIndex, currentIndex);
    currentIndex = parentIndex;
    parentIndex = parent(currentIndex);
  }
};

export class Heap {
  _items = [];
  _maxIndex = 0;

  constructor(compareFn) {
    this._compareFn = compareFn;
  }

  /**
   * Returns the index of the nodes left child.
   */
  static _leftChild = (index) => index * 2;

  /**
   * Returns the index of the nodes right child.
   */
  static _rightChild = (index) => index * 2 + 1;

  /**
   * Returns the index of the nodes parent.
   */
  static _parent = (index) => Math.floor(index / 2);

  /**
   * Compare the two items using the heap comparison function.
   */
  _compare = (lhsIndex, rhsIndex) =>
    this._compareFn(this._items[lhsIndex], this._items[rhsIndex]);

  /**
   * Swap elements in the heap.
   * This method modifies the heap.
   */
  _swap = (lhsIndex, rhsIndex) => {
    let temp = this._items[lhsIndex];
    this._items[lhsIndex] = this._items[rhsIndex];
    this._items[rhsIndex] = temp;
  };

  /**
   * Bubble the element up the heap until the heap property is satisfied.
   */
  _bubbleUp = (index) => {
    let currentIndex = index;
    let parentIndex = Heap._parent(currentIndex);
    while (parentIndex >= 1 && this._compare(parentIndex, currentIndex) < 0) {
      this._swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Heap._parent(currentIndex);
    }
  };

  /**
   * Adds a new element to the heap.
   */
  push(item) {
    this._maxIndex += 1;
    this._items[this._maxIndex] = item;
    this._bubbleUp(this._maxIndex);
  }

  pop() {
    if (this._maxIndex === 0) {
      return null;
    }

    this._items[1] = this._items.pop();
    bubbleDown(toReturn, 1);
  }

  /**
   * Returns the head element of the heap.
   */
  peek = () => {
    if (this._maxIndex === 0) {
      return undefined;
    }
    return this._items[1];
  };
}

/**
 * Max heap comparison function.
 * @param  {any} a     First element
 * @param  {any} b     Second element
 * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
 */

/**
 * Comparison function which satisfies the max heap property.
 * @param {Number} lhs
 * @param {Number} rhs
 * @returns {Number} 0 if the values are equal, 1 if lhs should go "down", -1 if lhs should go "up"
 */
const maxHeapCompare = (lhs, rhs) => {
  if (lhs < rhs) {
    return -1;
  }

  if (lhs > rhs) {
    return 1;
  }

  return 0;
};

export class MaxHeap extends Heap {
  constructor() {
    super(maxHeapCompare);
  }
}
