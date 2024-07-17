/**
 * Given the root of a binary tree, each node in the tree has a distinct value.
 *
 * After deleting all nodes with a value in to_delete, we are left with a forest (a
 * disjoint union of trees).
 *
 * Return the roots of the trees in the remaining forest. You may return the result
 * in any order.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/07/01/screen-shot-2019-07-01-at-53836-pm.png]
 *
 *
 * Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
 * Output: [[1,2,null,4],[6],[7]]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,4,null,3], to_delete = [3]
 * Output: [[1,2,4]]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the given tree is at most 1000.
 *  * Each node has a distinct value between 1 and 1000.
 *  * to_delete.length <= 1000
 *  * to_delete contains distinct values between 1 and 1000.
 *
 *
 *
 * https://leetcode.com/problems/delete-nodes-and-return-forest
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// iterate which traverses the tree in post order
// eslint-disable-next-line func-style
function* postOrder(root) {
  if (!root) {
    return;
  }
  yield* postOrder(root.left);
  yield* postOrder(root.right);
  yield root;
}

// returns a new array containing all of the non null/undefined elements from the original array.
const nonEmpty = (arr) => arr.filter((x) => x != null);

// returns an array of children of the node (if any)
const children = (node) => nonEmpty([node.left, node.right]);

/**
 * @param {TreeNode} root
 * @param {number[]} toDelete
 * @return {TreeNode[]}
 */
export const delNodes = (root, toDelete) => {
  const result = [];
  const deleteSet = new Set(toDelete);
  // iterate in post order so children are processed before being deleted
  for (const node of postOrder(root)) {
    // delete left child if marked for delete, adding its children to the forest.
    if (deleteSet.has(node.left?.val)) {
      result.push(...children(node.left));
      node.left = null;
    }
    // delete right child if marked for delete, adding its children to the forest.
    if (deleteSet.has(node.right?.val)) {
      result.push(...children(node.right));
      node.right = null;
    }
  }
  // add roots children to the forest if root is marked for delete, otherwise just add root to forest.
  return deleteSet.has(root.val) ? [...result, ...children(root)] : [...result, root];
};
