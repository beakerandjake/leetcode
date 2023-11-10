import { networkDelayTime } from "../../src/leetcode/743.js";
import { arrToStr } from "../util.js";

describe("743. Network Delay Time", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = networkDelayTime(input);
      expect(result).toBe(expected);
    });
  });
});
