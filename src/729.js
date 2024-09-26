/**
 * You are implementing a program to use as your calendar. We can add a new event
 * if adding the event will not cause a double booking.
 *
 * A double booking happens when two events have some non-empty intersection (i.e.,
 * some moment is common to both events.).
 *
 * The event can be represented as a pair of integers start and end that represents
 * a booking on the half-open interval [start, end), the range of real numbers x
 * such that start <= x < end.
 *
 * Implement the MyCalendar class:
 *
 *  * MyCalendar() Initializes the calendar object.
 *  * boolean book(int start, int end) Returns true if the event can be added to
 *    the calendar successfully without causing a double booking. Otherwise, return
 *    false and do not add the event to the calendar.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["MyCalendar", "book", "book", "book"]
 * [[], [10, 20], [15, 25], [20, 30]]
 * Output
 * [null, true, false, true]
 *
 * Explanation
 * MyCalendar myCalendar = new MyCalendar();
 * myCalendar.book(10, 20); // return True
 * myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
 * myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= start < end <= 109
 *  * At most 1000 calls will be made to book.
 *
 *
 *
 * https://leetcode.com/problems/my-calendar-i
 */

// creates an interval from the start and end times
const interval = (s, e) => [s, e];

// returns the start of the interval
const start = (i) => i[0];

// returns the end of the interval
const end = (i) => i[1];

// returns true if interval a ends before interval b starts
const comesBefore = (a, b) => end(a) <= start(b);

// returns true if interval a starts after interval b ends
const comesAfter = (a, b) => start(a) >= end(b);

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

export class MyCalendar {
  #events = [];

  #insertIndex(event) {
    if (!this.#events.length) {
      return 0;
    }
    // binary search to find exact index to insert to maintain sorted order
    let lo = 0;
    let hi = this.#events.length - 1;
    while (lo <= hi) {
      const m = lo + Math.floor((hi - lo) / 2);
      if (comesAfter(event, this.#events[m])) {
        lo = m + 1;
      } else if (comesBefore(event, this.#events[m])) {
        hi = m - 1;
      } else {
        // cannot insert index if there is an overlap
        return -1;
      }
    }
    return lo;
  }

  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(s, e) {
    const toInsert = interval(s, e);
    const index = this.#insertIndex(toInsert);
    if (index !== -1) {
      this.#events.splice(index, 0, toInsert);
    }
    return index !== -1;
  }
}
