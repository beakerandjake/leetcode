/**
 * You have n jobs and m workers. You are given three arrays: difficulty, profit,
 * and worker where:
 *
 *  * difficulty[i] and profit[i] are the difficulty and the profit of the ith job,
 *    and
 *  * worker[j] is the ability of jth worker (i.e., the jth worker can only
 *    complete a job with difficulty at most worker[j]).
 *
 * Every worker can be assigned at most one job, but one job can be completed
 * multiple times.
 *
 *  * For example, if three workers attempt the same job that pays $1, then the
 *    total profit will be $3. If a worker cannot complete any job, their profit is
 *    $0.
 *
 * Return the maximum profit we can achieve after assigning the workers to the
 * jobs.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
 * Output: 100
 * Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.
 *
 *
 * Example 2:
 *
 *
 * Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == difficulty.length
 *  * n == profit.length
 *  * m == worker.length
 *  * 1 <= n, m <= 104
 *  * 1 <= difficulty[i], profit[i], worker[i] <= 105
 *
 *
 *
 * https://leetcode.com/problems/most-profit-assigning-work
 */

// zips every item of equal length arrays a and b together.
const zip = (a, b) => a.map((x, i) => [x, b[i]]);

// returns the difficulty of a job
const difficulty = (job) => job[0];

// returns the profit of a job
const profit = (job) => job[1];

// sort fn which orders jobs by difficulty (asc), then by profit (desc)
const jobSortFn = (a, b) =>
  difficulty(a) === difficulty(b) ? profit(b) - profit(a) : difficulty(a) - difficulty(b);

// returns a fn that returns the max profit that can be achieved with the given ability.
const maxProfitIterator = (jobs) => {
  let index = 0;
  let max = 0;
  return (ability) => {
    while (index < jobs.length && difficulty(jobs[index]) <= ability) {
      max = Math.max(max, profit(jobs[index]));
      index++;
    }
    return max;
  };
};

// sort fn which orders workers by ability ascending.
const workerSortFn = (a, b) => a - b;

// returns the sum of all of the numbers in the array.
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

/**
 * @param {number[]} d
 * @param {number[]} p
 * @param {number[]} w
 * @return {number}
 */
export const maxProfitAssignment = (d, p, w) => {
  const maxProfit = maxProfitIterator(zip(d, p).sort(jobSortFn));
  return sum([...w].sort(workerSortFn).map(maxProfit));
};
