/**
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's,
 * where 0 means empty and 1 means not empty, and an integer n,
 * return true if n new flowers can be planted in the flowerbed without violating
 * the no-adjacent-flowers rule and false otherwise.
 */

// const simpleFunctional = (() => {
//   const maxPlots = (flowerbed) =>
//     flowerbed.length % 2 === 0 ? flowerbed.length / 2 : flowerbed.length + 1 / 2;

//   const isEmpty = (plot) => plot !== 1;

//   const hasNeighbors = (flowerbed, index) => {
//     if (index === 0) {
//       return !isEmpty(flowerbed[index + 1]);
//     }
//     if (index === flowerbed.length - 1) {
//       return !isEmpty(flowerbed[index - 1]);
//     }
//     return !isEmpty(flowerbed[index - 1]) || !isEmpty(flowerbed[index + 1]);
//   };

//   const findAvailablePlotIndex = (flowerbed) =>
//     flowerbed.findIndex(
//       (plot, index) => isEmpty(plot) && !hasNeighbors(flowerbed, index)
//     );

//   return (flowerbed, n) => {
//     if (n <= 0) {
//       return true;
//     }

//     if (maxPlots(flowerbed) < n) {
//       return false;
//     }

//     let currentFlowerbed = flowerbed;
//     let remaining = n;
//     while (remaining--) {
//       const openPlotIndex = findAvailablePlotIndex(currentFlowerbed);
//       if (openPlotIndex === -1) {
//         return false;
//       }
//       currentFlowerbed = currentFlowerbed.map((x, i) => (i === openPlotIndex ? 1 : x));
//     }
//     return true;
//   };
// })();

const isEmpty = (plot) => plot !== 1;

const maxCapacity = (flowerbed) =>
  flowerbed.length % 2 === 0 ? flowerbed.length / 2 : flowerbed.length + 1 / 2;

const flowers = (flowerbed) =>
  flowerbed.reduce((total, plot) => (isEmpty(plot) ? total : total + 1), 0);

const leftEmpty = (flowerbed, index) =>
  index === 0 ? true : isEmpty(flowerbed[index - 1]);

const rightEmpty = (flowerbed, index) =>
  index === flowerbed.length - 1 ? true : isEmpty(flowerbed[index + 1]);

const countAvailable = (flowerbed, index) => {
  if (index >= flowerbed.length) {
    return 0;
  }

  if (!isEmpty(flowerbed[index])) {
    return countAvailable(flowerbed, index + 2);
  }

  if (leftEmpty(flowerbed, index) && rightEmpty(flowerbed, index)) {
    return 1 + countAvailable(flowerbed, index + 2);
  }

  return countAvailable(flowerbed, rightEmpty(flowerbed, index) ? index + 1 : index + 2);
};

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
export const canPlaceFlowers = (flowerbed, n) => {
  if (n === 0) {
    return true;
  }

  // check if there isn't enough space to plant flowers
  if (n > maxCapacity(flowerbed) || flowers(flowerbed) + n > maxCapacity(flowerbed)) {
    return false;
  }

  return countAvailable(flowerbed, 0) >= n;
};
