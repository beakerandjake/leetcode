/**
 * Given a binary tree
 *
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 *
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
export const connect = (root) => {
  if (!root) {
    return null;
  }
  const queue = [{ node: root, level: 0 }];
  let currentLevel = -1;
  let previous;
  while (queue.length) {
    const { node, level } = queue.shift();

    if (currentLevel !== level) {
      previous = null;
      currentLevel = level;
    } else if (previous) {
      previous.next = node;
    }

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
    previous = node;
  }
  return root;
};
