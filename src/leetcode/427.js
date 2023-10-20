/**
 * Given a n * n matrix grid of 0's and 1's only.
 * We want to represent grid with a Quad-Tree.
 *
 * Return the root of the Quad-Tree representing grid.
 *
 * A Quad-Tree is a tree data structure in which each internal node has exactly four children.
 * Besides, each node has two attributes:
 *     val: True if the node represents a grid of 1's or False if the node represents a grid of 0's. Notice that you can assign the val to True or False when isLeaf is False, and both are accepted in the answer.
 *     isLeaf: True if the node is a leaf node on the tree or False if the node has four children.
 *
 * We can construct a Quad-Tree from a two-dimensional area using the following steps:
 *     If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.
 *     If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.
 *     Recurse for each of the children with the proper sub-grid.
 *
 */

class Node {
  constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

const sameValue = (grid, top, left, size) => {
  const compareTo = grid[top][left];
  for (let y = top; y < top + size; y++) {
    for (let x = left; x < left + size; x++) {
      if (grid[y][x] !== compareTo) {
        return false;
      }
    }
  }
  return true;
};

const toQuadTree = (grid, top, left, size) => {
  if (sameValue(grid, top, left, size)) {
    return new Node(!!grid[top][left], true);
  }
  const half = Math.floor(size / 2);
  return new Node(
    false,
    false,
    toQuadTree(grid, top, left, half),
    toQuadTree(grid, top, left + half, half),
    toQuadTree(grid, top + half, left, half),
    toQuadTree(grid, top + half, left + half, half)
  );
};

/**
 * @param {number[][]} grid
 * @return {Node}
 */
export const construct = (grid) => toQuadTree(grid, 0, 0, grid.length);
