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
 * Returns the max index of the heap.
 */
const maxIndex = (heap) => heap.length - 1;

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
const bubbleUp = (heap, index) => {
  let currentIndex = index;
  let parentIndex = parent(currentIndex);
  while (parentIndex >= 1 && heap[parentIndex] < heap[currentIndex]) {
    swap(heap, parentIndex, currentIndex);
    currentIndex = parentIndex;
    parentIndex = parent(currentIndex);
  }
};

/**
 * Bubble the element down the heap until the heap property is satisfied.
 * This method modifies the heap.
 */
const bubbleDown = (heap, index, lastIndex) => {
  let swapIndex = index;

  // compare node at index to its left and right child,
  // choose the node which satisfies the heap property.

  const leftChildIndex = leftChild(index);
  if (leftChildIndex <= lastIndex && heap[swapIndex] < heap[leftChildIndex]) {
    swapIndex = leftChildIndex;
  }

  const rightChildIndex = rightChild(index);
  if (rightChildIndex <= lastIndex && heap[swapIndex] < heap[rightChildIndex]) {
    swapIndex = rightChildIndex;
  }

  // if the current node isn't in the right spot swap it with whichever child satisfies the heap property.
  if (swapIndex !== index) {
    swap(heap, index, swapIndex);
  }

  return swapIndex;
};

/**
 * Returns the head element of the heap.
 */
export const peek = (heap) => heap[1];

/**
 * Adds a new element to the heap.
 * This method does not modify the heap but returns a new copy.
 */
export const push = (heap, item) => {
  // push item to end of heap
  const toReturn = heap.length ? [...heap, item] : [, item];
  bubbleUp(toReturn, maxIndex(toReturn));
  return toReturn;
};

/**
 * Removes the head element of the heap.
 * This method does not modify the heap but returns a new copy.
 * @param {*} heap
 * @returns
 */
export const pop = (heap) => {
  if (heap.length <= 2) {
    return [];
  }

  // remove the head node and promote the last node to the head.
  const toReturn = [...heap];
  toReturn[1] = toReturn.pop();

  const lastIndex = maxIndex(heap);
  let currentIndex = 1;

  // satisfy the heap property by bubbling the new head node down until its in the right spot.
  while (currentIndex <= lastIndex) {
    const swapIndex = bubbleDown(toReturn, currentIndex, lastIndex);
    // if current node satisfies heap property its in the right place.
    if (currentIndex === swapIndex) {
      break;
    }
    currentIndex = swapIndex;
  }

  return toReturn;
};

// update
