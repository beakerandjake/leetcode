import { argv, exit } from 'node:process';
import { writeFile, stat } from 'node:fs/promises';
import { LeetCode } from 'leetcode-query';
import { convert } from 'html-to-text';
import { format } from 'prettier';

/**
 * Parse the slug argument from the command line.
 */
const getSlug = () => {
  if (argv.length <= 2) {
    console.error('missing problem slug argument');
    exit(1);
  }
  return argv[2];
};

/**
 * Download the leetcode problem.
 */
const getProblem = async (slug) => {
  const problem = await new LeetCode().problem(slug);
  if (!problem) {
    throw new Error('problem not found');
  }
  return problem;
};

/**
 * Does a file exist at the path?
 */
const fileExists = async (filePath) => !!(await stat(filePath).catch(() => false));

/**
 * Returns the id of the problem.
 */
const getProblemId = ({ questionFrontendId }) => questionFrontendId;

/**
 * Returns the path to the source file.
 */
const srcFilePath = (problemId) => `./src/leetcode/${problemId}.js`;

/**
 * Returns true if a file has already been created for this problem.
 */
const alreadyTouched = async (problem) => {
  return fileExists(srcFilePath(getProblemId(problem)));
};

/**
 * Convert the raw html content to plain text.
 */
const parseContent = ({ content }) => convert(content);

/**
 * Get the JS code snippet for the problem
 */
const getSnippet = ({ codeSnippets }) => {
  const code = codeSnippets.find((x) => x.lang.toLowerCase() === 'javascript')?.code;
  if (!code) {
    throw new Error('js snippet not found');
  }
  return code;
};

/**
 * Convert old school js function into es6 named export.
 */
const convertToES6 = (snippet) =>
  snippet.replace('var', 'export const').replace('function', '').replace(') {', ') => {');

/**
 * Returns a url to the problem.
 */
const getProblemUrl = (slug) => `https://leetcode.com/problems/${slug}`;

/**
 * Wrap the lines in a single multi line comment.
 */
const wrapInComment = (...lines) => {
  const split = lines
    .map((line) => line.split('\n'))
    .flat()
    .map((line) => ` * ${line}`);
  return ['/**', ...split, ' */'].join('\n');
};

/**
 * Save the solution file to the directory.
 */
const saveSolutionFile = async (problem) => {
  const contents = [
    wrapInComment(parseContent(problem), '\n\n', getProblemUrl(getSlug())),
    convertToES6(getSnippet(problem)),
  ].join('\n\n\n');
  const formatted = format(contents, { parser: 'babel' });
  await writeFile(`./src/leetcode/${getProblemId(problem)}.js`, formatted);
};

