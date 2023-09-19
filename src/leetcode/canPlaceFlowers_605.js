/**
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's,
 * where 0 means empty and 1 means not empty, and an integer n,
 * return true if n new flowers can be planted in the flowerbed without violating
 * the no-adjacent-flowers rule and false otherwise.
 */

const simpleFunctional = (() => {
  const isEmpty = (plot) => plot === 0;

  const hasNeighbors = (flowerbed, index) => {
    if (index === 0) {
      return !isEmpty(flowerbed[index + 1]);
    }
    if (index === flowerbed.length - 1) {
      return !isEmpty(flowerbed[index - 1]);
    }
    return !isEmpty(flowerbed[index - 1]) || !isEmpty(flowerbed[index + 1]);
  };

  const findAvailablePlotIndex = (flowerbed) =>
    flowerbed.findIndex(
      (plot, index) => isEmpty(plot) && !hasNeighbors(flowerbed, index)
    );

  return (flowerbed, n) => {
    if (n <= 0) {
      return true;
    }

    if (flowerbed.length === 1) {
      return n === 1 && !flowerbed[0];
    }

    let currentFlowerbed = flowerbed;
    let remaining = n;
    while (remaining--) {
      const openPlotIndex = findAvailablePlotIndex(currentFlowerbed);
      if (openPlotIndex === -1) {
        return false;
      }
      currentFlowerbed = currentFlowerbed.map((x, i) => (i === openPlotIndex ? 1 : x));
    }
    return true;
  };
})();

const maxPlots = (flowerbed) =>
  flowerbed.length % 2 === 0 ? flowerbed.length / 2 : flowerbed.length + 1 / 2;

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
export const canPlaceFlowers = (flowerbed, n) => {
  if (n === 0) {
    return true;
  }

  if (maxPlots(flowerbed) > n) {
    return false;
  }
};
