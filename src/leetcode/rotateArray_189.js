/* eslint-disable no-param-reassign */

/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

const withBuffer = (array, k) => {
  if (array.length <= 1) {
    return;
  }

  const buffer = [];
  const shiftCount = k % array.length;

  for (let i = array.length - shiftCount; i < array.length; i++) {
    buffer.push(array[i]);
  }

  for (let i = 0; i < array.length - shiftCount; i++) {
    buffer.push(array[i]);
  }

  buffer.forEach((x, i) => {
    array[i] = x;
  });
};

const simple = (array, k) => {
  if (array.length <= 1) {
    return;
  }

  const slideElements = () => {
    for (let i = array.length - 1; i > 0; i--) {
      array[i] = array[i - 1];
    }
  };

  const shiftCount = k % array.length;
  for (let i = 0; i < shiftCount; i++) {
    const store = array[array.length - 1];
    slideElements();
    array[0] = store;
  }
};

const handFlipCopy = (array, k) => {
  if (array.length <= 1) {
    return;
  }

  const mid = array.length - (k % array.length);
  const leftHand = array.slice(0, mid).reverse();
  const rightHand = array.slice(mid, array.length).reverse();
  const toReturn = [...leftHand, ...rightHand].reverse();
  toReturn.forEach((x, i) => {
    array[i] = x;
  });
};

const handFlipNoCopy = (array, k) => {
  if (array.length <= 1) {
    return;
  }

  const reverseSlice = (start, end) => {
    if (start === end) {
      return;
    }
    const flips = Math.floor((end - start) / 2);
    let temp;
    for (let i = 0; i < flips; i++) {
      temp = array[i + start];
      array[i + start] = array[end - 1 - i];
      array[end - 1 - i] = temp;
    }
  };

  const mid = array.length - (k % array.length);
  reverseSlice(0, mid);
  reverseSlice(mid, array.length);
  reverseSlice(0, array.length);
};

const simple2 = (array, k) => {
  const minShift = k % array.length;
  const indexes = array.map((_, i) => (i + minShift) % array.length);
  const copy = [...array];
  indexes.forEach((x, i) => {
    array[x] = copy[i];
  });
};

const shifting = (array, k) => {
  if (array.length <= 1) {
    return;
  }

  const kMod = k % array.length;

  if (kMod === 0) {
    return;
  }

  let startIndex = 0;
  let numberShifted = 0;
  let currentIndex = 0;
  let current = array[currentIndex];
  while (numberShifted++ < array.length) {
    const newIndex = (currentIndex + kMod) % array.length;
    const temp = array[newIndex];
    array[newIndex] = current;
    current = temp;
    currentIndex = newIndex;

    if (newIndex === startIndex) {
      startIndex++;
      currentIndex = startIndex;
      current = array[currentIndex];
    }
  }
};

/**
 * @param {number[]} array
 * @param {number} k
 * @return {void} Do not return anything, modify array in-place instead.
 */
export const rotate = handFlipNoCopy;
