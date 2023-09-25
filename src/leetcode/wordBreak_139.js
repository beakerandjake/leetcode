/**
 * Given a string s and a dictionary of strings wordDict,
 * return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

const topDown = (str, words) => {
  const wordLookup = new Set(words);
  const memo = new Map();

  const recursive = (strIndex) => {
    if (strIndex === str.length) {
      return false;
    }

    if (!memo.has(strIndex)) {
      let result = false;

      if (wordLookup.has(str.slice(strIndex))) {
        result = true;
      } else {
        for (let i = strIndex; i < str.length; i++) {
          const slice = str.slice(strIndex, i + 1);
          if (wordLookup.has(slice) && recursive(i + 1)) {
            result = true;
            break;
          }
        }
      }

      memo.set(strIndex, result);
    }

    return memo.get(strIndex);
  };

  return recursive(0);
};

// 'leetcode'
// ['leet', 'code']
//
// i = 1 j = 0 l
// dp = [true, false, false, false, false, false, false, false, false]
// i = 2 j = 0 le
// i = 2 j = 1  e
// dp = [true, false, false, false, false, false, false, false, false]
// i = 3 j = 0 lee
// i = 3 j = 1  ee
// i = 3 j = 2   e
// dp = [true, false, false, false, false, false, false, false, false]
// i = 4 j = 0 leet
// match
// dp = [true, false, false, false, true, false, false, false, false]
//
// i = 5 j = 0 leetc
// i = 5 j = 1  eetc
// i = 5 j = 2   etc
// i = 5 j = 3    tc
// i = 5 j = 4     c
// dp = [true, false, false, false, true, false, false, false, false]
// i = 6 j = 0 leetco
// i = 6 j = 1  eetco
// i = 6 j = 2   etco
// i = 6 j = 3    tco
// i = 6 j = 4     co
// i = 6 j = 5      o
// dp = [true, false, false, false, true, false, false, false, false]
// i = 7 j = 0 leetcod
// i = 7 j = 1  eetcod
// i = 7 j = 2   etcod
// i = 7 j = 3    tcod
// i = 7 j = 4     cod
// i = 7 j = 5      od
// i = 7 j = 6       d
// dp = [true, false, false, false, true, false, false, false, false]
// i = 8 j = 0 leetcode
// i = 8 j = 1  eetcode
// i = 8 j = 2   etcode
// i = 8 j = 3    tcode
// i = 8 j = 4     code
// match
// dp = [true, false, false, false, true, false, false, false, true]

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
export const wordBreak = topDown;
