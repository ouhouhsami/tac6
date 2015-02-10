# tac6

Test And Coverage for es6

Library for in-browser test & coverage for ES6 JavaScript code flavor.

This library is a utility tool based on following js guidelines: [Ircam-JS-Guidelines](https://github.com/Ircam-RnD/ircam-js-guidelines).

## Install


```
npm install git+https://git@github.com/ircam-rnd/tac6.git --save-dev
```

## Use

To use it, preferably, add in your package.json the following in the ```scripts``` key if your test file is located in "./tests/tests.js":

```
"test": "tac6"
```
or

```
"test": "tac6 -- <test file path>"
```

Then run ```npm test```.

Be careful: I didn't succeed in using Chai assertion library. Chai uses ```arguments.callee``` that is incompatible with es6 to es5 traceur used to build the tests.js file for the in-browser mocha tests.

# Options

--browser or -b "firefox" "Google Chrome" "Safari" ...
--coverageDir <path the the coverage directory>
--url default http://0.0.0.0:3000
--port default to 3000
--manual if set the user should visit a given link to launch mocha tests.
