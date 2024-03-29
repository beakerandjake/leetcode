/**
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has
 * piles[i] bananas. The guards have gone and will come back in h hours.
 *
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses
 * some pile of bananas and eats k bananas from that pile. If the pile has less
 * than k bananas, she eats all of them instead and will not eat any more bananas
 * during this hour.
 *
 * Koko likes to eat slowly but still wants to finish eating all the bananas before
 * the guards return.
 *
 * Return the minimum integer k such that she can eat all the bananas within h
 * hours.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: piles = [3,6,7,11], h = 8
 * Output: 4
 *
 *
 * Example 2:
 *
 *
 * Input: piles = [30,11,23,4,20], h = 5
 * Output: 30
 *
 *
 * Example 3:
 *
 *
 * Input: piles = [30,11,23,4,20], h = 6
 * Output: 23
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= piles.length <= 104
 *  * piles.length <= h <= 109
 *  * 1 <= piles[i] <= 109
 *
 *
 *
 * https://leetcode.com/problems/koko-eating-bananas
 */

/**
 * Returns true if koko can eat all piles of bananas with speed k in h hours.
 */
const canEatPiles = (piles, k, h) => {
  let remaining = h;
  for (const pile of piles) {
    remaining -= pile <= k ? 1 : Math.ceil(pile / k);
    if (remaining < 0) {
      return false;
    }
  }
  return true;
};

/**
 * Returns the lowest power of 2 that cannot be eaten by koko.`
 */
const findUpperBound = (piles, h) => {
  let k = 1;
  while (!canEatPiles(piles, k, h)) {
    k *= 2;
  }
  return k;
};

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
export const minEatingSpeed = (piles, h) => {
  let upperK = findUpperBound(piles, h);
  let lowerK = upperK / 2;
  while (lowerK <= upperK) {
    const m = Math.floor(lowerK + (upperK - lowerK) / 2);
    if (canEatPiles(piles, m, h)) {
      upperK = m - 1;
    } else {
      lowerK = m + 1;
    }
  }
  return lowerK;
};
