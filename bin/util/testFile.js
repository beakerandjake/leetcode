import { format, functionName } from './code.js';
import { getProblemId, getSnippet } from './leetcode.js';
import { solutionFilePath } from './solutionFile.js';

/**
 * Returns the path to the test file.
 * @param {string} problemId - The id of the LeetCode Problem.
 */
export const testFilePath = (problemId) => `tests/${problemId}.test.js`;

/**
 * Generates and returns the code for the problems test file.
 * @param {import('leetcode-query').Problem} problem - The LeetCode problem object.
 * @returns {string}
 */
export const testFileContents = (problem) => {
  const problemId = getProblemId(problem);
  const fnName = functionName(getSnippet(problem));
  return format(
    [
      [
        `import { ${fnName} } from '../${solutionFilePath(problemId)}'`,
        "import { generateTestName } from './util.js'",
      ].join('\n'),
      [
        `describe('${problemId}. ${problem.title.replace("'", "\\'")}', () => {`,
        '\t[].forEach((args) => {',
        '\t\tconst [input, expected] = args;',
        `\t\ttest(generateTestName(${fnName}, ...args), () => {`,
        `\t\t\tconst result = ${fnName}(input);`,
        '\t\t\texpect(result).toBe(expected);',
        '\t\t});',
        ' \t});',
        '});',
      ].join('\n'),
    ].join('\n\n')
  );
};