const problem = {
  questionId: '1458',
  questionFrontendId: '1356',
  boundTopicId: null,
  title: 'Sort Integers by The Number of 1 Bits',
  titleSlug: 'sort-integers-by-the-number-of-1-bits',
  content:
    '<p>You are given an integer array <code>arr</code>. Sort the integers in the array&nbsp;in ascending order by the number of <code>1</code>&#39;s&nbsp;in their binary representation and in case of two or more integers have the same number of <code>1</code>&#39;s you have to sort them in ascending order.</p>\n' +
    '\n' +
    '<p>Return <em>the array after sorting it</em>.</p>\n' +
    '\n' +
    '<p>&nbsp;</p>\n' +
    '<p><strong class="example">Example 1:</strong></p>\n' +
    '\n' +
    '<pre>\n' +
    '<strong>Input:</strong> arr = [0,1,2,3,4,5,6,7,8]\n' +
    '<strong>Output:</strong> [0,1,2,4,8,3,5,6,7]\n' +
    '<strong>Explantion:</strong> [0] is the only integer with 0 bits.\n' +
    '[1,2,4,8] all have 1 bit.\n' +
    '[3,5,6] have 2 bits.\n' +
    '[7] has 3 bits.\n' +
    'The sorted array by bits is [0,1,2,4,8,3,5,6,7]\n' +
    '</pre>\n' +
    '\n' +
    '<p><strong class="example">Example 2:</strong></p>\n' +
    '\n' +
    '<pre>\n' +
    '<strong>Input:</strong> arr = [1024,512,256,128,64,32,16,8,4,2,1]\n' +
    '<strong>Output:</strong> [1,2,4,8,16,32,64,128,256,512,1024]\n' +
    '<strong>Explantion:</strong> All integers have 1 bit in the binary representation, you should just sort them in ascending order.\n' +
    '</pre>\n' +
    '\n' +
    '<p>&nbsp;</p>\n' +
    '<p><strong>Constraints:</strong></p>\n' +
    '\n' +
    '<ul>\n' +
    '\t<li><code>1 &lt;= arr.length &lt;= 500</code></li>\n' +
    '\t<li><code>0 &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>\n' +
    '</ul>\n',
  translatedTitle: null,
  translatedContent: null,
  isPaidOnly: false,
  difficulty: 'Easy',
  likes: 2212,
  dislikes: 106,
  isLiked: null,
  similarQuestions:
    '[{"title": "Find Subsequence of Length K With the Largest Sum", "titleSlug": "find-subsequence-of-length-k-with-the-largest-sum", "difficulty": "Easy", "translatedTitle": null}]',
  exampleTestcases: '[0,1,2,3,4,5,6,7,8]\n[1024,512,256,128,64,32,16,8,4,2,1]',
  contributors: [],
  topicTags: [
    { name: 'Array', slug: 'array', translatedName: null },
    {
      name: 'Bit Manipulation',
      slug: 'bit-manipulation',
      translatedName: null,
    },
    { name: 'Sorting', slug: 'sorting', translatedName: null },
    { name: 'Counting', slug: 'counting', translatedName: null },
  ],
  companyTagStats: null,
  codeSnippets: [
    {
      lang: 'C++',
      langSlug: 'cpp',
      code:
        'class Solution {\n' +
        'public:\n' +
        '    vector<int> sortByBits(vector<int>& arr) {\n' +
        '        \n' +
        '    }\n' +
        '};',
    },
    {
      lang: 'Java',
      langSlug: 'java',
      code:
        'class Solution {\n' +
        '    public int[] sortByBits(int[] arr) {\n' +
        '        \n' +
        '    }\n' +
        '}',
    },
    {
      lang: 'Python',
      langSlug: 'python',
      code:
        'class Solution(object):\n' +
        '    def sortByBits(self, arr):\n' +
        '        """\n' +
        '        :type arr: List[int]\n' +
        '        :rtype: List[int]\n' +
        '        """\n' +
        '        ',
    },
    {
      lang: 'Python3',
      langSlug: 'python3',
      code:
        'class Solution:\n' +
        '    def sortByBits(self, arr: List[int]) -> List[int]:\n' +
        '        ',
    },
    {
      lang: 'C',
      langSlug: 'c',
      code:
        '/**\n' +
        ' * Note: The returned array must be malloced, assume caller calls free().\n' +
        ' */\n' +
        'int* sortByBits(int* arr, int arrSize, int* returnSize){\n' +
        '\n' +
        '}',
    },
    {
      lang: 'C#',
      langSlug: 'csharp',
      code:
        'public class Solution {\n' +
        '    public int[] SortByBits(int[] arr) {\n' +
        '        \n' +
        '    }\n' +
        '}',
    },
    {
      lang: 'JavaScript',
      langSlug: 'javascript',
      code:
        '/**\n' +
        ' * @param {number[]} arr\n' +
        ' * @return {number[]}\n' +
        ' */\n' +
        'var sortByBits = function(arr) {\n' +
        '    \n' +
        '};',
    },
    {
      lang: 'TypeScript',
      langSlug: 'typescript',
      code: 'function sortByBits(arr: number[]): number[] {\n\n};',
    },
    {
      lang: 'PHP',
      langSlug: 'php',
      code:
        'class Solution {\n' +
        '\n' +
        '    /**\n' +
        '     * @param Integer[] $arr\n' +
        '     * @return Integer[]\n' +
        '     */\n' +
        '    function sortByBits($arr) {\n' +
        '        \n' +
        '    }\n' +
        '}',
    },
    {
      lang: 'Swift',
      langSlug: 'swift',
      code:
        'class Solution {\n' +
        '    func sortByBits(_ arr: [Int]) -> [Int] {\n' +
        '        \n' +
        '    }\n' +
        '}',
    },
    {
      lang: 'Kotlin',
      langSlug: 'kotlin',
      code:
        'class Solution {\n' +
        '    fun sortByBits(arr: IntArray): IntArray {\n' +
        '        \n' +
        '    }\n' +
        '}',
    },
    {
      lang: 'Dart',
      langSlug: 'dart',
      code: 'class Solution {\n  List<int> sortByBits(List<int> arr) {\n\n  }\n}',
    },
    {
      lang: 'Go',
      langSlug: 'golang',
      code: 'func sortByBits(arr []int) []int {\n    \n}',
    },
    {
      lang: 'Ruby',
      langSlug: 'ruby',
      code:
        '# @param {Integer[]} arr\n' +
        '# @return {Integer[]}\n' +
        'def sort_by_bits(arr)\n' +
        '    \n' +
        'end',
    },
    {
      lang: 'Scala',
      langSlug: 'scala',
      code:
        'object Solution {\n' +
        '    def sortByBits(arr: Array[Int]): Array[Int] = {\n' +
        '        \n' +
        '    }\n' +
        '}',
    },
    {
      lang: 'Rust',
      langSlug: 'rust',
      code:
        'impl Solution {\n' +
        '    pub fn sort_by_bits(arr: Vec<i32>) -> Vec<i32> {\n' +
        '        \n' +
        '    }\n' +
        '}',
    },
    {
      lang: 'Racket',
      langSlug: 'racket',
      code:
        '(define/contract (sort-by-bits arr)\n' +
        '  (-> (listof exact-integer?) (listof exact-integer?))\n' +
        '\n' +
        '  )',
    },
    {
      lang: 'Erlang',
      langSlug: 'erlang',
      code:
        '-spec sort_by_bits(Arr :: [integer()]) -> [integer()].\n' +
        'sort_by_bits(Arr) ->\n' +
        '  .',
    },
    {
      lang: 'Elixir',
      langSlug: 'elixir',
      code:
        'defmodule Solution do\n' +
        '  @spec sort_by_bits(arr :: [integer]) :: [integer]\n' +
        '  def sort_by_bits(arr) do\n' +
        '\n' +
        '  end\n' +
        'end',
    },
  ],
  stats:
    '{"totalAccepted": "181.6K", "totalSubmission": "235K", "totalAcceptedRaw": 181573, "totalSubmissionRaw": 234979, "acRate": "77.3%"}',
  hints: [
    "Simulate the problem. Count the number of 1's in the binary representation of each integer.",
    "Sort by the number of 1's ascending and by the value in case of tie.",
  ],
  solution: {
    id: '2060',
    canSeeDetail: true,
    paidOnly: false,
    hasVideoSolution: false,
    paidOnlyVideo: true,
  },
  status: null,
  sampleTestCase: '[0,1,2,3,4,5,6,7,8]',
  metaData:
    '{\n' +
    '  "name": "sortByBits",\n' +
    '  "params": [\n' +
    '    {\n' +
    '      "name": "arr",\n' +
    '      "type": "integer[]"\n' +
    '    }\n' +
    '  ],\n' +
    '  "return": {\n' +
    '    "type": "integer[]"\n' +
    '  }\n' +
    '}',
  judgerAvailable: true,
  judgeType: 'large',
  mysqlSchemas: [],
  enableRunCode: true,
  enableTestMode: false,
  enableDebugger: true,
  envInfo: `{"cpp": ["C++", "<p>Compiled with <code> clang 11 </code> using the latest C++ 20 standard.</p>\\r\\n\\r\\n<p>Your code is compiled with level two optimization (<code>-O2</code>). <a href=\\"https://github.com/google/sanitizers/wiki/AddressSanitizer\\" target=\\"_blank\\">AddressSanitizer</a> is also enabled to help detect out-of-bounds and use-after-free bugs.</p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>"], "java": ["Java", "<p><code>OpenJDK 17</code>. Java 8 features such as lambda expressions and stream API can be used. </p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>\\r\\n<p>Includes <code>Pair</code> class from https://docs.oracle.com/javase/8/javafx/api/javafx/util/Pair.html.</p>"], "python": ["Python", "<p><code>Python 2.7.12</code>.</p>\\r\\n\\r\\n<p>Most libraries are already imported automatically for your convenience, such as <a href=\\"https://docs.python.org/2/library/array.html\\" target=\\"_blank\\">array</a>, <a href=\\"https://docs.python.org/2/library/bisect.html\\" target=\\"_blank\\">bisect</a>, <a href=\\"https://docs.python.org/2/library/collections.html\\" target=\\"_blank\\">collections</a>. If you need more libraries, you can import it yourself.</p>\\r\\n\\r\\n<p>For Map/TreeMap data structure, you may use <a href=\\"http://www.grantjenks.com/docs/sortedcontainers/\\" target=\\"_blank\\">sortedcontainers</a> library.</p>\\r\\n\\r\\n<p>Note that Python 2.7 <a href=\\"https://www.python.org/dev/peps/pep-0373/\\" target=\\"_blank\\">will not be maintained past 2020</a>. For the latest Python, please choose Python3 instead.</p>"], "c": ["C", "<p>Compiled with <code>gcc 8.2</code> using the gnu11 standard.</p>\\r\\n\\r\\n<p>Your code is compiled with level one optimization (<code>-O1</code>). <a href=\\"https://github.com/google/sanitizers/wiki/AddressSanitizer\\" target=\\"_blank\\">AddressSanitizer</a> is also enabled to help detect out-of-bounds and use-after-free bugs.</p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>\\r\\n\\r\\n<p>For hash table operations, you may use <a href=\\"https://troydhanson.github.io/uthash/\\" target=\\"_blank\\">uthash</a>. \\"uthash.h\\" is included by default. Below are some examples:</p>\\r\\n\\r\\n<p><b>1. Adding an item to a hash.</b>\\r\\n<pre>\\r\\nstruct hash_entry {\\r\\n    int id;            /* we'll use this field as the key */\\r\\n    char name[10];\\r\\n    UT_hash_handle hh; /* makes this structure hashable */\\r\\n};\\r\\n\\r\\nstruct hash_entry *users = NULL;\\r\\n\\r\\nvoid add_user(struct hash_entry *s) {\\r\\n    HASH_ADD_INT(users, id, s);\\r\\n}\\r\\n</pre>\\r\\n</p>\\r\\n\\r\\n<p><b>2. Looking up an item in a hash:</b>\\r\\n<pre>\\r\\nstruct hash_entry *find_user(int user_id) {\\r\\n    struct hash_entry *s;\\r\\n    HASH_FIND_INT(users, &user_id, s);\\r\\n    return s;\\r\\n}\\r\\n</pre>\\r\\n</p>\\r\\n\\r\\n<p><b>3. Deleting an item in a hash:</b>\\r\\n<pre>\\r\\nvoid delete_user(struct hash_entry *user) {\\r\\n    HASH_DEL(users, user);  \\r\\n}\\r\\n</pre>\\r\\n</p>"], "csharp": ["C#", "<p><a href=\\"https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10\\" target=\\"_blank\\">C# 10 with .NET 6 runtime</a></p>"], "javascript": ["JavaScript", "<p><code>Node.js 16.13.2</code>.</p>\\r\\n\\r\\n<p>Your code is run with <code>--harmony</code> flag, enabling <a href=\\"http://node.green/\\" target=\\"_blank\\">new ES6 features</a>.</p>\\r\\n\\r\\n<p><a href=\\"https://lodash.com\\" target=\\"_blank\\">lodash.js</a> library is included by default.</p>\\r\\n\\r\\n<p>For Priority Queue / Queue data structures, you may use 5.3.0 version of <a href=\\"https://github.com/datastructures-js/priority-queue/tree/fb4fdb984834421279aeb081df7af624d17c2a03\\" target=\\"_blank\\">datastructures-js/priority-queue</a> and 4.2.1 version of <a href=\\"https://github.com/datastructures-js/queue/tree/e63563025a5a805aa16928cb53bcd517bfea9230\\" target=\\"_blank\\">datastructures-js/queue</a>.</p>"], "ruby": ["Ruby", "<p><code>Ruby 3.1</code></p>\\r\\n\\r\\n<p>Some common data structure implementations are provided in the Algorithms module: https://www.rubydoc.info/github/kanwei/algorithms/Algorithms</p>"], "swift": ["Swift", "<p><code>Swift 5.5.2</code>.</p>"], "golang": ["Go", "<p><code>Go 1.21</code></p>\\r\\n<p>Support <a href=\\"https://github.com/emirpasic/gods/tree/v1.18.1\\" target=\\"_blank\\">https://godoc.org/github.com/emirpasic/gods@v1.18.1</a> library.</p>"], "python3": ["Python3", "<p><code>Python 3.10</code>.</p>\\r\\n\\r\\n<p>Most libraries are already imported automatically for your convenience, such as <a href=\\"https://docs.python.org/3/library/array.html\\" target=\\"_blank\\">array</a>, <a href=\\"https://docs.python.org/3/library/bisect.html\\" target=\\"_blank\\">bisect</a>, <a href=\\"https://docs.python.org/3/library/collections.html\\" target=\\"_blank\\">collections</a>. If you need more libraries, you can import it yourself.</p>\\r\\n\\r\\n<p>For Map/TreeMap data structure, you may use <a href=\\"http://www.grantjenks.com/docs/sortedcontainers/\\" target=\\"_blank\\">sortedcontainers</a> library.</p>"], "scala": ["Scala", "<p><code>Scala 2.13.7</code>.</p>"], "kotlin": ["Kotlin", "<p><code>Kotlin 1.9.0</code>.</p>"], "rust": ["Rust", "<p><code>Rust 1.58.1</code></p>\\r\\n\\r\\n<p>Supports <a href=\\"https://crates.io/crates/rand\\" target=\\"_blank\\">rand </a> v0.6\\u00a0from crates.io</p>"], "php": ["PHP", "<p><code>PHP 8.1</code>.</p>\\r\\n<p>With bcmath module</p>"], "typescript": ["Typescript", "<p><code>TypeScript 5.1.6, Node.js 16.13.2</code>.</p>\\r\\n\\r\\n<p>Your code is run with <code>--harmony</code> flag, enabling <a href=\\"http://node.green/\\" target=\\"_blank\\">new ES2022 features</a>.</p>\\r\\n\\r\\n<p><a href=\\"https://lodash.com\\" target=\\"_blank\\">lodash.js</a> library is included by default.</p>"], "racket": ["Racket", "<p>Run with <code>Racket 8.3</code>.</p>"], "erlang": ["Erlang", "Erlang/OTP 25.0"], "elixir": ["Elixir", "Elixir 1.13.4 with Erlang/OTP 25.0"], "dart": ["Dart", "<p>Dart 2.17.3</p>\\r\\n\\r\\n<p>Your code will be run directly without compiling</p>"]}`,
  libraryUrl: null,
  adminUrl: null,
  challengeQuestion: {
    id: '1531',
    date: '2023-10-30',
    incompleteChallengeCount: 0,
    streakCount: 0,
    type: 'DAILY',
  },
  note: null,
};

const main = async () => {
  const problem = await getProblem(getSlug());
  // bail if invalid slug.
  if (!problem) {
    throw new Error('problem not found');
  }
  // bail if already created a file for this problem.
  if (await alreadyTouched(problem)) {
    throw new Error('problem already exists');
  }
  await saveSolutionFile(problem);
};

try {
  await main();
} catch (error) {
  console.error(error.message || error);
  exit(1);
}
