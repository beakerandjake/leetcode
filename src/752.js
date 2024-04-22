/**
 * You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots:
 * '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely
 * and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each
 * move consists of turning one wheel one slot.
 *
 * The lock initially starts at '0000', a string representing the state of the 4
 * wheels.
 *
 * You are given a list of deadends dead ends, meaning if the lock displays any of
 * these codes, the wheels of the lock will stop turning and you will be unable to
 * open it.
 *
 * Given a target representing the value of the wheels that will unlock the lock,
 * return the minimum total number of turns required to open the lock, or -1 if it
 * is impossible.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * Output: 6
 * Explanation:
 * A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
 * Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
 * because the wheels of the lock become stuck after the display becomes the dead end "0102".
 *
 *
 * Example 2:
 *
 *
 * Input: deadends = ["8888"], target = "0009"
 * Output: 1
 * Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".
 *
 *
 * Example 3:
 *
 *
 * Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
 * Output: -1
 * Explanation: We cannot reach the target without getting stuck.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= deadends.length <= 500
 *  * deadends[i].length == 4
 *  * target.length == 4
 *  * target will not be in the list deadends.
 *  * target and deadends[i] consist of digits only.
 *
 *
 *
 * https://leetcode.com/problems/open-the-lock
 */

const turnUp = (wheel) => {
  const digit = Number(wheel);
  return (digit ? digit - 1 : 9).toString();
};

const turnDown = (wheel) => ((Number(wheel) + 1) % 10).toString();

const splice = (str, index, value) => {
  const chars = [...str];
  chars[index] = value;
  return chars.join('');
};

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
export const openLock = (deadends, target) => {
  const deadendsLookup = new Set(deadends);
  const initialState = '0000';
  // can't reach target if start or target is a dead end.
  if (deadendsLookup.has(target) || deadendsLookup.has(initialState)) {
    return -1;
  }
  // bfs to target start
  const queue = [{ state: initialState, steps: 0 }];
  const visited = new Set([initialState]);
  while (queue.length) {
    const { state, steps } = queue.shift();
    if (state === target) {
      return steps;
    }
    // turn each dial on the lock
    for (let i = 0; i < state.length; i++) {
      const up = splice(state, i, turnUp(state[i]));
      if (!visited.has(up) && !deadendsLookup.has(up)) {
        visited.add(up);
        queue.push({ state: up, steps: steps + 1 });
      }
      const down = splice(state, i, turnDown(state[i]));
      if (!visited.has(down) && !deadendsLookup.has(down)) {
        visited.add(down);
        queue.push({ state: down, steps: steps + 1 });
      }
    }
  }
  return -1;
};
