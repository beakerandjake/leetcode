import { argv, exit } from 'node:process';
import { openFiles } from './util/vscode.js';
import { commitFilesToGit } from './util/git.js';
import { getProblem, getProblemId, getSnippet } from './util/leetcode.js';
import { createFile, fileExists, testFilePath } from './util/fs.js';
import { format, functionName } from './util/code.js';
import { solutionFileContents, solutionFilePath } from './util/solutionFIle.js';

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

/**
 * Returns the title of the problem.
 */
const getTitle = ({ title }) => title;

/**
 * Returns an new string with each matching character escaped by a backslash.
 */
const escape = (string, ...chars) => {
  let result = string;
  for (const char of chars) {
    result = result.replace(char, `\\${char}`);
  }
  return result;
};

/**
 * Create the test file.
 */
const createTest = async (problem, problemId) => {
  const fnName = functionName(getSnippet(problem));
  const contents = [
    [
      `import { ${fnName} } from '../${solutionFilePath(problemId)}'`,
      "import { generateTestName } from './util.js'",
    ].join('\n'),
    [
      `describe('${problemId}. ${escape(getTitle(problem), "'")}', () => {`,
      '\t[].forEach((args) => {',
      '\t\tconst [input, expected] = args;',
      `\t\ttest(generateTestName(${fnName}, ...args), () => {`,
      `\t\t\tconst result = ${fnName}(input);`,
      '\t\t\texpect(result).toBe(expected);',
      '\t\t});',
      ' \t});',
      '});',
    ].join('\n'),
  ].join('\n\n');
  const formatted = format(contents, { parser: 'babel' });
  await createFile(testFilePath(problemId), formatted);
};

const touch = async (problem) => {
  const problemId = getProblemId(problem);
  const solutionPath = solutionFilePath(problemId);
  // bail if already created a file for this problem.
  if (await fileExists(solutionPath)) {
    throw new Error('problem already exists');
  }
  // create the files.
  const test = testFilePath(problemId);
  await Promise.all([
    createFile(solutionPath, solutionFileContents(problem)),
    createTest(problem, problemId),
  ]);
  openFiles(solutionPath, test);
  // commitFilesToGit(`touch ${problemId}`, src, test);
  console.log(`created src: ${solutionPath}, test: ${test}`);
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
