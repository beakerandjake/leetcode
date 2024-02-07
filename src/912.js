/**
 * Given an array of integers nums, sort the array in ascending order and return
 * it.
 *
 * You must solve the problem without using any built-in functions in O(nlog(n))
 * time complexity and with the smallest space complexity possible.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * Explanation: Note that the values of nums are not necessairly unique.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 5 * 104
 *  * -5 * 104 <= nums[i] <= 5 * 104
 *
 *
 *
 * https://leetcode.com/problems/sort-an-array
 */

const mergeSort = (nums) => {
  const merge = (a, b) => {
    const merged = [];
    let aIndex = 0;
    let bIndex = 0;
    while (aIndex < a.length && bIndex < b.length) {
      merged.push(a[aIndex] < b[bIndex] ? a[aIndex++] : b[bIndex++]);
    }
    while (aIndex < a.length) {
      merged.push(a[aIndex++]);
    }
    while (bIndex < b.length) {
      merged.push(b[bIndex++]);
    }
    return merged;
  };
  const doMergeSort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = doMergeSort(arr.slice(0, middle));
    const right = doMergeSort(arr.slice(middle));
    return merge(left, right);
  };
  return doMergeSort(nums);
};

const selectionSort = (arr) => {
  const minFrom = (index) => {
    let minIndex = index;
    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  };

  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    const minIndex = minFrom(i);
    if (i !== minIndex) {
      swap(i, minIndex);
    }
  }
  return arr;
};

const insertionSort = (arr) => {
  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(j, j - 1);
      j--;
    }
  }
  return arr;
};

const quicksortSimple = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const quicksort = (arr) => {
    const pivot = Math.floor(Math.random() * arr.length);
    const lt = [];
    const gte = [];
    arr.forEach((x, i) => {
      if (i === pivot) {
        return;
      }
      if (x < arr[pivot]) {
        lt.push(x);
      } else {
        gte.push(x);
      }
    });

    return [...quicksortSimple(lt), arr[pivot], ...quicksortSimple(gte)];
  };

  return quicksort(nums);
};

const quicksortInPlace = (arr) => {
  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  const partition = (lo, hi) => {
    const pivotIndex = hi;
    let firstHi = lo;
    for (let i = lo; i < hi; i++) {
      if (arr[i] < arr[pivotIndex]) {
        swap(i, firstHi);
        firstHi++;
      }
    }
    swap(pivotIndex, firstHi);
    return firstHi;
  };

  const quicksort = (lo, hi) => {
    if (lo < hi) {
      const pivot = partition(lo, hi);
      quicksort(lo, pivot - 1);
      quicksort(pivot + 1, hi);
    }
  };

  quicksort(0, arr.length - 1);
  return arr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortArray = quicksortInPlace;
