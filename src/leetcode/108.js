/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export const sortedArrayToBST = (nums) => {
  if (!nums.length) {
    return null;
  }
  const mid = Math.floor(nums.length / 2);
  return new TreeNode(
    nums[mid],
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1))
  );
};
