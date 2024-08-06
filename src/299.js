/**
 * You are playing the Bulls and Cows
 * [https://en.wikipedia.org/wiki/Bulls_and_Cows] game with your friend.
 *
 * You write down a secret number and ask your friend to guess what the number is.
 * When your friend makes a guess, you provide a hint with the following info:
 *
 *  * The number of "bulls", which are digits in the guess that are in the correct
 *    position.
 *  * The number of "cows", which are digits in the guess that are in your secret
 *    number but are located in the wrong position. Specifically, the non-bull
 *    digits in the guess that could be rearranged such that they become bulls.
 *
 * Given the secret number secret and your friend's guess guess, return the hint
 * for your friend's guess.
 *
 * The hint should be formatted as "xAyB", where x is the number of bulls and y is
 * the number of cows. Note that both secret and guess may contain duplicate
 * digits.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: secret = "1807", guess = "7810"
 * Output: "1A3B"
 * Explanation: Bulls are connected with a '|' and cows are underlined:
 * "1807"
 *   |
 * "7810"
 *
 * Example 2:
 *
 *
 * Input: secret = "1123", guess = "0111"
 * Output: "1A1B"
 * Explanation: Bulls are connected with a '|' and cows are underlined:
 * "1123"        "1123"
 *   |      or     |
 * "0111"        "0111"
 * Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= secret.length, guess.length <= 1000
 *  * secret.length == guess.length
 *  * secret and guess consist of digits only.
 *
 *
 *
 * https://leetcode.com/problems/bulls-and-cows
 */

const frequencyCount = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
export const getHint = (secret, guess) => {
  const secretChars = frequencyCount(secret);
  let bulls = 0;
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) {
      secretChars.set(secret[i], secretChars.get(secret[i]) - 1);
      bulls++;
    }
  }
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] !== guess[i] && secretChars.get(guess[i]) > 0) {
      secretChars.set(guess[i], secretChars.get(guess[i]) - 1);
      cows++;
    }
  }

  return `${bulls}A${cows}B`;
};
