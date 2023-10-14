#!/bin/bash

# creates a src / test leetcode file 

# ensure file name argument.
if [[ -z $1 ]]
    then
        echo "err: no file name specified"
        exit 1
fi

# encure src file does not already exist.
srcFile="./src/leetcode/$1.js"
if [ -f $srcFile ]
    then 
        echo "err: ${srcFile}.js already exists"
        exit 1
fi

# ensure test file does not already exist.
testFile="./tests/leetcode/$1.js"
if [ -f $testFile ]
    then 
        echo "err: ${testFile}.js already exists"
        exit 1
fi

# create the src and test files.
touch $srcFile $testFile
echo "created src: ${srcFile}, test: ${testFile}"