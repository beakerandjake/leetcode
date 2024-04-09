/**
 * Given an array of points where points[i] = [xi, yi] represents a point on the
 * X-Y plane, return the maximum number of points that lie on the same straight
 * line.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg]
 *
 *
 * Input: points = [[1,1],[2,2],[3,3]]
 * Output: 3
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg]
 *
 *
 * Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * Output: 4
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= points.length <= 300
 *  * points[i].length == 2
 *  * -104 <= xi, yi <= 104
 *  * All the points are unique.
 *
 *
 *
 * https://leetcode.com/problems/max-points-on-a-line
 */
/**
 *    def maxPoints(self, points: List[List[int]]) -> int:
        if len(points) <= 2:
            return len(points)
        
        def find_slope(p1, p2):
            x1, y1 = p1
            x2, y2 = p2
            if x1-x2 == 0:
                return inf
            return (y1-y2)/(x1-x2)
        
        ans = 1
        for i, p1 in enumerate(points):
            slopes = defaultdict(int)
            for j, p2 in enumerate(points[i+1:]):
                slope = find_slope(p1, p2)
                slopes[slope] += 1
                ans = max(slopes[slope], ans)
        return ans+1
 */

const x = (point) => point[0];
const y = (point) => point[1];
const slope = (a, b) => (x(a) === x(b) ? Infinity : (y(a) - y(b)) / (x(a) - x(b)));

/**
 * @param {number[][]} points
 * @return {number}
 */
export const maxPoints = (points) => {
  if (points.length < 3) {
    return points.length;
  }
  let result = 1;
  for (let i = 0; i < points.length; i++) {
    const slopes = new Map();
    for (let j = i + 1; j < points.length; j++) {
      const slp = slope(points[i], points[j]);
      slopes.set(slp, (slopes.get(slp) || 0) + 1);
    }
    result = Math.max(...slopes.values(), result);
  }
  return result + 1;
};
