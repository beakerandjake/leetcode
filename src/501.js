/**
 * Given the root of a binary search tree (BST) with duplicates, return all the
 * mode(s) [https://en.wikipedia.org/wiki/Mode_(statistics)] (i.e., the most
 * frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
 *
 * Assume a BST is defined as follows:
 *
 *  * The left subtree of a node contains only nodes with keys less than or equal
 *    to the node's key.
 *  * The right subtree of a node contains only nodes with keys greater than or
 *    equal to the node's key.
 *  * Both the left and right subtrees must also be binary search trees.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/03/11/mode-tree.jpg]
 *
 *
 * Input: root = [1,null,2,2]
 * Output: [2]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [0]
 * Output: [0]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 104].
 *  * -105 <= Node.val <= 105
 *
 *
 *
 * Follow up: Could you do that without using any extra space? (Assume that the
 * implicit stack space incurred due to recursion does not count).
 *
 *
 *
 * https://leetcode.com/problems/find-mode-in-binary-search-tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const usingHashMap = (() => {
  // performs in order traversal of the tree and invokes the visitFn for each node.
  const inOrder = (root, visitFn) => {
    if (!root) {
      return;
    }
    inOrder(root.left, visitFn);
    visitFn(root.val);
    inOrder(root.right, visitFn);
  };

  // converts the bst to an array
  const toArray = (root) => {
    const toReturn = [];
    inOrder(root, (val) => {
      toReturn.push(val);
    });
    return toReturn;
  };

  // maps each element of the array to the number of times it occurs.
  const frequencyCounts = (arr) =>
    arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  // returns an array containing the modes of the array.
  const modes = (arr) => {
    const toReturn = [];
    const counts = frequencyCounts(arr);
    const max = Math.max(...counts.values());
    for (const [key, count] of counts) {
      if (count === max) {
        toReturn.push(key);
      }
    }
    return toReturn;
  };

  return (root) => modes(toArray(root));
})();

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const findMode = usingHashMap;
