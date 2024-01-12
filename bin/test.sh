#!/bin/bash

# No arguments? Then run all tests.
if [[ -z $1 ]]
    then
        npm run jest
# Argument provided, but file does not exist.
elif [ ! -f "./tests/$1.test.js" ] 
    then 
        echo "err: file './tests/$1.test.js' not found"
        exit 1
# Run the specified test.
else
    npm run jest "./tests/$1.test.js" 
fi