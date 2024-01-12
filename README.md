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

### `touch <problem-slug> [--reset]`

Create the source and test file for the specified problem.

The slug is in the url of the problem, just copy the path after `leetcode.com/problems/`

To touch problem #1 (https://leetcode.com/problems/two-sum):
```sh
npm run touch two-sum
```

Additionally you can use the `--reset` flag to clear the existing source code for the problem. This is helpful if you want to practice the implementation. 

```sh
npm run touch two-sum -- --reset
```

Note the `--` is necessary to tell npm that the `--reset` flag is not for npm but for the `touch` command.

### `uglify <problem-number> [keep-quoted]`

Uglifies the problem source code outputs it to the console and attempts to copy it to the clipboard (if `xclip` is installed on the system). 

You can paste this output into the leetcode editor and submit your solution.

To uglify problem 42:
```sh
npm run uglify 42
```

Note sometimes uglify-js can cause issues with mangling quoted property names, you can pass a second argument to tell uglify-js to not mangle these names. 

To uglify problem 42 (without mangling quoted property names):
```sh
npm run uglify 42 1
```

### `count`

Returns the total number of problems that are in the src/ folder. 

```sh
npm run count
```

### `today`

Returns the total number of problems that were created today. 

```sh
npm run today
```

### `ctci`

Returns the number of problems solved out of the book [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)

Note this isn't a perfect mapping, and a lot of problems in the book don't map to a leetcode problem, additionally I may have missed some problems while mapping.

```sh
npm run ctci
```


# Acknowledgements

Big thanks to the [leetcode-query](https://github.com/JacobLinCool/LeetCode-Query) package, it removed a lot of the copy and paste tedium when creating problem source code files. 