import { findCheapestPrice } from "../src/787.js";
import { arrToStr } from "./util.js";

describe("787. Cheapest Flights Within K Stops", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = findCheapestPrice(input);
      expect(result).toBe(expected);
    });
  });
});
