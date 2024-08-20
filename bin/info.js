import 'dotenv/config';
import { env, exit } from 'node:process';
import { getProblemOrDaily } from './util/leetcode.js';
import { getArgs, parseProblemSlug } from './util/args.js';

/**
 * Returns basic information about the problem
 * @param {import('leetcode-query').Problem} problem - The problem
 */
const getBasicInfo = (problem) => {
  const { title, difficulty, likes, dislikes } = problem;
  return [
    `Title: ${title}`,
    `Difficulty: ${difficulty}`,
    `Likes: ${likes.toLocaleString()}, Dislikes: ${dislikes.toLocaleString()}`,
  ];
};

/**
 * Returns info about the problems tags
 * @param {import('leetcode-query').Problem} problem - The problem
 */
const getTags = (problem) => {
  const tags = problem.topicTags.map(({ name }) => name).filter((x) => x);
  return `Tags: ${tags.join(', ') || 'none'}`;
};

/**
 * Returns information about the problem
 *
 * Usage: npm run info [problem url | problem slug] [--tags]
 *
 * Args:
 *  - [problem url | problem slug] - The url of the leetcode problem or the slug of the problem, if not provided the problem of the day is automatically used.
 *
 * Options:
 *  - [--tags] - Should the problems tag be included in the info?
 */
const main = async () => {
  const { args, options } = getArgs();
  const problem = await getProblemOrDaily(
    parseProblemSlug(args[0]),
    env.LEETCODE_SESSION_TOKEN,
  );
  // bail if could not load problem.
  if (!problem) {
    throw new Error('problem not found');
  }
  const info = getBasicInfo(problem);
  // tags could be considered a spoiler, so only display if explicitly asked.
  if (options.tags) {
    info.push(getTags(problem));
  }
  console.log(info.join('\n'));
};

try {
  await main();
} catch (error) {
  console.error(error.message || error);
  exit(1);
}
