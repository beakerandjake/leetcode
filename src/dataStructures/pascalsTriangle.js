export const pascalsTriangle = (row, col) => {
  if (col === 0) {
    return 1;
  }
  if (col >= row) {
    return 1;
  }
  return pascalsTriangle(row - 1, col - 1) + pascalsTriangle(row - 1, col);
};
