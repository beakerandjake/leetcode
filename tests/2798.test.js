import { numberOfEmployeesWhoMetTarget } from "../src/2798.js";
import { arrToStr } from "./util.js";

describe("2798. Number of Employees Who Met the Target", () => {
  [
    // replace with real test data
    [true, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numberOfEmployeesWhoMetTarget(input);
      expect(result).toBe(expected);
    });
  });
});
