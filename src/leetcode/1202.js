/**
 * You are given a string s, and an array of pairs of indices in the
 * string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the
 * string.
 *
 * You can swap the characters at any pair of indices in the given pairs any number
 * of times.
 *
 * Return the lexicographically smallest string that s can be changed to after
 * using the swaps.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "dcab", pairs = [[0,3],[1,2]]
 * Output: "bacd"
 * Explaination:
 * Swap s[0] and s[3], s = "bcad"
 * Swap s[1] and s[2], s = "bacd"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
 * Output: "abcd"
 * Explaination:
 * Swap s[0] and s[3], s = "bcad"
 * Swap s[0] and s[2], s = "acbd"
 * Swap s[1] and s[2], s = "abcd"
 *
 * Example 3:
 *
 *
 * Input: s = "cba", pairs = [[0,1],[1,2]]
 * Output: "abc"
 * Explaination:
 * Swap s[0] and s[1], s = "bca"
 * Swap s[1] and s[2], s = "bac"
 * Swap s[0] and s[1], s = "abc"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 10^5
 *  * 0 <= pairs.length <= 10^5
 *  * 0 <= pairs[i][0], pairs[i][1] < s.length
 *  * s only contains lower case English letters.
 *
 *
 *
 * https://leetcode.com/problems/smallest-string-with-swaps
 */

class DisjointSet {
  constructor(n) {
    this.nodes = [...Array(n)].map((_, i) => i);
  }

  find(x) {
    return this.nodes[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      for (let i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i] === rootY) {
          this.nodes[i] = rootX;
        }
      }
    }
  }

  roots() {
    return [...new Set(this.nodes)];
  }
}

const toUnion = (n, pairs) =>
  pairs.reduce((acc, [from, to]) => {
    acc.union(from, to);
    return acc;
  }, new DisjointSet(n));

const toLookup = (str, disjointSet) => {
  const lookup = new Map();
  for (let i = 0; i < str.length; i++) {
    const root = disjointSet.find(i);
    if (!lookup.has(root)) {
      lookup.set(root, [str[i]]);
    } else {
      lookup.get(root).push(str[i]);
    }
  }

  // now that chars are grouped, sort them descending
  lookup.forEach((value) => {
    value.sort().reverse();
  });

  return lookup;
};

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
export const smallestStringWithSwaps = (s, pairs) => {
  const set = toUnion(s.length, pairs);
  // if all chars are connected, just sort the string.
  if (set.roots().length === 1) {
    return [...s].sort().join('');
  }
  const lookup = toLookup(s, set);
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const root = set.find(i);
    result.push(lookup.get(root).pop());
  }
  return result.join('');
};
