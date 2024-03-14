import { removeZeroSumSublists } from "../src/1171.js";
import { arrToStr } from "./util.js";

describe("1171. Remove Zero Sum Consecutive Nodes from Linked List", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = removeZeroSumSublists(input);
      expect(result).toBe(expected);
    });
  });
});
