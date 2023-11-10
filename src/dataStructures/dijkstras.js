const initialDistances = (graph, src) =>
  Object.keys(graph).reduce(
    (acc, x) => acc.set(x, x === src ? 0 : Number.MAX_SAFE_INTEGER),
    new Map()
  );

const min = (distances, visited) => {
  let minVertex;
  let minDistance = Number.MAX_SAFE_INTEGER;
  for (const [vertex, distance] of distances.entries()) {
    if (!visited.has(vertex) && distance < minDistance) {
      minDistance = distance;
      minVertex = vertex;
    }
  }
  return minVertex;
};

export const dijkstras = (graph, src, dest) => {
  const visited = new Set();
  const distances = initialDistances(graph, src);
  let vertex = src;
  while (vertex) {
    if (vertex === dest) {
      return distances.get(dest);
    }
    const distance = distances.get(vertex);
    for (const [edge, weight] of graph[vertex]) {
      const newWeight = weight + distance;
      if (newWeight < distances.get(edge)) {
        distances.set(edge, newWeight);
      }
    }
    visited.add(vertex);
    vertex = min(distances, visited);
  }
  return -1;
};
