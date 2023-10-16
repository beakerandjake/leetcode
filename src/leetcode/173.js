/**
 * Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
 *
 *     BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
 *     boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
 *     int next() Moves the pointer to the right, then returns the number at the pointer.
 *
 * Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.
 *
 * You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.
 */

const inOrder = (root, visitFn) => {
  if (!root) {
    return;
  }
  inOrder(root.left, visitFn);
  visitFn(root);
  inOrder(root.right, visitFn);
};

const getNodes = (root) => {
  const nodes = [];
  inOrder(root, (node) => {
    nodes.push(node);
  });
  return nodes;
};

/**
 * @param {TreeNode} root
 */
export class BSTIterator {
  constructor(root) {
    this.nodes = getNodes(root);
    this.index = 0;
  }

  /**
   * @return {number}
   */
  next() {
    return this.nodes[this.index++].val;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.index < this.nodes.length;
  }
}
