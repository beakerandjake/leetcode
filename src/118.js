/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 */

const memoizedPascals = () => {
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
  return (level, index) => pascals(level, index);
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
export const generate = (numRows) => {
  const pascalsFn = memoizedPascals();
  const toReturn = [];
  for (let depth = 0; depth < numRows; depth++) {
    const level = [];
    for (let i = 0; i <= depth; i++) {
      level.push(pascalsFn(depth, i));
    }
    toReturn.push(level);
  }
  return toReturn;
};
