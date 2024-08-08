/**
 * You start at the cell (rStart, cStart) of an rows x cols grid facing east. The
 * northwest corner is at the first row and column in the grid, and the southeast
 * corner is at the last row and column.
 *
 * You will walk in a clockwise spiral shape to visit every position in this grid.
 * Whenever you move outside the grid's boundary, we continue our walk outside the
 * grid (but may return to the grid boundary later.). Eventually, we reach all rows
 * * cols spaces of the grid.
 *
 * Return an array of coordinates representing the positions of the grid in the
 * order you visited them.
 *
 *
 *
 * Example 1:
 *
 * [https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_1.png]
 *
 *
 * Input: rows = 1, cols = 4, rStart = 0, cStart = 0
 * Output: [[0,0],[0,1],[0,2],[0,3]]
 *
 *
 * Example 2:
 *
 * [https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_2.png]
 *
 *
 * Input: rows = 5, cols = 6, rStart = 1, cStart = 4
 * Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= rows, cols <= 100
 *  * 0 <= rStart < rows
 *  * 0 <= cStart < cols
 *
 *
 *
 * https://leetcode.com/problems/spiral-matrix-iii
 */

// returns a new vector.
const vector2 = (y, x) => [y, x];

// returns the y component of the vector.
const y = (v) => v[0];

// returns the x component of the vector.
const x = (v) => v[1];

// adds two vectors together and returns the result.
const add = (v1, v2) => vector2(y(v1) + y(v2), x(v1) + x(v2));

// returns an iterator which will infinitely circle between the items of the array.
const circularIterator = function* (arr) {
  let i = 0;
  while (true) {
    yield arr[i++ % arr.length];
  }
};

// returns an iterator which infinitely moves in a clockwise spiral pattern from an origin position of (0,0)
const spiralIterator = function* () {
  // clockwise movement: right, down, left, up
  const directionIterator = circularIterator([
    vector2(0, 1),
    vector2(1, 0),
    vector2(0, -1),
    vector2(-1, 0),
  ]);
  let position = vector2(0, 0);
  let direction = directionIterator.next().value;
  let movedDistance = 0;
  let targetDistance = 1;
  let turns = 0;
  while (true) {
    yield position;
    position = add(position, direction);
    // turn to face new direction when traveled far enough
    if (++movedDistance >= targetDistance) {
      direction = directionIterator.next().value;
      movedDistance = 0;
      // spiral pattern means we move further every two times we turn
      if (++turns % 2 === 0) {
        targetDistance++;
      }
    }
  }
};

// returns a function which returns true if the vector is contained within a 2d matrix of size (rows x cols)
const inBoundsChecker = (rows, cols) => (v) =>
  y(v) >= 0 && y(v) < rows && x(v) >= 0 && x(v) < cols;

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
export const spiralMatrixIII = (rows, cols, rStart, cStart) => {
  const result = [];
  const target = rows * cols;
  const origin = vector2(rStart, cStart);
  const spiralWalker = spiralIterator();
  const inBounds = inBoundsChecker(rows, cols);
  while (result.length < target) {
    const position = add(origin, spiralWalker.next().value);
    if (inBounds(position)) {
      result.push(position);
    }
  }
  return result;
};
