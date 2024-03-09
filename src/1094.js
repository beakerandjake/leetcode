/**
 * There is a car with capacity empty seats. The vehicle only drives east (i.e., it
 * cannot turn around and drive west).
 *
 * You are given the integer capacity and an array trips where trips[i] =
 * [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi
 * passengers and the locations to pick them up and drop them off are fromi and toi
 * respectively. The locations are given as the number of kilometers due east from
 * the car's initial location.
 *
 * Return true if it is possible to pick up and drop off all passengers for all the
 * given trips, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 4
 * Output: false
 *
 *
 * Example 2:
 *
 *
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 5
 * Output: true
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= trips.length <= 1000
 *  * trips[i].length == 3
 *  * 1 <= numPassengersi <= 100
 *  * 0 <= fromi < toi <= 1000
 *  * 1 <= capacity <= 105
 *
 *
 *
 * https://leetcode.com/problems/car-pooling
 */

const numPassengers = (trip) => trip[0];

const from = (trip) => trip[1];

const to = (trip) => trip[2];

const enoughRoom = (capacity, current, additional) => current + additional <= capacity;

const pickUp = (current, amount) => current + amount;

const dropOff = (current, amount) => current - amount;

const sortedByPickup = (trips) => [...trips].sort((a, b) => from(a) - from(b));

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
export const carPooling = (trips, capacity) => {
  const schedule = sortedByPickup(trips);
  const dropOffs = Array(1001).fill(0);
  let passengers = 0;
  let location = 0;
  let i = 0;
  while (i < schedule.length) {
    // attempt to drop off passengers at this location.
    if (dropOffs[location]) {
      passengers = dropOff(passengers, dropOffs[location]);
    }
    // attempt to pick up as many trips at this stop as possible.
    while (i < schedule.length && from(schedule[i]) === location) {
      if (!enoughRoom(capacity, passengers, numPassengers(schedule[i]))) {
        return false;
      }
      passengers = pickUp(passengers, numPassengers(schedule[i]));
      dropOffs[to(schedule[i])] += numPassengers(schedule[i]);
      i++;
    }
    location++;
  }
  return true;
};
