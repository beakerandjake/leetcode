/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 *
 *  The left subtree of a node contains only nodes with keys less than the node's key.
 *
 *  The right subtree of a node contains only nodes with keys greater than the node's key.
 *
 *  Both the left and right subtrees must also be binary search trees.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// const nodes = (root) => {
//   const valuesRecursive = (node, arr) => {
//     if (!node) {
//       return arr;
//     }
//     return [
//       ...arr,
//       node.val,
//       ...valuesRecursive(node.left, arr),
//       ...valuesRecursive(node.right, arr),
//     ];
//   };
//   return valuesRecursive(root, []);
// };

// const valid = (node) => {
//   if (!node) {
//     return true;
//   }
//   return (
//     nodes(node.left).every((x) => x < node.val) &&
//     nodes(node.right).every((x) => x > node.val) &&
//     valid(node.left) &&
//     valid(node.right)
//   );
// };

const inOrder = (root, arr) => {
  if (!root) {
    return arr;
  }
  return [...inOrder(root.left, arr), root.val, ...inOrder(root.right, arr)];
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBST = (root) => {
  const sorted = inOrder(root, []);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] <= sorted[i - 1]) {
      return false;
    }
  }
  return true;
};
