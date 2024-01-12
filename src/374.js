/**
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 * You call a pre-defined API int guess(int num), which returns three possible results:
 *     -1: Your guess is higher than the number I picked (i.e. num > pick).
 *     1: Your guess is lower than the number I picked (i.e. num < pick).
 *     0: your guess is equal to the number I picked (i.e. num == pick).
 * Return the number that I picked.
 */

let pick = 0;

export const setPick = (n) => {
  pick = n;
};

const guess = (num) => {
  if (num === pick) {
    return 0;
  }
  return num < pick ? 1 : -1;
};

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
export const guessNumber = (n) => {
  if (guess(n) === 0) {
    return n;
  }

  let l = 0;
  let u = n;

  while (l <= u) {
    const m = Math.floor((l + u) / 2);
    const currentGuess = guess(m);

    // your guess is equal to the number i picked
    if (currentGuess === 0) {
      return m;
    }
    // your guess is lower than the number i picked
    if (currentGuess === 1) {
      l = m + 1;
    }
    // you guess is higher than the number i picked
    else if (currentGuess === -1) {
      u = m - 1;
    }
  }

  return -1;
};
