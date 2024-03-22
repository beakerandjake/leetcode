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
    `
    import { ${fnName} } from '../${solutionFilePath(problemId)}';
    import { generateTestName } from './util.js';

    describe('${problemId}. ${problem.title.replace("'", "\\'")}', () => {
      [].forEach((args) => {
        const [input, expected] = args;
        test(generateTestName(${fnName}, ...args), () => {
          const result = ${fnName}(input);
          expect(result).toBe(expected);
        });
      });
    });
    `
  );
};
