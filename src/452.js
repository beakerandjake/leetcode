/**
 * There are some spherical balloons taped onto a flat wall that represents the
 * XY-plane. The balloons are represented as a 2D integer array points where
 * points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches
 * between xstart and xend. You do not know the exact y-coordinates of the
 * balloons.
 *
 * Arrows can be shot up directly vertically (in the positive y-direction) from
 * different points along the x-axis. A balloon with xstart and xend is burst by an
 * arrow shot at x if xstart <= x <= xend. There is no limit to the number of
 * arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting
 * any balloons in its path.
 *
 * Given the array points, return the minimum number of arrows that must be shot to
 * burst all balloons.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: points = [[10,16],[2,8],[1,6],[7,12]]
 * Output: 2
 * Explanation: The balloons can be burst by 2 arrows:
 * - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
 * - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
 *
 *
 * Example 2:
 *
 *
 * Input: points = [[1,2],[3,4],[5,6],[7,8]]
 * Output: 4
 * Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
 *
 *
 * Example 3:
 *
 *
 * Input: points = [[1,2],[2,3],[3,4],[4,5]]
 * Output: 2
 * Explanation: The balloons can be burst by 2 arrows:
 * - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
 * - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= points.length <= 105
 *  * points[i].length == 2
 *  * -231 <= xstart < xend <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
 */

// returns the start of the interval
const start = (interval) => interval[0];

// returns the end of the interval
const end = (interval) => interval[1];

// returns true if a overlaps b
const overlaps = (a, b) => end(a) >= start(b);

// returns a new array of the intervals sorted by end position ascending.
const sortedByEnd = (points) => [...points].sort((a, b) => end(a) - end(b));

// returns the minimum number of arrows needed to shoot all of the balloons.
const shootArrows = (points, from) => {
  if (from >= points.length) {
    return 0;
  }
  if (from === points.length - 1) {
    return 1;
  }
  let current = from;
  while (current < points.length && overlaps(points[from], points[current])) {
    current++;
  }
  return 1 + shootArrows(points, current);
};

/**
 * @param {number[][]} points
 * @return {number}
 */
export const findMinArrowShots = (points) => shootArrows(sortedByEnd(points), 0);
