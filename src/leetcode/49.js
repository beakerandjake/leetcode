/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

const hash = (str) => [...str].sort().join('');

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = (words) => {
  const map = words.reduce((acc, x) => {
    const hashed = hash(x);
    if (!acc.has(hashed)) {
      acc.set(hashed, [x]);
    } else {
      acc.get(hashed).push(x);
    }
    return acc;
  }, new Map());
  return [...map.values()];
};
