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

export const rotateMatrix = (matrix) => withCopy(matrix);
