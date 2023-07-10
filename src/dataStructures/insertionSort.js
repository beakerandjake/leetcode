const swap = (array, lhsIndex, rhsIndex) => {
  const temp = array[lhsIndex];
  array[lhsIndex] = array[rhsIndex];
  array[rhsIndex] = temp;
};

/**
 * Sorts the items using insertion sort and returns the sorted array.
 * @param {Array} array
 */
export const insertionSort = (array) => {
  const toReturn = [...array];

  let index = 1;
  while (index < array.length) {
    let swapIndex = index - 1;
    while (swapIndex >= 0 && toReturn[swapIndex] > toReturn[swapIndex + 1]) {
      swap(toReturn, swapIndex, swapIndex + 1);
      swapIndex -= 1;
    }
    index += 1;
  }

  return toReturn;
};
