/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 */

const pascalsMemoized = () => {
  const memo = new Map();
  const pascals = (level, index) => {
    if (level <= 1 || index <= 0 || index >= level) {
      return 1;
    }
    const hash = `${level}_${index}`;
    if (!memo.has(hash)) {
      memo.set(hash, pascals(level - 1, index - 1) + pascals(level - 1, index));
    }
    return memo.get(hash);
  };
  return pascals;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
export const getRow = (rowIndex) => {
  const pascals = pascalsMemoized();
  const row = [];
  for (let i = 0; i <= rowIndex; i++) {
    row.push(pascals(rowIndex, i));
  }
  return row;
};
