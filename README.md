# leetcode
🚧 README under construction 🚧

Contains my solutions to leetcode.

I don't like coding in a browser so I added tools to support local development:
- Generate the source code file for a problem, with included description.
- Generate the test file for a problem.
- Minify a problems source code and copy to clipboard so it can be submitted easily.
- Reset the source of a previously solved problem so it can be practiced.

# Usage

Clone the repository and install the packages: 
```sh
git clone https://github.com/beakerandjake/leetcode
cd leetcode
npm install
```

## Commands

### `test`

Run the tests for all problems.

```sh
npm run test
```

### `lc-test <problem-number>`

Run the test for a specific problem

To run the test corresponding to problem 42:
```sh
npm run lc-test 42
```

### `lc-touch <url-slug> [--reset]`

Create the source and test file for the specified problem.

The slug is in the url of the problem, just copy the path after `leetcode.com/problems/`

To touch problem #1 (https://leetcode.com/problems/two-sum):
```sh
npm run lc-touch two-sum
```

Additionally you can use the `--reset` flag to clear the existing source code for the problem. This is helpful if you want to practice the implementation. 

```sh
npm run lc-touch two-sum -- --reset
```

Note the `--` is necessary to tell npm that the `--reset` flag is not for npm but for the `lc-touch` command.



# Acknowledgements

Big thanks to the [leetcode-query](https://github.com/JacobLinCool/LeetCode-Query) package, it removed a lot of the copy and paste tedium when creating problem source code files. 