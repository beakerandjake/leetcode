import { exec } from 'node:child_process';

/**
 * Add the files and commits them to the repository.
 * @param {string} message - The commit message.
 * @param {...string} files - The names of the files to commit.
 */
export const commitFilesToGit = (message, ...files) => {
  if (!message || !files.length) {
    return;
  }
  exec(
    `git add ${files.map((file) => `'${file}'`).join(' ')} && git commit -m '${message}'`
  );
};
