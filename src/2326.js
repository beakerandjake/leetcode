/**
 * You are given two integers m and n, which represent the dimensions of a matrix.
 *
 * You are also given the head of a linked list of integers.
 *
 * Generate an m x n matrix that contains the integers in the linked list presented
 * in spiral order (clockwise), starting from the top-left of the matrix. If there
 * are remaining empty spaces, fill them with -1.
 *
 * Return the generated matrix.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2022/05/09/ex1new.jpg]
 *
 *
 * Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
 * Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
 * Explanation: The diagram above shows how the values are printed in the matrix.
 * Note that the remaining spaces in the matrix are filled with -1.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2022/05/11/ex2.jpg]
 *
 *
 * Input: m = 1, n = 4, head = [0,1,2]
 * Output: [[0,1,2,-1]]
 * Explanation: The diagram above shows how the values are printed from left to right in the matrix.
 * The last space in the matrix is set to -1.
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= m, n <= 105
 *  * 1 <= m * n <= 105
 *  * The number of nodes in the list is in the range [1, m * n].
 *  * 0 <= Node.val <= 1000
 *
 *
 *
 * https://leetcode.com/problems/spiral-matrix-iv
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// returns an empty matrix of size (m x n)
const empty = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

// returns an new vector2
const vector2 = (y, x) => [y, x];

// returns the y component of the vector2
const y = (v) => v[0];

// returns the x component of the vector2
const x = (v) => v[1];

// adds the two vectors together and returns a new vector
const addVectors = (a, b) => vector2(y(a) + y(b), x(a) + x(b));

// returns a new bounds
const bounds = (top, right, bottom, left) => [top, right, bottom, left];

// returns the top component of the bounds
const top = (b) => b[0];

// returns the right component of the bounds
const right = (b) => b[1];

// returns the bottom component of the bounds
const bottom = (b) => b[2];

// returns the left component of the bounds
const left = (b) => b[3];

// adds the two bounds together and returns the new bounds result
const addBounds = (a, b) => [
  top(a) + top(b),
  right(a) + right(b),
  bottom(a) + bottom(b),
  left(a) + left(b),
];

// returns true if the vector is in the bounds
const inBounds = (v, b) =>
  y(v) >= top(b) && y(v) <= bottom(b) && x(v) >= left(b) && x(v) <= right(b);

// returns iterator that yields each point of the matrix
// moving in a clockwise spiral pattern from the origin (0,0)
const iterateSpiral = function* (m, n) {
  const size = m * n;
  const movementPattern = [vector2(0, 1), vector2(1, 0), vector2(0, -1), vector2(-1, 0)];
  const boundsPattern = [
    bounds(1, 0, 0, 0),
    bounds(0, -1, 0, 0),
    bounds(0, 0, -1, 0),
    bounds(0, 0, 0, 1),
  ];
  let pI = 0;
  let boundingBox = bounds(0, n - 1, m - 1, 0);
  let pos = vector2(0, 0);
  for (let i = 0; i < size; i++) {
    yield pos;
    let next = addVectors(pos, movementPattern[pI]);
    // if we have moved out of bounds, then we need to update to the next movement pattern
    // this will rotate our direction and shrink the available bounds of the spiral
    if (!inBounds(next, boundingBox)) {
      boundingBox = addBounds(boundingBox, boundsPattern[pI]);
      pI = (pI + 1) % movementPattern.length;
      next = addVectors(pos, movementPattern[pI]);
    }
    pos = next;
  }
};

// returns iterator that yields each item of the linked list
const iterate = function* (list) {
  let current = list;
  while (current) {
    yield current;
    current = current.next;
  }
};

/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
export const spiralMatrix = (m, n, head) => {
  const result = empty(m, n, -1);
  const spiralIterator = iterateSpiral(m, n);
  for (const node of iterate(head)) {
    const point = spiralIterator.next().value;
    result[y(point)][x(point)] = node.val;
  }
  return result;
};
