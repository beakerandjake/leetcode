import { argv, exit } from 'node:process';
import { openFiles } from './util/vscode.js';
import { commitFilesToGit } from './util/git.js';
import * as leetcode from './util/leetcode.js';
import { createFile, fileExists } from './util/fs.js';
import { solutionFileContents, solutionFilePath } from './util/solutionFile.js';
import { testFileContents, testFilePath } from './util/testFile.js';

/**
 * Returns true if passed the --reset option.
 */
const isReset = () => argv.includes('--reset');

/**
 * Parse the slug argument from the command line.
 */
const parseSlugArg = () => {
  if (argv.length <= 2) {
    console.error('missing problem slug argument');
    exit(1);
  }
  // accept problem slug or whole url, if given whole url then strip out the slug for the user
  const arg = argv[2];
  const urlMatch = arg.match(/https:\/\/leetcode\.com\/problems\/([\w-]+)/i);
  return urlMatch ? urlMatch[1] : arg;
};

/**
 * Returns the requested problem based on the args passed in.
 * If invoked with no slug argument, then returns the daily problem
 * If invoked with a slug argument, then attempts to return the requested problem.
 */
const getProblem = async () =>
  // daily can be invoked with no args, or with 1 arg (--reset)
  argv.length <= 2 || (argv.length === 3 && isReset())
    ? await leetcode.getDailyProblem()
    : await leetcode.getProblem(parseSlugArg());
/**
 * Creates a source and test file for the problem.
 * Commits the new files to source control.
 * Attempts to open the new files in vscode.
 * Bails if the source file for the problem already exists.
 * @param {import('leetcode-query').Problem} problem - The problem
 */
const touch = async (problem) => {
  const problemId = leetcode.getProblemId(problem);
  const solutionPath = solutionFilePath(problemId);
  const testPath = testFilePath(problemId);
  // bail if already created a file for this problem.
  if (await fileExists(solutionPath)) {
    throw new Error(
      `problem: ${problemId} has already been touched: ${solutionPath} ${testPath}`,
    );
  }
  await Promise.all([
    createFile(solutionPath, await solutionFileContents(problem)),
    createFile(testPath, await testFileContents(problem)),
  ]);
  openFiles(solutionPath, testPath);
  commitFilesToGit(`touch ${problemId}`, solutionPath, testPath);
  console.log(`created solution: ${solutionPath}, test: ${testPath}`);
};

/**
 * Resets the source file of an existing problem, good for practice.
 * Bails if the source file does not exist.
 * @param {import('leetcode-query').Problem} problem - The problem
 */
const reset = async (problem) => {
  const problemId = leetcode.getProblemId(problem);
  const solutionPath = solutionFilePath(problemId);
  // can't reset if not touched.
  if (!(await fileExists(solutionPath))) {
    throw new Error(
      `cannot reset problem: ${problemId}, solution file does not exist: ${solutionPath}`,
    );
  }
  await createFile(solutionPath, await solutionFileContents(problem));
  openFiles(solutionPath, testFilePath(problemId));
  console.log(`reset solution: ${solutionPath}`);
};

try {
  const problem = await getProblem();
  // bail if could not load problem.
  if (!problem) {
    throw new Error('problem not found');
  }
  // bail if have to sign in to download.
  if (problem.isPaidOnly) {
    throw new Error('paid only problem');
  }
  await (!isReset() ? touch(problem) : reset(problem));
} catch (error) {
  console.error(error.message || error);
  exit(1);
}
