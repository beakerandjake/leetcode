/*
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

const bitCount = (array) => {
  let toReturn = 0;
  const { length } = array;
  const majority = Math.floor(length / 2);
  for (let bit = 0; bit < 32; bit++) {
    const mask = 1 << bit;
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (array[i] & mask) {
        count++;
      }
    }
    if (count > majority) {
      toReturn |= mask;
    }
  }
  return toReturn;
};

const sort = (array) => {
  const sorted = [...array].sort();
  return sorted[Math.floor(sorted.length / 2)];
};

const randomSample = (array) => {
  const majority = Math.floor(array.length / 2);
  const count = (value) =>
    array.reduce((total, element) => (value === element ? total + 1 : total), 0);
  for (;;) {
    const element = array[Math.floor(Math.random() * array.length)];
    if (count(element) > majority) {
      return element;
    }
  }
};

const voting = (array) => {
  let count = 0;
  let toReturn;

  array.forEach((x) => {
    if (!count) {
      toReturn = x;
    }
    count += x === toReturn ? 1 : -1;
  });

  return toReturn;
};

const recursive = (array) => {
  const count = (num, start, end) => {
    let toReturn = 0;
    for (let i = start; i <= end; i++) {
      if (array[i] === num) {
        toReturn += 1;
      }
    }
    return toReturn;
  };

  const solve = (start, end) => {
    if (start === end) {
      return array[start];
    }

    const center = Math.floor((end - start) / 2) + start;
    const left = solve(start, center);
    const right = solve(center + 1, end);

    if (left === right) {
      return left;
    }

    const leftCount = count(left, start, end);
    const rightCount = count(right, start, end);
    return leftCount > rightCount ? left : right;
  };

  return recursive(0, array.length - 1);
};

/**
 * @param {number[]} array
 * @return {number}
 */
export const majorityElement = sort;
