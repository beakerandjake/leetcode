/**
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing
 * moving one unit north, south, east, or west, respectively. You start at the
 * origin (0, 0) on a 2D plane and walk on the path specified by path.
 *
 * Return true if the path crosses itself at any vector
 * , that is, if at any time you
 * are on a location you have previously visited. Return false otherwise.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/06/10/screen-shot-2020-06-10-at-123929-pm.png]
 *
 *
 * Input: path = "NES"
 * Output: false
 * Explanation: Notice that the path doesn't cross any vector
 *  more than once.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/06/10/screen-shot-2020-06-10-at-123843-pm.png]
 *
 *
 * Input: path = "NESWW"
 * Output: true
 * Explanation: Notice that the path visits the origin twice.
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= path.length <= 104
 *  * path[i] is either 'N', 'S', 'E', or 'W'.
 *
 *
 *
 * https://leetcode.com/problems/path-crossing
 */

// returns a new vector.
const create = (x, y) => [x, y];

// returns the x component of the vector.
const x = (vector) => vector[0];

// returns the y component of the vector.
const y = (vector) => vector[1];

// returns a hash representation of the vector.
const hash = (vector) => `<${x(vector)},${y(vector)}>`;

// adds vectors a and b
const add = (a, b) => create(x(a) + x(b), y(a) + y(b));

// maps an input direction to a vector.
const directions = new Map([
  ['N', create(0, 1)],
  ['S', create(0, -1)],
  ['E', create(1, 0)],
  ['W', create(-1, 0)],
]);

// returns a function which returns true if the position has been previously visited.
const historyChecker = (origin) => {
  const visited = new Set([hash(origin)]);
  return (position) =>
    visited.has(hash(position)) ? true : !visited.add(hash(position));
};

/**
 * @param {string} path
 * @return {boolean}
 */
export const isPathCrossing = (path) => {
  let position = create(0, 0);
  const hasVisited = historyChecker(position);
  for (const instruction of path) {
    position = add(position, directions.get(instruction));
    if (hasVisited(position)) {
      return true;
    }
  }
  return false;
};
