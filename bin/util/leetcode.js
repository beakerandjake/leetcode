import { LeetCode } from 'leetcode-query';

/**
 * Download the leetcode problem.
 * @param {string} slug - The problem slug
 */
export const getProblem = async (slug) => {
  const problem = await new LeetCode().problem(slug);
  if (!problem) {
    throw new Error('problem not found');
  }
  return problem;
};

/**
 * Returns the id of the problem.
 * @param {import('leetcode-query').Problem} problem - The LeetCode problem object.
 */
export const getProblemId = (problem) => problem.questionFrontendId;

/**
 * Returns the javascript code snippet for the problem
 * @param {import('leetcode-query').Problem} problem - The LeetCode problem object.
 */
export const getSnippet = (problem) => {
  const snippet = problem.codeSnippets.find(
    ({ lang }) => lang.toLowerCase() === 'javascript'
  );
  if (!snippet) {
    throw new Error('js snippet not found');
  }
  return snippet.code;
};
