import { imageSmoother } from "../src/661.js";
import { arrToStr } from "./util.js";

describe("661. Image Smoother", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = imageSmoother(input);
      expect(result).toBe(expected);
    });
  });
});
