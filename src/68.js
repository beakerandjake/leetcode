/**
 * Given an array of strings words and a width maxWidth, format the text such that
 * each line has exactly maxWidth characters and is fully (left and right)
 * justified.
 *
 * You should pack your words in a greedy approach; that is, pack as many words as
 * you can in each line. Pad extra spaces ' ' when necessary so that each line has
 * exactly maxWidth characters.
 *
 * Extra spaces between words should be distributed as evenly as possible. If the
 * number of spaces on a line does not divide evenly between words, the empty slots
 * on the left will be assigned more spaces than the slots on the right.
 *
 * For the last line of text, it should be left-justified, and no extra space is
 * inserted between words.
 *
 * Note:
 *
 *  * A word is defined as a character sequence consisting of non-space characters
 *    only.
 *  * Each word's length is guaranteed to be greater than 0 and not exceed
 *    maxWidth.
 *  * The input array words contains at least one word.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
 * Output:
 * [
 *    "This    is    an",
 *    "example  of text",
 *    "justification.  "
 * ]
 *
 * Example 2:
 *
 *
 * Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
 * Output:
 * [
 *   "What   must   be",
 *   "acknowledgment  ",
 *   "shall be        "
 * ]
 * Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
 * Note that the second line is also left-justified because it contains only one word.
 *
 * Example 3:
 *
 *
 * Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
 * Output:
 * [
 *   "Science  is  what we",
 *   "understand      well",
 *   "enough to explain to",
 *   "a  computer.  Art is",
 *   "everything  else  we",
 *   "do                  "
 * ]
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= words.length <= 300
 *  * 1 <= words[i].length <= 20
 *  * words[i] consists of only English letters and symbols.
 *  * 1 <= maxWidth <= 100
 *  * words[i].length <= maxWidth
 *
 *
 *
 * https://leetcode.com/problems/text-justification
 */

// returns the sum of the numbers in the array.
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

// formats a (non-last) line according to the justification rules.
// remaining space is distributed evenly between words.
const formatLine = (line, maxWidth) => {
  if (line.length === 1) {
    return line[0].padEnd(maxWidth, ' ');
  }
  // find the unused space on the line..
  const remaining = maxWidth - sum(line.map((x) => x.length));
  // distribute the unused space evenly between words.
  const spaces = [...Array(line.length - 1)].map(() => 0);
  for (let i = 0; i < remaining; i++) {
    spaces[i % spaces.length]++;
  }
  // form final line by continually appending a word then a space (while there are spaces).
  const result = [];
  for (const word of line) {
    result.push(word);
    if (spaces.length) {
      result.push(' '.repeat(spaces.shift()));
    }
  }
  return result.join('');
};

// returns a string formatted according to the last line rules.
// words are left justified with no extra spaces, padding the end to reach max width.
const formatLastLine = (line, maxWidth) => line.join(' ').padEnd(maxWidth, ' ');

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
export const fullJustify = (words, maxWidth) => {
  const result = [];
  let currentLine = [];
  let charsInCurrentLine = 0;
  while (words.length) {
    const word = words.shift();
    // if this word won't fit onto the line then start a new line.
    if (charsInCurrentLine + word.length + currentLine.length > maxWidth) {
      result.push(formatLine(currentLine, maxWidth));
      currentLine = [];
      charsInCurrentLine = 0;
    }
    currentLine.push(word);
    charsInCurrentLine += word.length;
  }
  // ensure the last line is formatted according to the special rules.
  if (currentLine.length) {
    result.push(formatLastLine(currentLine, maxWidth));
  }
  return result;
};
