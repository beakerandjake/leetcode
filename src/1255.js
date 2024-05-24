/**
 * Given a list of words, list of  single letters (might be repeating) and score of
 * every character.
 *
 * Return the maximum score of any valid set of words formed by using the given
 * letters (words[i] cannot be used two or more times).
 *
 * It is not necessary to use all characters in letters and each letter can only be
 * used once. Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0],
 * score[1], ... , score[25] respectively.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
 * Output: 23
 * Explanation:
 * Score  a=1, c=9, d=5, g=3, o=2
 * Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
 * Words "dad" and "dog" only get a score of 21.
 *
 * Example 2:
 *
 *
 * Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
 * Output: 27
 * Explanation:
 * Score  a=4, b=4, c=4, x=5, z=10
 * Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
 * Word "xxxz" only get a score of 25.
 *
 * Example 3:
 *
 *
 * Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
 * Output: 0
 * Explanation:
 * Letter "e" can only be used once.
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= words.length <= 14
 *  * 1 <= words[i].length <= 15
 *  * 1 <= letters.length <= 100
 *  * letters[i].length == 1
 *  * score.length == 26
 *  * 0 <= score[i] <= 10
 *  * words[i], letters[i] contains only lower case English letters.
 *
 *
 *
 * https://leetcode.com/problems/maximum-score-words-formed-by-letters
 */

// maps each item in the array to the number of times it occurs.
const frequencyCount = (arr) =>
  arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

// returns true if the two maps overlap (b contains every key of a, and every value of b is larger than the value of a).
const overlaps = (a, b) => {
  for (const [k, v] of a) {
    if (!b.has(k) || b.get(k) < v) {
      return false;
    }
  }
  return true;
};

// returns the frequency map of all words which can be constructed using the letter bank.
const possibleWords = (words, letterBank) =>
  words
    .map((word) => frequencyCount([...word]))
    .filter((word) => overlaps(word, letterBank));

// eslint-disable-next-line func-style
function* subsets(arr) {
  for (let mask = 2 ** arr.length - 1; mask > 0; mask--) {
    const subset = [];
    for (let bit = 0; bit < arr.length; bit++) {
      if (mask & (1 << bit)) {
        subset.push(arr[bit]);
      }
    }
    yield subset;
  }
}

// returns the new letter bank after using all the words letters.
const useWord = (word, letterBank) => {
  const newBank = new Map(letterBank);
  for (const [letter, count] of word) {
    newBank.set(letter, newBank.get(letter) - count);
    if (newBank.get(letter) === 0) {
      newBank.delete(letter);
    }
  }
  return newBank;
};

// returns the score of the word.
const scoreWord = (word, letterScores) =>
  [...word].reduce(
    (acc, [letter, count]) => acc + letterScores[letter.charCodeAt() - 97] * count,
    0,
  );

// returns the score of the subset (returns 0 if not possible to build subset from letter bank)
const subsetScore = (subset, letterBank, letterScores) => {
  let score = 0;
  let remaining = new Map(letterBank);
  for (const word of subset) {
    // if not possible to build this word, not possible to build subset.
    if (!overlaps(word, remaining)) {
      return 0;
    }
    remaining = useWord(word, remaining);
    score += scoreWord(word, letterScores);
  }
  return score;
};

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} letterScores
 * @return {number}
 */
export const maxScoreWords = (words, letters, letterScores) => {
  const bank = frequencyCount(letters);
  const scores = [...subsets(possibleWords(words, bank))].map((subset) =>
    subsetScore(subset, bank, letterScores),
  );
  return Math.max(...scores, 0);
};
