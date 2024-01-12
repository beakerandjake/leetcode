/**
 * Given a reference of a node in a connected
 * [https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph]
 * undirected graph.
 *
 * Return a deep copy [https://en.wikipedia.org/wiki/Object_copying#Deep_copy]
 * (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (List[Node]) of its
 * neighbors.
 *
 *
 * class Node {
 *     public int val;
 *     public List<Node> neighbors;
 * }
 *
 *
 *
 *
 * Test case format:
 *
 * For simplicity, each node's value is the same as the node's index (1-indexed).
 * For example, the first node with val == 1, the second node with val == 2, and so
 * on. The graph is represented in the test case using an adjacency list.
 *
 * An adjacency list is a collection of unordered lists used to represent a finite
 * graph. Each list describes the set of neighbors of a node in the graph.
 *
 * The given node will always be the first node with val = 1. You must return the
 * copy of the given node as a reference to the cloned graph.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png]
 *
 *
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 * Explanation: There are 4 nodes in the graph.
 * 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 * 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 * 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 * 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/01/07/graph.png]
 *
 *
 * Input: adjList = [[]]
 * Output: [[]]
 * Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
 *
 *
 * Example 3:
 *
 *
 * Input: adjList = []
 * Output: []
 * Explanation: This an empty graph, it does not have any nodes.
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the graph is in the range [0, 100].
 *  * 1 <= Node.val <= 100
 *  * Node.val is unique for each node.
 *  * There are no repeated edges and no self-loops in the graph.
 *  * The Graph is connected and all nodes can be visited starting from the given
 *    node.
 *
 *
 *
 * https://leetcode.com/problems/clone-graph
 */

// Definition for a Node.
class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

const simple = (() => {
  const graphToArr = (root) => {
    if (!root) {
      return [];
    }
    const toReturn = [];
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      toReturn[node.val - 1] = node.neighbors.map((x) => x.val);
      for (const neighbor of node.neighbors) {
        if (!toReturn[neighbor.val - 1]) {
          queue.push(neighbor);
        }
      }
    }
    return toReturn;
  };

  const arrToGraph = (arr) => {
    if (!arr?.length) {
      return undefined;
    }
    const nodes = arr.map((neighbors, i) => new Node(i + 1, neighbors));
    nodes.forEach((node) => {
      node.neighbors = node.neighbors.map((val) => nodes[val - 1]);
    });
    return nodes[0];
  };

  return (node) => arrToGraph(graphToArr(node));
})();

const bfs = (node) => {
  if (!node) {
    return undefined;
  }
  const nodes = [];
  const queue = [node];
  while (queue.length) {
    const current = queue.shift();
    nodes[current.val - 1] = new Node(
      current.val,
      current.neighbors.map(({ val }) => val)
    );
    for (const neighbor of current.neighbors) {
      if (!nodes[neighbor.val - 1]) {
        queue.push(neighbor);
      }
    }
  }

  // replace the neighbors with actual pointers.
  nodes.forEach((x) => {
    x.neighbors = x.neighbors.map((val) => nodes[val - 1]);
  });

  return nodes[0];
};

/**
 * @param {Node} root
 * @return {Node}
 */
export const cloneGraph = (root) => {
  if (!root) {
    return null;
  }

  const visited = new Map();
  const dfs = (node) => {
    if (!visited.has(node.val)) {
      const copy = new Node(node.val, []);
      visited.set(node.val, copy);
      for (const neighbor of node.neighbors) {
        copy.neighbors.push(dfs(neighbor));
      }
    }
    return visited.get(node.val);
  };
  return dfs(root);
};
