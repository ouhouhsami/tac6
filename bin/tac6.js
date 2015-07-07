#!/usr/bin/env node
var babelify = require("babelify")
var bodyParser = require('body-parser');
var browserify = require('browserify');
var browserifyIstanbul = require('browserify-istanbul');
var connect = require('connect');
var fs = require('fs');
var http = require('http');
var istanbul = require('babel-istanbul');
var open = require('open');
var path = require('path');
var parseArgs = require('minimist')(process.argv.slice(3));
var serveStatic = require('serve-static');


var instrumenter = new istanbul.Instrumenter();

var targetFolder = path.join(__dirname, '..', 'browser-test');
var targetTestFile = path.join(targetFolder, 'tests.js');
var testFilePath = parseArgs._[0] || './tests/tests.js';

var coverageDir = parseArgs['coverageDir'] || false;
var browser = parseArgs['b'] || parseArgs['browser'] || false;
var url = parseArgs['url'] || 'http://0.0.0.0';
var port = parseArgs['port'] || '3000';
var fullUrl = url+':'+port;
var manual = parseArgs['manual'] || false;

var app = connect();
app.use(bodyParser.json({limit: '10mb'}));
var server = app.listen(port);



browserify({
    debug: true
  })
  .transform(browserifyIstanbul({
    instrumenter: instrumenter
  }))
  .transform(babelify)
  .require(testFilePath, {
    entry: true
  })
  .bundle(function(err, buf) {
    if (err) {
      console.log('\033[0;31m' + '  >  ' + err.message + '\033[0m');
    }
    var wstream = fs.createWriteStream(targetTestFile);
    wstream.write(buf);
    wstream.end();
    serve();
  });

function serve() {
  app.use(serveStatic(targetFolder, {
    'index': ['index.html']
  }));
  // @Todo Get data from mocha tests in the shell
  app.use('/__test__', function fooMiddleware(req, res, next) {
  });
  app.use('/__coverage__', function fooMiddleware(req, res, next) {
    fs.writeFileSync('coverage1.json', JSON.stringify(req.body));
    generateCoverageReport(req.body);
  });
  if(!manual){
    open(fullUrl, browser);
  }
  else {
    console.info('Go visit %s  with the browser you want to test.', fullUrl);
  }
}

function generateCoverageReport(json) {
  var collector = new istanbul.Collector(),
    reporter = new istanbul.Reporter(false, coverageDir),
    sync = false;
    collector.add(json);
    reporter.add('text');
    reporter.addAll([ 'lcov', 'clover' ]);
    reporter.write(collector, sync, function () {
        console.log('All reports generated');
        server.close();
        process.exit(code=0);
    });
}
