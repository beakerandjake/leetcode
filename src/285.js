/**
 * Given the root of a binary search tree and a node p in it, return the in-order successor of that node in the BST.
 * If the given node has no in-order successor in the tree, return null.
 * The successor of a node p is the node with the smallest key greater than p.val.
 */

// const simple = (() => {
//   const inOrder = (root, arr) => {
//     if (!root) {
//       return arr;
//     }
//     return [...inOrder(root.left, arr), root, ...inOrder(root.right, arr)];
//   };

//   return (root, p) => inOrder(root, []).find((node) => node.val > p.val) || null;
// })();

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
export const inorderSuccessor = (root, p) => {
  let successor = null;
  let current = root;
  while (current) {
    if (p >= current.val) {
      current = current.right;
    } else {
      successor = current;
      current = current.left;
    }
  }
  return successor?.val || null;
};
