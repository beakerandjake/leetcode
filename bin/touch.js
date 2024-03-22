import { argv, exit } from 'node:process';
import { openFiles } from './util/vscode.js';
import { commitFilesToGit } from './util/git.js';
import { getProblem, getProblemId, getProblemUrl, getSnippet } from './util/leetcode.js';
import { alreadyTouched, createFile, srcFilePath, testFilePath } from './util/fs.js';
import { toPlainText } from './util/html.js';
import { convertSolutionSnippet, format, wrapInComment } from './util/code.js';

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
 * Create the solution file.
 */
const createSolution = async (problem, problemId) => {
  await createFile(
    srcFilePath(problemId),
    format(
      [
        wrapInComment(toPlainText(problem.content), '\n\n', getProblemUrl(getSlug())),
        convertSolutionSnippet(getSnippet(problem)),
      ].join('\n\n\n')
    )
  );
};

/**
 * Returns the name of the function exported by the solution file.
 */
const getSolutionFunction = (problem) => /var ([\w]+)/.exec(getSnippet(problem))[1];

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
  const fnName = getSolutionFunction(problem);
  const contents = [
    [
      `import { ${fnName} } from '../${srcFilePath(problemId)}'`,
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

  // bail if already created a file for this problem.
  if (await alreadyTouched(problemId)) {
    throw new Error('problem already exists');
  }

  // create the files.
  const src = srcFilePath(problemId);
  const test = testFilePath(problemId);
  await Promise.all([createSolution(problem, problemId), createTest(problem, problemId)]);
  openFiles(src, test);
  commitFilesToGit(`touch ${problemId}`, src, test);
  console.log(`created src: ${src}, test: ${test}`);
};

/**
 * Clear the implementation of an existing problem, good for practice
 */
const reset = async (problem) => {
  if (!(await alreadyTouched(problem))) {
    throw new Error('problem does not exit');
  }
  const problemId = getProblemId(problem);
  const src = srcFilePath(problemId);
  await createSolution(problem, problemId);
  openFiles(src, testFilePath(problemId));
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
