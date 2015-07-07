var istanbul = require('istanbul-harmony');
var instrumenter = new istanbul.Instrumenter();

var generatedCode = instrumenter.instrumentSync('class A {meaningOfLife() { return 42; }}', 'filename.js');
console.log(generatedCode)
