/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 */

const topDown = (costs) => {
  const memo = new Map();
  const recurse = (index) => {
    if (index <= 1) {
      return costs[index];
    }
    if (!memo.has(index)) {
      memo.set(index, costs[index] + Math.min(recurse(index - 1), recurse(index - 2)));
    }
    return memo.get(index);
  };
  return Math.min(recurse(costs.length - 1), recurse(costs.length - 2));
};

// const bottomUp = (costs) => {
//   const history = [costs[0], costs[1]];
//   for (let i = 2; i < costs.length; i++) {
//     history[i] = Math.min(history[i - 1], costs[i] + history[i - 2]);
//   }
//   console.log(history);
//   return history[history.length - 1];
// };

/**
 * @param {number[]} cost
 * @return {number}
 */
export const minCostClimbingStairs = topDown;
