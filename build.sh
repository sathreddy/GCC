#!/bin/bash

# realpath is a GNU utility, not found on propietary OS
if [[ ! $(uname -a) =~ "Linux" ]]; then
    function realpath() {
	[[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
    }
    PYT="python3"
else
    PYT="python"
fi

mkdir build

rsync -av --progress ./ build/ --exclude build

cd build

for file in *.html; do
    sed -E '/(.min.js)/!s/\.js/.min.js/g' "$file" > "$file".tmp && mv "$file".tmp "$file"
    sed -E '/(.min.css)/!s/\.css/.min.css/g' "$file" > "$file".tmp && mv "$file".tmp "$file"
    # mv "$file" "$(basename ${file} .html).htm"
done

rm *.md && rm *.txt && rm *.sh && rm .gitignore

rm -rf .git && rm -rf videos

# css-html-js-minify.py $(realpath ./) && rm *.htm

cd js && "$PYT" /usr/bin/css-html-js-minify.py $(realpath ./)

cd ../css && "$PYT" /usr/bin/css-html-js-minify.py $(realpath ./)