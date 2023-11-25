/**
 * Given two strings word1 and word2, return the minimum number of operations
 * required to convert word1 to word2.
 *
 * You have the following three operations permitted on a word:
 *
 *  * Insert a character
 *  * Delete a character
 *  * Replace a character
 *
 *
 *
 * Example 1:
 *
 *
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation:
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 *
 *
 * Example 2:
 *
 *
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= word1.length, word2.length <= 500
 *  * word1 and word2 consist of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/edit-distance
 */

// const splice = (str, index) => {
//   const chars = [...str];
//   chars.splice(index, 1);
//   return chars.join('');
// };

// const replace = (str, index, value) => {
//   const chars = [...str];
//   chars[index] = value;
//   return chars.join('');
// };

// const insert = (str, index, value) => {
//   const chars = [...str];
//   return [...chars.slice(0, index), value, ...chars.slice(index)].join('');
// };

// const longestSubSequence = (word1, word2) => {
//   if (!word1 && word2) {
//     return word2.length;
//   }
//   if (!word2 && word1) {
//     return word1.length;
//   }
//   if (word1 === word2) {
//     return 0;
//   }

//   const dp = [...Array(word2.length + 1)].map(() => Array(word1.length + 1).fill(0));
//   for (let y = 1; y <= word2.length; y++) {
//     for (let x = 1; x <= word1.length; x++) {
//       if (word2[y - 1] === word1[x - 1]) {
//         dp[y][x] = dp[y - 1][x - 1] + 1;
//       } else {
//         dp[y][x] = Math.max(dp[y - 1][x], dp[y][x - 1]);
//       }
//     }
//   }

//   console.log(dp.map((row) => row.join(',')).join('\n'));
//   const distance = Math.abs(word1.length - dp[word2.length][word1.length]);

//   return Math.abs(word1.length - dp[word2.length][word1.length]);
// };

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
export const minDistance = (word1, word2) => {
  if (!word1 && word2) {
    return word2.length;
  }
  if (!word2 && word1) {
    return word1.length;
  }
  if (word1 === word2) {
    return 0;
  }

  const dp = [...Array(word2.length + 1)].map(() => Array(word1.length + 1).fill(1));
  dp[0][0] = 0
  for (let y = 1; y <= word2.length; y++) {
    for (let x = 1; x <= word1.length; x++) {
      if (word2[y - 1] === word1[x - 1]) {
        dp[y][x] = dp[y - 1][x - 1];
      } else {
        dp[y][x] = Math.min(dp[y - 1][x], dp[y][x - 1], dp[y - 1][x - 1]) + 1;
      }
    }
  }

  console.log(dp.map((row) => row.join(',')).join('\n'));
  // return Math.abs(word1.length - dp[word2.length][word1.length]);
  return dp[word2.length][word1.length];

  // return word1.length === word2.length
  //   ? dp[word2.length][word1.length]
  //   : dp[word2.length][word1.length] + 1;
};
