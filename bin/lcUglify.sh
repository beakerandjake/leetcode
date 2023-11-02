#!/bin/bash

# ensure file name argument.
if [[ -z $1 ]]
    then
        echo "err: no file name specified"
        exit 1
fi

# ensure file exists.
srcFile="./src/leetcode/$1.js"
if [ ! -f $srcFile ] 
    then 
        echo "err: ${srcFile} not found"
        exit 1
fi

# uglify with or without without mangling props.
if [[ -z $2 ]]
    then
        # mangle the props.
        uglifyjs -m -c --mangle-props keep_quoted $srcFile 
    else 
        # keep the props
        uglifyjs $srcFile -m -c
fi

