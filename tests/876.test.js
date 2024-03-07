import { middleNode } from "../src/876.js";
import { arrToStr } from "./util.js";

describe("876. Middle of the Linked List", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = middleNode(input);
      expect(result).toBe(expected);
    });
  });
});
