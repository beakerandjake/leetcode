/**
 * You are given the root of a binary tree and an integer distance. A pair of two
 * different leaf nodes of a binary tree is said to be good if the length of the
 * shortest path between them is less than or equal to distance.
 *
 * Return the number of good leaf node pairs in the tree.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/07/09/e1.jpg]
 *
 *
 * Input: root = [1,2,3,null,4], distance = 3
 * Output: 1
 * Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/07/09/e2.jpg]
 *
 *
 * Input: root = [1,2,3,4,5,6,7], distance = 3
 * Output: 2
 * Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
 *
 *
 * Example 3:
 *
 *
 * Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
 * Output: 1
 * Explanation: The only good pair is [2,5].
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 210].
 *  * 1 <= Node.val <= 100
 *  * 1 <= distance <= 10
 *
 *
 *
 * https://leetcode.com/problems/number-of-good-leaf-nodes-pairs
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// iterator which traverses the tree in-order.
// eslint-disable-next-line func-style
function* inOrder(root) {
  if (!root) {
    return;
  }
  yield* inOrder(root.left);
  yield root;
  yield* inOrder(root.right);
}

// converts the tree to an undirected graph represented as an adjacency list.
const toGraph = (root) => {
  const graph = new Map();

  // adds the vertex to the graph (if not already present)
  const addVertex = (vertex) => {
    if (!graph.has(vertex)) {
      graph.set(vertex, []);
    }
  };

  // adds an undirected edge from the source vertex to the target vertex.
  const addEdge = (from, to) => {
    if (!to) {
      return;
    }
    addVertex(to);
    graph.get(from).push(to);
    graph.get(to).push(from);
  };

  for (const node of inOrder(root)) {
    addVertex(node);
    addEdge(node, node.left);
    addEdge(node, node.right);
  }

  return graph;
};

// iterates over all of the leaf nodes of the tree.
// eslint-disable-next-line func-style
function* leafNodes(root) {
  if (!root) {
    return;
  }
  yield* leafNodes(root.left);
  yield* leafNodes(root.right);

  if (!root.left && !root.right) {
    yield root;
  }
}

// performs a bfs from the origin node
// continues exploring as long as the distance is less than limit.
// returns the number of explored vertexes which satisfied the targetPredicateFn
const bfs = (graph, start, limit, targetPredicateFn) => {
  let result = 0;
  const queue = [{ vertex: start, distance: 0 }];
  const visited = new Set([start]);
  while (queue.length) {
    const { vertex, distance } = queue.shift();
    if (distance > limit) {
      break;
    }
    if (!visited.has(vertex) && targetPredicateFn(vertex)) {
      result++;
    }
    visited.add(vertex);
    for (const neighbor of graph.get(vertex)) {
      if (!visited.has(neighbor)) {
        queue.push({ vertex: neighbor, distance: distance + 1 });
      }
    }
  }
  return result;
};

// returns true if the node is a leaf node.
const isLeaf = (leaf) => !leaf.left && !leaf.right;

// returns the sum of all of the elements in the array.
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
export const countPairs = (root, distance) => {
  // convert the tree to an undirected graph
  const graph = toGraph(root);
  // BFS from each leaf node, stopping at distance, counting the number of leaf nodes encountered
  const reachable = [...leafNodes(root)].map((x) => bfs(graph, x, distance, isLeaf));
  // ensure final result is halved, because each reachable node is visited twice.
  return sum(reachable) / 2;
};
