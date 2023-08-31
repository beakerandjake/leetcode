// returns a zeroed out 2d array with n columns and m rows.
const buildMatrix = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

/**
 * Returns the maximum value of the items which will fit in the knapsack given the maximum total capacity.
 * @param {any[]} items
 * @param {Number} capacity
 */
export const knapsack = (items, capacity) => {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array.');
  }
  if (!Number.isFinite(capacity)) {
    throw new TypeError('capacity must be a number.');
  }
  if (!items.length || capacity <= 0) {
    return 0;
  }

  const matrix = buildMatrix(items.length + 1, capacity + 1);

  for (let i = 1; i <= items.length; i++) {
    const item = items[i - 1];
    for (let j = 1; j <= capacity; j++) {
      if (item.weight > j) {
        matrix[i][j] = matrix[i - 1][j];
      } else {
        matrix[i][j] = Math.max(
          matrix[i - 1][j],
          item.value + matrix[i - 1][j - item.weight]
        );
      }
    }
  }

  return matrix[items.length][capacity];
};
