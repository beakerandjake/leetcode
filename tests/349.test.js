import { intersection } from "../src/349.js";
import { arrToStr } from "./util.js";

describe("349. Intersection of Two Arrays", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = intersection(input);
      expect(result).toBe(expected);
    });
  });
});
