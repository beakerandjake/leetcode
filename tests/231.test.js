import { isPowerOfTwo } from "../src/231.js";
import { arrToStr } from "./util.js";

describe("231. Power of Two", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPowerOfTwo(input);
      expect(result).toBe(expected);
    });
  });
});
