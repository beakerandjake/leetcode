import { intersect } from "../src/350.js";
import { arrToStr } from "./util.js";

describe("350. Intersection of Two Arrays II", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = intersect(input);
      expect(result).toBe(expected);
    });
  });
});
