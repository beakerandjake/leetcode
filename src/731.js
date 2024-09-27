/**
 * You are implementing a program to use as your calendar. We can add a new event
 * if adding the event will not cause a triple booking.
 *
 * A triple booking happens when three events have some non-empty intersection
 * (i.e., some moment is common to all the three events.).
 *
 * The event can be represented as a pair of integers start and end that represents
 * a booking on the half-open interval [start, end), the range of real numbers x
 * such that start <= x < end.
 *
 * Implement the MyCalendarTwo class:
 *
 *  * MyCalendarTwo() Initializes the calendar object.
 *  * boolean book(int start, int end) Returns true if the event can be added to
 *    the calendar successfully without causing a triple booking. Otherwise, return
 *    false and do not add the event to the calendar.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
 * [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
 * Output
 * [null, true, true, true, false, true, true]
 *
 * Explanation
 * MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
 * myCalendarTwo.book(10, 20); // return True, The event can be booked.
 * myCalendarTwo.book(50, 60); // return True, The event can be booked.
 * myCalendarTwo.book(10, 40); // return True, The event can be double booked.
 * myCalendarTwo.book(5, 15);  // return False, The event cannot be booked, because it would result in a triple booking.
 * myCalendarTwo.book(5, 10); // return True, The event can be booked, as it does not use time 10 which is already double booked.
 * myCalendarTwo.book(25, 55); // return True, The event can be booked, as the time in [25, 40) will be double booked with the third event, the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
 *
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
 * https://leetcode.com/problems/my-calendar-ii
 */

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

class SortedMap {
  #items = new Map();
  #keys = [];

  #insertIndex(key) {
    if (!this.#keys.length) {
      return 0;
    }
    let lo = 0;
    let hi = this.#keys.length - 1;
    while (lo <= hi) {
      const m = lo + Math.floor((hi - lo) / 2);
      if (key < this.#keys[m]) {
        hi = m - 1;
      } else {
        lo = m + 1;
      }
    }
    return lo;
  }

  #findIndex(key) {
    let lo = 0;
    let hi = this.#keys.length - 1;
    while (lo <= hi) {
      const m = lo + Math.floor((hi - lo) / 2);
      if (key < this.#keys[m]) {
        hi = m - 1;
      } else if (key > this.#keys[m]) {
        lo = m + 1;
      } else {
        return m;
      }
    }
    return -1;
  }

  set(key, value) {
    if (this.#items.has(key)) {
      this.#items.set(key, value);
      return;
    }
    this.#items.set(key, value);
    this.#keys.splice(this.#insertIndex(key), 0, key);
  }

  get(key) {
    return this.#items.get(key);
  }

  getOrDefault(key, defaultValue = 0) {
    return this.#items.get(key) || defaultValue;
  }

  delete(key) {
    if (this.#items.delete(key)) {
      this.#keys.splice(this.#findIndex(key), 1);
    }
  }

  *values() {
    for (const key of this.#keys) {
      yield this.#items.get(key);
    }
  }
}

export class MyCalendarTwo {
  #maxBookings;
  #bookings = new SortedMap();

  constructor(maxBookings = 2) {
    this.#maxBookings = maxBookings;
  }

  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(s, e) {
    this.#bookings.set(s, this.#bookings.getOrDefault(s) + 1);
    this.#bookings.set(e, this.#bookings.getOrDefault(e) - 1);
    let overlaps = 0;
    for (const bookCount of this.#bookings.values()) {
      overlaps += bookCount;
      if (overlaps > this.#maxBookings) {
        this.#bookings.set(s, this.#bookings.get(s) - 1);
        this.#bookings.set(e, this.#bookings.get(e) + 1);
        if (this.#bookings.get(s) === 0) {
          this.#bookings.delete(s);
        }
        if (this.#bookings.get(e) === 0) {
          this.#bookings.delete(e);
        }
        return false;
      }
    }
    return true;
  }
}
