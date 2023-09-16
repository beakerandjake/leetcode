/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

// const simple = (prices) => {
//   let max = 0;
//   const { length } = prices;
//   for (let buyIndex = 0; buyIndex < length; buyIndex++) {
//     for (let sellIndex = buyIndex + 1; sellIndex < length; sellIndex++) {
//       if (prices[sellIndex] - prices[buyIndex] > max) {
//         max = prices[sellIndex] - prices[buyIndex];
//       }
//     }
//   }
//   return max;
// };

// const simpleWithCacheMax = (prices) => {
//   if (prices.length <= 1) {
//     return 0;
//   }

//   let toReturn = 0;
//   let maxSellValue = 0;
//   let maxSellIndex = 0;

//   for (let buyIndex = 0; buyIndex < prices.length - 1; buyIndex++) {
//     const buyPrice = prices[buyIndex];

//     if (!maxSellValue || maxSellIndex === buyIndex) {
//       maxSellIndex = 0;
//       maxSellValue = 0;
//       // scan forward and find max sell value
//       for (let j = buyIndex + 1; j < prices.length; j++) {
//         if (prices[j] > maxSellValue) {
//           maxSellIndex = j;
//           maxSellValue = prices[j];
//         }
//       }
//     }

//     const bestProfit = maxSellValue - buyPrice;
//     if (bestProfit > toReturn) {
//       toReturn = bestProfit;
//     }
//   }

//   return toReturn;
// };

// const recursiveMemoization = (prices) => {
//   if (prices.length <= 1) {
//     return 0;
//   }

//   const memo = new Map();
//   const maxSellPrice = (index) => {
//     if (index >= prices.length) {
//       return 0;
//     }
//     if (memo.has(index)) {
//       return memo.get(index);
//     }
//     const value = Math.max(prices[index], maxSellPrice(index + 1));
//     memo.set(index, value);
//     return value;
//   };

//   let toReturn = 0;
//   for (let buyIndex = prices.length - 1; buyIndex--; ) {
//     const profit = maxSellPrice(buyIndex + 1) - prices[buyIndex];
//     if (profit > toReturn) {
//       toReturn = profit;
//     }
//   }
//   return toReturn;
// };

const peaksAndValleys = (prices) => {
  if (prices.length <= 1) {
    return 0;
  }

  let minPrice = Number.MAX_SAFE_INTEGER;
  let toReturn = 0;
  for (let index = 0; index < prices.length; index++) {
    if (prices[index] < minPrice) {
      minPrice = prices[index];
    } else if (prices[index] - minPrice > toReturn) {
      toReturn = prices[index] - minPrice;
    }
  }
  return toReturn;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = peaksAndValleys;
