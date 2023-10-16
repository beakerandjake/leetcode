/**
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 
 * The binary tree has the following definition:
 *  *  struct Node {
 *    int val;
 *    Node *left;
 *    Node *right;
 *    Node *next;
 *  }
 
 * Populate each next pointer to point to its next right node. 
 * If there is no next right node, the next pointer should be set to NULL.
 * 
 * Initially, all next pointers are set to NULL.
 */

const levelOrder = (root) => {
  const toReturn = [];
  const queue = [{ node: root, level: 0 }];
  while (queue.length) {
    const { node, level } = queue.shift();
    if (!toReturn[level]) {
      toReturn[level] = [node];
    } else {
      toReturn[level].push(node);
    }
    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }
  return toReturn;
};

const connectLevel = (level) =>
  level.forEach((node, i) => {
    // eslint-disable-next-line no-param-reassign
    node.next = level[i + 1] || null;
  });

/**
 * @param {Node} root
 * @return {Node}
 */
export const connect = (root) => {
  if (!root) {
    return null;
  }
  levelOrder(root).forEach(connectLevel);
  return root;
};
