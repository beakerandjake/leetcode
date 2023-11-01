import { argv, exit } from 'node:process';
import { exec } from 'node:child_process';
import { writeFile, stat } from 'node:fs/promises';
import { LeetCode } from 'leetcode-query';
import { convert } from 'html-to-text';
import { format } from 'prettier';

/**
 * Parse the slug argument from the command line.
 */
const getSlug = () => {
  if (argv.length <= 2) {
    console.error('missing problem slug argument');
    exit(1);
  }
  return argv[2];
};

/**
 * Download the leetcode problem.
 */
const getProblem = async (slug) => {
  const problem = await new LeetCode().problem(slug);
  if (!problem) {
    throw new Error('problem not found');
  }
  return problem;
};

/**
 * Does a file exist at the path?
 */
const fileExists = async (filePath) => !!(await stat(filePath).catch(() => false));

/**
 * Returns the id of the problem.
 */
const getProblemId = ({ questionFrontendId }) => questionFrontendId;

/**
 * Returns the path to the source file.
 */
const srcFilePath = (problemId) => `src/leetcode/${problemId}.js`;

/**
 * Returns true if a file has already been created for this problem.
 */
const alreadyTouched = async (problem) => {
  return fileExists(srcFilePath(getProblemId(problem)));
};

/**
 * Convert the raw html content to plain text.
 */
const parseContent = ({ content }) => convert(content);

/**
 * Get the JS code snippet for the problem
 */
const getSnippet = ({ codeSnippets }) => {
  const code = codeSnippets.find((x) => x.lang.toLowerCase() === 'javascript')?.code;
  if (!code) {
    throw new Error('js snippet not found');
  }
  return code;
};

/**
 * Convert old school js function into es6 named export.
 */
const convertToES6 = (snippet = '') => {
  const regex = /var\s*(\w+)+\s*=\s*function\s*\(([\w,\s]+)\)\s*{\s*};/;
  const matches = snippet.match(regex);
  if (!matches) {
    console.error('could not format es6');
    return snippet;
  }
  const [line, fn, args] = matches;
  return snippet.replace(line, `export const ${fn} = (${args}) => {};`);
};

/**
 * Returns a url to the problem.
 */
const getProblemUrl = (slug) => `https://leetcode.com/problems/${slug}`;

/**
 * Wrap the lines in a single multi line comment.
 */
const wrapInComment = (...lines) => {
  const split = lines
    .map((line) => line.split('\n'))
    .flat()
    .map((line) => ` * ${line}`);
  return ['/**', ...split, ' */'].join('\n');
};

/**
 * Create the solution file.
 */
const createSolution = async (problem, problemId) => {
  const contents = [
    wrapInComment(parseContent(problem), '\n\n', getProblemUrl(getSlug())),
    convertToES6(getSnippet(problem)),
  ].join('\n\n\n');
  const formatted = format(contents, { parser: 'babel' });
  await writeFile(srcFilePath(problemId), formatted);
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
 * Returns the path to the test file.
 */
const testFilePath = (problemId) => `tests/leetcode/${problemId}.test.js`;

/**
 * Create the test file.
 */
const createTest = async (problem, problemId) => {
  const fnName = getSolutionFunction(problem);
  const contents = [
    [
      `import { ${fnName} } from '../../${srcFilePath(problemId)}'`,
      "import { arrToStr } from '../util.js'",
    ].join('\n'),
    [
      `describe('${problemId}. ${getTitle(problem)}', () => {`,
      '\t[',
      '\t\t// replace with real test data',
      '\t\t[true,false],',
      '\t].forEach(([input,expected]) => {',
      '\t\ttest(`${input} -> ${expected}`, () => {',
      `\t\t\tconst result = ${fnName}(input);`,
      '\t\t\texpect(result).toBe(expected);',
      '\t\t});',
      ' \t});',
      '});',
    ].join('\n'),
  ].join('\n\n');
  const formatted = format(contents, { parser: 'babel' });
  await writeFile(testFilePath(problemId), formatted);
};

/**
 * Open the newly created files in VS code.
 */
const openFilesInVsCode = (...files) => {
  exec(`code -r ${files.map((file) => `'${file}'`).join(' ')}`);
};

/**
 * Add the new files and commit them to the git repository.
 */
const commitFilesToGit = (problemId, ...files) => {
  exec(
    `git add ${files
      .map((file) => `'${file}'`)
      .join(' ')} && git commit -m 'touch lc ${problemId}'`
  );
};

const main = async () => {
  const problem = await getProblem(getSlug());
  // bail if invalid slug.
  if (!problem) {
    throw new Error('problem not found');
  }
  // bail if already created a file for this problem.
  if (await alreadyTouched(problem)) {
    throw new Error('problem already exists');
  }
  // create the files.
  const problemId = getProblemId(problem);
  const src = srcFilePath(problemId);
  const test = testFilePath(problemId);
  await Promise.all([createSolution(problem, problemId), createTest(problem, problemId)]);
  openFilesInVsCode(src, test);
  commitFilesToGit(problemId, src, test);
  console.log(`created src: ${src}, test: ${test}`);
};

try {
  await main();
} catch (error) {
  console.error(error.message || error);
  exit(1);
}
