/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 */

// const slow = (() => {
//   const contains = (root, value) => {
//     if (!root) {
//       return false;
//     }
//     if (root.val === value) {
//       return true;
//     }
//     return contains(root.left, value) || contains(root.right, value);
//   };

//   const recurse = (root, p, q) => {
//     if (!root) {
//       return null;
//     }

//     const pInLeft = contains(root.left, p);
//     const pInRight = contains(root.right, p);
//     const qInLeft = contains(root.left, q);
//     const qInRight = contains(root.right, q);

//     if (
//       (pInLeft && qInRight) ||
//       (pInRight && qInLeft) ||
//       (pInLeft && root.val === q) ||
//       (qInLeft && root.val === p) ||
//       (pInRight && root.val === q) ||
//       (qInRight && root.val === p)
//     ) {
//       return root;
//     }

//     return recurse(root.left, p, q) || recurse(root.right, p, q);
//   };

//   return recurse;
// })();

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export const lowestCommonAncestor = (root, p, q) => {
  if (!root) {
    return null;
  }
  if (root.val === p || root.val === q) {
    return root;
  }
  const inLeft = lowestCommonAncestor(root.left, p, q);
  const inRight = lowestCommonAncestor(root.right, p, q);
  return inLeft && inRight ? root : inLeft || inRight;
};
