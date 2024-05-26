/**
 * An attendance record for a student can be represented as a string where each
 * character signifies whether the student was absent, late, or present on that
 * day. The record only contains the following three characters:
 *
 *  * 'A': Absent.
 *  * 'L': Late.
 *  * 'P': Present.
 *
 * Any student is eligible for an attendance award if they meet both of the
 * following criteria:
 *
 *  * The student was absent ('A') for strictly fewer than 2 days total.
 *  * The student was never late ('L') for 3 or more consecutive days.
 *
 * Given an integer n, return the number of possible attendance records of length n
 * that make a student eligible for an attendance award. The answer may be very
 * large, so return it modulo 109 + 7.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 8
 * Explanation: There are 8 records with length 2 that are eligible for an award:
 * "PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
 * Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: 3
 *
 *
 * Example 3:
 *
 *
 * Input: n = 10101
 * Output: 183236316
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 105
 *
 *
 *
 * https://leetcode.com/problems/student-attendance-record-ii
 */

const fill = (depth, height, width, value) => {
  const fill2d = () => [...Array(height)].map(() => Array(width).fill(value));
  return [...Array(depth)].map(() => fill2d());
};

/**
 * @param {number} n
 * @return {number}
 */
export const checkRecord = (n) => {
  const mod = 10 ** 9 + 7;
  const memo = fill(n + 1, 2, 3, null);
  const dp = (day, absentCount, lateCount) => {
    if (absentCount > 1 || lateCount > 2) {
      return 0;
    }
    if (day >= n) {
      return 1;
    }

    if (memo[day][absentCount][lateCount] === null) {
      // be absent
      const absent = dp(day + 1, absentCount + 1, 0);
      // be present
      const present = dp(day + 1, absentCount, 0);
      // be late
      const late = dp(day + 1, absentCount, lateCount + 1);

      memo[day][absentCount][lateCount] = (absent + present + late) % mod;
    }

    return memo[day][absentCount][lateCount];
  };

  return dp(0, 0, 0);
};
