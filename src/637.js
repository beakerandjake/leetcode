/**
 * Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.
 * Answers within 10-5 of the actual answer will be accepted.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const simple = (root) => {
  const average = (arr) =>
    arr.length === 0 ? 0 : arr.reduce((acc, x) => acc + x, 0) / arr.length;

  const queue = [{ node: root, level: 0 }];
  const toReturn = [];
  while (queue.length) {
    const { node, level } = queue.pop();

    if (!toReturn[level]) {
      toReturn[level] = [node.val];
    } else {
      toReturn[level].push(node.val);
    }

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }
  return toReturn.map(average);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const averageOfLevels = (root) => {
  const queue = [root];
  const toReturn = [];
  while (queue.length) {
    const levelCount = queue.length;
    let remaining = queue.length;
    let levelSum = 0;
    while (remaining--) {
      const node = queue.shift();
      levelSum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    toReturn.push(levelSum / levelCount);
  }
  return toReturn;
};
