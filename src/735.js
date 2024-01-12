/**
 * We are given an array asteroids of integers representing asteroids in a row.
 *
 * For each asteroid, the absolute value represents its size, and the sign
 * represents its direction (positive meaning right, negative meaning left). Each
 * asteroid moves at the same speed.
 *
 * Find out the state of the asteroids after all collisions. If two asteroids meet,
 * the smaller one will explode. If both are the same size, both will explode. Two
 * asteroids moving in the same direction will never meet.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: asteroids = [5,10,-5]
 * Output: [5,10]
 * Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
 *
 *
 * Example 2:
 *
 *
 * Input: asteroids = [8,-8]
 * Output: []
 * Explanation: The 8 and -8 collide exploding each other.
 *
 *
 * Example 3:
 *
 *
 * Input: asteroids = [10,2,-5]
 * Output: [10]
 * Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= asteroids.length <= 104
 *  * -1000 <= asteroids[i] <= 1000
 *  * asteroids[i] != 0
 *
 *
 *
 * https://leetcode.com/problems/asteroid-collision
 */

/**
 * Returns the top of the stack.
 */
const peek = (stack) => stack.at(-1);

/**
 * Returns the size of the asteroid, regardless of the direction its facing.
 */
const size = (asteroid) => Math.abs(asteroid);

/**
 * Are the two asteroids on a collision course?
 */
const willCollide = (a, b) => a > 0 && b < 0;

/**
 * Returns the result of the collision:
 * < 0 if b destroyed a
 * > 0 if a destroyed b
 * === 0 if both were destroyed.
 */
const collide = (a, b) => size(a) - size(b);

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
export const asteroidCollision = (asteroids) => {
  const state = [];
  for (const asteroid of asteroids) {
    let survived = true;
    // if possible, continually smash the current asteroid into the head of state.
    while (state.length && willCollide(peek(state), asteroid) && survived) {
      const result = collide(peek(state), asteroid);
      if (result < 0) {
        // previous did not survive.
        state.pop();
      } else if (result > 0) {
        // current did not survive.
        survived = false;
      } else {
        // both did not survive.
        state.pop();
        survived = false;
      }
    }
    if (survived) {
      state.push(asteroid);
    }
  }
  return state;
};
