import { makeGood } from "../src/1544.js";
import { generateTestName } from "./util.js";

describe("1544. Make The String Great", () => {
  [
    ["leEeetcode", "leetcode"],
    ["abBAcC", ""],
    ["s", "s"],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(makeGood, ...args), () => {
      const result = makeGood(s);
      expect(result).toBe(expected);
    });
  });
});
