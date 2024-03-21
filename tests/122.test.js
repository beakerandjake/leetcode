import { maxProfit } from "../src/122.js";
import { generateTestName } from "./util.js";

describe("122. Best Time to Buy and Sell Stock II", () => {
  [].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(maxProfit, ...args), () => {
      const result = maxProfit(input);
      expect(result).toBe(expected);
    });
  });
});
