/**
 * You are given two strings sentence1 and sentence2, each representing a sentence
 * composed of words. A sentence is a list of words that are separated by a single
 * space with no leading or trailing spaces. Each word consists of only uppercase
 * and lowercase English characters.
 *
 * Two sentences s1 and s2 are considered similar if it is possible to insert an
 * arbitrary sentence (possibly empty) inside one of these sentences such that the
 * two sentences become equal. Note that the inserted sentence must be separated
 * from existing words by spaces.
 *
 * For example,
 *
 *  * s1 = "Hello Jane" and s2 = "Hello my name is Jane" can be made equal by
 *    inserting "my name is" between "Hello" and "Jane" in s1.
 *  * s1 = "Frog cool" and s2 = "Frogs are cool" are not similar, since although
 *    there is a sentence "s are" inserted into s1, it is not separated from "Frog"
 *    by a space.
 *
 * Given two sentences sentence1 and sentence2, return true if sentence1 and
 * sentence2 are similar. Otherwise, return false.
 *
 *
 *
 * Example 1:
 *
 * Input: sentence1 = "My name is Haley", sentence2 = "My Haley"
 *
 * Output: true
 *
 * Explanation:
 *
 * sentence2 can be turned to sentence1 by inserting "name is" between "My" and
 * "Haley".
 *
 * Example 2:
 *
 * Input: sentence1 = "of", sentence2 = "A lot of words"
 *
 * Output: false
 *
 * Explanation:
 *
 * No single sentence can be inserted inside one of the sentences to make it equal
 * to the other.
 *
 * Example 3:
 *
 * Input: sentence1 = "Eating right now", sentence2 = "Eating"
 *
 * Output: true
 *
 * Explanation:
 *
 * sentence2 can be turned to sentence1 by inserting "right now" at the end of the
 * sentence.
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= sentence1.length, sentence2.length <= 100
 *  * sentence1 and sentence2 consist of lowercase and uppercase English letters
 *    and spaces.
 *  * The words in sentence1 and sentence2 are separated by a single space.
 *
 *
 *
 * https://leetcode.com/problems/sentence-similarity-iii
 */

// returns the words of the sentence
const words = (sentence) => sentence.split(' ');

// returns the number of common elements at the start of the arrays.
const commonPrefixLength = (a, b, index) =>
  index < a.length && index < b.length && a[index] === b[index]
    ? 1 + commonPrefixLength(a, b, index + 1)
    : 0;

// returns the number of common elements from the end of the arrays.
const commonSuffixLength = (a, b, aIndex, bIndex) =>
  aIndex >= 0 && bIndex >= 0 && a[aIndex] === b[bIndex]
    ? 1 + commonSuffixLength(a, b, aIndex - 1, bIndex - 1)
    : 0;

// returns true if the arrays can be made equal by a single insert operation of one or more elements.
const areSimilar = (a, b) => {
  if (!a.length || !b.length) {
    return true;
  }
  const prefix = commonPrefixLength(a, b, 0);
  const suffix = commonSuffixLength(a, b, a.length - 1, b.length - 1);
  return (
    !!(prefix + suffix) &&
    areSimilar(
      a.slice(prefix, -suffix || undefined),
      b.slice(prefix, -suffix || undefined),
    )
  );
};

export const areSentencesSimilar = (a, b) => a === b || areSimilar(words(a), words(b));
