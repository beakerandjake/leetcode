/**
 * Returns a string representation of the array.
 * @param {Array} arr
 */
export const arrToStr = (arr) =>
  `[${arr?.map((x) => (Array.isArray(x) ? arrToStr(x) : x)).join(',')}]`;

/**
 * Returns a binary string representation of the number.
 */
export const binToStr = (bin) => (bin >>> 0).toString(2).padStart(32, '0');

/**
 * Converts an array to a singly linked list and returns the head node.
 */
export const arrToList = (arr) => {
  if (arr.length <= 0) {
    return undefined;
  }
  const nodes = arr.map((x) => ({ val: x, next: null }));
  for (let i = 0; i < arr.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
};

export const listToArr = (list) => {
  if (!list) {
    return [];
  }
  const toReturn = [];
  let current = list;
  while (current) {
    toReturn.push(current.val);
    current = current.next;
  }
  return toReturn;
};

// creates a new leetcode tree node.
const treeNode = (value) => ({ val: value, left: null, right: null });

// returns a bst formed by the leetcode serialized bst array.
export const arrToBst = (arr) => {
  if (!arr?.length) {
    return null;
  }
  const values = arr.values();
  const root = treeNode(values.next().value);
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();

    // add left child (if exists)
    const leftVal = values.next().value;
    if (leftVal != null) {
      node.left = treeNode(leftVal);
      queue.push(node.left);
    }

    // add right child (if exists)
    const rightVal = values.next().value;
    if (rightVal != null) {
      node.right = treeNode(rightVal);
      queue.push(node.right);
    }
  }

  return root;
};

// converts the bst to a leetcode serialized array representation of the bst.
export const bstToArr = (root) => {
  if (!root) {
    return [];
  }

  const toReturn = [root.val];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    toReturn.push(node.left?.val === undefined ? null : node.left.val);
    toReturn.push(node.right?.val === undefined ? null : node.right.val);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return toReturn;
};

// returns a new array with trailing nulls removed.
export const trimEnd = (arr) => {
  if (!arr?.length) {
    return [];
  }

  let endIndex;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== null) {
      endIndex = i + 1;
      break;
    }
  }
  return arr.slice(0, endIndex);
};

export const arrToGraph = (arr) => {
  if (!arr?.length) {
    return undefined;
  }
  const nodes = arr.map((_, i) => ({ val: i + 1, neighbors: [] }));
  arr.forEach((adjacencyList, i) => {
    nodes[i].neighbors = adjacencyList.map((val) => nodes[val - 1]);
  });
  return nodes[0];
};

export const graphToArr = (graph) => {
  if (!graph) {
    return [];
  }
  const nodes = [];
  const queue = [graph];
  while (queue.length) {
    const node = queue.shift();
    nodes[node.val - 1] = node.neighbors.map((x) => x.val);
    for (const neighbor of node.neighbors) {
      if (!nodes[neighbor.val - 1]) {
        queue.push(neighbor);
      }
    }
  }
  return nodes;
};

const argToStr = (arg) => {
  if (Array.isArray(arg)) {
    return `[${arg.map((x) => argToStr(x)).join(',')}]`;
  }
  if (typeof arg === 'string') {
    return `'${arg}'`;
  }
  return `${arg}`;
};

//
const fnToStr = (fn, args, expected) => `${fn.name}(${args?.join(',')}) -> ${expected}`;

/**
 * Generates a test name like:
 *  fn.name(arg0, arg1, ..., argN-1) -> argN
 */
export const generateTestName = (fn, ...args) =>
  fnToStr(fn, args.slice(0, -1).map(argToStr), argToStr(args.slice(-1).at(0)));
