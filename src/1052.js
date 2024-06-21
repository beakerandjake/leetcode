/**
 * There is a bookstore owner that has a store open for n minutes. Every minute,
 * some number of customers enter the store. You are given an integer array
 * customers of length n where customers[i] is the number of the customer that
 * enters the store at the start of the ith minute and all those customers leave
 * after the end of that minute.
 *
 * On some minutes, the bookstore owner is grumpy. You are given a binary array
 * grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith
 * minute, and is 0 otherwise.
 *
 * When the bookstore owner is grumpy, the customers of that minute are not
 * satisfied, otherwise, they are satisfied.
 *
 * The bookstore owner knows a secret technique to keep themselves not grumpy for
 * minutes consecutive minutes, but can only use it once.
 *
 * Return the maximum number of customers that can be satisfied throughout the day.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
 * Output: 16
 * Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes.
 * The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
 *
 *
 * Example 2:
 *
 *
 * Input: customers = [1], grumpy = [0], minutes = 1
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == customers.length == grumpy.length
 *  * 1 <= minutes <= n <= 2 * 104
 *  * 0 <= customers[i] <= 1000
 *  * grumpy[i] is either 0 or 1.
 *
 *
 *
 * https://leetcode.com/problems/grumpy-bookstore-owner
 */

const usingDp = (customers, grumpy, minutes) => {
  const memo = new Map();

  const satisfied = (minute) => (!grumpy[minute] ? customers[minute] : 0);

  const dp = (minute, streak) => {
    if (minute >= customers.length) {
      return 0;
    }
    const hash = `${minute}_${streak}`;
    if (!memo.has(hash)) {
      let result;
      // if not currently using the technique
      if (streak == null) {
        result = Math.max(
          // start a streak here
          customers[minute] + dp(minute + 1, minutes - 1),
          // do not start the streak here
          satisfied(minute) + dp(minute + 1, null),
        );
      } else {
        // if already inside the streak then keep it going
        result =
          streak > 0
            ? customers[minute] + dp(minute + 1, streak - 1)
            : satisfied(minute) + dp(minute + 1, 0);
      }
      memo.set(hash, result);
    }
    return memo.get(hash);
  };

  return dp(0, null);
};

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
export const maxSatisfied = (customers, grumpy, minutes) => {
  //returns the sum of all of the numbers in the array
  const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);
  // returns an array where each index contains the sum i and the next 'length - 1' numbers.
  const rollingSums = (arr, length) => arr.map((_, i) => sum(arr.slice(i, i + length)));

  // leave only the minutes with satisfied customers, with unsatisfied zeroed out
  const satisfied = customers.map((x, i) => (!grumpy[i] ? x : 0));
  // leave only the minutes with unsatisfied customers, with satisfied zeroed out
  const unsatisfied = customers.map((x, i) => (grumpy[i] ? x : 0));

  // find the best possible window to use the technique
  return sum(satisfied) + Math.max(...rollingSums(unsatisfied, minutes));
};
