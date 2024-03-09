import { minGroupsForValidAssignment } from "../src/2910.js";
import { arrToStr } from "./util.js";

describe("2910. Minimum Number of Groups to Create a Valid Assignment", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minGroupsForValidAssignment(input);
      expect(result).toBe(expected);
    });
  });
});
