/**
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const preOrder = (root, visitFn) => {
  if (!root) {
    visitFn(root);
    return;
  }
  visitFn(root);
  preOrder(root.left, visitFn);
  preOrder(root.right, visitFn);
};

const bstToArr = (root) => {
  const toReturn = [];
  preOrder(root, (node) => {
    toReturn.push(node !== null ? node.val : '');
  });
  return toReturn;
};

const arrToStr = (arr) => arr.join(',');

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
export const serialize = (root) => (root ? arrToStr(bstToArr(root)) : '');

const strToArr = (str) => str.split(',').map((x) => (x === '' ? null : Number(x)));

const arrToBst = (arr) => {
  let index = 0;
  const recurse = () => {
    const value = arr[index++];
    return value != null ? new TreeNode(value, recurse(), recurse()) : null;
  };
  return recurse();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
export const deserialize = (data) => (data?.length ? arrToBst(strToArr(data)) : null);
