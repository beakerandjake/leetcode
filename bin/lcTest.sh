#!/bin/bash

# ensure test name argument.
if [[ -z $1 ]]
    then
        echo "err: no test name specified"
        exit 1
fi

# ensure test file exists.
testFile="./tests/leetcode/$1.test.js"
if [ ! -f $testFile ] 
    then 
        echo "err: ${testFile} not found"
        exit 1
fi

# run the specific test file.
npm test $testFile