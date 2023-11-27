/**
 *  * Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
 *
 * Example 1:
 *
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: false
 *
 * Example 2:
 *
 * Input: intervals = [[7,10],[2,4]]
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *     0 <= intervals.length <= 104
 *     intervals[i].length == 2
 *     0 <= starti < endi <= 106
 *
 * https://leetcode.com/problems/meeting-rooms/
 */

const end = (interval) => interval[1];

const start = (interval) => interval[0];

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
export const canAttendMeetings = (intervals) => {
  const sorted = [...intervals].sort((a, b) => end(a) - end(b));
  for (let i = 1; i < sorted.length; i++) {
    if (end(sorted[i - 1]) > start(sorted[i])) {
      return false;
    }
  }
  return true;
};
