import { asteroidCollision } from "../../src/leetcode/735.js";
import { arrToStr } from "../util.js";

describe("735. Asteroid Collision", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = asteroidCollision(input);
      expect(result).toBe(expected);
    });
  });
});
