/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
export const dailyTemperatures = (temperatures) => {
  const toReturn = Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
      const previous = stack.pop();
      toReturn[previous] = i - previous;
    }
    stack.push(i);
  }
  return toReturn;
};
