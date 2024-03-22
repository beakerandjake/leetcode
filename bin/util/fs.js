import { writeFile, stat } from 'node:fs/promises';

/**
 * Does a file exist at the path?
 * @param {string} filePath - The path of the file.
 */
export const fileExists = async (filePath) => !!(await stat(filePath).catch(() => false));

/**
 * Creates a file at path, with the content.
 * @param {string} path - The file path.
 * @param {string} content - The content of the file.
 */
export const createFile = async (path, content) => await writeFile(path, content);
