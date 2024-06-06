/**
 * Alice has some number of cards and she wants to rearrange the cards into groups
 * so that each group is of size groupSize, and consists of groupSize consecutive
 * cards.
 *
 * Given an integer array hand where hand[i] is the value written on the ith card
 * and an integer groupSize, return true if she can rearrange the cards, or false
 * otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
 * Output: true
 * Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
 *
 *
 * Example 2:
 *
 *
 * Input: hand = [1,2,3,4,5], groupSize = 4
 * Output: false
 * Explanation: Alice's hand can not be rearranged into groups of 4.
 *
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= hand.length <= 104
 *  * 0 <= hand[i] <= 109
 *  * 1 <= groupSize <= hand.length
 *
 *
 *
 * Note: This question is the same as 1296:
 * https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
 * [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/]
 *
 *
 *
 * https://leetcode.com/problems/hand-of-straights
 */

const sorted = (arr) => [...arr].sort((a, b) => a - b);

const chunk = (arr, size) => {
  const cardMap = arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  const useCard = (card) => {
    cardMap.set(card, cardMap.get(card) - 1);
    if (cardMap.get(card) <= 0) {
      cardMap.delete(card);
    }
  };

  // eslint-disable-next-line func-style
  function* pullCards() {
    const keyIter = cardMap.keys();
    for (let i = 0; i < size; i++) {
      yield keyIter.next().value;
    }
  }

  const result = [];
  for (let i = arr.length / size; i > 0; i--) {
    const group = [...pullCards()];
    group.forEach((card) => useCard(card));
    result.push(group);
  }
  return result;
};

const maxDifference = (arr) => {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(max, Math.abs(arr[i] - arr[i - 1]));
  }
  return max;
};

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
export const isNStraightHand = (hand, groupSize) => {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  if (groupSize === 1) {
    return true;
  }

  return chunk(sorted(hand), groupSize).every((group) => maxDifference(group) === 1);
};
