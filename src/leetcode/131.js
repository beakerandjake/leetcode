/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 */

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left++] !== str[right--]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
export const partition = (s) => {
  const partitions = [];
  const chars = [...s];
  const recurse = (current, start) => {
    if (start >= chars.length) {
      partitions.push([...current]);
      return;
    }
    for (let i = start; i < chars.length; i++) {
      const slice = chars.slice(start, i + 1).join('');
      if (isPalindrome(slice)) {
        current.push(slice);
        recurse(current, i + 1);
        current.pop();
      }
    }
  };
  recurse([], 0);
  return partitions;
};
