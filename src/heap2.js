/**
 * Base class for a Min or a Max heap.
 */
export class Heap {
  _items = [];
  _maxIndex = 0;

  constructor(items, compareFn) {
    this._compareFn = compareFn;
    items.forEach((item) => this.push(item));
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
   * Bubble the element down the heap until the heap property is satisfied.
   */
  _bubbleDown = (index) => {
    let currentIndex = index;
    while (currentIndex <= this._maxIndex) {
      let swapIndex = currentIndex;

      const left = Heap._leftChild(currentIndex);
      if (left <= this._maxIndex && this._compare(swapIndex, left)) {
        swapIndex = left;
      }

      const right = Heap._rightChild(currentIndex);
      if (right <= this._maxIndex && this._compare(swapIndex, right)) {
        swapIndex = right;
      }

      if (swapIndex === currentIndex) {
        break;
      }

      this._swap(currentIndex, swapIndex);
      currentIndex = swapIndex;
    }
  };

  /**
   * Returns the head element of the heap.
   */
  peek = () => {
    if (this._maxIndex === 0) {
      return undefined;
    }
    return this._items[1];
  };

  /**
   * Adds a new element to the heap.
   */
  push(item) {
    this._maxIndex += 1;
    this._items[this._maxIndex] = item;
    this._bubbleUp(this._maxIndex);
  }

  /**
   * Removes the head element from the heap and returns it.
   */
  pop() {
    if (this._maxIndex === 0) {
      return undefined;
    }
    const popped = this._items[1];

    this._maxIndex -= 1;
    this._items[1] = popped;
    this._bubbleDown(1);

    return popped;
  }

  update = (item, newPriority) => {
    const index = this._items.indexOf(item);

    if (index < 1) {
      return false;
    }

    // update the priority of the node.
    const oldPriority = this._items[index];
    this._items[index] = newPriority;

    // move the node up or down the heap to satisfy the heap property.
    if (this._compareFn(oldPriority, newPriority) < 0) {
      this._bubbleUp(index);
    } else {
      this._bubbleDown(index);
    }

    return true;
  };
}

/**
 * Comparison function which satisfies the max heap property.
 * @param {Number} lhs
 * @param {Number} rhs
 * @returns {Number} 0 if the values are equal, 1 if lhs should go "up", -1 if rhs should go "up"
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

/**
 * Returns a new max heap, which keeps the max element at the top of the heap.
 */
export const maxHeap = (items = []) => new Heap(items, maxHeapCompare);

/**
 * Comparison function which satisfies the min heap property.
 * @param {Number} lhs
 * @param {Number} rhs
 * @returns {Number} 0 if the values are equal, 1 if lhs should go "up", -1 if rhs should go "up"
 */
const minHeapCompare = (lhs, rhs) => {
  if (lhs < rhs) {
    return 1;
  }

  if (lhs > rhs) {
    return -1;
  }

  return 0;
};

/**
 * Returns a new min heap, which keeps the min element at the top of the heap.
 */
export const minHeap = (items = []) => new Heap(items, minHeapCompare);
