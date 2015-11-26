# GCC

Content
=======

There are no images/ or videos/ or fonts/ directories in this repo because those files are too large to host on Github.
For those folders, ask me and I can send them to you.

Development
===========

Opening index.html in the browser should be all you need to do to start looking at the website and working on it.

Production Build
================

We use a build script and a minifier called [css-html-js-minify](https://github.com/juancarlospaco/css-html-js-minify).
You will need to install the minifier before you can run the build script. Since the minifier is written in Python 3,
you must have Python 3 installed on your system as well.

Install from PIP:
```
sudo pip install css-html-js-minify
```
or
```
sudo pip3 install css-html-js-minify
```

Install with WGET:
```
sudo wget -O /usr/bin/css-html-js-minify.py https://raw.githubusercontent.com/juancarlospaco/css-html-js-minify/master/css-html-js-minify.py
sudo chmod +x /usr/bin/css-html-js-minify.py
```

Once you've successfully installed the minifier, you can run the build script. 
```
./build.sh
```
It will create a `build/` directory from which you can access the compressed version of the website

Cheers :)
