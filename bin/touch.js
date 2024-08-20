import 'dotenv/config';
import { env, exit } from 'node:process';
import { getArgs, parseProblemSlug } from './util/args.js';
import { createFile, fileExists } from './util/fs.js';
import { commitFilesToGit } from './util/git.js';
import * as leetcode from './util/leetcode.js';
import { solutionFileContents, solutionFilePath } from './util/solutionFile.js';
import { testFileContents, testFilePath } from './util/testFile.js';
import { openFiles } from './util/vscode.js';

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

/**
 * Creates the source code and test file for a specified leetcode problem
 *
 * Usage: npm run touch [problem url | problem slug] [--reset]
 *
 * Args:
 *  - [problem url | problem slug] - The url of the leetcode problem or the slug of the problem, if not provided the problem of the day is automatically used.
 *
 * Options:
 *  - [--reset] - Resets an existing problems source code
 */
const main = async () => {
  const { args, options } = getArgs();
  // if user does not provide a problem slug argument, then load the daily problem instead.
  const problem = await leetcode.getProblemOrDaily(
    parseProblemSlug(args[0]),
    env.LEETCODE_SESSION_TOKEN,
  );
  // bail if could not load problem.
  if (!problem) {
    throw new Error('problem not found');
  }
  // bail if problem is premium and authentication failed / user does not have premium.
  if (problem.isPaidOnly && !problem.content) {
    throw new Error('premium problem, authentication required.');
  }
  // user can optionally reset an existing problem
  const op = options.reset ? reset : touch;
  await op(problem);
};

try {
  await main();
} catch (error) {
  console.error(error.message || error);
  exit(1);
}
