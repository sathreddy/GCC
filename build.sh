#!/bin/bash

mkdir build

rsync -av --progress ./ build/ --exclude build

cd build

for file in *.html; do
    sed -E '/(.min.js)/!s/\.js/.min.js/g' "$file" > "$file".tmp && mv "$file".tmp "$file"
    sed -E '/(.min.css)/!s/\.css/.min.css/g' "$file" > "$file".tmp && mv "$file".tmp "$file"
    # mv "$file" "$(basename ${file} .html).htm"
done

rm *.md && rm *.txt && rm *.sh && rm .gitignore

rm -rf .git

# css-html-js-minify.py $(realpath ./) && rm *.htm

cd js && css-html-js-minify.py $(realpath ./)

cd ../css && css-html-js-minify.py $(realpath ./)