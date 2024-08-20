import { exit } from 'node:process';
import { readFile, readdir } from 'node:fs/promises';
import { getArgs } from './util/args.js';

const LC_DIR = 'src/';
const INPUT_FILE = 'bin/ctci-to-lc.txt';

/**
 * Load the lines of the mapping file into an array.
 */
const getBookMapping = async () => {
  const raw = await readFile(INPUT_FILE, 'utf8');
  return raw.split('\n');
};

/**
 * Returns an array of completed lc problems.
 */
const getCompletedProblems = async () => {
  const fileNames = await readdir(LC_DIR);
  return fileNames.map((fileName) => fileName.replace('.js', ''));
};

/**
 * Returns an array of the lc problems from the mapping.
 */
const getBookProblems = (mapping) =>
  mapping.flatMap((line) => {
    const [_, lc] = line.split(' = ');
    return lc ? lc.split(',') : [];
  });

/**
 * Returns an array containing the union of the two arrays.
 */
const union = (a, b) => {
  const aSet = new Set(a);
  return b.filter((x) => aSet.has(x));
};

/**
 * Returns an array containing the items in a which were not in b.
 */
const difference = (a, b) => {
  const bSet = new Set(b);
  return a.filter((x) => !bSet.has(x));
};

/**
 * Print the remaining book problems to the console.
 */
const remaining = async () => {
  const bookMapping = await getBookMapping();
  const bookProblems = getBookProblems(bookMapping);
  const lcProblems = await getCompletedProblems();
  for (const problem of difference(bookProblems, lcProblems)) {
    console.log(problem);
  }
};

/**
 * Prints the completion percentage of the book to the console.
 */
const completion = async () => {
  const bookMapping = await getBookMapping();
  const bookProblems = getBookProblems(bookMapping);
  const lcProblems = await getCompletedProblems();
  const completed = union(bookProblems, lcProblems);
  const b = bookProblems.length;
  const c = completed.length;
  console.log(`completed ${c}/${b} (${Math.floor((c / b) * 100)})%`);
};

/**
 * Returns the number of problems solved out of the book Cracking the Coding Interview
 *
 * Usage: npm run ctci [--remaining]
 *
 * Options:
 *  - [--remaining] - Shows the problem id of the remaining problems instead
 */
const main = async () => {
  const { options } = getArgs();
  const op = options.remaining ? remaining : completion;
  await op();
};

try {
  await main();
} catch (error) {
  console.error(error.message || error);
  exit(1);
}
