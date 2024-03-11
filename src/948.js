/**
 * You start with an initial power of power, an initial score of 0, and a bag of
 * tokens given as an integer array tokens, where each tokens[i] denotes the value
 * of tokeni.
 *
 * Your goal is to maximize the total score by strategically playing these tokens.
 * In one move, you can play an unplayed token in one of the two ways (but not both
 * for the same token):
 *
 *  * Face-up: If your current power is at least tokens[i], you may play tokeni,
 *    losing tokens[i] power and gaining 1 score.
 *  * Face-down: If your current score is at least 1, you may play tokeni, gaining
 *    tokens[i] power and losing 1 score.
 *
 * Return the maximum possible score you can achieve after playing any number of
 * tokens.
 *
 *
 *
 * Example 1:
 *
 * Input: tokens = [100], power = 50
 *
 * Output: 0
 *
 * Explanation: Since your score is 0 initially, you cannot play the token
 * face-down. You also cannot play it face-up since your power (50) is less than
 * tokens[0] (100).
 *
 * Example 2:
 *
 * Input: tokens = [200,100], power = 150
 *
 * Output: 1
 *
 * Explanation: Play token1 (100) face-up, reducing your power to 50 and increasing
 * your score to 1.
 *
 * There is no need to play token0, since you cannot play it face-up to add to your
 * score. The maximum score achievable is 1.
 *
 * Example 3:
 *
 * Input: tokens = [100,200,300,400], power = 200
 *
 * Output: 2
 *
 * Explanation: Play the tokens in this order to get a score of 2:
 *
 *  1. Play token0 (100) face-up, reducing power to 100 and increasing score to 1.
 *  2. Play token3 (400) face-down, increasing power to 500 and reducing score to
 *     0.
 *  3. Play token1 (200) face-up, reducing power to 300 and increasing score to 1.
 *  4. Play token2 (300) face-up, reducing power to 0 and increasing score to 2.
 *
 * The maximum score achievable is 2.
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= tokens.length <= 1000
 *  * 0 <= tokens[i], power < 104
 *
 *
 *
 * https://leetcode.com/problems/bag-of-tokens
 */

// returns true if enough score to play the token face up.
const canPlayFaceUp = (power, token) => power >= token;

// returns the new power and score after playing the token face up.
const playFaceUp = (power, score, token) => [power - token, score + 1];

// returns true if enough score to play the token face down.
const canPlayFaceDown = (score) => score >= 1;

// returns the new power and score after playing the token face down.
const playFaceDown = (power, score, token) => [power + token, score - 1];

// returns a new array of tokens sorted by token value ascending.
const sortedByScore = (tokens) => [...tokens].sort((a, b) => a - b);

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
export const bagOfTokensScore = (tokens, power) => {
  const sorted = sortedByScore(tokens);
  let currentPower = power;
  let currentScore = 0;
  let maxScore = currentScore;
  let left = 0;
  let right = tokens.length - 1;

  while (left <= right) {
    // bail if cannot make a move.
    if (!canPlayFaceUp(currentPower, sorted[left]) && !canPlayFaceDown(currentScore)) {
      break;
    }
    // always attempt to play smallest token face up to increase score.
    if (canPlayFaceUp(currentPower, sorted[left])) {
      const [newPower, newScore] = playFaceUp(currentPower, currentScore, sorted[left++]);
      currentPower = newPower;
      currentScore = newScore;
      maxScore = Math.max(newScore, maxScore);
    }
    // attempt to play largest token face down to increase power.
    else if (canPlayFaceDown(currentScore) && left <= right) {
      const [newPower, newScore] = playFaceDown(
        currentPower,
        currentScore,
        sorted[right--]
      );
      currentPower = newPower;
      currentScore = newScore;
    }
  }

  return maxScore;
};
