import { exec } from 'node:child_process';

/**
 * Open the specified files in VS code.
 * @param {...string} files - The names of the files to open. 
 */
export const openFiles = (...files) => {
  if (!files.length) {
    return;
  }
  exec(`code -r ${files.map((file) => `'${file}'`).join(' ')}`);
};
