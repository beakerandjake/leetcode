import { checkTree } from "../src/2236.js";
import { arrToStr } from "./util.js";

describe("2236. Root Equals Sum of Children", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = checkTree(input);
      expect(result).toBe(expected);
    });
  });
});
