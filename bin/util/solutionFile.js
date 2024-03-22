import { getProblemUrl, getSnippet } from './leetcode.js';
import { toPlainText } from './html.js';
import { convertSolutionSnippet, format, wrapInComment } from './code.js';

/**
 * Returns the path to the source file.
 * @param {string} problemId - The id of the LeetCode Problem.
 */
export const solutionFilePath = (problemId) => `src/${problemId}.js`;

/**
 * Generates and returns the code for the problems solution file.
 * @param {import('leetcode-query').Problem} problem - The LeetCode problem object.
 * @returns {string}
 */
export const solutionFileContents = (problem) =>
  format(
    [
      wrapInComment(
        toPlainText(problem.content),
        '\n\n',
        getProblemUrl(problem.titleSlug)
      ),
      convertSolutionSnippet(getSnippet(problem)),
    ].join('\n\n\n')
  );
