const leftChild = (index) => index * 2;

const rightChild = (index) => index * 2 + 1;

const parent = (index) => Math.floor(index / 2);

const maximum = (heap) => heap[1];

const swap = (heap, lhsIndex, rhsIndex) => {
  let temp = heap[lhsIndex];
  heap[lhsIndex] = heap[rhsIndex];
  heap[lhsIndex] = temp;
};

export const insert = (heap, item) => {
  // push item to end of heap
  const toReturn = heap.length ? [...heap, item] : [, item];

  // bubble up item to correct spot
  let currentIndex = toReturn.length - 1;
  let parentIndex = parent(currentIndex);
  while (parentIndex >= 1 && heap[parentIndex] < heap[currentIndex]) {
    swap(heap, parentIndex, currentIndex);
    currentIndex = parentIndex;
    parentIndex = parent(currentIndex);
  }

  return toReturn;
};
