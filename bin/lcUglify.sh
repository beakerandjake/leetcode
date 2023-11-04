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

# uglify with or without extra options.
ugly=0
if [[ -z $2 ]]
    then
        # extra options
        ugly=$(uglifyjs $srcFile -c drop_console=true,passes=2 -m properties=keep_quoted)
    else 
        # simple options
        ugly=$(uglifyjs $srcFile -c drop_console=true,passes=2 -m)
fi

# remove the export portion of the uglified output.
ugly=$(echo $ugly | sed -E 's/;export\{\w+\};/;/g')


# attempt to copy uglify output to clipboard
if command -v xclip &> /dev/null
    then
        echo $ugly | xclip -selection clipboard
fi

# output result
echo $ugly