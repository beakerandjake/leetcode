import { LeetCode, Credential } from 'leetcode-query';

/**
 * Returns a url to the problem.
 */
export const getProblemUrl = (slug) => `https://leetcode.com/problems/${slug}`;

/**
 * Returns a new LeetCode instance.
 * @param {string} sessionToken - Optional leetcode session token, required if attempting to load a paid problem.
 */
const leetcodeFactory = async (sessionToken) => {
  if (!sessionToken) {
    return new LeetCode();
  }
  const credential = new Credential();
  await credential.init(sessionToken);
  return new LeetCode(credential);
};

/**
 * Download the leetcode problem.
 * @param {string} slug - The problem slug
 * @param {string} sessionToken - Optional leetcode session token, required if attempting to load a paid problem.
 */
export const getProblem = async (slug, sessionToken) => {
  const leetcode = await leetcodeFactory(sessionToken);
  return await leetcode.problem(slug);
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
    ({ lang }) => lang.toLowerCase() === 'javascript',
  );
  if (!snippet) {
    throw new Error('js snippet not found');
  }
  return snippet.code;
};

/**
 * Returns information about the problem of the day
 * @param {string} sessionToken - Optional leetcode session token, required if attempting to load a paid problem.
 */
export const getDailyProblem = async (sessionToken) => {
  const leetcode = await leetcodeFactory(sessionToken);
  const problem = await leetcode.daily();
  return problem?.question;
};
