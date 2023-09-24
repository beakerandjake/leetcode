/**
 * Given a string s and a dictionary of strings wordDict,
 * return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

// const topDown = (str, words) => {
//   const wordLookup = new Set(words);
//   const memo = new Map();

//   const recursive = (strIndex) => {
//     if (strIndex === str.length) {
//       return false;
//     }

//     if (!memo.has(strIndex)) {
//       let result = false;

//       if (wordLookup.has(str.slice(strIndex))) {
//         result = true;
//       } else {
//         for (let i = strIndex; i < str.length; i++) {
//           const slice = str.slice(strIndex, i + 1);
//           if (wordLookup.has(slice) && recursive(i + 1)) {
//             result = true;
//             break;
//           }
//         }
//       }

//       memo.set(strIndex, result);
//     }

//     return memo.get(strIndex);
//   };

//   return recursive(0);
// };

const bottomUp = (str, words) => {
  const wordLookup = new Set(words);
  const dp = [true, ...Array(str.length).fill(false)];
  for (let end = 1; end <= str.length; end++) {
    for (let start = 0; start < end; start++) {
      const slice = str.slice(start, end);
      if (dp[start] && wordLookup.has(slice)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[dp.length - 1];
};

/**
 * @param {string} str
 * @param {string[]} wordDict
 * @return {boolean}
 */
export const wordBreak = bottomUp;
