import { countSmaller } from "../src/315.js";
import { arrToStr } from "./util.js";

describe("315. Count of Smaller Numbers After Self", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = countSmaller(input);
      expect(result).toBe(expected);
    });
  });
});
