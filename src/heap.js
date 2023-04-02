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
 * Swap elements in the heap, this operation modifies the heap.
 */
const swap = (heap, lhsIndex, rhsIndex) => {
  let temp = heap[lhsIndex];
  heap[lhsIndex] = heap[rhsIndex];
  heap[rhsIndex] = temp;
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

  // bubble up item to correct spot
  let currentIndex = toReturn.length - 1;
  let parentIndex = parent(currentIndex);
  while (parentIndex >= 1 && toReturn[parentIndex] < toReturn[currentIndex]) {
    swap(toReturn, parentIndex, currentIndex);
    currentIndex = parentIndex;
    parentIndex = parent(currentIndex);
  }

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
    let swapIndex = currentIndex;

    const leftChildIndex = leftChild(currentIndex);
    if (leftChildIndex <= lastIndex && toReturn[swapIndex] < heap[leftChildIndex]) {
      swapIndex = leftChildIndex;
    }

    const rightChildIndex = rightChild(currentIndex);
    if (rightChildIndex <= lastIndex && toReturn[swapIndex] < heap[rightChildIndex]) {
      swapIndex = rightChildIndex;
    }

    // if current node satisfies heap property it's in the right place.
    if (currentIndex === swapIndex) {
      break;
    }

    // swap the current node with whichever child satisfied the heap property.
    swap(toReturn, currentIndex, swapIndex);
    currentIndex = swapIndex;
  }

  return toReturn;
};
