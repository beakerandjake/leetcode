import { argumentsLength } from "../src/2703.js";
import { arrToStr } from "./util.js";

describe("2703. Return Length of Arguments Passed", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = argumentsLength(input);
      expect(result).toBe(expected);
    });
  });
});
