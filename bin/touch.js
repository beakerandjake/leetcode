import { argv, exit } from 'node:process';
import { openFiles } from './util/vscode.js';
import { commitFilesToGit } from './util/git.js';
import { getProblem, getProblemId } from './util/leetcode.js';
import { createFile, fileExists } from './util/fs.js';
import { solutionFileContents, solutionFilePath } from './util/solutionFile.js';
import { testFileContents, testFilePath } from './util/testFile.js';
/**
 * Parse the slug argument from the command line.
 */
const getSlug = () => {
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
 * Returns true if passed the --reset option.
 */
const isReset = () => argv[3] === '--reset';

const touch = async (problem) => {
  const problemId = getProblemId(problem);
  const solutionPath = solutionFilePath(problemId);
  const testPath = testFilePath(problemId);

  // bail if already created a file for this problem.
  if (await fileExists(solutionPath)) {
    throw new Error('problem already exists');
  }
  // create the files.
  await Promise.all([
    createFile(solutionPath, solutionFileContents(problem)),
    createFile(testPath, testFileContents(problem)),
  ]);
  openFiles(solutionPath, testPath);
  // commitFilesToGit(`touch ${problemId}`, solutionPath, testPath);
  console.log(`created src: ${solutionPath}, test: ${testPath}`);
};

/**
 * Clear the implementation of an existing problem, good for practice
 */
const reset = async (problem) => {
  const problemId = getProblemId(problem);
  const solutionPath = solutionFilePath(problemId);

  if (!(await fileExists(solutionPath))) {
    throw new Error('cannot rest problem, does not exit');
  }
  await createFile(solutionPath, solutionFileContents(problem));
  openFiles(solutionPath, testFilePath(problemId));
};

const main = async () => {
  const problem = await getProblem(getSlug());
  // bail if invalid slug.
  if (!problem) {
    throw new Error('problem not found');
  }
  // bail if have to sign in to download.
  if (problem.isPaidOnly) {
    throw new Error('paid only problem');
  }
  await (!isReset() ? touch(problem) : reset(problem));
};

try {
  await main();
} catch (error) {
  console.error(error.message || error);
  exit(1);
}
