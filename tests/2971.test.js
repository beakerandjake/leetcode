import { largestPerimeter } from "../src/2971.js";
import { arrToStr } from "./util.js";

describe("2971. Find Polygon With the Largest Perimeter", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = largestPerimeter(input);
      expect(result).toBe(expected);
    });
  });
});
