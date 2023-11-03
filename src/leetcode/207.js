/**
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i] =
 * [ai, bi] indicates that you must take course bi first if you want to take course
 * ai.
 *
 *  * For example, the pair [0, 1], indicates that to take course 0 you have to
 *    first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So it is possible.
 *
 *
 * Example 2:
 *
 *
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= numCourses <= 2000
 *  * 0 <= prerequisites.length <= 5000
 *  * prerequisites[i].length == 2
 *  * 0 <= ai, bi < numCourses
 *  * All the pairs prerequisites[i] are unique.
 *
 *
 *
 * https://leetcode.com/problems/course-schedule
 */

const buildGraph = (size, connections) => {
  const graph = [...Array(size)].map(() => []);
  for (const [to, from] of connections) {
    graph[from].push(to);
  }
  return graph;
};

const bfsCycleCheck = (graph, node) => {
  const visited = new Set();
  const queue = [...graph[node]];
  while (queue.length) {
    const current = queue.pop();
    if (current === node) {
      return true;
    }
    if (!visited.has(current)) {
      visited.add(current);
      queue.push(...graph[current]);
    }
  }
  return false;
};

const dfsCycleCheck = (graph, node) => {
  const visitPrevious = new Set();
  const visitCurrent = new Set();
  const dfs = (current) => {
    if (visitCurrent.has(current)) {
      return true;
    }
    if (visitPrevious.has(current)) {
      return false;
    }
    visitPrevious.add(current);
    visitCurrent.add(current);
    for (const edge of graph[current]) {
      if (dfs(edge)) {
        return true;
      }
    }
    visitCurrent.delete(current);
    return false;
  };
  return dfs(node);
};

const searching = (numCourses, prerequisites) => {
  const graph = buildGraph(numCourses, prerequisites);
  for (let vertex = 0; vertex < numCourses; vertex++) {
    // if (dfsCycleCheck(graph, vertex)) {
    if (bfsCycleCheck(graph, vertex)) {
      return false;
    }
  }
  return true;
};

const kahnsAlgorithm = (numCourses, prerequisites) => {
  const graph = buildGraph(numCourses, prerequisites);

  // count the number of edges leading to each vertex.
  const inDegrees = Array(numCourses).fill(0);
  prerequisites.forEach(([vertex]) => {
    inDegrees[vertex]++;
  });

  // start by visiting every node with an in degree of zero.
  const queue = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }

  let visited = 0;
  // continually remove zero in degree nodes from the graph.
  while (queue.length) {
    const current = queue.shift();
    for (const neighbor of graph[current]) {
      visited++;
      inDegrees[neighbor] -= 1;
      if (inDegrees[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  return visited === prerequisites.length;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
export const canFinish = kahnsAlgorithm;
