/**
 * Given an integer n, return the least number of perfect square numbers that sum to n.
 * A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 */

const perfectSquares = (n) => {
  const squares = [];
  let num = 1;
  let square = num * num;
  while (square <= n) {
    squares.push(square);
    num++;
    square = num * num;
  }
  return squares;
};

const topDown = (n) => {
  const squares = perfectSquares(n);
  const memo = new Map();
  const recurse = (remaining) => {
    if (remaining <= 1) {
      return remaining;
    }
    if (!memo.has(remaining)) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let i = 0; squares[i] <= remaining; i++) {
        min = Math.min(1 + recurse(remaining - squares[i]), min);
      }
      memo.set(remaining, min);
    }
    return memo.get(remaining);
  };
  return recurse(n, 0);
};

/**
 * @param {number} n
 * @return {number}
 */
export const numSquares = (n) => {
  const squares = perfectSquares(n);
  const dp = [...Array(squares.length + 1)].map(() => Array(n + 1).fill(0));
  dp[1] = dp[1].map((_, i) => i);
  for (let y = 2; y < dp.length; y++) {
    const square = squares[y - 1];
    for (let x = 1; x <= n; x++) {
      if (square > x) {
        dp[y][x] = dp[y - 1][x];
      } else {
        dp[y][x] = Math.min(dp[y][x - square] + 1, dp[y - 1][x]);
      }
    }
  }
  return dp.at(-1).at(-1);
};
