import { argv } from 'node:process';

/**
 * Converts the options array to an object.
 * Each option present becomes a property on the resulting object.
 * Supports basic boolean options:
 *  - The option (without the leading --) becomes the key of the property.
 *  - The value of the property will be true.
 * @param {string[]} arr - The cli options provided to the program
 */
const toOptionsObject = (arr) =>
  arr
    .map((x) => x.slice(2))
    .reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});

/**
 * Loads the command line arguments and options provided by the user.
 * @returns {{args:string[], options: object}}
 */
export const getArgs = () => {
  const raw = argv.slice(2);
  const [args, options] = raw.reduce(
    (acc, x) => {
      // expect options have format '--option'
      if (x.startsWith('--')) {
        acc[1].push(x);
      } else {
        acc[0].push(x);
      }
      return acc;
    },
    [[], []],
  );
  return { args, options: toOptionsObject(options) };
};

/**
 * Parse the problem slug argument from the command line.
 * @param {string} problemSlug - The raw problem slug or problem url to parse.
 * @returns {string|null} The problem slug (or null if not present in argv)
 */
export const parseProblemSlug = (problemSlug) => {
  if (!problemSlug) {
    return null;
  }
  // if user passes url as the argument then strip out the problem slug
  const urlMatch = problemSlug.match(/https:\/\/leetcode\.com\/problems\/([\w-]+)/i);
  // if user passed url then return the stripped out slug, otherwise assume user passed slut
  return urlMatch ? urlMatch[1] : problemSlug;
};
