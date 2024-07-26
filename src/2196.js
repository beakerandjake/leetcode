/**
 * You are given a 2D integer array descriptions where descriptions[i] = [parenti,
 * childi, isLefti] indicates that parenti is the parent of childi in a binary tree
 * of unique values. Furthermore,
 *
 *  * If isLefti == 1, then childi is the left child of parenti.
 *  * If isLefti == 0, then childi is the right child of parenti.
 *
 * Construct the binary tree described by descriptions and return its root.
 *
 * The test cases will be generated such that the binary tree is valid.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2022/02/09/example1drawio.png]
 *
 *
 * Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
 * Output: [50,20,80,15,17,19]
 * Explanation: The root node is the node with value 50 since it has no parent.
 * The resulting binary tree is shown in the diagram.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2022/02/09/example2drawio.png]
 *
 *
 * Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
 * Output: [1,2,null,null,3,4]
 * Explanation: The root node is the node with value 1 since it has no parent.
 * The resulting binary tree is shown in the diagram.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= descriptions.length <= 104
 *  * descriptions[i].length == 3
 *  * 1 <= parenti, childi <= 105
 *  * 0 <= isLefti <= 1
 *  * The binary tree described by descriptions is valid.
 *
 *
 *
 * https://leetcode.com/problems/create-binary-tree-from-descriptions
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// returns the parent node key of the description.
const parent = (description) => description[0];

// returns the child node key of the description.
const child = (description) => description[1];

// returns true if the child is the left node, false if the child is the right node.
const isLeft = (description) => description[2];

// if a node with the key is present in the map it is returned
// otherwise a new node is created and added to the map, then the new node is returned.
const getOrInsert = (key, nodeMap) => {
  if (!nodeMap.has(key)) {
    nodeMap.set(key, new TreeNode(key));
  }
  return nodeMap.get(key);
};

// returns the key of the node which is not present in the child set.
const findRootNodeKey = (nodeMap, childSet) =>
  [...nodeMap.keys()].find((key) => !childSet.has(key));

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
export const createBinaryTree = (descriptions) => {
  const childSet = new Set();
  const nodeMap = new Map();

  for (const description of descriptions) {
    const childNode = getOrInsert(child(description), nodeMap);
    const parentNode = getOrInsert(parent(description), nodeMap);

    if (isLeft(description)) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }

    childSet.add(childNode.val);
  }
  return nodeMap.get(findRootNodeKey(nodeMap, childSet));
};
