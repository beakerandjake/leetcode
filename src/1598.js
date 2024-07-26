/**
 * The Leetcode file system keeps a log each time some user performs a change
 * folder operation.
 *
 * The operations are described below:
 *
 *  * "../" : Move to the parent folder of the current folder. (If you are already
 *    in the main folder, remain in the same folder).
 *  * "./" : Remain in the same folder.
 *  * "x/" : Move to the child folder named x (This folder is guaranteed to always
 *    exist).
 *
 * You are given a list of strings logs where logs[i] is the operation performed by
 * the user at the ith step.
 *
 * The file system starts in the main folder, then the operations in logs are
 * performed.
 *
 * Return the minimum number of operations needed to go back to the main folder
 * after the change folder operations.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/09/09/sample_11_1957.png]
 *
 *
 * Input: logs = ["d1/","d2/","../","d21/","./"]
 * Output: 2
 * Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/09/09/sample_22_1957.png]
 *
 *
 * Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
 * Output: 3
 *
 *
 * Example 3:
 *
 *
 * Input: logs = ["d1/","../","../","../"]
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= logs.length <= 103
 *  * 2 <= logs[i].length <= 10
 *  * logs[i] contains lowercase English letters, digits, '.', and '/'.
 *  * logs[i] follows the format described in the statement.
 *  * Folder names consist of lowercase English letters and digits.
 *
 *
 *
 * https://leetcode.com/problems/crawler-log-folder
 */

const parse = (command) => {
  const parentDir = (level) => Math.max(level - 1, 0);

  const currentDir = (level) => level;

  const childDir = (level) => level + 1;

  const commandMap = new Map([
    [(x) => x === '../', parentDir],
    [(x) => x === './', currentDir],
    [(x) => /^\w+\/$/.test(x), childDir],
  ]);

  for (const [predicate, fn] of commandMap) {
    if (predicate(command)) {
      return fn;
    }
  }
  throw new Error(`unable to parse command: '${command}'`);
};

/**
 * @param {string[]} logs
 * @return {number}
 */
export const minOperations = (logs) =>
  logs.reduce((dir, command) => parse(command)(dir), 0);
