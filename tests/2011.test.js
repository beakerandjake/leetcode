import { finalValueAfterOperations } from "../src/2011.js";
import { arrToStr } from "./util.js";

describe("2011. Final Value of Variable After Performing Operations", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = finalValueAfterOperations(input);
      expect(result).toBe(expected);
    });
  });
});
