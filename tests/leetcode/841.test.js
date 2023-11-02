import { canVisitAllRooms } from "../../src/leetcode/841.js";
import { arrToStr } from "../util.js";

describe("841. Keys and Rooms", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = canVisitAllRooms(input);
      expect(result).toBe(expected);
    });
  });
});
