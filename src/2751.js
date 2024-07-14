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

// returns a new robot
const newRobot = (position, health, direction, index) => [
  position,
  health,
  direction,
  index,
];

// converts the direction character to a scalar value
const scalar = (dir) => (dir === 'R' ? 1 : -1);

// zips the input arrays together to form the robot array.
const zip = (positions, healths, directions) =>
  positions.map((p, i) => newRobot(p, healths[i], scalar(directions[i]), i));

// returns the original position of the robot.
const position = (r) => r[0];

// returns the health of the robot.
const health = (r) => r[1];

// returns the direction the robot is moving in.
const direction = (r) => r[2];

// returns the original index of the robot.
const index = (r) => r[3];

// returns true if the two robots are on a course for collision.
const willCollide = (left, right) => direction(left) > direction(right);

// returns a new robot with the health decremented by one.
const decrementHealth = (r) =>
  newRobot(position(r), health(r) - 1, direction(r), index(r));

// returns the surviving robot after the collision (if no robot would survive returns null.)
const collide = (a, b) => {
  if (health(a) === health(b)) {
    return null;
  }
  return health(a) > health(b) ? decrementHealth(a) : decrementHealth(b);
};

// simulates the results and returns the surviving robots.
const simulate = (robots) => {
  // problem is simplified by ignoring positions of robots.
  // only direction matters, as two robots facing each other will collide.
  // this reduces the problem to a more complicated version of parenthesis matching
  // use a stack and each time an "opening and closing paren" is found, simulate a collision.\
  const stack = [];
  for (const robot of robots) {
    // nothing to do if this robot won't collide with it's left neighbor (the robot top of the stack)
    if (!stack.length || !willCollide(stack.at(-1), robot)) {
      stack.push(robot);
      continue;
    }
    // the current robot and it's leftmost neighbor will collide.
    // however, the survivor of this collision could result in more collisions.
    // continually resolve collisions until no more are possible.
    let rightMost = robot;
    while (stack.length && willCollide(stack.at(-1), robot)) {
      const survivor = collide(stack.pop(), rightMost);
      if (!survivor) {
        break;
      }
      if (!stack.length || !willCollide(stack.at(-1), survivor)) {
        stack.push(survivor);
        break;
      }
      rightMost = survivor;
    }
  }
  return stack;
};

// returns a copy of the robot array sorted by a specific property of the robot (asc).
const sortedBy = (robots, propertyFn) =>
  [...robots].sort((a, b) => propertyFn(a) - propertyFn(b));

/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
export const survivedRobotsHealths = (positions, healths, directions) => {
  // ensure robots are ordered by their position
  const robots = sortedBy(zip(positions, healths, directions), position);
  // after simulating, ensure the survivors are ordered by their original index.
  return sortedBy(simulate(robots), index).map(health);
};
