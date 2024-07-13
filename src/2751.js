/**
 * There are n 1-indexed robots, each having a position on a line, health, and
 * movement direction.
 *
 * You are given 0-indexed integer arrays positions, healths, and a string
 * directions (directions[i] is either 'L' for left or 'R' for right). All integers
 * in positions are unique.
 *
 * All robots start moving on the line simultaneously at the same speed in their
 * given directions. If two robots ever share the same position while moving, they
 * will collide.
 *
 * If two robots collide, the robot with lower health is removed from the line, and
 * the health of the other robot decreases by one. The surviving robot continues in
 * the same direction it was going. If both robots have the same health, they are
 * both removed from the line.
 *
 * Your task is to determine the health of the robots that survive the collisions,
 * in the same order that the robots were given, i.e. final heath of robot 1 (if
 * survived), final health of robot 2 (if survived), and so on. If there are no
 * survivors, return an empty array.
 *
 * Return an array containing the health of the remaining robots (in the order they
 * were given in the input), after no further collisions can occur.
 *
 * Note: The positions may be unsorted.
 *
 *
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2023/05/15/image-20230516011718-12.png]
 *
 *
 * Input: positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = "RRRRR"
 * Output: [2,17,9,15,10]
 * Explanation: No collision occurs in this example, since all robots are moving in the same direction. So, the health of the robots in order from the first robot is returned, [2, 17, 9, 15, 10].
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2023/05/15/image-20230516004433-7.png]
 *
 *
 * Input: positions = [3,5,2,6], healths = [10,10,15,12], directions = "RLRL"
 * Output: [14]
 * Explanation: There are 2 collisions in this example. Firstly, robot 1 and robot 2 will collide, and since both have the same health, they will be removed from the line. Next, robot 3 and robot 4 will collide and since robot 4's health is smaller, it gets removed, and robot 3's health becomes 15 - 1 = 14. Only robot 3 remains, so we return [14].
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2023/05/15/image-20230516005114-9.png]
 *
 *
 * Input: positions = [1,2,5,6], healths = [10,10,11,11], directions = "RLRL"
 * Output: []
 * Explanation: Robot 1 and robot 2 will collide and since both have the same health, they are both removed. Robot 3 and 4 will collide and since both have the same health, they are both removed. So, we return an empty array, [].
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= positions.length == healths.length == directions.length == n <= 105
 *  * 1 <= positions[i], healths[i] <= 109
 *  * directions[i] == 'L' or directions[i] == 'R'
 *  * All values in positions are distinct
 *
 *
 *
 * https://leetcode.com/problems/robot-collisions
 */

const translateDirections = (directions) =>
  [...directions].map((direction) => (direction === 'R' ? 1 : -1));

const zip = (...arrays) => {
  const length = Math.max(0, ...arrays.map((array) => array.length));
  return [...Array(length)].map((_, i) => arrays.map((array) => array[i]));
};

const newRobot = (position, health, direction, originalPosition) => [
  position,
  health,
  direction,
  originalPosition,
];

const position = (robot) => robot[0];

const health = (robot) => robot[1];

const direction = (robot) => robot[2];

const simulate = (() => {
  const move = (robot) => position(robot) + direction(robot);

  const collide = (left, right) => {
    if (health(left) === health(right)) {
      return null;
    }
    const survivor = health(left) > health(right) ? left : right;
    return newRobot(
      position(survivor),
      health(survivor) - 1,
      direction(survivor),
      survivor[3],
    );
  };

  return (robots) => {
    const stack = [];
    for (const robot of robots) {
      // always push right facing robot since they might collide with a future robot going left.
      if (direction(robot) === 'R') {
        stack.push(robot);
      }
      // ignore left most robot going left, will never collide with any other robot.
      else if (
        direction(robot) === 'L' &&
        (!stack.length || direction(stack.at(-1)) === 'L')
      ) {
        stack.push(robot);
      }
      // resolve the collision
      else {
        let rightmost = robot;
        while (stack.length && direction(stack.at(-1)) === 'R') {
          const survivor = collide(stack.pop(), rightmost);
          if (!survivor) {
            break;
          }
          if (
            direction(survivor) === 'L' &&
            (!stack.length || direction(stack.at(-1)) === 'L')
          ) {
            stack.push(survivor);
          }

          if (direction(survivor) === 'R') {
            stack.push(survivor);
            break;
          }
          rightmost = survivor;
        }
      }
    }
    console.log(stack);
    return stack;
  };
})();

/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
export const survivedRobotsHealths = (positions, healths, directions) => {
  const robots = zip(positions, healths, directions, [
    ...Array(positions.length).keys(),
  ]).sort((a, b) => position(a) - position(b));
  console.log('robots', robots);
  const results = simulate(robots);
  return results.sort((a, b) => a[3] - b[3]).map(health);
};
