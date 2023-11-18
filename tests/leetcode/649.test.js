import { predictPartyVictory } from "../../src/leetcode/649.js";
import { arrToStr } from "../util.js";

describe("649. Dota2 Senate", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = predictPartyVictory(input);
      expect(result).toBe(expected);
    });
  });
});
