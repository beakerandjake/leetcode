/**
 * You own a Goal Parser that can interpret a string command. The command consists
 * of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will
 * interpret "G" as the string "G", "()" as the string "o", and "(al)" as the
 * string "al". The interpreted strings are then concatenated in the original
 * order.
 *
 * Given the string command, return the Goal Parser's interpretation of command.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: command = "G()(al)"
 * Output: "Goal"
 * Explanation: The Goal Parser interprets the command as follows:
 * G -> G
 * () -> o
 * (al) -> al
 * The final concatenated result is "Goal".
 *
 *
 * Example 2:
 *
 *
 * Input: command = "G()()()()(al)"
 * Output: "Gooooal"
 *
 *
 * Example 3:
 *
 *
 * Input: command = "(al)G(al)()()G"
 * Output: "alGalooG"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= command.length <= 100
 *  * command consists of "G", "()", and/or "(al)" in some order.
 *
 *
 *
 * https://leetcode.com/problems/goal-parser-interpretation
 */

const bruteForce = (command) => {
  const translations = new Map([
    ['G', 'G'],
    ['()', 'o'],
    ['(al)', 'al'],
  ]);

  const consume = (str, start) => {
    let consumed = '';
    let current = start;
    while (current <= str.length) {
      consumed += str[current];
      if (translations.has(consumed)) {
        return { translated: translations.get(consumed), endIndex: current };
      }
      current++;
    }
    return {};
  };

  const results = [];
  let index = 0;
  while (index < command.length) {
    const { translated, endIndex } = consume(command, index);
    results.push(translated);
    index = endIndex + 1;
  }
  return results.join('');
};

const reduce = (() => {
  const translations = new Map([
    ['()', 'o'],
    ['(al)', 'al'],
  ]);

  return (command) =>
    [...translations].reduce((acc, [from, to]) => acc.replaceAll(from, to), command);
})();

/**
 * @param {string} command
 * @return {string}
 */
export const interpret = (command) =>
  command.replaceAll('()', 'o').replaceAll(/[()]/g, '');
