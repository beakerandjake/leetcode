import { postorder } from '../src/590.js';
import { generateTestName } from './util.js';

const toTree = (nodeMap, root) => {
  const nodes = [...nodeMap.keys()].reduce(
    (acc, x) => acc.set(x, { val: x, children: [] }),
    new Map(),
  );

  for (const [k, v] of nodeMap.entries()) {
    nodes.get(k).children.push(...v.map((x) => nodes.get(x)));
  }

  return nodes.get(root);
};

describe('590. N-ary Tree Postorder Traversal', () => {
  [
    [
      new Map([
        [1, [3, 2, 4]],
        [3, [5, 6]],
        [2, []],
        [4, []],
        [5, []],
        [6, []],
      ]),
      1,
      [5, 6, 3, 2, 4, 1],
    ],
    [
      new Map([
        [1, [2, 3, 4, 5]],
        [2, []],
        [3, [6, 7]],
        [4, [8]],
        [5, [9, 10]],
        [6, []],
        [7, [11]],
        [8, [12]],
        [9, [13]],
        [10, []],
        [11, [14]],
        [12, []],
        [13, []],
        [14, []],
      ]),
      1,
      [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1],
    ],
  ].forEach((args) => {
    const [graph, root, expected] = args;
    test(generateTestName(postorder, ...args), () => {
      const result = postorder(toTree(graph, root));
      expect(result).toEqual(expected);
    });
  });
});
