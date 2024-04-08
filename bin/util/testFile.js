import { format, functionName } from './code.js';
import { toPlainText } from './html.js';
import { getProblemId, getSnippet } from './leetcode.js';
import { solutionFilePath } from './solutionFile.js';

/**
 * Returns the path to the test file.
 * @param {string} problemId - The id of the LeetCode Problem.
 */
export const testFilePath = (problemId) => `tests/${problemId}.test.js`;

/**
 * Returns
 * @param {string} content - The content of the Problem.
 */
export const extractExamples = (() => {
  /**
   * Parses and returns all arguments from an "Input: arg1 = val1, ..., argN = valN" line of the example.
   */
  const parseInput = (input) =>
    input
      .replace(/Input:\s*/, '')
      .split(', ')
      .map((arg) => arg.split(' = '))
      .map(([name, value]) => ({ name, value: JSON.parse(value) }));

  /**
   * Parses and returns the value from the "Output: val" line of the example.
   */
  const parseOutput = (output) => {
    const value = output.replace(/Output:\s*/, '');
    return JSON.parse(value);
  };

  return (content) => {
    try {
      const results = [];
      const examples = content.matchAll(/(Input:.*)\s+(Output:.*)/gm);
      for (const [, rawInput, rawOutput] of examples) {
        results.push({
          args: parseInput(rawInput),
          expected: parseOutput(rawOutput),
        });
      }
      return results;
    } catch (err) {
      console.error('Failed to parse test cases from Problem content.', err);
      return [];
    }
  };
})();

/**
 * Maps each example into a test case array in the form of [input1, ...inputN, expected].
 */
const getTestCases = (examples) =>
  examples.map(({ expected, args }) => [...args.map(({ value }) => value), expected]);

/**
 * Returns an array of arg names that will be passed to the function.
 */
const getArgNames = (examples) =>
  examples.length ? examples[0].args.map(({ name }) => name).join(',') : '';

/**
 * Returns the correct jest assertion based on the type the function should return.
 */
const getAssertionFn = (examples) => {
  if (!examples.length) {
    return 'toBe';
  }
  return Array.isArray(examples.at(0).expected) ? 'toEqual' : 'toBe';
};

/**
 * Generates and returns the code for the problems test file.
 * @param {import('leetcode-query').Problem} problem - The LeetCode problem object.
 * @returns {Promise<string>}
 */
export const testFileContents = (problem) => {
  const problemId = getProblemId(problem);
  const fnName = functionName(getSnippet(problem));
  const examples = extractExamples(toPlainText(problem.content));
  const testCases = getTestCases(examples);
  const fnArgs = getArgNames(examples);
  return format(
    `
    import { ${fnName} } from '../${solutionFilePath(problemId)}';
    import { generateTestName } from './util.js';

    describe('${problemId}. ${problem.title.replace("'", "\\'")}', () => {
      ${JSON.stringify(testCases)}.forEach((args) => {
        const [${fnArgs}, expected] = args;
        test(generateTestName(${fnName}, ...args), () => {
          const result = ${fnName}(${fnArgs});
          expect(result).${getAssertionFn(examples)}(expected);
        });
      });
    });
    `
  );
};
