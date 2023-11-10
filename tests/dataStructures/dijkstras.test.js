import { dijkstras } from '../../src/dataStructures/dijkstras.js';

const union = (g, a, b, w) => {
  g[a].push([b, w]);
  g[b].push([a, w]);
};

const graph = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
};

union(graph, 'C', 'A', 7);
union(graph, 'C', 'B', 1);
union(graph, 'C', 'D', 2);
union(graph, 'C', 'E', 1);
union(graph, 'C', 'H', 3);
union(graph, 'C', 'I', 3);
union(graph, 'E', 'D', 2);
union(graph, 'E', 'F', 3);
union(graph, 'E', 'G', 2);
union(graph, 'E', 'H', 3);
union(graph, 'A', 'B', 3);
union(graph, 'A', 'I', 5);
union(graph, 'B', 'D', 7);
union(graph, 'D', 'F', 1);
union(graph, 'F', 'G', 5);
union(graph, 'G', 'H', 4);
union(graph, 'H', 'I', 2);

describe('Dijkstras', () => {
  [
    ['A', 'B', 3],
    ['A', 'C', 4],
    ['A', 'D', 6],
    ['A', 'E', 5],
    ['A', 'F', 7],
    ['A', 'G', 7],
    ['A', 'H', 7],
    ['A', 'I', 5],
    ['G', 'I', 6],
    ['G', 'Z', -1],
  ].forEach(([from, to, expected]) => {
    test(`${from} -> ${to} = ${expected}`, () => {
      const result = dijkstras(graph, from, to);
      expect(result).toBe(expected);
    });
  });
});
