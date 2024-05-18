/**
 * You are given the root of a binary tree with n nodes where each node in the tree
 * has node.val coins. There are n coins in total throughout the whole tree.
 *
 * In one move, we may choose two adjacent nodes and move one coin from one node to
 * another. A move may be from parent to child, or from child to parent.
 *
 * Return the minimum number of moves required to make every node have exactly one
 * coin.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/01/18/tree1.png]
 *
 *
 * Input: root = [3,0,0]
 * Output: 2
 * Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2019/01/18/tree2.png]
 *
 *
 * Input: root = [0,3,0]
 * Output: 3
 * Explanation: From the left child of the root, we move two coins to the root [taking two moves]. Then, we move one coin from the root of the tree to the right child.
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is n.
 *  * 1 <= n <= 100
 *  * 0 <= Node.val <= n
 *  * The sum of all Node.val is n.
 *
 *
 *
 * https://leetcode.com/problems/distribute-coins-in-binary-tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// creates a new state holding the coins and moves.
const state = (coins, moves) => [coins, moves];

// returns the number of coins in a state.
const coins = (s) => s[0];

// returns the number of moves in a state.
const moves = (s) => s[1];

const distribute = (node) => {
  if (!node) {
    return state(0, 0);
  }
  // post order traversal, figure out leaves first.
  const left = distribute(node.left);
  const right = distribute(node.right);
  // offer parent all of the coins available in our subtree save 1 which we keep for ourself.
  const newCoins = coins(left) + coins(right) + node.val - 1;
  // account for moves made by subtree plus the moves needed by this node.
  const newMoves = Math.abs(newCoins) + moves(left) + moves(right);
  return state(newCoins, newMoves);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const distributeCoins = (root) => moves(distribute(root));
