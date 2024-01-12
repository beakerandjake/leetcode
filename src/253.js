/**
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
 *
 *
 *
 * Example 1:
 *
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: 2
 *
 * Example 2:
 *
 * Input: intervals = [[7,10],[2,4]]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *     1 <= intervals.length <= 104
 *     0 <= starti < endi <= 106
 *
 * https://leetcode.com/problems/meeting-rooms-ii/
 */

const start = (interval) => interval[0];
const end = (interval) => interval[1];

/**
 * @param {number[][]} intervals
 * @return {number}
 */
export const minMeetingRooms = (intervals) => {
  const sorted = [...intervals].sort((a, b) => start(a) - start(b));
  const rooms = [end(sorted[0])];
  for (let i = 1; i < sorted.length; i++) {
    const freeRoomIndex = rooms.findIndex((endTime) => endTime <= start(sorted[i]));
    if (freeRoomIndex === -1) {
      rooms.push(end(sorted[i]));
    } else {
      rooms[freeRoomIndex] = end(sorted[i]);
    }
  }
  return rooms.length;
};
