/**
 * You are given a positive integer array skill of even length n where skill[i]
 * denotes the skill of the ith player. Divide the players into n / 2 teams of size
 * 2 such that the total skill of each team is equal.
 *
 * The chemistry of a team is equal to the product of the skills of the players on
 * that team.
 *
 * Return the sum of the chemistry of all the teams, or return -1 if there is no
 * way to divide the players into teams such that the total skill of each team is
 * equal.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: skill = [3,2,5,1,3,4]
 * Output: 22
 * Explanation:
 * Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
 * The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.
 *
 *
 * Example 2:
 *
 *
 * Input: skill = [3,4]
 * Output: 12
 * Explanation:
 * The two players form a team with a total skill of 7.
 * The chemistry of the team is 3 * 4 = 12.
 *
 *
 * Example 3:
 *
 *
 * Input: skill = [1,1,2,3]
 * Output: -1
 * Explanation:
 * There is no way to divide the players into teams such that the total skill of each team is equal.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= skill.length <= 105
 *  * skill.length is even.
 *  * 1 <= skill[i] <= 1000
 *
 *
 *
 * https://leetcode.com/problems/divide-players-into-teams-of-equal-skill
 */

// returns a copy of the array sorted in ascending order
const toSorted = (arr) => [...arr].sort((a, b) => a - b);

// yields pairs from either end of the array moving towards the center pair.
const oppositePairs = function* (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    yield [arr[left++], arr[right--]];
  }
};

// returns the skill of the team
const skill = ([a, b]) => a + b;

// returns the chemistry of the team
const chemistry = ([a, b]) => a * b;

/**
 * @param {number[]} skills
 * @return {number}
 */
export const dividePlayers = (skills) => {
  let result = 0;
  const sorted = toSorted(skills);
  const target = sorted[0] + sorted.at(-1);
  for (const team of oppositePairs(sorted)) {
    if (skill(team) !== target) {
      return -1;
    }
    result += chemistry(team);
  }
  return result;
};
