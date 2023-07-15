/* eslint-disable no-param-reassign */

const rowHasZero = (matrix, y) => matrix[y].some((value) => value === 0);

const colHasZero = (matrix, x) => matrix.some((row) => row[x] === 0);

const zeroOutCol = (matrix, x) => {
  for (let y = 0; y < matrix.length; y++) {
    matrix[y][x] = 0;
  }
};

const zeroOutRow = (row) => {
  for (let x = 0; x < row.length; x++) {
    row[x] = 0;
  }
};

const noExtraStorage = (matrix) => {
  const [height, width] = [matrix.length, matrix[0].length];
  const zeroLookupRow = rowHasZero(matrix, 0);
  const zeroLookupCol = colHasZero(matrix, 0);

  // build the lookup row/col.
  for (let y = 1; y < height; y++) {
    for (let x = 1; x < width; x++) {
      if (matrix[y][x] === 0) {
        matrix[0][x] = 0;
        matrix[x][0] = 0;
      }
    }
  }

  // walk zero lookup row and zero out the cols.
  for (let x = 0; x < width; x++) {
    if (matrix[0][x] === 0) {
      zeroOutCol(matrix, x);
    }
  }

  // walk zero lookup col and zero out the rows.
  for (let y = 0; y < height; y++) {
    if (matrix[y][0] === 0) {
      zeroOutRow(matrix[y]);
    }
  }

  // clean up the lookups if they originally contained a zero.

  if (zeroLookupRow) {
    zeroOutRow(matrix[0]);
  }

  if (zeroLookupCol) {
    zeroOutCol(matrix, 0);
  }

  console.log(matrix.map((row) => `[${row.join(', ')}]`, []).join('\n'));
  return matrix;
};

const getZeroLookup = (matrix) =>
  matrix.reduce(
    (acc, row, y) => {
      row.forEach((value, x) => {
        if (value === 0) {
          acc.rows.add(y);
          acc.cols.add(x);
        }
      });
      return acc;
    },
    {
      rows: new Set(),
      cols: new Set(),
    }
  );

const simple = (matrix) => {
  const [height, width] = [matrix.length, matrix[0].length];
  const zeroLookup = getZeroLookup(matrix);

  zeroLookup.cols.forEach((x) => {
    for (let y = 0; y < height; y++) {
      matrix[y][x] = 0;
    }
  });

  zeroLookup.rows.forEach((y) => {
    for (let x = 0; x < width; x++) {
      matrix[y][x] = 0;
    }
  });

  return matrix;
};

/**
 * [1, 2, 3]
 * [4, 0, 6]
 * [7, 8, 9]
 */
export const zeroMatrix = (matrix) => {
  if (!matrix || matrix.length === 0) {
    return matrix;
  }
  return simple(matrix);
};
