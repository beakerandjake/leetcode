import { findJudge } from "../src/997.js";
import { arrToStr } from "./util.js";

describe("997. Find the Town Judge", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findJudge(input);
      expect(result).toBe(expected);
    });
  });
});
