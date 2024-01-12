#!/bin/bash

# ensure file name argument.
if [[ -z $1 ]]
    then
        echo "err: no file name specified"
        exit 1
fi

# ensure file exists.
srcFile="./src/$1.js"
if [ ! -f $srcFile ] 
    then 
        echo "err: ${srcFile} not found"
        exit 1
fi

# uglify with or without extra options.
ugly=0
if [ $# -eq 0 ]
    then
        # if no extra args prodivded, just use default uglify
        ugly=$(uglifyjs $srcFile -c drop_console=true,passes=2 -m)
    else 
        # if extra args provided, forward the args to uglify js.
        shift
        ugly=$(uglifyjs $srcFile -c drop_console=true,passes=2 -m "$@")
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