import { LeetCode, Credential } from 'leetcode-query';

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
 * Returns a url to the problem.
 */
export const getProblemUrl = (slug) => `https://leetcode.com/problems/${slug}`;

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
 * Download the leetcode problem.
 * @param {string} slug - The problem slug
 * @param {string} sessionToken - Optional leetcode session token, required if attempting to load a paid problem.
 */
export const getProblem = async (slug, sessionToken) => {
  const leetcode = await leetcodeFactory(sessionToken);
  return await leetcode.problem(slug);
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

/**
 * Returns the problem with the specified problem slug, or the daily problem if no slug provided
 * @param {string} problemSlug - The slug of the problem to load
 * @param {string} token - The leetcode session token used for premium problems
 * @returns {Promise<import('leetcode-query').Problem>} problem - The problem
 */
export const getProblemOrDaily = async (problemSlug, sessionToken) =>
  problemSlug
    ? await getProblem(problemSlug, sessionToken)
    : await getDailyProblem(sessionToken);
