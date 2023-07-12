/* eslint-disable no-param-reassign */

const reverse = (array) => {
  const mid = Math.floor(array.length / 2);
  let end = array.length - 1;
  for (let index = 0; index < mid; index++, end--) {
    const tmp = array[index];
    array[index] = array[end];
    array[end] = tmp;
  }
};

const getValue = (matrix, [y, x]) => matrix[y][x];

const setValue = (matrix, [y, x], value) => {
  matrix[y][x] = value;
};

const swapPoints = (matrix, sourceIndex, destIndex) => {
  const sourceValue = getValue(matrix, sourceIndex);
  setValue(matrix, sourceIndex, getValue(matrix, destIndex));
  setValue(matrix, destIndex, sourceValue);
};

const pivot = (matrix, pY, pX) => {
  let numSwaps = pX;
  let sX = pX - 1;
  let sY = pY + 1;
  while (numSwaps--) {
    swapPoints(matrix, [pY, sX--], [sY++, pX]);
  }
};

const inPlace = (matrix) => {
  if (matrix.length <= 1) {
    return matrix;
  }

  let pY = 0;
  let pX = matrix.length;

  while (--pX) {
    pivot(matrix, pY, pX);
    pY++;
  }

  reverse(matrix);
  return matrix;
};

const withCopy = (matrix) => {
  const copy = matrix.map((row) => [...row]);
  for (let y = 0; y < matrix.length; y++) {
    const destX = matrix.length - y - 1;
    for (let x = 0; x < matrix.length; x++) {
      copy[x][destX] = matrix[y][x];
    }
  }
  return copy;
};

export const rotateMatrix = (matrix) => inPlace(matrix);
