import { writeFile, stat } from 'node:fs/promises';

/**
 * Returns the path to the source file.
 * @param {string} problemId - The id of the LeetCode Problem.
 */
export const srcFilePath = (problemId) => `src/${problemId}.js`;

/**
 * Returns the path to the test file.
 * @param {string} problemId - The id of the LeetCode Problem.
 */
export const testFilePath = (problemId) => `tests/${problemId}.test.js`;

/**
 * Does a file exist at the path?
 * @param {string} filePath - The path of the file.
 */
export const fileExists = async (filePath) => !!(await stat(filePath).catch(() => false));

/**
 * Returns true if a file has already been created for this problem.
 * @param {string} problemId - The id of the LeetCode problem
 */
export const alreadyTouched = async (problemId) =>
  await fileExists(srcFilePath(problemId));

/**
 * Creates a file at path, with the content.
 * @param {string} path - The file path.
 * @param {string} content - The content of the file.
 */
export const createFile = async (path, content) => await writeFile(path, content);
