import { cherryPickup } from "../src/1463.js";
import { arrToStr } from "./util.js";

describe("1463. Cherry Pickup II", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = cherryPickup(input);
      expect(result).toBe(expected);
    });
  });
});
