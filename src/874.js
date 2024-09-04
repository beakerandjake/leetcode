/**
 * A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot
 * can receive a sequence of these three possible types of commands:
 *
 *  * -2: Turn left 90 degrees.
 *  * -1: Turn right 90 degrees.
 *  * 1 <= k <= 9: Move forward k units, one unit at a time.
 *
 * Some of the grid squares are obstacles. The ith obstacle is at grid point
 * obstacles[i] = (xi, yi). If the robot runs into an obstacle, then it will
 * instead stay in its current location and move on to the next command.
 *
 * Return the maximum Euclidean distance that the robot ever gets from the origin
 * squared (i.e. if the distance is 5, return 25).
 *
 * Note:
 *
 *  * North means +Y direction.
 *  * East means +X direction.
 *  * South means -Y direction.
 *  * West means -X direction.
 *  * There can be obstacle in [0,0].
 *
 *
 *
 * Example 1:
 *
 *
 * Input: commands = [4,-1,3], obstacles = []
 * Output: 25
 * Explanation: The robot starts at (0, 0):
 * 1. Move north 4 units to (0, 4).
 * 2. Turn right.
 * 3. Move east 3 units to (3, 4).
 * The furthest point the robot ever gets from the origin is (3, 4), which squared is 32 + 42 = 25 units away.
 *
 *
 * Example 2:
 *
 *
 * Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
 * Output: 65
 * Explanation: The robot starts at (0, 0):
 * 1. Move north 4 units to (0, 4).
 * 2. Turn right.
 * 3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
 * 4. Turn left.
 * 5. Move north 4 units to (1, 8).
 * The furthest point the robot ever gets from the origin is (1, 8), which squared is 12 + 82 = 65 units away.
 *
 *
 * Example 3:
 *
 *
 * Input: commands = [6,-1,-1,6], obstacles = []
 * Output: 36
 * Explanation: The robot starts at (0, 0):
 * 1. Move north 6 units to (0, 6).
 * 2. Turn right.
 * 3. Turn right.
 * 4. Move south 6 units to (0, 0).
 * The furthest point the robot ever gets from the origin is (0, 6), which squared is 62 = 36 units away.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= commands.length <= 104
 *  * commands[i] is either -2, -1, or an integer in the range [1, 9].
 *  * 0 <= obstacles.length <= 104
 *  * -3 * 104 <= xi, yi <= 3 * 104
 *  * The answer is guaranteed to be less than 231.
 *
 *
 *
 * https://leetcode.com/problems/walking-robot-simulation
 */

// returns a new vector2
const vector2 = (y, x) => [y, x];

// returns the y component of the vector2
const y = (v) => v[0];

// returns the x component of the vector2
const x = (v) => v[1];

// adds the two vector2 together and returns a new vector2
const add = (v1, v2) => vector2(y(v1) + y(v2), x(v1) + x(v2));

// rotates the vector2 90 degrees clockwise
const rotateClockwise = (dir) => vector2(-x(dir), y(dir));

// rotates the vector2 90 degrees counterclockwise
const rotateCounterClockwise = (dir) => vector2(x(dir), -y(dir));

// returns the squared distance between the two vector2
const distanceSquared = (a, b) => (y(a) - y(b)) ** 2 + (x(a) - x(b)) ** 2;

// returns the hashed representation of the vector2
const hash = (v) => `<${y(v)},${x(v)}>`;

// given an array of vector2, where each item represents an obstacle in the world which cannot be traversed
// returns a function which takes a vector2 position and returns true if there is an obstacle present at that position
const collisionChecker = (obstacles) => {
  const obstacleLookup = new Set(obstacles.map(hash));
  return (pos) => obstacleLookup.has(hash(pos));
};

// moves the distance in the direction as long as no collisions take place
// accepts a collisionCheckFn which returns true if there is a collision at the given position
// returns a new vector2 representing the location after the movement
const move = (pos, dir, amount, collisionCheckFn) => {
  if (amount === 0) {
    return pos;
  }
  return !collisionCheckFn(add(pos, dir))
    ? move(add(pos, dir), dir, amount - 1, collisionCheckFn)
    : pos;
};

// applies each command and returns an array containing the history
// each history item contains [position, direction] of the robot after the command was applied
const applyCommands = (startPosition, startDirection, commands, checkCollisionFn) => {
  let pos = startPosition;
  let dir = startDirection;
  return commands.map((command) => {
    if (command === -2) {
      dir = rotateCounterClockwise(dir);
    } else if (command === -1) {
      dir = rotateClockwise(dir);
    } else {
      pos = move(pos, dir, command, checkCollisionFn);
    }
    return [pos, dir];
  });
};

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
export const robotSim = (commands, obstacles) => {
  const origin = vector2(0, 0);
  const movementHistory = applyCommands(
    origin,
    vector2(1, 0),
    commands,
    collisionChecker(obstacles.map((o) => vector2(o[1], o[0]))),
  );
  // given the history of robot locations, find the furthest distance the robot moved.
  return Math.max(...movementHistory.map(([pos]) => distanceSquared(origin, pos)));
};
