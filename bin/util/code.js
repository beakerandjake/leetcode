import { format as prettier } from 'prettier';

/**
 * Converts the original LeetCode snippet into one which can be used by this project.
 * @param {string} original - The original leetcode snippet.
 */
export const convertSolutionSnippet = (original) => {
  // match the actual code portion of the snippet (snippet may also include comments).
  const matches = original.match(/var\s*(\w+)+\s*=\s*function\s*\(([\w,\s]+)\)\s*{\s*};/);
  if (!matches) {
    console.error('could not format es6');
    return original;
  }
  // replace the original code, ensuring that the function is exported for testing.
  const [line, fn, args] = matches;
  return original.replace(line, `export const ${fn} = (${args}) => {};`);
};

/**
 * Wrap the lines in a single multi line comment.
 * @param {...string} lines - The lines to wrap.
 */
export const wrapInComment = (...lines) => {
  const split = lines
    .map((line) => line.split('\n'))
    .flat()
    .map((line) => ` * ${line}`);
  return ['/**', ...split, ' */'].join('\n');
};

/**
 * Applies project standard formatting to the code.
 * @param {string} code - The code to format.
 * @returns {string}
 */
export const format = (code) => prettier(code, { parser: 'babel' });

/**
 * Returns the name of the function exported by the solution file.
 */
export const functionName = (code) => /var ([\w]+)/.exec(code)[1];
