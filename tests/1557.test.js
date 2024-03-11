import { findSmallestSetOfVertices } from "../src/1557.js";
import { arrToStr } from "./util.js";

describe("1557. Minimum Number of Vertices to Reach All Nodes", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findSmallestSetOfVertices(input);
      expect(result).toBe(expected);
    });
  });
});
