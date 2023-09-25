/**
 * Given two strings text1 and text2, return the length of their longest common subsequence.
 * If there is no common subsequence, return 0.
 *
 * A subsequence of a string is a new string generated from the original string with some characters (can be none)
 * deleted without changing the relative order of the remaining characters.
 *
 *     For example, "ace" is a subsequence of "abcde".
 *
 * A common subsequence of two strings is a subsequence that is common to both strings.
 */

// const topDown = (a, b) => {
//   const aLength = a.length;
//   const bLength = b.length;
//   const memo = new Map();
//   const recursive = (aIndex, bIndex) => {
//     if (aIndex === aLength) {
//       return 0;
//     }
//     if (bIndex === bLength) {
//       return 0;
//     }
//     const hash = `${aIndex}_${bIndex}`;
//     if (!memo.has(hash)) {
//       const result =
//         a[aIndex] === b[bIndex]
//           ? 1 + recursive(aIndex + 1, bIndex + 1)
//           : Math.max(recursive(aIndex, bIndex + 1), recursive(aIndex + 1, bIndex));
//       memo.set(hash, result);
//     }
//     return memo.get(hash);
//   };
//   return recursive(0, 0);
// };

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
export const longestCommonSubsequence = (a, b) => {
  const aLength = a.length + 1;
  const bLength = b.length + 1;
  const history = [...Array(aLength)].map(() => Array(bLength).fill(0));
  for (let aIndex = 1; aIndex < aLength; aIndex++) {
    for (let bIndex = 1; bIndex < bLength; bIndex++) {
      if (a[aIndex - 1] === b[bIndex - 1]) {
        history[aIndex][bIndex] = 1 + history[aIndex - 1][bIndex - 1];
      } else {
        history[aIndex][bIndex] = Math.max(
          history[aIndex - 1][bIndex],
          history[aIndex][bIndex - 1]
        );
      }
    }
  }
  return history[aLength - 1][bLength - 1];
};
