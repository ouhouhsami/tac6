(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var chai = require('chai');
var audioContext = require("audio-context");
var BinauralFIR = require('../binaural-fir.es6.js');
var assert = chai.assert;
var targetNode = audioContext.destination;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
describe("BinauralFIR tests", function() {
  this.buffer = audioContext.createBuffer(1, 512, 44100);
  this.data = this.buffer.getChannelData(0);
  for (var i = 0; i < this.data.length; i++) {
    this.data[i] = (Math.random() - 0.5) * 2;
  }
  var numberOfPositions = getRandomInt(100, 200);
  this.hrtfs = [];
  for (var i = 0; i < numberOfPositions; i++) {
    var url = 'fakeURL.wav';
    var obj = {
      azimuth: getRandomInt(0, 90),
      elevation: getRandomInt(0, 90),
      distance: getRandomInt(1, 3),
      url: url,
      buffer: this.buffer
    };
    this.hrtfs.push(obj);
  }
  var self = this;
  self.binauralFIR = new BinauralFIR();
  self.binauralFIR.connect(targetNode);
  it('should set HRTF DataSet correctly', function() {
    self.binauralFIR.HRTFDataset = self.hrtfs;
    assert.equal(self.binauralFIR.HRTFDataset, self.hrtfs);
  });
  it('should detect that is crossfading', function() {
    self.binauralFIR.setPosition(0, 0, 1);
    assert.equal(self.binauralFIR.isCrossfading(), true);
  });
  it('should set position correctly', function() {
    self.binauralFIR.setPosition(10, 20, 30);
    var coord = self.binauralFIR.getRealCoordinates(10, 20, 30);
    assert.equal(self.binauralFIR.getPosition().azimuth, coord.azimuth);
    assert.equal(self.binauralFIR.getPosition().elevation, coord.elevation);
    assert.equal(self.binauralFIR.getPosition().distance, coord.distance);
  });
  it('should set crossfade duration correctly', function() {
    self.binauralFIR.setCrossfadeDuration(30);
    assert.equal(self.binauralFIR.getCrossfadeDuration(), 30);
  });
});


//# sourceURL=/Users/goldszmidt/sam/pro/dev/binauralFIR/tests/tests.js
},{"../binaural-fir.es6.js":2,"audio-context":4,"chai":5}],2:[function(require,module,exports){
"use strict";
"use strict";
var __cov_D9o4h8SfqJEQqLYmix4GlA = (Function('return this'))();
if (!__cov_D9o4h8SfqJEQqLYmix4GlA.__coverage__) {
  __cov_D9o4h8SfqJEQqLYmix4GlA.__coverage__ = {};
}
__cov_D9o4h8SfqJEQqLYmix4GlA = __cov_D9o4h8SfqJEQqLYmix4GlA.__coverage__;
if (!(__cov_D9o4h8SfqJEQqLYmix4GlA['/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js'])) {
  __cov_D9o4h8SfqJEQqLYmix4GlA['/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js'] = {
    "path": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
    "s": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0
    },
    "b": {
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0]
    },
    "f": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0
    },
    "fnMap": {
      "1": {
        "name": "BinauralFIR",
        "line": 4,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 17,
            "column": 0,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 19,
            "column": 16,
            "name": null
          }
        }
      },
      "2": {
        "name": "(anonymous_2)",
        "line": 26,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 57,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 57,
            "column": 16,
            "name": null
          }
        }
      },
      "3": {
        "name": "(anonymous_3)",
        "line": 31,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 69,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 69,
            "column": 19,
            "name": null
          }
        }
      },
      "4": {
        "name": "(anonymous_4)",
        "line": 36,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 82,
            "column": 31,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 82,
            "column": 31,
            "name": null
          }
        }
      },
      "5": {
        "name": "(anonymous_5)",
        "line": 50,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 99,
            "column": 20,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 99,
            "column": 20,
            "name": null
          }
        }
      },
      "6": {
        "name": "(anonymous_6)",
        "line": 53,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 110,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 110,
            "column": 17,
            "name": null
          }
        }
      },
      "7": {
        "name": "(anonymous_7)",
        "line": 56,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 124,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 124,
            "column": 44,
            "name": null
          }
        }
      },
      "8": {
        "name": "(anonymous_8)",
        "line": 80,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 163,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 163,
            "column": 18,
            "name": null
          }
        }
      },
      "9": {
        "name": "(anonymous_9)",
        "line": 87,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 176,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 176,
            "column": 24,
            "name": null
          }
        }
      },
      "10": {
        "name": "(anonymous_10)",
        "line": 101,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 204,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 204,
            "column": 33,
            "name": null
          }
        }
      },
      "11": {
        "name": "(anonymous_11)",
        "line": 109,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 218,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 218,
            "column": 25,
            "name": null
          }
        }
      },
      "12": {
        "name": "(anonymous_12)",
        "line": 112,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 227,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 227,
            "column": 16,
            "name": null
          }
        }
      },
      "13": {
        "name": "(anonymous_13)",
        "line": 115,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 235,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 235,
            "column": 16,
            "name": null
          }
        }
      },
      "14": {
        "name": "(anonymous_14)",
        "line": 122,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 252,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 252,
            "column": 40,
            "name": null
          }
        }
      },
      "15": {
        "name": "(anonymous_15)",
        "line": 126,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 265,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 265,
            "column": 53,
            "name": null
          }
        }
      },
      "16": {
        "name": "(anonymous_16)",
        "line": 133,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 280,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 280,
            "column": 51,
            "name": null
          }
        }
      },
      "17": {
        "name": "(anonymous_17)",
        "line": 141,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 297,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 297,
            "column": 48,
            "name": null
          }
        }
      },
      "18": {
        "name": "(anonymous_18)",
        "line": 148,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 313,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 313,
            "column": 20,
            "name": null
          }
        }
      },
      "19": {
        "name": "ConvolverAudioGraph",
        "line": 155,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 326,
            "column": 0,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 328,
            "column": 16,
            "name": null
          }
        }
      },
      "20": {
        "name": "(anonymous_20)",
        "line": 169,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 345,
            "column": 14,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 345,
            "column": 14,
            "name": null
          }
        }
      },
      "21": {
        "name": "(anonymous_21)",
        "line": 172,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 349,
            "column": 13,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 349,
            "column": 13,
            "name": null
          }
        }
      },
      "22": {
        "name": "(anonymous_22)",
        "line": 175,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 358,
            "column": 20,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 358,
            "column": 20,
            "name": null
          }
        }
      },
      "23": {
        "name": "(anonymous_23)",
        "line": 178,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 368,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 368,
            "column": 16,
            "name": null
          }
        }
      },
      "24": {
        "name": "(anonymous_24)",
        "line": 182,
        "loc": {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 379,
            "column": 2,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 379,
            "column": 19,
            "name": null
          }
        }
      }
    },
    "statementMap": {
      "1": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 10,
          "column": 0,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 10,
          "column": 24,
          "name": null
        }
      },
      "2": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 11,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 11,
          "column": 43,
          "name": null
        }
      },
      "3": {
        "start": {
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 0
        },
        "skip": true
      },
      "4": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 20,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 20,
          "column": 25,
          "name": null
        }
      },
      "5": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 21,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 21,
          "column": 30,
          "name": null
        }
      },
      "6": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 22,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 22,
          "column": 18,
          "name": null
        }
      },
      "7": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 23,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 23,
          "column": 22,
          "name": null
        }
      },
      "8": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 24,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 24,
          "column": 26,
          "name": null
        }
      },
      "9": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 25,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 25,
          "column": 44,
          "name": null
        }
      },
      "10": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 26,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 26,
          "column": 31,
          "name": null
        }
      },
      "11": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 27,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 27,
          "column": 38,
          "name": null
        }
      },
      "12": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 28,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 28,
          "column": 26,
          "name": null
        }
      },
      "13": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 29,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 29,
          "column": 34,
          "name": null
        }
      },
      "14": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 30,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 30,
          "column": 39,
          "name": null
        }
      },
      "15": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 32,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 32,
          "column": 42,
          "name": null
        }
      },
      "16": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 39,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 39,
          "column": 50,
          "name": null
        }
      },
      "17": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 40,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 40,
          "column": 37,
          "name": null
        }
      },
      "18": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 41,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 41,
          "column": 48,
          "name": null
        }
      },
      "19": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 43,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 43,
          "column": 55,
          "name": null
        }
      },
      "20": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 44,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 44,
          "column": 42,
          "name": null
        }
      },
      "21": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 45,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 45,
          "column": 53,
          "name": null
        }
      },
      "22": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 47,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 47,
          "column": 15,
          "name": null
        }
      },
      "23": {
        "start": {
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 0
        },
        "skip": true
      },
      "24": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 58,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 58,
          "column": 36,
          "name": null
        }
      },
      "25": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 59,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 59,
          "column": 41,
          "name": null
        }
      },
      "26": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 60,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 60,
          "column": 15,
          "name": null
        }
      },
      "27": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 70,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 70,
          "column": 39,
          "name": null
        }
      },
      "28": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 71,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 71,
          "column": 44,
          "name": null
        }
      },
      "29": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 72,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 72,
          "column": 15,
          "name": null
        }
      },
      "30": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 83,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 83,
          "column": 34,
          "name": null
        }
      },
      "31": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 84,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 84,
          "column": 52,
          "name": null
        }
      },
      "32": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 86,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 95,
          "column": 4,
          "name": null
        }
      },
      "33": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 87,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 87,
          "column": 36,
          "name": null
        }
      },
      "34": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 89,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 89,
          "column": 55,
          "name": null
        }
      },
      "35": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 90,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 90,
          "column": 59,
          "name": null
        }
      },
      "36": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 91,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 91,
          "column": 100,
          "name": null
        }
      },
      "37": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 92,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 92,
          "column": 30,
          "name": null
        }
      },
      "38": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 93,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 93,
          "column": 30,
          "name": null
        }
      },
      "39": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 94,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 94,
          "column": 30,
          "name": null
        }
      },
      "40": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 96,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 96,
          "column": 82,
          "name": null
        }
      },
      "41": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 100,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 100,
          "column": 27,
          "name": null
        }
      },
      "42": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 112,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 112,
          "column": 83,
          "name": null
        }
      },
      "43": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 126,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 156,
          "column": 4,
          "name": null
        }
      },
      "44": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 128,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 128,
          "column": 81,
          "name": null
        }
      },
      "45": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 130,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 155,
          "column": 6,
          "name": null
        }
      },
      "46": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 132,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 152,
          "column": 8,
          "name": null
        }
      },
      "47": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 134,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 139,
          "column": 10,
          "name": null
        }
      },
      "48": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 136,
          "column": 12,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 136,
          "column": 42,
          "name": null
        }
      },
      "49": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 138,
          "column": 12,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 138,
          "column": 51,
          "name": null
        }
      },
      "50": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 141,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 141,
          "column": 61,
          "name": null
        }
      },
      "51": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 142,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 142,
          "column": 65,
          "name": null
        }
      },
      "52": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 143,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 143,
          "column": 63,
          "name": null
        }
      },
      "53": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 146,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 146,
          "column": 86,
          "name": null
        }
      },
      "54": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 148,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 148,
          "column": 61,
          "name": null
        }
      },
      "55": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 149,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 149,
          "column": 65,
          "name": null
        }
      },
      "56": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 150,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 150,
          "column": 63,
          "name": null
        }
      },
      "57": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 151,
          "column": 10,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 151,
          "column": 36,
          "name": null
        }
      },
      "58": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 154,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 154,
          "column": 19,
          "name": null
        }
      },
      "59": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 165,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 169,
          "column": 4,
          "name": null
        }
      },
      "60": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 166,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 166,
          "column": 17,
          "name": null
        }
      },
      "61": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 168,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 168,
          "column": 18,
          "name": null
        }
      },
      "62": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 179,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 179,
          "column": 53,
          "name": null
        }
      },
      "63": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 180,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 180,
          "column": 57,
          "name": null
        }
      },
      "64": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 181,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 181,
          "column": 55,
          "name": null
        }
      },
      "65": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 183,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 183,
          "column": 121,
          "name": null
        }
      },
      "66": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 185,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 185,
          "column": 22,
          "name": null
        }
      },
      "67": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 188,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 188,
          "column": 35,
          "name": null
        }
      },
      "68": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 189,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 189,
          "column": 48,
          "name": null
        }
      },
      "69": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 190,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 190,
          "column": 36,
          "name": null
        }
      },
      "70": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 192,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 195,
          "column": 4,
          "name": null
        }
      },
      "71": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 193,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 193,
          "column": 46,
          "name": null
        }
      },
      "72": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 194,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 194,
          "column": 36,
          "name": null
        }
      },
      "73": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 205,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 211,
          "column": 4,
          "name": null
        }
      },
      "74": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 207,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 207,
          "column": 46,
          "name": null
        }
      },
      "75": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 208,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 208,
          "column": 17,
          "name": null
        }
      },
      "76": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 210,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 210,
          "column": 45,
          "name": null
        }
      },
      "77": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 220,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 220,
          "column": 40,
          "name": null
        }
      },
      "78": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 228,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 228,
          "column": 24,
          "name": null
        }
      },
      "79": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 237,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 237,
          "column": 28,
          "name": null
        }
      },
      "80": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 238,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 238,
          "column": 87,
          "name": null
        }
      },
      "81": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 239,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 239,
          "column": 121,
          "name": null
        }
      },
      "82": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 241,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 241,
          "column": 92,
          "name": null
        }
      },
      "83": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 242,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 242,
          "column": 126,
          "name": null
        }
      },
      "84": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 253,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 253,
          "column": 68,
          "name": null
        }
      },
      "85": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 255,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 255,
          "column": 25,
          "name": null
        }
      },
      "86": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 266,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 270,
          "column": 4,
          "name": null
        }
      },
      "87": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 281,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 281,
          "column": 68,
          "name": null
        }
      },
      "88": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 283,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 287,
          "column": 4,
          "name": null
        }
      },
      "89": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 299,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 299,
          "column": 48,
          "name": null
        }
      },
      "90": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 300,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 300,
          "column": 52,
          "name": null
        }
      },
      "91": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 302,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 302,
          "column": 94,
          "name": null
        }
      },
      "92": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 304,
          "column": 8,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 304,
          "column": 57,
          "name": null
        }
      },
      "93": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 306,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 306,
          "column": 21,
          "name": null
        }
      },
      "94": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 314,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 316,
          "column": 4,
          "name": null
        }
      },
      "95": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 315,
          "column": 6,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 315,
          "column": 32,
          "name": null
        }
      },
      "96": {
        "start": {
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 0
        },
        "skip": true
      },
      "97": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 329,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 329,
          "column": 45,
          "name": null
        }
      },
      "98": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 330,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 330,
          "column": 50,
          "name": null
        }
      },
      "99": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 331,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 331,
          "column": 35,
          "name": null
        }
      },
      "100": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 332,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 332,
          "column": 40,
          "name": null
        }
      },
      "101": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 335,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 335,
          "column": 57,
          "name": null
        }
      },
      "102": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 336,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 336,
          "column": 55,
          "name": null
        }
      },
      "103": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 337,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 337,
          "column": 56,
          "name": null
        }
      },
      "104": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 338,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 338,
          "column": 50,
          "name": null
        }
      },
      "105": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 339,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 339,
          "column": 42,
          "name": null
        }
      },
      "106": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 340,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 340,
          "column": 32,
          "name": null
        }
      },
      "107": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 342,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 342,
          "column": 15,
          "name": null
        }
      },
      "108": {
        "start": {
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 0
        },
        "skip": true
      },
      "109": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 346,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 346,
          "column": 24,
          "name": null
        }
      },
      "110": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 350,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 350,
          "column": 29,
          "name": null
        }
      },
      "111": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 359,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 359,
          "column": 32,
          "name": null
        }
      },
      "112": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 369,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 369,
          "column": 31,
          "name": null
        }
      },
      "113": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 370,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 370,
          "column": 15,
          "name": null
        }
      },
      "114": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 380,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 380,
          "column": 34,
          "name": null
        }
      },
      "115": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 381,
          "column": 4,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 381,
          "column": 15,
          "name": null
        }
      },
      "116": {
        "start": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 387,
          "column": 0,
          "name": null
        },
        "end": {
          "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
          "line": 387,
          "column": 28,
          "name": null
        }
      }
    },
    "branchMap": {
      "1": {
        "line": 57,
        "type": "if",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 126,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 126,
            "column": 4,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 126,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 126,
            "column": 4,
            "name": null
          }
        }]
      },
      "2": {
        "line": 57,
        "type": "binary-expr",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 126,
            "column": 8,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 126,
            "column": 29,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 126,
            "column": 34,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 126,
            "column": 58,
            "name": null
          }
        }]
      },
      "3": {
        "line": 59,
        "type": "if",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 6,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 6,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 6,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 6,
            "name": null
          }
        }]
      },
      "4": {
        "line": 59,
        "type": "binary-expr",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 10,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 58,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 63,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 115,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 120,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 130,
            "column": 173,
            "name": null
          }
        }]
      },
      "5": {
        "line": 60,
        "type": "if",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 132,
            "column": 8,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 132,
            "column": 8,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 132,
            "column": 8,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 132,
            "column": 8,
            "name": null
          }
        }]
      },
      "6": {
        "line": 61,
        "type": "if",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 134,
            "column": 10,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 134,
            "column": 10,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 134,
            "column": 10,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 134,
            "column": 10,
            "name": null
          }
        }]
      },
      "7": {
        "line": 81,
        "type": "if",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 165,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 165,
            "column": 4,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 165,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 165,
            "column": 4,
            "name": null
          }
        }]
      },
      "8": {
        "line": 96,
        "type": "if",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 192,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 192,
            "column": 4,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 192,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 192,
            "column": 4,
            "name": null
          }
        }]
      },
      "9": {
        "line": 102,
        "type": "if",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 205,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 205,
            "column": 4,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 205,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 205,
            "column": 4,
            "name": null
          }
        }]
      },
      "10": {
        "line": 149,
        "type": "if",
        "locations": [{
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 314,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 314,
            "column": 4,
            "name": null
          }
        }, {
          "start": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 314,
            "column": 4,
            "name": null
          },
          "end": {
            "source": "/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js",
            "line": 314,
            "column": 4,
            "name": null
          }
        }]
      }
    }
  };
}
__cov_D9o4h8SfqJEQqLYmix4GlA = __cov_D9o4h8SfqJEQqLYmix4GlA['/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js'];
__cov_D9o4h8SfqJEQqLYmix4GlA.s['1']++;
var kdt = require('kdt');
__cov_D9o4h8SfqJEQqLYmix4GlA.s['2']++;
var audioContext = require('audio-context');
__cov_D9o4h8SfqJEQqLYmix4GlA.s['3']++;
var BinauralFIR = function BinauralFIR() {
  __cov_D9o4h8SfqJEQqLYmix4GlA.f['1']++;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['4']++;
  this.hrtfDataset = [];
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['5']++;
  this.hrtfDatasetLength = 0;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['6']++;
  this.tree = -1;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['7']++;
  this.position = {};
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['8']++;
  this.nextPosition = {};
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['9']++;
  this.changeWhenFinishCrossfading = false;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['10']++;
  this.intervalID = undefined;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['11']++;
  this.crossfadeDuration = 20 / 1000;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['12']++;
  this.input = undefined;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['13']++;
  this.mainConvolver = undefined;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['14']++;
  this.secondaryConvolver = undefined;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['15']++;
  this.input = audioContext.createGain();
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['16']++;
  this.mainConvolver = new ConvolverAudioGraph();
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['17']++;
  this.mainConvolver.gain.value = 1;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['18']++;
  this.input.connect(this.mainConvolver.input);
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['19']++;
  this.secondaryConvolver = new ConvolverAudioGraph();
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['20']++;
  this.secondaryConvolver.gain.value = 0;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['21']++;
  this.input.connect(this.secondaryConvolver.input);
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['22']++;
  return this;
};
__cov_D9o4h8SfqJEQqLYmix4GlA.s['23']++;
$traceurRuntime.createClass(BinauralFIR, {
  connect: function(node) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['2']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['24']++;
    this.mainConvolver.connect(node);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['25']++;
    this.secondaryConvolver.connect(node);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['26']++;
    return this;
  },
  disconnect: function(node) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['3']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['27']++;
    this.mainConvolver.disconnect(node);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['28']++;
    this.secondaryConvolver.disconnect(node);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['29']++;
    return this;
  },
  set HRTFDataset(hrtfDataset) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['4']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['30']++;
    this.hrtfDataset = hrtfDataset;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['31']++;
    this.hrtfDatasetLength = this.hrtfDataset.length;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['32']++;
    for (var i = 0; i < this.hrtfDatasetLength; i++) {
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['33']++;
      var hrtf = this.hrtfDataset[i];
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['34']++;
      var azimuthRadians = hrtf.azimuth * Math.PI / 180;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['35']++;
      var elevationRadians = hrtf.elevation * Math.PI / 180;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['36']++;
      var catesianCoord = this.sphericalToCartesian(azimuthRadians, elevationRadians, hrtf.distance);
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['37']++;
      hrtf.x = catesianCoord.x;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['38']++;
      hrtf.y = catesianCoord.y;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['39']++;
      hrtf.z = catesianCoord.z;
    }
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['40']++;
    this.tree = kdt.createKdTree(this.hrtfDataset, this.distance, ['x', 'y', 'z']);
  },
  get HRTFDataset() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['5']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['41']++;
    return this.hrtfDataset;
  },
  distance: function(a, b) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['6']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['42']++;
    return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2);
  },
  setPosition: function(azimuth, elevation, distance) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['7']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['43']++;
    if ((__cov_D9o4h8SfqJEQqLYmix4GlA.b['2'][0]++, arguments.length === 3) || (__cov_D9o4h8SfqJEQqLYmix4GlA.b['2'][1]++, arguments.length === 4)) {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['1'][0]++;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['44']++;
      var nearestPosition = this.getRealCoordinates(azimuth, elevation, distance);
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['45']++;
      if ((__cov_D9o4h8SfqJEQqLYmix4GlA.b['4'][0]++, nearestPosition.azimuth !== this.position.azimuth) || (__cov_D9o4h8SfqJEQqLYmix4GlA.b['4'][1]++, nearestPosition.elevation !== this.position.elevation) || (__cov_D9o4h8SfqJEQqLYmix4GlA.b['4'][2]++, nearestPosition.distance !== this.position.distance)) {
        __cov_D9o4h8SfqJEQqLYmix4GlA.b['3'][0]++;
        __cov_D9o4h8SfqJEQqLYmix4GlA.s['46']++;
        if (this.isCrossfading() === true) {
          __cov_D9o4h8SfqJEQqLYmix4GlA.b['5'][0]++;
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['47']++;
          if (this.changeWhenFinishCrossfading === true) {
            __cov_D9o4h8SfqJEQqLYmix4GlA.b['6'][0]++;
            __cov_D9o4h8SfqJEQqLYmix4GlA.s['48']++;
            clearInterval(this.intervalID);
          } else {
            __cov_D9o4h8SfqJEQqLYmix4GlA.b['6'][1]++;
            __cov_D9o4h8SfqJEQqLYmix4GlA.s['49']++;
            this.changeWhenFinishCrossfading = true;
          }
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['50']++;
          this.nextPosition.azimuth = nearestPosition.azimuth;
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['51']++;
          this.nextPosition.elevation = nearestPosition.elevation;
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['52']++;
          this.nextPosition.distance = nearestPosition.distance;
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['53']++;
          this.intervalID = window.setInterval(this.setLastPosition.bind(this), 0.005);
        } else {
          __cov_D9o4h8SfqJEQqLYmix4GlA.b['5'][1]++;
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['54']++;
          this.nextPosition.azimuth = nearestPosition.azimuth;
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['55']++;
          this.nextPosition.elevation = nearestPosition.elevation;
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['56']++;
          this.nextPosition.distance = nearestPosition.distance;
          __cov_D9o4h8SfqJEQqLYmix4GlA.s['57']++;
          this.reallyStartPosition();
        }
        __cov_D9o4h8SfqJEQqLYmix4GlA.s['58']++;
        return this;
      } else {
        __cov_D9o4h8SfqJEQqLYmix4GlA.b['3'][1]++;
      }
    } else {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['1'][1]++;
    }
  },
  isCrossfading: function() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['8']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['59']++;
    if (this.mainConvolver.gain.value !== 1) {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['7'][0]++;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['60']++;
      return true;
    } else {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['7'][1]++;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['61']++;
      return false;
    }
  },
  reallyStartPosition: function() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['9']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['62']++;
    this.position.azimuth = this.nextPosition.azimuth;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['63']++;
    this.position.elevation = this.nextPosition.elevation;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['64']++;
    this.position.distance = this.nextPosition.distance;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['65']++;
    this.secondaryConvolver.buffer = this.getHRTF(this.position.azimuth, this.position.elevation, this.position.distance);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['66']++;
    this.crossfading();
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['67']++;
    var active = this.mainConvolver;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['68']++;
    this.mainConvolver = this.secondaryConvolver;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['69']++;
    this.secondaryConvolver = active;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['70']++;
    if (this.changeWhenFinishCrossfading) {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['8'][0]++;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['71']++;
      this.changeWhenFinishCrossfading = false;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['72']++;
      clearInterval(this.intervalID);
    } else {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['8'][1]++;
    }
  },
  setCrossfadeDuration: function(duration) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['10']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['73']++;
    if (duration) {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['9'][0]++;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['74']++;
      this.crossfadeDuration = duration / 1000;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['75']++;
      return this;
    } else {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['9'][1]++;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['76']++;
      throw 'CrossfadeDuration setting error';
    }
  },
  getCrossfadeDuration: function() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['11']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['77']++;
    return this.crossfadeDuration * 1000;
  },
  getPosition: function() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['12']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['78']++;
    return this.position;
  },
  crossfading: function() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['13']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['79']++;
    var guardInterval = 0.02;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['80']++;
    this.mainConvolver.gain.setValueAtTime(1, audioContext.currentTime + guardInterval);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['81']++;
    this.mainConvolver.gain.linearRampToValueAtTime(0, audioContext.currentTime + guardInterval + this.crossfadeDuration);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['82']++;
    this.secondaryConvolver.gain.setValueAtTime(0, audioContext.currentTime + guardInterval);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['83']++;
    this.secondaryConvolver.gain.linearRampToValueAtTime(1, audioContext.currentTime + guardInterval + this.crossfadeDuration);
  },
  getHRTF: function(azimuth, elevation, distance) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['14']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['84']++;
    var nearest = this.getNearestPoint(azimuth, elevation, distance);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['85']++;
    return nearest.buffer;
  },
  sphericalToCartesian: function(azimuth, elevation, distance) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['15']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['86']++;
    return {
      x: distance * Math.sin(azimuth),
      y: distance * Math.cos(azimuth),
      z: distance * Math.sin(elevation)
    };
  },
  getRealCoordinates: function(azimuth, elevation, distance) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['16']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['87']++;
    var nearest = this.getNearestPoint(azimuth, elevation, distance);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['88']++;
    return {
      azimuth: nearest.azimuth,
      elevation: nearest.elevation,
      distance: nearest.distance
    };
  },
  getNearestPoint: function(azimuth, elevation, distance) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['17']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['89']++;
    var azimuthRadians = azimuth * Math.PI / 180;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['90']++;
    var elevationRadians = elevation * Math.PI / 180;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['91']++;
    var cartesianCoord = this.sphericalToCartesian(azimuthRadians, elevationRadians, distance);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['92']++;
    var nearest = this.tree.nearest(cartesianCoord, 1)[0];
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['93']++;
    return nearest[0];
  },
  setLastPosition: function() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['18']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['94']++;
    if (!this.isCrossfading()) {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['10'][0]++;
      __cov_D9o4h8SfqJEQqLYmix4GlA.s['95']++;
      this.reallyStartPosition();
    } else {
      __cov_D9o4h8SfqJEQqLYmix4GlA.b['10'][1]++;
    }
  }
}, {});
;
__cov_D9o4h8SfqJEQqLYmix4GlA.s['96']++;
var ConvolverAudioGraph = function ConvolverAudioGraph() {
  __cov_D9o4h8SfqJEQqLYmix4GlA.f['19']++;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['97']++;
  this.gainNode = audioContext.createGain();
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['98']++;
  this.convNode = audioContext.createConvolver();
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['99']++;
  this.convNode.normalize = false;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['100']++;
  this.gainNode.connect(this.convNode);
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['101']++;
  this.oscillatorNode = audioContext.createOscillator();
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['102']++;
  this.gainOscillatorNode = audioContext.createGain();
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['103']++;
  this.oscillatorNode.connect(this.gainOscillatorNode);
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['104']++;
  this.gainOscillatorNode.connect(this.gainNode);
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['105']++;
  this.gainOscillatorNode.gain.value = 0;
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['106']++;
  this.oscillatorNode.start(0);
  __cov_D9o4h8SfqJEQqLYmix4GlA.s['107']++;
  return this;
};
__cov_D9o4h8SfqJEQqLYmix4GlA.s['108']++;
$traceurRuntime.createClass(ConvolverAudioGraph, {
  get input() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['20']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['109']++;
    return this.gainNode;
  },
  get gain() {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['21']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['110']++;
    return this.gainNode.gain;
  },
  set buffer(value) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['22']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['111']++;
    this.convNode.buffer = value;
  },
  connect: function(node) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['23']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['112']++;
    this.convNode.connect(node);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['113']++;
    return this;
  },
  disconnect: function(node) {
    __cov_D9o4h8SfqJEQqLYmix4GlA.f['24']++;
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['114']++;
    this.convNode.disconnect(node);
    __cov_D9o4h8SfqJEQqLYmix4GlA.s['115']++;
    return this;
  }
}, {});
;
__cov_D9o4h8SfqJEQqLYmix4GlA.s['116']++;
module.exports = BinauralFIR;


//# sourceURL=/Users/goldszmidt/sam/pro/dev/binauralFIR/binaural-fir.es6.js
},{"audio-context":4,"kdt":37}],3:[function(require,module,exports){
/* Copyright 2013 Chris Wilson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/* 

This monkeypatch library is intended to be included in projects that are
written to the proper AudioContext spec (instead of webkitAudioContext), 
and that use the new naming and proper bits of the Web Audio API (e.g. 
using BufferSourceNode.start() instead of BufferSourceNode.noteOn()), but may
have to run on systems that only support the deprecated bits.

This library should be harmless to include if the browser supports 
unprefixed "AudioContext", and/or if it supports the new names.  

The patches this library handles:
if window.AudioContext is unsupported, it will be aliased to webkitAudioContext().
if AudioBufferSourceNode.start() is unimplemented, it will be routed to noteOn() or
noteGrainOn(), depending on parameters.

The following aliases only take effect if the new names are not already in place:

AudioBufferSourceNode.stop() is aliased to noteOff()
AudioContext.createGain() is aliased to createGainNode()
AudioContext.createDelay() is aliased to createDelayNode()
AudioContext.createScriptProcessor() is aliased to createJavaScriptNode()
AudioContext.createPeriodicWave() is aliased to createWaveTable()
OscillatorNode.start() is aliased to noteOn()
OscillatorNode.stop() is aliased to noteOff()
OscillatorNode.setPeriodicWave() is aliased to setWaveTable()
AudioParam.setTargetAtTime() is aliased to setTargetValueAtTime()

This library does NOT patch the enumerated type changes, as it is 
recommended in the specification that implementations support both integer
and string types for AudioPannerNode.panningModel, AudioPannerNode.distanceModel 
BiquadFilterNode.type and OscillatorNode.type.

*/
(function (global, exports, perf) {
  'use strict';

  function fixSetTarget(param) {
    if (!param) // if NYI, just return
      return;
    if (!param.setTargetAtTime)
      param.setTargetAtTime = param.setTargetValueAtTime; 
  }

  if (window.hasOwnProperty('webkitAudioContext') && 
      !window.hasOwnProperty('AudioContext')) {
    window.AudioContext = webkitAudioContext;

    if (!AudioContext.prototype.hasOwnProperty('createGain'))
      AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
    if (!AudioContext.prototype.hasOwnProperty('createDelay'))
      AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
    if (!AudioContext.prototype.hasOwnProperty('createScriptProcessor'))
      AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
    if (!AudioContext.prototype.hasOwnProperty('createPeriodicWave'))
      AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;


    AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
    AudioContext.prototype.createGain = function() { 
      var node = this.internal_createGain();
      fixSetTarget(node.gain);
      return node;
    };

    AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
    AudioContext.prototype.createDelay = function(maxDelayTime) { 
      var node = maxDelayTime ? this.internal_createDelay(maxDelayTime) : this.internal_createDelay();
      fixSetTarget(node.delayTime);
      return node;
    };

    AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
    AudioContext.prototype.createBufferSource = function() { 
      var node = this.internal_createBufferSource();
      if (!node.start) {
        node.start = function ( when, offset, duration ) {
          if ( offset || duration )
            this.noteGrainOn( when, offset, duration );
          else
            this.noteOn( when );
        };
      }
      if (!node.stop)
        node.stop = node.noteOff;
      fixSetTarget(node.playbackRate);
      return node;
    };

    AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
    AudioContext.prototype.createDynamicsCompressor = function() { 
      var node = this.internal_createDynamicsCompressor();
      fixSetTarget(node.threshold);
      fixSetTarget(node.knee);
      fixSetTarget(node.ratio);
      fixSetTarget(node.reduction);
      fixSetTarget(node.attack);
      fixSetTarget(node.release);
      return node;
    };

    AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
    AudioContext.prototype.createBiquadFilter = function() { 
      var node = this.internal_createBiquadFilter();
      fixSetTarget(node.frequency);
      fixSetTarget(node.detune);
      fixSetTarget(node.Q);
      fixSetTarget(node.gain);
      return node;
    };

    if (AudioContext.prototype.hasOwnProperty( 'createOscillator' )) {
      AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
      AudioContext.prototype.createOscillator = function() { 
        var node = this.internal_createOscillator();
        if (!node.start)
          node.start = node.noteOn; 
        if (!node.stop)
          node.stop = node.noteOff;
        if (!node.setPeriodicWave)
          node.setPeriodicWave = node.setWaveTable;
        fixSetTarget(node.frequency);
        fixSetTarget(node.detune);
        return node;
      };
    }
  }
}(window));
},{}],4:[function(require,module,exports){
/*globals AudioContext*/
require('./ac-monkeypatch');
window.waves = window.waves || {};
module.exports = window.waves.audioContext = window.waves.audioContext || new AudioContext();
},{"./ac-monkeypatch":3}],5:[function(require,module,exports){
module.exports = require('./lib/chai');

},{"./lib/chai":6}],6:[function(require,module,exports){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var used = []
  , exports = module.exports = {};

/*!
 * Chai version
 */

exports.version = '1.10.0';

/*!
 * Assertion Error
 */

exports.AssertionError = require('assertion-error');

/*!
 * Utils for plugins (not exported)
 */

var util = require('./chai/utils');

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

exports.use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(this, util);
    used.push(fn);
  }

  return this;
};

/*!
 * Configuration
 */

var config = require('./chai/config');
exports.config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = require('./chai/assertion');
exports.use(assertion);

/*!
 * Core Assertions
 */

var core = require('./chai/core/assertions');
exports.use(core);

/*!
 * Expect interface
 */

var expect = require('./chai/interface/expect');
exports.use(expect);

/*!
 * Should interface
 */

var should = require('./chai/interface/should');
exports.use(should);

/*!
 * Assert interface
 */

var assert = require('./chai/interface/assert');
exports.use(assert);

},{"./chai/assertion":7,"./chai/config":8,"./chai/core/assertions":9,"./chai/interface/assert":10,"./chai/interface/expect":11,"./chai/interface/should":12,"./chai/utils":23,"assertion-error":32}],7:[function(require,module,exports){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = require('./config');
var NOOP = function() { };

module.exports = function (_chai, util) {
  /*!
   * Module dependencies.
   */

  var AssertionError = _chai.AssertionError
    , flag = util.flag;

  /*!
   * Module export.
   */

  _chai.Assertion = Assertion;

  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * @api private
   */

  function Assertion (obj, msg, stack) {
    flag(this, 'ssfi', stack || arguments.callee);
    flag(this, 'object', obj);
    flag(this, 'message', msg);
  }

  Object.defineProperty(Assertion, 'includeStack', {
    get: function() {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      return config.includeStack;
    },
    set: function(value) {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      config.includeStack = value;
    }
  });

  Object.defineProperty(Assertion, 'showDiff', {
    get: function() {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      return config.showDiff;
    },
    set: function(value) {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      config.showDiff = value;
    }
  });

  Assertion.addProperty = function (name, fn) {
    util.addProperty(this.prototype, name, fn);
  };

  Assertion.addMethod = function (name, fn) {
    util.addMethod(this.prototype, name, fn);
  };

  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  Assertion.addChainableNoop = function(name, fn) {
    util.addChainableMethod(this.prototype, name, NOOP, fn);
  };

  Assertion.overwriteProperty = function (name, fn) {
    util.overwriteProperty(this.prototype, name, fn);
  };

  Assertion.overwriteMethod = function (name, fn) {
    util.overwriteMethod(this.prototype, name, fn);
  };

  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  /*!
   * ### .assert(expression, message, negateMessage, expected, actual)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String or Function} message or function that returns message to display if fails
   * @param {String or Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @api private
   */

  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
    var ok = util.test(this, arguments);
    if (true !== showDiff) showDiff = false;
    if (true !== config.showDiff) showDiff = false;

    if (!ok) {
      var msg = util.getMessage(this, arguments)
        , actual = util.getActual(this, arguments);
      throw new AssertionError(msg, {
          actual: actual
        , expected: expected
        , showDiff: showDiff
      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
    }
  };

  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */

  Object.defineProperty(Assertion.prototype, '_obj',
    { get: function () {
        return flag(this, 'object');
      }
    , set: function (val) {
        flag(this, 'object', val);
      }
  });
};

},{"./config":8}],8:[function(require,module,exports){
module.exports = {

  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */

   includeStack: false,

  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */

  showDiff: true,

  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded,
   * the value is truncated.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */

  truncateThreshold: 40

};

},{}],9:[function(require,module,exports){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, _) {
  var Assertion = chai.Assertion
    , toString = Object.prototype.toString
    , flag = _.flag;

  /**
   * ### Language Chains
   *
   * The following are provided as chainable getters to
   * improve the readability of your assertions. They
   * do not provide testing capabilities unless they
   * have been overwritten by a plugin.
   *
   * **Chains**
   *
   * - to
   * - be
   * - been
   * - is
   * - that
   * - and
   * - has
   * - have
   * - with
   * - at
   * - of
   * - same
   *
   * @name language chains
   * @api public
   */

  [ 'to', 'be', 'been'
  , 'is', 'and', 'has', 'have'
  , 'with', 'that', 'at'
  , 'of', 'same' ].forEach(function (chain) {
    Assertion.addProperty(chain, function () {
      return this;
    });
  });

  /**
   * ### .not
   *
   * Negates any of assertions following in the chain.
   *
   *     expect(foo).to.not.equal('bar');
   *     expect(goodFn).to.not.throw(Error);
   *     expect({ foo: 'baz' }).to.have.property('foo')
   *       .and.not.equal('bar');
   *
   * @name not
   * @api public
   */

  Assertion.addProperty('not', function () {
    flag(this, 'negate', true);
  });

  /**
   * ### .deep
   *
   * Sets the `deep` flag, later used by the `equal` and
   * `property` assertions.
   *
   *     expect(foo).to.deep.equal({ bar: 'baz' });
   *     expect({ foo: { bar: { baz: 'quux' } } })
   *       .to.have.deep.property('foo.bar.baz', 'quux');
   *
   * @name deep
   * @api public
   */

  Assertion.addProperty('deep', function () {
    flag(this, 'deep', true);
  });

  /**
   * ### .a(type)
   *
   * The `a` and `an` assertions are aliases that can be
   * used either as language chains or to assert a value's
   * type.
   *
   *     // typeof
   *     expect('test').to.be.a('string');
   *     expect({ foo: 'bar' }).to.be.an('object');
   *     expect(null).to.be.a('null');
   *     expect(undefined).to.be.an('undefined');
   *
   *     // language chain
   *     expect(foo).to.be.an.instanceof(Foo);
   *
   * @name a
   * @alias an
   * @param {String} type
   * @param {String} message _optional_
   * @api public
   */

  function an (type, msg) {
    if (msg) flag(this, 'message', msg);
    type = type.toLowerCase();
    var obj = flag(this, 'object')
      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

    this.assert(
        type === _.type(obj)
      , 'expected #{this} to be ' + article + type
      , 'expected #{this} not to be ' + article + type
    );
  }

  Assertion.addChainableMethod('an', an);
  Assertion.addChainableMethod('a', an);

  /**
   * ### .include(value)
   *
   * The `include` and `contain` assertions can be used as either property
   * based language chains or as methods to assert the inclusion of an object
   * in an array or a substring in a string. When used as language chains,
   * they toggle the `contain` flag for the `keys` assertion.
   *
   *     expect([1,2,3]).to.include(2);
   *     expect('foobar').to.contain('foo');
   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
   *
   * @name include
   * @alias contain
   * @param {Object|String|Number} obj
   * @param {String} message _optional_
   * @api public
   */

  function includeChainingBehavior () {
    flag(this, 'contains', true);
  }

  function include (val, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var expected = false;
    if (_.type(obj) === 'array' && _.type(val) === 'object') {
      for (var i in obj) {
        if (_.eql(obj[i], val)) {
          expected = true;
          break;
        }
      }
    } else if (_.type(val) === 'object') {
      if (!flag(this, 'negate')) {
        for (var k in val) new Assertion(obj).property(k, val[k]);
        return;
      }
      var subset = {}
      for (var k in val) subset[k] = obj[k]
      expected = _.eql(subset, val);
    } else {
      expected = obj && ~obj.indexOf(val)
    }
    this.assert(
        expected
      , 'expected #{this} to include ' + _.inspect(val)
      , 'expected #{this} to not include ' + _.inspect(val));
  }

  Assertion.addChainableMethod('include', include, includeChainingBehavior);
  Assertion.addChainableMethod('contain', include, includeChainingBehavior);

  /**
   * ### .ok
   *
   * Asserts that the target is truthy.
   *
   *     expect('everthing').to.be.ok;
   *     expect(1).to.be.ok;
   *     expect(false).to.not.be.ok;
   *     expect(undefined).to.not.be.ok;
   *     expect(null).to.not.be.ok;
   *
   * Can also be used as a function, which prevents some linter errors.
   *
   *     expect('everthing').to.be.ok();
   *     
   * @name ok
   * @api public
   */

  Assertion.addChainableNoop('ok', function () {
    this.assert(
        flag(this, 'object')
      , 'expected #{this} to be truthy'
      , 'expected #{this} to be falsy');
  });

  /**
   * ### .true
   *
   * Asserts that the target is `true`.
   *
   *     expect(true).to.be.true;
   *     expect(1).to.not.be.true;
   *
   * Can also be used as a function, which prevents some linter errors.
   *
   *     expect(true).to.be.true();
   *
   * @name true
   * @api public
   */

  Assertion.addChainableNoop('true', function () {
    this.assert(
        true === flag(this, 'object')
      , 'expected #{this} to be true'
      , 'expected #{this} to be false'
      , this.negate ? false : true
    );
  });

  /**
   * ### .false
   *
   * Asserts that the target is `false`.
   *
   *     expect(false).to.be.false;
   *     expect(0).to.not.be.false;
   *
   * Can also be used as a function, which prevents some linter errors.
   *
   *     expect(false).to.be.false();
   *
   * @name false
   * @api public
   */

  Assertion.addChainableNoop('false', function () {
    this.assert(
        false === flag(this, 'object')
      , 'expected #{this} to be false'
      , 'expected #{this} to be true'
      , this.negate ? true : false
    );
  });

  /**
   * ### .null
   *
   * Asserts that the target is `null`.
   *
   *     expect(null).to.be.null;
   *     expect(undefined).not.to.be.null;
   *
   * Can also be used as a function, which prevents some linter errors.
   *
   *     expect(null).to.be.null();
   *
   * @name null
   * @api public
   */

  Assertion.addChainableNoop('null', function () {
    this.assert(
        null === flag(this, 'object')
      , 'expected #{this} to be null'
      , 'expected #{this} not to be null'
    );
  });

  /**
   * ### .undefined
   *
   * Asserts that the target is `undefined`.
   *
   *     expect(undefined).to.be.undefined;
   *     expect(null).to.not.be.undefined;
   *
   * Can also be used as a function, which prevents some linter errors.
   *
   *     expect(undefined).to.be.undefined();
   *
   * @name undefined
   * @api public
   */

  Assertion.addChainableNoop('undefined', function () {
    this.assert(
        undefined === flag(this, 'object')
      , 'expected #{this} to be undefined'
      , 'expected #{this} not to be undefined'
    );
  });

  /**
   * ### .exist
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var foo = 'hi'
   *       , bar = null
   *       , baz;
   *
   *     expect(foo).to.exist;
   *     expect(bar).to.not.exist;
   *     expect(baz).to.not.exist;
   *
   * Can also be used as a function, which prevents some linter errors.
   *
   *     expect(foo).to.exist();
   *
   * @name exist
   * @api public
   */

  Assertion.addChainableNoop('exist', function () {
    this.assert(
        null != flag(this, 'object')
      , 'expected #{this} to exist'
      , 'expected #{this} to not exist'
    );
  });


  /**
   * ### .empty
   *
   * Asserts that the target's length is `0`. For arrays, it checks
   * the `length` property. For objects, it gets the count of
   * enumerable keys.
   *
   *     expect([]).to.be.empty;
   *     expect('').to.be.empty;
   *     expect({}).to.be.empty;
   *
   * Can also be used as a function, which prevents some linter errors.
   *
   *     expect([]).to.be.empty();
   *
   * @name empty
   * @api public
   */

  Assertion.addChainableNoop('empty', function () {
    var obj = flag(this, 'object')
      , expected = obj;

    if (Array.isArray(obj) || 'string' === typeof object) {
      expected = obj.length;
    } else if (typeof obj === 'object') {
      expected = Object.keys(obj).length;
    }

    this.assert(
        !expected
      , 'expected #{this} to be empty'
      , 'expected #{this} not to be empty'
    );
  });

  /**
   * ### .arguments
   *
   * Asserts that the target is an arguments object.
   *
   *     function test () {
   *       expect(arguments).to.be.arguments;
   *     }
   *
   * Can also be used as a function, which prevents some linter errors.
   *
   *     function test () {
   *       expect(arguments).to.be.arguments();
   *     }
   *
   * @name arguments
   * @alias Arguments
   * @api public
   */

  function checkArguments () {
    var obj = flag(this, 'object')
      , type = Object.prototype.toString.call(obj);
    this.assert(
        '[object Arguments]' === type
      , 'expected #{this} to be arguments but got ' + type
      , 'expected #{this} to not be arguments'
    );
  }

  Assertion.addChainableNoop('arguments', checkArguments);
  Assertion.addChainableNoop('Arguments', checkArguments);

  /**
   * ### .equal(value)
   *
   * Asserts that the target is strictly equal (`===`) to `value`.
   * Alternately, if the `deep` flag is set, asserts that
   * the target is deeply equal to `value`.
   *
   *     expect('hello').to.equal('hello');
   *     expect(42).to.equal(42);
   *     expect(1).to.not.equal(true);
   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
   *
   * @name equal
   * @alias equals
   * @alias eq
   * @alias deep.equal
   * @param {Mixed} value
   * @param {String} message _optional_
   * @api public
   */

  function assertEqual (val, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'deep')) {
      return this.eql(val);
    } else {
      this.assert(
          val === obj
        , 'expected #{this} to equal #{exp}'
        , 'expected #{this} to not equal #{exp}'
        , val
        , this._obj
        , true
      );
    }
  }

  Assertion.addMethod('equal', assertEqual);
  Assertion.addMethod('equals', assertEqual);
  Assertion.addMethod('eq', assertEqual);

  /**
   * ### .eql(value)
   *
   * Asserts that the target is deeply equal to `value`.
   *
   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
   *
   * @name eql
   * @alias eqls
   * @param {Mixed} value
   * @param {String} message _optional_
   * @api public
   */

  function assertEql(obj, msg) {
    if (msg) flag(this, 'message', msg);
    this.assert(
        _.eql(obj, flag(this, 'object'))
      , 'expected #{this} to deeply equal #{exp}'
      , 'expected #{this} to not deeply equal #{exp}'
      , obj
      , this._obj
      , true
    );
  }

  Assertion.addMethod('eql', assertEql);
  Assertion.addMethod('eqls', assertEql);

  /**
   * ### .above(value)
   *
   * Asserts that the target is greater than `value`.
   *
   *     expect(10).to.be.above(5);
   *
   * Can also be used in conjunction with `length` to
   * assert a minimum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.above(2);
   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
   *
   * @name above
   * @alias gt
   * @alias greaterThan
   * @param {Number} value
   * @param {String} message _optional_
   * @api public
   */

  function assertAbove (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len > n
        , 'expected #{this} to have a length above #{exp} but got #{act}'
        , 'expected #{this} to not have a length above #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj > n
        , 'expected #{this} to be above ' + n
        , 'expected #{this} to be at most ' + n
      );
    }
  }

  Assertion.addMethod('above', assertAbove);
  Assertion.addMethod('gt', assertAbove);
  Assertion.addMethod('greaterThan', assertAbove);

  /**
   * ### .least(value)
   *
   * Asserts that the target is greater than or equal to `value`.
   *
   *     expect(10).to.be.at.least(10);
   *
   * Can also be used in conjunction with `length` to
   * assert a minimum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.of.at.least(2);
   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
   *
   * @name least
   * @alias gte
   * @param {Number} value
   * @param {String} message _optional_
   * @api public
   */

  function assertLeast (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len >= n
        , 'expected #{this} to have a length at least #{exp} but got #{act}'
        , 'expected #{this} to have a length below #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj >= n
        , 'expected #{this} to be at least ' + n
        , 'expected #{this} to be below ' + n
      );
    }
  }

  Assertion.addMethod('least', assertLeast);
  Assertion.addMethod('gte', assertLeast);

  /**
   * ### .below(value)
   *
   * Asserts that the target is less than `value`.
   *
   *     expect(5).to.be.below(10);
   *
   * Can also be used in conjunction with `length` to
   * assert a maximum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.below(4);
   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
   *
   * @name below
   * @alias lt
   * @alias lessThan
   * @param {Number} value
   * @param {String} message _optional_
   * @api public
   */

  function assertBelow (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len < n
        , 'expected #{this} to have a length below #{exp} but got #{act}'
        , 'expected #{this} to not have a length below #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj < n
        , 'expected #{this} to be below ' + n
        , 'expected #{this} to be at least ' + n
      );
    }
  }

  Assertion.addMethod('below', assertBelow);
  Assertion.addMethod('lt', assertBelow);
  Assertion.addMethod('lessThan', assertBelow);

  /**
   * ### .most(value)
   *
   * Asserts that the target is less than or equal to `value`.
   *
   *     expect(5).to.be.at.most(5);
   *
   * Can also be used in conjunction with `length` to
   * assert a maximum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.of.at.most(4);
   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
   *
   * @name most
   * @alias lte
   * @param {Number} value
   * @param {String} message _optional_
   * @api public
   */

  function assertMost (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len <= n
        , 'expected #{this} to have a length at most #{exp} but got #{act}'
        , 'expected #{this} to have a length above #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj <= n
        , 'expected #{this} to be at most ' + n
        , 'expected #{this} to be above ' + n
      );
    }
  }

  Assertion.addMethod('most', assertMost);
  Assertion.addMethod('lte', assertMost);

  /**
   * ### .within(start, finish)
   *
   * Asserts that the target is within a range.
   *
   *     expect(7).to.be.within(5,10);
   *
   * Can also be used in conjunction with `length` to
   * assert a length range. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.within(2,4);
   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
   *
   * @name within
   * @param {Number} start lowerbound inclusive
   * @param {Number} finish upperbound inclusive
   * @param {String} message _optional_
   * @api public
   */

  Assertion.addMethod('within', function (start, finish, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , range = start + '..' + finish;
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len >= start && len <= finish
        , 'expected #{this} to have a length within ' + range
        , 'expected #{this} to not have a length within ' + range
      );
    } else {
      this.assert(
          obj >= start && obj <= finish
        , 'expected #{this} to be within ' + range
        , 'expected #{this} to not be within ' + range
      );
    }
  });

  /**
   * ### .instanceof(constructor)
   *
   * Asserts that the target is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , Chai = new Tea('chai');
   *
   *     expect(Chai).to.be.an.instanceof(Tea);
   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
   *
   * @name instanceof
   * @param {Constructor} constructor
   * @param {String} message _optional_
   * @alias instanceOf
   * @api public
   */

  function assertInstanceOf (constructor, msg) {
    if (msg) flag(this, 'message', msg);
    var name = _.getName(constructor);
    this.assert(
        flag(this, 'object') instanceof constructor
      , 'expected #{this} to be an instance of ' + name
      , 'expected #{this} to not be an instance of ' + name
    );
  };

  Assertion.addMethod('instanceof', assertInstanceOf);
  Assertion.addMethod('instanceOf', assertInstanceOf);

  /**
   * ### .property(name, [value])
   *
   * Asserts that the target has a property `name`, optionally asserting that
   * the value of that property is strictly equal to  `value`.
   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
   * references into objects and arrays.
   *
   *     // simple referencing
   *     var obj = { foo: 'bar' };
   *     expect(obj).to.have.property('foo');
   *     expect(obj).to.have.property('foo', 'bar');
   *
   *     // deep referencing
   *     var deepObj = {
   *         green: { tea: 'matcha' }
   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
   *     };

   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
   *
   * You can also use an array as the starting point of a `deep.property`
   * assertion, or traverse nested arrays.
   *
   *     var arr = [
   *         [ 'chai', 'matcha', 'konacha' ]
   *       , [ { tea: 'chai' }
   *         , { tea: 'matcha' }
   *         , { tea: 'konacha' } ]
   *     ];
   *
   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
   *
   * Furthermore, `property` changes the subject of the assertion
   * to be the value of that property from the original object. This
   * permits for further chainable assertions on that property.
   *
   *     expect(obj).to.have.property('foo')
   *       .that.is.a('string');
   *     expect(deepObj).to.have.property('green')
   *       .that.is.an('object')
   *       .that.deep.equals({ tea: 'matcha' });
   *     expect(deepObj).to.have.property('teas')
   *       .that.is.an('array')
   *       .with.deep.property('[2]')
   *         .that.deep.equals({ tea: 'konacha' });
   *
   * @name property
   * @alias deep.property
   * @param {String} name
   * @param {Mixed} value (optional)
   * @param {String} message _optional_
   * @returns value of property for chaining
   * @api public
   */

  Assertion.addMethod('property', function (name, val, msg) {
    if (msg) flag(this, 'message', msg);

    var descriptor = flag(this, 'deep') ? 'deep property ' : 'property '
      , negate = flag(this, 'negate')
      , obj = flag(this, 'object')
      , value = flag(this, 'deep')
        ? _.getPathValue(name, obj)
        : obj[name];

    if (negate && undefined !== val) {
      if (undefined === value) {
        msg = (msg != null) ? msg + ': ' : '';
        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
      }
    } else {
      this.assert(
          undefined !== value
        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
    }

    if (undefined !== val) {
      this.assert(
          val === value
        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
        , val
        , value
      );
    }

    flag(this, 'object', value);
  });


  /**
   * ### .ownProperty(name)
   *
   * Asserts that the target has an own property `name`.
   *
   *     expect('test').to.have.ownProperty('length');
   *
   * @name ownProperty
   * @alias haveOwnProperty
   * @param {String} name
   * @param {String} message _optional_
   * @api public
   */

  function assertOwnProperty (name, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        obj.hasOwnProperty(name)
      , 'expected #{this} to have own property ' + _.inspect(name)
      , 'expected #{this} to not have own property ' + _.inspect(name)
    );
  }

  Assertion.addMethod('ownProperty', assertOwnProperty);
  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

  /**
   * ### .length(value)
   *
   * Asserts that the target's `length` property has
   * the expected value.
   *
   *     expect([ 1, 2, 3]).to.have.length(3);
   *     expect('foobar').to.have.length(6);
   *
   * Can also be used as a chain precursor to a value
   * comparison for the length property.
   *
   *     expect('foo').to.have.length.above(2);
   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
   *     expect('foo').to.have.length.below(4);
   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
   *     expect('foo').to.have.length.within(2,4);
   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
   *
   * @name length
   * @alias lengthOf
   * @param {Number} length
   * @param {String} message _optional_
   * @api public
   */

  function assertLengthChain () {
    flag(this, 'doLength', true);
  }

  function assertLength (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).to.have.property('length');
    var len = obj.length;

    this.assert(
        len == n
      , 'expected #{this} to have a length of #{exp} but got #{act}'
      , 'expected #{this} to not have a length of #{act}'
      , n
      , len
    );
  }

  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
  Assertion.addMethod('lengthOf', assertLength);

  /**
   * ### .match(regexp)
   *
   * Asserts that the target matches a regular expression.
   *
   *     expect('foobar').to.match(/^foo/);
   *
   * @name match
   * @param {RegExp} RegularExpression
   * @param {String} message _optional_
   * @api public
   */

  Assertion.addMethod('match', function (re, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        re.exec(obj)
      , 'expected #{this} to match ' + re
      , 'expected #{this} not to match ' + re
    );
  });

  /**
   * ### .string(string)
   *
   * Asserts that the string target contains another string.
   *
   *     expect('foobar').to.have.string('bar');
   *
   * @name string
   * @param {String} string
   * @param {String} message _optional_
   * @api public
   */

  Assertion.addMethod('string', function (str, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).is.a('string');

    this.assert(
        ~obj.indexOf(str)
      , 'expected #{this} to contain ' + _.inspect(str)
      , 'expected #{this} to not contain ' + _.inspect(str)
    );
  });


  /**
   * ### .keys(key1, [key2], [...])
   *
   * Asserts that the target has exactly the given keys, or
   * asserts the inclusion of some keys when using the
   * `include` or `contain` modifiers.
   *
   *     expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');
   *
   * @name keys
   * @alias key
   * @param {String...|Array} keys
   * @api public
   */

  function assertKeys (keys) {
    var obj = flag(this, 'object')
      , str
      , ok = true;

    keys = keys instanceof Array
      ? keys
      : Array.prototype.slice.call(arguments);

    if (!keys.length) throw new Error('keys required');

    var actual = Object.keys(obj)
      , expected = keys
      , len = keys.length;

    // Inclusion
    ok = keys.every(function(key){
      return ~actual.indexOf(key);
    });

    // Strict
    if (!flag(this, 'negate') && !flag(this, 'contains')) {
      ok = ok && keys.length == actual.length;
    }

    // Key string
    if (len > 1) {
      keys = keys.map(function(key){
        return _.inspect(key);
      });
      var last = keys.pop();
      str = keys.join(', ') + ', and ' + last;
    } else {
      str = _.inspect(keys[0]);
    }

    // Form
    str = (len > 1 ? 'keys ' : 'key ') + str;

    // Have / include
    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

    // Assertion
    this.assert(
        ok
      , 'expected #{this} to ' + str
      , 'expected #{this} to not ' + str
      , expected.sort()
      , actual.sort()
      , true
    );
  }

  Assertion.addMethod('keys', assertKeys);
  Assertion.addMethod('key', assertKeys);

  /**
   * ### .throw(constructor)
   *
   * Asserts that the function target will throw a specific error, or specific type of error
   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
   * for the error's message.
   *
   *     var err = new ReferenceError('This is a bad function.');
   *     var fn = function () { throw err; }
   *     expect(fn).to.throw(ReferenceError);
   *     expect(fn).to.throw(Error);
   *     expect(fn).to.throw(/bad function/);
   *     expect(fn).to.not.throw('good function');
   *     expect(fn).to.throw(ReferenceError, /bad function/);
   *     expect(fn).to.throw(err);
   *     expect(fn).to.not.throw(new RangeError('Out of range.'));
   *
   * Please note that when a throw expectation is negated, it will check each
   * parameter independently, starting with error constructor type. The appropriate way
   * to check for the existence of a type of error but for a message that does not match
   * is to use `and`.
   *
   *     expect(fn).to.throw(ReferenceError)
   *        .and.not.throw(/good function/);
   *
   * @name throw
   * @alias throws
   * @alias Throw
   * @param {ErrorConstructor} constructor
   * @param {String|RegExp} expected error message
   * @param {String} message _optional_
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @returns error for chaining (null if no error)
   * @api public
   */

  function assertThrows (constructor, errMsg, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).is.a('function');

    var thrown = false
      , desiredError = null
      , name = null
      , thrownError = null;

    if (arguments.length === 0) {
      errMsg = null;
      constructor = null;
    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
      errMsg = constructor;
      constructor = null;
    } else if (constructor && constructor instanceof Error) {
      desiredError = constructor;
      constructor = null;
      errMsg = null;
    } else if (typeof constructor === 'function') {
      name = constructor.prototype.name || constructor.name;
      if (name === 'Error' && constructor !== Error) {
        name = (new constructor()).name;
      }
    } else {
      constructor = null;
    }

    try {
      obj();
    } catch (err) {
      // first, check desired error
      if (desiredError) {
        this.assert(
            err === desiredError
          , 'expected #{this} to throw #{exp} but #{act} was thrown'
          , 'expected #{this} to not throw #{exp}'
          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
          , (err instanceof Error ? err.toString() : err)
        );

        flag(this, 'object', err);
        return this;
      }

      // next, check constructor
      if (constructor) {
        this.assert(
            err instanceof constructor
          , 'expected #{this} to throw #{exp} but #{act} was thrown'
          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
          , name
          , (err instanceof Error ? err.toString() : err)
        );

        if (!errMsg) {
          flag(this, 'object', err);
          return this;
        }
      }

      // next, check message
      var message = 'object' === _.type(err) && "message" in err
        ? err.message
        : '' + err;

      if ((message != null) && errMsg && errMsg instanceof RegExp) {
        this.assert(
            errMsg.exec(message)
          , 'expected #{this} to throw error matching #{exp} but got #{act}'
          , 'expected #{this} to throw error not matching #{exp}'
          , errMsg
          , message
        );

        flag(this, 'object', err);
        return this;
      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
        this.assert(
            ~message.indexOf(errMsg)
          , 'expected #{this} to throw error including #{exp} but got #{act}'
          , 'expected #{this} to throw error not including #{act}'
          , errMsg
          , message
        );

        flag(this, 'object', err);
        return this;
      } else {
        thrown = true;
        thrownError = err;
      }
    }

    var actuallyGot = ''
      , expectedThrown = name !== null
        ? name
        : desiredError
          ? '#{exp}' //_.inspect(desiredError)
          : 'an error';

    if (thrown) {
      actuallyGot = ' but #{act} was thrown'
    }

    this.assert(
        thrown === true
      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
    );

    flag(this, 'object', thrownError);
  };

  Assertion.addMethod('throw', assertThrows);
  Assertion.addMethod('throws', assertThrows);
  Assertion.addMethod('Throw', assertThrows);

  /**
   * ### .respondTo(method)
   *
   * Asserts that the object or class target will respond to a method.
   *
   *     Klass.prototype.bar = function(){};
   *     expect(Klass).to.respondTo('bar');
   *     expect(obj).to.respondTo('bar');
   *
   * To check if a constructor will respond to a static function,
   * set the `itself` flag.
   *
   *     Klass.baz = function(){};
   *     expect(Klass).itself.to.respondTo('baz');
   *
   * @name respondTo
   * @param {String} method
   * @param {String} message _optional_
   * @api public
   */

  Assertion.addMethod('respondTo', function (method, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , itself = flag(this, 'itself')
      , context = ('function' === _.type(obj) && !itself)
        ? obj.prototype[method]
        : obj[method];

    this.assert(
        'function' === typeof context
      , 'expected #{this} to respond to ' + _.inspect(method)
      , 'expected #{this} to not respond to ' + _.inspect(method)
    );
  });

  /**
   * ### .itself
   *
   * Sets the `itself` flag, later used by the `respondTo` assertion.
   *
   *     function Foo() {}
   *     Foo.bar = function() {}
   *     Foo.prototype.baz = function() {}
   *
   *     expect(Foo).itself.to.respondTo('bar');
   *     expect(Foo).itself.not.to.respondTo('baz');
   *
   * @name itself
   * @api public
   */

  Assertion.addProperty('itself', function () {
    flag(this, 'itself', true);
  });

  /**
   * ### .satisfy(method)
   *
   * Asserts that the target passes a given truth test.
   *
   *     expect(1).to.satisfy(function(num) { return num > 0; });
   *
   * @name satisfy
   * @param {Function} matcher
   * @param {String} message _optional_
   * @api public
   */

  Assertion.addMethod('satisfy', function (matcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var result = matcher(obj);
    this.assert(
        result
      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
      , this.negate ? false : true
      , result
    );
  });

  /**
   * ### .closeTo(expected, delta)
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     expect(1.5).to.be.closeTo(1, 0.5);
   *
   * @name closeTo
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message _optional_
   * @api public
   */

  Assertion.addMethod('closeTo', function (expected, delta, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');

    new Assertion(obj, msg).is.a('number');
    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
      throw new Error('the arguments to closeTo must be numbers');
    }

    this.assert(
        Math.abs(obj - expected) <= delta
      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
    );
  });

  function isSubsetOf(subset, superset, cmp) {
    return subset.every(function(elem) {
      if (!cmp) return superset.indexOf(elem) !== -1;

      return superset.some(function(elem2) {
        return cmp(elem, elem2);
      });
    })
  }

  /**
   * ### .members(set)
   *
   * Asserts that the target is a superset of `set`,
   * or that the target and `set` have the same strictly-equal (===) members.
   * Alternately, if the `deep` flag is set, set members are compared for deep
   * equality.
   *
   *     expect([1, 2, 3]).to.include.members([3, 2]);
   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
   *
   *     expect([4, 2]).to.have.members([2, 4]);
   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
   *
   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
   *
   * @name members
   * @param {Array} set
   * @param {String} message _optional_
   * @api public
   */

  Assertion.addMethod('members', function (subset, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');

    new Assertion(obj).to.be.an('array');
    new Assertion(subset).to.be.an('array');

    var cmp = flag(this, 'deep') ? _.eql : undefined;

    if (flag(this, 'contains')) {
      return this.assert(
          isSubsetOf(subset, obj, cmp)
        , 'expected #{this} to be a superset of #{act}'
        , 'expected #{this} to not be a superset of #{act}'
        , obj
        , subset
      );
    }

    this.assert(
        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
        , 'expected #{this} to have the same members as #{act}'
        , 'expected #{this} to not have the same members as #{act}'
        , obj
        , subset
    );
  });
};

},{}],10:[function(require,module,exports){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */


module.exports = function (chai, util) {

  /*!
   * Chai dependencies.
   */

  var Assertion = chai.Assertion
    , flag = util.flag;

  /*!
   * Module export.
   */

  /**
   * ### assert(expression, message)
   *
   * Write your own test expressions.
   *
   *     assert('foo' !== 'bar', 'foo is not bar');
   *     assert(Array.isArray([]), 'empty arrays are arrays');
   *
   * @param {Mixed} expression to test for truthiness
   * @param {String} message to display on error
   * @name assert
   * @api public
   */

  var assert = chai.assert = function (express, errmsg) {
    var test = new Assertion(null, null, chai.assert);
    test.assert(
        express
      , errmsg
      , '[ negation message unavailable ]'
    );
  };

  /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure. Node.js `assert` module-compatible.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @api public
   */

  assert.fail = function (actual, expected, message, operator) {
    message = message || 'assert.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, assert.fail);
  };

  /**
   * ### .ok(object, [message])
   *
   * Asserts that `object` is truthy.
   *
   *     assert.ok('everything', 'everything is ok');
   *     assert.ok(false, 'this will fail');
   *
   * @name ok
   * @param {Mixed} object to test
   * @param {String} message
   * @api public
   */

  assert.ok = function (val, msg) {
    new Assertion(val, msg).is.ok;
  };

  /**
   * ### .notOk(object, [message])
   *
   * Asserts that `object` is falsy.
   *
   *     assert.notOk('everything', 'this will fail');
   *     assert.notOk(false, 'this will pass');
   *
   * @name notOk
   * @param {Mixed} object to test
   * @param {String} message
   * @api public
   */

  assert.notOk = function (val, msg) {
    new Assertion(val, msg).is.not.ok;
  };

  /**
   * ### .equal(actual, expected, [message])
   *
   * Asserts non-strict equality (`==`) of `actual` and `expected`.
   *
   *     assert.equal(3, '3', '== coerces values to strings');
   *
   * @name equal
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @api public
   */

  assert.equal = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.equal);

    test.assert(
        exp == flag(test, 'object')
      , 'expected #{this} to equal #{exp}'
      , 'expected #{this} to not equal #{act}'
      , exp
      , act
    );
  };

  /**
   * ### .notEqual(actual, expected, [message])
   *
   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
   *
   *     assert.notEqual(3, 4, 'these numbers are not equal');
   *
   * @name notEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @api public
   */

  assert.notEqual = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.notEqual);

    test.assert(
        exp != flag(test, 'object')
      , 'expected #{this} to not equal #{exp}'
      , 'expected #{this} to equal #{act}'
      , exp
      , act
    );
  };

  /**
   * ### .strictEqual(actual, expected, [message])
   *
   * Asserts strict equality (`===`) of `actual` and `expected`.
   *
   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
   *
   * @name strictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @api public
   */

  assert.strictEqual = function (act, exp, msg) {
    new Assertion(act, msg).to.equal(exp);
  };

  /**
   * ### .notStrictEqual(actual, expected, [message])
   *
   * Asserts strict inequality (`!==`) of `actual` and `expected`.
   *
   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
   *
   * @name notStrictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @api public
   */

  assert.notStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg).to.not.equal(exp);
  };

  /**
   * ### .deepEqual(actual, expected, [message])
   *
   * Asserts that `actual` is deeply equal to `expected`.
   *
   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
   *
   * @name deepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @api public
   */

  assert.deepEqual = function (act, exp, msg) {
    new Assertion(act, msg).to.eql(exp);
  };

  /**
   * ### .notDeepEqual(actual, expected, [message])
   *
   * Assert that `actual` is not deeply equal to `expected`.
   *
   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
   *
   * @name notDeepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @api public
   */

  assert.notDeepEqual = function (act, exp, msg) {
    new Assertion(act, msg).to.not.eql(exp);
  };

  /**
   * ### .isTrue(value, [message])
   *
   * Asserts that `value` is true.
   *
   *     var teaServed = true;
   *     assert.isTrue(teaServed, 'the tea has been served');
   *
   * @name isTrue
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isTrue = function (val, msg) {
    new Assertion(val, msg).is['true'];
  };

  /**
   * ### .isFalse(value, [message])
   *
   * Asserts that `value` is false.
   *
   *     var teaServed = false;
   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
   *
   * @name isFalse
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isFalse = function (val, msg) {
    new Assertion(val, msg).is['false'];
  };

  /**
   * ### .isNull(value, [message])
   *
   * Asserts that `value` is null.
   *
   *     assert.isNull(err, 'there was no error');
   *
   * @name isNull
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isNull = function (val, msg) {
    new Assertion(val, msg).to.equal(null);
  };

  /**
   * ### .isNotNull(value, [message])
   *
   * Asserts that `value` is not null.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotNull(tea, 'great, time for tea!');
   *
   * @name isNotNull
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isNotNull = function (val, msg) {
    new Assertion(val, msg).to.not.equal(null);
  };

  /**
   * ### .isUndefined(value, [message])
   *
   * Asserts that `value` is `undefined`.
   *
   *     var tea;
   *     assert.isUndefined(tea, 'no tea defined');
   *
   * @name isUndefined
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isUndefined = function (val, msg) {
    new Assertion(val, msg).to.equal(undefined);
  };

  /**
   * ### .isDefined(value, [message])
   *
   * Asserts that `value` is not `undefined`.
   *
   *     var tea = 'cup of chai';
   *     assert.isDefined(tea, 'tea has been defined');
   *
   * @name isDefined
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isDefined = function (val, msg) {
    new Assertion(val, msg).to.not.equal(undefined);
  };

  /**
   * ### .isFunction(value, [message])
   *
   * Asserts that `value` is a function.
   *
   *     function serveTea() { return 'cup of tea'; };
   *     assert.isFunction(serveTea, 'great, we can have tea now');
   *
   * @name isFunction
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isFunction = function (val, msg) {
    new Assertion(val, msg).to.be.a('function');
  };

  /**
   * ### .isNotFunction(value, [message])
   *
   * Asserts that `value` is _not_ a function.
   *
   *     var serveTea = [ 'heat', 'pour', 'sip' ];
   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
   *
   * @name isNotFunction
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isNotFunction = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('function');
  };

  /**
   * ### .isObject(value, [message])
   *
   * Asserts that `value` is an object (as revealed by
   * `Object.prototype.toString`).
   *
   *     var selection = { name: 'Chai', serve: 'with spices' };
   *     assert.isObject(selection, 'tea selection is an object');
   *
   * @name isObject
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isObject = function (val, msg) {
    new Assertion(val, msg).to.be.a('object');
  };

  /**
   * ### .isNotObject(value, [message])
   *
   * Asserts that `value` is _not_ an object.
   *
   *     var selection = 'chai'
   *     assert.isNotObject(selection, 'tea selection is not an object');
   *     assert.isNotObject(null, 'null is not an object');
   *
   * @name isNotObject
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isNotObject = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('object');
  };

  /**
   * ### .isArray(value, [message])
   *
   * Asserts that `value` is an array.
   *
   *     var menu = [ 'green', 'chai', 'oolong' ];
   *     assert.isArray(menu, 'what kind of tea do we want?');
   *
   * @name isArray
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isArray = function (val, msg) {
    new Assertion(val, msg).to.be.an('array');
  };

  /**
   * ### .isNotArray(value, [message])
   *
   * Asserts that `value` is _not_ an array.
   *
   *     var menu = 'green|chai|oolong';
   *     assert.isNotArray(menu, 'what kind of tea do we want?');
   *
   * @name isNotArray
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isNotArray = function (val, msg) {
    new Assertion(val, msg).to.not.be.an('array');
  };

  /**
   * ### .isString(value, [message])
   *
   * Asserts that `value` is a string.
   *
   *     var teaOrder = 'chai';
   *     assert.isString(teaOrder, 'order placed');
   *
   * @name isString
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isString = function (val, msg) {
    new Assertion(val, msg).to.be.a('string');
  };

  /**
   * ### .isNotString(value, [message])
   *
   * Asserts that `value` is _not_ a string.
   *
   *     var teaOrder = 4;
   *     assert.isNotString(teaOrder, 'order placed');
   *
   * @name isNotString
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isNotString = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('string');
  };

  /**
   * ### .isNumber(value, [message])
   *
   * Asserts that `value` is a number.
   *
   *     var cups = 2;
   *     assert.isNumber(cups, 'how many cups');
   *
   * @name isNumber
   * @param {Number} value
   * @param {String} message
   * @api public
   */

  assert.isNumber = function (val, msg) {
    new Assertion(val, msg).to.be.a('number');
  };

  /**
   * ### .isNotNumber(value, [message])
   *
   * Asserts that `value` is _not_ a number.
   *
   *     var cups = '2 cups please';
   *     assert.isNotNumber(cups, 'how many cups');
   *
   * @name isNotNumber
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isNotNumber = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('number');
  };

  /**
   * ### .isBoolean(value, [message])
   *
   * Asserts that `value` is a boolean.
   *
   *     var teaReady = true
   *       , teaServed = false;
   *
   *     assert.isBoolean(teaReady, 'is the tea ready');
   *     assert.isBoolean(teaServed, 'has tea been served');
   *
   * @name isBoolean
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isBoolean = function (val, msg) {
    new Assertion(val, msg).to.be.a('boolean');
  };

  /**
   * ### .isNotBoolean(value, [message])
   *
   * Asserts that `value` is _not_ a boolean.
   *
   *     var teaReady = 'yep'
   *       , teaServed = 'nope';
   *
   *     assert.isNotBoolean(teaReady, 'is the tea ready');
   *     assert.isNotBoolean(teaServed, 'has tea been served');
   *
   * @name isNotBoolean
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.isNotBoolean = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('boolean');
  };

  /**
   * ### .typeOf(value, name, [message])
   *
   * Asserts that `value`'s type is `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
   *     assert.typeOf('tea', 'string', 'we have a string');
   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
   *     assert.typeOf(null, 'null', 'we have a null');
   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
   *
   * @name typeOf
   * @param {Mixed} value
   * @param {String} name
   * @param {String} message
   * @api public
   */

  assert.typeOf = function (val, type, msg) {
    new Assertion(val, msg).to.be.a(type);
  };

  /**
   * ### .notTypeOf(value, name, [message])
   *
   * Asserts that `value`'s type is _not_ `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
   *
   * @name notTypeOf
   * @param {Mixed} value
   * @param {String} typeof name
   * @param {String} message
   * @api public
   */

  assert.notTypeOf = function (val, type, msg) {
    new Assertion(val, msg).to.not.be.a(type);
  };

  /**
   * ### .instanceOf(object, constructor, [message])
   *
   * Asserts that `value` is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new Tea('chai');
   *
   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
   *
   * @name instanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @api public
   */

  assert.instanceOf = function (val, type, msg) {
    new Assertion(val, msg).to.be.instanceOf(type);
  };

  /**
   * ### .notInstanceOf(object, constructor, [message])
   *
   * Asserts `value` is not an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new String('chai');
   *
   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
   *
   * @name notInstanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @api public
   */

  assert.notInstanceOf = function (val, type, msg) {
    new Assertion(val, msg).to.not.be.instanceOf(type);
  };

  /**
   * ### .include(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Works
   * for strings and arrays.
   *
   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
   *
   * @name include
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @api public
   */

  assert.include = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.include).include(inc);
  };

  /**
   * ### .notInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Works
   * for strings and arrays.
   *i
   *     assert.notInclude('foobar', 'baz', 'string not include substring');
   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
   *
   * @name notInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @api public
   */

  assert.notInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notInclude).not.include(inc);
  };

  /**
   * ### .match(value, regexp, [message])
   *
   * Asserts that `value` matches the regular expression `regexp`.
   *
   *     assert.match('foobar', /^foo/, 'regexp matches');
   *
   * @name match
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @api public
   */

  assert.match = function (exp, re, msg) {
    new Assertion(exp, msg).to.match(re);
  };

  /**
   * ### .notMatch(value, regexp, [message])
   *
   * Asserts that `value` does not match the regular expression `regexp`.
   *
   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
   *
   * @name notMatch
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @api public
   */

  assert.notMatch = function (exp, re, msg) {
    new Assertion(exp, msg).to.not.match(re);
  };

  /**
   * ### .property(object, property, [message])
   *
   * Asserts that `object` has a property named by `property`.
   *
   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
   *
   * @name property
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.property = function (obj, prop, msg) {
    new Assertion(obj, msg).to.have.property(prop);
  };

  /**
   * ### .notProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`.
   *
   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
   *
   * @name notProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.notProperty = function (obj, prop, msg) {
    new Assertion(obj, msg).to.not.have.property(prop);
  };

  /**
   * ### .deepProperty(object, property, [message])
   *
   * Asserts that `object` has a property named by `property`, which can be a
   * string using dot- and bracket-notation for deep reference.
   *
   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
   *
   * @name deepProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.deepProperty = function (obj, prop, msg) {
    new Assertion(obj, msg).to.have.deep.property(prop);
  };

  /**
   * ### .notDeepProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`, which
   * can be a string using dot- and bracket-notation for deep reference.
   *
   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
   *
   * @name notDeepProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.notDeepProperty = function (obj, prop, msg) {
    new Assertion(obj, msg).to.not.have.deep.property(prop);
  };

  /**
   * ### .propertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`.
   *
   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
   *
   * @name propertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.propertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg).to.have.property(prop, val);
  };

  /**
   * ### .propertyNotVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property`, but with a value
   * different from that given by `value`.
   *
   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
   *
   * @name propertyNotVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.propertyNotVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg).to.not.have.property(prop, val);
  };

  /**
   * ### .deepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`. `property` can use dot- and bracket-notation for deep
   * reference.
   *
   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
   *
   * @name deepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.deepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg).to.have.deep.property(prop, val);
  };

  /**
   * ### .deepPropertyNotVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property`, but with a value
   * different from that given by `value`. `property` can use dot- and
   * bracket-notation for deep reference.
   *
   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
   *
   * @name deepPropertyNotVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
  };

  /**
   * ### .lengthOf(object, length, [message])
   *
   * Asserts that `object` has a `length` property with the expected value.
   *
   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
   *     assert.lengthOf('foobar', 5, 'string has length of 6');
   *
   * @name lengthOf
   * @param {Mixed} object
   * @param {Number} length
   * @param {String} message
   * @api public
   */

  assert.lengthOf = function (exp, len, msg) {
    new Assertion(exp, msg).to.have.length(len);
  };

  /**
   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
   *
   * Asserts that `function` will throw an error that is an instance of
   * `constructor`, or alternately that it will throw an error with message
   * matching `regexp`.
   *
   *     assert.throw(fn, 'function throws a reference error');
   *     assert.throw(fn, /function throws a reference error/);
   *     assert.throw(fn, ReferenceError);
   *     assert.throw(fn, ReferenceError, 'function throws a reference error');
   *     assert.throw(fn, ReferenceError, /function throws a reference error/);
   *
   * @name throws
   * @alias throw
   * @alias Throw
   * @param {Function} function
   * @param {ErrorConstructor} constructor
   * @param {RegExp} regexp
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @api public
   */

  assert.Throw = function (fn, errt, errs, msg) {
    if ('string' === typeof errt || errt instanceof RegExp) {
      errs = errt;
      errt = null;
    }

    var assertErr = new Assertion(fn, msg).to.Throw(errt, errs);
    return flag(assertErr, 'object');
  };

  /**
   * ### .doesNotThrow(function, [constructor/regexp], [message])
   *
   * Asserts that `function` will _not_ throw an error that is an instance of
   * `constructor`, or alternately that it will not throw an error with message
   * matching `regexp`.
   *
   *     assert.doesNotThrow(fn, Error, 'function does not throw');
   *
   * @name doesNotThrow
   * @param {Function} function
   * @param {ErrorConstructor} constructor
   * @param {RegExp} regexp
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @api public
   */

  assert.doesNotThrow = function (fn, type, msg) {
    if ('string' === typeof type) {
      msg = type;
      type = null;
    }

    new Assertion(fn, msg).to.not.Throw(type);
  };

  /**
   * ### .operator(val1, operator, val2, [message])
   *
   * Compares two values using `operator`.
   *
   *     assert.operator(1, '<', 2, 'everything is ok');
   *     assert.operator(1, '>', 2, 'this will fail');
   *
   * @name operator
   * @param {Mixed} val1
   * @param {String} operator
   * @param {Mixed} val2
   * @param {String} message
   * @api public
   */

  assert.operator = function (val, operator, val2, msg) {
    if (!~['==', '===', '>', '>=', '<', '<=', '!=', '!=='].indexOf(operator)) {
      throw new Error('Invalid operator "' + operator + '"');
    }
    var test = new Assertion(eval(val + operator + val2), msg);
    test.assert(
        true === flag(test, 'object')
      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
  };

  /**
   * ### .closeTo(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
   *
   * @name closeTo
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @api public
   */

  assert.closeTo = function (act, exp, delta, msg) {
    new Assertion(act, msg).to.be.closeTo(exp, delta);
  };

  /**
   * ### .sameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members.
   * Order is not taken into account.
   *
   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
   *
   * @name sameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @api public
   */

  assert.sameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg).to.have.same.members(set2);
  }

  /**
   * ### .includeMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset`.
   * Order is not taken into account.
   *
   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
   *
   * @name includeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @api public
   */

  assert.includeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg).to.include.members(subset);
  }

  /*!
   * Undocumented / untested
   */

  assert.ifError = function (val, msg) {
    new Assertion(val, msg).to.not.be.ok;
  };

  /*!
   * Aliases.
   */

  (function alias(name, as){
    assert[as] = assert[name];
    return alias;
  })
  ('Throw', 'throw')
  ('Throw', 'throws');
};

},{}],11:[function(require,module,exports){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  chai.expect = function (val, message) {
    return new chai.Assertion(val, message);
  };
};


},{}],12:[function(require,module,exports){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  var Assertion = chai.Assertion;

  function loadShould () {
    // explicitly define this method as function as to have it's name to include as `ssfi`
    function shouldGetter() {
      if (this instanceof String || this instanceof Number) {
        return new Assertion(this.constructor(this), null, shouldGetter);
      } else if (this instanceof Boolean) {
        return new Assertion(this == true, null, shouldGetter);
      }
      return new Assertion(this, null, shouldGetter);
    }
    function shouldSetter(value) {
      // See https://github.com/chaijs/chai/issues/86: this makes
      // `whatever.should = someValue` actually set `someValue`, which is
      // especially useful for `global.should = require('chai').should()`.
      //
      // Note that we have to use [[DefineProperty]] instead of [[Put]]
      // since otherwise we would trigger this very setter!
      Object.defineProperty(this, 'should', {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    // modify Object.prototype to have `should`
    Object.defineProperty(Object.prototype, 'should', {
      set: shouldSetter
      , get: shouldGetter
      , configurable: true
    });

    var should = {};

    should.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.equal(val2);
    };

    should.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.Throw(errt, errs);
    };

    should.exist = function (val, msg) {
      new Assertion(val, msg).to.exist;
    }

    // negation
    should.not = {}

    should.not.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.not.equal(val2);
    };

    should.not.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.not.Throw(errt, errs);
    };

    should.not.exist = function (val, msg) {
      new Assertion(val, msg).to.not.exist;
    }

    should['throw'] = should['Throw'];
    should.not['throw'] = should.not['Throw'];

    return should;
  };

  chai.should = loadShould;
  chai.Should = loadShould;
};

},{}],13:[function(require,module,exports){
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var transferFlags = require('./transferFlags');
var flag = require('./flag');
var config = require('../config');

/*!
 * Module variables
 */

// Check whether `__proto__` is supported
var hasProtoSupport = '__proto__' in Object;

// Without `__proto__` support, this module will need to add properties to a function.
// However, some Function.prototype methods cannot be overwritten,
// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
var excludeNames = /^(?:length|name|arguments|caller)$/;

// Cache `Function` properties
var call  = Function.prototype.call,
    apply = Function.prototype.apply;

/**
 * ### addChainableMethod (ctx, name, method, chainingBehavior)
 *
 * Adds a method to an object, such that the method can also be chained.
 *
 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
 *
 * The result can then be used as both a method assertion, executing both `method` and
 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
 *
 *     expect(fooStr).to.be.foo('bar');
 *     expect(fooStr).to.be.foo.equal('foo');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for `name`, when called
 * @param {Function} chainingBehavior function to be called every time the property is accessed
 * @name addChainableMethod
 * @api public
 */

module.exports = function (ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function () { };
  }

  var chainableBehavior = {
      method: method
    , chainingBehavior: chainingBehavior
  };

  // save the methods so we can overwrite them later, if we need to.
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;

  Object.defineProperty(ctx, name,
    { get: function () {
        chainableBehavior.chainingBehavior.call(this);

        var assert = function assert() {
          var old_ssfi = flag(this, 'ssfi');
          if (old_ssfi && config.includeStack === false)
            flag(this, 'ssfi', assert);
          var result = chainableBehavior.method.apply(this, arguments);
          return result === undefined ? this : result;
        };

        // Use `__proto__` if available
        if (hasProtoSupport) {
          // Inherit all properties from the object by replacing the `Function` prototype
          var prototype = assert.__proto__ = Object.create(this);
          // Restore the `call` and `apply` methods from `Function`
          prototype.call = call;
          prototype.apply = apply;
        }
        // Otherwise, redefine all properties (slow!)
        else {
          var asserterNames = Object.getOwnPropertyNames(ctx);
          asserterNames.forEach(function (asserterName) {
            if (!excludeNames.test(asserterName)) {
              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
              Object.defineProperty(assert, asserterName, pd);
            }
          });
        }

        transferFlags(this, assert);
        return assert;
      }
    , configurable: true
  });
};

},{"../config":8,"./flag":16,"./transferFlags":30}],14:[function(require,module,exports){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = require('../config');

/**
 * ### .addMethod (ctx, name, method)
 *
 * Adds a method to the prototype of an object.
 *
 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(fooStr).to.be.foo('bar');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for name
 * @name addMethod
 * @api public
 */
var flag = require('./flag');

module.exports = function (ctx, name, method) {
  ctx[name] = function () {
    var old_ssfi = flag(this, 'ssfi');
    if (old_ssfi && config.includeStack === false)
      flag(this, 'ssfi', ctx[name]);
    var result = method.apply(this, arguments);
    return result === undefined ? this : result;
  };
};

},{"../config":8,"./flag":16}],15:[function(require,module,exports){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### addProperty (ctx, name, getter)
 *
 * Adds a property to the prototype of an object.
 *
 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.instanceof(Foo);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.foo;
 *
 * @param {Object} ctx object to which the property is added
 * @param {String} name of property to add
 * @param {Function} getter function to be used for name
 * @name addProperty
 * @api public
 */

module.exports = function (ctx, name, getter) {
  Object.defineProperty(ctx, name,
    { get: function () {
        var result = getter.call(this);
        return result === undefined ? this : result;
      }
    , configurable: true
  });
};

},{}],16:[function(require,module,exports){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### flag(object ,key, [value])
 *
 * Get or set a flag value on an object. If a
 * value is provided it will be set, else it will
 * return the currently set value or `undefined` if
 * the value is not set.
 *
 *     utils.flag(this, 'foo', 'bar'); // setter
 *     utils.flag(this, 'foo'); // getter, returns `bar`
 *
 * @param {Object} object (constructed Assertion
 * @param {String} key
 * @param {Mixed} value (optional)
 * @name flag
 * @api private
 */

module.exports = function (obj, key, value) {
  var flags = obj.__flags || (obj.__flags = Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};

},{}],17:[function(require,module,exports){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * # getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 */

module.exports = function (obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};

},{}],18:[function(require,module,exports){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getEnumerableProperties(object)
 *
 * This allows the retrieval of enumerable property names of an object,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @name getEnumerableProperties
 * @api public
 */

module.exports = function getEnumerableProperties(object) {
  var result = [];
  for (var name in object) {
    result.push(name);
  }
  return result;
};

},{}],19:[function(require,module,exports){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var flag = require('./flag')
  , getActual = require('./getActual')
  , inspect = require('./inspect')
  , objDisplay = require('./objDisplay');

/**
 * ### .getMessage(object, message, negateMessage)
 *
 * Construct the error message based on flags
 * and template tags. Template tags will return
 * a stringified inspection of the object referenced.
 *
 * Message template tags:
 * - `#{this}` current asserted object
 * - `#{act}` actual value
 * - `#{exp}` expected value
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @name getMessage
 * @api public
 */

module.exports = function (obj, args) {
  var negate = flag(obj, 'negate')
    , val = flag(obj, 'object')
    , expected = args[3]
    , actual = getActual(obj, args)
    , msg = negate ? args[2] : args[1]
    , flagMsg = flag(obj, 'message');

  if(typeof msg === "function") msg = msg();
  msg = msg || '';
  msg = msg
    .replace(/#{this}/g, objDisplay(val))
    .replace(/#{act}/g, objDisplay(actual))
    .replace(/#{exp}/g, objDisplay(expected));

  return flagMsg ? flagMsg + ': ' + msg : msg;
};

},{"./flag":16,"./getActual":17,"./inspect":24,"./objDisplay":25}],20:[function(require,module,exports){
/*!
 * Chai - getName utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * # getName(func)
 *
 * Gets the name of a function, in a cross-browser way.
 *
 * @param {Function} a function (usually a constructor)
 */

module.exports = function (func) {
  if (func.name) return func.name;

  var match = /^\s?function ([^(]*)\(/.exec(func);
  return match && match[1] ? match[1] : "";
};

},{}],21:[function(require,module,exports){
/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */

/**
 * ### .getPathValue(path, object)
 *
 * This allows the retrieval of values in an
 * object given a string path.
 *
 *     var obj = {
 *         prop1: {
 *             arr: ['a', 'b', 'c']
 *           , str: 'Hello'
 *         }
 *       , prop2: {
 *             arr: [ { nested: 'Universe' } ]
 *           , str: 'Hello again!'
 *         }
 *     }
 *
 * The following would be the results.
 *
 *     getPathValue('prop1.str', obj); // Hello
 *     getPathValue('prop1.att[2]', obj); // b
 *     getPathValue('prop2.arr[0].nested', obj); // Universe
 *
 * @param {String} path
 * @param {Object} object
 * @returns {Object} value or `undefined`
 * @name getPathValue
 * @api public
 */

var getPathValue = module.exports = function (path, obj) {
  var parsed = parsePath(path);
  return _getPathValue(parsed, obj);
};

/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */

function parsePath (path) {
  var str = path.replace(/\[/g, '.[')
    , parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function (value) {
    var re = /\[(\d+)\]$/
      , mArr = re.exec(value)
    if (mArr) return { i: parseFloat(mArr[1]) };
    else return { p: value };
  });
};

/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */

function _getPathValue (parsed, obj) {
  var tmp = obj
    , res;
  for (var i = 0, l = parsed.length; i < l; i++) {
    var part = parsed[i];
    if (tmp) {
      if ('undefined' !== typeof part.p)
        tmp = tmp[part.p];
      else if ('undefined' !== typeof part.i)
        tmp = tmp[part.i];
      if (i == (l - 1)) res = tmp;
    } else {
      res = undefined;
    }
  }
  return res;
};

},{}],22:[function(require,module,exports){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getProperties(object)
 *
 * This allows the retrieval of property names of an object, enumerable or not,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @name getProperties
 * @api public
 */

module.exports = function getProperties(object) {
  var result = Object.getOwnPropertyNames(subject);

  function addProperty(property) {
    if (result.indexOf(property) === -1) {
      result.push(property);
    }
  }

  var proto = Object.getPrototypeOf(subject);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty);
    proto = Object.getPrototypeOf(proto);
  }

  return result;
};

},{}],23:[function(require,module,exports){
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Main exports
 */

var exports = module.exports = {};

/*!
 * test utility
 */

exports.test = require('./test');

/*!
 * type utility
 */

exports.type = require('./type');

/*!
 * message utility
 */

exports.getMessage = require('./getMessage');

/*!
 * actual utility
 */

exports.getActual = require('./getActual');

/*!
 * Inspect util
 */

exports.inspect = require('./inspect');

/*!
 * Object Display util
 */

exports.objDisplay = require('./objDisplay');

/*!
 * Flag utility
 */

exports.flag = require('./flag');

/*!
 * Flag transferring utility
 */

exports.transferFlags = require('./transferFlags');

/*!
 * Deep equal utility
 */

exports.eql = require('deep-eql');

/*!
 * Deep path value
 */

exports.getPathValue = require('./getPathValue');

/*!
 * Function name
 */

exports.getName = require('./getName');

/*!
 * add Property
 */

exports.addProperty = require('./addProperty');

/*!
 * add Method
 */

exports.addMethod = require('./addMethod');

/*!
 * overwrite Property
 */

exports.overwriteProperty = require('./overwriteProperty');

/*!
 * overwrite Method
 */

exports.overwriteMethod = require('./overwriteMethod');

/*!
 * Add a chainable method
 */

exports.addChainableMethod = require('./addChainableMethod');

/*!
 * Overwrite chainable method
 */

exports.overwriteChainableMethod = require('./overwriteChainableMethod');


},{"./addChainableMethod":13,"./addMethod":14,"./addProperty":15,"./flag":16,"./getActual":17,"./getMessage":19,"./getName":20,"./getPathValue":21,"./inspect":24,"./objDisplay":25,"./overwriteChainableMethod":26,"./overwriteMethod":27,"./overwriteProperty":28,"./test":29,"./transferFlags":30,"./type":31,"deep-eql":33}],24:[function(require,module,exports){
// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

var getName = require('./getName');
var getProperties = require('./getProperties');
var getEnumerableProperties = require('./getEnumerableProperties');

module.exports = inspect;

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 */
function inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: function (str) { return str; }
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}

// Returns true if object is a DOM element.
var isDOMElement = function (object) {
  if (typeof HTMLElement === 'object') {
    return object instanceof HTMLElement;
  } else {
    return object &&
      typeof object === 'object' &&
      object.nodeType === 1 &&
      typeof object.nodeName === 'string';
  }
};

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes);
    if (typeof ret !== 'string') {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // If this is a DOM element, try to get the outer HTML.
  if (isDOMElement(value)) {
    if ('outerHTML' in value) {
      return value.outerHTML;
      // This value does not have an outerHTML attribute,
      //   it could still be an XML element
    } else {
      // Attempt to serialize it
      try {
        if (document.xmlVersion) {
          var xmlSerializer = new XMLSerializer();
          return xmlSerializer.serializeToString(value);
        } else {
          // Firefox 11- do not support outerHTML
          //   It does, however, support innerHTML
          //   Use the following to render the element
          var ns = "http://www.w3.org/1999/xhtml";
          var container = document.createElementNS(ns, '_');

          container.appendChild(value.cloneNode(false));
          html = container.innerHTML
            .replace('><', '>' + value.innerHTML + '<');
          container.innerHTML = '';
          return html;
        }
      } catch (err) {
        // This could be a non-native DOM implementation,
        //   continue with the normal flow:
        //   printing the element as if it is an object.
      }
    }
  }

  // Look up the keys of the object.
  var visibleKeys = getEnumerableProperties(value);
  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

  // Some type of object without properties can be shortcutted.
  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
  // a `stack` plus `description` property; ignore those for consistency.
  if (keys.length === 0 || (isError(value) && (
      (keys.length === 1 && keys[0] === 'stack') ||
      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
     ))) {
    if (typeof value === 'function') {
      var name = getName(value);
      var nameSuffix = name ? ': ' + name : '';
      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    var name = getName(value);
    var nameSuffix = name ? ': ' + name : '';
    base = ' [Function' + nameSuffix + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    return formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      if (value === 0 && (1/value) === -Infinity) {
        return ctx.stylize('-0', 'number');
      }
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str;
  if (value.__lookupGetter__) {
    if (value.__lookupGetter__(key)) {
      if (value.__lookupSetter__(key)) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (value.__lookupSetter__(key)) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
  }
  if (visibleKeys.indexOf(key) < 0) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(value[key]) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, value[key], null);
      } else {
        str = formatValue(ctx, value[key], recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}

function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}

function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}

function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

},{"./getEnumerableProperties":18,"./getName":20,"./getProperties":22}],25:[function(require,module,exports){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var inspect = require('./inspect');
var config = require('../config');

/**
 * ### .objDisplay (object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @api public
 */

module.exports = function (obj) {
  var str = inspect(obj)
    , type = Object.prototype.toString.call(obj);

  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type === '[object Function]') {
      return !obj.name || obj.name === ''
        ? '[Function]'
        : '[Function: ' + obj.name + ']';
    } else if (type === '[object Array]') {
      return '[ Array(' + obj.length + ') ]';
    } else if (type === '[object Object]') {
      var keys = Object.keys(obj)
        , kstr = keys.length > 2
          ? keys.splice(0, 2).join(', ') + ', ...'
          : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
};

},{"../config":8,"./inspect":24}],26:[function(require,module,exports){
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### overwriteChainableMethod (ctx, name, fn)
 *
 * Overwites an already existing chainable method
 * and provides access to the previous function or
 * property.  Must return functions to be used for
 * name.
 *
 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
 *       function (_super) {
 *       }
 *     , function (_super) {
 *       }
 *     );
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.have.length(3);
 *     expect(myFoo).to.have.length.above(3);
 *
 * @param {Object} ctx object whose method / property is to be overwritten
 * @param {String} name of method / property to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @param {Function} chainingBehavior function that returns a function to be used for property
 * @name overwriteChainableMethod
 * @api public
 */

module.exports = function (ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];

  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = function () {
    var result = chainingBehavior(_chainingBehavior).call(this);
    return result === undefined ? this : result;
  };

  var _method = chainableBehavior.method;
  chainableBehavior.method = function () {
    var result = method(_method).apply(this, arguments);
    return result === undefined ? this : result;
  };
};

},{}],27:[function(require,module,exports){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### overwriteMethod (ctx, name, fn)
 *
 * Overwites an already existing method and provides
 * access to previous function. Must return function
 * to be used for name.
 *
 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
 *       return function (str) {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.value).to.equal(str);
 *         } else {
 *           _super.apply(this, arguments);
 *         }
 *       }
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.equal('bar');
 *
 * @param {Object} ctx object whose method is to be overwritten
 * @param {String} name of method to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @name overwriteMethod
 * @api public
 */

module.exports = function (ctx, name, method) {
  var _method = ctx[name]
    , _super = function () { return this; };

  if (_method && 'function' === typeof _method)
    _super = _method;

  ctx[name] = function () {
    var result = method(_super).apply(this, arguments);
    return result === undefined ? this : result;
  }
};

},{}],28:[function(require,module,exports){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### overwriteProperty (ctx, name, fn)
 *
 * Overwites an already existing property getter and provides
 * access to previous value. Must return function to use as getter.
 *
 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
 *       return function () {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.name).to.equal('bar');
 *         } else {
 *           _super.call(this);
 *         }
 *       }
 *     });
 *
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.ok;
 *
 * @param {Object} ctx object whose property is to be overwritten
 * @param {String} name of property to overwrite
 * @param {Function} getter function that returns a getter function to be used for name
 * @name overwriteProperty
 * @api public
 */

module.exports = function (ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name)
    , _super = function () {};

  if (_get && 'function' === typeof _get.get)
    _super = _get.get

  Object.defineProperty(ctx, name,
    { get: function () {
        var result = getter(_super).call(this);
        return result === undefined ? this : result;
      }
    , configurable: true
  });
};

},{}],29:[function(require,module,exports){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var flag = require('./flag');

/**
 * # test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 */

module.exports = function (obj, args) {
  var negate = flag(obj, 'negate')
    , expr = args[0];
  return negate ? !expr : expr;
};

},{"./flag":16}],30:[function(require,module,exports){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### transferFlags(assertion, object, includeAll = true)
 *
 * Transfer all the flags for `assertion` to `object`. If
 * `includeAll` is set to `false`, then the base Chai
 * assertion flags (namely `object`, `ssfi`, and `message`)
 * will not be transferred.
 *
 *
 *     var newAssertion = new Assertion();
 *     utils.transferFlags(assertion, newAssertion);
 *
 *     var anotherAsseriton = new Assertion(myObj);
 *     utils.transferFlags(assertion, anotherAssertion, false);
 *
 * @param {Assertion} assertion the assertion to transfer the flags from
 * @param {Object} object the object to transfer the flags too; usually a new assertion
 * @param {Boolean} includeAll
 * @name getAllFlags
 * @api private
 */

module.exports = function (assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

  if (!object.__flags) {
    object.__flags = Object.create(null);
  }

  includeAll = arguments.length === 3 ? includeAll : true;

  for (var flag in flags) {
    if (includeAll ||
        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
      object.__flags[flag] = flags[flag];
    }
  }
};

},{}],31:[function(require,module,exports){
/*!
 * Chai - type utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Detectable javascript natives
 */

var natives = {
    '[object Arguments]': 'arguments'
  , '[object Array]': 'array'
  , '[object Date]': 'date'
  , '[object Function]': 'function'
  , '[object Number]': 'number'
  , '[object RegExp]': 'regexp'
  , '[object String]': 'string'
};

/**
 * ### type(object)
 *
 * Better implementation of `typeof` detection that can
 * be used cross-browser. Handles the inconsistencies of
 * Array, `null`, and `undefined` detection.
 *
 *     utils.type({}) // 'object'
 *     utils.type(null) // `null'
 *     utils.type(undefined) // `undefined`
 *     utils.type([]) // `array`
 *
 * @param {Mixed} object to detect type of
 * @name type
 * @api private
 */

module.exports = function (obj) {
  var str = Object.prototype.toString.call(obj);
  if (natives[str]) return natives[str];
  if (obj === null) return 'null';
  if (obj === undefined) return 'undefined';
  if (obj === Object(obj)) return 'object';
  return typeof obj;
};

},{}],32:[function(require,module,exports){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */

function exclude () {
  var excludes = [].slice.call(arguments);

  function excludeProps (res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude () {
    var args = [].slice.call(arguments)
      , i = 0
      , res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

/*!
 * Primary Exports
 */

module.exports = AssertionError;

/**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */

function AssertionError (message, _props, ssf) {
  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
    , props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
  this.showDiff = false;

  // copy from properties
  for (var key in props) {
    this[key] = props[key];
  }

  // capture stack trace
  ssf = ssf || arguments.callee;
  if (ssf && Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  }
}

/*!
 * Inherit from Error.prototype
 */

AssertionError.prototype = Object.create(Error.prototype);

/*!
 * Statically set name
 */

AssertionError.prototype.name = 'AssertionError';

/*!
 * Ensure correct constructor
 */

AssertionError.prototype.constructor = AssertionError;

/**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */

AssertionError.prototype.toJSON = function (stack) {
  var extend = exclude('constructor', 'toJSON', 'stack')
    , props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};

},{}],33:[function(require,module,exports){
module.exports = require('./lib/eql');

},{"./lib/eql":34}],34:[function(require,module,exports){
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var type = require('type-detect');

/*!
 * Buffer.isBuffer browser shim
 */

var Buffer;
try { Buffer = require('buffer').Buffer; }
catch(ex) {
  Buffer = {};
  Buffer.isBuffer = function() { return false; }
}

/*!
 * Primary Export
 */

module.exports = deepEqual;

/**
 * Assert super-strict (egal) equality between
 * two objects of any type.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @param {Array} memoised (optional)
 * @return {Boolean} equal match
 */

function deepEqual(a, b, m) {
  if (sameValue(a, b)) {
    return true;
  } else if ('date' === type(a)) {
    return dateEqual(a, b);
  } else if ('regexp' === type(a)) {
    return regexpEqual(a, b);
  } else if (Buffer.isBuffer(a)) {
    return bufferEqual(a, b);
  } else if ('arguments' === type(a)) {
    return argumentsEqual(a, b, m);
  } else if (!typeEqual(a, b)) {
    return false;
  } else if (('object' !== type(a) && 'object' !== type(b))
  && ('array' !== type(a) && 'array' !== type(b))) {
    return sameValue(a, b);
  } else {
    return objectEqual(a, b, m);
  }
}

/*!
 * Strict (egal) equality test. Ensures that NaN always
 * equals NaN and `-0` does not equal `+0`.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} equal match
 */

function sameValue(a, b) {
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  return a !== a && b !== b;
}

/*!
 * Compare the types of two given objects and
 * return if they are equal. Note that an Array
 * has a type of `array` (not `object`) and arguments
 * have a type of `arguments` (not `array`/`object`).
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */

function typeEqual(a, b) {
  return type(a) === type(b);
}

/*!
 * Compare two Date objects by asserting that
 * the time values are equal using `saveValue`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {Boolean} result
 */

function dateEqual(a, b) {
  if ('date' !== type(b)) return false;
  return sameValue(a.getTime(), b.getTime());
}

/*!
 * Compare two regular expressions by converting them
 * to string and checking for `sameValue`.
 *
 * @param {RegExp} a
 * @param {RegExp} b
 * @return {Boolean} result
 */

function regexpEqual(a, b) {
  if ('regexp' !== type(b)) return false;
  return sameValue(a.toString(), b.toString());
}

/*!
 * Assert deep equality of two `arguments` objects.
 * Unfortunately, these must be sliced to arrays
 * prior to test to ensure no bad behavior.
 *
 * @param {Arguments} a
 * @param {Arguments} b
 * @param {Array} memoize (optional)
 * @return {Boolean} result
 */

function argumentsEqual(a, b, m) {
  if ('arguments' !== type(b)) return false;
  a = [].slice.call(a);
  b = [].slice.call(b);
  return deepEqual(a, b, m);
}

/*!
 * Get enumerable properties of a given object.
 *
 * @param {Object} a
 * @return {Array} property names
 */

function enumerable(a) {
  var res = [];
  for (var key in a) res.push(key);
  return res;
}

/*!
 * Simple equality for flat iterable objects
 * such as Arrays or Node.js buffers.
 *
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {Boolean} result
 */

function iterableEqual(a, b) {
  if (a.length !==  b.length) return false;

  var i = 0;
  var match = true;

  for (; i < a.length; i++) {
    if (a[i] !== b[i]) {
      match = false;
      break;
    }
  }

  return match;
}

/*!
 * Extension to `iterableEqual` specifically
 * for Node.js Buffers.
 *
 * @param {Buffer} a
 * @param {Mixed} b
 * @return {Boolean} result
 */

function bufferEqual(a, b) {
  if (!Buffer.isBuffer(b)) return false;
  return iterableEqual(a, b);
}

/*!
 * Block for `objectEqual` ensuring non-existing
 * values don't get in.
 *
 * @param {Mixed} object
 * @return {Boolean} result
 */

function isValue(a) {
  return a !== null && a !== undefined;
}

/*!
 * Recursively check the equality of two objects.
 * Once basic sameness has been established it will
 * defer to `deepEqual` for each enumerable key
 * in the object.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */

function objectEqual(a, b, m) {
  if (!isValue(a) || !isValue(b)) {
    return false;
  }

  if (a.prototype !== b.prototype) {
    return false;
  }

  var i;
  if (m) {
    for (i = 0; i < m.length; i++) {
      if ((m[i][0] === a && m[i][1] === b)
      ||  (m[i][0] === b && m[i][1] === a)) {
        return true;
      }
    }
  } else {
    m = [];
  }

  try {
    var ka = enumerable(a);
    var kb = enumerable(b);
  } catch (ex) {
    return false;
  }

  ka.sort();
  kb.sort();

  if (!iterableEqual(ka, kb)) {
    return false;
  }

  m.push([ a, b ]);

  var key;
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], m)) {
      return false;
    }
  }

  return true;
}

},{"buffer":38,"type-detect":35}],35:[function(require,module,exports){
module.exports = require('./lib/type');

},{"./lib/type":36}],36:[function(require,module,exports){
/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Primary Exports
 */

var exports = module.exports = getType;

/*!
 * Detectable javascript natives
 */

var natives = {
    '[object Array]': 'array'
  , '[object RegExp]': 'regexp'
  , '[object Function]': 'function'
  , '[object Arguments]': 'arguments'
  , '[object Date]': 'date'
};

/**
 * ### typeOf (obj)
 *
 * Use several different techniques to determine
 * the type of object being tested.
 *
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */

function getType (obj) {
  var str = Object.prototype.toString.call(obj);
  if (natives[str]) return natives[str];
  if (obj === null) return 'null';
  if (obj === undefined) return 'undefined';
  if (obj === Object(obj)) return 'object';
  return typeof obj;
}

exports.Library = Library;

/**
 * ### Library
 *
 * Create a repository for custom type detection.
 *
 * ```js
 * var lib = new type.Library;
 * ```
 *
 */

function Library () {
  this.tests = {};
}

/**
 * #### .of (obj)
 *
 * Expose replacement `typeof` detection to the library.
 *
 * ```js
 * if ('string' === lib.of('hello world')) {
 *   // ...
 * }
 * ```
 *
 * @param {Mixed} object to test
 * @return {String} type
 */

Library.prototype.of = getType;

/**
 * #### .define (type, test)
 *
 * Add a test to for the `.test()` assertion.
 *
 * Can be defined as a regular expression:
 *
 * ```js
 * lib.define('int', /^[0-9]+$/);
 * ```
 *
 * ... or as a function:
 *
 * ```js
 * lib.define('bln', function (obj) {
 *   if ('boolean' === lib.of(obj)) return true;
 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
 *   return !! ~blns.indexOf(obj);
 * });
 * ```
 *
 * @param {String} type
 * @param {RegExp|Function} test
 * @api public
 */

Library.prototype.define = function (type, test) {
  if (arguments.length === 1) return this.tests[type];
  this.tests[type] = test;
  return this;
};

/**
 * #### .test (obj, test)
 *
 * Assert that an object is of type. Will first
 * check natives, and if that does not pass it will
 * use the user defined custom tests.
 *
 * ```js
 * assert(lib.test('1', 'int'));
 * assert(lib.test('yes', 'bln'));
 * ```
 *
 * @param {Mixed} object
 * @param {String} type
 * @return {Boolean} result
 * @api public
 */

Library.prototype.test = function (obj, type) {
  if (type === getType(obj)) return true;
  var test = this.tests[type];

  if (test && 'regexp' === getType(test)) {
    return test.test(obj);
  } else if (test && 'function' === getType(test)) {
    return test(obj);
  } else {
    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
  }
};

},{}],37:[function(require,module,exports){
/**
 * AUTHOR OF INITIAL JS LIBRARY
 * k-d Tree JavaScript - V 1.0
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */


function Node(obj, dimension, parent) {
  this.obj = obj;
  this.left = null;
  this.right = null;
  this.parent = parent;
  this.dimension = dimension;
}

function KdTree(points, metric, dimensions) {

  var self = this;
  
  function buildTree(points, depth, parent) {
    var dim = depth % dimensions.length,
      median,
      node;

    if (points.length === 0) {
      return null;
    }
    if (points.length === 1) {
      return new Node(points[0], dim, parent);
    }

    points.sort(function (a, b) {
      return a[dimensions[dim]] - b[dimensions[dim]];
    });

    median = Math.floor(points.length / 2);
    node = new Node(points[median], dim, parent);
    node.left = buildTree(points.slice(0, median), depth + 1, node);
    node.right = buildTree(points.slice(median + 1), depth + 1, node);

    return node;
  }

  this.root = buildTree(points, 0, null);

  this.insert = function (point) {
    function innerSearch(node, parent) {

      if (node === null) {
        return parent;
      }

      var dimension = dimensions[node.dimension];
      if (point[dimension] < node.obj[dimension]) {
        return innerSearch(node.left, node);
      } else {
        return innerSearch(node.right, node);
      }
    }

    var insertPosition = innerSearch(this.root, null),
      newNode,
      dimension;

    if (insertPosition === null) {
      this.root = new Node(point, 0, null);
      return;
    }

    newNode = new Node(point, (insertPosition.dimension + 1) % dimensions.length, insertPosition);
    dimension = dimensions[insertPosition.dimension];

    if (point[dimension] < insertPosition.obj[dimension]) {
      insertPosition.left = newNode;
    } else {
      insertPosition.right = newNode;
    }
  };

  this.remove = function (point) {
    var node;

    function nodeSearch(node) {
      if (node === null) {
        return null;
      }

      if (node.obj === point) {
        return node;
      }

      var dimension = dimensions[node.dimension];

      if (point[dimension] < node.obj[dimension]) {
        return nodeSearch(node.left, node);
      } else {
        return nodeSearch(node.right, node);
      }
    }

    function removeNode(node) {
      var nextNode,
        nextObj,
        pDimension;

      function findMax(node, dim) {
        var dimension,
          own,
          left,
          right,
          max;

        if (node === null) {
          return null;
        }

        dimension = dimensions[dim];
        if (node.dimension === dim) {
          if (node.right !== null) {
            return findMax(node.right, dim);
          }
          return node;
        }

        own = node.obj[dimension];
        left = findMax(node.left, dim);
        right = findMax(node.right, dim);
        max = node;

        if (left !== null && left.obj[dimension] > own) {
          max = left;
        }

        if (right !== null && right.obj[dimension] > max.obj[dimension]) {
          max = right;
        }
        return max;
      }

      function findMin(node, dim) {
        var dimension,
          own,
          left,
          right,
          min;

        if (node === null) {
          return null;
        }

        dimension = dimensions[dim];

        if (node.dimension === dim) {
          if (node.left !== null) {
            return findMin(node.left, dim);
          }
          return node;
        }

        own = node.obj[dimension];
        left = findMin(node.left, dim);
        right = findMin(node.right, dim);
        min = node;

        if (left !== null && left.obj[dimension] < own) {
          min = left;
        }
        if (right !== null && right.obj[dimension] < min.obj[dimension]) {
          min = right;
        }
        return min;
      }

      if (node.left === null && node.right === null) {
        if (node.parent === null) {
          self.root = null;
          return;
        }

        pDimension = dimensions[node.parent.dimension];

        if (node.obj[pDimension] < node.parent.obj[pDimension]) {
          node.parent.left = null;
        } else {
          node.parent.right = null;
        }
        return;
      }

      if (node.left !== null) {
        nextNode = findMax(node.left, node.dimension);
      } else {
        nextNode = findMin(node.right, node.dimension);
      }

      nextObj = nextNode.obj;
      removeNode(nextNode);
      node.obj = nextObj;

    }

    node = nodeSearch(self.root);

    if (node === null) { return; }

    removeNode(node);
  };

  this.nearest = function (point, maxNodes, maxDistance) {
    var i,
      result,
      bestNodes;

    bestNodes = new BinaryHeap(
      function (e) { return -e[1]; }
    );

    function nearestSearch(node) {
      var bestChild,
        dimension = dimensions[node.dimension],
        ownDistance = metric(point, node.obj),
        linearPoint = {},
        linearDistance,
        otherChild,
        i;

      function saveNode(node, distance) {
        bestNodes.push([node, distance]);
        if (bestNodes.size() > maxNodes) {
          bestNodes.pop();
        }
      }

      for (i = 0; i < dimensions.length; i += 1) {
        if (i === node.dimension) {
          linearPoint[dimensions[i]] = point[dimensions[i]];
        } else {
          linearPoint[dimensions[i]] = node.obj[dimensions[i]];
        }
      }

      linearDistance = metric(linearPoint, node.obj);

      if (node.right === null && node.left === null) {
        if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) {
          saveNode(node, ownDistance);
        }
        return;
      }

      if (node.right === null) {
        bestChild = node.left;
      } else if (node.left === null) {
        bestChild = node.right;
      } else {
        if (point[dimension] < node.obj[dimension]) {
          bestChild = node.left;
        } else {
          bestChild = node.right;
        }
      }

      nearestSearch(bestChild);

      if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) {
        saveNode(node, ownDistance);
      }

      if (bestNodes.size() < maxNodes || Math.abs(linearDistance) < bestNodes.peek()[1]) {
        if (bestChild === node.left) {
          otherChild = node.right;
        } else {
          otherChild = node.left;
        }
        if (otherChild !== null) {
          nearestSearch(otherChild);
        }
      }
    }

    if (maxDistance) {
      for (i = 0; i < maxNodes; i += 1) {
        bestNodes.push([null, maxDistance]);
      }
    }

    nearestSearch(self.root);

    result = [];

    for (i = 0; i < maxNodes; i += 1) {
      if (bestNodes.content[i][0]) {
        result.push([bestNodes.content[i][0].obj, bestNodes.content[i][1]]);
      }
    }
    return result;
  };

  this.balanceFactor = function () {
    function height(node) {
      if (node === null) {
        return 0;
      }
      return Math.max(height(node.left), height(node.right)) + 1;
    }

    function count(node) {
      if (node === null) {
        return 0;
      }
      return count(node.left) + count(node.right) + 1;
    }

    return height(self.root) / (Math.log(count(self.root)) / Math.log(2));
  };
}

// Binary heap implementation from:
// http://eloquentjavascript.net/appendix2.html

function BinaryHeap(scoreFunction){
  this.content = [];
  this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
  push: function(element) {
    // Add the new element to the end of the array.
    this.content.push(element);
    // Allow it to bubble up.
    this.bubbleUp(this.content.length - 1);
  },

  pop: function() {
    // Store the first element so we can return it later.
    var result = this.content[0];
    // Get the element at the end of the array.
    var end = this.content.pop();
    // If there are any elements left, put the end element at the
    // start, and let it sink down.
    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return result;
  },

  peek: function() {
    return this.content[0];
  },

  remove: function(node) {
    var len = this.content.length;
    // To remove a value, we must search through the array to find
    // it.
    for (var i = 0; i < len; i++) {
      if (this.content[i] == node) {
        // When it is found, the process seen in 'pop' is repeated
        // to fill up the hole.
        var end = this.content.pop();
        if (i != len - 1) {
          this.content[i] = end;
          if (this.scoreFunction(end) < this.scoreFunction(node))
            this.bubbleUp(i);
          else
            this.sinkDown(i);
        }
        return;
      }
    }
    throw new Error("Node not found.");
  },

  size: function() {
    return this.content.length;
  },

  bubbleUp: function(n) {
    // Fetch the element that has to be moved.
    var element = this.content[n];
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = Math.floor((n + 1) / 2) - 1,
          parent = this.content[parentN];
      // Swap the elements if the parent is greater.
      if (this.scoreFunction(element) < this.scoreFunction(parent)) {
        this.content[parentN] = element;
        this.content[n] = parent;
        // Update 'n' to continue at the new position.
        n = parentN;
      }
      // Found a parent that is less, no need to move it further.
      else {
        break;
      }
    }
  },

  sinkDown: function(n) {
    // Look up the target element and its score.
    var length = this.content.length,
        element = this.content[n],
        elemScore = this.scoreFunction(element);

    while(true) {
      // Compute the indices of the child elements.
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      // This is used to store the new position of the element,
      // if any.
      var swap = null;
      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = this.content[child1N],
            child1Score = this.scoreFunction(child1);
        // If the score is less than our element's, we need to swap.
        if (child1Score < elemScore)
          swap = child1N;
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        var child2 = this.content[child2N],
            child2Score = this.scoreFunction(child2);
        if (child2Score < (swap == null ? elemScore : child1Score)){
          swap = child2N;
        }
      }

      // If the element needs to be moved, swap it, and continue.
      if (swap != null) {
        this.content[n] = this.content[swap];
        this.content[swap] = element;
        n = swap;
      }
      // Otherwise, we are done.
      else {
        break;
      }
    }
  }
};

module.exports = {
  createKdTree: function (points, metric, dimensions) {
    return new KdTree(points, metric, dimensions)
  }
}

},{}],38:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length, unitSize) {
  if (unitSize) length -= length % unitSize;
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":39,"ieee754":40,"is-array":41}],39:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],40:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],41:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],42:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))

},{"_process":43}],43:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],44:[function(require,module,exports){
(function (process,global){
(function(global) {
  'use strict';
  if (global.$traceurRuntime) {
    return;
  }
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $Object.defineProperties;
  var $defineProperty = $Object.defineProperty;
  var $freeze = $Object.freeze;
  var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $Object.getOwnPropertyNames;
  var $keys = $Object.keys;
  var $hasOwnProperty = $Object.prototype.hasOwnProperty;
  var $toString = $Object.prototype.toString;
  var $preventExtensions = Object.preventExtensions;
  var $seal = Object.seal;
  var $isExtensible = Object.isExtensible;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var method = nonEnum;
  var counter = 0;
  function newUniqueString() {
    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
  }
  var symbolInternalProperty = newUniqueString();
  var symbolDescriptionProperty = newUniqueString();
  var symbolDataProperty = newUniqueString();
  var symbolValues = $create(null);
  var privateNames = $create(null);
  function isPrivateName(s) {
    return privateNames[s];
  }
  function createPrivateName() {
    var s = newUniqueString();
    privateNames[s] = true;
    return s;
  }
  function isShimSymbol(symbol) {
    return typeof symbol === 'object' && symbol instanceof SymbolValue;
  }
  function typeOf(v) {
    if (isShimSymbol(v))
      return 'symbol';
    return typeof v;
  }
  function Symbol(description) {
    var value = new SymbolValue(description);
    if (!(this instanceof Symbol))
      return value;
    throw new TypeError('Symbol cannot be new\'ed');
  }
  $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(Symbol.prototype, 'toString', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    var desc = symbolValue[symbolDescriptionProperty];
    if (desc === undefined)
      desc = '';
    return 'Symbol(' + desc + ')';
  }));
  $defineProperty(Symbol.prototype, 'valueOf', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    return symbolValue;
  }));
  function SymbolValue(description) {
    var key = newUniqueString();
    $defineProperty(this, symbolDataProperty, {value: this});
    $defineProperty(this, symbolInternalProperty, {value: key});
    $defineProperty(this, symbolDescriptionProperty, {value: description});
    freeze(this);
    symbolValues[key] = this;
  }
  $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(SymbolValue.prototype, 'toString', {
    value: Symbol.prototype.toString,
    enumerable: false
  });
  $defineProperty(SymbolValue.prototype, 'valueOf', {
    value: Symbol.prototype.valueOf,
    enumerable: false
  });
  var hashProperty = createPrivateName();
  var hashPropertyDescriptor = {value: undefined};
  var hashObjectProperties = {
    hash: {value: undefined},
    self: {value: undefined}
  };
  var hashCounter = 0;
  function getOwnHashObject(object) {
    var hashObject = object[hashProperty];
    if (hashObject && hashObject.self === object)
      return hashObject;
    if ($isExtensible(object)) {
      hashObjectProperties.hash.value = hashCounter++;
      hashObjectProperties.self.value = object;
      hashPropertyDescriptor.value = $create(null, hashObjectProperties);
      $defineProperty(object, hashProperty, hashPropertyDescriptor);
      return hashPropertyDescriptor.value;
    }
    return undefined;
  }
  function freeze(object) {
    getOwnHashObject(object);
    return $freeze.apply(this, arguments);
  }
  function preventExtensions(object) {
    getOwnHashObject(object);
    return $preventExtensions.apply(this, arguments);
  }
  function seal(object) {
    getOwnHashObject(object);
    return $seal.apply(this, arguments);
  }
  freeze(SymbolValue.prototype);
  function isSymbolString(s) {
    return symbolValues[s] || privateNames[s];
  }
  function toProperty(name) {
    if (isShimSymbol(name))
      return name[symbolInternalProperty];
    return name;
  }
  function removeSymbolKeys(array) {
    var rv = [];
    for (var i = 0; i < array.length; i++) {
      if (!isSymbolString(array[i])) {
        rv.push(array[i]);
      }
    }
    return rv;
  }
  function getOwnPropertyNames(object) {
    return removeSymbolKeys($getOwnPropertyNames(object));
  }
  function keys(object) {
    return removeSymbolKeys($keys(object));
  }
  function getOwnPropertySymbols(object) {
    var rv = [];
    var names = $getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var symbol = symbolValues[names[i]];
      if (symbol) {
        rv.push(symbol);
      }
    }
    return rv;
  }
  function getOwnPropertyDescriptor(object, name) {
    return $getOwnPropertyDescriptor(object, toProperty(name));
  }
  function hasOwnProperty(name) {
    return $hasOwnProperty.call(this, toProperty(name));
  }
  function getOption(name) {
    return global.traceur && global.traceur.options[name];
  }
  function defineProperty(object, name, descriptor) {
    if (isShimSymbol(name)) {
      name = name[symbolInternalProperty];
    }
    $defineProperty(object, name, descriptor);
    return object;
  }
  function polyfillObject(Object) {
    $defineProperty(Object, 'defineProperty', {value: defineProperty});
    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
    $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
    $defineProperty(Object, 'freeze', {value: freeze});
    $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
    $defineProperty(Object, 'seal', {value: seal});
    $defineProperty(Object, 'keys', {value: keys});
  }
  function exportStar(object) {
    for (var i = 1; i < arguments.length; i++) {
      var names = $getOwnPropertyNames(arguments[i]);
      for (var j = 0; j < names.length; j++) {
        var name = names[j];
        if (isSymbolString(name))
          continue;
        (function(mod, name) {
          $defineProperty(object, name, {
            get: function() {
              return mod[name];
            },
            enumerable: true
          });
        })(arguments[i], names[j]);
      }
    }
    return object;
  }
  function isObject(x) {
    return x != null && (typeof x === 'object' || typeof x === 'function');
  }
  function toObject(x) {
    if (x == null)
      throw $TypeError();
    return $Object(x);
  }
  function checkObjectCoercible(argument) {
    if (argument == null) {
      throw new TypeError('Value cannot be converted to an Object');
    }
    return argument;
  }
  function polyfillSymbol(global, Symbol) {
    if (!global.Symbol) {
      global.Symbol = Symbol;
      Object.getOwnPropertySymbols = getOwnPropertySymbols;
    }
    if (!global.Symbol.iterator) {
      global.Symbol.iterator = Symbol('Symbol.iterator');
    }
  }
  function setupGlobals(global) {
    polyfillSymbol(global, Symbol);
    global.Reflect = global.Reflect || {};
    global.Reflect.global = global.Reflect.global || global;
    polyfillObject(global.Object);
  }
  setupGlobals(global);
  global.$traceurRuntime = {
    checkObjectCoercible: checkObjectCoercible,
    createPrivateName: createPrivateName,
    defineProperties: $defineProperties,
    defineProperty: $defineProperty,
    exportStar: exportStar,
    getOwnHashObject: getOwnHashObject,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    isObject: isObject,
    isPrivateName: isPrivateName,
    isSymbolString: isSymbolString,
    keys: $keys,
    setupGlobals: setupGlobals,
    toObject: toObject,
    toProperty: toProperty,
    typeof: typeOf
  };
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
(function() {
  'use strict';
  var path;
  function relativeRequire(callerPath, requiredPath) {
    path = path || typeof require !== 'undefined' && require('path');
    function isDirectory(path) {
      return path.slice(-1) === '/';
    }
    function isAbsolute(path) {
      return path[0] === '/';
    }
    function isRelative(path) {
      return path[0] === '.';
    }
    if (isDirectory(requiredPath) || isAbsolute(requiredPath))
      return;
    return isRelative(requiredPath) ? require(path.resolve(path.dirname(callerPath), requiredPath)) : require(requiredPath);
  }
  $traceurRuntime.require = relativeRequire;
})();
(function() {
  'use strict';
  function spread() {
    var rv = [],
        j = 0,
        iterResult;
    for (var i = 0; i < arguments.length; i++) {
      var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
      if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
        throw new TypeError('Cannot spread non-iterable object.');
      }
      var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
      while (!(iterResult = iter.next()).done) {
        rv[j++] = iterResult.value;
      }
    }
    return rv;
  }
  $traceurRuntime.spread = spread;
})();
(function() {
  'use strict';
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
  var $getPrototypeOf = Object.getPrototypeOf;
  var $__0 = Object,
      getOwnPropertyNames = $__0.getOwnPropertyNames,
      getOwnPropertySymbols = $__0.getOwnPropertySymbols;
  function superDescriptor(homeObject, name) {
    var proto = $getPrototypeOf(homeObject);
    do {
      var result = $getOwnPropertyDescriptor(proto, name);
      if (result)
        return result;
      proto = $getPrototypeOf(proto);
    } while (proto);
    return undefined;
  }
  function superConstructor(ctor) {
    return ctor.__proto__;
  }
  function superCall(self, homeObject, name, args) {
    return superGet(self, homeObject, name).apply(self, args);
  }
  function superGet(self, homeObject, name) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor) {
      if (!descriptor.get)
        return descriptor.value;
      return descriptor.get.call(self);
    }
    return undefined;
  }
  function superSet(self, homeObject, name, value) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor && descriptor.set) {
      descriptor.set.call(self, value);
      return value;
    }
    throw $TypeError(("super has no setter '" + name + "'."));
  }
  function getDescriptors(object) {
    var descriptors = {};
    var names = getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      descriptors[name] = $getOwnPropertyDescriptor(object, name);
    }
    var symbols = getOwnPropertySymbols(object);
    for (var i = 0; i < symbols.length; i++) {
      var symbol = symbols[i];
      descriptors[$traceurRuntime.toProperty(symbol)] = $getOwnPropertyDescriptor(object, $traceurRuntime.toProperty(symbol));
    }
    return descriptors;
  }
  function createClass(ctor, object, staticObject, superClass) {
    $defineProperty(object, 'constructor', {
      value: ctor,
      configurable: true,
      enumerable: false,
      writable: true
    });
    if (arguments.length > 3) {
      if (typeof superClass === 'function')
        ctor.__proto__ = superClass;
      ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
    } else {
      ctor.prototype = object;
    }
    $defineProperty(ctor, 'prototype', {
      configurable: false,
      writable: false
    });
    return $defineProperties(ctor, getDescriptors(staticObject));
  }
  function getProtoParent(superClass) {
    if (typeof superClass === 'function') {
      var prototype = superClass.prototype;
      if ($Object(prototype) === prototype || prototype === null)
        return superClass.prototype;
      throw new $TypeError('super prototype must be an Object or null');
    }
    if (superClass === null)
      return null;
    throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
  }
  function defaultSuperCall(self, homeObject, args) {
    if ($getPrototypeOf(homeObject) !== null)
      superCall(self, homeObject, 'constructor', args);
  }
  $traceurRuntime.createClass = createClass;
  $traceurRuntime.defaultSuperCall = defaultSuperCall;
  $traceurRuntime.superCall = superCall;
  $traceurRuntime.superConstructor = superConstructor;
  $traceurRuntime.superGet = superGet;
  $traceurRuntime.superSet = superSet;
})();
(function() {
  'use strict';
  if (typeof $traceurRuntime !== 'object') {
    throw new Error('traceur runtime not found.');
  }
  var createPrivateName = $traceurRuntime.createPrivateName;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $create = Object.create;
  var $TypeError = TypeError;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var ST_NEWBORN = 0;
  var ST_EXECUTING = 1;
  var ST_SUSPENDED = 2;
  var ST_CLOSED = 3;
  var END_STATE = -2;
  var RETHROW_STATE = -3;
  function getInternalError(state) {
    return new Error('Traceur compiler bug: invalid state in state machine: ' + state);
  }
  function GeneratorContext() {
    this.state = 0;
    this.GState = ST_NEWBORN;
    this.storedException = undefined;
    this.finallyFallThrough = undefined;
    this.sent_ = undefined;
    this.returnValue = undefined;
    this.tryStack_ = [];
  }
  GeneratorContext.prototype = {
    pushTry: function(catchState, finallyState) {
      if (finallyState !== null) {
        var finallyFallThrough = null;
        for (var i = this.tryStack_.length - 1; i >= 0; i--) {
          if (this.tryStack_[i].catch !== undefined) {
            finallyFallThrough = this.tryStack_[i].catch;
            break;
          }
        }
        if (finallyFallThrough === null)
          finallyFallThrough = RETHROW_STATE;
        this.tryStack_.push({
          finally: finallyState,
          finallyFallThrough: finallyFallThrough
        });
      }
      if (catchState !== null) {
        this.tryStack_.push({catch: catchState});
      }
    },
    popTry: function() {
      this.tryStack_.pop();
    },
    get sent() {
      this.maybeThrow();
      return this.sent_;
    },
    set sent(v) {
      this.sent_ = v;
    },
    get sentIgnoreThrow() {
      return this.sent_;
    },
    maybeThrow: function() {
      if (this.action === 'throw') {
        this.action = 'next';
        throw this.sent_;
      }
    },
    end: function() {
      switch (this.state) {
        case END_STATE:
          return this;
        case RETHROW_STATE:
          throw this.storedException;
        default:
          throw getInternalError(this.state);
      }
    },
    handleException: function(ex) {
      this.GState = ST_CLOSED;
      this.state = END_STATE;
      throw ex;
    }
  };
  function nextOrThrow(ctx, moveNext, action, x) {
    switch (ctx.GState) {
      case ST_EXECUTING:
        throw new Error(("\"" + action + "\" on executing generator"));
      case ST_CLOSED:
        if (action == 'next') {
          return {
            value: undefined,
            done: true
          };
        }
        throw x;
      case ST_NEWBORN:
        if (action === 'throw') {
          ctx.GState = ST_CLOSED;
          throw x;
        }
        if (x !== undefined)
          throw $TypeError('Sent value to newborn generator');
      case ST_SUSPENDED:
        ctx.GState = ST_EXECUTING;
        ctx.action = action;
        ctx.sent = x;
        var value = moveNext(ctx);
        var done = value === ctx;
        if (done)
          value = ctx.returnValue;
        ctx.GState = done ? ST_CLOSED : ST_SUSPENDED;
        return {
          value: value,
          done: done
        };
    }
  }
  var ctxName = createPrivateName();
  var moveNextName = createPrivateName();
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  $defineProperty(GeneratorFunctionPrototype, 'constructor', nonEnum(GeneratorFunction));
  GeneratorFunctionPrototype.prototype = {
    constructor: GeneratorFunctionPrototype,
    next: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'next', v);
    },
    throw: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'throw', v);
    }
  };
  $defineProperties(GeneratorFunctionPrototype.prototype, {
    constructor: {enumerable: false},
    next: {enumerable: false},
    throw: {enumerable: false}
  });
  Object.defineProperty(GeneratorFunctionPrototype.prototype, Symbol.iterator, nonEnum(function() {
    return this;
  }));
  function createGeneratorInstance(innerFunction, functionObject, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new GeneratorContext();
    var object = $create(functionObject.prototype);
    object[ctxName] = ctx;
    object[moveNextName] = moveNext;
    return object;
  }
  function initGeneratorFunction(functionObject) {
    functionObject.prototype = $create(GeneratorFunctionPrototype.prototype);
    functionObject.__proto__ = GeneratorFunctionPrototype;
    return functionObject;
  }
  function AsyncFunctionContext() {
    GeneratorContext.call(this);
    this.err = undefined;
    var ctx = this;
    ctx.result = new Promise(function(resolve, reject) {
      ctx.resolve = resolve;
      ctx.reject = reject;
    });
  }
  AsyncFunctionContext.prototype = $create(GeneratorContext.prototype);
  AsyncFunctionContext.prototype.end = function() {
    switch (this.state) {
      case END_STATE:
        this.resolve(this.returnValue);
        break;
      case RETHROW_STATE:
        this.reject(this.storedException);
        break;
      default:
        this.reject(getInternalError(this.state));
    }
  };
  AsyncFunctionContext.prototype.handleException = function() {
    this.state = RETHROW_STATE;
  };
  function asyncWrap(innerFunction, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new AsyncFunctionContext();
    ctx.createCallback = function(newState) {
      return function(value) {
        ctx.state = newState;
        ctx.value = value;
        moveNext(ctx);
      };
    };
    ctx.errback = function(err) {
      handleCatch(ctx, err);
      moveNext(ctx);
    };
    moveNext(ctx);
    return ctx.result;
  }
  function getMoveNext(innerFunction, self) {
    return function(ctx) {
      while (true) {
        try {
          return innerFunction.call(self, ctx);
        } catch (ex) {
          handleCatch(ctx, ex);
        }
      }
    };
  }
  function handleCatch(ctx, ex) {
    ctx.storedException = ex;
    var last = ctx.tryStack_[ctx.tryStack_.length - 1];
    if (!last) {
      ctx.handleException(ex);
      return;
    }
    ctx.state = last.catch !== undefined ? last.catch : last.finally;
    if (last.finallyFallThrough !== undefined)
      ctx.finallyFallThrough = last.finallyFallThrough;
  }
  $traceurRuntime.asyncWrap = asyncWrap;
  $traceurRuntime.initGeneratorFunction = initGeneratorFunction;
  $traceurRuntime.createGeneratorInstance = createGeneratorInstance;
})();
(function() {
  function buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
    var out = [];
    if (opt_scheme) {
      out.push(opt_scheme, ':');
    }
    if (opt_domain) {
      out.push('//');
      if (opt_userInfo) {
        out.push(opt_userInfo, '@');
      }
      out.push(opt_domain);
      if (opt_port) {
        out.push(':', opt_port);
      }
    }
    if (opt_path) {
      out.push(opt_path);
    }
    if (opt_queryData) {
      out.push('?', opt_queryData);
    }
    if (opt_fragment) {
      out.push('#', opt_fragment);
    }
    return out.join('');
  }
  ;
  var splitRe = new RegExp('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
  var ComponentIndex = {
    SCHEME: 1,
    USER_INFO: 2,
    DOMAIN: 3,
    PORT: 4,
    PATH: 5,
    QUERY_DATA: 6,
    FRAGMENT: 7
  };
  function split(uri) {
    return (uri.match(splitRe));
  }
  function removeDotSegments(path) {
    if (path === '/')
      return '/';
    var leadingSlash = path[0] === '/' ? '/' : '';
    var trailingSlash = path.slice(-1) === '/' ? '/' : '';
    var segments = path.split('/');
    var out = [];
    var up = 0;
    for (var pos = 0; pos < segments.length; pos++) {
      var segment = segments[pos];
      switch (segment) {
        case '':
        case '.':
          break;
        case '..':
          if (out.length)
            out.pop();
          else
            up++;
          break;
        default:
          out.push(segment);
      }
    }
    if (!leadingSlash) {
      while (up-- > 0) {
        out.unshift('..');
      }
      if (out.length === 0)
        out.push('.');
    }
    return leadingSlash + out.join('/') + trailingSlash;
  }
  function joinAndCanonicalizePath(parts) {
    var path = parts[ComponentIndex.PATH] || '';
    path = removeDotSegments(path);
    parts[ComponentIndex.PATH] = path;
    return buildFromEncodedParts(parts[ComponentIndex.SCHEME], parts[ComponentIndex.USER_INFO], parts[ComponentIndex.DOMAIN], parts[ComponentIndex.PORT], parts[ComponentIndex.PATH], parts[ComponentIndex.QUERY_DATA], parts[ComponentIndex.FRAGMENT]);
  }
  function canonicalizeUrl(url) {
    var parts = split(url);
    return joinAndCanonicalizePath(parts);
  }
  function resolveUrl(base, url) {
    var parts = split(url);
    var baseParts = split(base);
    if (parts[ComponentIndex.SCHEME]) {
      return joinAndCanonicalizePath(parts);
    } else {
      parts[ComponentIndex.SCHEME] = baseParts[ComponentIndex.SCHEME];
    }
    for (var i = ComponentIndex.SCHEME; i <= ComponentIndex.PORT; i++) {
      if (!parts[i]) {
        parts[i] = baseParts[i];
      }
    }
    if (parts[ComponentIndex.PATH][0] == '/') {
      return joinAndCanonicalizePath(parts);
    }
    var path = baseParts[ComponentIndex.PATH];
    var index = path.lastIndexOf('/');
    path = path.slice(0, index + 1) + parts[ComponentIndex.PATH];
    parts[ComponentIndex.PATH] = path;
    return joinAndCanonicalizePath(parts);
  }
  function isAbsolute(name) {
    if (!name)
      return false;
    if (name[0] === '/')
      return true;
    var parts = split(name);
    if (parts[ComponentIndex.SCHEME])
      return true;
    return false;
  }
  $traceurRuntime.canonicalizeUrl = canonicalizeUrl;
  $traceurRuntime.isAbsolute = isAbsolute;
  $traceurRuntime.removeDotSegments = removeDotSegments;
  $traceurRuntime.resolveUrl = resolveUrl;
})();
(function() {
  'use strict';
  var types = {
    any: {name: 'any'},
    boolean: {name: 'boolean'},
    number: {name: 'number'},
    string: {name: 'string'},
    symbol: {name: 'symbol'},
    void: {name: 'void'}
  };
  var GenericType = function GenericType(type, argumentTypes) {
    this.type = type;
    this.argumentTypes = argumentTypes;
  };
  ($traceurRuntime.createClass)(GenericType, {}, {});
  var typeRegister = Object.create(null);
  function genericType(type) {
    for (var argumentTypes = [],
        $__1 = 1; $__1 < arguments.length; $__1++)
      argumentTypes[$__1 - 1] = arguments[$__1];
    var typeMap = typeRegister;
    var key = $traceurRuntime.getOwnHashObject(type).hash;
    if (!typeMap[key]) {
      typeMap[key] = Object.create(null);
    }
    typeMap = typeMap[key];
    for (var i = 0; i < argumentTypes.length - 1; i++) {
      key = $traceurRuntime.getOwnHashObject(argumentTypes[i]).hash;
      if (!typeMap[key]) {
        typeMap[key] = Object.create(null);
      }
      typeMap = typeMap[key];
    }
    var tail = argumentTypes[argumentTypes.length - 1];
    key = $traceurRuntime.getOwnHashObject(tail).hash;
    if (!typeMap[key]) {
      typeMap[key] = new GenericType(type, argumentTypes);
    }
    return typeMap[key];
  }
  $traceurRuntime.GenericType = GenericType;
  $traceurRuntime.genericType = genericType;
  $traceurRuntime.type = types;
})();
(function(global) {
  'use strict';
  var $__2 = $traceurRuntime,
      canonicalizeUrl = $__2.canonicalizeUrl,
      resolveUrl = $__2.resolveUrl,
      isAbsolute = $__2.isAbsolute;
  var moduleInstantiators = Object.create(null);
  var baseURL;
  if (global.location && global.location.href)
    baseURL = resolveUrl(global.location.href, './');
  else
    baseURL = '';
  var UncoatedModuleEntry = function UncoatedModuleEntry(url, uncoatedModule) {
    this.url = url;
    this.value_ = uncoatedModule;
  };
  ($traceurRuntime.createClass)(UncoatedModuleEntry, {}, {});
  var ModuleEvaluationError = function ModuleEvaluationError(erroneousModuleName, cause) {
    this.message = this.constructor.name + ': ' + this.stripCause(cause) + ' in ' + erroneousModuleName;
    if (!(cause instanceof $ModuleEvaluationError) && cause.stack)
      this.stack = this.stripStack(cause.stack);
    else
      this.stack = '';
  };
  var $ModuleEvaluationError = ModuleEvaluationError;
  ($traceurRuntime.createClass)(ModuleEvaluationError, {
    stripError: function(message) {
      return message.replace(/.*Error:/, this.constructor.name + ':');
    },
    stripCause: function(cause) {
      if (!cause)
        return '';
      if (!cause.message)
        return cause + '';
      return this.stripError(cause.message);
    },
    loadedBy: function(moduleName) {
      this.stack += '\n loaded by ' + moduleName;
    },
    stripStack: function(causeStack) {
      var stack = [];
      causeStack.split('\n').some((function(frame) {
        if (/UncoatedModuleInstantiator/.test(frame))
          return true;
        stack.push(frame);
      }));
      stack[0] = this.stripError(stack[0]);
      return stack.join('\n');
    }
  }, {}, Error);
  function beforeLines(lines, number) {
    var result = [];
    var first = number - 3;
    if (first < 0)
      first = 0;
    for (var i = first; i < number; i++) {
      result.push(lines[i]);
    }
    return result;
  }
  function afterLines(lines, number) {
    var last = number + 1;
    if (last > lines.length - 1)
      last = lines.length - 1;
    var result = [];
    for (var i = number; i <= last; i++) {
      result.push(lines[i]);
    }
    return result;
  }
  function columnSpacing(columns) {
    var result = '';
    for (var i = 0; i < columns - 1; i++) {
      result += '-';
    }
    return result;
  }
  var UncoatedModuleInstantiator = function UncoatedModuleInstantiator(url, func) {
    $traceurRuntime.superConstructor($UncoatedModuleInstantiator).call(this, url, null);
    this.func = func;
  };
  var $UncoatedModuleInstantiator = UncoatedModuleInstantiator;
  ($traceurRuntime.createClass)(UncoatedModuleInstantiator, {getUncoatedModule: function() {
      if (this.value_)
        return this.value_;
      try {
        var relativeRequire;
        if (typeof $traceurRuntime !== undefined) {
          relativeRequire = $traceurRuntime.require.bind(null, this.url);
        }
        return this.value_ = this.func.call(global, relativeRequire);
      } catch (ex) {
        if (ex instanceof ModuleEvaluationError) {
          ex.loadedBy(this.url);
          throw ex;
        }
        if (ex.stack) {
          var lines = this.func.toString().split('\n');
          var evaled = [];
          ex.stack.split('\n').some(function(frame) {
            if (frame.indexOf('UncoatedModuleInstantiator.getUncoatedModule') > 0)
              return true;
            var m = /(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(frame);
            if (m) {
              var line = parseInt(m[2], 10);
              evaled = evaled.concat(beforeLines(lines, line));
              evaled.push(columnSpacing(m[3]) + '^');
              evaled = evaled.concat(afterLines(lines, line));
              evaled.push('= = = = = = = = =');
            } else {
              evaled.push(frame);
            }
          });
          ex.stack = evaled.join('\n');
        }
        throw new ModuleEvaluationError(this.url, ex);
      }
    }}, {}, UncoatedModuleEntry);
  function getUncoatedModuleInstantiator(name) {
    if (!name)
      return;
    var url = ModuleStore.normalize(name);
    return moduleInstantiators[url];
  }
  ;
  var moduleInstances = Object.create(null);
  var liveModuleSentinel = {};
  function Module(uncoatedModule) {
    var isLive = arguments[1];
    var coatedModule = Object.create(null);
    Object.getOwnPropertyNames(uncoatedModule).forEach((function(name) {
      var getter,
          value;
      if (isLive === liveModuleSentinel) {
        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
        if (descr.get)
          getter = descr.get;
      }
      if (!getter) {
        value = uncoatedModule[name];
        getter = function() {
          return value;
        };
      }
      Object.defineProperty(coatedModule, name, {
        get: getter,
        enumerable: true
      });
    }));
    Object.preventExtensions(coatedModule);
    return coatedModule;
  }
  var ModuleStore = {
    normalize: function(name, refererName, refererAddress) {
      if (typeof name !== 'string')
        throw new TypeError('module name must be a string, not ' + typeof name);
      if (isAbsolute(name))
        return canonicalizeUrl(name);
      if (/[^\.]\/\.\.\//.test(name)) {
        throw new Error('module name embeds /../: ' + name);
      }
      if (name[0] === '.' && refererName)
        return resolveUrl(refererName, name);
      return canonicalizeUrl(name);
    },
    get: function(normalizedName) {
      var m = getUncoatedModuleInstantiator(normalizedName);
      if (!m)
        return undefined;
      var moduleInstance = moduleInstances[m.url];
      if (moduleInstance)
        return moduleInstance;
      moduleInstance = Module(m.getUncoatedModule(), liveModuleSentinel);
      return moduleInstances[m.url] = moduleInstance;
    },
    set: function(normalizedName, module) {
      normalizedName = String(normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, (function() {
        return module;
      }));
      moduleInstances[normalizedName] = module;
    },
    get baseURL() {
      return baseURL;
    },
    set baseURL(v) {
      baseURL = String(v);
    },
    registerModule: function(name, deps, func) {
      var normalizedName = ModuleStore.normalize(name);
      if (moduleInstantiators[normalizedName])
        throw new Error('duplicate module named ' + normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, func);
    },
    bundleStore: Object.create(null),
    register: function(name, deps, func) {
      if (!deps || !deps.length && !func.length) {
        this.registerModule(name, deps, func);
      } else {
        this.bundleStore[name] = {
          deps: deps,
          execute: function() {
            var $__0 = arguments;
            var depMap = {};
            deps.forEach((function(dep, index) {
              return depMap[dep] = $__0[index];
            }));
            var registryEntry = func.call(this, depMap);
            registryEntry.execute.call(this);
            return registryEntry.exports;
          }
        };
      }
    },
    getAnonymousModule: function(func) {
      return new Module(func.call(global), liveModuleSentinel);
    },
    getForTesting: function(name) {
      var $__0 = this;
      if (!this.testingPrefix_) {
        Object.keys(moduleInstances).some((function(key) {
          var m = /(traceur@[^\/]*\/)/.exec(key);
          if (m) {
            $__0.testingPrefix_ = m[1];
            return true;
          }
        }));
      }
      return this.get(this.testingPrefix_ + name);
    }
  };
  var moduleStoreModule = new Module({ModuleStore: ModuleStore});
  ModuleStore.set('@traceur/src/runtime/ModuleStore', moduleStoreModule);
  ModuleStore.set('@traceur/src/runtime/ModuleStore.js', moduleStoreModule);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
  };
  $traceurRuntime.ModuleStore = ModuleStore;
  global.System = {
    register: ModuleStore.register.bind(ModuleStore),
    registerModule: ModuleStore.registerModule.bind(ModuleStore),
    get: ModuleStore.get,
    set: ModuleStore.set,
    normalize: ModuleStore.normalize
  };
  $traceurRuntime.getModuleImpl = function(name) {
    var instantiator = getUncoatedModuleInstantiator(name);
    return instantiator && instantiator.getUncoatedModule();
  };
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/utils.js";
  var $ceil = Math.ceil;
  var $floor = Math.floor;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var $pow = Math.pow;
  var $min = Math.min;
  var toObject = $traceurRuntime.toObject;
  function toUint32(x) {
    return x >>> 0;
  }
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function isCallable(x) {
    return typeof x === 'function';
  }
  function isNumber(x) {
    return typeof x === 'number';
  }
  function toInteger(x) {
    x = +x;
    if ($isNaN(x))
      return 0;
    if (x === 0 || !$isFinite(x))
      return x;
    return x > 0 ? $floor(x) : $ceil(x);
  }
  var MAX_SAFE_LENGTH = $pow(2, 53) - 1;
  function toLength(x) {
    var len = toInteger(x);
    return len < 0 ? 0 : $min(len, MAX_SAFE_LENGTH);
  }
  function checkIterable(x) {
    return !isObject(x) ? undefined : x[Symbol.iterator];
  }
  function isConstructor(x) {
    return isCallable(x);
  }
  function createIteratorResultObject(value, done) {
    return {
      value: value,
      done: done
    };
  }
  function maybeDefine(object, name, descr) {
    if (!(name in object)) {
      Object.defineProperty(object, name, descr);
    }
  }
  function maybeDefineMethod(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  function maybeDefineConst(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: false,
      enumerable: false,
      writable: false
    });
  }
  function maybeAddFunctions(object, functions) {
    for (var i = 0; i < functions.length; i += 2) {
      var name = functions[i];
      var value = functions[i + 1];
      maybeDefineMethod(object, name, value);
    }
  }
  function maybeAddConsts(object, consts) {
    for (var i = 0; i < consts.length; i += 2) {
      var name = consts[i];
      var value = consts[i + 1];
      maybeDefineConst(object, name, value);
    }
  }
  function maybeAddIterator(object, func, Symbol) {
    if (!Symbol || !Symbol.iterator || object[Symbol.iterator])
      return;
    if (object['@@iterator'])
      func = object['@@iterator'];
    Object.defineProperty(object, Symbol.iterator, {
      value: func,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  var polyfills = [];
  function registerPolyfill(func) {
    polyfills.push(func);
  }
  function polyfillAll(global) {
    polyfills.forEach((function(f) {
      return f(global);
    }));
  }
  return {
    get toObject() {
      return toObject;
    },
    get toUint32() {
      return toUint32;
    },
    get isObject() {
      return isObject;
    },
    get isCallable() {
      return isCallable;
    },
    get isNumber() {
      return isNumber;
    },
    get toInteger() {
      return toInteger;
    },
    get toLength() {
      return toLength;
    },
    get checkIterable() {
      return checkIterable;
    },
    get isConstructor() {
      return isConstructor;
    },
    get createIteratorResultObject() {
      return createIteratorResultObject;
    },
    get maybeDefine() {
      return maybeDefine;
    },
    get maybeDefineMethod() {
      return maybeDefineMethod;
    },
    get maybeDefineConst() {
      return maybeDefineConst;
    },
    get maybeAddFunctions() {
      return maybeAddFunctions;
    },
    get maybeAddConsts() {
      return maybeAddConsts;
    },
    get maybeAddIterator() {
      return maybeAddIterator;
    },
    get registerPolyfill() {
      return registerPolyfill;
    },
    get polyfillAll() {
      return polyfillAll;
    }
  };
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Map.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  var deletedSentinel = {};
  function lookupIndex(map, key) {
    if (isObject(key)) {
      var hashObject = getOwnHashObject(key);
      return hashObject && map.objectIndex_[hashObject.hash];
    }
    if (typeof key === 'string')
      return map.stringIndex_[key];
    return map.primitiveIndex_[key];
  }
  function initMap(map) {
    map.entries_ = [];
    map.objectIndex_ = Object.create(null);
    map.stringIndex_ = Object.create(null);
    map.primitiveIndex_ = Object.create(null);
    map.deletedCount_ = 0;
  }
  var Map = function Map() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Map called on incompatible type');
    if ($hasOwnProperty.call(this, 'entries_')) {
      throw new TypeError('Map can not be reentrantly initialised');
    }
    initMap(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__2 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        var $__4 = $__3.value,
            key = $__4[0],
            value = $__4[1];
        {
          this.set(key, value);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Map, {
    get size() {
      return this.entries_.length / 2 - this.deletedCount_;
    },
    get: function(key) {
      var index = lookupIndex(this, key);
      if (index !== undefined)
        return this.entries_[index + 1];
    },
    set: function(key, value) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index = lookupIndex(this, key);
      if (index !== undefined) {
        this.entries_[index + 1] = value;
      } else {
        index = this.entries_.length;
        this.entries_[index] = key;
        this.entries_[index + 1] = value;
        if (objectMode) {
          var hashObject = getOwnHashObject(key);
          var hash = hashObject.hash;
          this.objectIndex_[hash] = index;
        } else if (stringMode) {
          this.stringIndex_[key] = index;
        } else {
          this.primitiveIndex_[key] = index;
        }
      }
      return this;
    },
    has: function(key) {
      return lookupIndex(this, key) !== undefined;
    },
    delete: function(key) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index;
      var hash;
      if (objectMode) {
        var hashObject = getOwnHashObject(key);
        if (hashObject) {
          index = this.objectIndex_[hash = hashObject.hash];
          delete this.objectIndex_[hash];
        }
      } else if (stringMode) {
        index = this.stringIndex_[key];
        delete this.stringIndex_[key];
      } else {
        index = this.primitiveIndex_[key];
        delete this.primitiveIndex_[key];
      }
      if (index !== undefined) {
        this.entries_[index] = deletedSentinel;
        this.entries_[index + 1] = undefined;
        this.deletedCount_++;
        return true;
      }
      return false;
    },
    clear: function() {
      initMap(this);
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      for (var i = 0; i < this.entries_.length; i += 2) {
        var key = this.entries_[i];
        var value = this.entries_[i + 1];
        if (key === deletedSentinel)
          continue;
        callbackFn.call(thisArg, value, key, this);
      }
    },
    entries: $traceurRuntime.initGeneratorFunction(function $__5() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return [key, value];
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    }),
    keys: $traceurRuntime.initGeneratorFunction(function $__6() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return key;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    }),
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return value;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    })
  }, {});
  Object.defineProperty(Map.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Map.prototype.entries
  });
  function polyfillMap(global) {
    var $__4 = global,
        Object = $__4.Object,
        Symbol = $__4.Symbol;
    if (!global.Map)
      global.Map = Map;
    var mapPrototype = global.Map.prototype;
    if (mapPrototype.entries === undefined)
      global.Map = Map;
    if (mapPrototype.entries) {
      maybeAddIterator(mapPrototype, mapPrototype.entries, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Map().entries()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillMap);
  return {
    get Map() {
      return Map;
    },
    get polyfillMap() {
      return polyfillMap;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Set.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var Map = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js").Map;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  function initSet(set) {
    set.map_ = new Map();
  }
  var Set = function Set() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Set called on incompatible type');
    if ($hasOwnProperty.call(this, 'map_')) {
      throw new TypeError('Set can not be reentrantly initialised');
    }
    initSet(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__4 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__5; !($__5 = $__4.next()).done; ) {
        var item = $__5.value;
        {
          this.add(item);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Set, {
    get size() {
      return this.map_.size;
    },
    has: function(key) {
      return this.map_.has(key);
    },
    add: function(key) {
      this.map_.set(key, key);
      return this;
    },
    delete: function(key) {
      return this.map_.delete(key);
    },
    clear: function() {
      return this.map_.clear();
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      var $__2 = this;
      return this.map_.forEach((function(value, key) {
        callbackFn.call(thisArg, key, key, $__2);
      }));
    },
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var $__8,
          $__9;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__8 = this.map_.keys()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__9 = $__8[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__9.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__9.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__9.value;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    }),
    entries: $traceurRuntime.initGeneratorFunction(function $__10() {
      var $__11,
          $__12;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__11 = this.map_.entries()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__12 = $__11[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__12.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__12.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__12.value;
            default:
              return $ctx.end();
          }
      }, $__10, this);
    })
  }, {});
  Object.defineProperty(Set.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  Object.defineProperty(Set.prototype, 'keys', {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  function polyfillSet(global) {
    var $__6 = global,
        Object = $__6.Object,
        Symbol = $__6.Symbol;
    if (!global.Set)
      global.Set = Set;
    var setPrototype = global.Set.prototype;
    if (setPrototype.values) {
      maybeAddIterator(setPrototype, setPrototype.values, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillSet);
  return {
    get Set() {
      return Set;
    },
    get polyfillSet() {
      return polyfillSet;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js" + '');
System.registerModule("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js";
  var len = 0;
  function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      scheduleFlush();
    }
  }
  var $__default = asap;
  var browserGlobal = (typeof window !== 'undefined') ? window : {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
  function useNextTick() {
    return function() {
      process.nextTick(flush);
    };
  }
  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, {characterData: true});
    return function() {
      node.data = (iterations = ++iterations % 2);
    };
  }
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function() {
      channel.port2.postMessage(0);
    };
  }
  function useSetTimeout() {
    return function() {
      setTimeout(flush, 1);
    };
  }
  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];
      callback(arg);
      queue[i] = undefined;
      queue[i + 1] = undefined;
    }
    len = 0;
  }
  var scheduleFlush;
  if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else {
    scheduleFlush = useSetTimeout();
  }
  return {get default() {
      return $__default;
    }};
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js";
  var async = System.get("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js").default;
  var registerPolyfill = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").registerPolyfill;
  var promiseRaw = {};
  function isPromise(x) {
    return x && typeof x === 'object' && x.status_ !== undefined;
  }
  function idResolveHandler(x) {
    return x;
  }
  function idRejectHandler(x) {
    throw x;
  }
  function chain(promise) {
    var onResolve = arguments[1] !== (void 0) ? arguments[1] : idResolveHandler;
    var onReject = arguments[2] !== (void 0) ? arguments[2] : idRejectHandler;
    var deferred = getDeferred(promise.constructor);
    switch (promise.status_) {
      case undefined:
        throw TypeError;
      case 0:
        promise.onResolve_.push(onResolve, deferred);
        promise.onReject_.push(onReject, deferred);
        break;
      case +1:
        promiseEnqueue(promise.value_, [onResolve, deferred]);
        break;
      case -1:
        promiseEnqueue(promise.value_, [onReject, deferred]);
        break;
    }
    return deferred.promise;
  }
  function getDeferred(C) {
    if (this === $Promise) {
      var promise = promiseInit(new $Promise(promiseRaw));
      return {
        promise: promise,
        resolve: (function(x) {
          promiseResolve(promise, x);
        }),
        reject: (function(r) {
          promiseReject(promise, r);
        })
      };
    } else {
      var result = {};
      result.promise = new C((function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
      }));
      return result;
    }
  }
  function promiseSet(promise, status, value, onResolve, onReject) {
    promise.status_ = status;
    promise.value_ = value;
    promise.onResolve_ = onResolve;
    promise.onReject_ = onReject;
    return promise;
  }
  function promiseInit(promise) {
    return promiseSet(promise, 0, undefined, [], []);
  }
  var Promise = function Promise(resolver) {
    if (resolver === promiseRaw)
      return;
    if (typeof resolver !== 'function')
      throw new TypeError;
    var promise = promiseInit(this);
    try {
      resolver((function(x) {
        promiseResolve(promise, x);
      }), (function(r) {
        promiseReject(promise, r);
      }));
    } catch (e) {
      promiseReject(promise, e);
    }
  };
  ($traceurRuntime.createClass)(Promise, {
    catch: function(onReject) {
      return this.then(undefined, onReject);
    },
    then: function(onResolve, onReject) {
      if (typeof onResolve !== 'function')
        onResolve = idResolveHandler;
      if (typeof onReject !== 'function')
        onReject = idRejectHandler;
      var that = this;
      var constructor = this.constructor;
      return chain(this, function(x) {
        x = promiseCoerce(constructor, x);
        return x === that ? onReject(new TypeError) : isPromise(x) ? x.then(onResolve, onReject) : onResolve(x);
      }, onReject);
    }
  }, {
    resolve: function(x) {
      if (this === $Promise) {
        if (isPromise(x)) {
          return x;
        }
        return promiseSet(new $Promise(promiseRaw), +1, x);
      } else {
        return new this(function(resolve, reject) {
          resolve(x);
        });
      }
    },
    reject: function(r) {
      if (this === $Promise) {
        return promiseSet(new $Promise(promiseRaw), -1, r);
      } else {
        return new this((function(resolve, reject) {
          reject(r);
        }));
      }
    },
    all: function(values) {
      var deferred = getDeferred(this);
      var resolutions = [];
      try {
        var count = values.length;
        if (count === 0) {
          deferred.resolve(resolutions);
        } else {
          for (var i = 0; i < values.length; i++) {
            this.resolve(values[i]).then(function(i, x) {
              resolutions[i] = x;
              if (--count === 0)
                deferred.resolve(resolutions);
            }.bind(undefined, i), (function(r) {
              deferred.reject(r);
            }));
          }
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    },
    race: function(values) {
      var deferred = getDeferred(this);
      try {
        for (var i = 0; i < values.length; i++) {
          this.resolve(values[i]).then((function(x) {
            deferred.resolve(x);
          }), (function(r) {
            deferred.reject(r);
          }));
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    }
  });
  var $Promise = Promise;
  var $PromiseReject = $Promise.reject;
  function promiseResolve(promise, x) {
    promiseDone(promise, +1, x, promise.onResolve_);
  }
  function promiseReject(promise, r) {
    promiseDone(promise, -1, r, promise.onReject_);
  }
  function promiseDone(promise, status, value, reactions) {
    if (promise.status_ !== 0)
      return;
    promiseEnqueue(value, reactions);
    promiseSet(promise, status, value);
  }
  function promiseEnqueue(value, tasks) {
    async((function() {
      for (var i = 0; i < tasks.length; i += 2) {
        promiseHandle(value, tasks[i], tasks[i + 1]);
      }
    }));
  }
  function promiseHandle(value, handler, deferred) {
    try {
      var result = handler(value);
      if (result === deferred.promise)
        throw new TypeError;
      else if (isPromise(result))
        chain(result, deferred.resolve, deferred.reject);
      else
        deferred.resolve(result);
    } catch (e) {
      try {
        deferred.reject(e);
      } catch (e) {}
    }
  }
  var thenableSymbol = '@@thenable';
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function promiseCoerce(constructor, x) {
    if (!isPromise(x) && isObject(x)) {
      var then;
      try {
        then = x.then;
      } catch (r) {
        var promise = $PromiseReject.call(constructor, r);
        x[thenableSymbol] = promise;
        return promise;
      }
      if (typeof then === 'function') {
        var p = x[thenableSymbol];
        if (p) {
          return p;
        } else {
          var deferred = getDeferred(constructor);
          x[thenableSymbol] = deferred.promise;
          try {
            then.call(x, deferred.resolve, deferred.reject);
          } catch (r) {
            deferred.reject(r);
          }
          return deferred.promise;
        }
      }
    }
    return x;
  }
  function polyfillPromise(global) {
    if (!global.Promise)
      global.Promise = Promise;
  }
  registerPolyfill(polyfillPromise);
  return {
    get Promise() {
      return Promise;
    },
    get polyfillPromise() {
      return polyfillPromise;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      createIteratorResultObject = $__0.createIteratorResultObject,
      isObject = $__0.isObject;
  var toProperty = $traceurRuntime.toProperty;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var iteratedString = Symbol('iteratedString');
  var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
  var StringIterator = function StringIterator() {};
  ($traceurRuntime.createClass)(StringIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var o = this;
      if (!isObject(o) || !hasOwnProperty.call(o, iteratedString)) {
        throw new TypeError('this must be a StringIterator object');
      }
      var s = o[toProperty(iteratedString)];
      if (s === undefined) {
        return createIteratorResultObject(undefined, true);
      }
      var position = o[toProperty(stringIteratorNextIndex)];
      var len = s.length;
      if (position >= len) {
        o[toProperty(iteratedString)] = undefined;
        return createIteratorResultObject(undefined, true);
      }
      var first = s.charCodeAt(position);
      var resultString;
      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
        resultString = String.fromCharCode(first);
      } else {
        var second = s.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          resultString = String.fromCharCode(first);
        } else {
          resultString = String.fromCharCode(first) + String.fromCharCode(second);
        }
      }
      o[toProperty(stringIteratorNextIndex)] = position + resultString.length;
      return createIteratorResultObject(resultString, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createStringIterator(string) {
    var s = String(string);
    var iterator = Object.create(StringIterator.prototype);
    iterator[toProperty(iteratedString)] = s;
    iterator[toProperty(stringIteratorNextIndex)] = 0;
    return iterator;
  }
  return {get createStringIterator() {
      return createStringIterator;
    }};
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/String.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/String.js";
  var createStringIterator = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js").createStringIterator;
  var $__1 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill;
  var $toString = Object.prototype.toString;
  var $indexOf = String.prototype.indexOf;
  var $lastIndexOf = String.prototype.lastIndexOf;
  function startsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (isNaN(pos)) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    return $indexOf.call(string, searchString, pos) == start;
  }
  function endsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var pos = stringLength;
    if (arguments.length > 1) {
      var position = arguments[1];
      if (position !== undefined) {
        pos = position ? Number(position) : 0;
        if (isNaN(pos)) {
          pos = 0;
        }
      }
    }
    var end = Math.min(Math.max(pos, 0), stringLength);
    var start = end - searchLength;
    if (start < 0) {
      return false;
    }
    return $lastIndexOf.call(string, searchString, start) == start;
  }
  function includes(search) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    if (search && $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (pos != pos) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    if (searchLength + start > stringLength) {
      return false;
    }
    return $indexOf.call(string, searchString, pos) != -1;
  }
  function repeat(count) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var n = count ? Number(count) : 0;
    if (isNaN(n)) {
      n = 0;
    }
    if (n < 0 || n == Infinity) {
      throw RangeError();
    }
    if (n == 0) {
      return '';
    }
    var result = '';
    while (n--) {
      result += string;
    }
    return result;
  }
  function codePointAt(position) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var size = string.length;
    var index = position ? Number(position) : 0;
    if (isNaN(index)) {
      index = 0;
    }
    if (index < 0 || index >= size) {
      return undefined;
    }
    var first = string.charCodeAt(index);
    var second;
    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }
    return first;
  }
  function raw(callsite) {
    var raw = callsite.raw;
    var len = raw.length >>> 0;
    if (len === 0)
      return '';
    var s = '';
    var i = 0;
    while (true) {
      s += raw[i];
      if (i + 1 === len)
        return s;
      s += arguments[++i];
    }
  }
  function fromCodePoint() {
    var codeUnits = [];
    var floor = Math.floor;
    var highSurrogate;
    var lowSurrogate;
    var index = -1;
    var length = arguments.length;
    if (!length) {
      return '';
    }
    while (++index < length) {
      var codePoint = Number(arguments[index]);
      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
        throw RangeError('Invalid code point: ' + codePoint);
      }
      if (codePoint <= 0xFFFF) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        highSurrogate = (codePoint >> 10) + 0xD800;
        lowSurrogate = (codePoint % 0x400) + 0xDC00;
        codeUnits.push(highSurrogate, lowSurrogate);
      }
    }
    return String.fromCharCode.apply(null, codeUnits);
  }
  function stringPrototypeIterator() {
    var o = $traceurRuntime.checkObjectCoercible(this);
    var s = String(o);
    return createStringIterator(s);
  }
  function polyfillString(global) {
    var String = global.String;
    maybeAddFunctions(String.prototype, ['codePointAt', codePointAt, 'endsWith', endsWith, 'includes', includes, 'repeat', repeat, 'startsWith', startsWith]);
    maybeAddFunctions(String, ['fromCodePoint', fromCodePoint, 'raw', raw]);
    maybeAddIterator(String.prototype, stringPrototypeIterator, Symbol);
  }
  registerPolyfill(polyfillString);
  return {
    get startsWith() {
      return startsWith;
    },
    get endsWith() {
      return endsWith;
    },
    get includes() {
      return includes;
    },
    get repeat() {
      return repeat;
    },
    get codePointAt() {
      return codePointAt;
    },
    get raw() {
      return raw;
    },
    get fromCodePoint() {
      return fromCodePoint;
    },
    get stringPrototypeIterator() {
      return stringPrototypeIterator;
    },
    get polyfillString() {
      return polyfillString;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/String.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      toObject = $__0.toObject,
      toUint32 = $__0.toUint32,
      createIteratorResultObject = $__0.createIteratorResultObject;
  var ARRAY_ITERATOR_KIND_KEYS = 1;
  var ARRAY_ITERATOR_KIND_VALUES = 2;
  var ARRAY_ITERATOR_KIND_ENTRIES = 3;
  var ArrayIterator = function ArrayIterator() {};
  ($traceurRuntime.createClass)(ArrayIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var iterator = toObject(this);
      var array = iterator.iteratorObject_;
      if (!array) {
        throw new TypeError('Object is not an ArrayIterator');
      }
      var index = iterator.arrayIteratorNextIndex_;
      var itemKind = iterator.arrayIterationKind_;
      var length = toUint32(array.length);
      if (index >= length) {
        iterator.arrayIteratorNextIndex_ = Infinity;
        return createIteratorResultObject(undefined, true);
      }
      iterator.arrayIteratorNextIndex_ = index + 1;
      if (itemKind == ARRAY_ITERATOR_KIND_VALUES)
        return createIteratorResultObject(array[index], false);
      if (itemKind == ARRAY_ITERATOR_KIND_ENTRIES)
        return createIteratorResultObject([index, array[index]], false);
      return createIteratorResultObject(index, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createArrayIterator(array, kind) {
    var object = toObject(array);
    var iterator = new ArrayIterator;
    iterator.iteratorObject_ = object;
    iterator.arrayIteratorNextIndex_ = 0;
    iterator.arrayIterationKind_ = kind;
    return iterator;
  }
  function entries() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_ENTRIES);
  }
  function keys() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_KEYS);
  }
  function values() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_VALUES);
  }
  return {
    get entries() {
      return entries;
    },
    get keys() {
      return keys;
    },
    get values() {
      return values;
    }
  };
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Array.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js"),
      entries = $__0.entries,
      keys = $__0.keys,
      values = $__0.values;
  var $__1 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      checkIterable = $__1.checkIterable,
      isCallable = $__1.isCallable,
      isConstructor = $__1.isConstructor,
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill,
      toInteger = $__1.toInteger,
      toLength = $__1.toLength,
      toObject = $__1.toObject;
  function from(arrLike) {
    var mapFn = arguments[1];
    var thisArg = arguments[2];
    var C = this;
    var items = toObject(arrLike);
    var mapping = mapFn !== undefined;
    var k = 0;
    var arr,
        len;
    if (mapping && !isCallable(mapFn)) {
      throw TypeError();
    }
    if (checkIterable(items)) {
      arr = isConstructor(C) ? new C() : [];
      for (var $__2 = items[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        var item = $__3.value;
        {
          if (mapping) {
            arr[k] = mapFn.call(thisArg, item, k);
          } else {
            arr[k] = item;
          }
          k++;
        }
      }
      arr.length = k;
      return arr;
    }
    len = toLength(items.length);
    arr = isConstructor(C) ? new C(len) : new Array(len);
    for (; k < len; k++) {
      if (mapping) {
        arr[k] = typeof thisArg === 'undefined' ? mapFn(items[k], k) : mapFn.call(thisArg, items[k], k);
      } else {
        arr[k] = items[k];
      }
    }
    arr.length = len;
    return arr;
  }
  function of() {
    for (var items = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      items[$__4] = arguments[$__4];
    var C = this;
    var len = items.length;
    var arr = isConstructor(C) ? new C(len) : new Array(len);
    for (var k = 0; k < len; k++) {
      arr[k] = items[k];
    }
    arr.length = len;
    return arr;
  }
  function fill(value) {
    var start = arguments[1] !== (void 0) ? arguments[1] : 0;
    var end = arguments[2];
    var object = toObject(this);
    var len = toLength(object.length);
    var fillStart = toInteger(start);
    var fillEnd = end !== undefined ? toInteger(end) : len;
    fillStart = fillStart < 0 ? Math.max(len + fillStart, 0) : Math.min(fillStart, len);
    fillEnd = fillEnd < 0 ? Math.max(len + fillEnd, 0) : Math.min(fillEnd, len);
    while (fillStart < fillEnd) {
      object[fillStart] = value;
      fillStart++;
    }
    return object;
  }
  function find(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg);
  }
  function findIndex(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg, true);
  }
  function findHelper(self, predicate) {
    var thisArg = arguments[2];
    var returnIndex = arguments[3] !== (void 0) ? arguments[3] : false;
    var object = toObject(self);
    var len = toLength(object.length);
    if (!isCallable(predicate)) {
      throw TypeError();
    }
    for (var i = 0; i < len; i++) {
      var value = object[i];
      if (predicate.call(thisArg, value, i, object)) {
        return returnIndex ? i : value;
      }
    }
    return returnIndex ? -1 : undefined;
  }
  function polyfillArray(global) {
    var $__5 = global,
        Array = $__5.Array,
        Object = $__5.Object,
        Symbol = $__5.Symbol;
    maybeAddFunctions(Array.prototype, ['entries', entries, 'keys', keys, 'values', values, 'fill', fill, 'find', find, 'findIndex', findIndex]);
    maybeAddFunctions(Array, ['from', from, 'of', of]);
    maybeAddIterator(Array.prototype, values, Symbol);
    maybeAddIterator(Object.getPrototypeOf([].values()), function() {
      return this;
    }, Symbol);
  }
  registerPolyfill(polyfillArray);
  return {
    get from() {
      return from;
    },
    get of() {
      return of;
    },
    get fill() {
      return fill;
    },
    get find() {
      return find;
    },
    get findIndex() {
      return findIndex;
    },
    get polyfillArray() {
      return polyfillArray;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Object.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill;
  var $__1 = $traceurRuntime,
      defineProperty = $__1.defineProperty,
      getOwnPropertyDescriptor = $__1.getOwnPropertyDescriptor,
      getOwnPropertyNames = $__1.getOwnPropertyNames,
      isPrivateName = $__1.isPrivateName,
      keys = $__1.keys;
  function is(left, right) {
    if (left === right)
      return left !== 0 || 1 / left === 1 / right;
    return left !== left && right !== right;
  }
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      var props = source == null ? [] : keys(source);
      var p,
          length = props.length;
      for (p = 0; p < length; p++) {
        var name = props[p];
        if (isPrivateName(name))
          continue;
        target[name] = source[name];
      }
    }
    return target;
  }
  function mixin(target, source) {
    var props = getOwnPropertyNames(source);
    var p,
        descriptor,
        length = props.length;
    for (p = 0; p < length; p++) {
      var name = props[p];
      if (isPrivateName(name))
        continue;
      descriptor = getOwnPropertyDescriptor(source, props[p]);
      defineProperty(target, props[p], descriptor);
    }
    return target;
  }
  function polyfillObject(global) {
    var Object = global.Object;
    maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
  }
  registerPolyfill(polyfillObject);
  return {
    get is() {
      return is;
    },
    get assign() {
      return assign;
    },
    get mixin() {
      return mixin;
    },
    get polyfillObject() {
      return polyfillObject;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Number.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isNumber = $__0.isNumber,
      maybeAddConsts = $__0.maybeAddConsts,
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill,
      toInteger = $__0.toInteger;
  var $abs = Math.abs;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
  var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
  var EPSILON = Math.pow(2, -52);
  function NumberIsFinite(number) {
    return isNumber(number) && $isFinite(number);
  }
  ;
  function isInteger(number) {
    return NumberIsFinite(number) && toInteger(number) === number;
  }
  function NumberIsNaN(number) {
    return isNumber(number) && $isNaN(number);
  }
  ;
  function isSafeInteger(number) {
    if (NumberIsFinite(number)) {
      var integral = toInteger(number);
      if (integral === number)
        return $abs(integral) <= MAX_SAFE_INTEGER;
    }
    return false;
  }
  function polyfillNumber(global) {
    var Number = global.Number;
    maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
    maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
  }
  registerPolyfill(polyfillNumber);
  return {
    get MAX_SAFE_INTEGER() {
      return MAX_SAFE_INTEGER;
    },
    get MIN_SAFE_INTEGER() {
      return MIN_SAFE_INTEGER;
    },
    get EPSILON() {
      return EPSILON;
    },
    get isFinite() {
      return NumberIsFinite;
    },
    get isInteger() {
      return isInteger;
    },
    get isNaN() {
      return NumberIsNaN;
    },
    get isSafeInteger() {
      return isSafeInteger;
    },
    get polyfillNumber() {
      return polyfillNumber;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js";
  var polyfillAll = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").polyfillAll;
  polyfillAll(Reflect.global);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
    polyfillAll(global);
  };
  return {};
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js" + '');

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":43,"path":42}]},{},[44,1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RhYzYvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL3Rlc3RzL3Rlc3RzLmpzIiwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9hdWRpby1jb250ZXh0L2FjLW1vbmtleXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL2F1ZGlvLWNvbnRleHQvYXVkaW8tY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NoYWkvbGliL2NoYWkuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS9hc3NlcnRpb24uanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS9jb25maWcuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS9jb3JlL2Fzc2VydGlvbnMuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS9pbnRlcmZhY2UvYXNzZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2NoYWkvbGliL2NoYWkvaW50ZXJmYWNlL2V4cGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL2xpYi9jaGFpL2ludGVyZmFjZS9zaG91bGQuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9hZGRDaGFpbmFibGVNZXRob2QuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9hZGRNZXRob2QuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9hZGRQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL2xpYi9jaGFpL3V0aWxzL2ZsYWcuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9nZXRBY3R1YWwuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9nZXRFbnVtZXJhYmxlUHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL2xpYi9jaGFpL3V0aWxzL2dldE1lc3NhZ2UuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9nZXROYW1lLmpzIiwibm9kZV9tb2R1bGVzL2NoYWkvbGliL2NoYWkvdXRpbHMvZ2V0UGF0aFZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL2NoYWkvbGliL2NoYWkvdXRpbHMvZ2V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL2xpYi9jaGFpL3V0aWxzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NoYWkvbGliL2NoYWkvdXRpbHMvaW5zcGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL2xpYi9jaGFpL3V0aWxzL29iakRpc3BsYXkuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9vdmVyd3JpdGVDaGFpbmFibGVNZXRob2QuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9vdmVyd3JpdGVNZXRob2QuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy9vdmVyd3JpdGVQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL2xpYi9jaGFpL3V0aWxzL3Rlc3QuanMiLCJub2RlX21vZHVsZXMvY2hhaS9saWIvY2hhaS91dGlscy90cmFuc2ZlckZsYWdzLmpzIiwibm9kZV9tb2R1bGVzL2NoYWkvbGliL2NoYWkvdXRpbHMvdHlwZS5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL25vZGVfbW9kdWxlcy9hc3NlcnRpb24tZXJyb3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2hhaS9ub2RlX21vZHVsZXMvZGVlcC1lcWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2hhaS9ub2RlX21vZHVsZXMvZGVlcC1lcWwvbGliL2VxbC5qcyIsIm5vZGVfbW9kdWxlcy9jaGFpL25vZGVfbW9kdWxlcy9kZWVwLWVxbC9ub2RlX21vZHVsZXMvdHlwZS1kZXRlY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2hhaS9ub2RlX21vZHVsZXMvZGVlcC1lcWwvbm9kZV9tb2R1bGVzL3R5cGUtZGV0ZWN0L2xpYi90eXBlLmpzIiwibm9kZV9tb2R1bGVzL2tkdC9pbmRleC5qcyIsIi4uL3RhYzYvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIi4uL3RhYzYvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIuLi90YWM2L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCIuLi90YWM2L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzLWFycmF5L2luZGV4LmpzIiwiLi4vdGFjNi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwiLi4vdGFjNi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiLi4vdGFjNi9ub2RlX21vZHVsZXMvZXM2aWZ5L25vZGVfbW9kdWxlcy90cmFjZXVyL2Jpbi90cmFjZXVyLXJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUFBLEFBQUksRUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQzFCLEFBQUksRUFBQSxDQUFBLFlBQVcsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLGVBQWMsQ0FBQyxDQUFDO0FBQzNDLEFBQUksRUFBQSxDQUFBLFdBQVUsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLHdCQUF1QixDQUFDLENBQUE7QUFDbEQsQUFBSSxFQUFBLENBQUEsTUFBSyxFQUFJLENBQUEsSUFBRyxPQUFPLENBQUM7QUFJeEIsQUFBSSxFQUFBLENBQUEsVUFBUyxFQUFJLENBQUEsWUFBVyxZQUFZLENBQUM7QUFHekMsT0FBUyxhQUFXLENBQUUsR0FBRSxDQUFHLENBQUEsR0FBRSxDQUFHO0FBQzlCLE9BQU8sQ0FBQSxJQUFHLE1BQU0sQUFBQyxDQUFDLElBQUcsT0FBTyxBQUFDLEVBQUMsQ0FBQSxDQUFJLEVBQUMsR0FBRSxFQUFJLElBQUUsQ0FBQSxDQUFJLEVBQUEsQ0FBQyxDQUFDLENBQUEsQ0FBSSxJQUFFLENBQUM7QUFDMUQ7QUFBQSxBQUVBLE9BQU8sQUFBQyxDQUFDLG1CQUFrQixDQUFHLFVBQVEsQUFBQyxDQUFFO0FBRXZDLEtBQUcsT0FBTyxFQUFJLENBQUEsWUFBVyxhQUFhLEFBQUMsQ0FBQyxDQUFBLENBQUcsSUFBRSxDQUFHLE1BQUksQ0FBQyxDQUFDO0FBQ3RELEtBQUcsS0FBSyxFQUFJLENBQUEsSUFBRyxPQUFPLGVBQWUsQUFBQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ3pDLE1BQVMsR0FBQSxDQUFBLENBQUEsRUFBSSxFQUFBLENBQUcsQ0FBQSxDQUFBLEVBQUksQ0FBQSxJQUFHLEtBQUssT0FBTyxDQUFHLENBQUEsQ0FBQSxFQUFFLENBQUc7QUFDekMsT0FBRyxLQUFLLENBQUUsQ0FBQSxDQUFDLEVBQUksQ0FBQSxDQUFDLElBQUcsT0FBTyxBQUFDLEVBQUMsQ0FBQSxDQUFJLElBQUUsQ0FBQyxFQUFJLEVBQUEsQ0FBQztFQUMxQztBQUFBLEFBRUksSUFBQSxDQUFBLGlCQUFnQixFQUFJLENBQUEsWUFBVyxBQUFDLENBQUMsR0FBRSxDQUFFLElBQUUsQ0FBQyxDQUFDO0FBQzdDLEtBQUcsTUFBTSxFQUFJLEdBQUMsQ0FBQztBQUNmLE1BQVMsR0FBQSxDQUFBLENBQUEsRUFBSSxFQUFBLENBQUcsQ0FBQSxDQUFBLEVBQUksa0JBQWdCLENBQUcsQ0FBQSxDQUFBLEVBQUUsQ0FBRTtBQUN6QyxBQUFJLE1BQUEsQ0FBQSxHQUFFLEVBQUksY0FBWSxDQUFDO0FBQ3ZCLEFBQUksTUFBQSxDQUFBLEdBQUUsRUFBSTtBQUNSLFlBQU0sQ0FBRyxDQUFBLFlBQVcsQUFBQyxDQUFDLENBQUEsQ0FBRSxHQUFDLENBQUM7QUFDMUIsY0FBUSxDQUFHLENBQUEsWUFBVyxBQUFDLENBQUMsQ0FBQSxDQUFFLEdBQUMsQ0FBQztBQUM1QixhQUFPLENBQUcsQ0FBQSxZQUFXLEFBQUMsQ0FBQyxDQUFBLENBQUUsRUFBQSxDQUFDO0FBQzFCLFFBQUUsQ0FBRyxJQUFFO0FBQ1AsV0FBSyxDQUFHLENBQUEsSUFBRyxPQUFPO0FBQUEsSUFDcEIsQ0FBQztBQUNELE9BQUcsTUFBTSxLQUFLLEFBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztFQUN0QjtBQUFBLEFBRUksSUFBQSxDQUFBLElBQUcsRUFBSSxLQUFHLENBQUM7QUFDZixLQUFHLFlBQVksRUFBSSxJQUFJLFlBQVUsQUFBQyxFQUFDLENBQUM7QUFDcEMsS0FBRyxZQUFZLFFBQVEsQUFBQyxDQUFDLFVBQVMsQ0FBQyxDQUFDO0FBRXBDLEdBQUMsQUFBQyxDQUFDLG1DQUFrQyxDQUFHLFVBQVEsQUFBQyxDQUFDO0FBQ2hELE9BQUcsWUFBWSxZQUFZLEVBQUksQ0FBQSxJQUFHLE1BQU0sQ0FBQztBQUN6QyxTQUFLLE1BQU0sQUFBQyxDQUFDLElBQUcsWUFBWSxZQUFZLENBQUcsQ0FBQSxJQUFHLE1BQU0sQ0FBQyxDQUFDO0VBQ3hELENBQUMsQ0FBQztBQUVGLEdBQUMsQUFBQyxDQUFDLG1DQUFrQyxDQUFHLFVBQVEsQUFBQyxDQUFDO0FBQ2hELE9BQUcsWUFBWSxZQUFZLEFBQUMsQ0FBQyxDQUFBLENBQUcsRUFBQSxDQUFHLEVBQUEsQ0FBQyxDQUFDO0FBQ3JDLFNBQUssTUFBTSxBQUFDLENBQUMsSUFBRyxZQUFZLGNBQWMsQUFBQyxFQUFDLENBQUcsS0FBRyxDQUFDLENBQUM7RUFDdEQsQ0FBQyxDQUFDO0FBRUYsR0FBQyxBQUFDLENBQUMsK0JBQThCLENBQUcsVUFBUSxBQUFDLENBQUM7QUFDNUMsT0FBRyxZQUFZLFlBQVksQUFBQyxDQUFDLEVBQUMsQ0FBRyxHQUFDLENBQUcsR0FBQyxDQUFDLENBQUM7QUFDeEMsQUFBSSxNQUFBLENBQUEsS0FBSSxFQUFJLENBQUEsSUFBRyxZQUFZLG1CQUFtQixBQUFDLENBQUMsRUFBQyxDQUFHLEdBQUMsQ0FBRyxHQUFDLENBQUMsQ0FBQztBQUMzRCxTQUFLLE1BQU0sQUFBQyxDQUFDLElBQUcsWUFBWSxZQUFZLEFBQUMsRUFBQyxRQUFRLENBQUcsQ0FBQSxLQUFJLFFBQVEsQ0FBQyxDQUFDO0FBQ25FLFNBQUssTUFBTSxBQUFDLENBQUMsSUFBRyxZQUFZLFlBQVksQUFBQyxFQUFDLFVBQVUsQ0FBRyxDQUFBLEtBQUksVUFBVSxDQUFDLENBQUM7QUFDdkUsU0FBSyxNQUFNLEFBQUMsQ0FBQyxJQUFHLFlBQVksWUFBWSxBQUFDLEVBQUMsU0FBUyxDQUFHLENBQUEsS0FBSSxTQUFTLENBQUMsQ0FBQztFQUN2RSxDQUFDLENBQUM7QUFFRixHQUFDLEFBQUMsQ0FBQyx5Q0FBd0MsQ0FBRyxVQUFRLEFBQUMsQ0FBQztBQUN0RCxPQUFHLFlBQVkscUJBQXFCLEFBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUN6QyxTQUFLLE1BQU0sQUFBQyxDQUFDLElBQUcsWUFBWSxxQkFBcUIsQUFBQyxFQUFDLENBQUcsR0FBQyxDQUFDLENBQUM7RUFDM0QsQ0FBQyxDQUFDO0FBRUosQ0FBQyxDQUFDO0FBQ0Y7Ozs7QUNoRUE7QUFBQSxXQUFXLENBQUM7QUFDWixBQUFJLEVBQUEsQ0FBQSw0QkFBMkIsRUFBSSxDQUFBLENBQUMsUUFBTyxBQUFDLENBQUMsYUFBWSxDQUFDLENBQUMsQUFBQyxFQUFDLENBQUM7QUFDOUQsR0FBSSxDQUFDLDRCQUEyQixhQUFhLENBQUc7QUFBRSw2QkFBMkIsYUFBYSxFQUFJLEdBQUMsQ0FBQztBQUFFO0FBQUEsQUFDbEcsMkJBQTJCLEVBQUksQ0FBQSw0QkFBMkIsYUFBYSxDQUFDO0FBQ3hFLEdBQUksQ0FBQyxDQUFDLDRCQUEyQixDQUFFLCtEQUE4RCxDQUFDLENBQUMsQ0FBRztBQUNuRyw2QkFBMkIsQ0FBRSwrREFBOEQsQ0FBQyxFQUFJO0FBQUMsU0FBSyxDQUFFLGdFQUE4RDtBQUFFLE1BQUUsQ0FBRTtBQUFDLFFBQUUsQ0FBRSxFQUFBO0FBQUUsUUFBRSxDQUFFLEVBQUE7QUFBRSxRQUFFLENBQUUsRUFBQTtBQUFFLFFBQUUsQ0FBRSxFQUFBO0FBQUUsUUFBRSxDQUFFLEVBQUE7QUFBRSxRQUFFLENBQUUsRUFBQTtBQUFFLFFBQUUsQ0FBRSxFQUFBO0FBQUUsUUFBRSxDQUFFLEVBQUE7QUFBRSxRQUFFLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFVBQUksQ0FBRSxFQUFBO0FBQUUsVUFBSSxDQUFFLEVBQUE7QUFBRSxVQUFJLENBQUUsRUFBQTtBQUFFLFVBQUksQ0FBRSxFQUFBO0FBQUUsVUFBSSxDQUFFLEVBQUE7QUFBRSxVQUFJLENBQUUsRUFBQTtBQUFFLFVBQUksQ0FBRSxFQUFBO0FBQUUsVUFBSSxDQUFFLEVBQUE7QUFBRSxVQUFJLENBQUUsRUFBQTtBQUFFLFVBQUksQ0FBRSxFQUFBO0FBQUUsVUFBSSxDQUFFLEVBQUE7QUFBRSxVQUFJLENBQUUsRUFBQTtBQUFFLFVBQUksQ0FBRSxFQUFBO0FBQUUsVUFBSSxDQUFFLEVBQUE7QUFBRSxVQUFJLENBQUUsRUFBQTtBQUFFLFVBQUksQ0FBRSxFQUFBO0FBQUUsVUFBSSxDQUFFLEVBQUE7QUFBQSxJQUFDO0FBQUUsTUFBRSxDQUFFO0FBQUMsUUFBRSxDQUFFLEVBQUMsQ0FBQSxDQUFFLEVBQUEsQ0FBQztBQUFFLFFBQUUsQ0FBRSxFQUFDLENBQUEsQ0FBRSxFQUFBLENBQUM7QUFBRSxRQUFFLENBQUUsRUFBQyxDQUFBLENBQUUsRUFBQSxDQUFDO0FBQUUsUUFBRSxDQUFFLEVBQUMsQ0FBQSxDQUFFLEVBQUEsQ0FBRSxFQUFBLENBQUM7QUFBRSxRQUFFLENBQUUsRUFBQyxDQUFBLENBQUUsRUFBQSxDQUFDO0FBQUUsUUFBRSxDQUFFLEVBQUMsQ0FBQSxDQUFFLEVBQUEsQ0FBQztBQUFFLFFBQUUsQ0FBRSxFQUFDLENBQUEsQ0FBRSxFQUFBLENBQUM7QUFBRSxRQUFFLENBQUUsRUFBQyxDQUFBLENBQUUsRUFBQSxDQUFDO0FBQUUsUUFBRSxDQUFFLEVBQUMsQ0FBQSxDQUFFLEVBQUEsQ0FBQztBQUFFLFNBQUcsQ0FBRSxFQUFDLENBQUEsQ0FBRSxFQUFBLENBQUM7QUFBQSxJQUFDO0FBQUUsTUFBRSxDQUFFO0FBQUMsUUFBRSxDQUFFLEVBQUE7QUFBRSxRQUFFLENBQUUsRUFBQTtBQUFFLFFBQUUsQ0FBRSxFQUFBO0FBQUUsUUFBRSxDQUFFLEVBQUE7QUFBRSxRQUFFLENBQUUsRUFBQTtBQUFFLFFBQUUsQ0FBRSxFQUFBO0FBQUUsUUFBRSxDQUFFLEVBQUE7QUFBRSxRQUFFLENBQUUsRUFBQTtBQUFFLFFBQUUsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUUsU0FBRyxDQUFFLEVBQUE7QUFBRSxTQUFHLENBQUUsRUFBQTtBQUFFLFNBQUcsQ0FBRSxFQUFBO0FBQUEsSUFBQztBQUFFLFVBQU0sQ0FBRTtBQUFDLFFBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBRSxjQUFZO0FBQUUsYUFBSyxDQUFFLEVBQUE7QUFBRSxZQUFJLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLEdBQUM7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLEdBQUM7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBRSxRQUFFLENBQUU7QUFBQyxhQUFLLENBQUUsZ0JBQWM7QUFBRSxhQUFLLENBQUUsR0FBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsR0FBQztBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsR0FBQztBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFFLFFBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBRSxnQkFBYztBQUFFLGFBQUssQ0FBRSxHQUFDO0FBQUUsWUFBSSxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxHQUFDO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxHQUFDO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsYUFBSyxDQUFFLGdCQUFjO0FBQUUsYUFBSyxDQUFFLEdBQUM7QUFBRSxZQUFJLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLEdBQUM7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLEdBQUM7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBRSxRQUFFLENBQUU7QUFBQyxhQUFLLENBQUUsZ0JBQWM7QUFBRSxhQUFLLENBQUUsR0FBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsR0FBQztBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsR0FBQztBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFFLFFBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBRSxnQkFBYztBQUFFLGFBQUssQ0FBRSxHQUFDO0FBQUUsWUFBSSxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsYUFBSyxDQUFFLGdCQUFjO0FBQUUsYUFBSyxDQUFFLEdBQUM7QUFBRSxZQUFJLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBRSxRQUFFLENBQUU7QUFBQyxhQUFLLENBQUUsZ0JBQWM7QUFBRSxhQUFLLENBQUUsR0FBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFFLFFBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBRSxnQkFBYztBQUFFLGFBQUssQ0FBRSxHQUFDO0FBQUUsWUFBSSxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsYUFBSyxDQUFFLGlCQUFlO0FBQUUsYUFBSyxDQUFFLElBQUU7QUFBRSxZQUFJLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBRSxTQUFHLENBQUU7QUFBQyxhQUFLLENBQUUsaUJBQWU7QUFBRSxhQUFLLENBQUUsSUFBRTtBQUFFLFlBQUksQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFFLFNBQUcsQ0FBRTtBQUFDLGFBQUssQ0FBRSxpQkFBZTtBQUFFLGFBQUssQ0FBRSxJQUFFO0FBQUUsWUFBSSxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsYUFBSyxDQUFFLGlCQUFlO0FBQUUsYUFBSyxDQUFFLElBQUU7QUFBRSxZQUFJLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBRSxTQUFHLENBQUU7QUFBQyxhQUFLLENBQUUsaUJBQWU7QUFBRSxhQUFLLENBQUUsSUFBRTtBQUFFLFlBQUksQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFFLFNBQUcsQ0FBRTtBQUFDLGFBQUssQ0FBRSxpQkFBZTtBQUFFLGFBQUssQ0FBRSxJQUFFO0FBQUUsWUFBSSxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsYUFBSyxDQUFFLGlCQUFlO0FBQUUsYUFBSyxDQUFFLElBQUU7QUFBRSxZQUFJLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBRSxTQUFHLENBQUU7QUFBQyxhQUFLLENBQUUsaUJBQWU7QUFBRSxhQUFLLENBQUUsSUFBRTtBQUFFLFlBQUksQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFFLFNBQUcsQ0FBRTtBQUFDLGFBQUssQ0FBRSxpQkFBZTtBQUFFLGFBQUssQ0FBRSxJQUFFO0FBQUUsWUFBSSxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsYUFBSyxDQUFFLHNCQUFvQjtBQUFFLGFBQUssQ0FBRSxJQUFFO0FBQUUsWUFBSSxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsYUFBSyxDQUFFLGlCQUFlO0FBQUUsYUFBSyxDQUFFLElBQUU7QUFBRSxZQUFJLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBRSxTQUFHLENBQUU7QUFBQyxhQUFLLENBQUUsaUJBQWU7QUFBRSxhQUFLLENBQUUsSUFBRTtBQUFFLFlBQUksQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFFLFNBQUcsQ0FBRTtBQUFDLGFBQUssQ0FBRSxpQkFBZTtBQUFFLGFBQUssQ0FBRSxJQUFFO0FBQUUsWUFBSSxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsYUFBSyxDQUFFLGlCQUFlO0FBQUUsYUFBSyxDQUFFLElBQUU7QUFBRSxZQUFJLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBRSxTQUFHLENBQUU7QUFBQyxhQUFLLENBQUUsaUJBQWU7QUFBRSxhQUFLLENBQUUsSUFBRTtBQUFFLFlBQUksQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBRSxpQkFBYSxDQUFFO0FBQUMsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsZUFBSyxDQUFFLEVBQUE7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBQSxRQUFDO0FBQUUsWUFBSSxDQUFFO0FBQUMsZUFBSyxDQUFFLEVBQUE7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBQSxRQUFDO0FBQUUsYUFBSyxDQUFFLEtBQUc7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsZUFBSyxDQUFFLEVBQUE7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBQSxRQUFDO0FBQUUsWUFBSSxDQUFFO0FBQUMsZUFBSyxDQUFFLEVBQUE7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBQSxRQUFDO0FBQUUsYUFBSyxDQUFFLEtBQUc7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLElBQUU7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsR0FBQztBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLEdBQUM7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsR0FBQztBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLElBQUU7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLElBQUU7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLElBQUU7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsZUFBSyxDQUFFLEVBQUE7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBQSxRQUFDO0FBQUUsWUFBSSxDQUFFO0FBQUMsZUFBSyxDQUFFLEVBQUE7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBQSxRQUFDO0FBQUUsYUFBSyxDQUFFLEtBQUc7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsU0FBRyxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsZUFBSyxDQUFFLEVBQUE7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBQSxRQUFDO0FBQUUsWUFBSSxDQUFFO0FBQUMsZUFBSyxDQUFFLEVBQUE7QUFBRSxpQkFBTyxDQUFFLEVBQUE7QUFBQSxRQUFDO0FBQUUsYUFBSyxDQUFFLEtBQUc7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxDQUFFO0FBQUMsY0FBTSxDQUFFO0FBQUMsaUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxlQUFLLENBQUUsSUFBRTtBQUFFLGlCQUFPLENBQUUsRUFBQTtBQUFFLGVBQUssQ0FBRSxLQUFHO0FBQUEsUUFBQztBQUFFLFlBQUksQ0FBRTtBQUFDLGlCQUFPLENBQUUsZ0VBQThEO0FBQUUsZUFBSyxDQUFFLElBQUU7QUFBRSxpQkFBTyxDQUFFLEdBQUM7QUFBRSxlQUFLLENBQUUsS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFFLGNBQVUsQ0FBRTtBQUFDLFFBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBRSxHQUFDO0FBQUUsYUFBSyxDQUFFLEtBQUc7QUFBRSxrQkFBVSxDQUFFLEVBQUM7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUM7QUFBRSxRQUFFLENBQUU7QUFBQyxhQUFLLENBQUUsR0FBQztBQUFFLGFBQUssQ0FBRSxjQUFZO0FBQUUsa0JBQVUsQ0FBRSxFQUFDO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUMsQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsR0FBQztBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsYUFBSyxDQUFFLEdBQUM7QUFBRSxhQUFLLENBQUUsS0FBRztBQUFFLGtCQUFVLENBQUUsRUFBQztBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQztBQUFFLFFBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBRSxHQUFDO0FBQUUsYUFBSyxDQUFFLGNBQVk7QUFBRSxrQkFBVSxDQUFFLEVBQUM7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxJQUFFO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUMsQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsSUFBRTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsSUFBRTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsYUFBSyxDQUFFLEdBQUM7QUFBRSxhQUFLLENBQUUsS0FBRztBQUFFLGtCQUFVLENBQUUsRUFBQztBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQztBQUFFLFFBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBRSxHQUFDO0FBQUUsYUFBSyxDQUFFLEtBQUc7QUFBRSxrQkFBVSxDQUFFLEVBQUM7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEdBQUM7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxHQUFDO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUM7QUFBRSxRQUFFLENBQUU7QUFBQyxhQUFLLENBQUUsR0FBQztBQUFFLGFBQUssQ0FBRSxLQUFHO0FBQUUsa0JBQVUsQ0FBRSxFQUFDO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUMsQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDO0FBQUUsUUFBRSxDQUFFO0FBQUMsYUFBSyxDQUFFLEdBQUM7QUFBRSxhQUFLLENBQUUsS0FBRztBQUFFLGtCQUFVLENBQUUsRUFBQztBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLENBQUU7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQztBQUFFLFFBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBRSxJQUFFO0FBQUUsYUFBSyxDQUFFLEtBQUc7QUFBRSxrQkFBVSxDQUFFLEVBQUM7QUFBQyxnQkFBTSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUUsY0FBSSxDQUFFO0FBQUMsbUJBQU8sQ0FBRSxnRUFBOEQ7QUFBRSxpQkFBSyxDQUFFLElBQUU7QUFBRSxtQkFBTyxDQUFFLEVBQUE7QUFBRSxpQkFBSyxDQUFFLEtBQUc7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFFO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUM7QUFBRSxTQUFHLENBQUU7QUFBQyxhQUFLLENBQUUsSUFBRTtBQUFFLGFBQUssQ0FBRSxLQUFHO0FBQUUsa0JBQVUsQ0FBRSxFQUFDO0FBQUMsZ0JBQU0sQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFFLGNBQUksQ0FBRTtBQUFDLG1CQUFPLENBQUUsZ0VBQThEO0FBQUUsaUJBQUssQ0FBRSxJQUFFO0FBQUUsbUJBQU8sQ0FBRSxFQUFBO0FBQUUsaUJBQUssQ0FBRSxLQUFHO0FBQUEsVUFBQztBQUFBLFFBQUMsQ0FBRTtBQUFDLGdCQUFNLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBRSxjQUFJLENBQUU7QUFBQyxtQkFBTyxDQUFFLGdFQUE4RDtBQUFFLGlCQUFLLENBQUUsSUFBRTtBQUFFLG1CQUFPLENBQUUsRUFBQTtBQUFFLGlCQUFLLENBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFBLEVBQUMsQ0FBQztBQUMvbnZDO0FBQUEsQUFDQSwyQkFBMkIsRUFBSSxDQUFBLDRCQUEyQixDQUFFLCtEQUE4RCxDQUFDLENBQUM7QUFDNUgsMkJBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUMsQUFBSSxFQUFBLENBQUEsR0FBRSxFQUFFLENBQUEsT0FBTSxBQUFDLENBQUMsS0FBSSxDQUFDLENBQUM7QUFBQywyQkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxFQUFFLENBQUM7QUFBQyxBQUFJLEVBQUEsQ0FBQSxZQUFXLEVBQUUsQ0FBQSxPQUFNLEFBQUMsQ0FBQyxlQUFjLENBQUMsQ0FBQztBQUFDLDJCQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLEVBQUUsQ0FBQztBQUFDLEFBQUksRUFBQSxDQUFBLFdBQVUsRUFBRSxTQUFTLFlBQVUsQ0FBQyxBQUFDLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxFQUFFLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxFQUFFLENBQUM7QUFBQyxLQUFHLFlBQVksRUFBRSxHQUFDLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxFQUFFLENBQUM7QUFBQyxLQUFHLGtCQUFrQixFQUFFLEVBQUEsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsS0FBSyxFQUFFLEVBQUMsQ0FBQSxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxTQUFTLEVBQUUsR0FBQyxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxhQUFhLEVBQUUsR0FBQyxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyw0QkFBNEIsRUFBRSxNQUFJLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxLQUFHLFdBQVcsRUFBRSxVQUFRLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxLQUFHLGtCQUFrQixFQUFFLENBQUEsRUFBQyxFQUFFLEtBQUcsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsTUFBTSxFQUFFLFVBQVEsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsY0FBYyxFQUFFLFVBQVEsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsbUJBQW1CLEVBQUUsVUFBUSxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxNQUFNLEVBQUUsQ0FBQSxZQUFXLFdBQVcsQUFBQyxFQUFDLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxLQUFHLGNBQWMsRUFBRSxJQUFJLG9CQUFrQixBQUFDLEVBQUMsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsY0FBYyxLQUFLLE1BQU0sRUFBRSxFQUFBLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxLQUFHLE1BQU0sUUFBUSxBQUFDLENBQUMsSUFBRyxjQUFjLE1BQU0sQ0FBQyxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxtQkFBbUIsRUFBRSxJQUFJLG9CQUFrQixBQUFDLEVBQUMsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsbUJBQW1CLEtBQUssTUFBTSxFQUFFLEVBQUEsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsTUFBTSxRQUFRLEFBQUMsQ0FBQyxJQUFHLG1CQUFtQixNQUFNLENBQUMsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLE9BQU8sS0FBRyxDQUFDO0FBQUMsQ0FBQztBQUFDLDJCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLGNBQWMsWUFBWSxBQUFDLENBQUMsV0FBVSxDQUFFO0FBQUMsUUFBTSxDQUFFLFVBQVMsSUFBRyxDQUFFO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxjQUFjLFFBQVEsQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxtQkFBbUIsUUFBUSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxTQUFPLEtBQUcsQ0FBQztFQUFDO0FBQUUsV0FBUyxDQUFFLFVBQVMsSUFBRyxDQUFFO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxjQUFjLFdBQVcsQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxtQkFBbUIsV0FBVyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxTQUFPLEtBQUcsQ0FBQztFQUFDO0FBQUUsSUFBSSxZQUFVLENBQUUsV0FBVSxDQUFFO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxZQUFZLEVBQUUsWUFBVSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxrQkFBa0IsRUFBRSxDQUFBLElBQUcsWUFBWSxPQUFPLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxRQUFRLEdBQUEsQ0FBQSxDQUFBLEVBQUUsRUFBQSxDQUFFLENBQUEsQ0FBQSxFQUFFLENBQUEsSUFBRyxrQkFBa0IsQ0FBRSxDQUFBLENBQUEsRUFBRSxDQUFFO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsQUFBSSxRQUFBLENBQUEsSUFBRyxFQUFFLENBQUEsSUFBRyxZQUFZLENBQUUsQ0FBQSxDQUFDLENBQUM7QUFBQyxpQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxBQUFJLFFBQUEsQ0FBQSxjQUFhLEVBQUUsQ0FBQSxJQUFHLFFBQVEsRUFBRSxDQUFBLElBQUcsR0FBRyxDQUFBLENBQUUsSUFBRSxDQUFDO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsQUFBSSxRQUFBLENBQUEsZ0JBQWUsRUFBRSxDQUFBLElBQUcsVUFBVSxFQUFFLENBQUEsSUFBRyxHQUFHLENBQUEsQ0FBRSxJQUFFLENBQUM7QUFBQyxpQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxBQUFJLFFBQUEsQ0FBQSxhQUFZLEVBQUUsQ0FBQSxJQUFHLHFCQUFxQixBQUFDLENBQUMsY0FBYSxDQUFFLGlCQUFlLENBQUUsQ0FBQSxJQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsU0FBRyxFQUFFLEVBQUUsQ0FBQSxhQUFZLEVBQUUsQ0FBQztBQUFDLGlDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQUcsRUFBRSxFQUFFLENBQUEsYUFBWSxFQUFFLENBQUM7QUFBQyxpQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxTQUFHLEVBQUUsRUFBRSxDQUFBLGFBQVksRUFBRSxDQUFDO0lBQUM7QUFBQSxBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLE9BQUcsS0FBSyxFQUFFLENBQUEsR0FBRSxhQUFhLEFBQUMsQ0FBQyxJQUFHLFlBQVksQ0FBRSxDQUFBLElBQUcsU0FBUyxDQUFFLEVBQUMsR0FBRSxDQUFFLElBQUUsQ0FBRSxJQUFFLENBQUMsQ0FBQyxDQUFDO0VBQUM7QUFBRSxJQUFJLFlBQVUsRUFBRztBQUFDLCtCQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLEVBQUUsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQU8sQ0FBQSxJQUFHLFlBQVksQ0FBQztFQUFDO0FBQUUsU0FBTyxDQUFFLFVBQVMsQ0FBQSxDQUFFLENBQUEsQ0FBQSxDQUFFO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsU0FBTyxDQUFBLElBQUcsSUFBSSxBQUFDLENBQUMsQ0FBQSxFQUFFLEVBQUUsQ0FBQSxDQUFBLEVBQUUsQ0FBRSxFQUFBLENBQUMsQ0FBQSxDQUFFLENBQUEsSUFBRyxJQUFJLEFBQUMsQ0FBQyxDQUFBLEVBQUUsRUFBRSxDQUFBLENBQUEsRUFBRSxDQUFFLEVBQUEsQ0FBQyxDQUFBLENBQUUsQ0FBQSxJQUFHLElBQUksQUFBQyxDQUFDLENBQUEsRUFBRSxFQUFFLENBQUEsQ0FBQSxFQUFFLENBQUUsRUFBQSxDQUFDLENBQUM7RUFBQztBQUFFLFlBQVUsQ0FBRSxVQUFTLE9BQU0sQ0FBRSxDQUFBLFNBQVEsQ0FBRSxDQUFBLFFBQU8sQ0FBRTtBQUFDLCtCQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLEVBQUUsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLE9BQUcsQ0FBQyw0QkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxDQUFFLENBQUEsQ0FBQyxFQUFFLENBQUUsQ0FBQSxTQUFRLE9BQU8sSUFBSSxFQUFyQixBQUFxQixDQUFDLEdBQUcsRUFBQyw0QkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxDQUFFLENBQUEsQ0FBQyxFQUFFLENBQUUsQ0FBQSxTQUFRLE9BQU8sSUFBSSxFQUFyQixBQUFxQixDQUFDLENBQUU7QUFBQyxpQ0FBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxDQUFFLENBQUEsQ0FBQyxFQUFFLENBQUM7QUFBQyxpQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxBQUFJLFFBQUEsQ0FBQSxlQUFjLEVBQUUsQ0FBQSxJQUFHLG1CQUFtQixBQUFDLENBQUMsT0FBTSxDQUFFLFVBQVEsQ0FBRSxTQUFPLENBQUMsQ0FBQztBQUFDLGlDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQUcsQ0FBQyw0QkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxDQUFFLENBQUEsQ0FBQyxFQUFFLENBQUUsQ0FBQSxlQUFjLFFBQVEsSUFBSSxDQUFBLElBQUcsU0FBUyxRQUF4QyxBQUFnRCxDQUFDLEdBQUcsRUFBQyw0QkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxDQUFFLENBQUEsQ0FBQyxFQUFFLENBQUUsQ0FBQSxlQUFjLFVBQVUsSUFBSSxDQUFBLElBQUcsU0FBUyxVQUExQyxBQUFvRCxDQUFDLENBQUEsRUFBRyxFQUFDLDRCQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBRSxDQUFBLGVBQWMsU0FBUyxJQUFJLENBQUEsSUFBRyxTQUFTLFNBQXpDLEFBQWtELENBQUMsQ0FBRTtBQUFDLG1DQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUFDLG1DQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFdBQUcsSUFBRyxjQUFjLEFBQUMsRUFBQyxDQUFBLEdBQUksS0FBRyxDQUFFO0FBQUMscUNBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsQ0FBRSxDQUFBLENBQUMsRUFBRSxDQUFDO0FBQUMscUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsYUFBRyxJQUFHLDRCQUE0QixJQUFJLEtBQUcsQ0FBRTtBQUFDLHVDQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUFDLHVDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLHdCQUFZLEFBQUMsQ0FBQyxJQUFHLFdBQVcsQ0FBQyxDQUFDO1VBQUMsS0FBSztBQUFDLHVDQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUFDLHVDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLGVBQUcsNEJBQTRCLEVBQUUsS0FBRyxDQUFDO1VBQUM7QUFBQSxBQUFDLHFDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLGFBQUcsYUFBYSxRQUFRLEVBQUUsQ0FBQSxlQUFjLFFBQVEsQ0FBQztBQUFDLHFDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLGFBQUcsYUFBYSxVQUFVLEVBQUUsQ0FBQSxlQUFjLFVBQVUsQ0FBQztBQUFDLHFDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLGFBQUcsYUFBYSxTQUFTLEVBQUUsQ0FBQSxlQUFjLFNBQVMsQ0FBQztBQUFDLHFDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLGFBQUcsV0FBVyxFQUFFLENBQUEsTUFBSyxZQUFZLEFBQUMsQ0FBQyxJQUFHLGdCQUFnQixLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBRSxNQUFJLENBQUMsQ0FBQztRQUFDLEtBQUs7QUFBQyxxQ0FBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxDQUFFLENBQUEsQ0FBQyxFQUFFLENBQUM7QUFBQyxxQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxhQUFHLGFBQWEsUUFBUSxFQUFFLENBQUEsZUFBYyxRQUFRLENBQUM7QUFBQyxxQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxhQUFHLGFBQWEsVUFBVSxFQUFFLENBQUEsZUFBYyxVQUFVLENBQUM7QUFBQyxxQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxhQUFHLGFBQWEsU0FBUyxFQUFFLENBQUEsZUFBYyxTQUFTLENBQUM7QUFBQyxxQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxhQUFHLG9CQUFvQixBQUFDLEVBQUMsQ0FBQztRQUFDO0FBQUEsQUFBQyxtQ0FBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxhQUFPLEtBQUcsQ0FBQztNQUFDLEtBQUs7QUFBQyxtQ0FBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxDQUFFLENBQUEsQ0FBQyxFQUFFLENBQUM7TUFBQztBQUFBLElBQUMsS0FBSztBQUFDLGlDQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQztJQUFDO0FBQUEsRUFBQztBQUFFLGNBQVksQ0FBRSxVQUFRLEFBQUMsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLEVBQUUsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLE9BQUcsSUFBRyxjQUFjLEtBQUssTUFBTSxJQUFJLEVBQUEsQ0FBRTtBQUFDLGlDQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUFDLGlDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFdBQU8sS0FBRyxDQUFDO0lBQUMsS0FBSztBQUFDLGlDQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUFDLGlDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFdBQU8sTUFBSSxDQUFDO0lBQUM7QUFBQSxFQUFDO0FBQUUsb0JBQWtCLENBQUUsVUFBUSxBQUFDLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLEdBQUUsQ0FBQyxFQUFFLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLFNBQVMsUUFBUSxFQUFFLENBQUEsSUFBRyxhQUFhLFFBQVEsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLE9BQUcsU0FBUyxVQUFVLEVBQUUsQ0FBQSxJQUFHLGFBQWEsVUFBVSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxTQUFTLFNBQVMsRUFBRSxDQUFBLElBQUcsYUFBYSxTQUFTLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLG1CQUFtQixPQUFPLEVBQUUsQ0FBQSxJQUFHLFFBQVEsQUFBQyxDQUFDLElBQUcsU0FBUyxRQUFRLENBQUUsQ0FBQSxJQUFHLFNBQVMsVUFBVSxDQUFFLENBQUEsSUFBRyxTQUFTLFNBQVMsQ0FBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxZQUFZLEFBQUMsRUFBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsQUFBSSxNQUFBLENBQUEsTUFBSyxFQUFFLENBQUEsSUFBRyxjQUFjLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLGNBQWMsRUFBRSxDQUFBLElBQUcsbUJBQW1CLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLG1CQUFtQixFQUFFLE9BQUssQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLE9BQUcsSUFBRyw0QkFBNEIsQ0FBRTtBQUFDLGlDQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUFDLGlDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQUcsNEJBQTRCLEVBQUUsTUFBSSxDQUFDO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsa0JBQVksQUFBQyxDQUFDLElBQUcsV0FBVyxDQUFDLENBQUM7SUFBQyxLQUFLO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsQ0FBRSxDQUFBLENBQUMsRUFBRSxDQUFDO0lBQUM7QUFBQSxFQUFDO0FBQUUscUJBQW1CLENBQUUsVUFBUyxRQUFPLENBQUU7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLFFBQU8sQ0FBRTtBQUFDLGlDQUEyQixFQUFFLENBQUUsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQztBQUFDLGlDQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQUcsa0JBQWtCLEVBQUUsQ0FBQSxRQUFPLEVBQUUsS0FBRyxDQUFDO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsV0FBTyxLQUFHLENBQUM7SUFBQyxLQUFLO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxHQUFFLENBQUMsQ0FBRSxDQUFBLENBQUMsRUFBRSxDQUFDO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsVUFBSyxrQ0FBZ0MsQ0FBQztJQUFDO0FBQUEsRUFBQztBQUFFLHFCQUFtQixDQUFFLFVBQVEsQUFBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsU0FBTyxDQUFBLElBQUcsa0JBQWtCLEVBQUUsS0FBRyxDQUFDO0VBQUM7QUFBRSxZQUFVLENBQUUsVUFBUSxBQUFDLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxTQUFPLENBQUEsSUFBRyxTQUFTLENBQUM7RUFBQztBQUFFLFlBQVUsQ0FBRSxVQUFRLEFBQUMsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEFBQUksTUFBQSxDQUFBLGFBQVksRUFBRSxLQUFHLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLGNBQWMsS0FBSyxlQUFlLEFBQUMsQ0FBQyxDQUFBLENBQUUsQ0FBQSxZQUFXLFlBQVksRUFBRSxjQUFZLENBQUMsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLE9BQUcsY0FBYyxLQUFLLHdCQUF3QixBQUFDLENBQUMsQ0FBQSxDQUFFLENBQUEsWUFBVyxZQUFZLEVBQUUsY0FBWSxDQUFBLENBQUUsQ0FBQSxJQUFHLGtCQUFrQixDQUFDLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLG1CQUFtQixLQUFLLGVBQWUsQUFBQyxDQUFDLENBQUEsQ0FBRSxDQUFBLFlBQVcsWUFBWSxFQUFFLGNBQVksQ0FBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxtQkFBbUIsS0FBSyx3QkFBd0IsQUFBQyxDQUFDLENBQUEsQ0FBRSxDQUFBLFlBQVcsWUFBWSxFQUFFLGNBQVksQ0FBQSxDQUFFLENBQUEsSUFBRyxrQkFBa0IsQ0FBQyxDQUFDO0VBQUM7QUFBRSxRQUFNLENBQUUsVUFBUyxPQUFNLENBQUUsQ0FBQSxTQUFRLENBQUUsQ0FBQSxRQUFPLENBQUU7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxBQUFJLE1BQUEsQ0FBQSxPQUFNLEVBQUUsQ0FBQSxJQUFHLGdCQUFnQixBQUFDLENBQUMsT0FBTSxDQUFFLFVBQVEsQ0FBRSxTQUFPLENBQUMsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQU8sQ0FBQSxPQUFNLE9BQU8sQ0FBQztFQUFDO0FBQUUscUJBQW1CLENBQUUsVUFBUyxPQUFNLENBQUUsQ0FBQSxTQUFRLENBQUUsQ0FBQSxRQUFPLENBQUU7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxTQUFNO0FBQUMsTUFBQSxDQUFFLENBQUEsUUFBTyxFQUFFLENBQUEsSUFBRyxJQUFJLEFBQUMsQ0FBQyxPQUFNLENBQUM7QUFBRSxNQUFBLENBQUUsQ0FBQSxRQUFPLEVBQUUsQ0FBQSxJQUFHLElBQUksQUFBQyxDQUFDLE9BQU0sQ0FBQztBQUFFLE1BQUEsQ0FBRSxDQUFBLFFBQU8sRUFBRSxDQUFBLElBQUcsSUFBSSxBQUFDLENBQUMsU0FBUSxDQUFDO0FBQUEsSUFBQyxDQUFDO0VBQUM7QUFBRSxtQkFBaUIsQ0FBRSxVQUFTLE9BQU0sQ0FBRSxDQUFBLFNBQVEsQ0FBRSxDQUFBLFFBQU8sQ0FBRTtBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEFBQUksTUFBQSxDQUFBLE9BQU0sRUFBRSxDQUFBLElBQUcsZ0JBQWdCLEFBQUMsQ0FBQyxPQUFNLENBQUUsVUFBUSxDQUFFLFNBQU8sQ0FBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsU0FBTTtBQUFDLFlBQU0sQ0FBRSxDQUFBLE9BQU0sUUFBUTtBQUFFLGNBQVEsQ0FBRSxDQUFBLE9BQU0sVUFBVTtBQUFFLGFBQU8sQ0FBRSxDQUFBLE9BQU0sU0FBUztBQUFBLElBQUMsQ0FBQztFQUFDO0FBQUUsZ0JBQWMsQ0FBRSxVQUFTLE9BQU0sQ0FBRSxDQUFBLFNBQVEsQ0FBRSxDQUFBLFFBQU8sQ0FBRTtBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEFBQUksTUFBQSxDQUFBLGNBQWEsRUFBRSxDQUFBLE9BQU0sRUFBRSxDQUFBLElBQUcsR0FBRyxDQUFBLENBQUUsSUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsQUFBSSxNQUFBLENBQUEsZ0JBQWUsRUFBRSxDQUFBLFNBQVEsRUFBRSxDQUFBLElBQUcsR0FBRyxDQUFBLENBQUUsSUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsQUFBSSxNQUFBLENBQUEsY0FBYSxFQUFFLENBQUEsSUFBRyxxQkFBcUIsQUFBQyxDQUFDLGNBQWEsQ0FBRSxpQkFBZSxDQUFFLFNBQU8sQ0FBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsQUFBSSxNQUFBLENBQUEsT0FBTSxFQUFFLENBQUEsSUFBRyxLQUFLLFFBQVEsQUFBQyxDQUFDLGNBQWEsQ0FBRSxFQUFBLENBQUMsQ0FBRSxDQUFBLENBQUMsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQU8sQ0FBQSxPQUFNLENBQUUsQ0FBQSxDQUFDLENBQUM7RUFBQztBQUFFLGdCQUFjLENBQUUsVUFBUSxBQUFDLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLENBQUMsSUFBRyxjQUFjLEFBQUMsRUFBQyxDQUFFO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsQ0FBRSxDQUFBLENBQUMsRUFBRSxDQUFDO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsU0FBRyxvQkFBb0IsQUFBQyxFQUFDLENBQUM7SUFBQyxLQUFLO0FBQUMsaUNBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsQ0FBRSxDQUFBLENBQUMsRUFBRSxDQUFDO0lBQUM7QUFBQSxFQUFDO0FBQUEsQUFBQyxDQUFFLEdBQUMsQ0FBQyxDQUFDO0FBQUM7QUFBQywyQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQyxBQUFJLEVBQUEsQ0FBQSxtQkFBa0IsRUFBRSxTQUFTLG9CQUFrQixDQUFDLEFBQUMsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsU0FBUyxFQUFFLENBQUEsWUFBVyxXQUFXLEFBQUMsRUFBQyxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxTQUFTLEVBQUUsQ0FBQSxZQUFXLGdCQUFnQixBQUFDLEVBQUMsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsU0FBUyxVQUFVLEVBQUUsTUFBSSxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxTQUFTLFFBQVEsQUFBQyxDQUFDLElBQUcsU0FBUyxDQUFDLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLEtBQUksQ0FBQyxFQUFFLENBQUM7QUFBQyxLQUFHLGVBQWUsRUFBRSxDQUFBLFlBQVcsaUJBQWlCLEFBQUMsRUFBQyxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxtQkFBbUIsRUFBRSxDQUFBLFlBQVcsV0FBVyxBQUFDLEVBQUMsQ0FBQztBQUFDLDZCQUEyQixFQUFFLENBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUcsZUFBZSxRQUFRLEFBQUMsQ0FBQyxJQUFHLG1CQUFtQixDQUFDLENBQUM7QUFBQyw2QkFBMkIsRUFBRSxDQUFFLEtBQUksQ0FBQyxFQUFFLENBQUM7QUFBQyxLQUFHLG1CQUFtQixRQUFRLEFBQUMsQ0FBQyxJQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxtQkFBbUIsS0FBSyxNQUFNLEVBQUUsRUFBQSxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsS0FBRyxlQUFlLE1BQU0sQUFBQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQUMsNkJBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBTyxLQUFHLENBQUM7QUFBQyxDQUFDO0FBQUMsMkJBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsY0FBYyxZQUFZLEFBQUMsQ0FBQyxtQkFBa0IsQ0FBRTtBQUFDLElBQUksTUFBSSxFQUFHO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsU0FBTyxDQUFBLElBQUcsU0FBUyxDQUFDO0VBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRztBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQU8sQ0FBQSxJQUFHLFNBQVMsS0FBSyxDQUFDO0VBQUM7QUFBRSxJQUFJLE9BQUssQ0FBRSxLQUFJLENBQUU7QUFBQywrQkFBMkIsRUFBRSxDQUFFLElBQUcsQ0FBQyxFQUFFLENBQUM7QUFBQywrQkFBMkIsRUFBRSxDQUFFLEtBQUksQ0FBQyxFQUFFLENBQUM7QUFBQyxPQUFHLFNBQVMsT0FBTyxFQUFFLE1BQUksQ0FBQztFQUFDO0FBQUUsUUFBTSxDQUFFLFVBQVMsSUFBRyxDQUFFO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxJQUFHLENBQUMsRUFBRSxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsT0FBRyxTQUFTLFFBQVEsQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQUMsK0JBQTJCLEVBQUUsQ0FBRSxLQUFJLENBQUMsRUFBRSxDQUFDO0FBQUMsU0FBTyxLQUFHLENBQUM7RUFBQztBQUFFLFdBQVMsQ0FBRSxVQUFTLElBQUcsQ0FBRTtBQUFDLCtCQUEyQixFQUFFLENBQUUsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQztBQUFDLE9BQUcsU0FBUyxXQUFXLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUFDLCtCQUEyQixFQUFFLENBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQztBQUFDLFNBQU8sS0FBRyxDQUFDO0VBQUM7QUFBQSxBQUFDLENBQUUsR0FBQyxDQUFDLENBQUM7QUFBQztBQUFDLDJCQUEyQixFQUFFLENBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQztBQUFDLEtBQUssUUFBUSxFQUFFLFlBQVUsQ0FBQztBQUM3blg7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlJQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pRQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1aENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGNoYWkgPSByZXF1aXJlKCdjaGFpJyk7XG52YXIgYXVkaW9Db250ZXh0ID0gcmVxdWlyZShcImF1ZGlvLWNvbnRleHRcIik7XG52YXIgQmluYXVyYWxGSVIgPSByZXF1aXJlKCcuLi9iaW5hdXJhbC1maXIuZXM2LmpzJylcbnZhciBhc3NlcnQgPSBjaGFpLmFzc2VydDtcblxuXG4vLyBIZXJlIHdlIGNyZWF0ZSBhIGJ1ZmZlciB0byBiZSB1c2VkIGxhdGVyIHdpdGggb3VyIHBsYXllclxudmFyIHRhcmdldE5vZGUgPSBhdWRpb0NvbnRleHQuZGVzdGluYXRpb247XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmRlc2NyaWJlKFwiQmluYXVyYWxGSVIgdGVzdHNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5idWZmZXIgPSBhdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyKDEsIDUxMiwgNDQxMDApO1xuICB0aGlzLmRhdGEgPSB0aGlzLmJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmRhdGFbaV0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyO1xuICB9XG5cbiAgdmFyIG51bWJlck9mUG9zaXRpb25zID0gZ2V0UmFuZG9tSW50KDEwMCwyMDApO1xuICB0aGlzLmhydGZzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZQb3NpdGlvbnM7IGkrKyl7XG4gICAgdmFyIHVybCA9ICdmYWtlVVJMLndhdic7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGF6aW11dGg6IGdldFJhbmRvbUludCgwLDkwKSxcbiAgICAgIGVsZXZhdGlvbjogZ2V0UmFuZG9tSW50KDAsOTApLFxuICAgICAgZGlzdGFuY2U6IGdldFJhbmRvbUludCgxLDMpLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBidWZmZXI6IHRoaXMuYnVmZmVyXG4gICAgfTtcbiAgICB0aGlzLmhydGZzLnB1c2gob2JqKTtcbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5iaW5hdXJhbEZJUiA9IG5ldyBCaW5hdXJhbEZJUigpO1xuICBzZWxmLmJpbmF1cmFsRklSLmNvbm5lY3QodGFyZ2V0Tm9kZSk7XG5cbiAgaXQoJ3Nob3VsZCBzZXQgSFJURiBEYXRhU2V0IGNvcnJlY3RseScsIGZ1bmN0aW9uKCl7XG4gICAgc2VsZi5iaW5hdXJhbEZJUi5IUlRGRGF0YXNldCA9IHNlbGYuaHJ0ZnM7XG4gICAgYXNzZXJ0LmVxdWFsKHNlbGYuYmluYXVyYWxGSVIuSFJURkRhdGFzZXQsIHNlbGYuaHJ0ZnMpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGRldGVjdCB0aGF0IGlzIGNyb3NzZmFkaW5nJywgZnVuY3Rpb24oKXtcbiAgICBzZWxmLmJpbmF1cmFsRklSLnNldFBvc2l0aW9uKDAsIDAsIDEpO1xuICAgIGFzc2VydC5lcXVhbChzZWxmLmJpbmF1cmFsRklSLmlzQ3Jvc3NmYWRpbmcoKSwgdHJ1ZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgc2V0IHBvc2l0aW9uIGNvcnJlY3RseScsIGZ1bmN0aW9uKCl7XG4gICAgc2VsZi5iaW5hdXJhbEZJUi5zZXRQb3NpdGlvbigxMCwgMjAsIDMwKTtcbiAgICB2YXIgY29vcmQgPSBzZWxmLmJpbmF1cmFsRklSLmdldFJlYWxDb29yZGluYXRlcygxMCwgMjAsIDMwKTtcbiAgICBhc3NlcnQuZXF1YWwoc2VsZi5iaW5hdXJhbEZJUi5nZXRQb3NpdGlvbigpLmF6aW11dGgsIGNvb3JkLmF6aW11dGgpO1xuICAgIGFzc2VydC5lcXVhbChzZWxmLmJpbmF1cmFsRklSLmdldFBvc2l0aW9uKCkuZWxldmF0aW9uLCBjb29yZC5lbGV2YXRpb24pO1xuICAgIGFzc2VydC5lcXVhbChzZWxmLmJpbmF1cmFsRklSLmdldFBvc2l0aW9uKCkuZGlzdGFuY2UsIGNvb3JkLmRpc3RhbmNlKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBzZXQgY3Jvc3NmYWRlIGR1cmF0aW9uIGNvcnJlY3RseScsIGZ1bmN0aW9uKCl7XG4gICAgc2VsZi5iaW5hdXJhbEZJUi5zZXRDcm9zc2ZhZGVEdXJhdGlvbigzMCk7XG4gICAgYXNzZXJ0LmVxdWFsKHNlbGYuYmluYXVyYWxGSVIuZ2V0Q3Jvc3NmYWRlRHVyYXRpb24oKSwgMzApO1xuICB9KTtcblxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBID0gKEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKSgpO1xuaWYgKCFfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLl9fY292ZXJhZ2VfXykgeyBfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLl9fY292ZXJhZ2VfXyA9IHt9OyB9XG5fX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBID0gX19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5fX2NvdmVyYWdlX187XG5pZiAoIShfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBWycvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzJ10pKSB7XG4gICBfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBWycvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzJ10gPSB7XCJwYXRoXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJzXCI6e1wiMVwiOjAsXCIyXCI6MCxcIjNcIjowLFwiNFwiOjAsXCI1XCI6MCxcIjZcIjowLFwiN1wiOjAsXCI4XCI6MCxcIjlcIjowLFwiMTBcIjowLFwiMTFcIjowLFwiMTJcIjowLFwiMTNcIjowLFwiMTRcIjowLFwiMTVcIjowLFwiMTZcIjowLFwiMTdcIjowLFwiMThcIjowLFwiMTlcIjowLFwiMjBcIjowLFwiMjFcIjowLFwiMjJcIjowLFwiMjNcIjowLFwiMjRcIjowLFwiMjVcIjowLFwiMjZcIjowLFwiMjdcIjowLFwiMjhcIjowLFwiMjlcIjowLFwiMzBcIjowLFwiMzFcIjowLFwiMzJcIjowLFwiMzNcIjowLFwiMzRcIjowLFwiMzVcIjowLFwiMzZcIjowLFwiMzdcIjowLFwiMzhcIjowLFwiMzlcIjowLFwiNDBcIjowLFwiNDFcIjowLFwiNDJcIjowLFwiNDNcIjowLFwiNDRcIjowLFwiNDVcIjowLFwiNDZcIjowLFwiNDdcIjowLFwiNDhcIjowLFwiNDlcIjowLFwiNTBcIjowLFwiNTFcIjowLFwiNTJcIjowLFwiNTNcIjowLFwiNTRcIjowLFwiNTVcIjowLFwiNTZcIjowLFwiNTdcIjowLFwiNThcIjowLFwiNTlcIjowLFwiNjBcIjowLFwiNjFcIjowLFwiNjJcIjowLFwiNjNcIjowLFwiNjRcIjowLFwiNjVcIjowLFwiNjZcIjowLFwiNjdcIjowLFwiNjhcIjowLFwiNjlcIjowLFwiNzBcIjowLFwiNzFcIjowLFwiNzJcIjowLFwiNzNcIjowLFwiNzRcIjowLFwiNzVcIjowLFwiNzZcIjowLFwiNzdcIjowLFwiNzhcIjowLFwiNzlcIjowLFwiODBcIjowLFwiODFcIjowLFwiODJcIjowLFwiODNcIjowLFwiODRcIjowLFwiODVcIjowLFwiODZcIjowLFwiODdcIjowLFwiODhcIjowLFwiODlcIjowLFwiOTBcIjowLFwiOTFcIjowLFwiOTJcIjowLFwiOTNcIjowLFwiOTRcIjowLFwiOTVcIjowLFwiOTZcIjowLFwiOTdcIjowLFwiOThcIjowLFwiOTlcIjowLFwiMTAwXCI6MCxcIjEwMVwiOjAsXCIxMDJcIjowLFwiMTAzXCI6MCxcIjEwNFwiOjAsXCIxMDVcIjowLFwiMTA2XCI6MCxcIjEwN1wiOjAsXCIxMDhcIjowLFwiMTA5XCI6MCxcIjExMFwiOjAsXCIxMTFcIjowLFwiMTEyXCI6MCxcIjExM1wiOjAsXCIxMTRcIjowLFwiMTE1XCI6MCxcIjExNlwiOjB9LFwiYlwiOntcIjFcIjpbMCwwXSxcIjJcIjpbMCwwXSxcIjNcIjpbMCwwXSxcIjRcIjpbMCwwLDBdLFwiNVwiOlswLDBdLFwiNlwiOlswLDBdLFwiN1wiOlswLDBdLFwiOFwiOlswLDBdLFwiOVwiOlswLDBdLFwiMTBcIjpbMCwwXX0sXCJmXCI6e1wiMVwiOjAsXCIyXCI6MCxcIjNcIjowLFwiNFwiOjAsXCI1XCI6MCxcIjZcIjowLFwiN1wiOjAsXCI4XCI6MCxcIjlcIjowLFwiMTBcIjowLFwiMTFcIjowLFwiMTJcIjowLFwiMTNcIjowLFwiMTRcIjowLFwiMTVcIjowLFwiMTZcIjowLFwiMTdcIjowLFwiMThcIjowLFwiMTlcIjowLFwiMjBcIjowLFwiMjFcIjowLFwiMjJcIjowLFwiMjNcIjowLFwiMjRcIjowfSxcImZuTWFwXCI6e1wiMVwiOntcIm5hbWVcIjpcIkJpbmF1cmFsRklSXCIsXCJsaW5lXCI6NCxcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTcsXCJjb2x1bW5cIjowLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTksXCJjb2x1bW5cIjoxNixcIm5hbWVcIjpudWxsfX19LFwiMlwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMilcIixcImxpbmVcIjoyNixcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6NTcsXCJjb2x1bW5cIjoyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6NTcsXCJjb2x1bW5cIjoxNixcIm5hbWVcIjpudWxsfX19LFwiM1wiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMylcIixcImxpbmVcIjozMSxcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6NjksXCJjb2x1bW5cIjoyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6NjksXCJjb2x1bW5cIjoxOSxcIm5hbWVcIjpudWxsfX19LFwiNFwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfNClcIixcImxpbmVcIjozNixcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6ODIsXCJjb2x1bW5cIjozMSxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjgyLFwiY29sdW1uXCI6MzEsXCJuYW1lXCI6bnVsbH19fSxcIjVcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzUpXCIsXCJsaW5lXCI6NTAsXCJsb2NcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjk5LFwiY29sdW1uXCI6MjAsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo5OSxcImNvbHVtblwiOjIwLFwibmFtZVwiOm51bGx9fX0sXCI2XCI6e1wibmFtZVwiOlwiKGFub255bW91c182KVwiLFwibGluZVwiOjUzLFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMTAsXCJjb2x1bW5cIjoyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTEwLFwiY29sdW1uXCI6MTcsXCJuYW1lXCI6bnVsbH19fSxcIjdcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzcpXCIsXCJsaW5lXCI6NTYsXCJsb2NcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEyNCxcImNvbHVtblwiOjIsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMjQsXCJjb2x1bW5cIjo0NCxcIm5hbWVcIjpudWxsfX19LFwiOFwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfOClcIixcImxpbmVcIjo4MCxcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTYzLFwiY29sdW1uXCI6MixcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE2MyxcImNvbHVtblwiOjE4LFwibmFtZVwiOm51bGx9fX0sXCI5XCI6e1wibmFtZVwiOlwiKGFub255bW91c185KVwiLFwibGluZVwiOjg3LFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxNzYsXCJjb2x1bW5cIjoyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTc2LFwiY29sdW1uXCI6MjQsXCJuYW1lXCI6bnVsbH19fSxcIjEwXCI6e1wibmFtZVwiOlwiKGFub255bW91c18xMClcIixcImxpbmVcIjoxMDEsXCJsb2NcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIwNCxcImNvbHVtblwiOjIsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMDQsXCJjb2x1bW5cIjozMyxcIm5hbWVcIjpudWxsfX19LFwiMTFcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzExKVwiLFwibGluZVwiOjEwOSxcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjE4LFwiY29sdW1uXCI6MixcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIxOCxcImNvbHVtblwiOjI1LFwibmFtZVwiOm51bGx9fX0sXCIxMlwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMTIpXCIsXCJsaW5lXCI6MTEyLFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMjcsXCJjb2x1bW5cIjoyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjI3LFwiY29sdW1uXCI6MTYsXCJuYW1lXCI6bnVsbH19fSxcIjEzXCI6e1wibmFtZVwiOlwiKGFub255bW91c18xMylcIixcImxpbmVcIjoxMTUsXCJsb2NcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIzNSxcImNvbHVtblwiOjIsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMzUsXCJjb2x1bW5cIjoxNixcIm5hbWVcIjpudWxsfX19LFwiMTRcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzE0KVwiLFwibGluZVwiOjEyMixcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjUyLFwiY29sdW1uXCI6MixcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI1MixcImNvbHVtblwiOjQwLFwibmFtZVwiOm51bGx9fX0sXCIxNVwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMTUpXCIsXCJsaW5lXCI6MTI2LFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNjUsXCJjb2x1bW5cIjoyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjY1LFwiY29sdW1uXCI6NTMsXCJuYW1lXCI6bnVsbH19fSxcIjE2XCI6e1wibmFtZVwiOlwiKGFub255bW91c18xNilcIixcImxpbmVcIjoxMzMsXCJsb2NcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI4MCxcImNvbHVtblwiOjIsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyODAsXCJjb2x1bW5cIjo1MSxcIm5hbWVcIjpudWxsfX19LFwiMTdcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzE3KVwiLFwibGluZVwiOjE0MSxcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6Mjk3LFwiY29sdW1uXCI6MixcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI5NyxcImNvbHVtblwiOjQ4LFwibmFtZVwiOm51bGx9fX0sXCIxOFwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMTgpXCIsXCJsaW5lXCI6MTQ4LFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMTMsXCJjb2x1bW5cIjoyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzEzLFwiY29sdW1uXCI6MjAsXCJuYW1lXCI6bnVsbH19fSxcIjE5XCI6e1wibmFtZVwiOlwiQ29udm9sdmVyQXVkaW9HcmFwaFwiLFwibGluZVwiOjE1NSxcImxvY1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzI2LFwiY29sdW1uXCI6MCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMyOCxcImNvbHVtblwiOjE2LFwibmFtZVwiOm51bGx9fX0sXCIyMFwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMjApXCIsXCJsaW5lXCI6MTY5LFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNDUsXCJjb2x1bW5cIjoxNCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM0NSxcImNvbHVtblwiOjE0LFwibmFtZVwiOm51bGx9fX0sXCIyMVwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMjEpXCIsXCJsaW5lXCI6MTcyLFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNDksXCJjb2x1bW5cIjoxMyxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM0OSxcImNvbHVtblwiOjEzLFwibmFtZVwiOm51bGx9fX0sXCIyMlwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMjIpXCIsXCJsaW5lXCI6MTc1LFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNTgsXCJjb2x1bW5cIjoyMCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM1OCxcImNvbHVtblwiOjIwLFwibmFtZVwiOm51bGx9fX0sXCIyM1wiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMjMpXCIsXCJsaW5lXCI6MTc4LFwibG9jXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNjgsXCJjb2x1bW5cIjoyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzY4LFwiY29sdW1uXCI6MTYsXCJuYW1lXCI6bnVsbH19fSxcIjI0XCI6e1wibmFtZVwiOlwiKGFub255bW91c18yNClcIixcImxpbmVcIjoxODIsXCJsb2NcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM3OSxcImNvbHVtblwiOjIsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNzksXCJjb2x1bW5cIjoxOSxcIm5hbWVcIjpudWxsfX19fSxcInN0YXRlbWVudE1hcFwiOntcIjFcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEwLFwiY29sdW1uXCI6MCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEwLFwiY29sdW1uXCI6MjQsXCJuYW1lXCI6bnVsbH19LFwiMlwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTEsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTEsXCJjb2x1bW5cIjo0MyxcIm5hbWVcIjpudWxsfX0sXCIzXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MCxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjAsXCJjb2x1bW5cIjowfSxcInNraXBcIjp0cnVlfSxcIjRcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIwLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIwLFwiY29sdW1uXCI6MjUsXCJuYW1lXCI6bnVsbH19LFwiNVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjEsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjEsXCJjb2x1bW5cIjozMCxcIm5hbWVcIjpudWxsfX0sXCI2XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMixcImNvbHVtblwiOjE4LFwibmFtZVwiOm51bGx9fSxcIjdcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIzLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIzLFwiY29sdW1uXCI6MjIsXCJuYW1lXCI6bnVsbH19LFwiOFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjQsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjQsXCJjb2x1bW5cIjoyNixcIm5hbWVcIjpudWxsfX0sXCI5XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNSxcImNvbHVtblwiOjQ0LFwibmFtZVwiOm51bGx9fSxcIjEwXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNixcImNvbHVtblwiOjMxLFwibmFtZVwiOm51bGx9fSxcIjExXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNyxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNyxcImNvbHVtblwiOjM4LFwibmFtZVwiOm51bGx9fSxcIjEyXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyOCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyOCxcImNvbHVtblwiOjI2LFwibmFtZVwiOm51bGx9fSxcIjEzXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyOSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyOSxcImNvbHVtblwiOjM0LFwibmFtZVwiOm51bGx9fSxcIjE0XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMCxcImNvbHVtblwiOjM5LFwibmFtZVwiOm51bGx9fSxcIjE1XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMixcImNvbHVtblwiOjQyLFwibmFtZVwiOm51bGx9fSxcIjE2XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozOSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozOSxcImNvbHVtblwiOjUwLFwibmFtZVwiOm51bGx9fSxcIjE3XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0MCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0MCxcImNvbHVtblwiOjM3LFwibmFtZVwiOm51bGx9fSxcIjE4XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0MSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0MSxcImNvbHVtblwiOjQ4LFwibmFtZVwiOm51bGx9fSxcIjE5XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0MyxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0MyxcImNvbHVtblwiOjU1LFwibmFtZVwiOm51bGx9fSxcIjIwXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0NCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0NCxcImNvbHVtblwiOjQyLFwibmFtZVwiOm51bGx9fSxcIjIxXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0NSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0NSxcImNvbHVtblwiOjUzLFwibmFtZVwiOm51bGx9fSxcIjIyXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0NyxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo0NyxcImNvbHVtblwiOjE1LFwibmFtZVwiOm51bGx9fSxcIjIzXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MCxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjAsXCJjb2x1bW5cIjowfSxcInNraXBcIjp0cnVlfSxcIjI0XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo1OCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo1OCxcImNvbHVtblwiOjM2LFwibmFtZVwiOm51bGx9fSxcIjI1XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo1OSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo1OSxcImNvbHVtblwiOjQxLFwibmFtZVwiOm51bGx9fSxcIjI2XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo2MCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo2MCxcImNvbHVtblwiOjE1LFwibmFtZVwiOm51bGx9fSxcIjI3XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo3MCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo3MCxcImNvbHVtblwiOjM5LFwibmFtZVwiOm51bGx9fSxcIjI4XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo3MSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo3MSxcImNvbHVtblwiOjQ0LFwibmFtZVwiOm51bGx9fSxcIjI5XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo3MixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo3MixcImNvbHVtblwiOjE1LFwibmFtZVwiOm51bGx9fSxcIjMwXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo4MyxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo4MyxcImNvbHVtblwiOjM0LFwibmFtZVwiOm51bGx9fSxcIjMxXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo4NCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo4NCxcImNvbHVtblwiOjUyLFwibmFtZVwiOm51bGx9fSxcIjMyXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo4NixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo5NSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19LFwiMzNcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjg3LFwiY29sdW1uXCI6MTAsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo4NyxcImNvbHVtblwiOjM2LFwibmFtZVwiOm51bGx9fSxcIjM0XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo4OSxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6ODksXCJjb2x1bW5cIjo1NSxcIm5hbWVcIjpudWxsfX0sXCIzNVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTAsXCJjb2x1bW5cIjoxMCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjkwLFwiY29sdW1uXCI6NTksXCJuYW1lXCI6bnVsbH19LFwiMzZcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjkxLFwiY29sdW1uXCI6MTAsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjo5MSxcImNvbHVtblwiOjEwMCxcIm5hbWVcIjpudWxsfX0sXCIzN1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTIsXCJjb2x1bW5cIjo2LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTIsXCJjb2x1bW5cIjozMCxcIm5hbWVcIjpudWxsfX0sXCIzOFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTMsXCJjb2x1bW5cIjo2LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTMsXCJjb2x1bW5cIjozMCxcIm5hbWVcIjpudWxsfX0sXCIzOVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTQsXCJjb2x1bW5cIjo2LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTQsXCJjb2x1bW5cIjozMCxcIm5hbWVcIjpudWxsfX0sXCI0MFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTYsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6OTYsXCJjb2x1bW5cIjo4MixcIm5hbWVcIjpudWxsfX0sXCI0MVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTAwLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEwMCxcImNvbHVtblwiOjI3LFwibmFtZVwiOm51bGx9fSxcIjQyXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMTIsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTEyLFwiY29sdW1uXCI6ODMsXCJuYW1lXCI6bnVsbH19LFwiNDNcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEyNixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxNTYsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9fSxcIjQ0XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMjgsXCJjb2x1bW5cIjoxMCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEyOCxcImNvbHVtblwiOjgxLFwibmFtZVwiOm51bGx9fSxcIjQ1XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMzAsXCJjb2x1bW5cIjo2LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTU1LFwiY29sdW1uXCI6NixcIm5hbWVcIjpudWxsfX0sXCI0NlwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTMyLFwiY29sdW1uXCI6OCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE1MixcImNvbHVtblwiOjgsXCJuYW1lXCI6bnVsbH19LFwiNDdcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzNCxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTM5LFwiY29sdW1uXCI6MTAsXCJuYW1lXCI6bnVsbH19LFwiNDhcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzNixcImNvbHVtblwiOjEyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTM2LFwiY29sdW1uXCI6NDIsXCJuYW1lXCI6bnVsbH19LFwiNDlcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzOCxcImNvbHVtblwiOjEyLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTM4LFwiY29sdW1uXCI6NTEsXCJuYW1lXCI6bnVsbH19LFwiNTBcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE0MSxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTQxLFwiY29sdW1uXCI6NjEsXCJuYW1lXCI6bnVsbH19LFwiNTFcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE0MixcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTQyLFwiY29sdW1uXCI6NjUsXCJuYW1lXCI6bnVsbH19LFwiNTJcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE0MyxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTQzLFwiY29sdW1uXCI6NjMsXCJuYW1lXCI6bnVsbH19LFwiNTNcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE0NixcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTQ2LFwiY29sdW1uXCI6ODYsXCJuYW1lXCI6bnVsbH19LFwiNTRcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE0OCxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTQ4LFwiY29sdW1uXCI6NjEsXCJuYW1lXCI6bnVsbH19LFwiNTVcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE0OSxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTQ5LFwiY29sdW1uXCI6NjUsXCJuYW1lXCI6bnVsbH19LFwiNTZcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE1MCxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTUwLFwiY29sdW1uXCI6NjMsXCJuYW1lXCI6bnVsbH19LFwiNTdcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE1MSxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTUxLFwiY29sdW1uXCI6MzYsXCJuYW1lXCI6bnVsbH19LFwiNThcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE1NCxcImNvbHVtblwiOjgsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxNTQsXCJjb2x1bW5cIjoxOSxcIm5hbWVcIjpudWxsfX0sXCI1OVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTY1LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE2OSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19LFwiNjBcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE2NixcImNvbHVtblwiOjYsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxNjYsXCJjb2x1bW5cIjoxNyxcIm5hbWVcIjpudWxsfX0sXCI2MVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTY4LFwiY29sdW1uXCI6NixcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE2OCxcImNvbHVtblwiOjE4LFwibmFtZVwiOm51bGx9fSxcIjYyXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxNzksXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTc5LFwiY29sdW1uXCI6NTMsXCJuYW1lXCI6bnVsbH19LFwiNjNcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE4MCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxODAsXCJjb2x1bW5cIjo1NyxcIm5hbWVcIjpudWxsfX0sXCI2NFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTgxLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE4MSxcImNvbHVtblwiOjU1LFwibmFtZVwiOm51bGx9fSxcIjY1XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxODMsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTgzLFwiY29sdW1uXCI6MTIxLFwibmFtZVwiOm51bGx9fSxcIjY2XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxODUsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTg1LFwiY29sdW1uXCI6MjIsXCJuYW1lXCI6bnVsbH19LFwiNjdcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE4OCxcImNvbHVtblwiOjgsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxODgsXCJjb2x1bW5cIjozNSxcIm5hbWVcIjpudWxsfX0sXCI2OFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTg5LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE4OSxcImNvbHVtblwiOjQ4LFwibmFtZVwiOm51bGx9fSxcIjY5XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxOTAsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTkwLFwiY29sdW1uXCI6MzYsXCJuYW1lXCI6bnVsbH19LFwiNzBcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE5MixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxOTUsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9fSxcIjcxXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxOTMsXCJjb2x1bW5cIjo2LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTkzLFwiY29sdW1uXCI6NDYsXCJuYW1lXCI6bnVsbH19LFwiNzJcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE5NCxcImNvbHVtblwiOjYsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxOTQsXCJjb2x1bW5cIjozNixcIm5hbWVcIjpudWxsfX0sXCI3M1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjA1LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIxMSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19LFwiNzRcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIwNyxcImNvbHVtblwiOjYsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMDcsXCJjb2x1bW5cIjo0NixcIm5hbWVcIjpudWxsfX0sXCI3NVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjA4LFwiY29sdW1uXCI6NixcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIwOCxcImNvbHVtblwiOjE3LFwibmFtZVwiOm51bGx9fSxcIjc2XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMTAsXCJjb2x1bW5cIjo2LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjEwLFwiY29sdW1uXCI6NDUsXCJuYW1lXCI6bnVsbH19LFwiNzdcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIyMCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMjAsXCJjb2x1bW5cIjo0MCxcIm5hbWVcIjpudWxsfX0sXCI3OFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjI4LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIyOCxcImNvbHVtblwiOjI0LFwibmFtZVwiOm51bGx9fSxcIjc5XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMzcsXCJjb2x1bW5cIjo4LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjM3LFwiY29sdW1uXCI6MjgsXCJuYW1lXCI6bnVsbH19LFwiODBcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIzOCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyMzgsXCJjb2x1bW5cIjo4NyxcIm5hbWVcIjpudWxsfX0sXCI4MVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIzOSxcImNvbHVtblwiOjEyMSxcIm5hbWVcIjpudWxsfX0sXCI4MlwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjQxLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI0MSxcImNvbHVtblwiOjkyLFwibmFtZVwiOm51bGx9fSxcIjgzXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNDIsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjQyLFwiY29sdW1uXCI6MTI2LFwibmFtZVwiOm51bGx9fSxcIjg0XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNTMsXCJjb2x1bW5cIjo4LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjUzLFwiY29sdW1uXCI6NjgsXCJuYW1lXCI6bnVsbH19LFwiODVcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI1NSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyNTUsXCJjb2x1bW5cIjoyNSxcIm5hbWVcIjpudWxsfX0sXCI4NlwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjY2LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI3MCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19LFwiODdcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI4MSxcImNvbHVtblwiOjgsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyODEsXCJjb2x1bW5cIjo2OCxcIm5hbWVcIjpudWxsfX0sXCI4OFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjgzLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI4NyxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19LFwiODlcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjI5OSxcImNvbHVtblwiOjgsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoyOTksXCJjb2x1bW5cIjo0OCxcIm5hbWVcIjpudWxsfX0sXCI5MFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzAwLFwiY29sdW1uXCI6OCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMwMCxcImNvbHVtblwiOjUyLFwibmFtZVwiOm51bGx9fSxcIjkxXCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMDIsXCJjb2x1bW5cIjo4LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzAyLFwiY29sdW1uXCI6OTQsXCJuYW1lXCI6bnVsbH19LFwiOTJcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMwNCxcImNvbHVtblwiOjgsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMDQsXCJjb2x1bW5cIjo1NyxcIm5hbWVcIjpudWxsfX0sXCI5M1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzA2LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMwNixcImNvbHVtblwiOjIxLFwibmFtZVwiOm51bGx9fSxcIjk0XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMTQsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzE2LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfX0sXCI5NVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzE1LFwiY29sdW1uXCI6NixcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMxNSxcImNvbHVtblwiOjMyLFwibmFtZVwiOm51bGx9fSxcIjk2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MCxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjAsXCJjb2x1bW5cIjowfSxcInNraXBcIjp0cnVlfSxcIjk3XCI6e1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMjksXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzI5LFwiY29sdW1uXCI6NDUsXCJuYW1lXCI6bnVsbH19LFwiOThcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMzMCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozMzAsXCJjb2x1bW5cIjo1MCxcIm5hbWVcIjpudWxsfX0sXCI5OVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzMxLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMzMSxcImNvbHVtblwiOjM1LFwibmFtZVwiOm51bGx9fSxcIjEwMFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzMyLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMzMixcImNvbHVtblwiOjQwLFwibmFtZVwiOm51bGx9fSxcIjEwMVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzM1LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMzNSxcImNvbHVtblwiOjU3LFwibmFtZVwiOm51bGx9fSxcIjEwMlwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzM2LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMzNixcImNvbHVtblwiOjU1LFwibmFtZVwiOm51bGx9fSxcIjEwM1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzM3LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMzNyxcImNvbHVtblwiOjU2LFwibmFtZVwiOm51bGx9fSxcIjEwNFwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzM4LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMzOCxcImNvbHVtblwiOjUwLFwibmFtZVwiOm51bGx9fSxcIjEwNVwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzM5LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMzOSxcImNvbHVtblwiOjQyLFwibmFtZVwiOm51bGx9fSxcIjEwNlwiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzQwLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM0MCxcImNvbHVtblwiOjMyLFwibmFtZVwiOm51bGx9fSxcIjEwN1wiOntcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzQyLFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM0MixcImNvbHVtblwiOjE1LFwibmFtZVwiOm51bGx9fSxcIjEwOFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjAsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjowLFwiY29sdW1uXCI6MH0sXCJza2lwXCI6dHJ1ZX0sXCIxMDlcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM0NixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNDYsXCJjb2x1bW5cIjoyNCxcIm5hbWVcIjpudWxsfX0sXCIxMTBcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM1MCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNTAsXCJjb2x1bW5cIjoyOSxcIm5hbWVcIjpudWxsfX0sXCIxMTFcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM1OSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNTksXCJjb2x1bW5cIjozMixcIm5hbWVcIjpudWxsfX0sXCIxMTJcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM2OSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNjksXCJjb2x1bW5cIjozMSxcIm5hbWVcIjpudWxsfX0sXCIxMTNcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM3MCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozNzAsXCJjb2x1bW5cIjoxNSxcIm5hbWVcIjpudWxsfX0sXCIxMTRcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM4MCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozODAsXCJjb2x1bW5cIjozNCxcIm5hbWVcIjpudWxsfX0sXCIxMTVcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM4MSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozODEsXCJjb2x1bW5cIjoxNSxcIm5hbWVcIjpudWxsfX0sXCIxMTZcIjp7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjM4NyxcImNvbHVtblwiOjAsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjozODcsXCJjb2x1bW5cIjoyOCxcIm5hbWVcIjpudWxsfX19LFwiYnJhbmNoTWFwXCI6e1wiMVwiOntcImxpbmVcIjo1NyxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMjYsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTI2LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfX0se1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMjYsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTI2LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfX1dfSxcIjJcIjp7XCJsaW5lXCI6NTcsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTI2LFwiY29sdW1uXCI6OCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEyNixcImNvbHVtblwiOjI5LFwibmFtZVwiOm51bGx9fSx7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEyNixcImNvbHVtblwiOjM0LFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTI2LFwiY29sdW1uXCI6NTgsXCJuYW1lXCI6bnVsbH19XX0sXCIzXCI6e1wibGluZVwiOjU5LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzMCxcImNvbHVtblwiOjYsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMzAsXCJjb2x1bW5cIjo2LFwibmFtZVwiOm51bGx9fSx7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzMCxcImNvbHVtblwiOjYsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMzAsXCJjb2x1bW5cIjo2LFwibmFtZVwiOm51bGx9fV19LFwiNFwiOntcImxpbmVcIjo1OSxcInR5cGVcIjpcImJpbmFyeS1leHByXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMzAsXCJjb2x1bW5cIjoxMCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzMCxcImNvbHVtblwiOjU4LFwibmFtZVwiOm51bGx9fSx7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzMCxcImNvbHVtblwiOjYzLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTMwLFwiY29sdW1uXCI6MTE1LFwibmFtZVwiOm51bGx9fSx7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzMCxcImNvbHVtblwiOjEyMCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzMCxcImNvbHVtblwiOjE3MyxcIm5hbWVcIjpudWxsfX1dfSxcIjVcIjp7XCJsaW5lXCI6NjAsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTMyLFwiY29sdW1uXCI6OCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzMixcImNvbHVtblwiOjgsXCJuYW1lXCI6bnVsbH19LHtcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTMyLFwiY29sdW1uXCI6OCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzMixcImNvbHVtblwiOjgsXCJuYW1lXCI6bnVsbH19XX0sXCI2XCI6e1wibGluZVwiOjYxLFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjEzNCxcImNvbHVtblwiOjEwLFwibmFtZVwiOm51bGx9LFwiZW5kXCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTM0LFwiY29sdW1uXCI6MTAsXCJuYW1lXCI6bnVsbH19LHtcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTM0LFwiY29sdW1uXCI6MTAsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxMzQsXCJjb2x1bW5cIjoxMCxcIm5hbWVcIjpudWxsfX1dfSxcIjdcIjp7XCJsaW5lXCI6ODEsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTY1LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE2NSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19LHtcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MTY1LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE2NSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19XX0sXCI4XCI6e1wibGluZVwiOjk2LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE5MixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxOTIsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9fSx7XCJzdGFydFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjE5MixcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH0sXCJlbmRcIjp7XCJzb3VyY2VcIjpcIi9Vc2Vycy9nb2xkc3ptaWR0L3NhbS9wcm8vZGV2L2JpbmF1cmFsRklSL2JpbmF1cmFsLWZpci5lczYuanNcIixcImxpbmVcIjoxOTIsXCJjb2x1bW5cIjo0LFwibmFtZVwiOm51bGx9fV19LFwiOVwiOntcImxpbmVcIjoxMDIsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjA1LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIwNSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19LHtcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MjA1LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjIwNSxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19XX0sXCIxMFwiOntcImxpbmVcIjoxNDksXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzE0LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMxNCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19LHtcInN0YXJ0XCI6e1wic291cmNlXCI6XCIvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzXCIsXCJsaW5lXCI6MzE0LFwiY29sdW1uXCI6NCxcIm5hbWVcIjpudWxsfSxcImVuZFwiOntcInNvdXJjZVwiOlwiL1VzZXJzL2dvbGRzem1pZHQvc2FtL3Byby9kZXYvYmluYXVyYWxGSVIvYmluYXVyYWwtZmlyLmVzNi5qc1wiLFwibGluZVwiOjMxNCxcImNvbHVtblwiOjQsXCJuYW1lXCI6bnVsbH19XX19fTtcbn1cbl9fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEgPSBfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBWycvVXNlcnMvZ29sZHN6bWlkdC9zYW0vcHJvL2Rldi9iaW5hdXJhbEZJUi9iaW5hdXJhbC1maXIuZXM2LmpzJ107XG5fX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzEnXSsrO3ZhciBrZHQ9cmVxdWlyZSgna2R0Jyk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycyJ10rKzt2YXIgYXVkaW9Db250ZXh0PXJlcXVpcmUoJ2F1ZGlvLWNvbnRleHQnKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzMnXSsrO3ZhciBCaW5hdXJhbEZJUj1mdW5jdGlvbiBCaW5hdXJhbEZJUigpe19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuZlsnMSddKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc0J10rKzt0aGlzLmhydGZEYXRhc2V0PVtdO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNSddKys7dGhpcy5ocnRmRGF0YXNldExlbmd0aD0wO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNiddKys7dGhpcy50cmVlPS0xO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNyddKys7dGhpcy5wb3NpdGlvbj17fTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzgnXSsrO3RoaXMubmV4dFBvc2l0aW9uPXt9O19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snOSddKys7dGhpcy5jaGFuZ2VXaGVuRmluaXNoQ3Jvc3NmYWRpbmc9ZmFsc2U7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMCddKys7dGhpcy5pbnRlcnZhbElEPXVuZGVmaW5lZDtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzExJ10rKzt0aGlzLmNyb3NzZmFkZUR1cmF0aW9uPTIwLzEwMDA7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMiddKys7dGhpcy5pbnB1dD11bmRlZmluZWQ7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMyddKys7dGhpcy5tYWluQ29udm9sdmVyPXVuZGVmaW5lZDtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzE0J10rKzt0aGlzLnNlY29uZGFyeUNvbnZvbHZlcj11bmRlZmluZWQ7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxNSddKys7dGhpcy5pbnB1dD1hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMTYnXSsrO3RoaXMubWFpbkNvbnZvbHZlcj1uZXcgQ29udm9sdmVyQXVkaW9HcmFwaCgpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMTcnXSsrO3RoaXMubWFpbkNvbnZvbHZlci5nYWluLnZhbHVlPTE7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxOCddKys7dGhpcy5pbnB1dC5jb25uZWN0KHRoaXMubWFpbkNvbnZvbHZlci5pbnB1dCk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxOSddKys7dGhpcy5zZWNvbmRhcnlDb252b2x2ZXI9bmV3IENvbnZvbHZlckF1ZGlvR3JhcGgoKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzIwJ10rKzt0aGlzLnNlY29uZGFyeUNvbnZvbHZlci5nYWluLnZhbHVlPTA7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycyMSddKys7dGhpcy5pbnB1dC5jb25uZWN0KHRoaXMuc2Vjb25kYXJ5Q29udm9sdmVyLmlucHV0KTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzIyJ10rKztyZXR1cm4gdGhpczt9O19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMjMnXSsrOyR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcyhCaW5hdXJhbEZJUix7Y29ubmVjdDpmdW5jdGlvbihub2RlKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzInXSsrO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMjQnXSsrO3RoaXMubWFpbkNvbnZvbHZlci5jb25uZWN0KG5vZGUpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMjUnXSsrO3RoaXMuc2Vjb25kYXJ5Q29udm9sdmVyLmNvbm5lY3Qobm9kZSk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycyNiddKys7cmV0dXJuIHRoaXM7fSxkaXNjb25uZWN0OmZ1bmN0aW9uKG5vZGUpe19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuZlsnMyddKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycyNyddKys7dGhpcy5tYWluQ29udm9sdmVyLmRpc2Nvbm5lY3Qobm9kZSk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycyOCddKys7dGhpcy5zZWNvbmRhcnlDb252b2x2ZXIuZGlzY29ubmVjdChub2RlKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzI5J10rKztyZXR1cm4gdGhpczt9LHNldCBIUlRGRGF0YXNldChocnRmRGF0YXNldCl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWyc0J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzMwJ10rKzt0aGlzLmhydGZEYXRhc2V0PWhydGZEYXRhc2V0O19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMzEnXSsrO3RoaXMuaHJ0ZkRhdGFzZXRMZW5ndGg9dGhpcy5ocnRmRGF0YXNldC5sZW5ndGg7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyczMiddKys7Zm9yKHZhciBpPTA7aTx0aGlzLmhydGZEYXRhc2V0TGVuZ3RoO2krKyl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyczMyddKys7dmFyIGhydGY9dGhpcy5ocnRmRGF0YXNldFtpXTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzM0J10rKzt2YXIgYXppbXV0aFJhZGlhbnM9aHJ0Zi5hemltdXRoKk1hdGguUEkvMTgwO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMzUnXSsrO3ZhciBlbGV2YXRpb25SYWRpYW5zPWhydGYuZWxldmF0aW9uKk1hdGguUEkvMTgwO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMzYnXSsrO3ZhciBjYXRlc2lhbkNvb3JkPXRoaXMuc3BoZXJpY2FsVG9DYXJ0ZXNpYW4oYXppbXV0aFJhZGlhbnMsZWxldmF0aW9uUmFkaWFucyxocnRmLmRpc3RhbmNlKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzM3J10rKztocnRmLng9Y2F0ZXNpYW5Db29yZC54O19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMzgnXSsrO2hydGYueT1jYXRlc2lhbkNvb3JkLnk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyczOSddKys7aHJ0Zi56PWNhdGVzaWFuQ29vcmQuejt9X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc0MCddKys7dGhpcy50cmVlPWtkdC5jcmVhdGVLZFRyZWUodGhpcy5ocnRmRGF0YXNldCx0aGlzLmRpc3RhbmNlLFsneCcsJ3knLCd6J10pO30sZ2V0IEhSVEZEYXRhc2V0KCl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWyc1J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzQxJ10rKztyZXR1cm4gdGhpcy5ocnRmRGF0YXNldDt9LGRpc3RhbmNlOmZ1bmN0aW9uKGEsYil7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWyc2J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzQyJ10rKztyZXR1cm4gTWF0aC5wb3coYS54LWIueCwyKStNYXRoLnBvdyhhLnktYi55LDIpK01hdGgucG93KGEuei1iLnosMik7fSxzZXRQb3NpdGlvbjpmdW5jdGlvbihhemltdXRoLGVsZXZhdGlvbixkaXN0YW5jZSl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWyc3J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzQzJ10rKztpZigoX19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5iWycyJ11bMF0rKyxhcmd1bWVudHMubGVuZ3RoPT09Myl8fChfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmJbJzInXVsxXSsrLGFyZ3VtZW50cy5sZW5ndGg9PT00KSl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5iWycxJ11bMF0rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzQ0J10rKzt2YXIgbmVhcmVzdFBvc2l0aW9uPXRoaXMuZ2V0UmVhbENvb3JkaW5hdGVzKGF6aW11dGgsZWxldmF0aW9uLGRpc3RhbmNlKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzQ1J10rKztpZigoX19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5iWyc0J11bMF0rKyxuZWFyZXN0UG9zaXRpb24uYXppbXV0aCE9PXRoaXMucG9zaXRpb24uYXppbXV0aCl8fChfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmJbJzQnXVsxXSsrLG5lYXJlc3RQb3NpdGlvbi5lbGV2YXRpb24hPT10aGlzLnBvc2l0aW9uLmVsZXZhdGlvbil8fChfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmJbJzQnXVsyXSsrLG5lYXJlc3RQb3NpdGlvbi5kaXN0YW5jZSE9PXRoaXMucG9zaXRpb24uZGlzdGFuY2UpKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmJbJzMnXVswXSsrO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNDYnXSsrO2lmKHRoaXMuaXNDcm9zc2ZhZGluZygpPT09dHJ1ZSl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5iWyc1J11bMF0rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzQ3J10rKztpZih0aGlzLmNoYW5nZVdoZW5GaW5pc2hDcm9zc2ZhZGluZz09PXRydWUpe19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuYlsnNiddWzBdKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc0OCddKys7Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSUQpO31lbHNle19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuYlsnNiddWzFdKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc0OSddKys7dGhpcy5jaGFuZ2VXaGVuRmluaXNoQ3Jvc3NmYWRpbmc9dHJ1ZTt9X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc1MCddKys7dGhpcy5uZXh0UG9zaXRpb24uYXppbXV0aD1uZWFyZXN0UG9zaXRpb24uYXppbXV0aDtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzUxJ10rKzt0aGlzLm5leHRQb3NpdGlvbi5lbGV2YXRpb249bmVhcmVzdFBvc2l0aW9uLmVsZXZhdGlvbjtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzUyJ10rKzt0aGlzLm5leHRQb3NpdGlvbi5kaXN0YW5jZT1uZWFyZXN0UG9zaXRpb24uZGlzdGFuY2U7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc1MyddKys7dGhpcy5pbnRlcnZhbElEPXdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLnNldExhc3RQb3NpdGlvbi5iaW5kKHRoaXMpLDAuMDA1KTt9ZWxzZXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmJbJzUnXVsxXSsrO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNTQnXSsrO3RoaXMubmV4dFBvc2l0aW9uLmF6aW11dGg9bmVhcmVzdFBvc2l0aW9uLmF6aW11dGg7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc1NSddKys7dGhpcy5uZXh0UG9zaXRpb24uZWxldmF0aW9uPW5lYXJlc3RQb3NpdGlvbi5lbGV2YXRpb247X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc1NiddKys7dGhpcy5uZXh0UG9zaXRpb24uZGlzdGFuY2U9bmVhcmVzdFBvc2l0aW9uLmRpc3RhbmNlO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNTcnXSsrO3RoaXMucmVhbGx5U3RhcnRQb3NpdGlvbigpO31fX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzU4J10rKztyZXR1cm4gdGhpczt9ZWxzZXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmJbJzMnXVsxXSsrO319ZWxzZXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmJbJzEnXVsxXSsrO319LGlzQ3Jvc3NmYWRpbmc6ZnVuY3Rpb24oKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzgnXSsrO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNTknXSsrO2lmKHRoaXMubWFpbkNvbnZvbHZlci5nYWluLnZhbHVlIT09MSl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5iWyc3J11bMF0rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzYwJ10rKztyZXR1cm4gdHJ1ZTt9ZWxzZXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmJbJzcnXVsxXSsrO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNjEnXSsrO3JldHVybiBmYWxzZTt9fSxyZWFsbHlTdGFydFBvc2l0aW9uOmZ1bmN0aW9uKCl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWyc5J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzYyJ10rKzt0aGlzLnBvc2l0aW9uLmF6aW11dGg9dGhpcy5uZXh0UG9zaXRpb24uYXppbXV0aDtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzYzJ10rKzt0aGlzLnBvc2l0aW9uLmVsZXZhdGlvbj10aGlzLm5leHRQb3NpdGlvbi5lbGV2YXRpb247X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc2NCddKys7dGhpcy5wb3NpdGlvbi5kaXN0YW5jZT10aGlzLm5leHRQb3NpdGlvbi5kaXN0YW5jZTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzY1J10rKzt0aGlzLnNlY29uZGFyeUNvbnZvbHZlci5idWZmZXI9dGhpcy5nZXRIUlRGKHRoaXMucG9zaXRpb24uYXppbXV0aCx0aGlzLnBvc2l0aW9uLmVsZXZhdGlvbix0aGlzLnBvc2l0aW9uLmRpc3RhbmNlKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzY2J10rKzt0aGlzLmNyb3NzZmFkaW5nKCk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc2NyddKys7dmFyIGFjdGl2ZT10aGlzLm1haW5Db252b2x2ZXI7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc2OCddKys7dGhpcy5tYWluQ29udm9sdmVyPXRoaXMuc2Vjb25kYXJ5Q29udm9sdmVyO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNjknXSsrO3RoaXMuc2Vjb25kYXJ5Q29udm9sdmVyPWFjdGl2ZTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzcwJ10rKztpZih0aGlzLmNoYW5nZVdoZW5GaW5pc2hDcm9zc2ZhZGluZyl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5iWyc4J11bMF0rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzcxJ10rKzt0aGlzLmNoYW5nZVdoZW5GaW5pc2hDcm9zc2ZhZGluZz1mYWxzZTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzcyJ10rKztjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRCk7fWVsc2V7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5iWyc4J11bMV0rKzt9fSxzZXRDcm9zc2ZhZGVEdXJhdGlvbjpmdW5jdGlvbihkdXJhdGlvbil7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWycxMCddKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc3MyddKys7aWYoZHVyYXRpb24pe19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuYlsnOSddWzBdKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc3NCddKys7dGhpcy5jcm9zc2ZhZGVEdXJhdGlvbj1kdXJhdGlvbi8xMDAwO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snNzUnXSsrO3JldHVybiB0aGlzO31lbHNle19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuYlsnOSddWzFdKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc3NiddKys7dGhyb3cnQ3Jvc3NmYWRlRHVyYXRpb24gc2V0dGluZyBlcnJvcic7fX0sZ2V0Q3Jvc3NmYWRlRHVyYXRpb246ZnVuY3Rpb24oKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzExJ10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzc3J10rKztyZXR1cm4gdGhpcy5jcm9zc2ZhZGVEdXJhdGlvbioxMDAwO30sZ2V0UG9zaXRpb246ZnVuY3Rpb24oKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzEyJ10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzc4J10rKztyZXR1cm4gdGhpcy5wb3NpdGlvbjt9LGNyb3NzZmFkaW5nOmZ1bmN0aW9uKCl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWycxMyddKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc3OSddKys7dmFyIGd1YXJkSW50ZXJ2YWw9MC4wMjtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzgwJ10rKzt0aGlzLm1haW5Db252b2x2ZXIuZ2Fpbi5zZXRWYWx1ZUF0VGltZSgxLGF1ZGlvQ29udGV4dC5jdXJyZW50VGltZStndWFyZEludGVydmFsKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzgxJ10rKzt0aGlzLm1haW5Db252b2x2ZXIuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgwLGF1ZGlvQ29udGV4dC5jdXJyZW50VGltZStndWFyZEludGVydmFsK3RoaXMuY3Jvc3NmYWRlRHVyYXRpb24pO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snODInXSsrO3RoaXMuc2Vjb25kYXJ5Q29udm9sdmVyLmdhaW4uc2V0VmFsdWVBdFRpbWUoMCxhdWRpb0NvbnRleHQuY3VycmVudFRpbWUrZ3VhcmRJbnRlcnZhbCk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc4MyddKys7dGhpcy5zZWNvbmRhcnlDb252b2x2ZXIuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgxLGF1ZGlvQ29udGV4dC5jdXJyZW50VGltZStndWFyZEludGVydmFsK3RoaXMuY3Jvc3NmYWRlRHVyYXRpb24pO30sZ2V0SFJURjpmdW5jdGlvbihhemltdXRoLGVsZXZhdGlvbixkaXN0YW5jZSl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWycxNCddKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc4NCddKys7dmFyIG5lYXJlc3Q9dGhpcy5nZXROZWFyZXN0UG9pbnQoYXppbXV0aCxlbGV2YXRpb24sZGlzdGFuY2UpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snODUnXSsrO3JldHVybiBuZWFyZXN0LmJ1ZmZlcjt9LHNwaGVyaWNhbFRvQ2FydGVzaWFuOmZ1bmN0aW9uKGF6aW11dGgsZWxldmF0aW9uLGRpc3RhbmNlKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzE1J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzg2J10rKztyZXR1cm57eDpkaXN0YW5jZSpNYXRoLnNpbihhemltdXRoKSx5OmRpc3RhbmNlKk1hdGguY29zKGF6aW11dGgpLHo6ZGlzdGFuY2UqTWF0aC5zaW4oZWxldmF0aW9uKX07fSxnZXRSZWFsQ29vcmRpbmF0ZXM6ZnVuY3Rpb24oYXppbXV0aCxlbGV2YXRpb24sZGlzdGFuY2Upe19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuZlsnMTYnXSsrO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snODcnXSsrO3ZhciBuZWFyZXN0PXRoaXMuZ2V0TmVhcmVzdFBvaW50KGF6aW11dGgsZWxldmF0aW9uLGRpc3RhbmNlKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzg4J10rKztyZXR1cm57YXppbXV0aDpuZWFyZXN0LmF6aW11dGgsZWxldmF0aW9uOm5lYXJlc3QuZWxldmF0aW9uLGRpc3RhbmNlOm5lYXJlc3QuZGlzdGFuY2V9O30sZ2V0TmVhcmVzdFBvaW50OmZ1bmN0aW9uKGF6aW11dGgsZWxldmF0aW9uLGRpc3RhbmNlKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzE3J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzg5J10rKzt2YXIgYXppbXV0aFJhZGlhbnM9YXppbXV0aCpNYXRoLlBJLzE4MDtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzkwJ10rKzt2YXIgZWxldmF0aW9uUmFkaWFucz1lbGV2YXRpb24qTWF0aC5QSS8xODA7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc5MSddKys7dmFyIGNhcnRlc2lhbkNvb3JkPXRoaXMuc3BoZXJpY2FsVG9DYXJ0ZXNpYW4oYXppbXV0aFJhZGlhbnMsZWxldmF0aW9uUmFkaWFucyxkaXN0YW5jZSk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc5MiddKys7dmFyIG5lYXJlc3Q9dGhpcy50cmVlLm5lYXJlc3QoY2FydGVzaWFuQ29vcmQsMSlbMF07X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc5MyddKys7cmV0dXJuIG5lYXJlc3RbMF07fSxzZXRMYXN0UG9zaXRpb246ZnVuY3Rpb24oKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzE4J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzk0J10rKztpZighdGhpcy5pc0Nyb3NzZmFkaW5nKCkpe19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuYlsnMTAnXVswXSsrO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snOTUnXSsrO3RoaXMucmVhbGx5U3RhcnRQb3NpdGlvbigpO31lbHNle19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuYlsnMTAnXVsxXSsrO319fSx7fSk7O19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snOTYnXSsrO3ZhciBDb252b2x2ZXJBdWRpb0dyYXBoPWZ1bmN0aW9uIENvbnZvbHZlckF1ZGlvR3JhcGgoKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzE5J10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzk3J10rKzt0aGlzLmdhaW5Ob2RlPWF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc5OCddKys7dGhpcy5jb252Tm9kZT1hdWRpb0NvbnRleHQuY3JlYXRlQ29udm9sdmVyKCk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWyc5OSddKys7dGhpcy5jb252Tm9kZS5ub3JtYWxpemU9ZmFsc2U7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMDAnXSsrO3RoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnZOb2RlKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzEwMSddKys7dGhpcy5vc2NpbGxhdG9yTm9kZT1hdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMTAyJ10rKzt0aGlzLmdhaW5Pc2NpbGxhdG9yTm9kZT1hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMTAzJ10rKzt0aGlzLm9zY2lsbGF0b3JOb2RlLmNvbm5lY3QodGhpcy5nYWluT3NjaWxsYXRvck5vZGUpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMTA0J10rKzt0aGlzLmdhaW5Pc2NpbGxhdG9yTm9kZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMTA1J10rKzt0aGlzLmdhaW5Pc2NpbGxhdG9yTm9kZS5nYWluLnZhbHVlPTA7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMDYnXSsrO3RoaXMub3NjaWxsYXRvck5vZGUuc3RhcnQoMCk7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMDcnXSsrO3JldHVybiB0aGlzO307X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMDgnXSsrOyR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcyhDb252b2x2ZXJBdWRpb0dyYXBoLHtnZXQgaW5wdXQoKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzIwJ10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzEwOSddKys7cmV0dXJuIHRoaXMuZ2Fpbk5vZGU7fSxnZXQgZ2Fpbigpe19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuZlsnMjEnXSsrO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMTEwJ10rKztyZXR1cm4gdGhpcy5nYWluTm9kZS5nYWluO30sc2V0IGJ1ZmZlcih2YWx1ZSl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWycyMiddKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMTEnXSsrO3RoaXMuY29udk5vZGUuYnVmZmVyPXZhbHVlO30sY29ubmVjdDpmdW5jdGlvbihub2RlKXtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLmZbJzIzJ10rKztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzExMiddKys7dGhpcy5jb252Tm9kZS5jb25uZWN0KG5vZGUpO19fY292X0Q5bzRoOFNmcUpFUXFMWW1peDRHbEEuc1snMTEzJ10rKztyZXR1cm4gdGhpczt9LGRpc2Nvbm5lY3Q6ZnVuY3Rpb24obm9kZSl7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5mWycyNCddKys7X19jb3ZfRDlvNGg4U2ZxSkVRcUxZbWl4NEdsQS5zWycxMTQnXSsrO3RoaXMuY29udk5vZGUuZGlzY29ubmVjdChub2RlKTtfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzExNSddKys7cmV0dXJuIHRoaXM7fX0se30pOztfX2Nvdl9EOW80aDhTZnFKRVFxTFltaXg0R2xBLnNbJzExNiddKys7bW9kdWxlLmV4cG9ydHM9QmluYXVyYWxGSVI7XG4iLCIvKiBDb3B5cmlnaHQgMjAxMyBDaHJpcyBXaWxzb25cblxuICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vKiBcblxuVGhpcyBtb25rZXlwYXRjaCBsaWJyYXJ5IGlzIGludGVuZGVkIHRvIGJlIGluY2x1ZGVkIGluIHByb2plY3RzIHRoYXQgYXJlXG53cml0dGVuIHRvIHRoZSBwcm9wZXIgQXVkaW9Db250ZXh0IHNwZWMgKGluc3RlYWQgb2Ygd2Via2l0QXVkaW9Db250ZXh0KSwgXG5hbmQgdGhhdCB1c2UgdGhlIG5ldyBuYW1pbmcgYW5kIHByb3BlciBiaXRzIG9mIHRoZSBXZWIgQXVkaW8gQVBJIChlLmcuIFxudXNpbmcgQnVmZmVyU291cmNlTm9kZS5zdGFydCgpIGluc3RlYWQgb2YgQnVmZmVyU291cmNlTm9kZS5ub3RlT24oKSksIGJ1dCBtYXlcbmhhdmUgdG8gcnVuIG9uIHN5c3RlbXMgdGhhdCBvbmx5IHN1cHBvcnQgdGhlIGRlcHJlY2F0ZWQgYml0cy5cblxuVGhpcyBsaWJyYXJ5IHNob3VsZCBiZSBoYXJtbGVzcyB0byBpbmNsdWRlIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIFxudW5wcmVmaXhlZCBcIkF1ZGlvQ29udGV4dFwiLCBhbmQvb3IgaWYgaXQgc3VwcG9ydHMgdGhlIG5ldyBuYW1lcy4gIFxuXG5UaGUgcGF0Y2hlcyB0aGlzIGxpYnJhcnkgaGFuZGxlczpcbmlmIHdpbmRvdy5BdWRpb0NvbnRleHQgaXMgdW5zdXBwb3J0ZWQsIGl0IHdpbGwgYmUgYWxpYXNlZCB0byB3ZWJraXRBdWRpb0NvbnRleHQoKS5cbmlmIEF1ZGlvQnVmZmVyU291cmNlTm9kZS5zdGFydCgpIGlzIHVuaW1wbGVtZW50ZWQsIGl0IHdpbGwgYmUgcm91dGVkIHRvIG5vdGVPbigpIG9yXG5ub3RlR3JhaW5PbigpLCBkZXBlbmRpbmcgb24gcGFyYW1ldGVycy5cblxuVGhlIGZvbGxvd2luZyBhbGlhc2VzIG9ubHkgdGFrZSBlZmZlY3QgaWYgdGhlIG5ldyBuYW1lcyBhcmUgbm90IGFscmVhZHkgaW4gcGxhY2U6XG5cbkF1ZGlvQnVmZmVyU291cmNlTm9kZS5zdG9wKCkgaXMgYWxpYXNlZCB0byBub3RlT2ZmKClcbkF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCkgaXMgYWxpYXNlZCB0byBjcmVhdGVHYWluTm9kZSgpXG5BdWRpb0NvbnRleHQuY3JlYXRlRGVsYXkoKSBpcyBhbGlhc2VkIHRvIGNyZWF0ZURlbGF5Tm9kZSgpXG5BdWRpb0NvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKCkgaXMgYWxpYXNlZCB0byBjcmVhdGVKYXZhU2NyaXB0Tm9kZSgpXG5BdWRpb0NvbnRleHQuY3JlYXRlUGVyaW9kaWNXYXZlKCkgaXMgYWxpYXNlZCB0byBjcmVhdGVXYXZlVGFibGUoKVxuT3NjaWxsYXRvck5vZGUuc3RhcnQoKSBpcyBhbGlhc2VkIHRvIG5vdGVPbigpXG5Pc2NpbGxhdG9yTm9kZS5zdG9wKCkgaXMgYWxpYXNlZCB0byBub3RlT2ZmKClcbk9zY2lsbGF0b3JOb2RlLnNldFBlcmlvZGljV2F2ZSgpIGlzIGFsaWFzZWQgdG8gc2V0V2F2ZVRhYmxlKClcbkF1ZGlvUGFyYW0uc2V0VGFyZ2V0QXRUaW1lKCkgaXMgYWxpYXNlZCB0byBzZXRUYXJnZXRWYWx1ZUF0VGltZSgpXG5cblRoaXMgbGlicmFyeSBkb2VzIE5PVCBwYXRjaCB0aGUgZW51bWVyYXRlZCB0eXBlIGNoYW5nZXMsIGFzIGl0IGlzIFxucmVjb21tZW5kZWQgaW4gdGhlIHNwZWNpZmljYXRpb24gdGhhdCBpbXBsZW1lbnRhdGlvbnMgc3VwcG9ydCBib3RoIGludGVnZXJcbmFuZCBzdHJpbmcgdHlwZXMgZm9yIEF1ZGlvUGFubmVyTm9kZS5wYW5uaW5nTW9kZWwsIEF1ZGlvUGFubmVyTm9kZS5kaXN0YW5jZU1vZGVsIFxuQmlxdWFkRmlsdGVyTm9kZS50eXBlIGFuZCBPc2NpbGxhdG9yTm9kZS50eXBlLlxuXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGV4cG9ydHMsIHBlcmYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIGZpeFNldFRhcmdldChwYXJhbSkge1xuICAgIGlmICghcGFyYW0pIC8vIGlmIE5ZSSwganVzdCByZXR1cm5cbiAgICAgIHJldHVybjtcbiAgICBpZiAoIXBhcmFtLnNldFRhcmdldEF0VGltZSlcbiAgICAgIHBhcmFtLnNldFRhcmdldEF0VGltZSA9IHBhcmFtLnNldFRhcmdldFZhbHVlQXRUaW1lOyBcbiAgfVxuXG4gIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkoJ3dlYmtpdEF1ZGlvQ29udGV4dCcpICYmIFxuICAgICAgIXdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnQXVkaW9Db250ZXh0JykpIHtcbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xuXG4gICAgaWYgKCFBdWRpb0NvbnRleHQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdjcmVhdGVHYWluJykpXG4gICAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUdhaW4gPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUdhaW5Ob2RlO1xuICAgIGlmICghQXVkaW9Db250ZXh0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnY3JlYXRlRGVsYXknKSlcbiAgICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRGVsYXkgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZURlbGF5Tm9kZTtcbiAgICBpZiAoIUF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2NyZWF0ZVNjcmlwdFByb2Nlc3NvcicpKVxuICAgICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVTY3JpcHRQcm9jZXNzb3IgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUphdmFTY3JpcHROb2RlO1xuICAgIGlmICghQXVkaW9Db250ZXh0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnY3JlYXRlUGVyaW9kaWNXYXZlJykpXG4gICAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZVBlcmlvZGljV2F2ZSA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlV2F2ZVRhYmxlO1xuXG5cbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmludGVybmFsX2NyZWF0ZUdhaW4gPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUdhaW47XG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVHYWluID0gZnVuY3Rpb24oKSB7IFxuICAgICAgdmFyIG5vZGUgPSB0aGlzLmludGVybmFsX2NyZWF0ZUdhaW4oKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmdhaW4pO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaW50ZXJuYWxfY3JlYXRlRGVsYXkgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZURlbGF5O1xuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRGVsYXkgPSBmdW5jdGlvbihtYXhEZWxheVRpbWUpIHsgXG4gICAgICB2YXIgbm9kZSA9IG1heERlbGF5VGltZSA/IHRoaXMuaW50ZXJuYWxfY3JlYXRlRGVsYXkobWF4RGVsYXlUaW1lKSA6IHRoaXMuaW50ZXJuYWxfY3JlYXRlRGVsYXkoKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmRlbGF5VGltZSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5pbnRlcm5hbF9jcmVhdGVCdWZmZXJTb3VyY2UgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUJ1ZmZlclNvdXJjZTtcbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUJ1ZmZlclNvdXJjZSA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciBub2RlID0gdGhpcy5pbnRlcm5hbF9jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgIGlmICghbm9kZS5zdGFydCkge1xuICAgICAgICBub2RlLnN0YXJ0ID0gZnVuY3Rpb24gKCB3aGVuLCBvZmZzZXQsIGR1cmF0aW9uICkge1xuICAgICAgICAgIGlmICggb2Zmc2V0IHx8IGR1cmF0aW9uIClcbiAgICAgICAgICAgIHRoaXMubm90ZUdyYWluT24oIHdoZW4sIG9mZnNldCwgZHVyYXRpb24gKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLm5vdGVPbiggd2hlbiApO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFub2RlLnN0b3ApXG4gICAgICAgIG5vZGUuc3RvcCA9IG5vZGUubm90ZU9mZjtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLnBsYXliYWNrUmF0ZSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5pbnRlcm5hbF9jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcjtcbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvciA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciBub2RlID0gdGhpcy5pbnRlcm5hbF9jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLnRocmVzaG9sZCk7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5rbmVlKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLnJhdGlvKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLnJlZHVjdGlvbik7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5hdHRhY2spO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUucmVsZWFzZSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5pbnRlcm5hbF9jcmVhdGVCaXF1YWRGaWx0ZXIgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUJpcXVhZEZpbHRlcjtcbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUJpcXVhZEZpbHRlciA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciBub2RlID0gdGhpcy5pbnRlcm5hbF9jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmZyZXF1ZW5jeSk7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5kZXR1bmUpO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUuUSk7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5nYWluKTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBpZiAoQXVkaW9Db250ZXh0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSggJ2NyZWF0ZU9zY2lsbGF0b3InICkpIHtcbiAgICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaW50ZXJuYWxfY3JlYXRlT3NjaWxsYXRvciA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlT3NjaWxsYXRvcjtcbiAgICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlT3NjaWxsYXRvciA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmludGVybmFsX2NyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAgICAgaWYgKCFub2RlLnN0YXJ0KVxuICAgICAgICAgIG5vZGUuc3RhcnQgPSBub2RlLm5vdGVPbjsgXG4gICAgICAgIGlmICghbm9kZS5zdG9wKVxuICAgICAgICAgIG5vZGUuc3RvcCA9IG5vZGUubm90ZU9mZjtcbiAgICAgICAgaWYgKCFub2RlLnNldFBlcmlvZGljV2F2ZSlcbiAgICAgICAgICBub2RlLnNldFBlcmlvZGljV2F2ZSA9IG5vZGUuc2V0V2F2ZVRhYmxlO1xuICAgICAgICBmaXhTZXRUYXJnZXQobm9kZS5mcmVxdWVuY3kpO1xuICAgICAgICBmaXhTZXRUYXJnZXQobm9kZS5kZXR1bmUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH07XG4gICAgfVxuICB9XG59KHdpbmRvdykpOyIsIi8qZ2xvYmFscyBBdWRpb0NvbnRleHQqL1xucmVxdWlyZSgnLi9hYy1tb25rZXlwYXRjaCcpO1xud2luZG93LndhdmVzID0gd2luZG93LndhdmVzIHx8IHt9O1xubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud2F2ZXMuYXVkaW9Db250ZXh0ID0gd2luZG93LndhdmVzLmF1ZGlvQ29udGV4dCB8fCBuZXcgQXVkaW9Db250ZXh0KCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9jaGFpJyk7XG4iLCIvKiFcbiAqIGNoYWlcbiAqIENvcHlyaWdodChjKSAyMDExLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG52YXIgdXNlZCA9IFtdXG4gICwgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8qIVxuICogQ2hhaSB2ZXJzaW9uXG4gKi9cblxuZXhwb3J0cy52ZXJzaW9uID0gJzEuMTAuMCc7XG5cbi8qIVxuICogQXNzZXJ0aW9uIEVycm9yXG4gKi9cblxuZXhwb3J0cy5Bc3NlcnRpb25FcnJvciA9IHJlcXVpcmUoJ2Fzc2VydGlvbi1lcnJvcicpO1xuXG4vKiFcbiAqIFV0aWxzIGZvciBwbHVnaW5zIChub3QgZXhwb3J0ZWQpXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL2NoYWkvdXRpbHMnKTtcblxuLyoqXG4gKiAjIC51c2UoZnVuY3Rpb24pXG4gKlxuICogUHJvdmlkZXMgYSB3YXkgdG8gZXh0ZW5kIHRoZSBpbnRlcm5hbHMgb2YgQ2hhaVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAcmV0dXJucyB7dGhpc30gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMudXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGlmICghfnVzZWQuaW5kZXhPZihmbikpIHtcbiAgICBmbih0aGlzLCB1dGlsKTtcbiAgICB1c2VkLnB1c2goZm4pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKiFcbiAqIENvbmZpZ3VyYXRpb25cbiAqL1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jaGFpL2NvbmZpZycpO1xuZXhwb3J0cy5jb25maWcgPSBjb25maWc7XG5cbi8qIVxuICogUHJpbWFyeSBgQXNzZXJ0aW9uYCBwcm90b3R5cGVcbiAqL1xuXG52YXIgYXNzZXJ0aW9uID0gcmVxdWlyZSgnLi9jaGFpL2Fzc2VydGlvbicpO1xuZXhwb3J0cy51c2UoYXNzZXJ0aW9uKTtcblxuLyohXG4gKiBDb3JlIEFzc2VydGlvbnNcbiAqL1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJy4vY2hhaS9jb3JlL2Fzc2VydGlvbnMnKTtcbmV4cG9ydHMudXNlKGNvcmUpO1xuXG4vKiFcbiAqIEV4cGVjdCBpbnRlcmZhY2VcbiAqL1xuXG52YXIgZXhwZWN0ID0gcmVxdWlyZSgnLi9jaGFpL2ludGVyZmFjZS9leHBlY3QnKTtcbmV4cG9ydHMudXNlKGV4cGVjdCk7XG5cbi8qIVxuICogU2hvdWxkIGludGVyZmFjZVxuICovXG5cbnZhciBzaG91bGQgPSByZXF1aXJlKCcuL2NoYWkvaW50ZXJmYWNlL3Nob3VsZCcpO1xuZXhwb3J0cy51c2Uoc2hvdWxkKTtcblxuLyohXG4gKiBBc3NlcnQgaW50ZXJmYWNlXG4gKi9cblxudmFyIGFzc2VydCA9IHJlcXVpcmUoJy4vY2hhaS9pbnRlcmZhY2UvYXNzZXJ0Jyk7XG5leHBvcnRzLnVzZShhc3NlcnQpO1xuIiwiLyohXG4gKiBjaGFpXG4gKiBodHRwOi8vY2hhaWpzLmNvbVxuICogQ29weXJpZ2h0KGMpIDIwMTEtMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xudmFyIE5PT1AgPSBmdW5jdGlvbigpIHsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX2NoYWksIHV0aWwpIHtcbiAgLyohXG4gICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAqL1xuXG4gIHZhciBBc3NlcnRpb25FcnJvciA9IF9jaGFpLkFzc2VydGlvbkVycm9yXG4gICAgLCBmbGFnID0gdXRpbC5mbGFnO1xuXG4gIC8qIVxuICAgKiBNb2R1bGUgZXhwb3J0LlxuICAgKi9cblxuICBfY2hhaS5Bc3NlcnRpb24gPSBBc3NlcnRpb247XG5cbiAgLyohXG4gICAqIEFzc2VydGlvbiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBDcmVhdGVzIG9iamVjdCBmb3IgY2hhaW5pbmcuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiBBc3NlcnRpb24gKG9iaiwgbXNnLCBzdGFjaykge1xuICAgIGZsYWcodGhpcywgJ3NzZmknLCBzdGFjayB8fCBhcmd1bWVudHMuY2FsbGVlKTtcbiAgICBmbGFnKHRoaXMsICdvYmplY3QnLCBvYmopO1xuICAgIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFzc2VydGlvbiwgJ2luY2x1ZGVTdGFjaycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3NlcnRpb24uaW5jbHVkZVN0YWNrIGlzIGRlcHJlY2F0ZWQsIHVzZSBjaGFpLmNvbmZpZy5pbmNsdWRlU3RhY2sgaW5zdGVhZC4nKTtcbiAgICAgIHJldHVybiBjb25maWcuaW5jbHVkZVN0YWNrO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3NlcnRpb24uaW5jbHVkZVN0YWNrIGlzIGRlcHJlY2F0ZWQsIHVzZSBjaGFpLmNvbmZpZy5pbmNsdWRlU3RhY2sgaW5zdGVhZC4nKTtcbiAgICAgIGNvbmZpZy5pbmNsdWRlU3RhY2sgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBc3NlcnRpb24sICdzaG93RGlmZicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3NlcnRpb24uc2hvd0RpZmYgaXMgZGVwcmVjYXRlZCwgdXNlIGNoYWkuY29uZmlnLnNob3dEaWZmIGluc3RlYWQuJyk7XG4gICAgICByZXR1cm4gY29uZmlnLnNob3dEaWZmO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3NlcnRpb24uc2hvd0RpZmYgaXMgZGVwcmVjYXRlZCwgdXNlIGNoYWkuY29uZmlnLnNob3dEaWZmIGluc3RlYWQuJyk7XG4gICAgICBjb25maWcuc2hvd0RpZmYgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHV0aWwuYWRkUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGZuKTtcbiAgfTtcblxuICBBc3NlcnRpb24uYWRkTWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdXRpbC5hZGRNZXRob2QodGhpcy5wcm90b3R5cGUsIG5hbWUsIGZuKTtcbiAgfTtcblxuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZuLCBjaGFpbmluZ0JlaGF2aW9yKSB7XG4gICAgdXRpbC5hZGRDaGFpbmFibGVNZXRob2QodGhpcy5wcm90b3R5cGUsIG5hbWUsIGZuLCBjaGFpbmluZ0JlaGF2aW9yKTtcbiAgfTtcblxuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTm9vcCA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgdXRpbC5hZGRDaGFpbmFibGVNZXRob2QodGhpcy5wcm90b3R5cGUsIG5hbWUsIE5PT1AsIGZuKTtcbiAgfTtcblxuICBBc3NlcnRpb24ub3ZlcndyaXRlUHJvcGVydHkgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB1dGlsLm92ZXJ3cml0ZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLCBuYW1lLCBmbik7XG4gIH07XG5cbiAgQXNzZXJ0aW9uLm92ZXJ3cml0ZU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIHV0aWwub3ZlcndyaXRlTWV0aG9kKHRoaXMucHJvdG90eXBlLCBuYW1lLCBmbik7XG4gIH07XG5cbiAgQXNzZXJ0aW9uLm92ZXJ3cml0ZUNoYWluYWJsZU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lLCBmbiwgY2hhaW5pbmdCZWhhdmlvcikge1xuICAgIHV0aWwub3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kKHRoaXMucHJvdG90eXBlLCBuYW1lLCBmbiwgY2hhaW5pbmdCZWhhdmlvcik7XG4gIH07XG5cbiAgLyohXG4gICAqICMjIyAuYXNzZXJ0KGV4cHJlc3Npb24sIG1lc3NhZ2UsIG5lZ2F0ZU1lc3NhZ2UsIGV4cGVjdGVkLCBhY3R1YWwpXG4gICAqXG4gICAqIEV4ZWN1dGVzIGFuIGV4cHJlc3Npb24gYW5kIGNoZWNrIGV4cGVjdGF0aW9ucy4gVGhyb3dzIEFzc2VydGlvbkVycm9yIGZvciByZXBvcnRpbmcgaWYgdGVzdCBkb2Vzbid0IHBhc3MuXG4gICAqXG4gICAqIEBuYW1lIGFzc2VydFxuICAgKiBAcGFyYW0ge1BoaWxvc29waGljYWx9IGV4cHJlc3Npb24gdG8gYmUgdGVzdGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nIG9yIEZ1bmN0aW9ufSBtZXNzYWdlIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBtZXNzYWdlIHRvIGRpc3BsYXkgaWYgZmFpbHNcbiAgICogQHBhcmFtIHtTdHJpbmcgb3IgRnVuY3Rpb259IG5lZ2F0ZWRNZXNzYWdlIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBuZWdhdGVkTWVzc2FnZSB0byBkaXNwbGF5IGlmIG5lZ2F0ZWQgZXhwcmVzc2lvbiBmYWlsc1xuICAgKiBAcGFyYW0ge01peGVkfSBleHBlY3RlZCB2YWx1ZSAocmVtZW1iZXIgdG8gY2hlY2sgZm9yIG5lZ2F0aW9uKVxuICAgKiBAcGFyYW0ge01peGVkfSBhY3R1YWwgKG9wdGlvbmFsKSB3aWxsIGRlZmF1bHQgdG8gYHRoaXMub2JqYFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgQXNzZXJ0aW9uLnByb3RvdHlwZS5hc3NlcnQgPSBmdW5jdGlvbiAoZXhwciwgbXNnLCBuZWdhdGVNc2csIGV4cGVjdGVkLCBfYWN0dWFsLCBzaG93RGlmZikge1xuICAgIHZhciBvayA9IHV0aWwudGVzdCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh0cnVlICE9PSBzaG93RGlmZikgc2hvd0RpZmYgPSBmYWxzZTtcbiAgICBpZiAodHJ1ZSAhPT0gY29uZmlnLnNob3dEaWZmKSBzaG93RGlmZiA9IGZhbHNlO1xuXG4gICAgaWYgKCFvaykge1xuICAgICAgdmFyIG1zZyA9IHV0aWwuZ2V0TWVzc2FnZSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICwgYWN0dWFsID0gdXRpbC5nZXRBY3R1YWwodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHRocm93IG5ldyBBc3NlcnRpb25FcnJvcihtc2csIHtcbiAgICAgICAgICBhY3R1YWw6IGFjdHVhbFxuICAgICAgICAsIGV4cGVjdGVkOiBleHBlY3RlZFxuICAgICAgICAsIHNob3dEaWZmOiBzaG93RGlmZlxuICAgICAgfSwgKGNvbmZpZy5pbmNsdWRlU3RhY2spID8gdGhpcy5hc3NlcnQgOiBmbGFnKHRoaXMsICdzc2ZpJykpO1xuICAgIH1cbiAgfTtcblxuICAvKiFcbiAgICogIyMjIC5fb2JqXG4gICAqXG4gICAqIFF1aWNrIHJlZmVyZW5jZSB0byBzdG9yZWQgYGFjdHVhbGAgdmFsdWUgZm9yIHBsdWdpbiBkZXZlbG9wZXJzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFzc2VydGlvbi5wcm90b3R5cGUsICdfb2JqJyxcbiAgICB7IGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgLCBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgZmxhZyh0aGlzLCAnb2JqZWN0JywgdmFsKTtcbiAgICAgIH1cbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqICMjIyBjb25maWcuaW5jbHVkZVN0YWNrXG4gICAqXG4gICAqIFVzZXIgY29uZmlndXJhYmxlIHByb3BlcnR5LCBpbmZsdWVuY2VzIHdoZXRoZXIgc3RhY2sgdHJhY2VcbiAgICogaXMgaW5jbHVkZWQgaW4gQXNzZXJ0aW9uIGVycm9yIG1lc3NhZ2UuIERlZmF1bHQgb2YgZmFsc2VcbiAgICogc3VwcHJlc3NlcyBzdGFjayB0cmFjZSBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAgICpcbiAgICogICAgIGNoYWkuY29uZmlnLmluY2x1ZGVTdGFjayA9IHRydWU7ICAvLyBlbmFibGUgc3RhY2sgb24gZXJyb3JcbiAgICpcbiAgICogQHBhcmFtIHtCb29sZWFufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICAgaW5jbHVkZVN0YWNrOiBmYWxzZSxcblxuICAvKipcbiAgICogIyMjIGNvbmZpZy5zaG93RGlmZlxuICAgKlxuICAgKiBVc2VyIGNvbmZpZ3VyYWJsZSBwcm9wZXJ0eSwgaW5mbHVlbmNlcyB3aGV0aGVyIG9yIG5vdFxuICAgKiB0aGUgYHNob3dEaWZmYCBmbGFnIHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgdGhyb3duXG4gICAqIEFzc2VydGlvbkVycm9ycy4gYGZhbHNlYCB3aWxsIGFsd2F5cyBiZSBgZmFsc2VgOyBgdHJ1ZWBcbiAgICogd2lsbCBiZSB0cnVlIHdoZW4gdGhlIGFzc2VydGlvbiBoYXMgcmVxdWVzdGVkIGEgZGlmZlxuICAgKiBiZSBzaG93bi5cbiAgICpcbiAgICogQHBhcmFtIHtCb29sZWFufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzaG93RGlmZjogdHJ1ZSxcblxuICAvKipcbiAgICogIyMjIGNvbmZpZy50cnVuY2F0ZVRocmVzaG9sZFxuICAgKlxuICAgKiBVc2VyIGNvbmZpZ3VyYWJsZSBwcm9wZXJ0eSwgc2V0cyBsZW5ndGggdGhyZXNob2xkIGZvciBhY3R1YWwgYW5kXG4gICAqIGV4cGVjdGVkIHZhbHVlcyBpbiBhc3NlcnRpb24gZXJyb3JzLiBJZiB0aGlzIHRocmVzaG9sZCBpcyBleGNlZWRlZCxcbiAgICogdGhlIHZhbHVlIGlzIHRydW5jYXRlZC5cbiAgICpcbiAgICogU2V0IGl0IHRvIHplcm8gaWYgeW91IHdhbnQgdG8gZGlzYWJsZSB0cnVuY2F0aW5nIGFsdG9nZXRoZXIuXG4gICAqXG4gICAqICAgICBjaGFpLmNvbmZpZy50cnVuY2F0ZVRocmVzaG9sZCA9IDA7ICAvLyBkaXNhYmxlIHRydW5jYXRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHRydW5jYXRlVGhyZXNob2xkOiA0MFxuXG59O1xuIiwiLyohXG4gKiBjaGFpXG4gKiBodHRwOi8vY2hhaWpzLmNvbVxuICogQ29weXJpZ2h0KGMpIDIwMTEtMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNoYWksIF8pIHtcbiAgdmFyIEFzc2VydGlvbiA9IGNoYWkuQXNzZXJ0aW9uXG4gICAgLCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbiAgICAsIGZsYWcgPSBfLmZsYWc7XG5cbiAgLyoqXG4gICAqICMjIyBMYW5ndWFnZSBDaGFpbnNcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBhcmUgcHJvdmlkZWQgYXMgY2hhaW5hYmxlIGdldHRlcnMgdG9cbiAgICogaW1wcm92ZSB0aGUgcmVhZGFiaWxpdHkgb2YgeW91ciBhc3NlcnRpb25zLiBUaGV5XG4gICAqIGRvIG5vdCBwcm92aWRlIHRlc3RpbmcgY2FwYWJpbGl0aWVzIHVubGVzcyB0aGV5XG4gICAqIGhhdmUgYmVlbiBvdmVyd3JpdHRlbiBieSBhIHBsdWdpbi5cbiAgICpcbiAgICogKipDaGFpbnMqKlxuICAgKlxuICAgKiAtIHRvXG4gICAqIC0gYmVcbiAgICogLSBiZWVuXG4gICAqIC0gaXNcbiAgICogLSB0aGF0XG4gICAqIC0gYW5kXG4gICAqIC0gaGFzXG4gICAqIC0gaGF2ZVxuICAgKiAtIHdpdGhcbiAgICogLSBhdFxuICAgKiAtIG9mXG4gICAqIC0gc2FtZVxuICAgKlxuICAgKiBAbmFtZSBsYW5ndWFnZSBjaGFpbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgWyAndG8nLCAnYmUnLCAnYmVlbidcbiAgLCAnaXMnLCAnYW5kJywgJ2hhcycsICdoYXZlJ1xuICAsICd3aXRoJywgJ3RoYXQnLCAnYXQnXG4gICwgJ29mJywgJ3NhbWUnIF0uZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICBBc3NlcnRpb24uYWRkUHJvcGVydHkoY2hhaW4sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5ub3RcbiAgICpcbiAgICogTmVnYXRlcyBhbnkgb2YgYXNzZXJ0aW9ucyBmb2xsb3dpbmcgaW4gdGhlIGNoYWluLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KGZvbykudG8ubm90LmVxdWFsKCdiYXInKTtcbiAgICogICAgIGV4cGVjdChnb29kRm4pLnRvLm5vdC50aHJvdyhFcnJvcik7XG4gICAqICAgICBleHBlY3QoeyBmb286ICdiYXonIH0pLnRvLmhhdmUucHJvcGVydHkoJ2ZvbycpXG4gICAqICAgICAgIC5hbmQubm90LmVxdWFsKCdiYXInKTtcbiAgICpcbiAgICogQG5hbWUgbm90XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnbm90JywgZnVuY3Rpb24gKCkge1xuICAgIGZsYWcodGhpcywgJ25lZ2F0ZScsIHRydWUpO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5kZWVwXG4gICAqXG4gICAqIFNldHMgdGhlIGBkZWVwYCBmbGFnLCBsYXRlciB1c2VkIGJ5IHRoZSBgZXF1YWxgIGFuZFxuICAgKiBgcHJvcGVydHlgIGFzc2VydGlvbnMuXG4gICAqXG4gICAqICAgICBleHBlY3QoZm9vKS50by5kZWVwLmVxdWFsKHsgYmFyOiAnYmF6JyB9KTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogeyBiYXI6IHsgYmF6OiAncXV1eCcgfSB9IH0pXG4gICAqICAgICAgIC50by5oYXZlLmRlZXAucHJvcGVydHkoJ2Zvby5iYXIuYmF6JywgJ3F1dXgnKTtcbiAgICpcbiAgICogQG5hbWUgZGVlcFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkUHJvcGVydHkoJ2RlZXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgZmxhZyh0aGlzLCAnZGVlcCcsIHRydWUpO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5hKHR5cGUpXG4gICAqXG4gICAqIFRoZSBgYWAgYW5kIGBhbmAgYXNzZXJ0aW9ucyBhcmUgYWxpYXNlcyB0aGF0IGNhbiBiZVxuICAgKiB1c2VkIGVpdGhlciBhcyBsYW5ndWFnZSBjaGFpbnMgb3IgdG8gYXNzZXJ0IGEgdmFsdWUnc1xuICAgKiB0eXBlLlxuICAgKlxuICAgKiAgICAgLy8gdHlwZW9mXG4gICAqICAgICBleHBlY3QoJ3Rlc3QnKS50by5iZS5hKCdzdHJpbmcnKTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogJ2JhcicgfSkudG8uYmUuYW4oJ29iamVjdCcpO1xuICAgKiAgICAgZXhwZWN0KG51bGwpLnRvLmJlLmEoJ251bGwnKTtcbiAgICogICAgIGV4cGVjdCh1bmRlZmluZWQpLnRvLmJlLmFuKCd1bmRlZmluZWQnKTtcbiAgICpcbiAgICogICAgIC8vIGxhbmd1YWdlIGNoYWluXG4gICAqICAgICBleHBlY3QoZm9vKS50by5iZS5hbi5pbnN0YW5jZW9mKEZvbyk7XG4gICAqXG4gICAqIEBuYW1lIGFcbiAgICogQGFsaWFzIGFuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYW4gKHR5cGUsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsIGFydGljbGUgPSB+WyAnYScsICdlJywgJ2knLCAnbycsICd1JyBdLmluZGV4T2YodHlwZS5jaGFyQXQoMCkpID8gJ2FuICcgOiAnYSAnO1xuXG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIHR5cGUgPT09IF8udHlwZShvYmopXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlICcgKyBhcnRpY2xlICsgdHlwZVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSBub3QgdG8gYmUgJyArIGFydGljbGUgKyB0eXBlXG4gICAgKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2FuJywgYW4pO1xuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kKCdhJywgYW4pO1xuXG4gIC8qKlxuICAgKiAjIyMgLmluY2x1ZGUodmFsdWUpXG4gICAqXG4gICAqIFRoZSBgaW5jbHVkZWAgYW5kIGBjb250YWluYCBhc3NlcnRpb25zIGNhbiBiZSB1c2VkIGFzIGVpdGhlciBwcm9wZXJ0eVxuICAgKiBiYXNlZCBsYW5ndWFnZSBjaGFpbnMgb3IgYXMgbWV0aG9kcyB0byBhc3NlcnQgdGhlIGluY2x1c2lvbiBvZiBhbiBvYmplY3RcbiAgICogaW4gYW4gYXJyYXkgb3IgYSBzdWJzdHJpbmcgaW4gYSBzdHJpbmcuIFdoZW4gdXNlZCBhcyBsYW5ndWFnZSBjaGFpbnMsXG4gICAqIHRoZXkgdG9nZ2xlIHRoZSBgY29udGFpbmAgZmxhZyBmb3IgdGhlIGBrZXlzYCBhc3NlcnRpb24uXG4gICAqXG4gICAqICAgICBleHBlY3QoWzEsMiwzXSkudG8uaW5jbHVkZSgyKTtcbiAgICogICAgIGV4cGVjdCgnZm9vYmFyJykudG8uY29udGFpbignZm9vJyk7XG4gICAqICAgICBleHBlY3QoeyBmb286ICdiYXInLCBoZWxsbzogJ3VuaXZlcnNlJyB9KS50by5pbmNsdWRlLmtleXMoJ2ZvbycpO1xuICAgKlxuICAgKiBAbmFtZSBpbmNsdWRlXG4gICAqIEBhbGlhcyBjb250YWluXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ3xOdW1iZXJ9IG9ialxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluY2x1ZGVDaGFpbmluZ0JlaGF2aW9yICgpIHtcbiAgICBmbGFnKHRoaXMsICdjb250YWlucycsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jbHVkZSAodmFsLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgdmFyIGV4cGVjdGVkID0gZmFsc2U7XG4gICAgaWYgKF8udHlwZShvYmopID09PSAnYXJyYXknICYmIF8udHlwZSh2YWwpID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKF8uZXFsKG9ialtpXSwgdmFsKSkge1xuICAgICAgICAgIGV4cGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXy50eXBlKHZhbCkgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIWZsYWcodGhpcywgJ25lZ2F0ZScpKSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gdmFsKSBuZXcgQXNzZXJ0aW9uKG9iaikucHJvcGVydHkoaywgdmFsW2tdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN1YnNldCA9IHt9XG4gICAgICBmb3IgKHZhciBrIGluIHZhbCkgc3Vic2V0W2tdID0gb2JqW2tdXG4gICAgICBleHBlY3RlZCA9IF8uZXFsKHN1YnNldCwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwZWN0ZWQgPSBvYmogJiYgfm9iai5pbmRleE9mKHZhbClcbiAgICB9XG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIGV4cGVjdGVkXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGluY2x1ZGUgJyArIF8uaW5zcGVjdCh2YWwpXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBpbmNsdWRlICcgKyBfLmluc3BlY3QodmFsKSk7XG4gIH1cblxuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kKCdpbmNsdWRlJywgaW5jbHVkZSwgaW5jbHVkZUNoYWluaW5nQmVoYXZpb3IpO1xuICBBc3NlcnRpb24uYWRkQ2hhaW5hYmxlTWV0aG9kKCdjb250YWluJywgaW5jbHVkZSwgaW5jbHVkZUNoYWluaW5nQmVoYXZpb3IpO1xuXG4gIC8qKlxuICAgKiAjIyMgLm9rXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIHRydXRoeS5cbiAgICpcbiAgICogICAgIGV4cGVjdCgnZXZlcnRoaW5nJykudG8uYmUub2s7XG4gICAqICAgICBleHBlY3QoMSkudG8uYmUub2s7XG4gICAqICAgICBleHBlY3QoZmFsc2UpLnRvLm5vdC5iZS5vaztcbiAgICogICAgIGV4cGVjdCh1bmRlZmluZWQpLnRvLm5vdC5iZS5vaztcbiAgICogICAgIGV4cGVjdChudWxsKS50by5ub3QuYmUub2s7XG4gICAqXG4gICAqIENhbiBhbHNvIGJlIHVzZWQgYXMgYSBmdW5jdGlvbiwgd2hpY2ggcHJldmVudHMgc29tZSBsaW50ZXIgZXJyb3JzLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdldmVydGhpbmcnKS50by5iZS5vaygpO1xuICAgKiAgICAgXG4gICAqIEBuYW1lIG9rXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVOb29wKCdvaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgZmxhZyh0aGlzLCAnb2JqZWN0JylcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgdHJ1dGh5J1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBmYWxzeScpO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC50cnVlXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGB0cnVlYC5cbiAgICpcbiAgICogICAgIGV4cGVjdCh0cnVlKS50by5iZS50cnVlO1xuICAgKiAgICAgZXhwZWN0KDEpLnRvLm5vdC5iZS50cnVlO1xuICAgKlxuICAgKiBDYW4gYWxzbyBiZSB1c2VkIGFzIGEgZnVuY3Rpb24sIHdoaWNoIHByZXZlbnRzIHNvbWUgbGludGVyIGVycm9ycy5cbiAgICpcbiAgICogICAgIGV4cGVjdCh0cnVlKS50by5iZS50cnVlKCk7XG4gICAqXG4gICAqIEBuYW1lIHRydWVcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZENoYWluYWJsZU5vb3AoJ3RydWUnLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIHRydWUgPT09IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIHRydWUnXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGZhbHNlJ1xuICAgICAgLCB0aGlzLm5lZ2F0ZSA/IGZhbHNlIDogdHJ1ZVxuICAgICk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAjIyMgLmZhbHNlXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGBmYWxzZWAuXG4gICAqXG4gICAqICAgICBleHBlY3QoZmFsc2UpLnRvLmJlLmZhbHNlO1xuICAgKiAgICAgZXhwZWN0KDApLnRvLm5vdC5iZS5mYWxzZTtcbiAgICpcbiAgICogQ2FuIGFsc28gYmUgdXNlZCBhcyBhIGZ1bmN0aW9uLCB3aGljaCBwcmV2ZW50cyBzb21lIGxpbnRlciBlcnJvcnMuXG4gICAqXG4gICAqICAgICBleHBlY3QoZmFsc2UpLnRvLmJlLmZhbHNlKCk7XG4gICAqXG4gICAqIEBuYW1lIGZhbHNlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVOb29wKCdmYWxzZScsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgZmFsc2UgPT09IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGZhbHNlJ1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSB0cnVlJ1xuICAgICAgLCB0aGlzLm5lZ2F0ZSA/IHRydWUgOiBmYWxzZVxuICAgICk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAjIyMgLm51bGxcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgYG51bGxgLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KG51bGwpLnRvLmJlLm51bGw7XG4gICAqICAgICBleHBlY3QodW5kZWZpbmVkKS5ub3QudG8uYmUubnVsbDtcbiAgICpcbiAgICogQ2FuIGFsc28gYmUgdXNlZCBhcyBhIGZ1bmN0aW9uLCB3aGljaCBwcmV2ZW50cyBzb21lIGxpbnRlciBlcnJvcnMuXG4gICAqXG4gICAqICAgICBleHBlY3QobnVsbCkudG8uYmUubnVsbCgpO1xuICAgKlxuICAgKiBAbmFtZSBudWxsXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVOb29wKCdudWxsJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBudWxsID09PSBmbGFnKHRoaXMsICdvYmplY3QnKVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBudWxsJ1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSBub3QgdG8gYmUgbnVsbCdcbiAgICApO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC51bmRlZmluZWRcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgYHVuZGVmaW5lZGAuXG4gICAqXG4gICAqICAgICBleHBlY3QodW5kZWZpbmVkKS50by5iZS51bmRlZmluZWQ7XG4gICAqICAgICBleHBlY3QobnVsbCkudG8ubm90LmJlLnVuZGVmaW5lZDtcbiAgICpcbiAgICogQ2FuIGFsc28gYmUgdXNlZCBhcyBhIGZ1bmN0aW9uLCB3aGljaCBwcmV2ZW50cyBzb21lIGxpbnRlciBlcnJvcnMuXG4gICAqXG4gICAqICAgICBleHBlY3QodW5kZWZpbmVkKS50by5iZS51bmRlZmluZWQoKTtcbiAgICpcbiAgICogQG5hbWUgdW5kZWZpbmVkXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVOb29wKCd1bmRlZmluZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIHVuZGVmaW5lZCA9PT0gZmxhZyh0aGlzLCAnb2JqZWN0JylcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgdW5kZWZpbmVkJ1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSBub3QgdG8gYmUgdW5kZWZpbmVkJ1xuICAgICk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAjIyMgLmV4aXN0XG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIG5laXRoZXIgYG51bGxgIG5vciBgdW5kZWZpbmVkYC5cbiAgICpcbiAgICogICAgIHZhciBmb28gPSAnaGknXG4gICAqICAgICAgICwgYmFyID0gbnVsbFxuICAgKiAgICAgICAsIGJhejtcbiAgICpcbiAgICogICAgIGV4cGVjdChmb28pLnRvLmV4aXN0O1xuICAgKiAgICAgZXhwZWN0KGJhcikudG8ubm90LmV4aXN0O1xuICAgKiAgICAgZXhwZWN0KGJheikudG8ubm90LmV4aXN0O1xuICAgKlxuICAgKiBDYW4gYWxzbyBiZSB1c2VkIGFzIGEgZnVuY3Rpb24sIHdoaWNoIHByZXZlbnRzIHNvbWUgbGludGVyIGVycm9ycy5cbiAgICpcbiAgICogICAgIGV4cGVjdChmb28pLnRvLmV4aXN0KCk7XG4gICAqXG4gICAqIEBuYW1lIGV4aXN0XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVOb29wKCdleGlzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgbnVsbCAhPSBmbGFnKHRoaXMsICdvYmplY3QnKVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBleGlzdCdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGV4aXN0J1xuICAgICk7XG4gIH0pO1xuXG5cbiAgLyoqXG4gICAqICMjIyAuZW1wdHlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQncyBsZW5ndGggaXMgYDBgLiBGb3IgYXJyYXlzLCBpdCBjaGVja3NcbiAgICogdGhlIGBsZW5ndGhgIHByb3BlcnR5LiBGb3Igb2JqZWN0cywgaXQgZ2V0cyB0aGUgY291bnQgb2ZcbiAgICogZW51bWVyYWJsZSBrZXlzLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KFtdKS50by5iZS5lbXB0eTtcbiAgICogICAgIGV4cGVjdCgnJykudG8uYmUuZW1wdHk7XG4gICAqICAgICBleHBlY3Qoe30pLnRvLmJlLmVtcHR5O1xuICAgKlxuICAgKiBDYW4gYWxzbyBiZSB1c2VkIGFzIGEgZnVuY3Rpb24sIHdoaWNoIHByZXZlbnRzIHNvbWUgbGludGVyIGVycm9ycy5cbiAgICpcbiAgICogICAgIGV4cGVjdChbXSkudG8uYmUuZW1wdHkoKTtcbiAgICpcbiAgICogQG5hbWUgZW1wdHlcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZENoYWluYWJsZU5vb3AoJ2VtcHR5JywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKVxuICAgICAgLCBleHBlY3RlZCA9IG9iajtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikgfHwgJ3N0cmluZycgPT09IHR5cGVvZiBvYmplY3QpIHtcbiAgICAgIGV4cGVjdGVkID0gb2JqLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICBleHBlY3RlZCA9IE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAhZXhwZWN0ZWRcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgZW1wdHknXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IG5vdCB0byBiZSBlbXB0eSdcbiAgICApO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5hcmd1bWVudHNcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgYW4gYXJndW1lbnRzIG9iamVjdC5cbiAgICpcbiAgICogICAgIGZ1bmN0aW9uIHRlc3QgKCkge1xuICAgKiAgICAgICBleHBlY3QoYXJndW1lbnRzKS50by5iZS5hcmd1bWVudHM7XG4gICAqICAgICB9XG4gICAqXG4gICAqIENhbiBhbHNvIGJlIHVzZWQgYXMgYSBmdW5jdGlvbiwgd2hpY2ggcHJldmVudHMgc29tZSBsaW50ZXIgZXJyb3JzLlxuICAgKlxuICAgKiAgICAgZnVuY3Rpb24gdGVzdCAoKSB7XG4gICAqICAgICAgIGV4cGVjdChhcmd1bWVudHMpLnRvLmJlLmFyZ3VtZW50cygpO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBAbmFtZSBhcmd1bWVudHNcbiAgICogQGFsaWFzIEFyZ3VtZW50c1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBjaGVja0FyZ3VtZW50cyAoKSB7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgJ1tvYmplY3QgQXJndW1lbnRzXScgPT09IHR5cGVcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgYXJndW1lbnRzIGJ1dCBnb3QgJyArIHR5cGVcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGJlIGFyZ3VtZW50cydcbiAgICApO1xuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZENoYWluYWJsZU5vb3AoJ2FyZ3VtZW50cycsIGNoZWNrQXJndW1lbnRzKTtcbiAgQXNzZXJ0aW9uLmFkZENoYWluYWJsZU5vb3AoJ0FyZ3VtZW50cycsIGNoZWNrQXJndW1lbnRzKTtcblxuICAvKipcbiAgICogIyMjIC5lcXVhbCh2YWx1ZSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgc3RyaWN0bHkgZXF1YWwgKGA9PT1gKSB0byBgdmFsdWVgLlxuICAgKiBBbHRlcm5hdGVseSwgaWYgdGhlIGBkZWVwYCBmbGFnIGlzIHNldCwgYXNzZXJ0cyB0aGF0XG4gICAqIHRoZSB0YXJnZXQgaXMgZGVlcGx5IGVxdWFsIHRvIGB2YWx1ZWAuXG4gICAqXG4gICAqICAgICBleHBlY3QoJ2hlbGxvJykudG8uZXF1YWwoJ2hlbGxvJyk7XG4gICAqICAgICBleHBlY3QoNDIpLnRvLmVxdWFsKDQyKTtcbiAgICogICAgIGV4cGVjdCgxKS50by5ub3QuZXF1YWwodHJ1ZSk7XG4gICAqICAgICBleHBlY3QoeyBmb286ICdiYXInIH0pLnRvLm5vdC5lcXVhbCh7IGZvbzogJ2JhcicgfSk7XG4gICAqICAgICBleHBlY3QoeyBmb286ICdiYXInIH0pLnRvLmRlZXAuZXF1YWwoeyBmb286ICdiYXInIH0pO1xuICAgKlxuICAgKiBAbmFtZSBlcXVhbFxuICAgKiBAYWxpYXMgZXF1YWxzXG4gICAqIEBhbGlhcyBlcVxuICAgKiBAYWxpYXMgZGVlcC5lcXVhbFxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFzc2VydEVxdWFsICh2YWwsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICBpZiAoZmxhZyh0aGlzLCAnZGVlcCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcWwodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgdmFsID09PSBvYmpcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBlcXVhbCAje2V4cH0nXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGVxdWFsICN7ZXhwfSdcbiAgICAgICAgLCB2YWxcbiAgICAgICAgLCB0aGlzLl9vYmpcbiAgICAgICAgLCB0cnVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2VxdWFsJywgYXNzZXJ0RXF1YWwpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdlcXVhbHMnLCBhc3NlcnRFcXVhbCk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2VxJywgYXNzZXJ0RXF1YWwpO1xuXG4gIC8qKlxuICAgKiAjIyMgLmVxbCh2YWx1ZSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgZGVlcGx5IGVxdWFsIHRvIGB2YWx1ZWAuXG4gICAqXG4gICAqICAgICBleHBlY3QoeyBmb286ICdiYXInIH0pLnRvLmVxbCh7IGZvbzogJ2JhcicgfSk7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmVxbChbIDEsIDIsIDMgXSk7XG4gICAqXG4gICAqIEBuYW1lIGVxbFxuICAgKiBAYWxpYXMgZXFsc1xuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFzc2VydEVxbChvYmosIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBfLmVxbChvYmosIGZsYWcodGhpcywgJ29iamVjdCcpKVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBkZWVwbHkgZXF1YWwgI3tleHB9J1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgZGVlcGx5IGVxdWFsICN7ZXhwfSdcbiAgICAgICwgb2JqXG4gICAgICAsIHRoaXMuX29ialxuICAgICAgLCB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2VxbCcsIGFzc2VydEVxbCk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2VxbHMnLCBhc3NlcnRFcWwpO1xuXG4gIC8qKlxuICAgKiAjIyMgLmFib3ZlKHZhbHVlKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBncmVhdGVyIHRoYW4gYHZhbHVlYC5cbiAgICpcbiAgICogICAgIGV4cGVjdCgxMCkudG8uYmUuYWJvdmUoNSk7XG4gICAqXG4gICAqIENhbiBhbHNvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgbGVuZ3RoYCB0b1xuICAgKiBhc3NlcnQgYSBtaW5pbXVtIGxlbmd0aC4gVGhlIGJlbmVmaXQgYmVpbmcgYVxuICAgKiBtb3JlIGluZm9ybWF0aXZlIGVycm9yIG1lc3NhZ2UgdGhhbiBpZiB0aGUgbGVuZ3RoXG4gICAqIHdhcyBzdXBwbGllZCBkaXJlY3RseS5cbiAgICpcbiAgICogICAgIGV4cGVjdCgnZm9vJykudG8uaGF2ZS5sZW5ndGguYWJvdmUoMik7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmhhdmUubGVuZ3RoLmFib3ZlKDIpO1xuICAgKlxuICAgKiBAbmFtZSBhYm92ZVxuICAgKiBAYWxpYXMgZ3RcbiAgICogQGFsaWFzIGdyZWF0ZXJUaGFuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFzc2VydEFib3ZlIChuLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgaWYgKGZsYWcodGhpcywgJ2RvTGVuZ3RoJykpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUucHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgICAgdmFyIGxlbiA9IG9iai5sZW5ndGg7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBsZW4gPiBuXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gaGF2ZSBhIGxlbmd0aCBhYm92ZSAje2V4cH0gYnV0IGdvdCAje2FjdH0nXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGhhdmUgYSBsZW5ndGggYWJvdmUgI3tleHB9J1xuICAgICAgICAsIG5cbiAgICAgICAgLCBsZW5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIG9iaiA+IG5cbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBhYm92ZSAnICsgblxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGF0IG1vc3QgJyArIG5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnYWJvdmUnLCBhc3NlcnRBYm92ZSk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2d0JywgYXNzZXJ0QWJvdmUpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdncmVhdGVyVGhhbicsIGFzc2VydEFib3ZlKTtcblxuICAvKipcbiAgICogIyMjIC5sZWFzdCh2YWx1ZSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGB2YWx1ZWAuXG4gICAqXG4gICAqICAgICBleHBlY3QoMTApLnRvLmJlLmF0LmxlYXN0KDEwKTtcbiAgICpcbiAgICogQ2FuIGFsc28gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBsZW5ndGhgIHRvXG4gICAqIGFzc2VydCBhIG1pbmltdW0gbGVuZ3RoLiBUaGUgYmVuZWZpdCBiZWluZyBhXG4gICAqIG1vcmUgaW5mb3JtYXRpdmUgZXJyb3IgbWVzc2FnZSB0aGFuIGlmIHRoZSBsZW5ndGhcbiAgICogd2FzIHN1cHBsaWVkIGRpcmVjdGx5LlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdmb28nKS50by5oYXZlLmxlbmd0aC5vZi5hdC5sZWFzdCgyKTtcbiAgICogICAgIGV4cGVjdChbIDEsIDIsIDMgXSkudG8uaGF2ZS5sZW5ndGgub2YuYXQubGVhc3QoMyk7XG4gICAqXG4gICAqIEBuYW1lIGxlYXN0XG4gICAqIEBhbGlhcyBndGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0TGVhc3QgKG4sIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICBpZiAoZmxhZyh0aGlzLCAnZG9MZW5ndGgnKSkge1xuICAgICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykudG8uaGF2ZS5wcm9wZXJ0eSgnbGVuZ3RoJyk7XG4gICAgICB2YXIgbGVuID0gb2JqLmxlbmd0aDtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIGxlbiA+PSBuXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gaGF2ZSBhIGxlbmd0aCBhdCBsZWFzdCAje2V4cH0gYnV0IGdvdCAje2FjdH0nXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gaGF2ZSBhIGxlbmd0aCBiZWxvdyAje2V4cH0nXG4gICAgICAgICwgblxuICAgICAgICAsIGxlblxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgb2JqID49IG5cbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBhdCBsZWFzdCAnICsgblxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGJlbG93ICcgKyBuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2xlYXN0JywgYXNzZXJ0TGVhc3QpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdndGUnLCBhc3NlcnRMZWFzdCk7XG5cbiAgLyoqXG4gICAqICMjIyAuYmVsb3codmFsdWUpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGlzIGxlc3MgdGhhbiBgdmFsdWVgLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KDUpLnRvLmJlLmJlbG93KDEwKTtcbiAgICpcbiAgICogQ2FuIGFsc28gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBsZW5ndGhgIHRvXG4gICAqIGFzc2VydCBhIG1heGltdW0gbGVuZ3RoLiBUaGUgYmVuZWZpdCBiZWluZyBhXG4gICAqIG1vcmUgaW5mb3JtYXRpdmUgZXJyb3IgbWVzc2FnZSB0aGFuIGlmIHRoZSBsZW5ndGhcbiAgICogd2FzIHN1cHBsaWVkIGRpcmVjdGx5LlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdmb28nKS50by5oYXZlLmxlbmd0aC5iZWxvdyg0KTtcbiAgICogICAgIGV4cGVjdChbIDEsIDIsIDMgXSkudG8uaGF2ZS5sZW5ndGguYmVsb3coNCk7XG4gICAqXG4gICAqIEBuYW1lIGJlbG93XG4gICAqIEBhbGlhcyBsdFxuICAgKiBAYWxpYXMgbGVzc1RoYW5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0QmVsb3cgKG4sIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICBpZiAoZmxhZyh0aGlzLCAnZG9MZW5ndGgnKSkge1xuICAgICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykudG8uaGF2ZS5wcm9wZXJ0eSgnbGVuZ3RoJyk7XG4gICAgICB2YXIgbGVuID0gb2JqLmxlbmd0aDtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIGxlbiA8IG5cbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBoYXZlIGEgbGVuZ3RoIGJlbG93ICN7ZXhwfSBidXQgZ290ICN7YWN0fSdcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgaGF2ZSBhIGxlbmd0aCBiZWxvdyAje2V4cH0nXG4gICAgICAgICwgblxuICAgICAgICAsIGxlblxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgb2JqIDwgblxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGJlIGJlbG93ICcgKyBuXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgYXQgbGVhc3QgJyArIG5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnYmVsb3cnLCBhc3NlcnRCZWxvdyk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2x0JywgYXNzZXJ0QmVsb3cpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdsZXNzVGhhbicsIGFzc2VydEJlbG93KTtcblxuICAvKipcbiAgICogIyMjIC5tb3N0KHZhbHVlKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYHZhbHVlYC5cbiAgICpcbiAgICogICAgIGV4cGVjdCg1KS50by5iZS5hdC5tb3N0KDUpO1xuICAgKlxuICAgKiBDYW4gYWxzbyBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYGxlbmd0aGAgdG9cbiAgICogYXNzZXJ0IGEgbWF4aW11bSBsZW5ndGguIFRoZSBiZW5lZml0IGJlaW5nIGFcbiAgICogbW9yZSBpbmZvcm1hdGl2ZSBlcnJvciBtZXNzYWdlIHRoYW4gaWYgdGhlIGxlbmd0aFxuICAgKiB3YXMgc3VwcGxpZWQgZGlyZWN0bHkuXG4gICAqXG4gICAqICAgICBleHBlY3QoJ2ZvbycpLnRvLmhhdmUubGVuZ3RoLm9mLmF0Lm1vc3QoNCk7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmhhdmUubGVuZ3RoLm9mLmF0Lm1vc3QoMyk7XG4gICAqXG4gICAqIEBuYW1lIG1vc3RcbiAgICogQGFsaWFzIGx0ZVxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRNb3N0IChuLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgaWYgKGZsYWcodGhpcywgJ2RvTGVuZ3RoJykpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUucHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgICAgdmFyIGxlbiA9IG9iai5sZW5ndGg7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBsZW4gPD0gblxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSBsZW5ndGggYXQgbW9zdCAje2V4cH0gYnV0IGdvdCAje2FjdH0nXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gaGF2ZSBhIGxlbmd0aCBhYm92ZSAje2V4cH0nXG4gICAgICAgICwgblxuICAgICAgICAsIGxlblxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgb2JqIDw9IG5cbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBhdCBtb3N0ICcgKyBuXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgYWJvdmUgJyArIG5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnbW9zdCcsIGFzc2VydE1vc3QpO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdsdGUnLCBhc3NlcnRNb3N0KTtcblxuICAvKipcbiAgICogIyMjIC53aXRoaW4oc3RhcnQsIGZpbmlzaClcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgd2l0aGluIGEgcmFuZ2UuXG4gICAqXG4gICAqICAgICBleHBlY3QoNykudG8uYmUud2l0aGluKDUsMTApO1xuICAgKlxuICAgKiBDYW4gYWxzbyBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYGxlbmd0aGAgdG9cbiAgICogYXNzZXJ0IGEgbGVuZ3RoIHJhbmdlLiBUaGUgYmVuZWZpdCBiZWluZyBhXG4gICAqIG1vcmUgaW5mb3JtYXRpdmUgZXJyb3IgbWVzc2FnZSB0aGFuIGlmIHRoZSBsZW5ndGhcbiAgICogd2FzIHN1cHBsaWVkIGRpcmVjdGx5LlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdmb28nKS50by5oYXZlLmxlbmd0aC53aXRoaW4oMiw0KTtcbiAgICogICAgIGV4cGVjdChbIDEsIDIsIDMgXSkudG8uaGF2ZS5sZW5ndGgud2l0aGluKDIsNCk7XG4gICAqXG4gICAqIEBuYW1lIHdpdGhpblxuICAgKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgbG93ZXJib3VuZCBpbmNsdXNpdmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZpbmlzaCB1cHBlcmJvdW5kIGluY2x1c2l2ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ3dpdGhpbicsIGZ1bmN0aW9uIChzdGFydCwgZmluaXNoLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0JylcbiAgICAgICwgcmFuZ2UgPSBzdGFydCArICcuLicgKyBmaW5pc2g7XG4gICAgaWYgKGZsYWcodGhpcywgJ2RvTGVuZ3RoJykpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUucHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgICAgdmFyIGxlbiA9IG9iai5sZW5ndGg7XG4gICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICBsZW4gPj0gc3RhcnQgJiYgbGVuIDw9IGZpbmlzaFxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSBsZW5ndGggd2l0aGluICcgKyByYW5nZVxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBoYXZlIGEgbGVuZ3RoIHdpdGhpbiAnICsgcmFuZ2VcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIG9iaiA+PSBzdGFydCAmJiBvYmogPD0gZmluaXNoXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gYmUgd2l0aGluICcgKyByYW5nZVxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBiZSB3aXRoaW4gJyArIHJhbmdlXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqICMjIyAuaW5zdGFuY2VvZihjb25zdHJ1Y3RvcilcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgYW4gaW5zdGFuY2Ugb2YgYGNvbnN0cnVjdG9yYC5cbiAgICpcbiAgICogICAgIHZhciBUZWEgPSBmdW5jdGlvbiAobmFtZSkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XG4gICAqICAgICAgICwgQ2hhaSA9IG5ldyBUZWEoJ2NoYWknKTtcbiAgICpcbiAgICogICAgIGV4cGVjdChDaGFpKS50by5iZS5hbi5pbnN0YW5jZW9mKFRlYSk7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmJlLmluc3RhbmNlb2YoQXJyYXkpO1xuICAgKlxuICAgKiBAbmFtZSBpbnN0YW5jZW9mXG4gICAqIEBwYXJhbSB7Q29uc3RydWN0b3J9IGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQGFsaWFzIGluc3RhbmNlT2ZcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2VPZiAoY29uc3RydWN0b3IsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBuYW1lID0gXy5nZXROYW1lKGNvbnN0cnVjdG9yKTtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgZmxhZyh0aGlzLCAnb2JqZWN0JykgaW5zdGFuY2VvZiBjb25zdHJ1Y3RvclxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBhbiBpbnN0YW5jZSBvZiAnICsgbmFtZVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgYmUgYW4gaW5zdGFuY2Ugb2YgJyArIG5hbWVcbiAgICApO1xuICB9O1xuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2luc3RhbmNlb2YnLCBhc3NlcnRJbnN0YW5jZU9mKTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnaW5zdGFuY2VPZicsIGFzc2VydEluc3RhbmNlT2YpO1xuXG4gIC8qKlxuICAgKiAjIyMgLnByb3BlcnR5KG5hbWUsIFt2YWx1ZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGhhcyBhIHByb3BlcnR5IGBuYW1lYCwgb3B0aW9uYWxseSBhc3NlcnRpbmcgdGhhdFxuICAgKiB0aGUgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eSBpcyBzdHJpY3RseSBlcXVhbCB0byAgYHZhbHVlYC5cbiAgICogSWYgdGhlIGBkZWVwYCBmbGFnIGlzIHNldCwgeW91IGNhbiB1c2UgZG90LSBhbmQgYnJhY2tldC1ub3RhdGlvbiBmb3IgZGVlcFxuICAgKiByZWZlcmVuY2VzIGludG8gb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgKlxuICAgKiAgICAgLy8gc2ltcGxlIHJlZmVyZW5jaW5nXG4gICAqICAgICB2YXIgb2JqID0geyBmb286ICdiYXInIH07XG4gICAqICAgICBleHBlY3Qob2JqKS50by5oYXZlLnByb3BlcnR5KCdmb28nKTtcbiAgICogICAgIGV4cGVjdChvYmopLnRvLmhhdmUucHJvcGVydHkoJ2ZvbycsICdiYXInKTtcbiAgICpcbiAgICogICAgIC8vIGRlZXAgcmVmZXJlbmNpbmdcbiAgICogICAgIHZhciBkZWVwT2JqID0ge1xuICAgKiAgICAgICAgIGdyZWVuOiB7IHRlYTogJ21hdGNoYScgfVxuICAgKiAgICAgICAsIHRlYXM6IFsgJ2NoYWknLCAnbWF0Y2hhJywgeyB0ZWE6ICdrb25hY2hhJyB9IF1cbiAgICogICAgIH07XG5cbiAgICogICAgIGV4cGVjdChkZWVwT2JqKS50by5oYXZlLmRlZXAucHJvcGVydHkoJ2dyZWVuLnRlYScsICdtYXRjaGEnKTtcbiAgICogICAgIGV4cGVjdChkZWVwT2JqKS50by5oYXZlLmRlZXAucHJvcGVydHkoJ3RlYXNbMV0nLCAnbWF0Y2hhJyk7XG4gICAqICAgICBleHBlY3QoZGVlcE9iaikudG8uaGF2ZS5kZWVwLnByb3BlcnR5KCd0ZWFzWzJdLnRlYScsICdrb25hY2hhJyk7XG4gICAqXG4gICAqIFlvdSBjYW4gYWxzbyB1c2UgYW4gYXJyYXkgYXMgdGhlIHN0YXJ0aW5nIHBvaW50IG9mIGEgYGRlZXAucHJvcGVydHlgXG4gICAqIGFzc2VydGlvbiwgb3IgdHJhdmVyc2UgbmVzdGVkIGFycmF5cy5cbiAgICpcbiAgICogICAgIHZhciBhcnIgPSBbXG4gICAqICAgICAgICAgWyAnY2hhaScsICdtYXRjaGEnLCAna29uYWNoYScgXVxuICAgKiAgICAgICAsIFsgeyB0ZWE6ICdjaGFpJyB9XG4gICAqICAgICAgICAgLCB7IHRlYTogJ21hdGNoYScgfVxuICAgKiAgICAgICAgICwgeyB0ZWE6ICdrb25hY2hhJyB9IF1cbiAgICogICAgIF07XG4gICAqXG4gICAqICAgICBleHBlY3QoYXJyKS50by5oYXZlLmRlZXAucHJvcGVydHkoJ1swXVsxXScsICdtYXRjaGEnKTtcbiAgICogICAgIGV4cGVjdChhcnIpLnRvLmhhdmUuZGVlcC5wcm9wZXJ0eSgnWzFdWzJdLnRlYScsICdrb25hY2hhJyk7XG4gICAqXG4gICAqIEZ1cnRoZXJtb3JlLCBgcHJvcGVydHlgIGNoYW5nZXMgdGhlIHN1YmplY3Qgb2YgdGhlIGFzc2VydGlvblxuICAgKiB0byBiZSB0aGUgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eSBmcm9tIHRoZSBvcmlnaW5hbCBvYmplY3QuIFRoaXNcbiAgICogcGVybWl0cyBmb3IgZnVydGhlciBjaGFpbmFibGUgYXNzZXJ0aW9ucyBvbiB0aGF0IHByb3BlcnR5LlxuICAgKlxuICAgKiAgICAgZXhwZWN0KG9iaikudG8uaGF2ZS5wcm9wZXJ0eSgnZm9vJylcbiAgICogICAgICAgLnRoYXQuaXMuYSgnc3RyaW5nJyk7XG4gICAqICAgICBleHBlY3QoZGVlcE9iaikudG8uaGF2ZS5wcm9wZXJ0eSgnZ3JlZW4nKVxuICAgKiAgICAgICAudGhhdC5pcy5hbignb2JqZWN0JylcbiAgICogICAgICAgLnRoYXQuZGVlcC5lcXVhbHMoeyB0ZWE6ICdtYXRjaGEnIH0pO1xuICAgKiAgICAgZXhwZWN0KGRlZXBPYmopLnRvLmhhdmUucHJvcGVydHkoJ3RlYXMnKVxuICAgKiAgICAgICAudGhhdC5pcy5hbignYXJyYXknKVxuICAgKiAgICAgICAud2l0aC5kZWVwLnByb3BlcnR5KCdbMl0nKVxuICAgKiAgICAgICAgIC50aGF0LmRlZXAuZXF1YWxzKHsgdGVhOiAna29uYWNoYScgfSk7XG4gICAqXG4gICAqIEBuYW1lIHByb3BlcnR5XG4gICAqIEBhbGlhcyBkZWVwLnByb3BlcnR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIChvcHRpb25hbClcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAcmV0dXJucyB2YWx1ZSBvZiBwcm9wZXJ0eSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgncHJvcGVydHknLCBmdW5jdGlvbiAobmFtZSwgdmFsLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcblxuICAgIHZhciBkZXNjcmlwdG9yID0gZmxhZyh0aGlzLCAnZGVlcCcpID8gJ2RlZXAgcHJvcGVydHkgJyA6ICdwcm9wZXJ0eSAnXG4gICAgICAsIG5lZ2F0ZSA9IGZsYWcodGhpcywgJ25lZ2F0ZScpXG4gICAgICAsIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsIHZhbHVlID0gZmxhZyh0aGlzLCAnZGVlcCcpXG4gICAgICAgID8gXy5nZXRQYXRoVmFsdWUobmFtZSwgb2JqKVxuICAgICAgICA6IG9ialtuYW1lXTtcblxuICAgIGlmIChuZWdhdGUgJiYgdW5kZWZpbmVkICE9PSB2YWwpIHtcbiAgICAgIGlmICh1bmRlZmluZWQgPT09IHZhbHVlKSB7XG4gICAgICAgIG1zZyA9IChtc2cgIT0gbnVsbCkgPyBtc2cgKyAnOiAnIDogJyc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cgKyBfLmluc3BlY3Qob2JqKSArICcgaGFzIG5vICcgKyBkZXNjcmlwdG9yICsgXy5pbnNwZWN0KG5hbWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgdW5kZWZpbmVkICE9PSB2YWx1ZVxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSAnICsgZGVzY3JpcHRvciArIF8uaW5zcGVjdChuYW1lKVxuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBoYXZlICcgKyBkZXNjcmlwdG9yICsgXy5pbnNwZWN0KG5hbWUpKTtcbiAgICB9XG5cbiAgICBpZiAodW5kZWZpbmVkICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIHZhbCA9PT0gdmFsdWVcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBoYXZlIGEgJyArIGRlc2NyaXB0b3IgKyBfLmluc3BlY3QobmFtZSkgKyAnIG9mICN7ZXhwfSwgYnV0IGdvdCAje2FjdH0nXG4gICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGhhdmUgYSAnICsgZGVzY3JpcHRvciArIF8uaW5zcGVjdChuYW1lKSArICcgb2YgI3thY3R9J1xuICAgICAgICAsIHZhbFxuICAgICAgICAsIHZhbHVlXG4gICAgICApO1xuICAgIH1cblxuICAgIGZsYWcodGhpcywgJ29iamVjdCcsIHZhbHVlKTtcbiAgfSk7XG5cblxuICAvKipcbiAgICogIyMjIC5vd25Qcm9wZXJ0eShuYW1lKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBoYXMgYW4gb3duIHByb3BlcnR5IGBuYW1lYC5cbiAgICpcbiAgICogICAgIGV4cGVjdCgndGVzdCcpLnRvLmhhdmUub3duUHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgKlxuICAgKiBAbmFtZSBvd25Qcm9wZXJ0eVxuICAgKiBAYWxpYXMgaGF2ZU93blByb3BlcnR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gYXNzZXJ0T3duUHJvcGVydHkgKG5hbWUsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgb2JqLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgb3duIHByb3BlcnR5ICcgKyBfLmluc3BlY3QobmFtZSlcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGhhdmUgb3duIHByb3BlcnR5ICcgKyBfLmluc3BlY3QobmFtZSlcbiAgICApO1xuICB9XG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnb3duUHJvcGVydHknLCBhc3NlcnRPd25Qcm9wZXJ0eSk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2hhdmVPd25Qcm9wZXJ0eScsIGFzc2VydE93blByb3BlcnR5KTtcblxuICAvKipcbiAgICogIyMjIC5sZW5ndGgodmFsdWUpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0J3MgYGxlbmd0aGAgcHJvcGVydHkgaGFzXG4gICAqIHRoZSBleHBlY3RlZCB2YWx1ZS5cbiAgICpcbiAgICogICAgIGV4cGVjdChbIDEsIDIsIDNdKS50by5oYXZlLmxlbmd0aCgzKTtcbiAgICogICAgIGV4cGVjdCgnZm9vYmFyJykudG8uaGF2ZS5sZW5ndGgoNik7XG4gICAqXG4gICAqIENhbiBhbHNvIGJlIHVzZWQgYXMgYSBjaGFpbiBwcmVjdXJzb3IgdG8gYSB2YWx1ZVxuICAgKiBjb21wYXJpc29uIGZvciB0aGUgbGVuZ3RoIHByb3BlcnR5LlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdmb28nKS50by5oYXZlLmxlbmd0aC5hYm92ZSgyKTtcbiAgICogICAgIGV4cGVjdChbIDEsIDIsIDMgXSkudG8uaGF2ZS5sZW5ndGguYWJvdmUoMik7XG4gICAqICAgICBleHBlY3QoJ2ZvbycpLnRvLmhhdmUubGVuZ3RoLmJlbG93KDQpO1xuICAgKiAgICAgZXhwZWN0KFsgMSwgMiwgMyBdKS50by5oYXZlLmxlbmd0aC5iZWxvdyg0KTtcbiAgICogICAgIGV4cGVjdCgnZm9vJykudG8uaGF2ZS5sZW5ndGgud2l0aGluKDIsNCk7XG4gICAqICAgICBleHBlY3QoWyAxLCAyLCAzIF0pLnRvLmhhdmUubGVuZ3RoLndpdGhpbigyLDQpO1xuICAgKlxuICAgKiBAbmFtZSBsZW5ndGhcbiAgICogQGFsaWFzIGxlbmd0aE9mXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRMZW5ndGhDaGFpbiAoKSB7XG4gICAgZmxhZyh0aGlzLCAnZG9MZW5ndGgnLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydExlbmd0aCAobiwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUucHJvcGVydHkoJ2xlbmd0aCcpO1xuICAgIHZhciBsZW4gPSBvYmoubGVuZ3RoO1xuXG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIGxlbiA9PSBuXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIGhhdmUgYSBsZW5ndGggb2YgI3tleHB9IGJ1dCBnb3QgI3thY3R9J1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgaGF2ZSBhIGxlbmd0aCBvZiAje2FjdH0nXG4gICAgICAsIG5cbiAgICAgICwgbGVuXG4gICAgKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2xlbmd0aCcsIGFzc2VydExlbmd0aCwgYXNzZXJ0TGVuZ3RoQ2hhaW4pO1xuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdsZW5ndGhPZicsIGFzc2VydExlbmd0aCk7XG5cbiAgLyoqXG4gICAqICMjIyAubWF0Y2gocmVnZXhwKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBtYXRjaGVzIGEgcmVndWxhciBleHByZXNzaW9uLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KCdmb29iYXInKS50by5tYXRjaCgvXmZvby8pO1xuICAgKlxuICAgKiBAbmFtZSBtYXRjaFxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gUmVndWxhckV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdtYXRjaCcsIGZ1bmN0aW9uIChyZSwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICByZS5leGVjKG9iailcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbWF0Y2ggJyArIHJlXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IG5vdCB0byBtYXRjaCAnICsgcmVcbiAgICApO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5zdHJpbmcoc3RyaW5nKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHN0cmluZyB0YXJnZXQgY29udGFpbnMgYW5vdGhlciBzdHJpbmcuXG4gICAqXG4gICAqICAgICBleHBlY3QoJ2Zvb2JhcicpLnRvLmhhdmUuc3RyaW5nKCdiYXInKTtcbiAgICpcbiAgICogQG5hbWUgc3RyaW5nXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgX29wdGlvbmFsX1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCdzdHJpbmcnLCBmdW5jdGlvbiAoc3RyLCBtc2cpIHtcbiAgICBpZiAobXNnKSBmbGFnKHRoaXMsICdtZXNzYWdlJywgbXNnKTtcbiAgICB2YXIgb2JqID0gZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykuaXMuYSgnc3RyaW5nJyk7XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgfm9iai5pbmRleE9mKHN0cilcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gY29udGFpbiAnICsgXy5pbnNwZWN0KHN0cilcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGNvbnRhaW4gJyArIF8uaW5zcGVjdChzdHIpXG4gICAgKTtcbiAgfSk7XG5cblxuICAvKipcbiAgICogIyMjIC5rZXlzKGtleTEsIFtrZXkyXSwgWy4uLl0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgdGFyZ2V0IGhhcyBleGFjdGx5IHRoZSBnaXZlbiBrZXlzLCBvclxuICAgKiBhc3NlcnRzIHRoZSBpbmNsdXNpb24gb2Ygc29tZSBrZXlzIHdoZW4gdXNpbmcgdGhlXG4gICAqIGBpbmNsdWRlYCBvciBgY29udGFpbmAgbW9kaWZpZXJzLlxuICAgKlxuICAgKiAgICAgZXhwZWN0KHsgZm9vOiAxLCBiYXI6IDIgfSkudG8uaGF2ZS5rZXlzKFsnZm9vJywgJ2JhciddKTtcbiAgICogICAgIGV4cGVjdCh7IGZvbzogMSwgYmFyOiAyLCBiYXo6IDMgfSkudG8uY29udGFpbi5rZXlzKCdmb28nLCAnYmFyJyk7XG4gICAqXG4gICAqIEBuYW1lIGtleXNcbiAgICogQGFsaWFzIGtleVxuICAgKiBAcGFyYW0ge1N0cmluZy4uLnxBcnJheX0ga2V5c1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRLZXlzIChrZXlzKSB7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpXG4gICAgICAsIHN0clxuICAgICAgLCBvayA9IHRydWU7XG5cbiAgICBrZXlzID0ga2V5cyBpbnN0YW5jZW9mIEFycmF5XG4gICAgICA/IGtleXNcbiAgICAgIDogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICgha2V5cy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcigna2V5cyByZXF1aXJlZCcpO1xuXG4gICAgdmFyIGFjdHVhbCA9IE9iamVjdC5rZXlzKG9iailcbiAgICAgICwgZXhwZWN0ZWQgPSBrZXlzXG4gICAgICAsIGxlbiA9IGtleXMubGVuZ3RoO1xuXG4gICAgLy8gSW5jbHVzaW9uXG4gICAgb2sgPSBrZXlzLmV2ZXJ5KGZ1bmN0aW9uKGtleSl7XG4gICAgICByZXR1cm4gfmFjdHVhbC5pbmRleE9mKGtleSk7XG4gICAgfSk7XG5cbiAgICAvLyBTdHJpY3RcbiAgICBpZiAoIWZsYWcodGhpcywgJ25lZ2F0ZScpICYmICFmbGFnKHRoaXMsICdjb250YWlucycpKSB7XG4gICAgICBvayA9IG9rICYmIGtleXMubGVuZ3RoID09IGFjdHVhbC5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gS2V5IHN0cmluZ1xuICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICBrZXlzID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgcmV0dXJuIF8uaW5zcGVjdChrZXkpO1xuICAgICAgfSk7XG4gICAgICB2YXIgbGFzdCA9IGtleXMucG9wKCk7XG4gICAgICBzdHIgPSBrZXlzLmpvaW4oJywgJykgKyAnLCBhbmQgJyArIGxhc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IF8uaW5zcGVjdChrZXlzWzBdKTtcbiAgICB9XG5cbiAgICAvLyBGb3JtXG4gICAgc3RyID0gKGxlbiA+IDEgPyAna2V5cyAnIDogJ2tleSAnKSArIHN0cjtcblxuICAgIC8vIEhhdmUgLyBpbmNsdWRlXG4gICAgc3RyID0gKGZsYWcodGhpcywgJ2NvbnRhaW5zJykgPyAnY29udGFpbiAnIDogJ2hhdmUgJykgKyBzdHI7XG5cbiAgICAvLyBBc3NlcnRpb25cbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgb2tcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gJyArIHN0clxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgJyArIHN0clxuICAgICAgLCBleHBlY3RlZC5zb3J0KClcbiAgICAgICwgYWN0dWFsLnNvcnQoKVxuICAgICAgLCB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ2tleXMnLCBhc3NlcnRLZXlzKTtcbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgna2V5JywgYXNzZXJ0S2V5cyk7XG5cbiAgLyoqXG4gICAqICMjIyAudGhyb3coY29uc3RydWN0b3IpXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCB0aGUgZnVuY3Rpb24gdGFyZ2V0IHdpbGwgdGhyb3cgYSBzcGVjaWZpYyBlcnJvciwgb3Igc3BlY2lmaWMgdHlwZSBvZiBlcnJvclxuICAgKiAoYXMgZGV0ZXJtaW5lZCB1c2luZyBgaW5zdGFuY2VvZmApLCBvcHRpb25hbGx5IHdpdGggYSBSZWdFeHAgb3Igc3RyaW5nIGluY2x1c2lvbiB0ZXN0XG4gICAqIGZvciB0aGUgZXJyb3IncyBtZXNzYWdlLlxuICAgKlxuICAgKiAgICAgdmFyIGVyciA9IG5ldyBSZWZlcmVuY2VFcnJvcignVGhpcyBpcyBhIGJhZCBmdW5jdGlvbi4nKTtcbiAgICogICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgZXJyOyB9XG4gICAqICAgICBleHBlY3QoZm4pLnRvLnRocm93KFJlZmVyZW5jZUVycm9yKTtcbiAgICogICAgIGV4cGVjdChmbikudG8udGhyb3coRXJyb3IpO1xuICAgKiAgICAgZXhwZWN0KGZuKS50by50aHJvdygvYmFkIGZ1bmN0aW9uLyk7XG4gICAqICAgICBleHBlY3QoZm4pLnRvLm5vdC50aHJvdygnZ29vZCBmdW5jdGlvbicpO1xuICAgKiAgICAgZXhwZWN0KGZuKS50by50aHJvdyhSZWZlcmVuY2VFcnJvciwgL2JhZCBmdW5jdGlvbi8pO1xuICAgKiAgICAgZXhwZWN0KGZuKS50by50aHJvdyhlcnIpO1xuICAgKiAgICAgZXhwZWN0KGZuKS50by5ub3QudGhyb3cobmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZS4nKSk7XG4gICAqXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgd2hlbiBhIHRocm93IGV4cGVjdGF0aW9uIGlzIG5lZ2F0ZWQsIGl0IHdpbGwgY2hlY2sgZWFjaFxuICAgKiBwYXJhbWV0ZXIgaW5kZXBlbmRlbnRseSwgc3RhcnRpbmcgd2l0aCBlcnJvciBjb25zdHJ1Y3RvciB0eXBlLiBUaGUgYXBwcm9wcmlhdGUgd2F5XG4gICAqIHRvIGNoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIGEgdHlwZSBvZiBlcnJvciBidXQgZm9yIGEgbWVzc2FnZSB0aGF0IGRvZXMgbm90IG1hdGNoXG4gICAqIGlzIHRvIHVzZSBgYW5kYC5cbiAgICpcbiAgICogICAgIGV4cGVjdChmbikudG8udGhyb3coUmVmZXJlbmNlRXJyb3IpXG4gICAqICAgICAgICAuYW5kLm5vdC50aHJvdygvZ29vZCBmdW5jdGlvbi8pO1xuICAgKlxuICAgKiBAbmFtZSB0aHJvd1xuICAgKiBAYWxpYXMgdGhyb3dzXG4gICAqIEBhbGlhcyBUaHJvd1xuICAgKiBAcGFyYW0ge0Vycm9yQ29uc3RydWN0b3J9IGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjRXJyb3JfdHlwZXNcbiAgICogQHJldHVybnMgZXJyb3IgZm9yIGNoYWluaW5nIChudWxsIGlmIG5vIGVycm9yKVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBhc3NlcnRUaHJvd3MgKGNvbnN0cnVjdG9yLCBlcnJNc2csIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS5pcy5hKCdmdW5jdGlvbicpO1xuXG4gICAgdmFyIHRocm93biA9IGZhbHNlXG4gICAgICAsIGRlc2lyZWRFcnJvciA9IG51bGxcbiAgICAgICwgbmFtZSA9IG51bGxcbiAgICAgICwgdGhyb3duRXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVyck1zZyA9IG51bGw7XG4gICAgICBjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChjb25zdHJ1Y3RvciAmJiAoY29uc3RydWN0b3IgaW5zdGFuY2VvZiBSZWdFeHAgfHwgJ3N0cmluZycgPT09IHR5cGVvZiBjb25zdHJ1Y3RvcikpIHtcbiAgICAgIGVyck1zZyA9IGNvbnN0cnVjdG9yO1xuICAgICAgY29uc3RydWN0b3IgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3IgJiYgY29uc3RydWN0b3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZGVzaXJlZEVycm9yID0gY29uc3RydWN0b3I7XG4gICAgICBjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICBlcnJNc2cgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBuYW1lID0gY29uc3RydWN0b3IucHJvdG90eXBlLm5hbWUgfHwgY29uc3RydWN0b3IubmFtZTtcbiAgICAgIGlmIChuYW1lID09PSAnRXJyb3InICYmIGNvbnN0cnVjdG9yICE9PSBFcnJvcikge1xuICAgICAgICBuYW1lID0gKG5ldyBjb25zdHJ1Y3RvcigpKS5uYW1lO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIG9iaigpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZmlyc3QsIGNoZWNrIGRlc2lyZWQgZXJyb3JcbiAgICAgIGlmIChkZXNpcmVkRXJyb3IpIHtcbiAgICAgICAgdGhpcy5hc3NlcnQoXG4gICAgICAgICAgICBlcnIgPT09IGRlc2lyZWRFcnJvclxuICAgICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gdGhyb3cgI3tleHB9IGJ1dCAje2FjdH0gd2FzIHRocm93bidcbiAgICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCB0aHJvdyAje2V4cH0nXG4gICAgICAgICAgLCAoZGVzaXJlZEVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBkZXNpcmVkRXJyb3IudG9TdHJpbmcoKSA6IGRlc2lyZWRFcnJvcilcbiAgICAgICAgICAsIChlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci50b1N0cmluZygpIDogZXJyKVxuICAgICAgICApO1xuXG4gICAgICAgIGZsYWcodGhpcywgJ29iamVjdCcsIGVycik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBuZXh0LCBjaGVjayBjb25zdHJ1Y3RvclxuICAgICAgaWYgKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgICAgZXJyIGluc3RhbmNlb2YgY29uc3RydWN0b3JcbiAgICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIHRocm93ICN7ZXhwfSBidXQgI3thY3R9IHdhcyB0aHJvd24nXG4gICAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgdGhyb3cgI3tleHB9IGJ1dCAje2FjdH0gd2FzIHRocm93bidcbiAgICAgICAgICAsIG5hbWVcbiAgICAgICAgICAsIChlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci50b1N0cmluZygpIDogZXJyKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghZXJyTXNnKSB7XG4gICAgICAgICAgZmxhZyh0aGlzLCAnb2JqZWN0JywgZXJyKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBuZXh0LCBjaGVjayBtZXNzYWdlXG4gICAgICB2YXIgbWVzc2FnZSA9ICdvYmplY3QnID09PSBfLnR5cGUoZXJyKSAmJiBcIm1lc3NhZ2VcIiBpbiBlcnJcbiAgICAgICAgPyBlcnIubWVzc2FnZVxuICAgICAgICA6ICcnICsgZXJyO1xuXG4gICAgICBpZiAoKG1lc3NhZ2UgIT0gbnVsbCkgJiYgZXJyTXNnICYmIGVyck1zZyBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICAgIGVyck1zZy5leGVjKG1lc3NhZ2UpXG4gICAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byB0aHJvdyBlcnJvciBtYXRjaGluZyAje2V4cH0gYnV0IGdvdCAje2FjdH0nXG4gICAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byB0aHJvdyBlcnJvciBub3QgbWF0Y2hpbmcgI3tleHB9J1xuICAgICAgICAgICwgZXJyTXNnXG4gICAgICAgICAgLCBtZXNzYWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgZmxhZyh0aGlzLCAnb2JqZWN0JywgZXJyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2UgaWYgKChtZXNzYWdlICE9IG51bGwpICYmIGVyck1zZyAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGVyck1zZykge1xuICAgICAgICB0aGlzLmFzc2VydChcbiAgICAgICAgICAgIH5tZXNzYWdlLmluZGV4T2YoZXJyTXNnKVxuICAgICAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gdGhyb3cgZXJyb3IgaW5jbHVkaW5nICN7ZXhwfSBidXQgZ290ICN7YWN0fSdcbiAgICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIHRocm93IGVycm9yIG5vdCBpbmNsdWRpbmcgI3thY3R9J1xuICAgICAgICAgICwgZXJyTXNnXG4gICAgICAgICAgLCBtZXNzYWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgZmxhZyh0aGlzLCAnb2JqZWN0JywgZXJyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd24gPSB0cnVlO1xuICAgICAgICB0aHJvd25FcnJvciA9IGVycjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYWN0dWFsbHlHb3QgPSAnJ1xuICAgICAgLCBleHBlY3RlZFRocm93biA9IG5hbWUgIT09IG51bGxcbiAgICAgICAgPyBuYW1lXG4gICAgICAgIDogZGVzaXJlZEVycm9yXG4gICAgICAgICAgPyAnI3tleHB9JyAvL18uaW5zcGVjdChkZXNpcmVkRXJyb3IpXG4gICAgICAgICAgOiAnYW4gZXJyb3InO1xuXG4gICAgaWYgKHRocm93bikge1xuICAgICAgYWN0dWFsbHlHb3QgPSAnIGJ1dCAje2FjdH0gd2FzIHRocm93bidcbiAgICB9XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgdGhyb3duID09PSB0cnVlXG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIHRocm93ICcgKyBleHBlY3RlZFRocm93biArIGFjdHVhbGx5R290XG4gICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCB0aHJvdyAnICsgZXhwZWN0ZWRUaHJvd24gKyBhY3R1YWxseUdvdFxuICAgICAgLCAoZGVzaXJlZEVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBkZXNpcmVkRXJyb3IudG9TdHJpbmcoKSA6IGRlc2lyZWRFcnJvcilcbiAgICAgICwgKHRocm93bkVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyB0aHJvd25FcnJvci50b1N0cmluZygpIDogdGhyb3duRXJyb3IpXG4gICAgKTtcblxuICAgIGZsYWcodGhpcywgJ29iamVjdCcsIHRocm93bkVycm9yKTtcbiAgfTtcblxuICBBc3NlcnRpb24uYWRkTWV0aG9kKCd0aHJvdycsIGFzc2VydFRocm93cyk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ3Rocm93cycsIGFzc2VydFRocm93cyk7XG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ1Rocm93JywgYXNzZXJ0VGhyb3dzKTtcblxuICAvKipcbiAgICogIyMjIC5yZXNwb25kVG8obWV0aG9kKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIG9iamVjdCBvciBjbGFzcyB0YXJnZXQgd2lsbCByZXNwb25kIHRvIGEgbWV0aG9kLlxuICAgKlxuICAgKiAgICAgS2xhc3MucHJvdG90eXBlLmJhciA9IGZ1bmN0aW9uKCl7fTtcbiAgICogICAgIGV4cGVjdChLbGFzcykudG8ucmVzcG9uZFRvKCdiYXInKTtcbiAgICogICAgIGV4cGVjdChvYmopLnRvLnJlc3BvbmRUbygnYmFyJyk7XG4gICAqXG4gICAqIFRvIGNoZWNrIGlmIGEgY29uc3RydWN0b3Igd2lsbCByZXNwb25kIHRvIGEgc3RhdGljIGZ1bmN0aW9uLFxuICAgKiBzZXQgdGhlIGBpdHNlbGZgIGZsYWcuXG4gICAqXG4gICAqICAgICBLbGFzcy5iYXogPSBmdW5jdGlvbigpe307XG4gICAqICAgICBleHBlY3QoS2xhc3MpLml0c2VsZi50by5yZXNwb25kVG8oJ2JheicpO1xuICAgKlxuICAgKiBAbmFtZSByZXNwb25kVG9cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ3Jlc3BvbmRUbycsIGZ1bmN0aW9uIChtZXRob2QsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKVxuICAgICAgLCBpdHNlbGYgPSBmbGFnKHRoaXMsICdpdHNlbGYnKVxuICAgICAgLCBjb250ZXh0ID0gKCdmdW5jdGlvbicgPT09IF8udHlwZShvYmopICYmICFpdHNlbGYpXG4gICAgICAgID8gb2JqLnByb3RvdHlwZVttZXRob2RdXG4gICAgICAgIDogb2JqW21ldGhvZF07XG5cbiAgICB0aGlzLmFzc2VydChcbiAgICAgICAgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNvbnRleHRcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gcmVzcG9uZCB0byAnICsgXy5pbnNwZWN0KG1ldGhvZClcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IHJlc3BvbmQgdG8gJyArIF8uaW5zcGVjdChtZXRob2QpXG4gICAgKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqICMjIyAuaXRzZWxmXG4gICAqXG4gICAqIFNldHMgdGhlIGBpdHNlbGZgIGZsYWcsIGxhdGVyIHVzZWQgYnkgdGhlIGByZXNwb25kVG9gIGFzc2VydGlvbi5cbiAgICpcbiAgICogICAgIGZ1bmN0aW9uIEZvbygpIHt9XG4gICAqICAgICBGb28uYmFyID0gZnVuY3Rpb24oKSB7fVxuICAgKiAgICAgRm9vLnByb3RvdHlwZS5iYXogPSBmdW5jdGlvbigpIHt9XG4gICAqXG4gICAqICAgICBleHBlY3QoRm9vKS5pdHNlbGYudG8ucmVzcG9uZFRvKCdiYXInKTtcbiAgICogICAgIGV4cGVjdChGb28pLml0c2VsZi5ub3QudG8ucmVzcG9uZFRvKCdiYXonKTtcbiAgICpcbiAgICogQG5hbWUgaXRzZWxmXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRQcm9wZXJ0eSgnaXRzZWxmJywgZnVuY3Rpb24gKCkge1xuICAgIGZsYWcodGhpcywgJ2l0c2VsZicsIHRydWUpO1xuICB9KTtcblxuICAvKipcbiAgICogIyMjIC5zYXRpc2Z5KG1ldGhvZClcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgcGFzc2VzIGEgZ2l2ZW4gdHJ1dGggdGVzdC5cbiAgICpcbiAgICogICAgIGV4cGVjdCgxKS50by5zYXRpc2Z5KGZ1bmN0aW9uKG51bSkgeyByZXR1cm4gbnVtID4gMDsgfSk7XG4gICAqXG4gICAqIEBuYW1lIHNhdGlzZnlcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbWF0Y2hlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBfb3B0aW9uYWxfXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIEFzc2VydGlvbi5hZGRNZXRob2QoJ3NhdGlzZnknLCBmdW5jdGlvbiAobWF0Y2hlciwgbXNnKSB7XG4gICAgaWYgKG1zZykgZmxhZyh0aGlzLCAnbWVzc2FnZScsIG1zZyk7XG4gICAgdmFyIG9iaiA9IGZsYWcodGhpcywgJ29iamVjdCcpO1xuICAgIHZhciByZXN1bHQgPSBtYXRjaGVyKG9iaik7XG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIHJlc3VsdFxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBzYXRpc2Z5ICcgKyBfLm9iakRpc3BsYXkobWF0Y2hlcilcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IHNhdGlzZnknICsgXy5vYmpEaXNwbGF5KG1hdGNoZXIpXG4gICAgICAsIHRoaXMubmVnYXRlID8gZmFsc2UgOiB0cnVlXG4gICAgICAsIHJlc3VsdFxuICAgICk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiAjIyMgLmNsb3NlVG8oZXhwZWN0ZWQsIGRlbHRhKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgdGhlIHRhcmdldCBpcyBlcXVhbCBgZXhwZWN0ZWRgLCB0byB3aXRoaW4gYSArLy0gYGRlbHRhYCByYW5nZS5cbiAgICpcbiAgICogICAgIGV4cGVjdCgxLjUpLnRvLmJlLmNsb3NlVG8oMSwgMC41KTtcbiAgICpcbiAgICogQG5hbWUgY2xvc2VUb1xuICAgKiBAcGFyYW0ge051bWJlcn0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnY2xvc2VUbycsIGZ1bmN0aW9uIChleHBlY3RlZCwgZGVsdGEsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcblxuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLmlzLmEoJ251bWJlcicpO1xuICAgIGlmIChfLnR5cGUoZXhwZWN0ZWQpICE9PSAnbnVtYmVyJyB8fCBfLnR5cGUoZGVsdGEpICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgYXJndW1lbnRzIHRvIGNsb3NlVG8gbXVzdCBiZSBudW1iZXJzJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hc3NlcnQoXG4gICAgICAgIE1hdGguYWJzKG9iaiAtIGV4cGVjdGVkKSA8PSBkZWx0YVxuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBjbG9zZSB0byAnICsgZXhwZWN0ZWQgKyAnICsvLSAnICsgZGVsdGFcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gbm90IHRvIGJlIGNsb3NlIHRvICcgKyBleHBlY3RlZCArICcgKy8tICcgKyBkZWx0YVxuICAgICk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGlzU3Vic2V0T2Yoc3Vic2V0LCBzdXBlcnNldCwgY21wKSB7XG4gICAgcmV0dXJuIHN1YnNldC5ldmVyeShmdW5jdGlvbihlbGVtKSB7XG4gICAgICBpZiAoIWNtcCkgcmV0dXJuIHN1cGVyc2V0LmluZGV4T2YoZWxlbSkgIT09IC0xO1xuXG4gICAgICByZXR1cm4gc3VwZXJzZXQuc29tZShmdW5jdGlvbihlbGVtMikge1xuICAgICAgICByZXR1cm4gY21wKGVsZW0sIGVsZW0yKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogIyMjIC5tZW1iZXJzKHNldClcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgYSBzdXBlcnNldCBvZiBgc2V0YCxcbiAgICogb3IgdGhhdCB0aGUgdGFyZ2V0IGFuZCBgc2V0YCBoYXZlIHRoZSBzYW1lIHN0cmljdGx5LWVxdWFsICg9PT0pIG1lbWJlcnMuXG4gICAqIEFsdGVybmF0ZWx5LCBpZiB0aGUgYGRlZXBgIGZsYWcgaXMgc2V0LCBzZXQgbWVtYmVycyBhcmUgY29tcGFyZWQgZm9yIGRlZXBcbiAgICogZXF1YWxpdHkuXG4gICAqXG4gICAqICAgICBleHBlY3QoWzEsIDIsIDNdKS50by5pbmNsdWRlLm1lbWJlcnMoWzMsIDJdKTtcbiAgICogICAgIGV4cGVjdChbMSwgMiwgM10pLnRvLm5vdC5pbmNsdWRlLm1lbWJlcnMoWzMsIDIsIDhdKTtcbiAgICpcbiAgICogICAgIGV4cGVjdChbNCwgMl0pLnRvLmhhdmUubWVtYmVycyhbMiwgNF0pO1xuICAgKiAgICAgZXhwZWN0KFs1LCAyXSkudG8ubm90LmhhdmUubWVtYmVycyhbNSwgMiwgMV0pO1xuICAgKlxuICAgKiAgICAgZXhwZWN0KFt7IGlkOiAxIH1dKS50by5kZWVwLmluY2x1ZGUubWVtYmVycyhbeyBpZDogMSB9XSk7XG4gICAqXG4gICAqIEBuYW1lIG1lbWJlcnNcbiAgICogQHBhcmFtIHtBcnJheX0gc2V0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIF9vcHRpb25hbF9cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQXNzZXJ0aW9uLmFkZE1ldGhvZCgnbWVtYmVycycsIGZ1bmN0aW9uIChzdWJzZXQsIG1zZykge1xuICAgIGlmIChtc2cpIGZsYWcodGhpcywgJ21lc3NhZ2UnLCBtc2cpO1xuICAgIHZhciBvYmogPSBmbGFnKHRoaXMsICdvYmplY3QnKTtcblxuICAgIG5ldyBBc3NlcnRpb24ob2JqKS50by5iZS5hbignYXJyYXknKTtcbiAgICBuZXcgQXNzZXJ0aW9uKHN1YnNldCkudG8uYmUuYW4oJ2FycmF5Jyk7XG5cbiAgICB2YXIgY21wID0gZmxhZyh0aGlzLCAnZGVlcCcpID8gXy5lcWwgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZmxhZyh0aGlzLCAnY29udGFpbnMnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0KFxuICAgICAgICAgIGlzU3Vic2V0T2Yoc3Vic2V0LCBvYmosIGNtcClcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBiZSBhIHN1cGVyc2V0IG9mICN7YWN0fSdcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgYmUgYSBzdXBlcnNldCBvZiAje2FjdH0nXG4gICAgICAgICwgb2JqXG4gICAgICAgICwgc3Vic2V0XG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuYXNzZXJ0KFxuICAgICAgICBpc1N1YnNldE9mKG9iaiwgc3Vic2V0LCBjbXApICYmIGlzU3Vic2V0T2Yoc3Vic2V0LCBvYmosIGNtcClcbiAgICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBoYXZlIHRoZSBzYW1lIG1lbWJlcnMgYXMgI3thY3R9J1xuICAgICAgICAsICdleHBlY3RlZCAje3RoaXN9IHRvIG5vdCBoYXZlIHRoZSBzYW1lIG1lbWJlcnMgYXMgI3thY3R9J1xuICAgICAgICAsIG9ialxuICAgICAgICAsIHN1YnNldFxuICAgICk7XG4gIH0pO1xufTtcbiIsIi8qIVxuICogY2hhaVxuICogQ29weXJpZ2h0KGMpIDIwMTEtMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY2hhaSwgdXRpbCkge1xuXG4gIC8qIVxuICAgKiBDaGFpIGRlcGVuZGVuY2llcy5cbiAgICovXG5cbiAgdmFyIEFzc2VydGlvbiA9IGNoYWkuQXNzZXJ0aW9uXG4gICAgLCBmbGFnID0gdXRpbC5mbGFnO1xuXG4gIC8qIVxuICAgKiBNb2R1bGUgZXhwb3J0LlxuICAgKi9cblxuICAvKipcbiAgICogIyMjIGFzc2VydChleHByZXNzaW9uLCBtZXNzYWdlKVxuICAgKlxuICAgKiBXcml0ZSB5b3VyIG93biB0ZXN0IGV4cHJlc3Npb25zLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0KCdmb28nICE9PSAnYmFyJywgJ2ZvbyBpcyBub3QgYmFyJyk7XG4gICAqICAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShbXSksICdlbXB0eSBhcnJheXMgYXJlIGFycmF5cycpO1xuICAgKlxuICAgKiBAcGFyYW0ge01peGVkfSBleHByZXNzaW9uIHRvIHRlc3QgZm9yIHRydXRoaW5lc3NcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgdG8gZGlzcGxheSBvbiBlcnJvclxuICAgKiBAbmFtZSBhc3NlcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgdmFyIGFzc2VydCA9IGNoYWkuYXNzZXJ0ID0gZnVuY3Rpb24gKGV4cHJlc3MsIGVycm1zZykge1xuICAgIHZhciB0ZXN0ID0gbmV3IEFzc2VydGlvbihudWxsLCBudWxsLCBjaGFpLmFzc2VydCk7XG4gICAgdGVzdC5hc3NlcnQoXG4gICAgICAgIGV4cHJlc3NcbiAgICAgICwgZXJybXNnXG4gICAgICAsICdbIG5lZ2F0aW9uIG1lc3NhZ2UgdW5hdmFpbGFibGUgXSdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmZhaWwoYWN0dWFsLCBleHBlY3RlZCwgW21lc3NhZ2VdLCBbb3BlcmF0b3JdKVxuICAgKlxuICAgKiBUaHJvdyBhIGZhaWx1cmUuIE5vZGUuanMgYGFzc2VydGAgbW9kdWxlLWNvbXBhdGlibGUuXG4gICAqXG4gICAqIEBuYW1lIGZhaWxcbiAgICogQHBhcmFtIHtNaXhlZH0gYWN0dWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGV4cGVjdGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvcGVyYXRvclxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZmFpbCA9IGZ1bmN0aW9uIChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBvcGVyYXRvcikge1xuICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdhc3NlcnQuZmFpbCgpJztcbiAgICB0aHJvdyBuZXcgY2hhaS5Bc3NlcnRpb25FcnJvcihtZXNzYWdlLCB7XG4gICAgICAgIGFjdHVhbDogYWN0dWFsXG4gICAgICAsIGV4cGVjdGVkOiBleHBlY3RlZFxuICAgICAgLCBvcGVyYXRvcjogb3BlcmF0b3JcbiAgICB9LCBhc3NlcnQuZmFpbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAub2sob2JqZWN0LCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBpcyB0cnV0aHkuXG4gICAqXG4gICAqICAgICBhc3NlcnQub2soJ2V2ZXJ5dGhpbmcnLCAnZXZlcnl0aGluZyBpcyBvaycpO1xuICAgKiAgICAgYXNzZXJ0Lm9rKGZhbHNlLCAndGhpcyB3aWxsIGZhaWwnKTtcbiAgICpcbiAgICogQG5hbWUgb2tcbiAgICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0IHRvIHRlc3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm9rID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykuaXMub2s7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubm90T2sob2JqZWN0LCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBpcyBmYWxzeS5cbiAgICpcbiAgICogICAgIGFzc2VydC5ub3RPaygnZXZlcnl0aGluZycsICd0aGlzIHdpbGwgZmFpbCcpO1xuICAgKiAgICAgYXNzZXJ0Lm5vdE9rKGZhbHNlLCAndGhpcyB3aWxsIHBhc3MnKTtcbiAgICpcbiAgICogQG5hbWUgbm90T2tcbiAgICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0IHRvIHRlc3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm5vdE9rID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykuaXMubm90Lm9rO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyBub24tc3RyaWN0IGVxdWFsaXR5IChgPT1gKSBvZiBgYWN0dWFsYCBhbmQgYGV4cGVjdGVkYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5lcXVhbCgzLCAnMycsICc9PSBjb2VyY2VzIHZhbHVlcyB0byBzdHJpbmdzJyk7XG4gICAqXG4gICAqIEBuYW1lIGVxdWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGFjdHVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBleHBlY3RlZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZXF1YWwgPSBmdW5jdGlvbiAoYWN0LCBleHAsIG1zZykge1xuICAgIHZhciB0ZXN0ID0gbmV3IEFzc2VydGlvbihhY3QsIG1zZywgYXNzZXJ0LmVxdWFsKTtcblxuICAgIHRlc3QuYXNzZXJ0KFxuICAgICAgICBleHAgPT0gZmxhZyh0ZXN0LCAnb2JqZWN0JylcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gZXF1YWwgI3tleHB9J1xuICAgICAgLCAnZXhwZWN0ZWQgI3t0aGlzfSB0byBub3QgZXF1YWwgI3thY3R9J1xuICAgICAgLCBleHBcbiAgICAgICwgYWN0XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5ub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgbm9uLXN0cmljdCBpbmVxdWFsaXR5IChgIT1gKSBvZiBgYWN0dWFsYCBhbmQgYGV4cGVjdGVkYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5ub3RFcXVhbCgzLCA0LCAndGhlc2UgbnVtYmVycyBhcmUgbm90IGVxdWFsJyk7XG4gICAqXG4gICAqIEBuYW1lIG5vdEVxdWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGFjdHVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBleHBlY3RlZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQubm90RXF1YWwgPSBmdW5jdGlvbiAoYWN0LCBleHAsIG1zZykge1xuICAgIHZhciB0ZXN0ID0gbmV3IEFzc2VydGlvbihhY3QsIG1zZywgYXNzZXJ0Lm5vdEVxdWFsKTtcblxuICAgIHRlc3QuYXNzZXJ0KFxuICAgICAgICBleHAgIT0gZmxhZyh0ZXN0LCAnb2JqZWN0JylcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gbm90IGVxdWFsICN7ZXhwfSdcbiAgICAgICwgJ2V4cGVjdGVkICN7dGhpc30gdG8gZXF1YWwgI3thY3R9J1xuICAgICAgLCBleHBcbiAgICAgICwgYWN0XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5zdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgc3RyaWN0IGVxdWFsaXR5IChgPT09YCkgb2YgYGFjdHVhbGAgYW5kIGBleHBlY3RlZGAuXG4gICAqXG4gICAqICAgICBhc3NlcnQuc3RyaWN0RXF1YWwodHJ1ZSwgdHJ1ZSwgJ3RoZXNlIGJvb2xlYW5zIGFyZSBzdHJpY3RseSBlcXVhbCcpO1xuICAgKlxuICAgKiBAbmFtZSBzdHJpY3RFcXVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBhY3R1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LnN0cmljdEVxdWFsID0gZnVuY3Rpb24gKGFjdCwgZXhwLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGFjdCwgbXNnKS50by5lcXVhbChleHApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLm5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyBzdHJpY3QgaW5lcXVhbGl0eSAoYCE9PWApIG9mIGBhY3R1YWxgIGFuZCBgZXhwZWN0ZWRgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKDMsICczJywgJ25vIGNvZXJjaW9uIGZvciBzdHJpY3QgZXF1YWxpdHknKTtcbiAgICpcbiAgICogQG5hbWUgbm90U3RyaWN0RXF1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gYWN0dWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGV4cGVjdGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5ub3RTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIChhY3QsIGV4cCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihhY3QsIG1zZykudG8ubm90LmVxdWFsKGV4cCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBhY3R1YWxgIGlzIGRlZXBseSBlcXVhbCB0byBgZXhwZWN0ZWRgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmRlZXBFcXVhbCh7IHRlYTogJ2dyZWVuJyB9LCB7IHRlYTogJ2dyZWVuJyB9KTtcbiAgICpcbiAgICogQG5hbWUgZGVlcEVxdWFsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGFjdHVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBleHBlY3RlZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZGVlcEVxdWFsID0gZnVuY3Rpb24gKGFjdCwgZXhwLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGFjdCwgbXNnKS50by5lcWwoZXhwKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5ub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnQgdGhhdCBgYWN0dWFsYCBpcyBub3QgZGVlcGx5IGVxdWFsIHRvIGBleHBlY3RlZGAuXG4gICAqXG4gICAqICAgICBhc3NlcnQubm90RGVlcEVxdWFsKHsgdGVhOiAnZ3JlZW4nIH0sIHsgdGVhOiAnamFzbWluZScgfSk7XG4gICAqXG4gICAqIEBuYW1lIG5vdERlZXBFcXVhbFxuICAgKiBAcGFyYW0ge01peGVkfSBhY3R1YWxcbiAgICogQHBhcmFtIHtNaXhlZH0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm5vdERlZXBFcXVhbCA9IGZ1bmN0aW9uIChhY3QsIGV4cCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihhY3QsIG1zZykudG8ubm90LmVxbChleHApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzVHJ1ZSh2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyB0cnVlLlxuICAgKlxuICAgKiAgICAgdmFyIHRlYVNlcnZlZCA9IHRydWU7XG4gICAqICAgICBhc3NlcnQuaXNUcnVlKHRlYVNlcnZlZCwgJ3RoZSB0ZWEgaGFzIGJlZW4gc2VydmVkJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzVHJ1ZVxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNUcnVlID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykuaXNbJ3RydWUnXTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc0ZhbHNlKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIGZhbHNlLlxuICAgKlxuICAgKiAgICAgdmFyIHRlYVNlcnZlZCA9IGZhbHNlO1xuICAgKiAgICAgYXNzZXJ0LmlzRmFsc2UodGVhU2VydmVkLCAnbm8gdGVhIHlldD8gaG1tLi4uJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzRmFsc2VcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzRmFsc2UgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS5pc1snZmFsc2UnXTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc051bGwodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgbnVsbC5cbiAgICpcbiAgICogICAgIGFzc2VydC5pc051bGwoZXJyLCAndGhlcmUgd2FzIG5vIGVycm9yJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzTnVsbFxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNOdWxsID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uZXF1YWwobnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOb3ROdWxsKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIG5vdCBudWxsLlxuICAgKlxuICAgKiAgICAgdmFyIHRlYSA9ICd0YXN0eSBjaGFpJztcbiAgICogICAgIGFzc2VydC5pc05vdE51bGwodGVhLCAnZ3JlYXQsIHRpbWUgZm9yIHRlYSEnKTtcbiAgICpcbiAgICogQG5hbWUgaXNOb3ROdWxsXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc05vdE51bGwgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuZXF1YWwobnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNVbmRlZmluZWQodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAuXG4gICAqXG4gICAqICAgICB2YXIgdGVhO1xuICAgKiAgICAgYXNzZXJ0LmlzVW5kZWZpbmVkKHRlYSwgJ25vIHRlYSBkZWZpbmVkJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzVW5kZWZpbmVkXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLmVxdWFsKHVuZGVmaW5lZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNEZWZpbmVkKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIG5vdCBgdW5kZWZpbmVkYC5cbiAgICpcbiAgICogICAgIHZhciB0ZWEgPSAnY3VwIG9mIGNoYWknO1xuICAgKiAgICAgYXNzZXJ0LmlzRGVmaW5lZCh0ZWEsICd0ZWEgaGFzIGJlZW4gZGVmaW5lZCcpO1xuICAgKlxuICAgKiBAbmFtZSBpc0RlZmluZWRcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzRGVmaW5lZCA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLm5vdC5lcXVhbCh1bmRlZmluZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzRnVuY3Rpb24odmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogICAgIGZ1bmN0aW9uIHNlcnZlVGVhKCkgeyByZXR1cm4gJ2N1cCBvZiB0ZWEnOyB9O1xuICAgKiAgICAgYXNzZXJ0LmlzRnVuY3Rpb24oc2VydmVUZWEsICdncmVhdCwgd2UgY2FuIGhhdmUgdGVhIG5vdycpO1xuICAgKlxuICAgKiBAbmFtZSBpc0Z1bmN0aW9uXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYSgnZnVuY3Rpb24nKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc05vdEZ1bmN0aW9uKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIF9ub3RfIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqICAgICB2YXIgc2VydmVUZWEgPSBbICdoZWF0JywgJ3BvdXInLCAnc2lwJyBdO1xuICAgKiAgICAgYXNzZXJ0LmlzTm90RnVuY3Rpb24oc2VydmVUZWEsICdncmVhdCwgd2UgaGF2ZSBsaXN0ZWQgdGhlIHN0ZXBzJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzTm90RnVuY3Rpb25cbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTm90RnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuYmUuYSgnZnVuY3Rpb24nKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5pc09iamVjdCh2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBhbiBvYmplY3QgKGFzIHJldmVhbGVkIGJ5XG4gICAqIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCkuXG4gICAqXG4gICAqICAgICB2YXIgc2VsZWN0aW9uID0geyBuYW1lOiAnQ2hhaScsIHNlcnZlOiAnd2l0aCBzcGljZXMnIH07XG4gICAqICAgICBhc3NlcnQuaXNPYmplY3Qoc2VsZWN0aW9uLCAndGVhIHNlbGVjdGlvbiBpcyBhbiBvYmplY3QnKTtcbiAgICpcbiAgICogQG5hbWUgaXNPYmplY3RcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzT2JqZWN0ID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYSgnb2JqZWN0Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOb3RPYmplY3QodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgX25vdF8gYW4gb2JqZWN0LlxuICAgKlxuICAgKiAgICAgdmFyIHNlbGVjdGlvbiA9ICdjaGFpJ1xuICAgKiAgICAgYXNzZXJ0LmlzTm90T2JqZWN0KHNlbGVjdGlvbiwgJ3RlYSBzZWxlY3Rpb24gaXMgbm90IGFuIG9iamVjdCcpO1xuICAgKiAgICAgYXNzZXJ0LmlzTm90T2JqZWN0KG51bGwsICdudWxsIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgICpcbiAgICogQG5hbWUgaXNOb3RPYmplY3RcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTm90T2JqZWN0ID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8ubm90LmJlLmEoJ29iamVjdCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzQXJyYXkodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgYW4gYXJyYXkuXG4gICAqXG4gICAqICAgICB2YXIgbWVudSA9IFsgJ2dyZWVuJywgJ2NoYWknLCAnb29sb25nJyBdO1xuICAgKiAgICAgYXNzZXJ0LmlzQXJyYXkobWVudSwgJ3doYXQga2luZCBvZiB0ZWEgZG8gd2Ugd2FudD8nKTtcbiAgICpcbiAgICogQG5hbWUgaXNBcnJheVxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNBcnJheSA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLmJlLmFuKCdhcnJheScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzTm90QXJyYXkodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgX25vdF8gYW4gYXJyYXkuXG4gICAqXG4gICAqICAgICB2YXIgbWVudSA9ICdncmVlbnxjaGFpfG9vbG9uZyc7XG4gICAqICAgICBhc3NlcnQuaXNOb3RBcnJheShtZW51LCAnd2hhdCBraW5kIG9mIHRlYSBkbyB3ZSB3YW50PycpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdEFycmF5XG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc05vdEFycmF5ID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8ubm90LmJlLmFuKCdhcnJheScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzU3RyaW5nKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIGEgc3RyaW5nLlxuICAgKlxuICAgKiAgICAgdmFyIHRlYU9yZGVyID0gJ2NoYWknO1xuICAgKiAgICAgYXNzZXJ0LmlzU3RyaW5nKHRlYU9yZGVyLCAnb3JkZXIgcGxhY2VkJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzU3RyaW5nXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc1N0cmluZyA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLmJlLmEoJ3N0cmluZycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzTm90U3RyaW5nKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIF9ub3RfIGEgc3RyaW5nLlxuICAgKlxuICAgKiAgICAgdmFyIHRlYU9yZGVyID0gNDtcbiAgICogICAgIGFzc2VydC5pc05vdFN0cmluZyh0ZWFPcmRlciwgJ29yZGVyIHBsYWNlZCcpO1xuICAgKlxuICAgKiBAbmFtZSBpc05vdFN0cmluZ1xuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNOb3RTdHJpbmcgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuYmUuYSgnc3RyaW5nJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaXNOdW1iZXIodmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgaXMgYSBudW1iZXIuXG4gICAqXG4gICAqICAgICB2YXIgY3VwcyA9IDI7XG4gICAqICAgICBhc3NlcnQuaXNOdW1iZXIoY3VwcywgJ2hvdyBtYW55IGN1cHMnKTtcbiAgICpcbiAgICogQG5hbWUgaXNOdW1iZXJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc051bWJlciA9IGZ1bmN0aW9uICh2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLmJlLmEoJ251bWJlcicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzTm90TnVtYmVyKHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIF9ub3RfIGEgbnVtYmVyLlxuICAgKlxuICAgKiAgICAgdmFyIGN1cHMgPSAnMiBjdXBzIHBsZWFzZSc7XG4gICAqICAgICBhc3NlcnQuaXNOb3ROdW1iZXIoY3VwcywgJ2hvdyBtYW55IGN1cHMnKTtcbiAgICpcbiAgICogQG5hbWUgaXNOb3ROdW1iZXJcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LmlzTm90TnVtYmVyID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8ubm90LmJlLmEoJ251bWJlcicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzQm9vbGVhbih2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBhIGJvb2xlYW4uXG4gICAqXG4gICAqICAgICB2YXIgdGVhUmVhZHkgPSB0cnVlXG4gICAqICAgICAgICwgdGVhU2VydmVkID0gZmFsc2U7XG4gICAqXG4gICAqICAgICBhc3NlcnQuaXNCb29sZWFuKHRlYVJlYWR5LCAnaXMgdGhlIHRlYSByZWFkeScpO1xuICAgKiAgICAgYXNzZXJ0LmlzQm9vbGVhbih0ZWFTZXJ2ZWQsICdoYXMgdGVhIGJlZW4gc2VydmVkJyk7XG4gICAqXG4gICAqIEBuYW1lIGlzQm9vbGVhblxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaXNCb29sZWFuID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8uYmUuYSgnYm9vbGVhbicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmlzTm90Qm9vbGVhbih2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCBpcyBfbm90XyBhIGJvb2xlYW4uXG4gICAqXG4gICAqICAgICB2YXIgdGVhUmVhZHkgPSAneWVwJ1xuICAgKiAgICAgICAsIHRlYVNlcnZlZCA9ICdub3BlJztcbiAgICpcbiAgICogICAgIGFzc2VydC5pc05vdEJvb2xlYW4odGVhUmVhZHksICdpcyB0aGUgdGVhIHJlYWR5Jyk7XG4gICAqICAgICBhc3NlcnQuaXNOb3RCb29sZWFuKHRlYVNlcnZlZCwgJ2hhcyB0ZWEgYmVlbiBzZXJ2ZWQnKTtcbiAgICpcbiAgICogQG5hbWUgaXNOb3RCb29sZWFuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pc05vdEJvb2xlYW4gPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5ub3QuYmUuYSgnYm9vbGVhbicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLnR5cGVPZih2YWx1ZSwgbmFtZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCdzIHR5cGUgaXMgYG5hbWVgLCBhcyBkZXRlcm1pbmVkIGJ5XG4gICAqIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAgICpcbiAgICogICAgIGFzc2VydC50eXBlT2YoeyB0ZWE6ICdjaGFpJyB9LCAnb2JqZWN0JywgJ3dlIGhhdmUgYW4gb2JqZWN0Jyk7XG4gICAqICAgICBhc3NlcnQudHlwZU9mKFsnY2hhaScsICdqYXNtaW5lJ10sICdhcnJheScsICd3ZSBoYXZlIGFuIGFycmF5Jyk7XG4gICAqICAgICBhc3NlcnQudHlwZU9mKCd0ZWEnLCAnc3RyaW5nJywgJ3dlIGhhdmUgYSBzdHJpbmcnKTtcbiAgICogICAgIGFzc2VydC50eXBlT2YoL3RlYS8sICdyZWdleHAnLCAnd2UgaGF2ZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbicpO1xuICAgKiAgICAgYXNzZXJ0LnR5cGVPZihudWxsLCAnbnVsbCcsICd3ZSBoYXZlIGEgbnVsbCcpO1xuICAgKiAgICAgYXNzZXJ0LnR5cGVPZih1bmRlZmluZWQsICd1bmRlZmluZWQnLCAnd2UgaGF2ZSBhbiB1bmRlZmluZWQnKTtcbiAgICpcbiAgICogQG5hbWUgdHlwZU9mXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC50eXBlT2YgPSBmdW5jdGlvbiAodmFsLCB0eXBlLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5iZS5hKHR5cGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLm5vdFR5cGVPZih2YWx1ZSwgbmFtZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHZhbHVlYCdzIHR5cGUgaXMgX25vdF8gYG5hbWVgLCBhcyBkZXRlcm1pbmVkIGJ5XG4gICAqIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5ub3RUeXBlT2YoJ3RlYScsICdudW1iZXInLCAnc3RyaW5ncyBhcmUgbm90IG51bWJlcnMnKTtcbiAgICpcbiAgICogQG5hbWUgbm90VHlwZU9mXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlb2YgbmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQubm90VHlwZU9mID0gZnVuY3Rpb24gKHZhbCwgdHlwZSwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8ubm90LmJlLmEodHlwZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaW5zdGFuY2VPZihvYmplY3QsIGNvbnN0cnVjdG9yLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIGlzIGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gICAqXG4gICAqICAgICB2YXIgVGVhID0gZnVuY3Rpb24gKG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgKiAgICAgICAsIGNoYWkgPSBuZXcgVGVhKCdjaGFpJyk7XG4gICAqXG4gICAqICAgICBhc3NlcnQuaW5zdGFuY2VPZihjaGFpLCBUZWEsICdjaGFpIGlzIGFuIGluc3RhbmNlIG9mIHRlYScpO1xuICAgKlxuICAgKiBAbmFtZSBpbnN0YW5jZU9mXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtDb25zdHJ1Y3Rvcn0gY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lmluc3RhbmNlT2YgPSBmdW5jdGlvbiAodmFsLCB0eXBlLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5iZS5pbnN0YW5jZU9mKHR5cGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLm5vdEluc3RhbmNlT2Yob2JqZWN0LCBjb25zdHJ1Y3RvciwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIGB2YWx1ZWAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGBjb25zdHJ1Y3RvcmAuXG4gICAqXG4gICAqICAgICB2YXIgVGVhID0gZnVuY3Rpb24gKG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgKiAgICAgICAsIGNoYWkgPSBuZXcgU3RyaW5nKCdjaGFpJyk7XG4gICAqXG4gICAqICAgICBhc3NlcnQubm90SW5zdGFuY2VPZihjaGFpLCBUZWEsICdjaGFpIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0ZWEnKTtcbiAgICpcbiAgICogQG5hbWUgbm90SW5zdGFuY2VPZlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7Q29uc3RydWN0b3J9IGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5ub3RJbnN0YW5jZU9mID0gZnVuY3Rpb24gKHZhbCwgdHlwZSwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8ubm90LmJlLmluc3RhbmNlT2YodHlwZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuaW5jbHVkZShoYXlzdGFjaywgbmVlZGxlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgaGF5c3RhY2tgIGluY2x1ZGVzIGBuZWVkbGVgLiBXb3Jrc1xuICAgKiBmb3Igc3RyaW5ncyBhbmQgYXJyYXlzLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmluY2x1ZGUoJ2Zvb2JhcicsICdiYXInLCAnZm9vYmFyIGNvbnRhaW5zIHN0cmluZyBcImJhclwiJyk7XG4gICAqICAgICBhc3NlcnQuaW5jbHVkZShbIDEsIDIsIDMgXSwgMywgJ2FycmF5IGNvbnRhaW5zIHZhbHVlJyk7XG4gICAqXG4gICAqIEBuYW1lIGluY2x1ZGVcbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGhheXN0YWNrXG4gICAqIEBwYXJhbSB7TWl4ZWR9IG5lZWRsZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuaW5jbHVkZSA9IGZ1bmN0aW9uIChleHAsIGluYywgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihleHAsIG1zZywgYXNzZXJ0LmluY2x1ZGUpLmluY2x1ZGUoaW5jKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5ub3RJbmNsdWRlKGhheXN0YWNrLCBuZWVkbGUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBoYXlzdGFja2AgZG9lcyBub3QgaW5jbHVkZSBgbmVlZGxlYC4gV29ya3NcbiAgICogZm9yIHN0cmluZ3MgYW5kIGFycmF5cy5cbiAgICppXG4gICAqICAgICBhc3NlcnQubm90SW5jbHVkZSgnZm9vYmFyJywgJ2JheicsICdzdHJpbmcgbm90IGluY2x1ZGUgc3Vic3RyaW5nJyk7XG4gICAqICAgICBhc3NlcnQubm90SW5jbHVkZShbIDEsIDIsIDMgXSwgNCwgJ2FycmF5IG5vdCBpbmNsdWRlIGNvbnRhaW4gdmFsdWUnKTtcbiAgICpcbiAgICogQG5hbWUgbm90SW5jbHVkZVxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gaGF5c3RhY2tcbiAgICogQHBhcmFtIHtNaXhlZH0gbmVlZGxlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5ub3RJbmNsdWRlID0gZnVuY3Rpb24gKGV4cCwgaW5jLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKGV4cCwgbXNnLCBhc3NlcnQubm90SW5jbHVkZSkubm90LmluY2x1ZGUoaW5jKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5tYXRjaCh2YWx1ZSwgcmVnZXhwLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgdmFsdWVgIG1hdGNoZXMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBgcmVnZXhwYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5tYXRjaCgnZm9vYmFyJywgL15mb28vLCAncmVnZXhwIG1hdGNoZXMnKTtcbiAgICpcbiAgICogQG5hbWUgbWF0Y2hcbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4cFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQubWF0Y2ggPSBmdW5jdGlvbiAoZXhwLCByZSwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihleHAsIG1zZykudG8ubWF0Y2gocmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLm5vdE1hdGNoKHZhbHVlLCByZWdleHAsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGB2YWx1ZWAgZG9lcyBub3QgbWF0Y2ggdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBgcmVnZXhwYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5ub3RNYXRjaCgnZm9vYmFyJywgL15mb28vLCAncmVnZXhwIGRvZXMgbm90IG1hdGNoJyk7XG4gICAqXG4gICAqIEBuYW1lIG5vdE1hdGNoXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdleHBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm5vdE1hdGNoID0gZnVuY3Rpb24gKGV4cCwgcmUsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24oZXhwLCBtc2cpLnRvLm5vdC5tYXRjaChyZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAucHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYG9iamVjdGAgaGFzIGEgcHJvcGVydHkgbmFtZWQgYnkgYHByb3BlcnR5YC5cbiAgICpcbiAgICogICAgIGFzc2VydC5wcm9wZXJ0eSh7IHRlYTogeyBncmVlbjogJ21hdGNoYScgfX0sICd0ZWEnKTtcbiAgICpcbiAgICogQG5hbWUgcHJvcGVydHlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LnByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykudG8uaGF2ZS5wcm9wZXJ0eShwcm9wKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5ub3RQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBkb2VzIF9ub3RfIGhhdmUgYSBwcm9wZXJ0eSBuYW1lZCBieSBgcHJvcGVydHlgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0Lm5vdFByb3BlcnR5KHsgdGVhOiB7IGdyZWVuOiAnbWF0Y2hhJyB9fSwgJ2NvZmZlZScpO1xuICAgKlxuICAgKiBAbmFtZSBub3RQcm9wZXJ0eVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQubm90UHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5ub3QuaGF2ZS5wcm9wZXJ0eShwcm9wKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5kZWVwUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYG9iamVjdGAgaGFzIGEgcHJvcGVydHkgbmFtZWQgYnkgYHByb3BlcnR5YCwgd2hpY2ggY2FuIGJlIGFcbiAgICogc3RyaW5nIHVzaW5nIGRvdC0gYW5kIGJyYWNrZXQtbm90YXRpb24gZm9yIGRlZXAgcmVmZXJlbmNlLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LmRlZXBQcm9wZXJ0eSh7IHRlYTogeyBncmVlbjogJ21hdGNoYScgfX0sICd0ZWEuZ3JlZW4nKTtcbiAgICpcbiAgICogQG5hbWUgZGVlcFByb3BlcnR5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5kZWVwUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKG9iaiwgbXNnKS50by5oYXZlLmRlZXAucHJvcGVydHkocHJvcCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAubm90RGVlcFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGRvZXMgX25vdF8gaGF2ZSBhIHByb3BlcnR5IG5hbWVkIGJ5IGBwcm9wZXJ0eWAsIHdoaWNoXG4gICAqIGNhbiBiZSBhIHN0cmluZyB1c2luZyBkb3QtIGFuZCBicmFja2V0LW5vdGF0aW9uIGZvciBkZWVwIHJlZmVyZW5jZS5cbiAgICpcbiAgICogICAgIGFzc2VydC5ub3REZWVwUHJvcGVydHkoeyB0ZWE6IHsgZ3JlZW46ICdtYXRjaGEnIH19LCAndGVhLm9vbG9uZycpO1xuICAgKlxuICAgKiBAbmFtZSBub3REZWVwUHJvcGVydHlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0Lm5vdERlZXBQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIHByb3AsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLm5vdC5oYXZlLmRlZXAucHJvcGVydHkocHJvcCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAucHJvcGVydHlWYWwob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGhhcyBhIHByb3BlcnR5IG5hbWVkIGJ5IGBwcm9wZXJ0eWAgd2l0aCB2YWx1ZSBnaXZlblxuICAgKiBieSBgdmFsdWVgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0LnByb3BlcnR5VmFsKHsgdGVhOiAnaXMgZ29vZCcgfSwgJ3RlYScsICdpcyBnb29kJyk7XG4gICAqXG4gICAqIEBuYW1lIHByb3BlcnR5VmFsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5wcm9wZXJ0eVZhbCA9IGZ1bmN0aW9uIChvYmosIHByb3AsIHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykudG8uaGF2ZS5wcm9wZXJ0eShwcm9wLCB2YWwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLnByb3BlcnR5Tm90VmFsKG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgb2JqZWN0YCBoYXMgYSBwcm9wZXJ0eSBuYW1lZCBieSBgcHJvcGVydHlgLCBidXQgd2l0aCBhIHZhbHVlXG4gICAqIGRpZmZlcmVudCBmcm9tIHRoYXQgZ2l2ZW4gYnkgYHZhbHVlYC5cbiAgICpcbiAgICogICAgIGFzc2VydC5wcm9wZXJ0eU5vdFZhbCh7IHRlYTogJ2lzIGdvb2QnIH0sICd0ZWEnLCAnaXMgYmFkJyk7XG4gICAqXG4gICAqIEBuYW1lIHByb3BlcnR5Tm90VmFsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5wcm9wZXJ0eU5vdFZhbCA9IGZ1bmN0aW9uIChvYmosIHByb3AsIHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihvYmosIG1zZykudG8ubm90LmhhdmUucHJvcGVydHkocHJvcCwgdmFsKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5kZWVwUHJvcGVydHlWYWwob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IGBvYmplY3RgIGhhcyBhIHByb3BlcnR5IG5hbWVkIGJ5IGBwcm9wZXJ0eWAgd2l0aCB2YWx1ZSBnaXZlblxuICAgKiBieSBgdmFsdWVgLiBgcHJvcGVydHlgIGNhbiB1c2UgZG90LSBhbmQgYnJhY2tldC1ub3RhdGlvbiBmb3IgZGVlcFxuICAgKiByZWZlcmVuY2UuXG4gICAqXG4gICAqICAgICBhc3NlcnQuZGVlcFByb3BlcnR5VmFsKHsgdGVhOiB7IGdyZWVuOiAnbWF0Y2hhJyB9fSwgJ3RlYS5ncmVlbicsICdtYXRjaGEnKTtcbiAgICpcbiAgICogQG5hbWUgZGVlcFByb3BlcnR5VmFsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5kZWVwUHJvcGVydHlWYWwgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCB2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLmhhdmUuZGVlcC5wcm9wZXJ0eShwcm9wLCB2YWwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmRlZXBQcm9wZXJ0eU5vdFZhbChvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYG9iamVjdGAgaGFzIGEgcHJvcGVydHkgbmFtZWQgYnkgYHByb3BlcnR5YCwgYnV0IHdpdGggYSB2YWx1ZVxuICAgKiBkaWZmZXJlbnQgZnJvbSB0aGF0IGdpdmVuIGJ5IGB2YWx1ZWAuIGBwcm9wZXJ0eWAgY2FuIHVzZSBkb3QtIGFuZFxuICAgKiBicmFja2V0LW5vdGF0aW9uIGZvciBkZWVwIHJlZmVyZW5jZS5cbiAgICpcbiAgICogICAgIGFzc2VydC5kZWVwUHJvcGVydHlOb3RWYWwoeyB0ZWE6IHsgZ3JlZW46ICdtYXRjaGEnIH19LCAndGVhLmdyZWVuJywgJ2tvbmFjaGEnKTtcbiAgICpcbiAgICogQG5hbWUgZGVlcFByb3BlcnR5Tm90VmFsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5kZWVwUHJvcGVydHlOb3RWYWwgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCB2YWwsIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24ob2JqLCBtc2cpLnRvLm5vdC5oYXZlLmRlZXAucHJvcGVydHkocHJvcCwgdmFsKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5sZW5ndGhPZihvYmplY3QsIGxlbmd0aCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYG9iamVjdGAgaGFzIGEgYGxlbmd0aGAgcHJvcGVydHkgd2l0aCB0aGUgZXhwZWN0ZWQgdmFsdWUuXG4gICAqXG4gICAqICAgICBhc3NlcnQubGVuZ3RoT2YoWzEsMiwzXSwgMywgJ2FycmF5IGhhcyBsZW5ndGggb2YgMycpO1xuICAgKiAgICAgYXNzZXJ0Lmxlbmd0aE9mKCdmb29iYXInLCA1LCAnc3RyaW5nIGhhcyBsZW5ndGggb2YgNicpO1xuICAgKlxuICAgKiBAbmFtZSBsZW5ndGhPZlxuICAgKiBAcGFyYW0ge01peGVkfSBvYmplY3RcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQubGVuZ3RoT2YgPSBmdW5jdGlvbiAoZXhwLCBsZW4sIG1zZykge1xuICAgIG5ldyBBc3NlcnRpb24oZXhwLCBtc2cpLnRvLmhhdmUubGVuZ3RoKGxlbik7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAudGhyb3dzKGZ1bmN0aW9uLCBbY29uc3RydWN0b3Ivc3RyaW5nL3JlZ2V4cF0sIFtzdHJpbmcvcmVnZXhwXSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYGZ1bmN0aW9uYCB3aWxsIHRocm93IGFuIGVycm9yIHRoYXQgaXMgYW4gaW5zdGFuY2Ugb2ZcbiAgICogYGNvbnN0cnVjdG9yYCwgb3IgYWx0ZXJuYXRlbHkgdGhhdCBpdCB3aWxsIHRocm93IGFuIGVycm9yIHdpdGggbWVzc2FnZVxuICAgKiBtYXRjaGluZyBgcmVnZXhwYC5cbiAgICpcbiAgICogICAgIGFzc2VydC50aHJvdyhmbiwgJ2Z1bmN0aW9uIHRocm93cyBhIHJlZmVyZW5jZSBlcnJvcicpO1xuICAgKiAgICAgYXNzZXJ0LnRocm93KGZuLCAvZnVuY3Rpb24gdGhyb3dzIGEgcmVmZXJlbmNlIGVycm9yLyk7XG4gICAqICAgICBhc3NlcnQudGhyb3coZm4sIFJlZmVyZW5jZUVycm9yKTtcbiAgICogICAgIGFzc2VydC50aHJvdyhmbiwgUmVmZXJlbmNlRXJyb3IsICdmdW5jdGlvbiB0aHJvd3MgYSByZWZlcmVuY2UgZXJyb3InKTtcbiAgICogICAgIGFzc2VydC50aHJvdyhmbiwgUmVmZXJlbmNlRXJyb3IsIC9mdW5jdGlvbiB0aHJvd3MgYSByZWZlcmVuY2UgZXJyb3IvKTtcbiAgICpcbiAgICogQG5hbWUgdGhyb3dzXG4gICAqIEBhbGlhcyB0aHJvd1xuICAgKiBAYWxpYXMgVGhyb3dcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtFcnJvckNvbnN0cnVjdG9yfSBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhwXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjRXJyb3JfdHlwZXNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXNzZXJ0LlRocm93ID0gZnVuY3Rpb24gKGZuLCBlcnJ0LCBlcnJzLCBtc2cpIHtcbiAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBlcnJ0IHx8IGVycnQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIGVycnMgPSBlcnJ0O1xuICAgICAgZXJydCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGFzc2VydEVyciA9IG5ldyBBc3NlcnRpb24oZm4sIG1zZykudG8uVGhyb3coZXJydCwgZXJycyk7XG4gICAgcmV0dXJuIGZsYWcoYXNzZXJ0RXJyLCAnb2JqZWN0Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAuZG9lc05vdFRocm93KGZ1bmN0aW9uLCBbY29uc3RydWN0b3IvcmVnZXhwXSwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYGZ1bmN0aW9uYCB3aWxsIF9ub3RfIHRocm93IGFuIGVycm9yIHRoYXQgaXMgYW4gaW5zdGFuY2Ugb2ZcbiAgICogYGNvbnN0cnVjdG9yYCwgb3IgYWx0ZXJuYXRlbHkgdGhhdCBpdCB3aWxsIG5vdCB0aHJvdyBhbiBlcnJvciB3aXRoIG1lc3NhZ2VcbiAgICogbWF0Y2hpbmcgYHJlZ2V4cGAuXG4gICAqXG4gICAqICAgICBhc3NlcnQuZG9lc05vdFRocm93KGZuLCBFcnJvciwgJ2Z1bmN0aW9uIGRvZXMgbm90IHRocm93Jyk7XG4gICAqXG4gICAqIEBuYW1lIGRvZXNOb3RUaHJvd1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge0Vycm9yQ29uc3RydWN0b3J9IGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdleHBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvciNFcnJvcl90eXBlc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuZG9lc05vdFRocm93ID0gZnVuY3Rpb24gKGZuLCB0eXBlLCBtc2cpIHtcbiAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB0eXBlKSB7XG4gICAgICBtc2cgPSB0eXBlO1xuICAgICAgdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbmV3IEFzc2VydGlvbihmbiwgbXNnKS50by5ub3QuVGhyb3codHlwZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICMjIyAub3BlcmF0b3IodmFsMSwgb3BlcmF0b3IsIHZhbDIsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQ29tcGFyZXMgdHdvIHZhbHVlcyB1c2luZyBgb3BlcmF0b3JgLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0Lm9wZXJhdG9yKDEsICc8JywgMiwgJ2V2ZXJ5dGhpbmcgaXMgb2snKTtcbiAgICogICAgIGFzc2VydC5vcGVyYXRvcigxLCAnPicsIDIsICd0aGlzIHdpbGwgZmFpbCcpO1xuICAgKlxuICAgKiBAbmFtZSBvcGVyYXRvclxuICAgKiBAcGFyYW0ge01peGVkfSB2YWwxXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvcGVyYXRvclxuICAgKiBAcGFyYW0ge01peGVkfSB2YWwyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5vcGVyYXRvciA9IGZ1bmN0aW9uICh2YWwsIG9wZXJhdG9yLCB2YWwyLCBtc2cpIHtcbiAgICBpZiAoIX5bJz09JywgJz09PScsICc+JywgJz49JywgJzwnLCAnPD0nLCAnIT0nLCAnIT09J10uaW5kZXhPZihvcGVyYXRvcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBvcGVyYXRvciBcIicgKyBvcGVyYXRvciArICdcIicpO1xuICAgIH1cbiAgICB2YXIgdGVzdCA9IG5ldyBBc3NlcnRpb24oZXZhbCh2YWwgKyBvcGVyYXRvciArIHZhbDIpLCBtc2cpO1xuICAgIHRlc3QuYXNzZXJ0KFxuICAgICAgICB0cnVlID09PSBmbGFnKHRlc3QsICdvYmplY3QnKVxuICAgICAgLCAnZXhwZWN0ZWQgJyArIHV0aWwuaW5zcGVjdCh2YWwpICsgJyB0byBiZSAnICsgb3BlcmF0b3IgKyAnICcgKyB1dGlsLmluc3BlY3QodmFsMilcbiAgICAgICwgJ2V4cGVjdGVkICcgKyB1dGlsLmluc3BlY3QodmFsKSArICcgdG8gbm90IGJlICcgKyBvcGVyYXRvciArICcgJyArIHV0aWwuaW5zcGVjdCh2YWwyKSApO1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIyMgLmNsb3NlVG8oYWN0dWFsLCBleHBlY3RlZCwgZGVsdGEsIFttZXNzYWdlXSlcbiAgICpcbiAgICogQXNzZXJ0cyB0aGF0IHRoZSB0YXJnZXQgaXMgZXF1YWwgYGV4cGVjdGVkYCwgdG8gd2l0aGluIGEgKy8tIGBkZWx0YWAgcmFuZ2UuXG4gICAqXG4gICAqICAgICBhc3NlcnQuY2xvc2VUbygxLjUsIDEsIDAuNSwgJ251bWJlcnMgYXJlIGNsb3NlJyk7XG4gICAqXG4gICAqIEBuYW1lIGNsb3NlVG9cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGFjdHVhbFxuICAgKiBAcGFyYW0ge051bWJlcn0gZXhwZWN0ZWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5jbG9zZVRvID0gZnVuY3Rpb24gKGFjdCwgZXhwLCBkZWx0YSwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihhY3QsIG1zZykudG8uYmUuY2xvc2VUbyhleHAsIGRlbHRhKTtcbiAgfTtcblxuICAvKipcbiAgICogIyMjIC5zYW1lTWVtYmVycyhzZXQxLCBzZXQyLCBbbWVzc2FnZV0pXG4gICAqXG4gICAqIEFzc2VydHMgdGhhdCBgc2V0MWAgYW5kIGBzZXQyYCBoYXZlIHRoZSBzYW1lIG1lbWJlcnMuXG4gICAqIE9yZGVyIGlzIG5vdCB0YWtlbiBpbnRvIGFjY291bnQuXG4gICAqXG4gICAqICAgICBhc3NlcnQuc2FtZU1lbWJlcnMoWyAxLCAyLCAzIF0sIFsgMiwgMSwgMyBdLCAnc2FtZSBtZW1iZXJzJyk7XG4gICAqXG4gICAqIEBuYW1lIHNhbWVNZW1iZXJzXG4gICAqIEBwYXJhbSB7QXJyYXl9IHNldDFcbiAgICogQHBhcmFtIHtBcnJheX0gc2V0MlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3NlcnQuc2FtZU1lbWJlcnMgPSBmdW5jdGlvbiAoc2V0MSwgc2V0MiwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbihzZXQxLCBtc2cpLnRvLmhhdmUuc2FtZS5tZW1iZXJzKHNldDIpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyAuaW5jbHVkZU1lbWJlcnMoc3VwZXJzZXQsIHN1YnNldCwgW21lc3NhZ2VdKVxuICAgKlxuICAgKiBBc3NlcnRzIHRoYXQgYHN1YnNldGAgaXMgaW5jbHVkZWQgaW4gYHN1cGVyc2V0YC5cbiAgICogT3JkZXIgaXMgbm90IHRha2VuIGludG8gYWNjb3VudC5cbiAgICpcbiAgICogICAgIGFzc2VydC5pbmNsdWRlTWVtYmVycyhbIDEsIDIsIDMgXSwgWyAyLCAxIF0sICdpbmNsdWRlIG1lbWJlcnMnKTtcbiAgICpcbiAgICogQG5hbWUgaW5jbHVkZU1lbWJlcnNcbiAgICogQHBhcmFtIHtBcnJheX0gc3VwZXJzZXRcbiAgICogQHBhcmFtIHtBcnJheX0gc3Vic2V0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydC5pbmNsdWRlTWVtYmVycyA9IGZ1bmN0aW9uIChzdXBlcnNldCwgc3Vic2V0LCBtc2cpIHtcbiAgICBuZXcgQXNzZXJ0aW9uKHN1cGVyc2V0LCBtc2cpLnRvLmluY2x1ZGUubWVtYmVycyhzdWJzZXQpO1xuICB9XG5cbiAgLyohXG4gICAqIFVuZG9jdW1lbnRlZCAvIHVudGVzdGVkXG4gICAqL1xuXG4gIGFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgbmV3IEFzc2VydGlvbih2YWwsIG1zZykudG8ubm90LmJlLm9rO1xuICB9O1xuXG4gIC8qIVxuICAgKiBBbGlhc2VzLlxuICAgKi9cblxuICAoZnVuY3Rpb24gYWxpYXMobmFtZSwgYXMpe1xuICAgIGFzc2VydFthc10gPSBhc3NlcnRbbmFtZV07XG4gICAgcmV0dXJuIGFsaWFzO1xuICB9KVxuICAoJ1Rocm93JywgJ3Rocm93JylcbiAgKCdUaHJvdycsICd0aHJvd3MnKTtcbn07XG4iLCIvKiFcbiAqIGNoYWlcbiAqIENvcHlyaWdodChjKSAyMDExLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjaGFpLCB1dGlsKSB7XG4gIGNoYWkuZXhwZWN0ID0gZnVuY3Rpb24gKHZhbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBuZXcgY2hhaS5Bc3NlcnRpb24odmFsLCBtZXNzYWdlKTtcbiAgfTtcbn07XG5cbiIsIi8qIVxuICogY2hhaVxuICogQ29weXJpZ2h0KGMpIDIwMTEtMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNoYWksIHV0aWwpIHtcbiAgdmFyIEFzc2VydGlvbiA9IGNoYWkuQXNzZXJ0aW9uO1xuXG4gIGZ1bmN0aW9uIGxvYWRTaG91bGQgKCkge1xuICAgIC8vIGV4cGxpY2l0bHkgZGVmaW5lIHRoaXMgbWV0aG9kIGFzIGZ1bmN0aW9uIGFzIHRvIGhhdmUgaXQncyBuYW1lIHRvIGluY2x1ZGUgYXMgYHNzZmlgXG4gICAgZnVuY3Rpb24gc2hvdWxkR2V0dGVyKCkge1xuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdGhpcyBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IEFzc2VydGlvbih0aGlzLmNvbnN0cnVjdG9yKHRoaXMpLCBudWxsLCBzaG91bGRHZXR0ZXIpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gbmV3IEFzc2VydGlvbih0aGlzID09IHRydWUsIG51bGwsIHNob3VsZEdldHRlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEFzc2VydGlvbih0aGlzLCBudWxsLCBzaG91bGRHZXR0ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaG91bGRTZXR0ZXIodmFsdWUpIHtcbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2hhaWpzL2NoYWkvaXNzdWVzLzg2OiB0aGlzIG1ha2VzXG4gICAgICAvLyBgd2hhdGV2ZXIuc2hvdWxkID0gc29tZVZhbHVlYCBhY3R1YWxseSBzZXQgYHNvbWVWYWx1ZWAsIHdoaWNoIGlzXG4gICAgICAvLyBlc3BlY2lhbGx5IHVzZWZ1bCBmb3IgYGdsb2JhbC5zaG91bGQgPSByZXF1aXJlKCdjaGFpJykuc2hvdWxkKClgLlxuICAgICAgLy9cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBoYXZlIHRvIHVzZSBbW0RlZmluZVByb3BlcnR5XV0gaW5zdGVhZCBvZiBbW1B1dF1dXG4gICAgICAvLyBzaW5jZSBvdGhlcndpc2Ugd2Ugd291bGQgdHJpZ2dlciB0aGlzIHZlcnkgc2V0dGVyIVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzaG91bGQnLCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIG1vZGlmeSBPYmplY3QucHJvdG90eXBlIHRvIGhhdmUgYHNob3VsZGBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ3Nob3VsZCcsIHtcbiAgICAgIHNldDogc2hvdWxkU2V0dGVyXG4gICAgICAsIGdldDogc2hvdWxkR2V0dGVyXG4gICAgICAsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdmFyIHNob3VsZCA9IHt9O1xuXG4gICAgc2hvdWxkLmVxdWFsID0gZnVuY3Rpb24gKHZhbDEsIHZhbDIsIG1zZykge1xuICAgICAgbmV3IEFzc2VydGlvbih2YWwxLCBtc2cpLnRvLmVxdWFsKHZhbDIpO1xuICAgIH07XG5cbiAgICBzaG91bGQuVGhyb3cgPSBmdW5jdGlvbiAoZm4sIGVycnQsIGVycnMsIG1zZykge1xuICAgICAgbmV3IEFzc2VydGlvbihmbiwgbXNnKS50by5UaHJvdyhlcnJ0LCBlcnJzKTtcbiAgICB9O1xuXG4gICAgc2hvdWxkLmV4aXN0ID0gZnVuY3Rpb24gKHZhbCwgbXNnKSB7XG4gICAgICBuZXcgQXNzZXJ0aW9uKHZhbCwgbXNnKS50by5leGlzdDtcbiAgICB9XG5cbiAgICAvLyBuZWdhdGlvblxuICAgIHNob3VsZC5ub3QgPSB7fVxuXG4gICAgc2hvdWxkLm5vdC5lcXVhbCA9IGZ1bmN0aW9uICh2YWwxLCB2YWwyLCBtc2cpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24odmFsMSwgbXNnKS50by5ub3QuZXF1YWwodmFsMik7XG4gICAgfTtcblxuICAgIHNob3VsZC5ub3QuVGhyb3cgPSBmdW5jdGlvbiAoZm4sIGVycnQsIGVycnMsIG1zZykge1xuICAgICAgbmV3IEFzc2VydGlvbihmbiwgbXNnKS50by5ub3QuVGhyb3coZXJydCwgZXJycyk7XG4gICAgfTtcblxuICAgIHNob3VsZC5ub3QuZXhpc3QgPSBmdW5jdGlvbiAodmFsLCBtc2cpIHtcbiAgICAgIG5ldyBBc3NlcnRpb24odmFsLCBtc2cpLnRvLm5vdC5leGlzdDtcbiAgICB9XG5cbiAgICBzaG91bGRbJ3Rocm93J10gPSBzaG91bGRbJ1Rocm93J107XG4gICAgc2hvdWxkLm5vdFsndGhyb3cnXSA9IHNob3VsZC5ub3RbJ1Rocm93J107XG5cbiAgICByZXR1cm4gc2hvdWxkO1xuICB9O1xuXG4gIGNoYWkuc2hvdWxkID0gbG9hZFNob3VsZDtcbiAgY2hhaS5TaG91bGQgPSBsb2FkU2hvdWxkO1xufTtcbiIsIi8qIVxuICogQ2hhaSAtIGFkZENoYWluaW5nTWV0aG9kIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKiFcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgdHJhbnNmZXJGbGFncyA9IHJlcXVpcmUoJy4vdHJhbnNmZXJGbGFncycpO1xudmFyIGZsYWcgPSByZXF1aXJlKCcuL2ZsYWcnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxuLyohXG4gKiBNb2R1bGUgdmFyaWFibGVzXG4gKi9cblxuLy8gQ2hlY2sgd2hldGhlciBgX19wcm90b19fYCBpcyBzdXBwb3J0ZWRcbnZhciBoYXNQcm90b1N1cHBvcnQgPSAnX19wcm90b19fJyBpbiBPYmplY3Q7XG5cbi8vIFdpdGhvdXQgYF9fcHJvdG9fX2Agc3VwcG9ydCwgdGhpcyBtb2R1bGUgd2lsbCBuZWVkIHRvIGFkZCBwcm9wZXJ0aWVzIHRvIGEgZnVuY3Rpb24uXG4vLyBIb3dldmVyLCBzb21lIEZ1bmN0aW9uLnByb3RvdHlwZSBtZXRob2RzIGNhbm5vdCBiZSBvdmVyd3JpdHRlbixcbi8vIGFuZCB0aGVyZSBzZWVtcyBubyBlYXN5IGNyb3NzLXBsYXRmb3JtIHdheSB0byBkZXRlY3QgdGhlbSAoQHNlZSBjaGFpanMvY2hhaS9pc3N1ZXMvNjkpLlxudmFyIGV4Y2x1ZGVOYW1lcyA9IC9eKD86bGVuZ3RofG5hbWV8YXJndW1lbnRzfGNhbGxlcikkLztcblxuLy8gQ2FjaGUgYEZ1bmN0aW9uYCBwcm9wZXJ0aWVzXG52YXIgY2FsbCAgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCxcbiAgICBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLyoqXG4gKiAjIyMgYWRkQ2hhaW5hYmxlTWV0aG9kIChjdHgsIG5hbWUsIG1ldGhvZCwgY2hhaW5pbmdCZWhhdmlvcilcbiAqXG4gKiBBZGRzIGEgbWV0aG9kIHRvIGFuIG9iamVjdCwgc3VjaCB0aGF0IHRoZSBtZXRob2QgY2FuIGFsc28gYmUgY2hhaW5lZC5cbiAqXG4gKiAgICAgdXRpbHMuYWRkQ2hhaW5hYmxlTWV0aG9kKGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ2ZvbycsIGZ1bmN0aW9uIChzdHIpIHtcbiAqICAgICAgIHZhciBvYmogPSB1dGlscy5mbGFnKHRoaXMsICdvYmplY3QnKTtcbiAqICAgICAgIG5ldyBjaGFpLkFzc2VydGlvbihvYmopLnRvLmJlLmVxdWFsKHN0cik7XG4gKiAgICAgfSk7XG4gKlxuICogQ2FuIGFsc28gYmUgYWNjZXNzZWQgZGlyZWN0bHkgZnJvbSBgY2hhaS5Bc3NlcnRpb25gLlxuICpcbiAqICAgICBjaGFpLkFzc2VydGlvbi5hZGRDaGFpbmFibGVNZXRob2QoJ2ZvbycsIGZuLCBjaGFpbmluZ0JlaGF2aW9yKTtcbiAqXG4gKiBUaGUgcmVzdWx0IGNhbiB0aGVuIGJlIHVzZWQgYXMgYm90aCBhIG1ldGhvZCBhc3NlcnRpb24sIGV4ZWN1dGluZyBib3RoIGBtZXRob2RgIGFuZFxuICogYGNoYWluaW5nQmVoYXZpb3JgLCBvciBhcyBhIGxhbmd1YWdlIGNoYWluLCB3aGljaCBvbmx5IGV4ZWN1dGVzIGBjaGFpbmluZ0JlaGF2aW9yYC5cbiAqXG4gKiAgICAgZXhwZWN0KGZvb1N0cikudG8uYmUuZm9vKCdiYXInKTtcbiAqICAgICBleHBlY3QoZm9vU3RyKS50by5iZS5mb28uZXF1YWwoJ2ZvbycpO1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHggb2JqZWN0IHRvIHdoaWNoIHRoZSBtZXRob2QgaXMgYWRkZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIG1ldGhvZCB0byBhZGRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1ldGhvZCBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBgbmFtZWAsIHdoZW4gY2FsbGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGFpbmluZ0JlaGF2aW9yIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxuICogQG5hbWUgYWRkQ2hhaW5hYmxlTWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbmFtZSwgbWV0aG9kLCBjaGFpbmluZ0JlaGF2aW9yKSB7XG4gIGlmICh0eXBlb2YgY2hhaW5pbmdCZWhhdmlvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGNoYWluaW5nQmVoYXZpb3IgPSBmdW5jdGlvbiAoKSB7IH07XG4gIH1cblxuICB2YXIgY2hhaW5hYmxlQmVoYXZpb3IgPSB7XG4gICAgICBtZXRob2Q6IG1ldGhvZFxuICAgICwgY2hhaW5pbmdCZWhhdmlvcjogY2hhaW5pbmdCZWhhdmlvclxuICB9O1xuXG4gIC8vIHNhdmUgdGhlIG1ldGhvZHMgc28gd2UgY2FuIG92ZXJ3cml0ZSB0aGVtIGxhdGVyLCBpZiB3ZSBuZWVkIHRvLlxuICBpZiAoIWN0eC5fX21ldGhvZHMpIHtcbiAgICBjdHguX19tZXRob2RzID0ge307XG4gIH1cbiAgY3R4Ll9fbWV0aG9kc1tuYW1lXSA9IGNoYWluYWJsZUJlaGF2aW9yO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIG5hbWUsXG4gICAgeyBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhaW5hYmxlQmVoYXZpb3IuY2hhaW5pbmdCZWhhdmlvci5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHZhciBhc3NlcnQgPSBmdW5jdGlvbiBhc3NlcnQoKSB7XG4gICAgICAgICAgdmFyIG9sZF9zc2ZpID0gZmxhZyh0aGlzLCAnc3NmaScpO1xuICAgICAgICAgIGlmIChvbGRfc3NmaSAmJiBjb25maWcuaW5jbHVkZVN0YWNrID09PSBmYWxzZSlcbiAgICAgICAgICAgIGZsYWcodGhpcywgJ3NzZmknLCBhc3NlcnQpO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjaGFpbmFibGVCZWhhdmlvci5tZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVzZSBgX19wcm90b19fYCBpZiBhdmFpbGFibGVcbiAgICAgICAgaWYgKGhhc1Byb3RvU3VwcG9ydCkge1xuICAgICAgICAgIC8vIEluaGVyaXQgYWxsIHByb3BlcnRpZXMgZnJvbSB0aGUgb2JqZWN0IGJ5IHJlcGxhY2luZyB0aGUgYEZ1bmN0aW9uYCBwcm90b3R5cGVcbiAgICAgICAgICB2YXIgcHJvdG90eXBlID0gYXNzZXJ0Ll9fcHJvdG9fXyA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgICAgICAgLy8gUmVzdG9yZSB0aGUgYGNhbGxgIGFuZCBgYXBwbHlgIG1ldGhvZHMgZnJvbSBgRnVuY3Rpb25gXG4gICAgICAgICAgcHJvdG90eXBlLmNhbGwgPSBjYWxsO1xuICAgICAgICAgIHByb3RvdHlwZS5hcHBseSA9IGFwcGx5O1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmVkZWZpbmUgYWxsIHByb3BlcnRpZXMgKHNsb3chKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYXNzZXJ0ZXJOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN0eCk7XG4gICAgICAgICAgYXNzZXJ0ZXJOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NlcnRlck5hbWUpIHtcbiAgICAgICAgICAgIGlmICghZXhjbHVkZU5hbWVzLnRlc3QoYXNzZXJ0ZXJOYW1lKSkge1xuICAgICAgICAgICAgICB2YXIgcGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGN0eCwgYXNzZXJ0ZXJOYW1lKTtcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFzc2VydCwgYXNzZXJ0ZXJOYW1lLCBwZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2ZlckZsYWdzKHRoaXMsIGFzc2VydCk7XG4gICAgICAgIHJldHVybiBhc3NlcnQ7XG4gICAgICB9XG4gICAgLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59O1xuIiwiLyohXG4gKiBDaGFpIC0gYWRkTWV0aG9kIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbi8qKlxuICogIyMjIC5hZGRNZXRob2QgKGN0eCwgbmFtZSwgbWV0aG9kKVxuICpcbiAqIEFkZHMgYSBtZXRob2QgdG8gdGhlIHByb3RvdHlwZSBvZiBhbiBvYmplY3QuXG4gKlxuICogICAgIHV0aWxzLmFkZE1ldGhvZChjaGFpLkFzc2VydGlvbi5wcm90b3R5cGUsICdmb28nLCBmdW5jdGlvbiAoc3RyKSB7XG4gKiAgICAgICB2YXIgb2JqID0gdXRpbHMuZmxhZyh0aGlzLCAnb2JqZWN0Jyk7XG4gKiAgICAgICBuZXcgY2hhaS5Bc3NlcnRpb24ob2JqKS50by5iZS5lcXVhbChzdHIpO1xuICogICAgIH0pO1xuICpcbiAqIENhbiBhbHNvIGJlIGFjY2Vzc2VkIGRpcmVjdGx5IGZyb20gYGNoYWkuQXNzZXJ0aW9uYC5cbiAqXG4gKiAgICAgY2hhaS5Bc3NlcnRpb24uYWRkTWV0aG9kKCdmb28nLCBmbik7XG4gKlxuICogVGhlbiBjYW4gYmUgdXNlZCBhcyBhbnkgb3RoZXIgYXNzZXJ0aW9uLlxuICpcbiAqICAgICBleHBlY3QoZm9vU3RyKS50by5iZS5mb28oJ2JhcicpO1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHggb2JqZWN0IHRvIHdoaWNoIHRoZSBtZXRob2QgaXMgYWRkZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIG1ldGhvZCB0byBhZGRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1ldGhvZCBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBuYW1lXG4gKiBAbmFtZSBhZGRNZXRob2RcbiAqIEBhcGkgcHVibGljXG4gKi9cbnZhciBmbGFnID0gcmVxdWlyZSgnLi9mbGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbmFtZSwgbWV0aG9kKSB7XG4gIGN0eFtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2xkX3NzZmkgPSBmbGFnKHRoaXMsICdzc2ZpJyk7XG4gICAgaWYgKG9sZF9zc2ZpICYmIGNvbmZpZy5pbmNsdWRlU3RhY2sgPT09IGZhbHNlKVxuICAgICAgZmxhZyh0aGlzLCAnc3NmaScsIGN0eFtuYW1lXSk7XG4gICAgdmFyIHJlc3VsdCA9IG1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiByZXN1bHQ7XG4gIH07XG59O1xuIiwiLyohXG4gKiBDaGFpIC0gYWRkUHJvcGVydHkgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogIyMjIGFkZFByb3BlcnR5IChjdHgsIG5hbWUsIGdldHRlcilcbiAqXG4gKiBBZGRzIGEgcHJvcGVydHkgdG8gdGhlIHByb3RvdHlwZSBvZiBhbiBvYmplY3QuXG4gKlxuICogICAgIHV0aWxzLmFkZFByb3BlcnR5KGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ2ZvbycsIGZ1bmN0aW9uICgpIHtcbiAqICAgICAgIHZhciBvYmogPSB1dGlscy5mbGFnKHRoaXMsICdvYmplY3QnKTtcbiAqICAgICAgIG5ldyBjaGFpLkFzc2VydGlvbihvYmopLnRvLmJlLmluc3RhbmNlb2YoRm9vKTtcbiAqICAgICB9KTtcbiAqXG4gKiBDYW4gYWxzbyBiZSBhY2Nlc3NlZCBkaXJlY3RseSBmcm9tIGBjaGFpLkFzc2VydGlvbmAuXG4gKlxuICogICAgIGNoYWkuQXNzZXJ0aW9uLmFkZFByb3BlcnR5KCdmb28nLCBmbik7XG4gKlxuICogVGhlbiBjYW4gYmUgdXNlZCBhcyBhbnkgb3RoZXIgYXNzZXJ0aW9uLlxuICpcbiAqICAgICBleHBlY3QobXlGb28pLnRvLmJlLmZvbztcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4IG9iamVjdCB0byB3aGljaCB0aGUgcHJvcGVydHkgaXMgYWRkZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHByb3BlcnR5IHRvIGFkZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZ2V0dGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIG5hbWVcbiAqIEBuYW1lIGFkZFByb3BlcnR5XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbmFtZSwgZ2V0dGVyKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIG5hbWUsXG4gICAgeyBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdldHRlci5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfVxuICAgICwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufTtcbiIsIi8qIVxuICogQ2hhaSAtIGZsYWcgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogIyMjIGZsYWcob2JqZWN0ICxrZXksIFt2YWx1ZV0pXG4gKlxuICogR2V0IG9yIHNldCBhIGZsYWcgdmFsdWUgb24gYW4gb2JqZWN0LiBJZiBhXG4gKiB2YWx1ZSBpcyBwcm92aWRlZCBpdCB3aWxsIGJlIHNldCwgZWxzZSBpdCB3aWxsXG4gKiByZXR1cm4gdGhlIGN1cnJlbnRseSBzZXQgdmFsdWUgb3IgYHVuZGVmaW5lZGAgaWZcbiAqIHRoZSB2YWx1ZSBpcyBub3Qgc2V0LlxuICpcbiAqICAgICB1dGlscy5mbGFnKHRoaXMsICdmb28nLCAnYmFyJyk7IC8vIHNldHRlclxuICogICAgIHV0aWxzLmZsYWcodGhpcywgJ2ZvbycpOyAvLyBnZXR0ZXIsIHJldHVybnMgYGJhcmBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IChjb25zdHJ1Y3RlZCBBc3NlcnRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIChvcHRpb25hbClcbiAqIEBuYW1lIGZsYWdcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICB2YXIgZmxhZ3MgPSBvYmouX19mbGFncyB8fCAob2JqLl9fZmxhZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICBmbGFnc1trZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZsYWdzW2tleV07XG4gIH1cbn07XG4iLCIvKiFcbiAqIENoYWkgLSBnZXRBY3R1YWwgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogIyBnZXRBY3R1YWwob2JqZWN0LCBbYWN0dWFsXSlcbiAqXG4gKiBSZXR1cm5zIHRoZSBgYWN0dWFsYCB2YWx1ZSBmb3IgYW4gQXNzZXJ0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCAoY29uc3RydWN0ZWQgQXNzZXJ0aW9uKVxuICogQHBhcmFtIHtBcmd1bWVudHN9IGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZS5hc3NlcnQgYXJndW1lbnRzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBhcmdzKSB7XG4gIHJldHVybiBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogb2JqLl9vYmo7XG59O1xuIiwiLyohXG4gKiBDaGFpIC0gZ2V0RW51bWVyYWJsZVByb3BlcnRpZXMgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogIyMjIC5nZXRFbnVtZXJhYmxlUHJvcGVydGllcyhvYmplY3QpXG4gKlxuICogVGhpcyBhbGxvd3MgdGhlIHJldHJpZXZhbCBvZiBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGFuIG9iamVjdCxcbiAqIGluaGVyaXRlZCBvciBub3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge0FycmF5fVxuICogQG5hbWUgZ2V0RW51bWVyYWJsZVByb3BlcnRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRFbnVtZXJhYmxlUHJvcGVydGllcyhvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuICAgIHJlc3VsdC5wdXNoKG5hbWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLyohXG4gKiBDaGFpIC0gbWVzc2FnZSBjb21wb3NpdGlvbiB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyohXG4gKiBNb2R1bGUgZGVwZW5kYW5jaWVzXG4gKi9cblxudmFyIGZsYWcgPSByZXF1aXJlKCcuL2ZsYWcnKVxuICAsIGdldEFjdHVhbCA9IHJlcXVpcmUoJy4vZ2V0QWN0dWFsJylcbiAgLCBpbnNwZWN0ID0gcmVxdWlyZSgnLi9pbnNwZWN0JylcbiAgLCBvYmpEaXNwbGF5ID0gcmVxdWlyZSgnLi9vYmpEaXNwbGF5Jyk7XG5cbi8qKlxuICogIyMjIC5nZXRNZXNzYWdlKG9iamVjdCwgbWVzc2FnZSwgbmVnYXRlTWVzc2FnZSlcbiAqXG4gKiBDb25zdHJ1Y3QgdGhlIGVycm9yIG1lc3NhZ2UgYmFzZWQgb24gZmxhZ3NcbiAqIGFuZCB0ZW1wbGF0ZSB0YWdzLiBUZW1wbGF0ZSB0YWdzIHdpbGwgcmV0dXJuXG4gKiBhIHN0cmluZ2lmaWVkIGluc3BlY3Rpb24gb2YgdGhlIG9iamVjdCByZWZlcmVuY2VkLlxuICpcbiAqIE1lc3NhZ2UgdGVtcGxhdGUgdGFnczpcbiAqIC0gYCN7dGhpc31gIGN1cnJlbnQgYXNzZXJ0ZWQgb2JqZWN0XG4gKiAtIGAje2FjdH1gIGFjdHVhbCB2YWx1ZVxuICogLSBgI3tleHB9YCBleHBlY3RlZCB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgKGNvbnN0cnVjdGVkIEFzc2VydGlvbilcbiAqIEBwYXJhbSB7QXJndW1lbnRzfSBjaGFpLkFzc2VydGlvbi5wcm90b3R5cGUuYXNzZXJ0IGFyZ3VtZW50c1xuICogQG5hbWUgZ2V0TWVzc2FnZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIGFyZ3MpIHtcbiAgdmFyIG5lZ2F0ZSA9IGZsYWcob2JqLCAnbmVnYXRlJylcbiAgICAsIHZhbCA9IGZsYWcob2JqLCAnb2JqZWN0JylcbiAgICAsIGV4cGVjdGVkID0gYXJnc1szXVxuICAgICwgYWN0dWFsID0gZ2V0QWN0dWFsKG9iaiwgYXJncylcbiAgICAsIG1zZyA9IG5lZ2F0ZSA/IGFyZ3NbMl0gOiBhcmdzWzFdXG4gICAgLCBmbGFnTXNnID0gZmxhZyhvYmosICdtZXNzYWdlJyk7XG5cbiAgaWYodHlwZW9mIG1zZyA9PT0gXCJmdW5jdGlvblwiKSBtc2cgPSBtc2coKTtcbiAgbXNnID0gbXNnIHx8ICcnO1xuICBtc2cgPSBtc2dcbiAgICAucmVwbGFjZSgvI3t0aGlzfS9nLCBvYmpEaXNwbGF5KHZhbCkpXG4gICAgLnJlcGxhY2UoLyN7YWN0fS9nLCBvYmpEaXNwbGF5KGFjdHVhbCkpXG4gICAgLnJlcGxhY2UoLyN7ZXhwfS9nLCBvYmpEaXNwbGF5KGV4cGVjdGVkKSk7XG5cbiAgcmV0dXJuIGZsYWdNc2cgPyBmbGFnTXNnICsgJzogJyArIG1zZyA6IG1zZztcbn07XG4iLCIvKiFcbiAqIENoYWkgLSBnZXROYW1lIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMgZ2V0TmFtZShmdW5jKVxuICpcbiAqIEdldHMgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiwgaW4gYSBjcm9zcy1icm93c2VyIHdheS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhIGZ1bmN0aW9uICh1c3VhbGx5IGEgY29uc3RydWN0b3IpXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnVuYykge1xuICBpZiAoZnVuYy5uYW1lKSByZXR1cm4gZnVuYy5uYW1lO1xuXG4gIHZhciBtYXRjaCA9IC9eXFxzP2Z1bmN0aW9uIChbXihdKilcXCgvLmV4ZWMoZnVuYyk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXSA/IG1hdGNoWzFdIDogXCJcIjtcbn07XG4iLCIvKiFcbiAqIENoYWkgLSBnZXRQYXRoVmFsdWUgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2xvZ2ljYWxwYXJhZG94L2ZpbHRyXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMjIyAuZ2V0UGF0aFZhbHVlKHBhdGgsIG9iamVjdClcbiAqXG4gKiBUaGlzIGFsbG93cyB0aGUgcmV0cmlldmFsIG9mIHZhbHVlcyBpbiBhblxuICogb2JqZWN0IGdpdmVuIGEgc3RyaW5nIHBhdGguXG4gKlxuICogICAgIHZhciBvYmogPSB7XG4gKiAgICAgICAgIHByb3AxOiB7XG4gKiAgICAgICAgICAgICBhcnI6IFsnYScsICdiJywgJ2MnXVxuICogICAgICAgICAgICwgc3RyOiAnSGVsbG8nXG4gKiAgICAgICAgIH1cbiAqICAgICAgICwgcHJvcDI6IHtcbiAqICAgICAgICAgICAgIGFycjogWyB7IG5lc3RlZDogJ1VuaXZlcnNlJyB9IF1cbiAqICAgICAgICAgICAsIHN0cjogJ0hlbGxvIGFnYWluISdcbiAqICAgICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBUaGUgZm9sbG93aW5nIHdvdWxkIGJlIHRoZSByZXN1bHRzLlxuICpcbiAqICAgICBnZXRQYXRoVmFsdWUoJ3Byb3AxLnN0cicsIG9iaik7IC8vIEhlbGxvXG4gKiAgICAgZ2V0UGF0aFZhbHVlKCdwcm9wMS5hdHRbMl0nLCBvYmopOyAvLyBiXG4gKiAgICAgZ2V0UGF0aFZhbHVlKCdwcm9wMi5hcnJbMF0ubmVzdGVkJywgb2JqKTsgLy8gVW5pdmVyc2VcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gdmFsdWUgb3IgYHVuZGVmaW5lZGBcbiAqIEBuYW1lIGdldFBhdGhWYWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG52YXIgZ2V0UGF0aFZhbHVlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGF0aCwgb2JqKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZVBhdGgocGF0aCk7XG4gIHJldHVybiBfZ2V0UGF0aFZhbHVlKHBhcnNlZCwgb2JqKTtcbn07XG5cbi8qIVxuICogIyMgcGFyc2VQYXRoKHBhdGgpXG4gKlxuICogSGVscGVyIGZ1bmN0aW9uIHVzZWQgdG8gcGFyc2Ugc3RyaW5nIG9iamVjdFxuICogcGF0aHMuIFVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIGBfZ2V0UGF0aFZhbHVlYC5cbiAqXG4gKiAgICAgIHZhciBwYXJzZWQgPSBwYXJzZVBhdGgoJ215b2JqZWN0LnByb3BlcnR5LnN1YnByb3AnKTtcbiAqXG4gKiAjIyMgUGF0aHM6XG4gKlxuICogKiBDYW4gYmUgYXMgbmVhciBpbmZpbml0ZWx5IGRlZXAgYW5kIG5lc3RlZFxuICogKiBBcnJheXMgYXJlIGFsc28gdmFsaWQgdXNpbmcgdGhlIGZvcm1hbCBgbXlvYmplY3QuZG9jdW1lbnRbM10ucHJvcGVydHlgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwYXJzZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICB2YXIgc3RyID0gcGF0aC5yZXBsYWNlKC9cXFsvZywgJy5bJylcbiAgICAsIHBhcnRzID0gc3RyLm1hdGNoKC8oXFxcXFxcLnxbXi5dKz8pKy9nKTtcbiAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgcmUgPSAvXFxbKFxcZCspXFxdJC9cbiAgICAgICwgbUFyciA9IHJlLmV4ZWModmFsdWUpXG4gICAgaWYgKG1BcnIpIHJldHVybiB7IGk6IHBhcnNlRmxvYXQobUFyclsxXSkgfTtcbiAgICBlbHNlIHJldHVybiB7IHA6IHZhbHVlIH07XG4gIH0pO1xufTtcblxuLyohXG4gKiAjIyBfZ2V0UGF0aFZhbHVlKHBhcnNlZCwgb2JqKVxuICpcbiAqIEhlbHBlciBjb21wYW5pb24gZnVuY3Rpb24gZm9yIGAucGFyc2VQYXRoYCB0aGF0IHJldHVybnNcbiAqIHRoZSB2YWx1ZSBsb2NhdGVkIGF0IHRoZSBwYXJzZWQgYWRkcmVzcy5cbiAqXG4gKiAgICAgIHZhciB2YWx1ZSA9IGdldFBhdGhWYWx1ZShwYXJzZWQsIG9iaik7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcnNlZCBkZWZpbml0aW9uIGZyb20gYHBhcnNlUGF0aGAuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IHRvIHNlYXJjaCBhZ2FpbnN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fFVuZGVmaW5lZH0gdmFsdWVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIF9nZXRQYXRoVmFsdWUgKHBhcnNlZCwgb2JqKSB7XG4gIHZhciB0bXAgPSBvYmpcbiAgICAsIHJlcztcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXJzZWQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSBwYXJzZWRbaV07XG4gICAgaWYgKHRtcCkge1xuICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgcGFydC5wKVxuICAgICAgICB0bXAgPSB0bXBbcGFydC5wXTtcbiAgICAgIGVsc2UgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgcGFydC5pKVxuICAgICAgICB0bXAgPSB0bXBbcGFydC5pXTtcbiAgICAgIGlmIChpID09IChsIC0gMSkpIHJlcyA9IHRtcDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsIi8qIVxuICogQ2hhaSAtIGdldFByb3BlcnRpZXMgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogIyMjIC5nZXRQcm9wZXJ0aWVzKG9iamVjdClcbiAqXG4gKiBUaGlzIGFsbG93cyB0aGUgcmV0cmlldmFsIG9mIHByb3BlcnR5IG5hbWVzIG9mIGFuIG9iamVjdCwgZW51bWVyYWJsZSBvciBub3QsXG4gKiBpbmhlcml0ZWQgb3Igbm90LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBuYW1lIGdldFByb3BlcnRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc3ViamVjdCk7XG5cbiAgZnVuY3Rpb24gYWRkUHJvcGVydHkocHJvcGVydHkpIHtcbiAgICBpZiAocmVzdWx0LmluZGV4T2YocHJvcGVydHkpID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzdWJqZWN0KTtcbiAgd2hpbGUgKHByb3RvICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pLmZvckVhY2goYWRkUHJvcGVydHkpO1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLyohXG4gKiBjaGFpXG4gKiBDb3B5cmlnaHQoYykgMjAxMSBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qIVxuICogTWFpbiBleHBvcnRzXG4gKi9cblxudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKiFcbiAqIHRlc3QgdXRpbGl0eVxuICovXG5cbmV4cG9ydHMudGVzdCA9IHJlcXVpcmUoJy4vdGVzdCcpO1xuXG4vKiFcbiAqIHR5cGUgdXRpbGl0eVxuICovXG5cbmV4cG9ydHMudHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuXG4vKiFcbiAqIG1lc3NhZ2UgdXRpbGl0eVxuICovXG5cbmV4cG9ydHMuZ2V0TWVzc2FnZSA9IHJlcXVpcmUoJy4vZ2V0TWVzc2FnZScpO1xuXG4vKiFcbiAqIGFjdHVhbCB1dGlsaXR5XG4gKi9cblxuZXhwb3J0cy5nZXRBY3R1YWwgPSByZXF1aXJlKCcuL2dldEFjdHVhbCcpO1xuXG4vKiFcbiAqIEluc3BlY3QgdXRpbFxuICovXG5cbmV4cG9ydHMuaW5zcGVjdCA9IHJlcXVpcmUoJy4vaW5zcGVjdCcpO1xuXG4vKiFcbiAqIE9iamVjdCBEaXNwbGF5IHV0aWxcbiAqL1xuXG5leHBvcnRzLm9iakRpc3BsYXkgPSByZXF1aXJlKCcuL29iakRpc3BsYXknKTtcblxuLyohXG4gKiBGbGFnIHV0aWxpdHlcbiAqL1xuXG5leHBvcnRzLmZsYWcgPSByZXF1aXJlKCcuL2ZsYWcnKTtcblxuLyohXG4gKiBGbGFnIHRyYW5zZmVycmluZyB1dGlsaXR5XG4gKi9cblxuZXhwb3J0cy50cmFuc2ZlckZsYWdzID0gcmVxdWlyZSgnLi90cmFuc2ZlckZsYWdzJyk7XG5cbi8qIVxuICogRGVlcCBlcXVhbCB1dGlsaXR5XG4gKi9cblxuZXhwb3J0cy5lcWwgPSByZXF1aXJlKCdkZWVwLWVxbCcpO1xuXG4vKiFcbiAqIERlZXAgcGF0aCB2YWx1ZVxuICovXG5cbmV4cG9ydHMuZ2V0UGF0aFZhbHVlID0gcmVxdWlyZSgnLi9nZXRQYXRoVmFsdWUnKTtcblxuLyohXG4gKiBGdW5jdGlvbiBuYW1lXG4gKi9cblxuZXhwb3J0cy5nZXROYW1lID0gcmVxdWlyZSgnLi9nZXROYW1lJyk7XG5cbi8qIVxuICogYWRkIFByb3BlcnR5XG4gKi9cblxuZXhwb3J0cy5hZGRQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vYWRkUHJvcGVydHknKTtcblxuLyohXG4gKiBhZGQgTWV0aG9kXG4gKi9cblxuZXhwb3J0cy5hZGRNZXRob2QgPSByZXF1aXJlKCcuL2FkZE1ldGhvZCcpO1xuXG4vKiFcbiAqIG92ZXJ3cml0ZSBQcm9wZXJ0eVxuICovXG5cbmV4cG9ydHMub3ZlcndyaXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL292ZXJ3cml0ZVByb3BlcnR5Jyk7XG5cbi8qIVxuICogb3ZlcndyaXRlIE1ldGhvZFxuICovXG5cbmV4cG9ydHMub3ZlcndyaXRlTWV0aG9kID0gcmVxdWlyZSgnLi9vdmVyd3JpdGVNZXRob2QnKTtcblxuLyohXG4gKiBBZGQgYSBjaGFpbmFibGUgbWV0aG9kXG4gKi9cblxuZXhwb3J0cy5hZGRDaGFpbmFibGVNZXRob2QgPSByZXF1aXJlKCcuL2FkZENoYWluYWJsZU1ldGhvZCcpO1xuXG4vKiFcbiAqIE92ZXJ3cml0ZSBjaGFpbmFibGUgbWV0aG9kXG4gKi9cblxuZXhwb3J0cy5vdmVyd3JpdGVDaGFpbmFibGVNZXRob2QgPSByZXF1aXJlKCcuL292ZXJ3cml0ZUNoYWluYWJsZU1ldGhvZCcpO1xuXG4iLCIvLyBUaGlzIGlzIChhbG1vc3QpIGRpcmVjdGx5IGZyb20gTm9kZS5qcyB1dGlsc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2Jsb2IvZjhjMzM1ZDBjYWY0N2YxNmQzMTQxM2Y4OWFhMjhlZGEzODc4ZTNhYS9saWIvdXRpbC5qc1xuXG52YXIgZ2V0TmFtZSA9IHJlcXVpcmUoJy4vZ2V0TmFtZScpO1xudmFyIGdldFByb3BlcnRpZXMgPSByZXF1aXJlKCcuL2dldFByb3BlcnRpZXMnKTtcbnZhciBnZXRFbnVtZXJhYmxlUHJvcGVydGllcyA9IHJlcXVpcmUoJy4vZ2V0RW51bWVyYWJsZVByb3BlcnRpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnNwZWN0O1xuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIaWRkZW4gRmxhZyB0aGF0IHNob3dzIGhpZGRlbiAobm90IGVudW1lcmFibGUpXG4gKiAgICBwcm9wZXJ0aWVzIG9mIG9iamVjdHMuXG4gKiBAcGFyYW0ge051bWJlcn0gZGVwdGggRGVwdGggaW4gd2hpY2ggdG8gZGVzY2VuZCBpbiBvYmplY3QuIERlZmF1bHQgaXMgMi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29sb3JzIEZsYWcgdG8gdHVybiBvbiBBTlNJIGVzY2FwZSBjb2RlcyB0byBjb2xvciB0aGVcbiAqICAgIG91dHB1dC4gRGVmYXVsdCBpcyBmYWxzZSAobm8gY29sb3JpbmcpLlxuICovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycykge1xuICB2YXIgY3R4ID0ge1xuICAgIHNob3dIaWRkZW46IHNob3dIaWRkZW4sXG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyOyB9XG4gIH07XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgKHR5cGVvZiBkZXB0aCA9PT0gJ3VuZGVmaW5lZCcgPyAyIDogZGVwdGgpKTtcbn1cblxuLy8gUmV0dXJucyB0cnVlIGlmIG9iamVjdCBpcyBhIERPTSBlbGVtZW50LlxudmFyIGlzRE9NRWxlbWVudCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iamVjdCAmJlxuICAgICAgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdC5ub2RlVHlwZSA9PT0gMSAmJlxuICAgICAgdHlwZW9mIG9iamVjdC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlLmluc3BlY3QgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMpO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIElmIHRoaXMgaXMgYSBET00gZWxlbWVudCwgdHJ5IHRvIGdldCB0aGUgb3V0ZXIgSFRNTC5cbiAgaWYgKGlzRE9NRWxlbWVudCh2YWx1ZSkpIHtcbiAgICBpZiAoJ291dGVySFRNTCcgaW4gdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5vdXRlckhUTUw7XG4gICAgICAvLyBUaGlzIHZhbHVlIGRvZXMgbm90IGhhdmUgYW4gb3V0ZXJIVE1MIGF0dHJpYnV0ZSxcbiAgICAgIC8vICAgaXQgY291bGQgc3RpbGwgYmUgYW4gWE1MIGVsZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXR0ZW1wdCB0byBzZXJpYWxpemUgaXRcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChkb2N1bWVudC54bWxWZXJzaW9uKSB7XG4gICAgICAgICAgdmFyIHhtbFNlcmlhbGl6ZXIgPSBuZXcgWE1MU2VyaWFsaXplcigpO1xuICAgICAgICAgIHJldHVybiB4bWxTZXJpYWxpemVyLnNlcmlhbGl6ZVRvU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGaXJlZm94IDExLSBkbyBub3Qgc3VwcG9ydCBvdXRlckhUTUxcbiAgICAgICAgICAvLyAgIEl0IGRvZXMsIGhvd2V2ZXIsIHN1cHBvcnQgaW5uZXJIVE1MXG4gICAgICAgICAgLy8gICBVc2UgdGhlIGZvbGxvd2luZyB0byByZW5kZXIgdGhlIGVsZW1lbnRcbiAgICAgICAgICB2YXIgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcbiAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnXycpO1xuXG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZhbHVlLmNsb25lTm9kZShmYWxzZSkpO1xuICAgICAgICAgIGh0bWwgPSBjb250YWluZXIuaW5uZXJIVE1MXG4gICAgICAgICAgICAucmVwbGFjZSgnPjwnLCAnPicgKyB2YWx1ZS5pbm5lckhUTUwgKyAnPCcpO1xuICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIFRoaXMgY291bGQgYmUgYSBub24tbmF0aXZlIERPTSBpbXBsZW1lbnRhdGlvbixcbiAgICAgICAgLy8gICBjb250aW51ZSB3aXRoIHRoZSBub3JtYWwgZmxvdzpcbiAgICAgICAgLy8gICBwcmludGluZyB0aGUgZWxlbWVudCBhcyBpZiBpdCBpcyBhbiBvYmplY3QuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIgdmlzaWJsZUtleXMgPSBnZXRFbnVtZXJhYmxlUHJvcGVydGllcyh2YWx1ZSk7XG4gIHZhciBrZXlzID0gY3R4LnNob3dIaWRkZW4gPyBnZXRQcm9wZXJ0aWVzKHZhbHVlKSA6IHZpc2libGVLZXlzO1xuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgLy8gSW4gSUUsIGVycm9ycyBoYXZlIGEgc2luZ2xlIGBzdGFja2AgcHJvcGVydHksIG9yIGlmIHRoZXkgYXJlIHZhbmlsbGEgYEVycm9yYCxcbiAgLy8gYSBgc3RhY2tgIHBsdXMgYGRlc2NyaXB0aW9uYCBwcm9wZXJ0eTsgaWdub3JlIHRob3NlIGZvciBjb25zaXN0ZW5jeS5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwIHx8IChpc0Vycm9yKHZhbHVlKSAmJiAoXG4gICAgICAoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gJ3N0YWNrJykgfHxcbiAgICAgIChrZXlzLmxlbmd0aCA9PT0gMiAmJiBrZXlzWzBdID09PSAnZGVzY3JpcHRpb24nICYmIGtleXNbMV0gPT09ICdzdGFjaycpXG4gICAgICkpKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIG5hbWUgPSBnZXROYW1lKHZhbHVlKTtcbiAgICAgIHZhciBuYW1lU3VmZml4ID0gbmFtZSA/ICc6ICcgKyBuYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lU3VmZml4ICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbmFtZSA9IGdldE5hbWUodmFsdWUpO1xuICAgIHZhciBuYW1lU3VmZml4ID0gbmFtZSA/ICc6ICcgKyBuYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG5hbWVTdWZmaXggKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBpZiAodmFsdWUgPT09IDAgJiYgKDEvdmFsdWUpID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCctMCcsICdudW1iZXInKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICB9XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyO1xuICBpZiAodmFsdWUuX19sb29rdXBHZXR0ZXJfXykge1xuICAgIGlmICh2YWx1ZS5fX2xvb2t1cEdldHRlcl9fKGtleSkpIHtcbiAgICAgIGlmICh2YWx1ZS5fX2xvb2t1cFNldHRlcl9fKGtleSkpIHtcbiAgICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUuX19sb29rdXBTZXR0ZXJfXyhrZXkpKSB7XG4gICAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh2aXNpYmxlS2V5cy5pbmRleE9mKGtleSkgPCAwKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKHZhbHVlW2tleV0pIDwgMCkge1xuICAgICAgaWYgKHJlY3Vyc2VUaW1lcyA9PT0gbnVsbCkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlW2tleV0sIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZVtrZXldLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKSB8fFxuICAgICAgICAgKHR5cGVvZiBhciA9PT0gJ29iamVjdCcgJiYgb2JqZWN0VG9TdHJpbmcoYXIpID09PSAnW29iamVjdCBBcnJheV0nKTtcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIHR5cGVvZiByZSA9PT0gJ29iamVjdCcgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIHR5cGVvZiBkID09PSAnb2JqZWN0JyAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiBvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJztcbn1cblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuIiwiLyohXG4gKiBDaGFpIC0gZmxhZyB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyohXG4gKiBNb2R1bGUgZGVwZW5kYW5jaWVzXG4gKi9cblxudmFyIGluc3BlY3QgPSByZXF1aXJlKCcuL2luc3BlY3QnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxuLyoqXG4gKiAjIyMgLm9iakRpc3BsYXkgKG9iamVjdClcbiAqXG4gKiBEZXRlcm1pbmVzIGlmIGFuIG9iamVjdCBvciBhbiBhcnJheSBtYXRjaGVzXG4gKiBjcml0ZXJpYSB0byBiZSBpbnNwZWN0ZWQgaW4tbGluZSBmb3IgZXJyb3JcbiAqIG1lc3NhZ2VzIG9yIHNob3VsZCBiZSB0cnVuY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gamF2YXNjcmlwdCBvYmplY3QgdG8gaW5zcGVjdFxuICogQG5hbWUgb2JqRGlzcGxheVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHN0ciA9IGluc3BlY3Qob2JqKVxuICAgICwgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuXG4gIGlmIChjb25maWcudHJ1bmNhdGVUaHJlc2hvbGQgJiYgc3RyLmxlbmd0aCA+PSBjb25maWcudHJ1bmNhdGVUaHJlc2hvbGQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xuICAgICAgcmV0dXJuICFvYmoubmFtZSB8fCBvYmoubmFtZSA9PT0gJydcbiAgICAgICAgPyAnW0Z1bmN0aW9uXSdcbiAgICAgICAgOiAnW0Z1bmN0aW9uOiAnICsgb2JqLm5hbWUgKyAnXSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm4gJ1sgQXJyYXkoJyArIG9iai5sZW5ndGggKyAnKSBdJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iailcbiAgICAgICAgLCBrc3RyID0ga2V5cy5sZW5ndGggPiAyXG4gICAgICAgICAgPyBrZXlzLnNwbGljZSgwLCAyKS5qb2luKCcsICcpICsgJywgLi4uJ1xuICAgICAgICAgIDoga2V5cy5qb2luKCcsICcpO1xuICAgICAgcmV0dXJuICd7IE9iamVjdCAoJyArIGtzdHIgKyAnKSB9JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufTtcbiIsIi8qIVxuICogQ2hhaSAtIG92ZXJ3cml0ZUNoYWluYWJsZU1ldGhvZCB1dGlsaXR5XG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiAjIyMgb3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kIChjdHgsIG5hbWUsIGZuKVxuICpcbiAqIE92ZXJ3aXRlcyBhbiBhbHJlYWR5IGV4aXN0aW5nIGNoYWluYWJsZSBtZXRob2RcbiAqIGFuZCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIHByZXZpb3VzIGZ1bmN0aW9uIG9yXG4gKiBwcm9wZXJ0eS4gIE11c3QgcmV0dXJuIGZ1bmN0aW9ucyB0byBiZSB1c2VkIGZvclxuICogbmFtZS5cbiAqXG4gKiAgICAgdXRpbHMub3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kKGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ2xlbmd0aCcsXG4gKiAgICAgICBmdW5jdGlvbiAoX3N1cGVyKSB7XG4gKiAgICAgICB9XG4gKiAgICAgLCBmdW5jdGlvbiAoX3N1cGVyKSB7XG4gKiAgICAgICB9XG4gKiAgICAgKTtcbiAqXG4gKiBDYW4gYWxzbyBiZSBhY2Nlc3NlZCBkaXJlY3RseSBmcm9tIGBjaGFpLkFzc2VydGlvbmAuXG4gKlxuICogICAgIGNoYWkuQXNzZXJ0aW9uLm92ZXJ3cml0ZUNoYWluYWJsZU1ldGhvZCgnZm9vJywgZm4sIGZuKTtcbiAqXG4gKiBUaGVuIGNhbiBiZSB1c2VkIGFzIGFueSBvdGhlciBhc3NlcnRpb24uXG4gKlxuICogICAgIGV4cGVjdChteUZvbykudG8uaGF2ZS5sZW5ndGgoMyk7XG4gKiAgICAgZXhwZWN0KG15Rm9vKS50by5oYXZlLmxlbmd0aC5hYm92ZSgzKTtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4IG9iamVjdCB3aG9zZSBtZXRob2QgLyBwcm9wZXJ0eSBpcyB0byBiZSBvdmVyd3JpdHRlblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgbWV0aG9kIC8gcHJvcGVydHkgdG8gb3ZlcndyaXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXRob2QgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2hhaW5pbmdCZWhhdmlvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBwcm9wZXJ0eVxuICogQG5hbWUgb3ZlcndyaXRlQ2hhaW5hYmxlTWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbmFtZSwgbWV0aG9kLCBjaGFpbmluZ0JlaGF2aW9yKSB7XG4gIHZhciBjaGFpbmFibGVCZWhhdmlvciA9IGN0eC5fX21ldGhvZHNbbmFtZV07XG5cbiAgdmFyIF9jaGFpbmluZ0JlaGF2aW9yID0gY2hhaW5hYmxlQmVoYXZpb3IuY2hhaW5pbmdCZWhhdmlvcjtcbiAgY2hhaW5hYmxlQmVoYXZpb3IuY2hhaW5pbmdCZWhhdmlvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gY2hhaW5pbmdCZWhhdmlvcihfY2hhaW5pbmdCZWhhdmlvcikuY2FsbCh0aGlzKTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyB0aGlzIDogcmVzdWx0O1xuICB9O1xuXG4gIHZhciBfbWV0aG9kID0gY2hhaW5hYmxlQmVoYXZpb3IubWV0aG9kO1xuICBjaGFpbmFibGVCZWhhdmlvci5tZXRob2QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IG1ldGhvZChfbWV0aG9kKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiByZXN1bHQ7XG4gIH07XG59O1xuIiwiLyohXG4gKiBDaGFpIC0gb3ZlcndyaXRlTWV0aG9kIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMjIyBvdmVyd3JpdGVNZXRob2QgKGN0eCwgbmFtZSwgZm4pXG4gKlxuICogT3ZlcndpdGVzIGFuIGFscmVhZHkgZXhpc3RpbmcgbWV0aG9kIGFuZCBwcm92aWRlc1xuICogYWNjZXNzIHRvIHByZXZpb3VzIGZ1bmN0aW9uLiBNdXN0IHJldHVybiBmdW5jdGlvblxuICogdG8gYmUgdXNlZCBmb3IgbmFtZS5cbiAqXG4gKiAgICAgdXRpbHMub3ZlcndyaXRlTWV0aG9kKGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ2VxdWFsJywgZnVuY3Rpb24gKF9zdXBlcikge1xuICogICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHtcbiAqICAgICAgICAgdmFyIG9iaiA9IHV0aWxzLmZsYWcodGhpcywgJ29iamVjdCcpO1xuICogICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgRm9vKSB7XG4gKiAgICAgICAgICAgbmV3IGNoYWkuQXNzZXJ0aW9uKG9iai52YWx1ZSkudG8uZXF1YWwoc3RyKTtcbiAqICAgICAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAqICAgICAgICAgfVxuICogICAgICAgfVxuICogICAgIH0pO1xuICpcbiAqIENhbiBhbHNvIGJlIGFjY2Vzc2VkIGRpcmVjdGx5IGZyb20gYGNoYWkuQXNzZXJ0aW9uYC5cbiAqXG4gKiAgICAgY2hhaS5Bc3NlcnRpb24ub3ZlcndyaXRlTWV0aG9kKCdmb28nLCBmbik7XG4gKlxuICogVGhlbiBjYW4gYmUgdXNlZCBhcyBhbnkgb3RoZXIgYXNzZXJ0aW9uLlxuICpcbiAqICAgICBleHBlY3QobXlGb28pLnRvLmVxdWFsKCdiYXInKTtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4IG9iamVjdCB3aG9zZSBtZXRob2QgaXMgdG8gYmUgb3ZlcndyaXR0ZW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIG1ldGhvZCB0byBvdmVyd3JpdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1ldGhvZCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBuYW1lXG4gKiBAbmFtZSBvdmVyd3JpdGVNZXRob2RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBuYW1lLCBtZXRob2QpIHtcbiAgdmFyIF9tZXRob2QgPSBjdHhbbmFtZV1cbiAgICAsIF9zdXBlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbiAgaWYgKF9tZXRob2QgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIF9tZXRob2QpXG4gICAgX3N1cGVyID0gX21ldGhvZDtcblxuICBjdHhbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IG1ldGhvZChfc3VwZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHJlc3VsdDtcbiAgfVxufTtcbiIsIi8qIVxuICogQ2hhaSAtIG92ZXJ3cml0ZVByb3BlcnR5IHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMjIyBvdmVyd3JpdGVQcm9wZXJ0eSAoY3R4LCBuYW1lLCBmbilcbiAqXG4gKiBPdmVyd2l0ZXMgYW4gYWxyZWFkeSBleGlzdGluZyBwcm9wZXJ0eSBnZXR0ZXIgYW5kIHByb3ZpZGVzXG4gKiBhY2Nlc3MgdG8gcHJldmlvdXMgdmFsdWUuIE11c3QgcmV0dXJuIGZ1bmN0aW9uIHRvIHVzZSBhcyBnZXR0ZXIuXG4gKlxuICogICAgIHV0aWxzLm92ZXJ3cml0ZVByb3BlcnR5KGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZSwgJ29rJywgZnVuY3Rpb24gKF9zdXBlcikge1xuICogICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAqICAgICAgICAgdmFyIG9iaiA9IHV0aWxzLmZsYWcodGhpcywgJ29iamVjdCcpO1xuICogICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgRm9vKSB7XG4gKiAgICAgICAgICAgbmV3IGNoYWkuQXNzZXJ0aW9uKG9iai5uYW1lKS50by5lcXVhbCgnYmFyJyk7XG4gKiAgICAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gKiAgICAgICAgIH1cbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqXG4gKlxuICogQ2FuIGFsc28gYmUgYWNjZXNzZWQgZGlyZWN0bHkgZnJvbSBgY2hhaS5Bc3NlcnRpb25gLlxuICpcbiAqICAgICBjaGFpLkFzc2VydGlvbi5vdmVyd3JpdGVQcm9wZXJ0eSgnZm9vJywgZm4pO1xuICpcbiAqIFRoZW4gY2FuIGJlIHVzZWQgYXMgYW55IG90aGVyIGFzc2VydGlvbi5cbiAqXG4gKiAgICAgZXhwZWN0KG15Rm9vKS50by5iZS5vaztcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4IG9iamVjdCB3aG9zZSBwcm9wZXJ0eSBpcyB0byBiZSBvdmVyd3JpdHRlblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgcHJvcGVydHkgdG8gb3ZlcndyaXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXR0ZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZ2V0dGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIG5hbWVcbiAqIEBuYW1lIG92ZXJ3cml0ZVByb3BlcnR5XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbmFtZSwgZ2V0dGVyKSB7XG4gIHZhciBfZ2V0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjdHgsIG5hbWUpXG4gICAgLCBfc3VwZXIgPSBmdW5jdGlvbiAoKSB7fTtcblxuICBpZiAoX2dldCAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgX2dldC5nZXQpXG4gICAgX3N1cGVyID0gX2dldC5nZXRcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3R4LCBuYW1lLFxuICAgIHsgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZXR0ZXIoX3N1cGVyKS5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfVxuICAgICwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufTtcbiIsIi8qIVxuICogQ2hhaSAtIHRlc3QgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qIVxuICogTW9kdWxlIGRlcGVuZGFuY2llc1xuICovXG5cbnZhciBmbGFnID0gcmVxdWlyZSgnLi9mbGFnJyk7XG5cbi8qKlxuICogIyB0ZXN0KG9iamVjdCwgZXhwcmVzc2lvbilcbiAqXG4gKiBUZXN0IGFuZCBvYmplY3QgZm9yIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCAoY29uc3RydWN0ZWQgQXNzZXJ0aW9uKVxuICogQHBhcmFtIHtBcmd1bWVudHN9IGNoYWkuQXNzZXJ0aW9uLnByb3RvdHlwZS5hc3NlcnQgYXJndW1lbnRzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBhcmdzKSB7XG4gIHZhciBuZWdhdGUgPSBmbGFnKG9iaiwgJ25lZ2F0ZScpXG4gICAgLCBleHByID0gYXJnc1swXTtcbiAgcmV0dXJuIG5lZ2F0ZSA/ICFleHByIDogZXhwcjtcbn07XG4iLCIvKiFcbiAqIENoYWkgLSB0cmFuc2ZlckZsYWdzIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqICMjIyB0cmFuc2ZlckZsYWdzKGFzc2VydGlvbiwgb2JqZWN0LCBpbmNsdWRlQWxsID0gdHJ1ZSlcbiAqXG4gKiBUcmFuc2ZlciBhbGwgdGhlIGZsYWdzIGZvciBgYXNzZXJ0aW9uYCB0byBgb2JqZWN0YC4gSWZcbiAqIGBpbmNsdWRlQWxsYCBpcyBzZXQgdG8gYGZhbHNlYCwgdGhlbiB0aGUgYmFzZSBDaGFpXG4gKiBhc3NlcnRpb24gZmxhZ3MgKG5hbWVseSBgb2JqZWN0YCwgYHNzZmlgLCBhbmQgYG1lc3NhZ2VgKVxuICogd2lsbCBub3QgYmUgdHJhbnNmZXJyZWQuXG4gKlxuICpcbiAqICAgICB2YXIgbmV3QXNzZXJ0aW9uID0gbmV3IEFzc2VydGlvbigpO1xuICogICAgIHV0aWxzLnRyYW5zZmVyRmxhZ3MoYXNzZXJ0aW9uLCBuZXdBc3NlcnRpb24pO1xuICpcbiAqICAgICB2YXIgYW5vdGhlckFzc2VyaXRvbiA9IG5ldyBBc3NlcnRpb24obXlPYmopO1xuICogICAgIHV0aWxzLnRyYW5zZmVyRmxhZ3MoYXNzZXJ0aW9uLCBhbm90aGVyQXNzZXJ0aW9uLCBmYWxzZSk7XG4gKlxuICogQHBhcmFtIHtBc3NlcnRpb259IGFzc2VydGlvbiB0aGUgYXNzZXJ0aW9uIHRvIHRyYW5zZmVyIHRoZSBmbGFncyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IHRoZSBvYmplY3QgdG8gdHJhbnNmZXIgdGhlIGZsYWdzIHRvbzsgdXN1YWxseSBhIG5ldyBhc3NlcnRpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5jbHVkZUFsbFxuICogQG5hbWUgZ2V0QWxsRmxhZ3NcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFzc2VydGlvbiwgb2JqZWN0LCBpbmNsdWRlQWxsKSB7XG4gIHZhciBmbGFncyA9IGFzc2VydGlvbi5fX2ZsYWdzIHx8IChhc3NlcnRpb24uX19mbGFncyA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xuXG4gIGlmICghb2JqZWN0Ll9fZmxhZ3MpIHtcbiAgICBvYmplY3QuX19mbGFncyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIH1cblxuICBpbmNsdWRlQWxsID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMyA/IGluY2x1ZGVBbGwgOiB0cnVlO1xuXG4gIGZvciAodmFyIGZsYWcgaW4gZmxhZ3MpIHtcbiAgICBpZiAoaW5jbHVkZUFsbCB8fFxuICAgICAgICAoZmxhZyAhPT0gJ29iamVjdCcgJiYgZmxhZyAhPT0gJ3NzZmknICYmIGZsYWcgIT0gJ21lc3NhZ2UnKSkge1xuICAgICAgb2JqZWN0Ll9fZmxhZ3NbZmxhZ10gPSBmbGFnc1tmbGFnXTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKiFcbiAqIENoYWkgLSB0eXBlIHV0aWxpdHlcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgSmFrZSBMdWVyIDxqYWtlQGFsb2dpY2FscGFyYWRveC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKiFcbiAqIERldGVjdGFibGUgamF2YXNjcmlwdCBuYXRpdmVzXG4gKi9cblxudmFyIG5hdGl2ZXMgPSB7XG4gICAgJ1tvYmplY3QgQXJndW1lbnRzXSc6ICdhcmd1bWVudHMnXG4gICwgJ1tvYmplY3QgQXJyYXldJzogJ2FycmF5J1xuICAsICdbb2JqZWN0IERhdGVdJzogJ2RhdGUnXG4gICwgJ1tvYmplY3QgRnVuY3Rpb25dJzogJ2Z1bmN0aW9uJ1xuICAsICdbb2JqZWN0IE51bWJlcl0nOiAnbnVtYmVyJ1xuICAsICdbb2JqZWN0IFJlZ0V4cF0nOiAncmVnZXhwJ1xuICAsICdbb2JqZWN0IFN0cmluZ10nOiAnc3RyaW5nJ1xufTtcblxuLyoqXG4gKiAjIyMgdHlwZShvYmplY3QpXG4gKlxuICogQmV0dGVyIGltcGxlbWVudGF0aW9uIG9mIGB0eXBlb2ZgIGRldGVjdGlvbiB0aGF0IGNhblxuICogYmUgdXNlZCBjcm9zcy1icm93c2VyLiBIYW5kbGVzIHRoZSBpbmNvbnNpc3RlbmNpZXMgb2ZcbiAqIEFycmF5LCBgbnVsbGAsIGFuZCBgdW5kZWZpbmVkYCBkZXRlY3Rpb24uXG4gKlxuICogICAgIHV0aWxzLnR5cGUoe30pIC8vICdvYmplY3QnXG4gKiAgICAgdXRpbHMudHlwZShudWxsKSAvLyBgbnVsbCdcbiAqICAgICB1dGlscy50eXBlKHVuZGVmaW5lZCkgLy8gYHVuZGVmaW5lZGBcbiAqICAgICB1dGlscy50eXBlKFtdKSAvLyBgYXJyYXlgXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gb2JqZWN0IHRvIGRldGVjdCB0eXBlIG9mXG4gKiBAbmFtZSB0eXBlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICBpZiAobmF0aXZlc1tzdHJdKSByZXR1cm4gbmF0aXZlc1tzdHJdO1xuICBpZiAob2JqID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICBpZiAob2JqID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHJldHVybiAnb2JqZWN0JztcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59O1xuIiwiLyohXG4gKiBhc3NlcnRpb24tZXJyb3JcbiAqIENvcHlyaWdodChjKSAyMDEzIEpha2UgTHVlciA8amFrZUBxdWFsaWFuY3kuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyohXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIG9uZSBvYmplY3QgdG8gYW5vdGhlciBleGNsdWRpbmcgYW55IG9yaWdpbmFsbHlcbiAqIGxpc3RlZC4gUmV0dXJuZWQgZnVuY3Rpb24gd2lsbCBjcmVhdGUgYSBuZXcgYHt9YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhjbHVkZWQgcHJvcGVydGllcyAuLi5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGV4Y2x1ZGUgKCkge1xuICB2YXIgZXhjbHVkZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgZnVuY3Rpb24gZXhjbHVkZVByb3BzIChyZXMsIG9iaikge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIX5leGNsdWRlcy5pbmRleE9mKGtleSkpIHJlc1trZXldID0gb2JqW2tleV07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gZXh0ZW5kRXhjbHVkZSAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICwgaSA9IDBcbiAgICAgICwgcmVzID0ge307XG5cbiAgICBmb3IgKDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGV4Y2x1ZGVQcm9wcyhyZXMsIGFyZ3NbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH07XG59O1xuXG4vKiFcbiAqIFByaW1hcnkgRXhwb3J0c1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQXNzZXJ0aW9uRXJyb3I7XG5cbi8qKlxuICogIyMjIEFzc2VydGlvbkVycm9yXG4gKlxuICogQW4gZXh0ZW5zaW9uIG9mIHRoZSBKYXZhU2NyaXB0IGBFcnJvcmAgY29uc3RydWN0b3IgZm9yXG4gKiBhc3NlcnRpb24gYW5kIHZhbGlkYXRpb24gc2NlbmFyaW9zLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyB0byBpbmNsdWRlIChvcHRpb25hbClcbiAqIEBwYXJhbSB7Y2FsbGVlfSBzdGFydCBzdGFjayBmdW5jdGlvbiAob3B0aW9uYWwpXG4gKi9cblxuZnVuY3Rpb24gQXNzZXJ0aW9uRXJyb3IgKG1lc3NhZ2UsIF9wcm9wcywgc3NmKSB7XG4gIHZhciBleHRlbmQgPSBleGNsdWRlKCduYW1lJywgJ21lc3NhZ2UnLCAnc3RhY2snLCAnY29uc3RydWN0b3InLCAndG9KU09OJylcbiAgICAsIHByb3BzID0gZXh0ZW5kKF9wcm9wcyB8fCB7fSk7XG5cbiAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnVW5zcGVjaWZpZWQgQXNzZXJ0aW9uRXJyb3InO1xuICB0aGlzLnNob3dEaWZmID0gZmFsc2U7XG5cbiAgLy8gY29weSBmcm9tIHByb3BlcnRpZXNcbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgfVxuXG4gIC8vIGNhcHR1cmUgc3RhY2sgdHJhY2VcbiAgc3NmID0gc3NmIHx8IGFyZ3VtZW50cy5jYWxsZWU7XG4gIGlmIChzc2YgJiYgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBzc2YpO1xuICB9XG59XG5cbi8qIVxuICogSW5oZXJpdCBmcm9tIEVycm9yLnByb3RvdHlwZVxuICovXG5cbkFzc2VydGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcblxuLyohXG4gKiBTdGF0aWNhbGx5IHNldCBuYW1lXG4gKi9cblxuQXNzZXJ0aW9uRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xuXG4vKiFcbiAqIEVuc3VyZSBjb3JyZWN0IGNvbnN0cnVjdG9yXG4gKi9cblxuQXNzZXJ0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXNzZXJ0aW9uRXJyb3I7XG5cbi8qKlxuICogQWxsb3cgZXJyb3JzIHRvIGJlIGNvbnZlcnRlZCB0byBKU09OIGZvciBzdGF0aWMgdHJhbnNmZXIuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBpbmNsdWRlIHN0YWNrIChkZWZhdWx0OiBgdHJ1ZWApXG4gKiBAcmV0dXJuIHtPYmplY3R9IG9iamVjdCB0aGF0IGNhbiBiZSBgSlNPTi5zdHJpbmdpZnlgXG4gKi9cblxuQXNzZXJ0aW9uRXJyb3IucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChzdGFjaykge1xuICB2YXIgZXh0ZW5kID0gZXhjbHVkZSgnY29uc3RydWN0b3InLCAndG9KU09OJywgJ3N0YWNrJylcbiAgICAsIHByb3BzID0gZXh0ZW5kKHsgbmFtZTogdGhpcy5uYW1lIH0sIHRoaXMpO1xuXG4gIC8vIGluY2x1ZGUgc3RhY2sgaWYgZXhpc3RzIGFuZCBub3QgdHVybmVkIG9mZlxuICBpZiAoZmFsc2UgIT09IHN0YWNrICYmIHRoaXMuc3RhY2spIHtcbiAgICBwcm9wcy5zdGFjayA9IHRoaXMuc3RhY2s7XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9lcWwnKTtcbiIsIi8qIVxuICogZGVlcC1lcWxcbiAqIENvcHlyaWdodChjKSAyMDEzIEpha2UgTHVlciA8amFrZUBhbG9naWNhbHBhcmFkb3guY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyohXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIHR5cGUgPSByZXF1aXJlKCd0eXBlLWRldGVjdCcpO1xuXG4vKiFcbiAqIEJ1ZmZlci5pc0J1ZmZlciBicm93c2VyIHNoaW1cbiAqL1xuXG52YXIgQnVmZmVyO1xudHJ5IHsgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyOyB9XG5jYXRjaChleCkge1xuICBCdWZmZXIgPSB7fTtcbiAgQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfVxufVxuXG4vKiFcbiAqIFByaW1hcnkgRXhwb3J0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwRXF1YWw7XG5cbi8qKlxuICogQXNzZXJ0IHN1cGVyLXN0cmljdCAoZWdhbCkgZXF1YWxpdHkgYmV0d2VlblxuICogdHdvIG9iamVjdHMgb2YgYW55IHR5cGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gYVxuICogQHBhcmFtIHtNaXhlZH0gYlxuICogQHBhcmFtIHtBcnJheX0gbWVtb2lzZWQgKG9wdGlvbmFsKVxuICogQHJldHVybiB7Qm9vbGVhbn0gZXF1YWwgbWF0Y2hcbiAqL1xuXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYiwgbSkge1xuICBpZiAoc2FtZVZhbHVlKGEsIGIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoJ2RhdGUnID09PSB0eXBlKGEpKSB7XG4gICAgcmV0dXJuIGRhdGVFcXVhbChhLCBiKTtcbiAgfSBlbHNlIGlmICgncmVnZXhwJyA9PT0gdHlwZShhKSkge1xuICAgIHJldHVybiByZWdleHBFcXVhbChhLCBiKTtcbiAgfSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYSkpIHtcbiAgICByZXR1cm4gYnVmZmVyRXF1YWwoYSwgYik7XG4gIH0gZWxzZSBpZiAoJ2FyZ3VtZW50cycgPT09IHR5cGUoYSkpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzRXF1YWwoYSwgYiwgbSk7XG4gIH0gZWxzZSBpZiAoIXR5cGVFcXVhbChhLCBiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmICgoJ29iamVjdCcgIT09IHR5cGUoYSkgJiYgJ29iamVjdCcgIT09IHR5cGUoYikpXG4gICYmICgnYXJyYXknICE9PSB0eXBlKGEpICYmICdhcnJheScgIT09IHR5cGUoYikpKSB7XG4gICAgcmV0dXJuIHNhbWVWYWx1ZShhLCBiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqZWN0RXF1YWwoYSwgYiwgbSk7XG4gIH1cbn1cblxuLyohXG4gKiBTdHJpY3QgKGVnYWwpIGVxdWFsaXR5IHRlc3QuIEVuc3VyZXMgdGhhdCBOYU4gYWx3YXlzXG4gKiBlcXVhbHMgTmFOIGFuZCBgLTBgIGRvZXMgbm90IGVxdWFsIGArMGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gYVxuICogQHBhcmFtIHtNaXhlZH0gYlxuICogQHJldHVybiB7Qm9vbGVhbn0gZXF1YWwgbWF0Y2hcbiAqL1xuXG5mdW5jdGlvbiBzYW1lVmFsdWUoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufVxuXG4vKiFcbiAqIENvbXBhcmUgdGhlIHR5cGVzIG9mIHR3byBnaXZlbiBvYmplY3RzIGFuZFxuICogcmV0dXJuIGlmIHRoZXkgYXJlIGVxdWFsLiBOb3RlIHRoYXQgYW4gQXJyYXlcbiAqIGhhcyBhIHR5cGUgb2YgYGFycmF5YCAobm90IGBvYmplY3RgKSBhbmQgYXJndW1lbnRzXG4gKiBoYXZlIGEgdHlwZSBvZiBgYXJndW1lbnRzYCAobm90IGBhcnJheWAvYG9iamVjdGApLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IGFcbiAqIEBwYXJhbSB7TWl4ZWR9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICovXG5cbmZ1bmN0aW9uIHR5cGVFcXVhbChhLCBiKSB7XG4gIHJldHVybiB0eXBlKGEpID09PSB0eXBlKGIpO1xufVxuXG4vKiFcbiAqIENvbXBhcmUgdHdvIERhdGUgb2JqZWN0cyBieSBhc3NlcnRpbmcgdGhhdFxuICogdGhlIHRpbWUgdmFsdWVzIGFyZSBlcXVhbCB1c2luZyBgc2F2ZVZhbHVlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGFcbiAqIEBwYXJhbSB7RGF0ZX0gYlxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gZGF0ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKCdkYXRlJyAhPT0gdHlwZShiKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gc2FtZVZhbHVlKGEuZ2V0VGltZSgpLCBiLmdldFRpbWUoKSk7XG59XG5cbi8qIVxuICogQ29tcGFyZSB0d28gcmVndWxhciBleHByZXNzaW9ucyBieSBjb252ZXJ0aW5nIHRoZW1cbiAqIHRvIHN0cmluZyBhbmQgY2hlY2tpbmcgZm9yIGBzYW1lVmFsdWVgLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSBhXG4gKiBAcGFyYW0ge1JlZ0V4cH0gYlxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gcmVnZXhwRXF1YWwoYSwgYikge1xuICBpZiAoJ3JlZ2V4cCcgIT09IHR5cGUoYikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHNhbWVWYWx1ZShhLnRvU3RyaW5nKCksIGIudG9TdHJpbmcoKSk7XG59XG5cbi8qIVxuICogQXNzZXJ0IGRlZXAgZXF1YWxpdHkgb2YgdHdvIGBhcmd1bWVudHNgIG9iamVjdHMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGVzZSBtdXN0IGJlIHNsaWNlZCB0byBhcnJheXNcbiAqIHByaW9yIHRvIHRlc3QgdG8gZW5zdXJlIG5vIGJhZCBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0ge0FyZ3VtZW50c30gYVxuICogQHBhcmFtIHtBcmd1bWVudHN9IGJcbiAqIEBwYXJhbSB7QXJyYXl9IG1lbW9pemUgKG9wdGlvbmFsKVxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gYXJndW1lbnRzRXF1YWwoYSwgYiwgbSkge1xuICBpZiAoJ2FyZ3VtZW50cycgIT09IHR5cGUoYikpIHJldHVybiBmYWxzZTtcbiAgYSA9IFtdLnNsaWNlLmNhbGwoYSk7XG4gIGIgPSBbXS5zbGljZS5jYWxsKGIpO1xuICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG0pO1xufVxuXG4vKiFcbiAqIEdldCBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge0FycmF5fSBwcm9wZXJ0eSBuYW1lc1xuICovXG5cbmZ1bmN0aW9uIGVudW1lcmFibGUoYSkge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBhKSByZXMucHVzaChrZXkpO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKiFcbiAqIFNpbXBsZSBlcXVhbGl0eSBmb3IgZmxhdCBpdGVyYWJsZSBvYmplY3RzXG4gKiBzdWNoIGFzIEFycmF5cyBvciBOb2RlLmpzIGJ1ZmZlcnMuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHBhcmFtIHtJdGVyYWJsZX0gYlxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gaXRlcmFibGVFcXVhbChhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPT0gIGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgbWF0Y2ggPSB0cnVlO1xuXG4gIGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICBtYXRjaCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG4vKiFcbiAqIEV4dGVuc2lvbiB0byBgaXRlcmFibGVFcXVhbGAgc3BlY2lmaWNhbGx5XG4gKiBmb3IgTm9kZS5qcyBCdWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBhXG4gKiBAcGFyYW0ge01peGVkfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHRcbiAqL1xuXG5mdW5jdGlvbiBidWZmZXJFcXVhbChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpdGVyYWJsZUVxdWFsKGEsIGIpO1xufVxuXG4vKiFcbiAqIEJsb2NrIGZvciBgb2JqZWN0RXF1YWxgIGVuc3VyaW5nIG5vbi1leGlzdGluZ1xuICogdmFsdWVzIGRvbid0IGdldCBpbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsdWUoYSkge1xuICByZXR1cm4gYSAhPT0gbnVsbCAmJiBhICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qIVxuICogUmVjdXJzaXZlbHkgY2hlY2sgdGhlIGVxdWFsaXR5IG9mIHR3byBvYmplY3RzLlxuICogT25jZSBiYXNpYyBzYW1lbmVzcyBoYXMgYmVlbiBlc3RhYmxpc2hlZCBpdCB3aWxsXG4gKiBkZWZlciB0byBgZGVlcEVxdWFsYCBmb3IgZWFjaCBlbnVtZXJhYmxlIGtleVxuICogaW4gdGhlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhXG4gKiBAcGFyYW0ge01peGVkfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHRcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RFcXVhbChhLCBiLCBtKSB7XG4gIGlmICghaXNWYWx1ZShhKSB8fCAhaXNWYWx1ZShiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaTtcbiAgaWYgKG0pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKChtW2ldWzBdID09PSBhICYmIG1baV1bMV0gPT09IGIpXG4gICAgICB8fCAgKG1baV1bMF0gPT09IGIgJiYgbVtpXVsxXSA9PT0gYSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG0gPSBbXTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIGthID0gZW51bWVyYWJsZShhKTtcbiAgICB2YXIga2IgPSBlbnVtZXJhYmxlKGIpO1xuICB9IGNhdGNoIChleCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuXG4gIGlmICghaXRlcmFibGVFcXVhbChrYSwga2IpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbS5wdXNoKFsgYSwgYiBdKTtcblxuICB2YXIga2V5O1xuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBtKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi90eXBlJyk7XG4iLCIvKiFcbiAqIHR5cGUtZGV0ZWN0XG4gKiBDb3B5cmlnaHQoYykgMjAxMyBqYWtlIGx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qIVxuICogUHJpbWFyeSBFeHBvcnRzXG4gKi9cblxudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldFR5cGU7XG5cbi8qIVxuICogRGV0ZWN0YWJsZSBqYXZhc2NyaXB0IG5hdGl2ZXNcbiAqL1xuXG52YXIgbmF0aXZlcyA9IHtcbiAgICAnW29iamVjdCBBcnJheV0nOiAnYXJyYXknXG4gICwgJ1tvYmplY3QgUmVnRXhwXSc6ICdyZWdleHAnXG4gICwgJ1tvYmplY3QgRnVuY3Rpb25dJzogJ2Z1bmN0aW9uJ1xuICAsICdbb2JqZWN0IEFyZ3VtZW50c10nOiAnYXJndW1lbnRzJ1xuICAsICdbb2JqZWN0IERhdGVdJzogJ2RhdGUnXG59O1xuXG4vKipcbiAqICMjIyB0eXBlT2YgKG9iailcbiAqXG4gKiBVc2Ugc2V2ZXJhbCBkaWZmZXJlbnQgdGVjaG5pcXVlcyB0byBkZXRlcm1pbmVcbiAqIHRoZSB0eXBlIG9mIG9iamVjdCBiZWluZyB0ZXN0ZWQuXG4gKlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBvYmplY3QgdHlwZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBnZXRUeXBlIChvYmopIHtcbiAgdmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICBpZiAobmF0aXZlc1tzdHJdKSByZXR1cm4gbmF0aXZlc1tzdHJdO1xuICBpZiAob2JqID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICBpZiAob2JqID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHJldHVybiAnb2JqZWN0JztcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59XG5cbmV4cG9ydHMuTGlicmFyeSA9IExpYnJhcnk7XG5cbi8qKlxuICogIyMjIExpYnJhcnlcbiAqXG4gKiBDcmVhdGUgYSByZXBvc2l0b3J5IGZvciBjdXN0b20gdHlwZSBkZXRlY3Rpb24uXG4gKlxuICogYGBganNcbiAqIHZhciBsaWIgPSBuZXcgdHlwZS5MaWJyYXJ5O1xuICogYGBgXG4gKlxuICovXG5cbmZ1bmN0aW9uIExpYnJhcnkgKCkge1xuICB0aGlzLnRlc3RzID0ge307XG59XG5cbi8qKlxuICogIyMjIyAub2YgKG9iailcbiAqXG4gKiBFeHBvc2UgcmVwbGFjZW1lbnQgYHR5cGVvZmAgZGV0ZWN0aW9uIHRvIHRoZSBsaWJyYXJ5LlxuICpcbiAqIGBgYGpzXG4gKiBpZiAoJ3N0cmluZycgPT09IGxpYi5vZignaGVsbG8gd29ybGQnKSkge1xuICogICAvLyAuLi5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IG9iamVjdCB0byB0ZXN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHR5cGVcbiAqL1xuXG5MaWJyYXJ5LnByb3RvdHlwZS5vZiA9IGdldFR5cGU7XG5cbi8qKlxuICogIyMjIyAuZGVmaW5lICh0eXBlLCB0ZXN0KVxuICpcbiAqIEFkZCBhIHRlc3QgdG8gZm9yIHRoZSBgLnRlc3QoKWAgYXNzZXJ0aW9uLlxuICpcbiAqIENhbiBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBleHByZXNzaW9uOlxuICpcbiAqIGBgYGpzXG4gKiBsaWIuZGVmaW5lKCdpbnQnLCAvXlswLTldKyQvKTtcbiAqIGBgYFxuICpcbiAqIC4uLiBvciBhcyBhIGZ1bmN0aW9uOlxuICpcbiAqIGBgYGpzXG4gKiBsaWIuZGVmaW5lKCdibG4nLCBmdW5jdGlvbiAob2JqKSB7XG4gKiAgIGlmICgnYm9vbGVhbicgPT09IGxpYi5vZihvYmopKSByZXR1cm4gdHJ1ZTtcbiAqICAgdmFyIGJsbnMgPSBbICd5ZXMnLCAnbm8nLCAndHJ1ZScsICdmYWxzZScsIDEsIDAgXTtcbiAqICAgaWYgKCdzdHJpbmcnID09PSBsaWIub2Yob2JqKSkgb2JqID0gb2JqLnRvTG93ZXJDYXNlKCk7XG4gKiAgIHJldHVybiAhISB+Ymxucy5pbmRleE9mKG9iaik7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1JlZ0V4cHxGdW5jdGlvbn0gdGVzdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5MaWJyYXJ5LnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbiAodHlwZSwgdGVzdCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHRoaXMudGVzdHNbdHlwZV07XG4gIHRoaXMudGVzdHNbdHlwZV0gPSB0ZXN0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogIyMjIyAudGVzdCAob2JqLCB0ZXN0KVxuICpcbiAqIEFzc2VydCB0aGF0IGFuIG9iamVjdCBpcyBvZiB0eXBlLiBXaWxsIGZpcnN0XG4gKiBjaGVjayBuYXRpdmVzLCBhbmQgaWYgdGhhdCBkb2VzIG5vdCBwYXNzIGl0IHdpbGxcbiAqIHVzZSB0aGUgdXNlciBkZWZpbmVkIGN1c3RvbSB0ZXN0cy5cbiAqXG4gKiBgYGBqc1xuICogYXNzZXJ0KGxpYi50ZXN0KCcxJywgJ2ludCcpKTtcbiAqIGFzc2VydChsaWIudGVzdCgneWVzJywgJ2JsbicpKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IG9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5MaWJyYXJ5LnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24gKG9iaiwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gZ2V0VHlwZShvYmopKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIHRlc3QgPSB0aGlzLnRlc3RzW3R5cGVdO1xuXG4gIGlmICh0ZXN0ICYmICdyZWdleHAnID09PSBnZXRUeXBlKHRlc3QpKSB7XG4gICAgcmV0dXJuIHRlc3QudGVzdChvYmopO1xuICB9IGVsc2UgaWYgKHRlc3QgJiYgJ2Z1bmN0aW9uJyA9PT0gZ2V0VHlwZSh0ZXN0KSkge1xuICAgIHJldHVybiB0ZXN0KG9iaik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdUeXBlIHRlc3QgXCInICsgdHlwZSArICdcIiBub3QgZGVmaW5lZCBvciBpbnZhbGlkLicpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBBVVRIT1IgT0YgSU5JVElBTCBKUyBMSUJSQVJZXG4gKiBrLWQgVHJlZSBKYXZhU2NyaXB0IC0gViAxLjBcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdWJpbGFicy9rZC10cmVlLWphdmFzY3JpcHRcbiAqXG4gKiBAYXV0aG9yIE1pcmNlYSBQcmljb3AgPHByaWNvcEB1YmlsYWJzLm5ldD4sIDIwMTJcbiAqIEBhdXRob3IgTWFydGluIEtsZXBwZSA8a2xlcHBlQHViaWxhYnMubmV0PiwgMjAxMlxuICogQGF1dGhvciBVYmlsYWJzIGh0dHA6Ly91YmlsYWJzLm5ldCwgMjAxMlxuICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgPGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwPlxuICovXG5cblxuZnVuY3Rpb24gTm9kZShvYmosIGRpbWVuc2lvbiwgcGFyZW50KSB7XG4gIHRoaXMub2JqID0gb2JqO1xuICB0aGlzLmxlZnQgPSBudWxsO1xuICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uO1xufVxuXG5mdW5jdGlvbiBLZFRyZWUocG9pbnRzLCBtZXRyaWMsIGRpbWVuc2lvbnMpIHtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIFxuICBmdW5jdGlvbiBidWlsZFRyZWUocG9pbnRzLCBkZXB0aCwgcGFyZW50KSB7XG4gICAgdmFyIGRpbSA9IGRlcHRoICUgZGltZW5zaW9ucy5sZW5ndGgsXG4gICAgICBtZWRpYW4sXG4gICAgICBub2RlO1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBOb2RlKHBvaW50c1swXSwgZGltLCBwYXJlbnQpO1xuICAgIH1cblxuICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYVtkaW1lbnNpb25zW2RpbV1dIC0gYltkaW1lbnNpb25zW2RpbV1dO1xuICAgIH0pO1xuXG4gICAgbWVkaWFuID0gTWF0aC5mbG9vcihwb2ludHMubGVuZ3RoIC8gMik7XG4gICAgbm9kZSA9IG5ldyBOb2RlKHBvaW50c1ttZWRpYW5dLCBkaW0sIHBhcmVudCk7XG4gICAgbm9kZS5sZWZ0ID0gYnVpbGRUcmVlKHBvaW50cy5zbGljZSgwLCBtZWRpYW4pLCBkZXB0aCArIDEsIG5vZGUpO1xuICAgIG5vZGUucmlnaHQgPSBidWlsZFRyZWUocG9pbnRzLnNsaWNlKG1lZGlhbiArIDEpLCBkZXB0aCArIDEsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB0aGlzLnJvb3QgPSBidWlsZFRyZWUocG9pbnRzLCAwLCBudWxsKTtcblxuICB0aGlzLmluc2VydCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIGZ1bmN0aW9uIGlubmVyU2VhcmNoKG5vZGUsIHBhcmVudCkge1xuXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgZGltZW5zaW9uID0gZGltZW5zaW9uc1tub2RlLmRpbWVuc2lvbl07XG4gICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IG5vZGUub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgcmV0dXJuIGlubmVyU2VhcmNoKG5vZGUubGVmdCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW5uZXJTZWFyY2gobm9kZS5yaWdodCwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGluc2VydFBvc2l0aW9uID0gaW5uZXJTZWFyY2godGhpcy5yb290LCBudWxsKSxcbiAgICAgIG5ld05vZGUsXG4gICAgICBkaW1lbnNpb247XG5cbiAgICBpZiAoaW5zZXJ0UG9zaXRpb24gPT09IG51bGwpIHtcbiAgICAgIHRoaXMucm9vdCA9IG5ldyBOb2RlKHBvaW50LCAwLCBudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdOb2RlID0gbmV3IE5vZGUocG9pbnQsIChpbnNlcnRQb3NpdGlvbi5kaW1lbnNpb24gKyAxKSAlIGRpbWVuc2lvbnMubGVuZ3RoLCBpbnNlcnRQb3NpdGlvbik7XG4gICAgZGltZW5zaW9uID0gZGltZW5zaW9uc1tpbnNlcnRQb3NpdGlvbi5kaW1lbnNpb25dO1xuXG4gICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBpbnNlcnRQb3NpdGlvbi5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgaW5zZXJ0UG9zaXRpb24ubGVmdCA9IG5ld05vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc2VydFBvc2l0aW9uLnJpZ2h0ID0gbmV3Tm9kZTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICB2YXIgbm9kZTtcblxuICAgIGZ1bmN0aW9uIG5vZGVTZWFyY2gobm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLm9iaiA9PT0gcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBkaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUuZGltZW5zaW9uXTtcblxuICAgICAgaWYgKHBvaW50W2RpbWVuc2lvbl0gPCBub2RlLm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgIHJldHVybiBub2RlU2VhcmNoKG5vZGUubGVmdCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZVNlYXJjaChub2RlLnJpZ2h0LCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgICAgIHZhciBuZXh0Tm9kZSxcbiAgICAgICAgbmV4dE9iaixcbiAgICAgICAgcERpbWVuc2lvbjtcblxuICAgICAgZnVuY3Rpb24gZmluZE1heChub2RlLCBkaW0pIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbixcbiAgICAgICAgICBvd24sXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICByaWdodCxcbiAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbZGltXTtcbiAgICAgICAgaWYgKG5vZGUuZGltZW5zaW9uID09PSBkaW0pIHtcbiAgICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmRNYXgobm9kZS5yaWdodCwgZGltKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBvd24gPSBub2RlLm9ialtkaW1lbnNpb25dO1xuICAgICAgICBsZWZ0ID0gZmluZE1heChub2RlLmxlZnQsIGRpbSk7XG4gICAgICAgIHJpZ2h0ID0gZmluZE1heChub2RlLnJpZ2h0LCBkaW0pO1xuICAgICAgICBtYXggPSBub2RlO1xuXG4gICAgICAgIGlmIChsZWZ0ICE9PSBudWxsICYmIGxlZnQub2JqW2RpbWVuc2lvbl0gPiBvd24pIHtcbiAgICAgICAgICBtYXggPSBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJpZ2h0ICE9PSBudWxsICYmIHJpZ2h0Lm9ialtkaW1lbnNpb25dID4gbWF4Lm9ialtkaW1lbnNpb25dKSB7XG4gICAgICAgICAgbWF4ID0gcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmluZE1pbihub2RlLCBkaW0pIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbixcbiAgICAgICAgICBvd24sXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICByaWdodCxcbiAgICAgICAgICBtaW47XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbZGltXTtcblxuICAgICAgICBpZiAobm9kZS5kaW1lbnNpb24gPT09IGRpbSkge1xuICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5kTWluKG5vZGUubGVmdCwgZGltKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBvd24gPSBub2RlLm9ialtkaW1lbnNpb25dO1xuICAgICAgICBsZWZ0ID0gZmluZE1pbihub2RlLmxlZnQsIGRpbSk7XG4gICAgICAgIHJpZ2h0ID0gZmluZE1pbihub2RlLnJpZ2h0LCBkaW0pO1xuICAgICAgICBtaW4gPSBub2RlO1xuXG4gICAgICAgIGlmIChsZWZ0ICE9PSBudWxsICYmIGxlZnQub2JqW2RpbWVuc2lvbl0gPCBvd24pIHtcbiAgICAgICAgICBtaW4gPSBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCAhPT0gbnVsbCAmJiByaWdodC5vYmpbZGltZW5zaW9uXSA8IG1pbi5vYmpbZGltZW5zaW9uXSkge1xuICAgICAgICAgIG1pbiA9IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICBzZWxmLnJvb3QgPSBudWxsO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBEaW1lbnNpb24gPSBkaW1lbnNpb25zW25vZGUucGFyZW50LmRpbWVuc2lvbl07XG5cbiAgICAgICAgaWYgKG5vZGUub2JqW3BEaW1lbnNpb25dIDwgbm9kZS5wYXJlbnQub2JqW3BEaW1lbnNpb25dKSB7XG4gICAgICAgICAgbm9kZS5wYXJlbnQubGVmdCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5wYXJlbnQucmlnaHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICBuZXh0Tm9kZSA9IGZpbmRNYXgobm9kZS5sZWZ0LCBub2RlLmRpbWVuc2lvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0Tm9kZSA9IGZpbmRNaW4obm9kZS5yaWdodCwgbm9kZS5kaW1lbnNpb24pO1xuICAgICAgfVxuXG4gICAgICBuZXh0T2JqID0gbmV4dE5vZGUub2JqO1xuICAgICAgcmVtb3ZlTm9kZShuZXh0Tm9kZSk7XG4gICAgICBub2RlLm9iaiA9IG5leHRPYmo7XG5cbiAgICB9XG5cbiAgICBub2RlID0gbm9kZVNlYXJjaChzZWxmLnJvb3QpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICByZW1vdmVOb2RlKG5vZGUpO1xuICB9O1xuXG4gIHRoaXMubmVhcmVzdCA9IGZ1bmN0aW9uIChwb2ludCwgbWF4Tm9kZXMsIG1heERpc3RhbmNlKSB7XG4gICAgdmFyIGksXG4gICAgICByZXN1bHQsXG4gICAgICBiZXN0Tm9kZXM7XG5cbiAgICBiZXN0Tm9kZXMgPSBuZXcgQmluYXJ5SGVhcChcbiAgICAgIGZ1bmN0aW9uIChlKSB7IHJldHVybiAtZVsxXTsgfVxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBuZWFyZXN0U2VhcmNoKG5vZGUpIHtcbiAgICAgIHZhciBiZXN0Q2hpbGQsXG4gICAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbnNbbm9kZS5kaW1lbnNpb25dLFxuICAgICAgICBvd25EaXN0YW5jZSA9IG1ldHJpYyhwb2ludCwgbm9kZS5vYmopLFxuICAgICAgICBsaW5lYXJQb2ludCA9IHt9LFxuICAgICAgICBsaW5lYXJEaXN0YW5jZSxcbiAgICAgICAgb3RoZXJDaGlsZCxcbiAgICAgICAgaTtcblxuICAgICAgZnVuY3Rpb24gc2F2ZU5vZGUobm9kZSwgZGlzdGFuY2UpIHtcbiAgICAgICAgYmVzdE5vZGVzLnB1c2goW25vZGUsIGRpc3RhbmNlXSk7XG4gICAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpID4gbWF4Tm9kZXMpIHtcbiAgICAgICAgICBiZXN0Tm9kZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGRpbWVuc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGkgPT09IG5vZGUuZGltZW5zaW9uKSB7XG4gICAgICAgICAgbGluZWFyUG9pbnRbZGltZW5zaW9uc1tpXV0gPSBwb2ludFtkaW1lbnNpb25zW2ldXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5lYXJQb2ludFtkaW1lbnNpb25zW2ldXSA9IG5vZGUub2JqW2RpbWVuc2lvbnNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpbmVhckRpc3RhbmNlID0gbWV0cmljKGxpbmVhclBvaW50LCBub2RlLm9iaik7XG5cbiAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoYmVzdE5vZGVzLnNpemUoKSA8IG1heE5vZGVzIHx8IG93bkRpc3RhbmNlIDwgYmVzdE5vZGVzLnBlZWsoKVsxXSkge1xuICAgICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgIGJlc3RDaGlsZCA9IG5vZGUubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIGJlc3RDaGlsZCA9IG5vZGUucmlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IG5vZGUub2JqW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgICBiZXN0Q2hpbGQgPSBub2RlLmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5yaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZWFyZXN0U2VhcmNoKGJlc3RDaGlsZCk7XG5cbiAgICAgIGlmIChiZXN0Tm9kZXMuc2l6ZSgpIDwgbWF4Tm9kZXMgfHwgb3duRGlzdGFuY2UgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSB7XG4gICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJlc3ROb2Rlcy5zaXplKCkgPCBtYXhOb2RlcyB8fCBNYXRoLmFicyhsaW5lYXJEaXN0YW5jZSkgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSB7XG4gICAgICAgIGlmIChiZXN0Q2hpbGQgPT09IG5vZGUubGVmdCkge1xuICAgICAgICAgIG90aGVyQ2hpbGQgPSBub2RlLnJpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG90aGVyQ2hpbGQgPSBub2RlLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyQ2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICBuZWFyZXN0U2VhcmNoKG90aGVyQ2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1heERpc3RhbmNlKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbWF4Tm9kZXM7IGkgKz0gMSkge1xuICAgICAgICBiZXN0Tm9kZXMucHVzaChbbnVsbCwgbWF4RGlzdGFuY2VdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZWFyZXN0U2VhcmNoKHNlbGYucm9vdCk7XG5cbiAgICByZXN1bHQgPSBbXTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBtYXhOb2RlczsgaSArPSAxKSB7XG4gICAgICBpZiAoYmVzdE5vZGVzLmNvbnRlbnRbaV1bMF0pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2Jlc3ROb2Rlcy5jb250ZW50W2ldWzBdLm9iaiwgYmVzdE5vZGVzLmNvbnRlbnRbaV1bMV1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB0aGlzLmJhbGFuY2VGYWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaGVpZ2h0KG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE1hdGgubWF4KGhlaWdodChub2RlLmxlZnQpLCBoZWlnaHQobm9kZS5yaWdodCkpICsgMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3VudChub2RlKSB7XG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3VudChub2RlLmxlZnQpICsgY291bnQobm9kZS5yaWdodCkgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQoc2VsZi5yb290KSAvIChNYXRoLmxvZyhjb3VudChzZWxmLnJvb3QpKSAvIE1hdGgubG9nKDIpKTtcbiAgfTtcbn1cblxuLy8gQmluYXJ5IGhlYXAgaW1wbGVtZW50YXRpb24gZnJvbTpcbi8vIGh0dHA6Ly9lbG9xdWVudGphdmFzY3JpcHQubmV0L2FwcGVuZGl4Mi5odG1sXG5cbmZ1bmN0aW9uIEJpbmFyeUhlYXAoc2NvcmVGdW5jdGlvbil7XG4gIHRoaXMuY29udGVudCA9IFtdO1xuICB0aGlzLnNjb3JlRnVuY3Rpb24gPSBzY29yZUZ1bmN0aW9uO1xufVxuXG5CaW5hcnlIZWFwLnByb3RvdHlwZSA9IHtcbiAgcHVzaDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIC8vIEFkZCB0aGUgbmV3IGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgdGhpcy5jb250ZW50LnB1c2goZWxlbWVudCk7XG4gICAgLy8gQWxsb3cgaXQgdG8gYnViYmxlIHVwLlxuICAgIHRoaXMuYnViYmxlVXAodGhpcy5jb250ZW50Lmxlbmd0aCAtIDEpO1xuICB9LFxuXG4gIHBvcDogZnVuY3Rpb24oKSB7XG4gICAgLy8gU3RvcmUgdGhlIGZpcnN0IGVsZW1lbnQgc28gd2UgY2FuIHJldHVybiBpdCBsYXRlci5cbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5jb250ZW50WzBdO1xuICAgIC8vIEdldCB0aGUgZWxlbWVudCBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICB2YXIgZW5kID0gdGhpcy5jb250ZW50LnBvcCgpO1xuICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgZWxlbWVudHMgbGVmdCwgcHV0IHRoZSBlbmQgZWxlbWVudCBhdCB0aGVcbiAgICAvLyBzdGFydCwgYW5kIGxldCBpdCBzaW5rIGRvd24uXG4gICAgaWYgKHRoaXMuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvbnRlbnRbMF0gPSBlbmQ7XG4gICAgICB0aGlzLnNpbmtEb3duKDApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIHBlZWs6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRbMF07XG4gIH0sXG5cbiAgcmVtb3ZlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMuY29udGVudC5sZW5ndGg7XG4gICAgLy8gVG8gcmVtb3ZlIGEgdmFsdWUsIHdlIG11c3Qgc2VhcmNoIHRocm91Z2ggdGhlIGFycmF5IHRvIGZpbmRcbiAgICAvLyBpdC5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50W2ldID09IG5vZGUpIHtcbiAgICAgICAgLy8gV2hlbiBpdCBpcyBmb3VuZCwgdGhlIHByb2Nlc3Mgc2VlbiBpbiAncG9wJyBpcyByZXBlYXRlZFxuICAgICAgICAvLyB0byBmaWxsIHVwIHRoZSBob2xlLlxuICAgICAgICB2YXIgZW5kID0gdGhpcy5jb250ZW50LnBvcCgpO1xuICAgICAgICBpZiAoaSAhPSBsZW4gLSAxKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50W2ldID0gZW5kO1xuICAgICAgICAgIGlmICh0aGlzLnNjb3JlRnVuY3Rpb24oZW5kKSA8IHRoaXMuc2NvcmVGdW5jdGlvbihub2RlKSlcbiAgICAgICAgICAgIHRoaXMuYnViYmxlVXAoaSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zaW5rRG93bihpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIk5vZGUgbm90IGZvdW5kLlwiKTtcbiAgfSxcblxuICBzaXplOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDtcbiAgfSxcblxuICBidWJibGVVcDogZnVuY3Rpb24obikge1xuICAgIC8vIEZldGNoIHRoZSBlbGVtZW50IHRoYXQgaGFzIHRvIGJlIG1vdmVkLlxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5jb250ZW50W25dO1xuICAgIC8vIFdoZW4gYXQgMCwgYW4gZWxlbWVudCBjYW4gbm90IGdvIHVwIGFueSBmdXJ0aGVyLlxuICAgIHdoaWxlIChuID4gMCkge1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgcGFyZW50IGVsZW1lbnQncyBpbmRleCwgYW5kIGZldGNoIGl0LlxuICAgICAgdmFyIHBhcmVudE4gPSBNYXRoLmZsb29yKChuICsgMSkgLyAyKSAtIDEsXG4gICAgICAgICAgcGFyZW50ID0gdGhpcy5jb250ZW50W3BhcmVudE5dO1xuICAgICAgLy8gU3dhcCB0aGUgZWxlbWVudHMgaWYgdGhlIHBhcmVudCBpcyBncmVhdGVyLlxuICAgICAgaWYgKHRoaXMuc2NvcmVGdW5jdGlvbihlbGVtZW50KSA8IHRoaXMuc2NvcmVGdW5jdGlvbihwYXJlbnQpKSB7XG4gICAgICAgIHRoaXMuY29udGVudFtwYXJlbnROXSA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGVudFtuXSA9IHBhcmVudDtcbiAgICAgICAgLy8gVXBkYXRlICduJyB0byBjb250aW51ZSBhdCB0aGUgbmV3IHBvc2l0aW9uLlxuICAgICAgICBuID0gcGFyZW50TjtcbiAgICAgIH1cbiAgICAgIC8vIEZvdW5kIGEgcGFyZW50IHRoYXQgaXMgbGVzcywgbm8gbmVlZCB0byBtb3ZlIGl0IGZ1cnRoZXIuXG4gICAgICBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNpbmtEb3duOiBmdW5jdGlvbihuKSB7XG4gICAgLy8gTG9vayB1cCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIGl0cyBzY29yZS5cbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aCxcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuY29udGVudFtuXSxcbiAgICAgICAgZWxlbVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGVsZW1lbnQpO1xuXG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgaW5kaWNlcyBvZiB0aGUgY2hpbGQgZWxlbWVudHMuXG4gICAgICB2YXIgY2hpbGQyTiA9IChuICsgMSkgKiAyLCBjaGlsZDFOID0gY2hpbGQyTiAtIDE7XG4gICAgICAvLyBUaGlzIGlzIHVzZWQgdG8gc3RvcmUgdGhlIG5ldyBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCxcbiAgICAgIC8vIGlmIGFueS5cbiAgICAgIHZhciBzd2FwID0gbnVsbDtcbiAgICAgIC8vIElmIHRoZSBmaXJzdCBjaGlsZCBleGlzdHMgKGlzIGluc2lkZSB0aGUgYXJyYXkpLi4uXG4gICAgICBpZiAoY2hpbGQxTiA8IGxlbmd0aCkge1xuICAgICAgICAvLyBMb29rIGl0IHVwIGFuZCBjb21wdXRlIGl0cyBzY29yZS5cbiAgICAgICAgdmFyIGNoaWxkMSA9IHRoaXMuY29udGVudFtjaGlsZDFOXSxcbiAgICAgICAgICAgIGNoaWxkMVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMSk7XG4gICAgICAgIC8vIElmIHRoZSBzY29yZSBpcyBsZXNzIHRoYW4gb3VyIGVsZW1lbnQncywgd2UgbmVlZCB0byBzd2FwLlxuICAgICAgICBpZiAoY2hpbGQxU2NvcmUgPCBlbGVtU2NvcmUpXG4gICAgICAgICAgc3dhcCA9IGNoaWxkMU47XG4gICAgICB9XG4gICAgICAvLyBEbyB0aGUgc2FtZSBjaGVja3MgZm9yIHRoZSBvdGhlciBjaGlsZC5cbiAgICAgIGlmIChjaGlsZDJOIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGlsZDIgPSB0aGlzLmNvbnRlbnRbY2hpbGQyTl0sXG4gICAgICAgICAgICBjaGlsZDJTY29yZSA9IHRoaXMuc2NvcmVGdW5jdGlvbihjaGlsZDIpO1xuICAgICAgICBpZiAoY2hpbGQyU2NvcmUgPCAoc3dhcCA9PSBudWxsID8gZWxlbVNjb3JlIDogY2hpbGQxU2NvcmUpKXtcbiAgICAgICAgICBzd2FwID0gY2hpbGQyTjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgZWxlbWVudCBuZWVkcyB0byBiZSBtb3ZlZCwgc3dhcCBpdCwgYW5kIGNvbnRpbnVlLlxuICAgICAgaWYgKHN3YXAgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRbbl0gPSB0aGlzLmNvbnRlbnRbc3dhcF07XG4gICAgICAgIHRoaXMuY29udGVudFtzd2FwXSA9IGVsZW1lbnQ7XG4gICAgICAgIG4gPSBzd2FwO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgZG9uZS5cbiAgICAgIGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVLZFRyZWU6IGZ1bmN0aW9uIChwb2ludHMsIG1ldHJpYywgZGltZW5zaW9ucykge1xuICAgIHJldHVybiBuZXcgS2RUcmVlKHBvaW50cywgbWV0cmljLCBkaW1lbnNpb25zKVxuICB9XG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXMtYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG52YXIga01heExlbmd0aCA9IDB4M2ZmZmZmZmZcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAtIEltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcy5cbiAqICAgRmlyZWZveCA0LTI5IGxhY2tlZCBzdXBwb3J0LCBmaXhlZCBpbiBGaXJlZm94IDMwKy5cbiAqICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cbiAqXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleSB3aWxsXG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCB3aWxsIHdvcmsgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IChmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBuZXcgVWludDhBcnJheSgxKS5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBzdWJqZWN0ID4gMCA/IHN1YmplY3QgPj4+IDAgOiAwXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JylcbiAgICAgIHN1YmplY3QgPSBiYXNlNjRjbGVhbihzdWJqZWN0KVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHN1YmplY3QgIT09IG51bGwpIHsgLy8gYXNzdW1lIG9iamVjdCBpcyBhcnJheS1saWtlXG4gICAgaWYgKHN1YmplY3QudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShzdWJqZWN0LmRhdGEpKVxuICAgICAgc3ViamVjdCA9IHN1YmplY3QuZGF0YVxuICAgIGxlbmd0aCA9ICtzdWJqZWN0Lmxlbmd0aCA+IDAgPyBNYXRoLmZsb29yKCtzdWJqZWN0Lmxlbmd0aCkgOiAwXG4gIH0gZWxzZVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3RhcnQgd2l0aCBudW1iZXIsIGJ1ZmZlciwgYXJyYXkgb3Igc3RyaW5nJylcblxuICBpZiAodGhpcy5sZW5ndGggPiBrTWF4TGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSAoKHN1YmplY3RbaV0gJSAyNTYpICsgMjU2KSAlIDI1NlxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW4gJiYgYVtpXSA9PT0gYltpXTsgaSsrKSB7fVxuICBpZiAoaSAhPT0gbGVuKSB7XG4gICAgeCA9IGFbaV1cbiAgICB5ID0gYltpXVxuICB9XG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0WywgbGVuZ3RoXSknKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHRvdGFsTGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggPj4+IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8vIHByZS1zZXQgZm9yIHZhbHVlcyB0aGF0IG1heSBleGlzdCBpbiB0aGUgZnV0dXJlXG5CdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IHVuZGVmaW5lZFxuQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcblxuLy8gdG9TdHJpbmcoZW5jb2RpbmcsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID09PSBJbmZpbml0eSA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcbiAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKGVuZCA8PSBzdGFydCkgcmV0dXJuICcnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYmluYXJ5U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKVxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoYikge1xuICBpZighQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heClcbiAgICAgIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYilcbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKGJ5dGUpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiB1dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoLCAyKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBiaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHV0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGFzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW47XG4gICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKVxuICAgICAgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KVxuICAgIGVuZCA9IHN0YXJ0XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSlcbiAgICByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2J1ZmZlciBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgaWYgKHRhcmdldF9zdGFydCA8IDAgfHwgdGFyZ2V0X3N0YXJ0ID49IHRhcmdldC5sZW5ndGgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IHV0ZjhUb0J5dGVzKHZhbHVlLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5jb25zdHJ1Y3RvciA9IEJ1ZmZlclxuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuZXF1YWxzID0gQlAuZXF1YWxzXG4gIGFyci5jb21wYXJlID0gQlAuY29tcGFyZVxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtel0vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpIHtcbiAgICAgIGJ5dGVBcnJheS5wdXNoKGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCwgdW5pdFNpemUpIHtcbiAgaWYgKHVuaXRTaXplKSBsZW5ndGggLT0gbGVuZ3RoICUgdW5pdFNpemU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuIiwidmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUylcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0gpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0ZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdGV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0odHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gKHRoaXMuYmFzZTY0anMgPSB7fSkgOiBleHBvcnRzKSlcbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuIiwiXG4vKipcbiAqIGlzQXJyYXlcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogdG9TdHJpbmdcbiAqL1xuXG52YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gYHZhbGBcbiAqIGlzIGFuIGFycmF5LlxuICpcbiAqIGV4YW1wbGU6XG4gKlxuICogICAgICAgIGlzQXJyYXkoW10pO1xuICogICAgICAgIC8vID4gdHJ1ZVxuICogICAgICAgIGlzQXJyYXkoYXJndW1lbnRzKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKiAgICAgICAgaXNBcnJheSgnJyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7bWl4ZWR9IHZhbFxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gISEgdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT0gc3RyLmNhbGwodmFsKTtcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cbnZhciBzcGxpdFBhdGhSZSA9XG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XG52YXIgc3BsaXRQYXRoID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufTtcblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgcmVzdWx0ID0gc3BsaXRQYXRoKHBhdGgpLFxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcblxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxuICAgIHJldHVybiAnLic7XG4gIH1cblxuICBpZiAoZGlyKSB7XG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHJldHVybiByb290ICsgZGlyO1xufTtcblxuXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gc3BsaXRQYXRoKHBhdGgpWzJdO1xuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aChwYXRoKVszXTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKGdsb2JhbC4kdHJhY2V1clJ1bnRpbWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyICRPYmplY3QgPSBPYmplY3Q7XG4gIHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuICB2YXIgJGNyZWF0ZSA9ICRPYmplY3QuY3JlYXRlO1xuICB2YXIgJGRlZmluZVByb3BlcnRpZXMgPSAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG4gIHZhciAkZGVmaW5lUHJvcGVydHkgPSAkT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICB2YXIgJGZyZWV6ZSA9ICRPYmplY3QuZnJlZXplO1xuICB2YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICB2YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG4gIHZhciAka2V5cyA9ICRPYmplY3Qua2V5cztcbiAgdmFyICRoYXNPd25Qcm9wZXJ0eSA9ICRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgJHRvU3RyaW5nID0gJE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciAkcHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG4gIHZhciAkc2VhbCA9IE9iamVjdC5zZWFsO1xuICB2YXIgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG4gIGZ1bmN0aW9uIG5vbkVudW0odmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH07XG4gIH1cbiAgdmFyIG1ldGhvZCA9IG5vbkVudW07XG4gIHZhciBjb3VudGVyID0gMDtcbiAgZnVuY3Rpb24gbmV3VW5pcXVlU3RyaW5nKCkge1xuICAgIHJldHVybiAnX18kJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlOSkgKyAnJCcgKyArK2NvdW50ZXIgKyAnJF9fJztcbiAgfVxuICB2YXIgc3ltYm9sSW50ZXJuYWxQcm9wZXJ0eSA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICB2YXIgc3ltYm9sRGVzY3JpcHRpb25Qcm9wZXJ0eSA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICB2YXIgc3ltYm9sRGF0YVByb3BlcnR5ID0gbmV3VW5pcXVlU3RyaW5nKCk7XG4gIHZhciBzeW1ib2xWYWx1ZXMgPSAkY3JlYXRlKG51bGwpO1xuICB2YXIgcHJpdmF0ZU5hbWVzID0gJGNyZWF0ZShudWxsKTtcbiAgZnVuY3Rpb24gaXNQcml2YXRlTmFtZShzKSB7XG4gICAgcmV0dXJuIHByaXZhdGVOYW1lc1tzXTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQcml2YXRlTmFtZSgpIHtcbiAgICB2YXIgcyA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICAgIHByaXZhdGVOYW1lc1tzXSA9IHRydWU7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgZnVuY3Rpb24gaXNTaGltU3ltYm9sKHN5bWJvbCkge1xuICAgIHJldHVybiB0eXBlb2Ygc3ltYm9sID09PSAnb2JqZWN0JyAmJiBzeW1ib2wgaW5zdGFuY2VvZiBTeW1ib2xWYWx1ZTtcbiAgfVxuICBmdW5jdGlvbiB0eXBlT2Yodikge1xuICAgIGlmIChpc1NoaW1TeW1ib2wodikpXG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgcmV0dXJuIHR5cGVvZiB2O1xuICB9XG4gIGZ1bmN0aW9uIFN5bWJvbChkZXNjcmlwdGlvbikge1xuICAgIHZhciB2YWx1ZSA9IG5ldyBTeW1ib2xWYWx1ZShkZXNjcmlwdGlvbik7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFN5bWJvbCkpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3ltYm9sIGNhbm5vdCBiZSBuZXdcXCdlZCcpO1xuICB9XG4gICRkZWZpbmVQcm9wZXJ0eShTeW1ib2wucHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBub25FbnVtKFN5bWJvbCkpO1xuICAkZGVmaW5lUHJvcGVydHkoU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgbWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzeW1ib2xWYWx1ZSA9IHRoaXNbc3ltYm9sRGF0YVByb3BlcnR5XTtcbiAgICBpZiAoIWdldE9wdGlvbignc3ltYm9scycpKVxuICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlW3N5bWJvbEludGVybmFsUHJvcGVydHldO1xuICAgIGlmICghc3ltYm9sVmFsdWUpXG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0NvbnZlcnNpb24gZnJvbSBzeW1ib2wgdG8gc3RyaW5nJyk7XG4gICAgdmFyIGRlc2MgPSBzeW1ib2xWYWx1ZVtzeW1ib2xEZXNjcmlwdGlvblByb3BlcnR5XTtcbiAgICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKVxuICAgICAgZGVzYyA9ICcnO1xuICAgIHJldHVybiAnU3ltYm9sKCcgKyBkZXNjICsgJyknO1xuICB9KSk7XG4gICRkZWZpbmVQcm9wZXJ0eShTeW1ib2wucHJvdG90eXBlLCAndmFsdWVPZicsIG1ldGhvZChmdW5jdGlvbigpIHtcbiAgICB2YXIgc3ltYm9sVmFsdWUgPSB0aGlzW3N5bWJvbERhdGFQcm9wZXJ0eV07XG4gICAgaWYgKCFzeW1ib2xWYWx1ZSlcbiAgICAgIHRocm93IFR5cGVFcnJvcignQ29udmVyc2lvbiBmcm9tIHN5bWJvbCB0byBzdHJpbmcnKTtcbiAgICBpZiAoIWdldE9wdGlvbignc3ltYm9scycpKVxuICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlW3N5bWJvbEludGVybmFsUHJvcGVydHldO1xuICAgIHJldHVybiBzeW1ib2xWYWx1ZTtcbiAgfSkpO1xuICBmdW5jdGlvbiBTeW1ib2xWYWx1ZShkZXNjcmlwdGlvbikge1xuICAgIHZhciBrZXkgPSBuZXdVbmlxdWVTdHJpbmcoKTtcbiAgICAkZGVmaW5lUHJvcGVydHkodGhpcywgc3ltYm9sRGF0YVByb3BlcnR5LCB7dmFsdWU6IHRoaXN9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkodGhpcywgc3ltYm9sSW50ZXJuYWxQcm9wZXJ0eSwge3ZhbHVlOiBrZXl9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkodGhpcywgc3ltYm9sRGVzY3JpcHRpb25Qcm9wZXJ0eSwge3ZhbHVlOiBkZXNjcmlwdGlvbn0pO1xuICAgIGZyZWV6ZSh0aGlzKTtcbiAgICBzeW1ib2xWYWx1ZXNba2V5XSA9IHRoaXM7XG4gIH1cbiAgJGRlZmluZVByb3BlcnR5KFN5bWJvbFZhbHVlLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgbm9uRW51bShTeW1ib2wpKTtcbiAgJGRlZmluZVByb3BlcnR5KFN5bWJvbFZhbHVlLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywge1xuICAgIHZhbHVlOiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGVudW1lcmFibGU6IGZhbHNlXG4gIH0pO1xuICAkZGVmaW5lUHJvcGVydHkoU3ltYm9sVmFsdWUucHJvdG90eXBlLCAndmFsdWVPZicsIHtcbiAgICB2YWx1ZTogU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mLFxuICAgIGVudW1lcmFibGU6IGZhbHNlXG4gIH0pO1xuICB2YXIgaGFzaFByb3BlcnR5ID0gY3JlYXRlUHJpdmF0ZU5hbWUoKTtcbiAgdmFyIGhhc2hQcm9wZXJ0eURlc2NyaXB0b3IgPSB7dmFsdWU6IHVuZGVmaW5lZH07XG4gIHZhciBoYXNoT2JqZWN0UHJvcGVydGllcyA9IHtcbiAgICBoYXNoOiB7dmFsdWU6IHVuZGVmaW5lZH0sXG4gICAgc2VsZjoge3ZhbHVlOiB1bmRlZmluZWR9XG4gIH07XG4gIHZhciBoYXNoQ291bnRlciA9IDA7XG4gIGZ1bmN0aW9uIGdldE93bkhhc2hPYmplY3Qob2JqZWN0KSB7XG4gICAgdmFyIGhhc2hPYmplY3QgPSBvYmplY3RbaGFzaFByb3BlcnR5XTtcbiAgICBpZiAoaGFzaE9iamVjdCAmJiBoYXNoT2JqZWN0LnNlbGYgPT09IG9iamVjdClcbiAgICAgIHJldHVybiBoYXNoT2JqZWN0O1xuICAgIGlmICgkaXNFeHRlbnNpYmxlKG9iamVjdCkpIHtcbiAgICAgIGhhc2hPYmplY3RQcm9wZXJ0aWVzLmhhc2gudmFsdWUgPSBoYXNoQ291bnRlcisrO1xuICAgICAgaGFzaE9iamVjdFByb3BlcnRpZXMuc2VsZi52YWx1ZSA9IG9iamVjdDtcbiAgICAgIGhhc2hQcm9wZXJ0eURlc2NyaXB0b3IudmFsdWUgPSAkY3JlYXRlKG51bGwsIGhhc2hPYmplY3RQcm9wZXJ0aWVzKTtcbiAgICAgICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGhhc2hQcm9wZXJ0eSwgaGFzaFByb3BlcnR5RGVzY3JpcHRvcik7XG4gICAgICByZXR1cm4gaGFzaFByb3BlcnR5RGVzY3JpcHRvci52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBmcmVlemUob2JqZWN0KSB7XG4gICAgZ2V0T3duSGFzaE9iamVjdChvYmplY3QpO1xuICAgIHJldHVybiAkZnJlZXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMob2JqZWN0KSB7XG4gICAgZ2V0T3duSGFzaE9iamVjdChvYmplY3QpO1xuICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBmdW5jdGlvbiBzZWFsKG9iamVjdCkge1xuICAgIGdldE93bkhhc2hPYmplY3Qob2JqZWN0KTtcbiAgICByZXR1cm4gJHNlYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBmcmVlemUoU3ltYm9sVmFsdWUucHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gaXNTeW1ib2xTdHJpbmcocykge1xuICAgIHJldHVybiBzeW1ib2xWYWx1ZXNbc10gfHwgcHJpdmF0ZU5hbWVzW3NdO1xuICB9XG4gIGZ1bmN0aW9uIHRvUHJvcGVydHkobmFtZSkge1xuICAgIGlmIChpc1NoaW1TeW1ib2wobmFtZSkpXG4gICAgICByZXR1cm4gbmFtZVtzeW1ib2xJbnRlcm5hbFByb3BlcnR5XTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVTeW1ib2xLZXlzKGFycmF5KSB7XG4gICAgdmFyIHJ2ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFpc1N5bWJvbFN0cmluZyhhcnJheVtpXSkpIHtcbiAgICAgICAgcnYucHVzaChhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydjtcbiAgfVxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCkge1xuICAgIHJldHVybiByZW1vdmVTeW1ib2xLZXlzKCRnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCkpO1xuICB9XG4gIGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgcmV0dXJuIHJlbW92ZVN5bWJvbEtleXMoJGtleXMob2JqZWN0KSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkge1xuICAgIHZhciBydiA9IFtdO1xuICAgIHZhciBuYW1lcyA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHN5bWJvbCA9IHN5bWJvbFZhbHVlc1tuYW1lc1tpXV07XG4gICAgICBpZiAoc3ltYm9sKSB7XG4gICAgICAgIHJ2LnB1c2goc3ltYm9sKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ2O1xuICB9XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIG5hbWUpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHRvUHJvcGVydHkobmFtZSkpO1xuICB9XG4gIGZ1bmN0aW9uIGhhc093blByb3BlcnR5KG5hbWUpIHtcbiAgICByZXR1cm4gJGhhc093blByb3BlcnR5LmNhbGwodGhpcywgdG9Qcm9wZXJ0eShuYW1lKSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0T3B0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gZ2xvYmFsLnRyYWNldXIgJiYgZ2xvYmFsLnRyYWNldXIub3B0aW9uc1tuYW1lXTtcbiAgfVxuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICBpZiAoaXNTaGltU3ltYm9sKG5hbWUpKSB7XG4gICAgICBuYW1lID0gbmFtZVtzeW1ib2xJbnRlcm5hbFByb3BlcnR5XTtcbiAgICB9XG4gICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbE9iamVjdChPYmplY3QpIHtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknLCB7dmFsdWU6IGRlZmluZVByb3BlcnR5fSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2dldE93blByb3BlcnR5TmFtZXMnLCB7dmFsdWU6IGdldE93blByb3BlcnR5TmFtZXN9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywge3ZhbHVlOiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3J9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ2hhc093blByb3BlcnR5Jywge3ZhbHVlOiBoYXNPd25Qcm9wZXJ0eX0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdmcmVlemUnLCB7dmFsdWU6IGZyZWV6ZX0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdwcmV2ZW50RXh0ZW5zaW9ucycsIHt2YWx1ZTogcHJldmVudEV4dGVuc2lvbnN9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnc2VhbCcsIHt2YWx1ZTogc2VhbH0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdrZXlzJywge3ZhbHVlOiBrZXlzfSk7XG4gIH1cbiAgZnVuY3Rpb24gZXhwb3J0U3RhcihvYmplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG5hbWVzID0gJGdldE93blByb3BlcnR5TmFtZXMoYXJndW1lbnRzW2ldKTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lc1tqXTtcbiAgICAgICAgaWYgKGlzU3ltYm9sU3RyaW5nKG5hbWUpKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAoZnVuY3Rpb24obW9kLCBuYW1lKSB7XG4gICAgICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1vZFtuYW1lXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKGFyZ3VtZW50c1tpXSwgbmFtZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHggPT09ICdmdW5jdGlvbicpO1xuICB9XG4gIGZ1bmN0aW9uIHRvT2JqZWN0KHgpIHtcbiAgICBpZiAoeCA9PSBudWxsKVxuICAgICAgdGhyb3cgJFR5cGVFcnJvcigpO1xuICAgIHJldHVybiAkT2JqZWN0KHgpO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSB7XG4gICAgaWYgKGFyZ3VtZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gYW4gT2JqZWN0Jyk7XG4gICAgfVxuICAgIHJldHVybiBhcmd1bWVudDtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbFN5bWJvbChnbG9iYWwsIFN5bWJvbCkge1xuICAgIGlmICghZ2xvYmFsLlN5bWJvbCkge1xuICAgICAgZ2xvYmFsLlN5bWJvbCA9IFN5bWJvbDtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gICAgfVxuICAgIGlmICghZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcikge1xuICAgICAgZ2xvYmFsLlN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbCgnU3ltYm9sLml0ZXJhdG9yJyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldHVwR2xvYmFscyhnbG9iYWwpIHtcbiAgICBwb2x5ZmlsbFN5bWJvbChnbG9iYWwsIFN5bWJvbCk7XG4gICAgZ2xvYmFsLlJlZmxlY3QgPSBnbG9iYWwuUmVmbGVjdCB8fCB7fTtcbiAgICBnbG9iYWwuUmVmbGVjdC5nbG9iYWwgPSBnbG9iYWwuUmVmbGVjdC5nbG9iYWwgfHwgZ2xvYmFsO1xuICAgIHBvbHlmaWxsT2JqZWN0KGdsb2JhbC5PYmplY3QpO1xuICB9XG4gIHNldHVwR2xvYmFscyhnbG9iYWwpO1xuICBnbG9iYWwuJHRyYWNldXJSdW50aW1lID0ge1xuICAgIGNoZWNrT2JqZWN0Q29lcmNpYmxlOiBjaGVja09iamVjdENvZXJjaWJsZSxcbiAgICBjcmVhdGVQcml2YXRlTmFtZTogY3JlYXRlUHJpdmF0ZU5hbWUsXG4gICAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gICAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgICBleHBvcnRTdGFyOiBleHBvcnRTdGFyLFxuICAgIGdldE93bkhhc2hPYmplY3Q6IGdldE93bkhhc2hPYmplY3QsXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgICBpc1ByaXZhdGVOYW1lOiBpc1ByaXZhdGVOYW1lLFxuICAgIGlzU3ltYm9sU3RyaW5nOiBpc1N5bWJvbFN0cmluZyxcbiAgICBrZXlzOiAka2V5cyxcbiAgICBzZXR1cEdsb2JhbHM6IHNldHVwR2xvYmFscyxcbiAgICB0b09iamVjdDogdG9PYmplY3QsXG4gICAgdG9Qcm9wZXJ0eTogdG9Qcm9wZXJ0eSxcbiAgICB0eXBlb2Y6IHR5cGVPZlxuICB9O1xufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgcGF0aDtcbiAgZnVuY3Rpb24gcmVsYXRpdmVSZXF1aXJlKGNhbGxlclBhdGgsIHJlcXVpcmVkUGF0aCkge1xuICAgIHBhdGggPSBwYXRoIHx8IHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyAmJiByZXF1aXJlKCdwYXRoJyk7XG4gICAgZnVuY3Rpb24gaXNEaXJlY3RvcnkocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguc2xpY2UoLTEpID09PSAnLyc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGhbMF0gPT09ICcvJztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNSZWxhdGl2ZShwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aFswXSA9PT0gJy4nO1xuICAgIH1cbiAgICBpZiAoaXNEaXJlY3RvcnkocmVxdWlyZWRQYXRoKSB8fCBpc0Fic29sdXRlKHJlcXVpcmVkUGF0aCkpXG4gICAgICByZXR1cm47XG4gICAgcmV0dXJuIGlzUmVsYXRpdmUocmVxdWlyZWRQYXRoKSA/IHJlcXVpcmUocGF0aC5yZXNvbHZlKHBhdGguZGlybmFtZShjYWxsZXJQYXRoKSwgcmVxdWlyZWRQYXRoKSkgOiByZXF1aXJlKHJlcXVpcmVkUGF0aCk7XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLnJlcXVpcmUgPSByZWxhdGl2ZVJlcXVpcmU7XG59KSgpO1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIGZ1bmN0aW9uIHNwcmVhZCgpIHtcbiAgICB2YXIgcnYgPSBbXSxcbiAgICAgICAgaiA9IDAsXG4gICAgICAgIGl0ZXJSZXN1bHQ7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZVRvU3ByZWFkID0gJHRyYWNldXJSdW50aW1lLmNoZWNrT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50c1tpXSk7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlVG9TcHJlYWRbJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHkoU3ltYm9sLml0ZXJhdG9yKV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IHNwcmVhZCBub24taXRlcmFibGUgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXIgPSB2YWx1ZVRvU3ByZWFkWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KFN5bWJvbC5pdGVyYXRvcildKCk7XG4gICAgICB3aGlsZSAoIShpdGVyUmVzdWx0ID0gaXRlci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgcnZbaisrXSA9IGl0ZXJSZXN1bHQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydjtcbiAgfVxuICAkdHJhY2V1clJ1bnRpbWUuc3ByZWFkID0gc3ByZWFkO1xufSkoKTtcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgJE9iamVjdCA9IE9iamVjdDtcbiAgdmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4gIHZhciAkY3JlYXRlID0gJE9iamVjdC5jcmVhdGU7XG4gIHZhciAkZGVmaW5lUHJvcGVydGllcyA9ICR0cmFjZXVyUnVudGltZS5kZWZpbmVQcm9wZXJ0aWVzO1xuICB2YXIgJGRlZmluZVByb3BlcnR5ID0gJHRyYWNldXJSdW50aW1lLmRlZmluZVByb3BlcnR5O1xuICB2YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9ICR0cmFjZXVyUnVudGltZS5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIHZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9ICR0cmFjZXVyUnVudGltZS5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICB2YXIgJGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgJF9fMCA9IE9iamVjdCxcbiAgICAgIGdldE93blByb3BlcnR5TmFtZXMgPSAkX18wLmdldE93blByb3BlcnR5TmFtZXMsXG4gICAgICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSAkX18wLmdldE93blByb3BlcnR5U3ltYm9scztcbiAgZnVuY3Rpb24gc3VwZXJEZXNjcmlwdG9yKGhvbWVPYmplY3QsIG5hbWUpIHtcbiAgICB2YXIgcHJvdG8gPSAkZ2V0UHJvdG90eXBlT2YoaG9tZU9iamVjdCk7XG4gICAgZG8ge1xuICAgICAgdmFyIHJlc3VsdCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIG5hbWUpO1xuICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIHByb3RvID0gJGdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICB9IHdoaWxlIChwcm90byk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBzdXBlckNvbnN0cnVjdG9yKGN0b3IpIHtcbiAgICByZXR1cm4gY3Rvci5fX3Byb3RvX187XG4gIH1cbiAgZnVuY3Rpb24gc3VwZXJDYWxsKHNlbGYsIGhvbWVPYmplY3QsIG5hbWUsIGFyZ3MpIHtcbiAgICByZXR1cm4gc3VwZXJHZXQoc2VsZiwgaG9tZU9iamVjdCwgbmFtZSkuYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cbiAgZnVuY3Rpb24gc3VwZXJHZXQoc2VsZiwgaG9tZU9iamVjdCwgbmFtZSkge1xuICAgIHZhciBkZXNjcmlwdG9yID0gc3VwZXJEZXNjcmlwdG9yKGhvbWVPYmplY3QsIG5hbWUpO1xuICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICBpZiAoIWRlc2NyaXB0b3IuZ2V0KVxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHNlbGYpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIHN1cGVyU2V0KHNlbGYsIGhvbWVPYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBzdXBlckRlc2NyaXB0b3IoaG9tZU9iamVjdCwgbmFtZSk7XG4gICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwoc2VsZiwgdmFsdWUpO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0aHJvdyAkVHlwZUVycm9yKChcInN1cGVyIGhhcyBubyBzZXR0ZXIgJ1wiICsgbmFtZSArIFwiJy5cIikpO1xuICB9XG4gIGZ1bmN0aW9uIGdldERlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIHZhciBuYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgZGVzY3JpcHRvcnNbbmFtZV0gPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgbmFtZSk7XG4gICAgfVxuICAgIHZhciBzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgIGRlc2NyaXB0b3JzWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KHN5bWJvbCldID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsICR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KHN5bWJvbCkpO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQ2xhc3MoY3Rvciwgb2JqZWN0LCBzdGF0aWNPYmplY3QsIHN1cGVyQ2xhc3MpIHtcbiAgICAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCAnY29uc3RydWN0b3InLCB7XG4gICAgICB2YWx1ZTogY3RvcixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDMpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgY3Rvci5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSAkY3JlYXRlKGdldFByb3RvUGFyZW50KHN1cGVyQ2xhc3MpLCBnZXREZXNjcmlwdG9ycyhvYmplY3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBvYmplY3Q7XG4gICAgfVxuICAgICRkZWZpbmVQcm9wZXJ0eShjdG9yLCAncHJvdG90eXBlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydGllcyhjdG9yLCBnZXREZXNjcmlwdG9ycyhzdGF0aWNPYmplY3QpKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRQcm90b1BhcmVudChzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcHJvdG90eXBlID0gc3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgICBpZiAoJE9iamVjdChwcm90b3R5cGUpID09PSBwcm90b3R5cGUgfHwgcHJvdG90eXBlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gc3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignc3VwZXIgcHJvdG90eXBlIG11c3QgYmUgYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgaWYgKHN1cGVyQ2xhc3MgPT09IG51bGwpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcigoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MgKyBcIi5cIikpO1xuICB9XG4gIGZ1bmN0aW9uIGRlZmF1bHRTdXBlckNhbGwoc2VsZiwgaG9tZU9iamVjdCwgYXJncykge1xuICAgIGlmICgkZ2V0UHJvdG90eXBlT2YoaG9tZU9iamVjdCkgIT09IG51bGwpXG4gICAgICBzdXBlckNhbGwoc2VsZiwgaG9tZU9iamVjdCwgJ2NvbnN0cnVjdG9yJywgYXJncyk7XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzID0gY3JlYXRlQ2xhc3M7XG4gICR0cmFjZXVyUnVudGltZS5kZWZhdWx0U3VwZXJDYWxsID0gZGVmYXVsdFN1cGVyQ2FsbDtcbiAgJHRyYWNldXJSdW50aW1lLnN1cGVyQ2FsbCA9IHN1cGVyQ2FsbDtcbiAgJHRyYWNldXJSdW50aW1lLnN1cGVyQ29uc3RydWN0b3IgPSBzdXBlckNvbnN0cnVjdG9yO1xuICAkdHJhY2V1clJ1bnRpbWUuc3VwZXJHZXQgPSBzdXBlckdldDtcbiAgJHRyYWNldXJSdW50aW1lLnN1cGVyU2V0ID0gc3VwZXJTZXQ7XG59KSgpO1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmICh0eXBlb2YgJHRyYWNldXJSdW50aW1lICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcigndHJhY2V1ciBydW50aW1lIG5vdCBmb3VuZC4nKTtcbiAgfVxuICB2YXIgY3JlYXRlUHJpdmF0ZU5hbWUgPSAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlUHJpdmF0ZU5hbWU7XG4gIHZhciAkZGVmaW5lUHJvcGVydGllcyA9ICR0cmFjZXVyUnVudGltZS5kZWZpbmVQcm9wZXJ0aWVzO1xuICB2YXIgJGRlZmluZVByb3BlcnR5ID0gJHRyYWNldXJSdW50aW1lLmRlZmluZVByb3BlcnR5O1xuICB2YXIgJGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG4gIHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuICBmdW5jdGlvbiBub25FbnVtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9O1xuICB9XG4gIHZhciBTVF9ORVdCT1JOID0gMDtcbiAgdmFyIFNUX0VYRUNVVElORyA9IDE7XG4gIHZhciBTVF9TVVNQRU5ERUQgPSAyO1xuICB2YXIgU1RfQ0xPU0VEID0gMztcbiAgdmFyIEVORF9TVEFURSA9IC0yO1xuICB2YXIgUkVUSFJPV19TVEFURSA9IC0zO1xuICBmdW5jdGlvbiBnZXRJbnRlcm5hbEVycm9yKHN0YXRlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignVHJhY2V1ciBjb21waWxlciBidWc6IGludmFsaWQgc3RhdGUgaW4gc3RhdGUgbWFjaGluZTogJyArIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiBHZW5lcmF0b3JDb250ZXh0KCkge1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMuR1N0YXRlID0gU1RfTkVXQk9STjtcbiAgICB0aGlzLnN0b3JlZEV4Y2VwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbmFsbHlGYWxsVGhyb3VnaCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbnRfID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cnlTdGFja18gPSBbXTtcbiAgfVxuICBHZW5lcmF0b3JDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBwdXNoVHJ5OiBmdW5jdGlvbihjYXRjaFN0YXRlLCBmaW5hbGx5U3RhdGUpIHtcbiAgICAgIGlmIChmaW5hbGx5U3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGZpbmFsbHlGYWxsVGhyb3VnaCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeVN0YWNrXy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmICh0aGlzLnRyeVN0YWNrX1tpXS5jYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmaW5hbGx5RmFsbFRocm91Z2ggPSB0aGlzLnRyeVN0YWNrX1tpXS5jYXRjaDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmluYWxseUZhbGxUaHJvdWdoID09PSBudWxsKVxuICAgICAgICAgIGZpbmFsbHlGYWxsVGhyb3VnaCA9IFJFVEhST1dfU1RBVEU7XG4gICAgICAgIHRoaXMudHJ5U3RhY2tfLnB1c2goe1xuICAgICAgICAgIGZpbmFsbHk6IGZpbmFsbHlTdGF0ZSxcbiAgICAgICAgICBmaW5hbGx5RmFsbFRocm91Z2g6IGZpbmFsbHlGYWxsVGhyb3VnaFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjYXRjaFN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudHJ5U3RhY2tfLnB1c2goe2NhdGNoOiBjYXRjaFN0YXRlfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwb3BUcnk6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50cnlTdGFja18ucG9wKCk7XG4gICAgfSxcbiAgICBnZXQgc2VudCgpIHtcbiAgICAgIHRoaXMubWF5YmVUaHJvdygpO1xuICAgICAgcmV0dXJuIHRoaXMuc2VudF87XG4gICAgfSxcbiAgICBzZXQgc2VudCh2KSB7XG4gICAgICB0aGlzLnNlbnRfID0gdjtcbiAgICB9LFxuICAgIGdldCBzZW50SWdub3JlVGhyb3coKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW50XztcbiAgICB9LFxuICAgIG1heWJlVGhyb3c6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAndGhyb3cnKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJ25leHQnO1xuICAgICAgICB0aHJvdyB0aGlzLnNlbnRfO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIEVORF9TVEFURTpcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY2FzZSBSRVRIUk9XX1NUQVRFOlxuICAgICAgICAgIHRocm93IHRoaXMuc3RvcmVkRXhjZXB0aW9uO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IGdldEludGVybmFsRXJyb3IodGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVFeGNlcHRpb246IGZ1bmN0aW9uKGV4KSB7XG4gICAgICB0aGlzLkdTdGF0ZSA9IFNUX0NMT1NFRDtcbiAgICAgIHRoaXMuc3RhdGUgPSBFTkRfU1RBVEU7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIG5leHRPclRocm93KGN0eCwgbW92ZU5leHQsIGFjdGlvbiwgeCkge1xuICAgIHN3aXRjaCAoY3R4LkdTdGF0ZSkge1xuICAgICAgY2FzZSBTVF9FWEVDVVRJTkc6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJcXFwiXCIgKyBhY3Rpb24gKyBcIlxcXCIgb24gZXhlY3V0aW5nIGdlbmVyYXRvclwiKSk7XG4gICAgICBjYXNlIFNUX0NMT1NFRDpcbiAgICAgICAgaWYgKGFjdGlvbiA9PSAnbmV4dCcpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IHg7XG4gICAgICBjYXNlIFNUX05FV0JPUk46XG4gICAgICAgIGlmIChhY3Rpb24gPT09ICd0aHJvdycpIHtcbiAgICAgICAgICBjdHguR1N0YXRlID0gU1RfQ0xPU0VEO1xuICAgICAgICAgIHRocm93IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aHJvdyAkVHlwZUVycm9yKCdTZW50IHZhbHVlIHRvIG5ld2Jvcm4gZ2VuZXJhdG9yJyk7XG4gICAgICBjYXNlIFNUX1NVU1BFTkRFRDpcbiAgICAgICAgY3R4LkdTdGF0ZSA9IFNUX0VYRUNVVElORztcbiAgICAgICAgY3R4LmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgY3R4LnNlbnQgPSB4O1xuICAgICAgICB2YXIgdmFsdWUgPSBtb3ZlTmV4dChjdHgpO1xuICAgICAgICB2YXIgZG9uZSA9IHZhbHVlID09PSBjdHg7XG4gICAgICAgIGlmIChkb25lKVxuICAgICAgICAgIHZhbHVlID0gY3R4LnJldHVyblZhbHVlO1xuICAgICAgICBjdHguR1N0YXRlID0gZG9uZSA/IFNUX0NMT1NFRCA6IFNUX1NVU1BFTkRFRDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZG9uZVxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuICB2YXIgY3R4TmFtZSA9IGNyZWF0ZVByaXZhdGVOYW1lKCk7XG4gIHZhciBtb3ZlTmV4dE5hbWUgPSBjcmVhdGVQcml2YXRlTmFtZSgpO1xuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICRkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgbm9uRW51bShHZW5lcmF0b3JGdW5jdGlvbikpO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIG5leHQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHJldHVybiBuZXh0T3JUaHJvdyh0aGlzW2N0eE5hbWVdLCB0aGlzW21vdmVOZXh0TmFtZV0sICduZXh0Jywgdik7XG4gICAgfSxcbiAgICB0aHJvdzogZnVuY3Rpb24odikge1xuICAgICAgcmV0dXJuIG5leHRPclRocm93KHRoaXNbY3R4TmFtZV0sIHRoaXNbbW92ZU5leHROYW1lXSwgJ3Rocm93Jywgdik7XG4gICAgfVxuICB9O1xuICAkZGVmaW5lUHJvcGVydGllcyhHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge2VudW1lcmFibGU6IGZhbHNlfSxcbiAgICBuZXh0OiB7ZW51bWVyYWJsZTogZmFsc2V9LFxuICAgIHRocm93OiB7ZW51bWVyYWJsZTogZmFsc2V9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlLCBTeW1ib2wuaXRlcmF0b3IsIG5vbkVudW0oZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pKTtcbiAgZnVuY3Rpb24gY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UoaW5uZXJGdW5jdGlvbiwgZnVuY3Rpb25PYmplY3QsIHNlbGYpIHtcbiAgICB2YXIgbW92ZU5leHQgPSBnZXRNb3ZlTmV4dChpbm5lckZ1bmN0aW9uLCBzZWxmKTtcbiAgICB2YXIgY3R4ID0gbmV3IEdlbmVyYXRvckNvbnRleHQoKTtcbiAgICB2YXIgb2JqZWN0ID0gJGNyZWF0ZShmdW5jdGlvbk9iamVjdC5wcm90b3R5cGUpO1xuICAgIG9iamVjdFtjdHhOYW1lXSA9IGN0eDtcbiAgICBvYmplY3RbbW92ZU5leHROYW1lXSA9IG1vdmVOZXh0O1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdEdlbmVyYXRvckZ1bmN0aW9uKGZ1bmN0aW9uT2JqZWN0KSB7XG4gICAgZnVuY3Rpb25PYmplY3QucHJvdG90eXBlID0gJGNyZWF0ZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUpO1xuICAgIGZ1bmN0aW9uT2JqZWN0Ll9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgIHJldHVybiBmdW5jdGlvbk9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0Z1bmN0aW9uQ29udGV4dCgpIHtcbiAgICBHZW5lcmF0b3JDb250ZXh0LmNhbGwodGhpcyk7XG4gICAgdGhpcy5lcnIgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgY3R4LnJlc3VsdCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgY3R4LnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgY3R4LnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxuICBBc3luY0Z1bmN0aW9uQ29udGV4dC5wcm90b3R5cGUgPSAkY3JlYXRlKEdlbmVyYXRvckNvbnRleHQucHJvdG90eXBlKTtcbiAgQXN5bmNGdW5jdGlvbkNvbnRleHQucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgY2FzZSBFTkRfU1RBVEU6XG4gICAgICAgIHRoaXMucmVzb2x2ZSh0aGlzLnJldHVyblZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFVEhST1dfU1RBVEU6XG4gICAgICAgIHRoaXMucmVqZWN0KHRoaXMuc3RvcmVkRXhjZXB0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnJlamVjdChnZXRJbnRlcm5hbEVycm9yKHRoaXMuc3RhdGUpKTtcbiAgICB9XG4gIH07XG4gIEFzeW5jRnVuY3Rpb25Db250ZXh0LnByb3RvdHlwZS5oYW5kbGVFeGNlcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRlID0gUkVUSFJPV19TVEFURTtcbiAgfTtcbiAgZnVuY3Rpb24gYXN5bmNXcmFwKGlubmVyRnVuY3Rpb24sIHNlbGYpIHtcbiAgICB2YXIgbW92ZU5leHQgPSBnZXRNb3ZlTmV4dChpbm5lckZ1bmN0aW9uLCBzZWxmKTtcbiAgICB2YXIgY3R4ID0gbmV3IEFzeW5jRnVuY3Rpb25Db250ZXh0KCk7XG4gICAgY3R4LmNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24obmV3U3RhdGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBjdHguc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgY3R4LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIG1vdmVOZXh0KGN0eCk7XG4gICAgICB9O1xuICAgIH07XG4gICAgY3R4LmVycmJhY2sgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGhhbmRsZUNhdGNoKGN0eCwgZXJyKTtcbiAgICAgIG1vdmVOZXh0KGN0eCk7XG4gICAgfTtcbiAgICBtb3ZlTmV4dChjdHgpO1xuICAgIHJldHVybiBjdHgucmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGdldE1vdmVOZXh0KGlubmVyRnVuY3Rpb24sIHNlbGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oY3R4KSB7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBpbm5lckZ1bmN0aW9uLmNhbGwoc2VsZiwgY3R4KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBoYW5kbGVDYXRjaChjdHgsIGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2F0Y2goY3R4LCBleCkge1xuICAgIGN0eC5zdG9yZWRFeGNlcHRpb24gPSBleDtcbiAgICB2YXIgbGFzdCA9IGN0eC50cnlTdGFja19bY3R4LnRyeVN0YWNrXy5sZW5ndGggLSAxXTtcbiAgICBpZiAoIWxhc3QpIHtcbiAgICAgIGN0eC5oYW5kbGVFeGNlcHRpb24oZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjdHguc3RhdGUgPSBsYXN0LmNhdGNoICE9PSB1bmRlZmluZWQgPyBsYXN0LmNhdGNoIDogbGFzdC5maW5hbGx5O1xuICAgIGlmIChsYXN0LmZpbmFsbHlGYWxsVGhyb3VnaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgY3R4LmZpbmFsbHlGYWxsVGhyb3VnaCA9IGxhc3QuZmluYWxseUZhbGxUaHJvdWdoO1xuICB9XG4gICR0cmFjZXVyUnVudGltZS5hc3luY1dyYXAgPSBhc3luY1dyYXA7XG4gICR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24gPSBpbml0R2VuZXJhdG9yRnVuY3Rpb247XG4gICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZSA9IGNyZWF0ZUdlbmVyYXRvckluc3RhbmNlO1xufSkoKTtcbihmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gYnVpbGRGcm9tRW5jb2RlZFBhcnRzKG9wdF9zY2hlbWUsIG9wdF91c2VySW5mbywgb3B0X2RvbWFpbiwgb3B0X3BvcnQsIG9wdF9wYXRoLCBvcHRfcXVlcnlEYXRhLCBvcHRfZnJhZ21lbnQpIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgaWYgKG9wdF9zY2hlbWUpIHtcbiAgICAgIG91dC5wdXNoKG9wdF9zY2hlbWUsICc6Jyk7XG4gICAgfVxuICAgIGlmIChvcHRfZG9tYWluKSB7XG4gICAgICBvdXQucHVzaCgnLy8nKTtcbiAgICAgIGlmIChvcHRfdXNlckluZm8pIHtcbiAgICAgICAgb3V0LnB1c2gob3B0X3VzZXJJbmZvLCAnQCcpO1xuICAgICAgfVxuICAgICAgb3V0LnB1c2gob3B0X2RvbWFpbik7XG4gICAgICBpZiAob3B0X3BvcnQpIHtcbiAgICAgICAgb3V0LnB1c2goJzonLCBvcHRfcG9ydCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRfcGF0aCkge1xuICAgICAgb3V0LnB1c2gob3B0X3BhdGgpO1xuICAgIH1cbiAgICBpZiAob3B0X3F1ZXJ5RGF0YSkge1xuICAgICAgb3V0LnB1c2goJz8nLCBvcHRfcXVlcnlEYXRhKTtcbiAgICB9XG4gICAgaWYgKG9wdF9mcmFnbWVudCkge1xuICAgICAgb3V0LnB1c2goJyMnLCBvcHRfZnJhZ21lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0LmpvaW4oJycpO1xuICB9XG4gIDtcbiAgdmFyIHNwbGl0UmUgPSBuZXcgUmVnRXhwKCdeJyArICcoPzonICsgJyhbXjovPyMuXSspJyArICc6KT8nICsgJyg/Oi8vJyArICcoPzooW14vPyNdKilAKT8nICsgJyhbXFxcXHdcXFxcZFxcXFwtXFxcXHUwMTAwLVxcXFx1ZmZmZi4lXSopJyArICcoPzo6KFswLTldKykpPycgKyAnKT8nICsgJyhbXj8jXSspPycgKyAnKD86XFxcXD8oW14jXSopKT8nICsgJyg/OiMoLiopKT8nICsgJyQnKTtcbiAgdmFyIENvbXBvbmVudEluZGV4ID0ge1xuICAgIFNDSEVNRTogMSxcbiAgICBVU0VSX0lORk86IDIsXG4gICAgRE9NQUlOOiAzLFxuICAgIFBPUlQ6IDQsXG4gICAgUEFUSDogNSxcbiAgICBRVUVSWV9EQVRBOiA2LFxuICAgIEZSQUdNRU5UOiA3XG4gIH07XG4gIGZ1bmN0aW9uIHNwbGl0KHVyaSkge1xuICAgIHJldHVybiAodXJpLm1hdGNoKHNwbGl0UmUpKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVEb3RTZWdtZW50cyhwYXRoKSB7XG4gICAgaWYgKHBhdGggPT09ICcvJylcbiAgICAgIHJldHVybiAnLyc7XG4gICAgdmFyIGxlYWRpbmdTbGFzaCA9IHBhdGhbMF0gPT09ICcvJyA/ICcvJyA6ICcnO1xuICAgIHZhciB0cmFpbGluZ1NsYXNoID0gcGF0aC5zbGljZSgtMSkgPT09ICcvJyA/ICcvJyA6ICcnO1xuICAgIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgdmFyIHVwID0gMDtcbiAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCBzZWdtZW50cy5sZW5ndGg7IHBvcysrKSB7XG4gICAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW3Bvc107XG4gICAgICBzd2l0Y2ggKHNlZ21lbnQpIHtcbiAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy4uJzpcbiAgICAgICAgICBpZiAob3V0Lmxlbmd0aClcbiAgICAgICAgICAgIG91dC5wb3AoKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB1cCsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG91dC5wdXNoKHNlZ21lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWxlYWRpbmdTbGFzaCkge1xuICAgICAgd2hpbGUgKHVwLS0gPiAwKSB7XG4gICAgICAgIG91dC51bnNoaWZ0KCcuLicpO1xuICAgICAgfVxuICAgICAgaWYgKG91dC5sZW5ndGggPT09IDApXG4gICAgICAgIG91dC5wdXNoKCcuJyk7XG4gICAgfVxuICAgIHJldHVybiBsZWFkaW5nU2xhc2ggKyBvdXQuam9pbignLycpICsgdHJhaWxpbmdTbGFzaDtcbiAgfVxuICBmdW5jdGlvbiBqb2luQW5kQ2Fub25pY2FsaXplUGF0aChwYXJ0cykge1xuICAgIHZhciBwYXRoID0gcGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF0gfHwgJyc7XG4gICAgcGF0aCA9IHJlbW92ZURvdFNlZ21lbnRzKHBhdGgpO1xuICAgIHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdID0gcGF0aDtcbiAgICByZXR1cm4gYnVpbGRGcm9tRW5jb2RlZFBhcnRzKHBhcnRzW0NvbXBvbmVudEluZGV4LlNDSEVNRV0sIHBhcnRzW0NvbXBvbmVudEluZGV4LlVTRVJfSU5GT10sIHBhcnRzW0NvbXBvbmVudEluZGV4LkRPTUFJTl0sIHBhcnRzW0NvbXBvbmVudEluZGV4LlBPUlRdLCBwYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXSwgcGFydHNbQ29tcG9uZW50SW5kZXguUVVFUllfREFUQV0sIHBhcnRzW0NvbXBvbmVudEluZGV4LkZSQUdNRU5UXSk7XG4gIH1cbiAgZnVuY3Rpb24gY2Fub25pY2FsaXplVXJsKHVybCkge1xuICAgIHZhciBwYXJ0cyA9IHNwbGl0KHVybCk7XG4gICAgcmV0dXJuIGpvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKTtcbiAgfVxuICBmdW5jdGlvbiByZXNvbHZlVXJsKGJhc2UsIHVybCkge1xuICAgIHZhciBwYXJ0cyA9IHNwbGl0KHVybCk7XG4gICAgdmFyIGJhc2VQYXJ0cyA9IHNwbGl0KGJhc2UpO1xuICAgIGlmIChwYXJ0c1tDb21wb25lbnRJbmRleC5TQ0hFTUVdKSB7XG4gICAgICByZXR1cm4gam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0c1tDb21wb25lbnRJbmRleC5TQ0hFTUVdID0gYmFzZVBhcnRzW0NvbXBvbmVudEluZGV4LlNDSEVNRV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBDb21wb25lbnRJbmRleC5TQ0hFTUU7IGkgPD0gQ29tcG9uZW50SW5kZXguUE9SVDsgaSsrKSB7XG4gICAgICBpZiAoIXBhcnRzW2ldKSB7XG4gICAgICAgIHBhcnRzW2ldID0gYmFzZVBhcnRzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF1bMF0gPT0gJy8nKSB7XG4gICAgICByZXR1cm4gam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICAgIH1cbiAgICB2YXIgcGF0aCA9IGJhc2VQYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXTtcbiAgICB2YXIgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaW5kZXggKyAxKSArIHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdO1xuICAgIHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdID0gcGF0aDtcbiAgICByZXR1cm4gam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICB9XG4gIGZ1bmN0aW9uIGlzQWJzb2x1dGUobmFtZSkge1xuICAgIGlmICghbmFtZSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmFtZVswXSA9PT0gJy8nKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgdmFyIHBhcnRzID0gc3BsaXQobmFtZSk7XG4gICAgaWYgKHBhcnRzW0NvbXBvbmVudEluZGV4LlNDSEVNRV0pXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLmNhbm9uaWNhbGl6ZVVybCA9IGNhbm9uaWNhbGl6ZVVybDtcbiAgJHRyYWNldXJSdW50aW1lLmlzQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xuICAkdHJhY2V1clJ1bnRpbWUucmVtb3ZlRG90U2VnbWVudHMgPSByZW1vdmVEb3RTZWdtZW50cztcbiAgJHRyYWNldXJSdW50aW1lLnJlc29sdmVVcmwgPSByZXNvbHZlVXJsO1xufSkoKTtcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgdHlwZXMgPSB7XG4gICAgYW55OiB7bmFtZTogJ2FueSd9LFxuICAgIGJvb2xlYW46IHtuYW1lOiAnYm9vbGVhbid9LFxuICAgIG51bWJlcjoge25hbWU6ICdudW1iZXInfSxcbiAgICBzdHJpbmc6IHtuYW1lOiAnc3RyaW5nJ30sXG4gICAgc3ltYm9sOiB7bmFtZTogJ3N5bWJvbCd9LFxuICAgIHZvaWQ6IHtuYW1lOiAndm9pZCd9XG4gIH07XG4gIHZhciBHZW5lcmljVHlwZSA9IGZ1bmN0aW9uIEdlbmVyaWNUeXBlKHR5cGUsIGFyZ3VtZW50VHlwZXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYXJndW1lbnRUeXBlcyA9IGFyZ3VtZW50VHlwZXM7XG4gIH07XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKEdlbmVyaWNUeXBlLCB7fSwge30pO1xuICB2YXIgdHlwZVJlZ2lzdGVyID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZnVuY3Rpb24gZ2VuZXJpY1R5cGUodHlwZSkge1xuICAgIGZvciAodmFyIGFyZ3VtZW50VHlwZXMgPSBbXSxcbiAgICAgICAgJF9fMSA9IDE7ICRfXzEgPCBhcmd1bWVudHMubGVuZ3RoOyAkX18xKyspXG4gICAgICBhcmd1bWVudFR5cGVzWyRfXzEgLSAxXSA9IGFyZ3VtZW50c1skX18xXTtcbiAgICB2YXIgdHlwZU1hcCA9IHR5cGVSZWdpc3RlcjtcbiAgICB2YXIga2V5ID0gJHRyYWNldXJSdW50aW1lLmdldE93bkhhc2hPYmplY3QodHlwZSkuaGFzaDtcbiAgICBpZiAoIXR5cGVNYXBba2V5XSkge1xuICAgICAgdHlwZU1hcFtrZXldID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgdHlwZU1hcCA9IHR5cGVNYXBba2V5XTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50VHlwZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBrZXkgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duSGFzaE9iamVjdChhcmd1bWVudFR5cGVzW2ldKS5oYXNoO1xuICAgICAgaWYgKCF0eXBlTWFwW2tleV0pIHtcbiAgICAgICAgdHlwZU1hcFtrZXldID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIH1cbiAgICAgIHR5cGVNYXAgPSB0eXBlTWFwW2tleV07XG4gICAgfVxuICAgIHZhciB0YWlsID0gYXJndW1lbnRUeXBlc1thcmd1bWVudFR5cGVzLmxlbmd0aCAtIDFdO1xuICAgIGtleSA9ICR0cmFjZXVyUnVudGltZS5nZXRPd25IYXNoT2JqZWN0KHRhaWwpLmhhc2g7XG4gICAgaWYgKCF0eXBlTWFwW2tleV0pIHtcbiAgICAgIHR5cGVNYXBba2V5XSA9IG5ldyBHZW5lcmljVHlwZSh0eXBlLCBhcmd1bWVudFR5cGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVNYXBba2V5XTtcbiAgfVxuICAkdHJhY2V1clJ1bnRpbWUuR2VuZXJpY1R5cGUgPSBHZW5lcmljVHlwZTtcbiAgJHRyYWNldXJSdW50aW1lLmdlbmVyaWNUeXBlID0gZ2VuZXJpY1R5cGU7XG4gICR0cmFjZXVyUnVudGltZS50eXBlID0gdHlwZXM7XG59KSgpO1xuKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciAkX18yID0gJHRyYWNldXJSdW50aW1lLFxuICAgICAgY2Fub25pY2FsaXplVXJsID0gJF9fMi5jYW5vbmljYWxpemVVcmwsXG4gICAgICByZXNvbHZlVXJsID0gJF9fMi5yZXNvbHZlVXJsLFxuICAgICAgaXNBYnNvbHV0ZSA9ICRfXzIuaXNBYnNvbHV0ZTtcbiAgdmFyIG1vZHVsZUluc3RhbnRpYXRvcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgYmFzZVVSTDtcbiAgaWYgKGdsb2JhbC5sb2NhdGlvbiAmJiBnbG9iYWwubG9jYXRpb24uaHJlZilcbiAgICBiYXNlVVJMID0gcmVzb2x2ZVVybChnbG9iYWwubG9jYXRpb24uaHJlZiwgJy4vJyk7XG4gIGVsc2VcbiAgICBiYXNlVVJMID0gJyc7XG4gIHZhciBVbmNvYXRlZE1vZHVsZUVudHJ5ID0gZnVuY3Rpb24gVW5jb2F0ZWRNb2R1bGVFbnRyeSh1cmwsIHVuY29hdGVkTW9kdWxlKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy52YWx1ZV8gPSB1bmNvYXRlZE1vZHVsZTtcbiAgfTtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoVW5jb2F0ZWRNb2R1bGVFbnRyeSwge30sIHt9KTtcbiAgdmFyIE1vZHVsZUV2YWx1YXRpb25FcnJvciA9IGZ1bmN0aW9uIE1vZHVsZUV2YWx1YXRpb25FcnJvcihlcnJvbmVvdXNNb2R1bGVOYW1lLCBjYXVzZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZSArICc6ICcgKyB0aGlzLnN0cmlwQ2F1c2UoY2F1c2UpICsgJyBpbiAnICsgZXJyb25lb3VzTW9kdWxlTmFtZTtcbiAgICBpZiAoIShjYXVzZSBpbnN0YW5jZW9mICRNb2R1bGVFdmFsdWF0aW9uRXJyb3IpICYmIGNhdXNlLnN0YWNrKVxuICAgICAgdGhpcy5zdGFjayA9IHRoaXMuc3RyaXBTdGFjayhjYXVzZS5zdGFjayk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5zdGFjayA9ICcnO1xuICB9O1xuICB2YXIgJE1vZHVsZUV2YWx1YXRpb25FcnJvciA9IE1vZHVsZUV2YWx1YXRpb25FcnJvcjtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoTW9kdWxlRXZhbHVhdGlvbkVycm9yLCB7XG4gICAgc3RyaXBFcnJvcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvLipFcnJvcjovLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyAnOicpO1xuICAgIH0sXG4gICAgc3RyaXBDYXVzZTogZnVuY3Rpb24oY2F1c2UpIHtcbiAgICAgIGlmICghY2F1c2UpXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIGlmICghY2F1c2UubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIGNhdXNlICsgJyc7XG4gICAgICByZXR1cm4gdGhpcy5zdHJpcEVycm9yKGNhdXNlLm1lc3NhZ2UpO1xuICAgIH0sXG4gICAgbG9hZGVkQnk6IGZ1bmN0aW9uKG1vZHVsZU5hbWUpIHtcbiAgICAgIHRoaXMuc3RhY2sgKz0gJ1xcbiBsb2FkZWQgYnkgJyArIG1vZHVsZU5hbWU7XG4gICAgfSxcbiAgICBzdHJpcFN0YWNrOiBmdW5jdGlvbihjYXVzZVN0YWNrKSB7XG4gICAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICAgIGNhdXNlU3RhY2suc3BsaXQoJ1xcbicpLnNvbWUoKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgICAgIGlmICgvVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IvLnRlc3QoZnJhbWUpKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBzdGFjay5wdXNoKGZyYW1lKTtcbiAgICAgIH0pKTtcbiAgICAgIHN0YWNrWzBdID0gdGhpcy5zdHJpcEVycm9yKHN0YWNrWzBdKTtcbiAgICAgIHJldHVybiBzdGFjay5qb2luKCdcXG4nKTtcbiAgICB9XG4gIH0sIHt9LCBFcnJvcik7XG4gIGZ1bmN0aW9uIGJlZm9yZUxpbmVzKGxpbmVzLCBudW1iZXIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGZpcnN0ID0gbnVtYmVyIC0gMztcbiAgICBpZiAoZmlyc3QgPCAwKVxuICAgICAgZmlyc3QgPSAwO1xuICAgIGZvciAodmFyIGkgPSBmaXJzdDsgaSA8IG51bWJlcjsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaChsaW5lc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gYWZ0ZXJMaW5lcyhsaW5lcywgbnVtYmVyKSB7XG4gICAgdmFyIGxhc3QgPSBudW1iZXIgKyAxO1xuICAgIGlmIChsYXN0ID4gbGluZXMubGVuZ3RoIC0gMSlcbiAgICAgIGxhc3QgPSBsaW5lcy5sZW5ndGggLSAxO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gbnVtYmVyOyBpIDw9IGxhc3Q7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2gobGluZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGNvbHVtblNwYWNpbmcoY29sdW1ucykge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMgLSAxOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSAnLSc7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgdmFyIFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yID0gZnVuY3Rpb24gVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IodXJsLCBmdW5jKSB7XG4gICAgJHRyYWNldXJSdW50aW1lLnN1cGVyQ29uc3RydWN0b3IoJFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yKS5jYWxsKHRoaXMsIHVybCwgbnVsbCk7XG4gICAgdGhpcy5mdW5jID0gZnVuYztcbiAgfTtcbiAgdmFyICRVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvciA9IFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yO1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvciwge2dldFVuY29hdGVkTW9kdWxlOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlXylcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVfO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlbGF0aXZlUmVxdWlyZTtcbiAgICAgICAgaWYgKHR5cGVvZiAkdHJhY2V1clJ1bnRpbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlbGF0aXZlUmVxdWlyZSA9ICR0cmFjZXVyUnVudGltZS5yZXF1aXJlLmJpbmQobnVsbCwgdGhpcy51cmwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlXyA9IHRoaXMuZnVuYy5jYWxsKGdsb2JhbCwgcmVsYXRpdmVSZXF1aXJlKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGlmIChleCBpbnN0YW5jZW9mIE1vZHVsZUV2YWx1YXRpb25FcnJvcikge1xuICAgICAgICAgIGV4LmxvYWRlZEJ5KHRoaXMudXJsKTtcbiAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXguc3RhY2spIHtcbiAgICAgICAgICB2YXIgbGluZXMgPSB0aGlzLmZ1bmMudG9TdHJpbmcoKS5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgdmFyIGV2YWxlZCA9IFtdO1xuICAgICAgICAgIGV4LnN0YWNrLnNwbGl0KCdcXG4nKS5zb21lKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgICAgICAgICBpZiAoZnJhbWUuaW5kZXhPZignVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IuZ2V0VW5jb2F0ZWRNb2R1bGUnKSA+IDApXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgdmFyIG0gPSAvKGF0XFxzW15cXHNdKlxccykuKj46KFxcZCopOihcXGQqKVxcKS8uZXhlYyhmcmFtZSk7XG4gICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICB2YXIgbGluZSA9IHBhcnNlSW50KG1bMl0sIDEwKTtcbiAgICAgICAgICAgICAgZXZhbGVkID0gZXZhbGVkLmNvbmNhdChiZWZvcmVMaW5lcyhsaW5lcywgbGluZSkpO1xuICAgICAgICAgICAgICBldmFsZWQucHVzaChjb2x1bW5TcGFjaW5nKG1bM10pICsgJ14nKTtcbiAgICAgICAgICAgICAgZXZhbGVkID0gZXZhbGVkLmNvbmNhdChhZnRlckxpbmVzKGxpbmVzLCBsaW5lKSk7XG4gICAgICAgICAgICAgIGV2YWxlZC5wdXNoKCc9ID0gPSA9ID0gPSA9ID0gPScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXZhbGVkLnB1c2goZnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGV4LnN0YWNrID0gZXZhbGVkLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBNb2R1bGVFdmFsdWF0aW9uRXJyb3IodGhpcy51cmwsIGV4KTtcbiAgICAgIH1cbiAgICB9fSwge30sIFVuY29hdGVkTW9kdWxlRW50cnkpO1xuICBmdW5jdGlvbiBnZXRVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcihuYW1lKSB7XG4gICAgaWYgKCFuYW1lKVxuICAgICAgcmV0dXJuO1xuICAgIHZhciB1cmwgPSBNb2R1bGVTdG9yZS5ub3JtYWxpemUobmFtZSk7XG4gICAgcmV0dXJuIG1vZHVsZUluc3RhbnRpYXRvcnNbdXJsXTtcbiAgfVxuICA7XG4gIHZhciBtb2R1bGVJbnN0YW5jZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGl2ZU1vZHVsZVNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIE1vZHVsZSh1bmNvYXRlZE1vZHVsZSkge1xuICAgIHZhciBpc0xpdmUgPSBhcmd1bWVudHNbMV07XG4gICAgdmFyIGNvYXRlZE1vZHVsZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModW5jb2F0ZWRNb2R1bGUpLmZvckVhY2goKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBnZXR0ZXIsXG4gICAgICAgICAgdmFsdWU7XG4gICAgICBpZiAoaXNMaXZlID09PSBsaXZlTW9kdWxlU2VudGluZWwpIHtcbiAgICAgICAgdmFyIGRlc2NyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih1bmNvYXRlZE1vZHVsZSwgbmFtZSk7XG4gICAgICAgIGlmIChkZXNjci5nZXQpXG4gICAgICAgICAgZ2V0dGVyID0gZGVzY3IuZ2V0O1xuICAgICAgfVxuICAgICAgaWYgKCFnZXR0ZXIpIHtcbiAgICAgICAgdmFsdWUgPSB1bmNvYXRlZE1vZHVsZVtuYW1lXTtcbiAgICAgICAgZ2V0dGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvYXRlZE1vZHVsZSwgbmFtZSwge1xuICAgICAgICBnZXQ6IGdldHRlcixcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhjb2F0ZWRNb2R1bGUpO1xuICAgIHJldHVybiBjb2F0ZWRNb2R1bGU7XG4gIH1cbiAgdmFyIE1vZHVsZVN0b3JlID0ge1xuICAgIG5vcm1hbGl6ZTogZnVuY3Rpb24obmFtZSwgcmVmZXJlck5hbWUsIHJlZmVyZXJBZGRyZXNzKSB7XG4gICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtb2R1bGUgbmFtZSBtdXN0IGJlIGEgc3RyaW5nLCBub3QgJyArIHR5cGVvZiBuYW1lKTtcbiAgICAgIGlmIChpc0Fic29sdXRlKG5hbWUpKVxuICAgICAgICByZXR1cm4gY2Fub25pY2FsaXplVXJsKG5hbWUpO1xuICAgICAgaWYgKC9bXlxcLl1cXC9cXC5cXC5cXC8vLnRlc3QobmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2R1bGUgbmFtZSBlbWJlZHMgLy4uLzogJyArIG5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWVbMF0gPT09ICcuJyAmJiByZWZlcmVyTmFtZSlcbiAgICAgICAgcmV0dXJuIHJlc29sdmVVcmwocmVmZXJlck5hbWUsIG5hbWUpO1xuICAgICAgcmV0dXJuIGNhbm9uaWNhbGl6ZVVybChuYW1lKTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24obm9ybWFsaXplZE5hbWUpIHtcbiAgICAgIHZhciBtID0gZ2V0VW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3Iobm9ybWFsaXplZE5hbWUpO1xuICAgICAgaWYgKCFtKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgdmFyIG1vZHVsZUluc3RhbmNlID0gbW9kdWxlSW5zdGFuY2VzW20udXJsXTtcbiAgICAgIGlmIChtb2R1bGVJbnN0YW5jZSlcbiAgICAgICAgcmV0dXJuIG1vZHVsZUluc3RhbmNlO1xuICAgICAgbW9kdWxlSW5zdGFuY2UgPSBNb2R1bGUobS5nZXRVbmNvYXRlZE1vZHVsZSgpLCBsaXZlTW9kdWxlU2VudGluZWwpO1xuICAgICAgcmV0dXJuIG1vZHVsZUluc3RhbmNlc1ttLnVybF0gPSBtb2R1bGVJbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24obm9ybWFsaXplZE5hbWUsIG1vZHVsZSkge1xuICAgICAgbm9ybWFsaXplZE5hbWUgPSBTdHJpbmcobm9ybWFsaXplZE5hbWUpO1xuICAgICAgbW9kdWxlSW5zdGFudGlhdG9yc1tub3JtYWxpemVkTmFtZV0gPSBuZXcgVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3Iobm9ybWFsaXplZE5hbWUsIChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgIH0pKTtcbiAgICAgIG1vZHVsZUluc3RhbmNlc1tub3JtYWxpemVkTmFtZV0gPSBtb2R1bGU7XG4gICAgfSxcbiAgICBnZXQgYmFzZVVSTCgpIHtcbiAgICAgIHJldHVybiBiYXNlVVJMO1xuICAgIH0sXG4gICAgc2V0IGJhc2VVUkwodikge1xuICAgICAgYmFzZVVSTCA9IFN0cmluZyh2KTtcbiAgICB9LFxuICAgIHJlZ2lzdGVyTW9kdWxlOiBmdW5jdGlvbihuYW1lLCBkZXBzLCBmdW5jKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZE5hbWUgPSBNb2R1bGVTdG9yZS5ub3JtYWxpemUobmFtZSk7XG4gICAgICBpZiAobW9kdWxlSW5zdGFudGlhdG9yc1tub3JtYWxpemVkTmFtZV0pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZHVwbGljYXRlIG1vZHVsZSBuYW1lZCAnICsgbm9ybWFsaXplZE5hbWUpO1xuICAgICAgbW9kdWxlSW5zdGFudGlhdG9yc1tub3JtYWxpemVkTmFtZV0gPSBuZXcgVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3Iobm9ybWFsaXplZE5hbWUsIGZ1bmMpO1xuICAgIH0sXG4gICAgYnVuZGxlU3RvcmU6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKG5hbWUsIGRlcHMsIGZ1bmMpIHtcbiAgICAgIGlmICghZGVwcyB8fCAhZGVwcy5sZW5ndGggJiYgIWZ1bmMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJNb2R1bGUobmFtZSwgZGVwcywgZnVuYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ1bmRsZVN0b3JlW25hbWVdID0ge1xuICAgICAgICAgIGRlcHM6IGRlcHMsXG4gICAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJF9fMCA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHZhciBkZXBNYXAgPSB7fTtcbiAgICAgICAgICAgIGRlcHMuZm9yRWFjaCgoZnVuY3Rpb24oZGVwLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVwTWFwW2RlcF0gPSAkX18wW2luZGV4XTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHZhciByZWdpc3RyeUVudHJ5ID0gZnVuYy5jYWxsKHRoaXMsIGRlcE1hcCk7XG4gICAgICAgICAgICByZWdpc3RyeUVudHJ5LmV4ZWN1dGUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RyeUVudHJ5LmV4cG9ydHM7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0QW5vbnltb3VzTW9kdWxlOiBmdW5jdGlvbihmdW5jKSB7XG4gICAgICByZXR1cm4gbmV3IE1vZHVsZShmdW5jLmNhbGwoZ2xvYmFsKSwgbGl2ZU1vZHVsZVNlbnRpbmVsKTtcbiAgICB9LFxuICAgIGdldEZvclRlc3Rpbmc6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciAkX18wID0gdGhpcztcbiAgICAgIGlmICghdGhpcy50ZXN0aW5nUHJlZml4Xykge1xuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVJbnN0YW5jZXMpLnNvbWUoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIHZhciBtID0gLyh0cmFjZXVyQFteXFwvXSpcXC8pLy5leGVjKGtleSk7XG4gICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICRfXzAudGVzdGluZ1ByZWZpeF8gPSBtWzFdO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy50ZXN0aW5nUHJlZml4XyArIG5hbWUpO1xuICAgIH1cbiAgfTtcbiAgdmFyIG1vZHVsZVN0b3JlTW9kdWxlID0gbmV3IE1vZHVsZSh7TW9kdWxlU3RvcmU6IE1vZHVsZVN0b3JlfSk7XG4gIE1vZHVsZVN0b3JlLnNldCgnQHRyYWNldXIvc3JjL3J1bnRpbWUvTW9kdWxlU3RvcmUnLCBtb2R1bGVTdG9yZU1vZHVsZSk7XG4gIE1vZHVsZVN0b3JlLnNldCgnQHRyYWNldXIvc3JjL3J1bnRpbWUvTW9kdWxlU3RvcmUuanMnLCBtb2R1bGVTdG9yZU1vZHVsZSk7XG4gIHZhciBzZXR1cEdsb2JhbHMgPSAkdHJhY2V1clJ1bnRpbWUuc2V0dXBHbG9iYWxzO1xuICAkdHJhY2V1clJ1bnRpbWUuc2V0dXBHbG9iYWxzID0gZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgc2V0dXBHbG9iYWxzKGdsb2JhbCk7XG4gIH07XG4gICR0cmFjZXVyUnVudGltZS5Nb2R1bGVTdG9yZSA9IE1vZHVsZVN0b3JlO1xuICBnbG9iYWwuU3lzdGVtID0ge1xuICAgIHJlZ2lzdGVyOiBNb2R1bGVTdG9yZS5yZWdpc3Rlci5iaW5kKE1vZHVsZVN0b3JlKSxcbiAgICByZWdpc3Rlck1vZHVsZTogTW9kdWxlU3RvcmUucmVnaXN0ZXJNb2R1bGUuYmluZChNb2R1bGVTdG9yZSksXG4gICAgZ2V0OiBNb2R1bGVTdG9yZS5nZXQsXG4gICAgc2V0OiBNb2R1bGVTdG9yZS5zZXQsXG4gICAgbm9ybWFsaXplOiBNb2R1bGVTdG9yZS5ub3JtYWxpemVcbiAgfTtcbiAgJHRyYWNldXJSdW50aW1lLmdldE1vZHVsZUltcGwgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGluc3RhbnRpYXRvciA9IGdldFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yKG5hbWUpO1xuICAgIHJldHVybiBpbnN0YW50aWF0b3IgJiYgaW5zdGFudGlhdG9yLmdldFVuY29hdGVkTW9kdWxlKCk7XG4gIH07XG59KSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIjtcbiAgdmFyICRjZWlsID0gTWF0aC5jZWlsO1xuICB2YXIgJGZsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyICRpc0Zpbml0ZSA9IGlzRmluaXRlO1xuICB2YXIgJGlzTmFOID0gaXNOYU47XG4gIHZhciAkcG93ID0gTWF0aC5wb3c7XG4gIHZhciAkbWluID0gTWF0aC5taW47XG4gIHZhciB0b09iamVjdCA9ICR0cmFjZXVyUnVudGltZS50b09iamVjdDtcbiAgZnVuY3Rpb24gdG9VaW50MzIoeCkge1xuICAgIHJldHVybiB4ID4+PiAwO1xuICB9XG4gIGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAmJiAodHlwZW9mIHggPT09ICdvYmplY3QnIHx8IHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nKTtcbiAgfVxuICBmdW5jdGlvbiBpc0NhbGxhYmxlKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gIH1cbiAgZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcic7XG4gIH1cbiAgZnVuY3Rpb24gdG9JbnRlZ2VyKHgpIHtcbiAgICB4ID0gK3g7XG4gICAgaWYgKCRpc05hTih4KSlcbiAgICAgIHJldHVybiAwO1xuICAgIGlmICh4ID09PSAwIHx8ICEkaXNGaW5pdGUoeCkpXG4gICAgICByZXR1cm4geDtcbiAgICByZXR1cm4geCA+IDAgPyAkZmxvb3IoeCkgOiAkY2VpbCh4KTtcbiAgfVxuICB2YXIgTUFYX1NBRkVfTEVOR1RIID0gJHBvdygyLCA1MykgLSAxO1xuICBmdW5jdGlvbiB0b0xlbmd0aCh4KSB7XG4gICAgdmFyIGxlbiA9IHRvSW50ZWdlcih4KTtcbiAgICByZXR1cm4gbGVuIDwgMCA/IDAgOiAkbWluKGxlbiwgTUFYX1NBRkVfTEVOR1RIKTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja0l0ZXJhYmxlKHgpIHtcbiAgICByZXR1cm4gIWlzT2JqZWN0KHgpID8gdW5kZWZpbmVkIDogeFtTeW1ib2wuaXRlcmF0b3JdO1xuICB9XG4gIGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoeCkge1xuICAgIHJldHVybiBpc0NhbGxhYmxlKHgpO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KHZhbHVlLCBkb25lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGRvbmU6IGRvbmVcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlRGVmaW5lKG9iamVjdCwgbmFtZSwgZGVzY3IpIHtcbiAgICBpZiAoIShuYW1lIGluIG9iamVjdCkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIGRlc2NyKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVEZWZpbmVNZXRob2Qob2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIG1heWJlRGVmaW5lKG9iamVjdCwgbmFtZSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlRGVmaW5lQ29uc3Qob2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIG1heWJlRGVmaW5lKG9iamVjdCwgbmFtZSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVBZGRGdW5jdGlvbnMob2JqZWN0LCBmdW5jdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgdmFyIG5hbWUgPSBmdW5jdGlvbnNbaV07XG4gICAgICB2YXIgdmFsdWUgPSBmdW5jdGlvbnNbaSArIDFdO1xuICAgICAgbWF5YmVEZWZpbmVNZXRob2Qob2JqZWN0LCBuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1heWJlQWRkQ29uc3RzKG9iamVjdCwgY29uc3RzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25zdHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHZhciBuYW1lID0gY29uc3RzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gY29uc3RzW2kgKyAxXTtcbiAgICAgIG1heWJlRGVmaW5lQ29uc3Qob2JqZWN0LCBuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1heWJlQWRkSXRlcmF0b3Iob2JqZWN0LCBmdW5jLCBTeW1ib2wpIHtcbiAgICBpZiAoIVN5bWJvbCB8fCAhU3ltYm9sLml0ZXJhdG9yIHx8IG9iamVjdFtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgcmV0dXJuO1xuICAgIGlmIChvYmplY3RbJ0BAaXRlcmF0b3InXSlcbiAgICAgIGZ1bmMgPSBvYmplY3RbJ0BAaXRlcmF0b3InXTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBTeW1ib2wuaXRlcmF0b3IsIHtcbiAgICAgIHZhbHVlOiBmdW5jLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIHZhciBwb2x5ZmlsbHMgPSBbXTtcbiAgZnVuY3Rpb24gcmVnaXN0ZXJQb2x5ZmlsbChmdW5jKSB7XG4gICAgcG9seWZpbGxzLnB1c2goZnVuYyk7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxBbGwoZ2xvYmFsKSB7XG4gICAgcG9seWZpbGxzLmZvckVhY2goKGZ1bmN0aW9uKGYpIHtcbiAgICAgIHJldHVybiBmKGdsb2JhbCk7XG4gICAgfSkpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0IHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHRvT2JqZWN0O1xuICAgIH0sXG4gICAgZ2V0IHRvVWludDMyKCkge1xuICAgICAgcmV0dXJuIHRvVWludDMyO1xuICAgIH0sXG4gICAgZ2V0IGlzT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIGlzT2JqZWN0O1xuICAgIH0sXG4gICAgZ2V0IGlzQ2FsbGFibGUoKSB7XG4gICAgICByZXR1cm4gaXNDYWxsYWJsZTtcbiAgICB9LFxuICAgIGdldCBpc051bWJlcigpIHtcbiAgICAgIHJldHVybiBpc051bWJlcjtcbiAgICB9LFxuICAgIGdldCB0b0ludGVnZXIoKSB7XG4gICAgICByZXR1cm4gdG9JbnRlZ2VyO1xuICAgIH0sXG4gICAgZ2V0IHRvTGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIHRvTGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0IGNoZWNrSXRlcmFibGUoKSB7XG4gICAgICByZXR1cm4gY2hlY2tJdGVyYWJsZTtcbiAgICB9LFxuICAgIGdldCBpc0NvbnN0cnVjdG9yKCkge1xuICAgICAgcmV0dXJuIGlzQ29uc3RydWN0b3I7XG4gICAgfSxcbiAgICBnZXQgY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3Q7XG4gICAgfSxcbiAgICBnZXQgbWF5YmVEZWZpbmUoKSB7XG4gICAgICByZXR1cm4gbWF5YmVEZWZpbmU7XG4gICAgfSxcbiAgICBnZXQgbWF5YmVEZWZpbmVNZXRob2QoKSB7XG4gICAgICByZXR1cm4gbWF5YmVEZWZpbmVNZXRob2Q7XG4gICAgfSxcbiAgICBnZXQgbWF5YmVEZWZpbmVDb25zdCgpIHtcbiAgICAgIHJldHVybiBtYXliZURlZmluZUNvbnN0O1xuICAgIH0sXG4gICAgZ2V0IG1heWJlQWRkRnVuY3Rpb25zKCkge1xuICAgICAgcmV0dXJuIG1heWJlQWRkRnVuY3Rpb25zO1xuICAgIH0sXG4gICAgZ2V0IG1heWJlQWRkQ29uc3RzKCkge1xuICAgICAgcmV0dXJuIG1heWJlQWRkQ29uc3RzO1xuICAgIH0sXG4gICAgZ2V0IG1heWJlQWRkSXRlcmF0b3IoKSB7XG4gICAgICByZXR1cm4gbWF5YmVBZGRJdGVyYXRvcjtcbiAgICB9LFxuICAgIGdldCByZWdpc3RlclBvbHlmaWxsKCkge1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyUG9seWZpbGw7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxBbGwoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxBbGw7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9NYXAuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTWFwLmpzXCI7XG4gIHZhciAkX18wID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLFxuICAgICAgaXNPYmplY3QgPSAkX18wLmlzT2JqZWN0LFxuICAgICAgbWF5YmVBZGRJdGVyYXRvciA9ICRfXzAubWF5YmVBZGRJdGVyYXRvcixcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18wLnJlZ2lzdGVyUG9seWZpbGw7XG4gIHZhciBnZXRPd25IYXNoT2JqZWN0ID0gJHRyYWNldXJSdW50aW1lLmdldE93bkhhc2hPYmplY3Q7XG4gIHZhciAkaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgZGVsZXRlZFNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIGxvb2t1cEluZGV4KG1hcCwga2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHZhciBoYXNoT2JqZWN0ID0gZ2V0T3duSGFzaE9iamVjdChrZXkpO1xuICAgICAgcmV0dXJuIGhhc2hPYmplY3QgJiYgbWFwLm9iamVjdEluZGV4X1toYXNoT2JqZWN0Lmhhc2hdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpXG4gICAgICByZXR1cm4gbWFwLnN0cmluZ0luZGV4X1trZXldO1xuICAgIHJldHVybiBtYXAucHJpbWl0aXZlSW5kZXhfW2tleV07XG4gIH1cbiAgZnVuY3Rpb24gaW5pdE1hcChtYXApIHtcbiAgICBtYXAuZW50cmllc18gPSBbXTtcbiAgICBtYXAub2JqZWN0SW5kZXhfID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBtYXAuc3RyaW5nSW5kZXhfID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBtYXAucHJpbWl0aXZlSW5kZXhfID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBtYXAuZGVsZXRlZENvdW50XyA9IDA7XG4gIH1cbiAgdmFyIE1hcCA9IGZ1bmN0aW9uIE1hcCgpIHtcbiAgICB2YXIgaXRlcmFibGUgPSBhcmd1bWVudHNbMF07XG4gICAgaWYgKCFpc09iamVjdCh0aGlzKSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ01hcCBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHR5cGUnKTtcbiAgICBpZiAoJGhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ2VudHJpZXNfJykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ01hcCBjYW4gbm90IGJlIHJlZW50cmFudGx5IGluaXRpYWxpc2VkJyk7XG4gICAgfVxuICAgIGluaXRNYXAodGhpcyk7XG4gICAgaWYgKGl0ZXJhYmxlICE9PSBudWxsICYmIGl0ZXJhYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAodmFyICRfXzIgPSBpdGVyYWJsZVskdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eShTeW1ib2wuaXRlcmF0b3IpXSgpLFxuICAgICAgICAgICRfXzM7ICEoJF9fMyA9ICRfXzIubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgdmFyICRfXzQgPSAkX18zLnZhbHVlLFxuICAgICAgICAgICAga2V5ID0gJF9fNFswXSxcbiAgICAgICAgICAgIHZhbHVlID0gJF9fNFsxXTtcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShNYXAsIHtcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXNfLmxlbmd0aCAvIDIgLSB0aGlzLmRlbGV0ZWRDb3VudF87XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGluZGV4ID0gbG9va3VwSW5kZXgodGhpcywga2V5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzX1tpbmRleCArIDFdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgb2JqZWN0TW9kZSA9IGlzT2JqZWN0KGtleSk7XG4gICAgICB2YXIgc3RyaW5nTW9kZSA9IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIGluZGV4ID0gbG9va3VwSW5kZXgodGhpcywga2V5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZW50cmllc19baW5kZXggKyAxXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLmVudHJpZXNfLmxlbmd0aDtcbiAgICAgICAgdGhpcy5lbnRyaWVzX1tpbmRleF0gPSBrZXk7XG4gICAgICAgIHRoaXMuZW50cmllc19baW5kZXggKyAxXSA9IHZhbHVlO1xuICAgICAgICBpZiAob2JqZWN0TW9kZSkge1xuICAgICAgICAgIHZhciBoYXNoT2JqZWN0ID0gZ2V0T3duSGFzaE9iamVjdChrZXkpO1xuICAgICAgICAgIHZhciBoYXNoID0gaGFzaE9iamVjdC5oYXNoO1xuICAgICAgICAgIHRoaXMub2JqZWN0SW5kZXhfW2hhc2hdID0gaW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgICAgIHRoaXMuc3RyaW5nSW5kZXhfW2tleV0gPSBpbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByaW1pdGl2ZUluZGV4X1trZXldID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBsb29rdXBJbmRleCh0aGlzLCBrZXkpICE9PSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBkZWxldGU6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIG9iamVjdE1vZGUgPSBpc09iamVjdChrZXkpO1xuICAgICAgdmFyIHN0cmluZ01vZGUgPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBpbmRleDtcbiAgICAgIHZhciBoYXNoO1xuICAgICAgaWYgKG9iamVjdE1vZGUpIHtcbiAgICAgICAgdmFyIGhhc2hPYmplY3QgPSBnZXRPd25IYXNoT2JqZWN0KGtleSk7XG4gICAgICAgIGlmIChoYXNoT2JqZWN0KSB7XG4gICAgICAgICAgaW5kZXggPSB0aGlzLm9iamVjdEluZGV4X1toYXNoID0gaGFzaE9iamVjdC5oYXNoXTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5vYmplY3RJbmRleF9baGFzaF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgICBpbmRleCA9IHRoaXMuc3RyaW5nSW5kZXhfW2tleV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0cmluZ0luZGV4X1trZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLnByaW1pdGl2ZUluZGV4X1trZXldO1xuICAgICAgICBkZWxldGUgdGhpcy5wcmltaXRpdmVJbmRleF9ba2V5XTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZW50cmllc19baW5kZXhdID0gZGVsZXRlZFNlbnRpbmVsO1xuICAgICAgICB0aGlzLmVudHJpZXNfW2luZGV4ICsgMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGVsZXRlZENvdW50XysrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIGluaXRNYXAodGhpcyk7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbihjYWxsYmFja0ZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbnRyaWVzXy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5lbnRyaWVzX1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5lbnRyaWVzX1tpICsgMV07XG4gICAgICAgIGlmIChrZXkgPT09IGRlbGV0ZWRTZW50aW5lbClcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FsbGJhY2tGbi5jYWxsKHRoaXNBcmcsIHZhbHVlLCBrZXksIHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW50cmllczogJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbiAkX181KCkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlO1xuICAgICAgcmV0dXJuICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZShmdW5jdGlvbigkY3R4KSB7XG4gICAgICAgIHdoaWxlICh0cnVlKVxuICAgICAgICAgIHN3aXRjaCAoJGN0eC5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoaSA8IHRoaXMuZW50cmllc18ubGVuZ3RoKSA/IDggOiAtMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAga2V5ID0gdGhpcy5lbnRyaWVzX1tpXTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmVudHJpZXNfW2kgKyAxXTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKGtleSA9PT0gZGVsZXRlZFNlbnRpbmVsKSA/IDQgOiA2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICRjdHgubWF5YmVUaHJvdygpO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gNDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gJGN0eC5lbmQoKTtcbiAgICAgICAgICB9XG4gICAgICB9LCAkX181LCB0aGlzKTtcbiAgICB9KSxcbiAgICBrZXlzOiAkdHJhY2V1clJ1bnRpbWUuaW5pdEdlbmVyYXRvckZ1bmN0aW9uKGZ1bmN0aW9uICRfXzYoKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWU7XG4gICAgICByZXR1cm4gJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlKGZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpXG4gICAgICAgICAgc3dpdGNoICgkY3R4LnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IChpIDwgdGhpcy5lbnRyaWVzXy5sZW5ndGgpID8gOCA6IC0yO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBrZXkgPSB0aGlzLmVudHJpZXNfW2ldO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZW50cmllc19baSArIDFdO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoa2V5ID09PSBkZWxldGVkU2VudGluZWwpID8gNCA6IDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgJGN0eC5tYXliZVRocm93KCk7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiAkY3R4LmVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgIH0sICRfXzYsIHRoaXMpO1xuICAgIH0pLFxuICAgIHZhbHVlczogJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbiAkX183KCkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlO1xuICAgICAgcmV0dXJuICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZShmdW5jdGlvbigkY3R4KSB7XG4gICAgICAgIHdoaWxlICh0cnVlKVxuICAgICAgICAgIHN3aXRjaCAoJGN0eC5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoaSA8IHRoaXMuZW50cmllc18ubGVuZ3RoKSA/IDggOiAtMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAga2V5ID0gdGhpcy5lbnRyaWVzX1tpXTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmVudHJpZXNfW2kgKyAxXTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKGtleSA9PT0gZGVsZXRlZFNlbnRpbmVsKSA/IDQgOiA2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgJGN0eC5tYXliZVRocm93KCk7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiAkY3R4LmVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgIH0sICRfXzcsIHRoaXMpO1xuICAgIH0pXG4gIH0sIHt9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcC5wcm90b3R5cGUsIFN5bWJvbC5pdGVyYXRvciwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogTWFwLnByb3RvdHlwZS5lbnRyaWVzXG4gIH0pO1xuICBmdW5jdGlvbiBwb2x5ZmlsbE1hcChnbG9iYWwpIHtcbiAgICB2YXIgJF9fNCA9IGdsb2JhbCxcbiAgICAgICAgT2JqZWN0ID0gJF9fNC5PYmplY3QsXG4gICAgICAgIFN5bWJvbCA9ICRfXzQuU3ltYm9sO1xuICAgIGlmICghZ2xvYmFsLk1hcClcbiAgICAgIGdsb2JhbC5NYXAgPSBNYXA7XG4gICAgdmFyIG1hcFByb3RvdHlwZSA9IGdsb2JhbC5NYXAucHJvdG90eXBlO1xuICAgIGlmIChtYXBQcm90b3R5cGUuZW50cmllcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgZ2xvYmFsLk1hcCA9IE1hcDtcbiAgICBpZiAobWFwUHJvdG90eXBlLmVudHJpZXMpIHtcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IobWFwUHJvdG90eXBlLCBtYXBQcm90b3R5cGUuZW50cmllcywgU3ltYm9sKTtcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBnbG9iYWwuTWFwKCkuZW50cmllcygpKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSwgU3ltYm9sKTtcbiAgICB9XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbE1hcCk7XG4gIHJldHVybiB7XG4gICAgZ2V0IE1hcCgpIHtcbiAgICAgIHJldHVybiBNYXA7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxNYXAoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxNYXA7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTWFwLmpzXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TZXQuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU2V0LmpzXCI7XG4gIHZhciAkX18wID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLFxuICAgICAgaXNPYmplY3QgPSAkX18wLmlzT2JqZWN0LFxuICAgICAgbWF5YmVBZGRJdGVyYXRvciA9ICRfXzAubWF5YmVBZGRJdGVyYXRvcixcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18wLnJlZ2lzdGVyUG9seWZpbGw7XG4gIHZhciBNYXAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTWFwLmpzXCIpLk1hcDtcbiAgdmFyIGdldE93bkhhc2hPYmplY3QgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duSGFzaE9iamVjdDtcbiAgdmFyICRoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIGZ1bmN0aW9uIGluaXRTZXQoc2V0KSB7XG4gICAgc2V0Lm1hcF8gPSBuZXcgTWFwKCk7XG4gIH1cbiAgdmFyIFNldCA9IGZ1bmN0aW9uIFNldCgpIHtcbiAgICB2YXIgaXRlcmFibGUgPSBhcmd1bWVudHNbMF07XG4gICAgaWYgKCFpc09iamVjdCh0aGlzKSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NldCBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHR5cGUnKTtcbiAgICBpZiAoJGhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ21hcF8nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2V0IGNhbiBub3QgYmUgcmVlbnRyYW50bHkgaW5pdGlhbGlzZWQnKTtcbiAgICB9XG4gICAgaW5pdFNldCh0aGlzKTtcbiAgICBpZiAoaXRlcmFibGUgIT09IG51bGwgJiYgaXRlcmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgJF9fNCA9IGl0ZXJhYmxlWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KFN5bWJvbC5pdGVyYXRvcildKCksXG4gICAgICAgICAgJF9fNTsgISgkX181ID0gJF9fNC5uZXh0KCkpLmRvbmU7ICkge1xuICAgICAgICB2YXIgaXRlbSA9ICRfXzUudmFsdWU7XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmFkZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoU2V0LCB7XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBfLnNpemU7XG4gICAgfSxcbiAgICBoYXM6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwXy5oYXMoa2V5KTtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB0aGlzLm1hcF8uc2V0KGtleSwga2V5KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZGVsZXRlOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcF8uZGVsZXRlKGtleSk7XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBfLmNsZWFyKCk7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbihjYWxsYmFja0ZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIHZhciAkX18yID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLm1hcF8uZm9yRWFjaCgoZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICBjYWxsYmFja0ZuLmNhbGwodGhpc0FyZywga2V5LCBrZXksICRfXzIpO1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgdmFsdWVzOiAkdHJhY2V1clJ1bnRpbWUuaW5pdEdlbmVyYXRvckZ1bmN0aW9uKGZ1bmN0aW9uICRfXzcoKSB7XG4gICAgICB2YXIgJF9fOCxcbiAgICAgICAgICAkX185O1xuICAgICAgcmV0dXJuICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZShmdW5jdGlvbigkY3R4KSB7XG4gICAgICAgIHdoaWxlICh0cnVlKVxuICAgICAgICAgIHN3aXRjaCAoJGN0eC5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAkX184ID0gdGhpcy5tYXBfLmtleXMoKVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgICAgICAgICRjdHguc2VudCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgJGN0eC5hY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAkX185ID0gJF9fOFskY3R4LmFjdGlvbl0oJGN0eC5zZW50SWdub3JlVGhyb3cpO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoJF9fOS5kb25lKSA/IDMgOiAyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgJGN0eC5zZW50ID0gJF9fOS52YWx1ZTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IC0yO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICByZXR1cm4gJF9fOS52YWx1ZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiAkY3R4LmVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgIH0sICRfXzcsIHRoaXMpO1xuICAgIH0pLFxuICAgIGVudHJpZXM6ICR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24oZnVuY3Rpb24gJF9fMTAoKSB7XG4gICAgICB2YXIgJF9fMTEsXG4gICAgICAgICAgJF9fMTI7XG4gICAgICByZXR1cm4gJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlKGZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpXG4gICAgICAgICAgc3dpdGNoICgkY3R4LnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICRfXzExID0gdGhpcy5tYXBfLmVudHJpZXMoKVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgICAgICAgICRjdHguc2VudCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgJGN0eC5hY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAkX18xMiA9ICRfXzExWyRjdHguYWN0aW9uXSgkY3R4LnNlbnRJZ25vcmVUaHJvdyk7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA5O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9ICgkX18xMi5kb25lKSA/IDMgOiAyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgJGN0eC5zZW50ID0gJF9fMTIudmFsdWU7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAtMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgcmV0dXJuICRfXzEyLnZhbHVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICRjdHguZW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgfSwgJF9fMTAsIHRoaXMpO1xuICAgIH0pXG4gIH0sIHt9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNldC5wcm90b3R5cGUsIFN5bWJvbC5pdGVyYXRvciwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogU2V0LnByb3RvdHlwZS52YWx1ZXNcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCAna2V5cycsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IFNldC5wcm90b3R5cGUudmFsdWVzXG4gIH0pO1xuICBmdW5jdGlvbiBwb2x5ZmlsbFNldChnbG9iYWwpIHtcbiAgICB2YXIgJF9fNiA9IGdsb2JhbCxcbiAgICAgICAgT2JqZWN0ID0gJF9fNi5PYmplY3QsXG4gICAgICAgIFN5bWJvbCA9ICRfXzYuU3ltYm9sO1xuICAgIGlmICghZ2xvYmFsLlNldClcbiAgICAgIGdsb2JhbC5TZXQgPSBTZXQ7XG4gICAgdmFyIHNldFByb3RvdHlwZSA9IGdsb2JhbC5TZXQucHJvdG90eXBlO1xuICAgIGlmIChzZXRQcm90b3R5cGUudmFsdWVzKSB7XG4gICAgICBtYXliZUFkZEl0ZXJhdG9yKHNldFByb3RvdHlwZSwgc2V0UHJvdG90eXBlLnZhbHVlcywgU3ltYm9sKTtcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBnbG9iYWwuU2V0KCkudmFsdWVzKCkpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LCBTeW1ib2wpO1xuICAgIH1cbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsU2V0KTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgU2V0KCkge1xuICAgICAgcmV0dXJuIFNldDtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbFNldCgpIHtcbiAgICAgIHJldHVybiBwb2x5ZmlsbFNldDtcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TZXQuanNcIiArICcnKTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvbm9kZV9tb2R1bGVzL3JzdnAvbGliL3JzdnAvYXNhcC5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L25vZGVfbW9kdWxlcy9yc3ZwL2xpYi9yc3ZwL2FzYXAuanNcIjtcbiAgdmFyIGxlbiA9IDA7XG4gIGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICAgIHF1ZXVlW2xlbl0gPSBjYWxsYmFjaztcbiAgICBxdWV1ZVtsZW4gKyAxXSA9IGFyZztcbiAgICBsZW4gKz0gMjtcbiAgICBpZiAobGVuID09PSAyKSB7XG4gICAgICBzY2hlZHVsZUZsdXNoKCk7XG4gICAgfVxuICB9XG4gIHZhciAkX19kZWZhdWx0ID0gYXNhcDtcbiAgdmFyIGJyb3dzZXJHbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDoge307XG4gIHZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHZhciBpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG4gIGZ1bmN0aW9uIHVzZU5leHRUaWNrKCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgbm9kZS5kYXRhID0gKGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmbHVzaDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdXNlU2V0VGltZW91dCgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZsdXNoLCAxKTtcbiAgICB9O1xuICB9XG4gIHZhciBxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG4gICAgICB2YXIgYXJnID0gcXVldWVbaSArIDFdO1xuICAgICAgY2FsbGJhY2soYXJnKTtcbiAgICAgIHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgICAgcXVldWVbaSArIDFdID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZW4gPSAwO1xuICB9XG4gIHZhciBzY2hlZHVsZUZsdXNoO1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIHNjaGVkdWxlRmx1c2ggPSB1c2VOZXh0VGljaygpO1xuICB9IGVsc2UgaWYgKEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgfSBlbHNlIGlmIChpc1dvcmtlcikge1xuICAgIHNjaGVkdWxlRmx1c2ggPSB1c2VNZXNzYWdlQ2hhbm5lbCgpO1xuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlRmx1c2ggPSB1c2VTZXRUaW1lb3V0KCk7XG4gIH1cbiAgcmV0dXJuIHtnZXQgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiAkX19kZWZhdWx0O1xuICAgIH19O1xufSk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9Qcm9taXNlLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1Byb21pc2UuanNcIjtcbiAgdmFyIGFzeW5jID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvbm9kZV9tb2R1bGVzL3JzdnAvbGliL3JzdnAvYXNhcC5qc1wiKS5kZWZhdWx0O1xuICB2YXIgcmVnaXN0ZXJQb2x5ZmlsbCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKS5yZWdpc3RlclBvbHlmaWxsO1xuICB2YXIgcHJvbWlzZVJhdyA9IHt9O1xuICBmdW5jdGlvbiBpc1Byb21pc2UoeCkge1xuICAgIHJldHVybiB4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4LnN0YXR1c18gIT09IHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBpZFJlc29sdmVIYW5kbGVyKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICBmdW5jdGlvbiBpZFJlamVjdEhhbmRsZXIoeCkge1xuICAgIHRocm93IHg7XG4gIH1cbiAgZnVuY3Rpb24gY2hhaW4ocHJvbWlzZSkge1xuICAgIHZhciBvblJlc29sdmUgPSBhcmd1bWVudHNbMV0gIT09ICh2b2lkIDApID8gYXJndW1lbnRzWzFdIDogaWRSZXNvbHZlSGFuZGxlcjtcbiAgICB2YXIgb25SZWplY3QgPSBhcmd1bWVudHNbMl0gIT09ICh2b2lkIDApID8gYXJndW1lbnRzWzJdIDogaWRSZWplY3RIYW5kbGVyO1xuICAgIHZhciBkZWZlcnJlZCA9IGdldERlZmVycmVkKHByb21pc2UuY29uc3RydWN0b3IpO1xuICAgIHN3aXRjaCAocHJvbWlzZS5zdGF0dXNfKSB7XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yO1xuICAgICAgY2FzZSAwOlxuICAgICAgICBwcm9taXNlLm9uUmVzb2x2ZV8ucHVzaChvblJlc29sdmUsIGRlZmVycmVkKTtcbiAgICAgICAgcHJvbWlzZS5vblJlamVjdF8ucHVzaChvblJlamVjdCwgZGVmZXJyZWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKzE6XG4gICAgICAgIHByb21pc2VFbnF1ZXVlKHByb21pc2UudmFsdWVfLCBbb25SZXNvbHZlLCBkZWZlcnJlZF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHByb21pc2VFbnF1ZXVlKHByb21pc2UudmFsdWVfLCBbb25SZWplY3QsIGRlZmVycmVkXSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfVxuICBmdW5jdGlvbiBnZXREZWZlcnJlZChDKSB7XG4gICAgaWYgKHRoaXMgPT09ICRQcm9taXNlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHByb21pc2VJbml0KG5ldyAkUHJvbWlzZShwcm9taXNlUmF3KSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICByZXNvbHZlOiAoZnVuY3Rpb24oeCkge1xuICAgICAgICAgIHByb21pc2VSZXNvbHZlKHByb21pc2UsIHgpO1xuICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0OiAoZnVuY3Rpb24ocikge1xuICAgICAgICAgIHByb21pc2VSZWplY3QocHJvbWlzZSwgcik7XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICByZXN1bHQucHJvbWlzZSA9IG5ldyBDKChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVzdWx0LnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICByZXN1bHQucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHJvbWlzZVNldChwcm9taXNlLCBzdGF0dXMsIHZhbHVlLCBvblJlc29sdmUsIG9uUmVqZWN0KSB7XG4gICAgcHJvbWlzZS5zdGF0dXNfID0gc3RhdHVzO1xuICAgIHByb21pc2UudmFsdWVfID0gdmFsdWU7XG4gICAgcHJvbWlzZS5vblJlc29sdmVfID0gb25SZXNvbHZlO1xuICAgIHByb21pc2Uub25SZWplY3RfID0gb25SZWplY3Q7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cbiAgZnVuY3Rpb24gcHJvbWlzZUluaXQocHJvbWlzZSkge1xuICAgIHJldHVybiBwcm9taXNlU2V0KHByb21pc2UsIDAsIHVuZGVmaW5lZCwgW10sIFtdKTtcbiAgfVxuICB2YXIgUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICBpZiAocmVzb2x2ZXIgPT09IHByb21pc2VSYXcpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3I7XG4gICAgdmFyIHByb21pc2UgPSBwcm9taXNlSW5pdCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgcmVzb2x2ZXIoKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUocHJvbWlzZSwgeCk7XG4gICAgICB9KSwgKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChwcm9taXNlLCByKTtcbiAgICAgIH0pKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgfTtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoUHJvbWlzZSwge1xuICAgIGNhdGNoOiBmdW5jdGlvbihvblJlamVjdCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0KTtcbiAgICB9LFxuICAgIHRoZW46IGZ1bmN0aW9uKG9uUmVzb2x2ZSwgb25SZWplY3QpIHtcbiAgICAgIGlmICh0eXBlb2Ygb25SZXNvbHZlICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICBvblJlc29sdmUgPSBpZFJlc29sdmVIYW5kbGVyO1xuICAgICAgaWYgKHR5cGVvZiBvblJlamVjdCAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgb25SZWplY3QgPSBpZFJlamVjdEhhbmRsZXI7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgcmV0dXJuIGNoYWluKHRoaXMsIGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgeCA9IHByb21pc2VDb2VyY2UoY29uc3RydWN0b3IsIHgpO1xuICAgICAgICByZXR1cm4geCA9PT0gdGhhdCA/IG9uUmVqZWN0KG5ldyBUeXBlRXJyb3IpIDogaXNQcm9taXNlKHgpID8geC50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpIDogb25SZXNvbHZlKHgpO1xuICAgICAgfSwgb25SZWplY3QpO1xuICAgIH1cbiAgfSwge1xuICAgIHJlc29sdmU6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICh0aGlzID09PSAkUHJvbWlzZSkge1xuICAgICAgICBpZiAoaXNQcm9taXNlKHgpKSB7XG4gICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2VTZXQobmV3ICRQcm9taXNlKHByb21pc2VSYXcpLCArMSwgeCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgcmVzb2x2ZSh4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZWplY3Q6IGZ1bmN0aW9uKHIpIHtcbiAgICAgIGlmICh0aGlzID09PSAkUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVNldChuZXcgJFByb21pc2UocHJvbWlzZVJhdyksIC0xLCByKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcygoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgcmVqZWN0KHIpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbGw6IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgdmFyIGRlZmVycmVkID0gZ2V0RGVmZXJyZWQodGhpcyk7XG4gICAgICB2YXIgcmVzb2x1dGlvbnMgPSBbXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzb2x1dGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmUodmFsdWVzW2ldKS50aGVuKGZ1bmN0aW9uKGksIHgpIHtcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbnNbaV0gPSB4O1xuICAgICAgICAgICAgICBpZiAoLS1jb3VudCA9PT0gMClcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc29sdXRpb25zKTtcbiAgICAgICAgICAgIH0uYmluZCh1bmRlZmluZWQsIGkpLCAoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3Qocik7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH0sXG4gICAgcmFjZTogZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSBnZXREZWZlcnJlZCh0aGlzKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlc1tpXSkudGhlbigoZnVuY3Rpb24oeCkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh4KTtcbiAgICAgICAgICB9KSwgKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyKTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuICB9KTtcbiAgdmFyICRQcm9taXNlID0gUHJvbWlzZTtcbiAgdmFyICRQcm9taXNlUmVqZWN0ID0gJFByb21pc2UucmVqZWN0O1xuICBmdW5jdGlvbiBwcm9taXNlUmVzb2x2ZShwcm9taXNlLCB4KSB7XG4gICAgcHJvbWlzZURvbmUocHJvbWlzZSwgKzEsIHgsIHByb21pc2Uub25SZXNvbHZlXyk7XG4gIH1cbiAgZnVuY3Rpb24gcHJvbWlzZVJlamVjdChwcm9taXNlLCByKSB7XG4gICAgcHJvbWlzZURvbmUocHJvbWlzZSwgLTEsIHIsIHByb21pc2Uub25SZWplY3RfKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlRG9uZShwcm9taXNlLCBzdGF0dXMsIHZhbHVlLCByZWFjdGlvbnMpIHtcbiAgICBpZiAocHJvbWlzZS5zdGF0dXNfICE9PSAwKVxuICAgICAgcmV0dXJuO1xuICAgIHByb21pc2VFbnF1ZXVlKHZhbHVlLCByZWFjdGlvbnMpO1xuICAgIHByb21pc2VTZXQocHJvbWlzZSwgc3RhdHVzLCB2YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gcHJvbWlzZUVucXVldWUodmFsdWUsIHRhc2tzKSB7XG4gICAgYXN5bmMoKGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBwcm9taXNlSGFuZGxlKHZhbHVlLCB0YXNrc1tpXSwgdGFza3NbaSArIDFdKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cbiAgZnVuY3Rpb24gcHJvbWlzZUhhbmRsZSh2YWx1ZSwgaGFuZGxlciwgZGVmZXJyZWQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZGVmZXJyZWQucHJvbWlzZSlcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcjtcbiAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZShyZXN1bHQpKVxuICAgICAgICBjaGFpbihyZXN1bHQsIGRlZmVycmVkLnJlc29sdmUsIGRlZmVycmVkLnJlamVjdCk7XG4gICAgICBlbHNlXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuICB2YXIgdGhlbmFibGVTeW1ib2wgPSAnQEB0aGVuYWJsZSc7XG4gIGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAmJiAodHlwZW9mIHggPT09ICdvYmplY3QnIHx8IHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlQ29lcmNlKGNvbnN0cnVjdG9yLCB4KSB7XG4gICAgaWYgKCFpc1Byb21pc2UoeCkgJiYgaXNPYmplY3QoeCkpIHtcbiAgICAgIHZhciB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhlbiA9IHgudGhlbjtcbiAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZVJlamVjdC5jYWxsKGNvbnN0cnVjdG9yLCByKTtcbiAgICAgICAgeFt0aGVuYWJsZVN5bWJvbF0gPSBwcm9taXNlO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgcCA9IHhbdGhlbmFibGVTeW1ib2xdO1xuICAgICAgICBpZiAocCkge1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBkZWZlcnJlZCA9IGdldERlZmVycmVkKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICB4W3RoZW5hYmxlU3ltYm9sXSA9IGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoZW4uY2FsbCh4LCBkZWZlcnJlZC5yZXNvbHZlLCBkZWZlcnJlZC5yZWplY3QpO1xuICAgICAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxQcm9taXNlKGdsb2JhbCkge1xuICAgIGlmICghZ2xvYmFsLlByb21pc2UpXG4gICAgICBnbG9iYWwuUHJvbWlzZSA9IFByb21pc2U7XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbFByb21pc2UpO1xuICByZXR1cm4ge1xuICAgIGdldCBQcm9taXNlKCkge1xuICAgICAgcmV0dXJuIFByb21pc2U7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxQcm9taXNlKCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsUHJvbWlzZTtcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9Qcm9taXNlLmpzXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TdHJpbmdJdGVyYXRvci5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgJF9fMjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU3RyaW5nSXRlcmF0b3IuanNcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiksXG4gICAgICBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCA9ICRfXzAuY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QsXG4gICAgICBpc09iamVjdCA9ICRfXzAuaXNPYmplY3Q7XG4gIHZhciB0b1Byb3BlcnR5ID0gJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciBpdGVyYXRlZFN0cmluZyA9IFN5bWJvbCgnaXRlcmF0ZWRTdHJpbmcnKTtcbiAgdmFyIHN0cmluZ0l0ZXJhdG9yTmV4dEluZGV4ID0gU3ltYm9sKCdzdHJpbmdJdGVyYXRvck5leHRJbmRleCcpO1xuICB2YXIgU3RyaW5nSXRlcmF0b3IgPSBmdW5jdGlvbiBTdHJpbmdJdGVyYXRvcigpIHt9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShTdHJpbmdJdGVyYXRvciwgKCRfXzIgPSB7fSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCRfXzIsIFwibmV4dFwiLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgaWYgKCFpc09iamVjdChvKSB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvLCBpdGVyYXRlZFN0cmluZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGhpcyBtdXN0IGJlIGEgU3RyaW5nSXRlcmF0b3Igb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgICB2YXIgcyA9IG9bdG9Qcm9wZXJ0eShpdGVyYXRlZFN0cmluZyldO1xuICAgICAgaWYgKHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBwb3NpdGlvbiA9IG9bdG9Qcm9wZXJ0eShzdHJpbmdJdGVyYXRvck5leHRJbmRleCldO1xuICAgICAgdmFyIGxlbiA9IHMubGVuZ3RoO1xuICAgICAgaWYgKHBvc2l0aW9uID49IGxlbikge1xuICAgICAgICBvW3RvUHJvcGVydHkoaXRlcmF0ZWRTdHJpbmcpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgZmlyc3QgPSBzLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgICAgdmFyIHJlc3VsdFN0cmluZztcbiAgICAgIGlmIChmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IGxlbikge1xuICAgICAgICByZXN1bHRTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGZpcnN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzZWNvbmQgPSBzLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKTtcbiAgICAgICAgaWYgKHNlY29uZCA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkYpIHtcbiAgICAgICAgICByZXN1bHRTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGZpcnN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGZpcnN0KSArIFN0cmluZy5mcm9tQ2hhckNvZGUoc2Vjb25kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb1t0b1Byb3BlcnR5KHN0cmluZ0l0ZXJhdG9yTmV4dEluZGV4KV0gPSBwb3NpdGlvbiArIHJlc3VsdFN0cmluZy5sZW5ndGg7XG4gICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QocmVzdWx0U3RyaW5nLCBmYWxzZSk7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCRfXzIsIFN5bWJvbC5pdGVyYXRvciwge1xuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSksICRfXzIpLCB7fSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0l0ZXJhdG9yKHN0cmluZykge1xuICAgIHZhciBzID0gU3RyaW5nKHN0cmluZyk7XG4gICAgdmFyIGl0ZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShTdHJpbmdJdGVyYXRvci5wcm90b3R5cGUpO1xuICAgIGl0ZXJhdG9yW3RvUHJvcGVydHkoaXRlcmF0ZWRTdHJpbmcpXSA9IHM7XG4gICAgaXRlcmF0b3JbdG9Qcm9wZXJ0eShzdHJpbmdJdGVyYXRvck5leHRJbmRleCldID0gMDtcbiAgICByZXR1cm4gaXRlcmF0b3I7XG4gIH1cbiAgcmV0dXJuIHtnZXQgY3JlYXRlU3RyaW5nSXRlcmF0b3IoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU3RyaW5nSXRlcmF0b3I7XG4gICAgfX07XG59KTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZy5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TdHJpbmcuanNcIjtcbiAgdmFyIGNyZWF0ZVN0cmluZ0l0ZXJhdG9yID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZ0l0ZXJhdG9yLmpzXCIpLmNyZWF0ZVN0cmluZ0l0ZXJhdG9yO1xuICB2YXIgJF9fMSA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKSxcbiAgICAgIG1heWJlQWRkRnVuY3Rpb25zID0gJF9fMS5tYXliZUFkZEZ1bmN0aW9ucyxcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IgPSAkX18xLm1heWJlQWRkSXRlcmF0b3IsXG4gICAgICByZWdpc3RlclBvbHlmaWxsID0gJF9fMS5yZWdpc3RlclBvbHlmaWxsO1xuICB2YXIgJHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyICRpbmRleE9mID0gU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mO1xuICB2YXIgJGxhc3RJbmRleE9mID0gU3RyaW5nLnByb3RvdHlwZS5sYXN0SW5kZXhPZjtcbiAgZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2gpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgIGlmICh0aGlzID09IG51bGwgfHwgJHRvU3RyaW5nLmNhbGwoc2VhcmNoKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIHZhciBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICAgIHZhciBzZWFyY2hTdHJpbmcgPSBTdHJpbmcoc2VhcmNoKTtcbiAgICB2YXIgc2VhcmNoTGVuZ3RoID0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgcG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgcG9zID0gcG9zaXRpb24gPyBOdW1iZXIocG9zaXRpb24pIDogMDtcbiAgICBpZiAoaXNOYU4ocG9zKSkge1xuICAgICAgcG9zID0gMDtcbiAgICB9XG4gICAgdmFyIHN0YXJ0ID0gTWF0aC5taW4oTWF0aC5tYXgocG9zLCAwKSwgc3RyaW5nTGVuZ3RoKTtcbiAgICByZXR1cm4gJGluZGV4T2YuY2FsbChzdHJpbmcsIHNlYXJjaFN0cmluZywgcG9zKSA9PSBzdGFydDtcbiAgfVxuICBmdW5jdGlvbiBlbmRzV2l0aChzZWFyY2gpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgIGlmICh0aGlzID09IG51bGwgfHwgJHRvU3RyaW5nLmNhbGwoc2VhcmNoKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIHZhciBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICAgIHZhciBzZWFyY2hTdHJpbmcgPSBTdHJpbmcoc2VhcmNoKTtcbiAgICB2YXIgc2VhcmNoTGVuZ3RoID0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgcG9zID0gc3RyaW5nTGVuZ3RoO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKHBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9zID0gcG9zaXRpb24gPyBOdW1iZXIocG9zaXRpb24pIDogMDtcbiAgICAgICAgaWYgKGlzTmFOKHBvcykpIHtcbiAgICAgICAgICBwb3MgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBlbmQgPSBNYXRoLm1pbihNYXRoLm1heChwb3MsIDApLCBzdHJpbmdMZW5ndGgpO1xuICAgIHZhciBzdGFydCA9IGVuZCAtIHNlYXJjaExlbmd0aDtcbiAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAkbGFzdEluZGV4T2YuY2FsbChzdHJpbmcsIHNlYXJjaFN0cmluZywgc3RhcnQpID09IHN0YXJ0O1xuICB9XG4gIGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaCkge1xuICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgIGlmIChzZWFyY2ggJiYgJHRvU3RyaW5nLmNhbGwoc2VhcmNoKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIHZhciBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICAgIHZhciBzZWFyY2hTdHJpbmcgPSBTdHJpbmcoc2VhcmNoKTtcbiAgICB2YXIgc2VhcmNoTGVuZ3RoID0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgcG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgcG9zID0gcG9zaXRpb24gPyBOdW1iZXIocG9zaXRpb24pIDogMDtcbiAgICBpZiAocG9zICE9IHBvcykge1xuICAgICAgcG9zID0gMDtcbiAgICB9XG4gICAgdmFyIHN0YXJ0ID0gTWF0aC5taW4oTWF0aC5tYXgocG9zLCAwKSwgc3RyaW5nTGVuZ3RoKTtcbiAgICBpZiAoc2VhcmNoTGVuZ3RoICsgc3RhcnQgPiBzdHJpbmdMZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICRpbmRleE9mLmNhbGwoc3RyaW5nLCBzZWFyY2hTdHJpbmcsIHBvcykgIT0gLTE7XG4gIH1cbiAgZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgdmFyIG4gPSBjb3VudCA/IE51bWJlcihjb3VudCkgOiAwO1xuICAgIGlmIChpc05hTihuKSkge1xuICAgICAgbiA9IDA7XG4gICAgfVxuICAgIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB7XG4gICAgICB0aHJvdyBSYW5nZUVycm9yKCk7XG4gICAgfVxuICAgIGlmIChuID09IDApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHdoaWxlIChuLS0pIHtcbiAgICAgIHJlc3VsdCArPSBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gY29kZVBvaW50QXQocG9zaXRpb24pIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICB2YXIgc2l6ZSA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGluZGV4ID0gcG9zaXRpb24gPyBOdW1iZXIocG9zaXRpb24pIDogMDtcbiAgICBpZiAoaXNOYU4oaW5kZXgpKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gc2l6ZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFyIGZpcnN0ID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIHZhciBzZWNvbmQ7XG4gICAgaWYgKGZpcnN0ID49IDB4RDgwMCAmJiBmaXJzdCA8PSAweERCRkYgJiYgc2l6ZSA+IGluZGV4ICsgMSkge1xuICAgICAgc2Vjb25kID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcbiAgICAgIGlmIChzZWNvbmQgPj0gMHhEQzAwICYmIHNlY29uZCA8PSAweERGRkYpIHtcbiAgICAgICAgcmV0dXJuIChmaXJzdCAtIDB4RDgwMCkgKiAweDQwMCArIHNlY29uZCAtIDB4REMwMCArIDB4MTAwMDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaXJzdDtcbiAgfVxuICBmdW5jdGlvbiByYXcoY2FsbHNpdGUpIHtcbiAgICB2YXIgcmF3ID0gY2FsbHNpdGUucmF3O1xuICAgIHZhciBsZW4gPSByYXcubGVuZ3RoID4+PiAwO1xuICAgIGlmIChsZW4gPT09IDApXG4gICAgICByZXR1cm4gJyc7XG4gICAgdmFyIHMgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHMgKz0gcmF3W2ldO1xuICAgICAgaWYgKGkgKyAxID09PSBsZW4pXG4gICAgICAgIHJldHVybiBzO1xuICAgICAgcyArPSBhcmd1bWVudHNbKytpXTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZnJvbUNvZGVQb2ludCgpIHtcbiAgICB2YXIgY29kZVVuaXRzID0gW107XG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgaGlnaFN1cnJvZ2F0ZTtcbiAgICB2YXIgbG93U3Vycm9nYXRlO1xuICAgIHZhciBpbmRleCA9IC0xO1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pO1xuICAgICAgaWYgKCFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IGNvZGVQb2ludCA8IDAgfHwgY29kZVBvaW50ID4gMHgxMEZGRkYgfHwgZmxvb3IoY29kZVBvaW50KSAhPSBjb2RlUG9pbnQpIHtcbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCBjb2RlIHBvaW50OiAnICsgY29kZVBvaW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhGRkZGKSB7XG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgaGlnaFN1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgPj4gMTApICsgMHhEODAwO1xuICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhEQzAwO1xuICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpO1xuICB9XG4gIGZ1bmN0aW9uIHN0cmluZ1Byb3RvdHlwZUl0ZXJhdG9yKCkge1xuICAgIHZhciBvID0gJHRyYWNldXJSdW50aW1lLmNoZWNrT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgIHZhciBzID0gU3RyaW5nKG8pO1xuICAgIHJldHVybiBjcmVhdGVTdHJpbmdJdGVyYXRvcihzKTtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbFN0cmluZyhnbG9iYWwpIHtcbiAgICB2YXIgU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcbiAgICBtYXliZUFkZEZ1bmN0aW9ucyhTdHJpbmcucHJvdG90eXBlLCBbJ2NvZGVQb2ludEF0JywgY29kZVBvaW50QXQsICdlbmRzV2l0aCcsIGVuZHNXaXRoLCAnaW5jbHVkZXMnLCBpbmNsdWRlcywgJ3JlcGVhdCcsIHJlcGVhdCwgJ3N0YXJ0c1dpdGgnLCBzdGFydHNXaXRoXSk7XG4gICAgbWF5YmVBZGRGdW5jdGlvbnMoU3RyaW5nLCBbJ2Zyb21Db2RlUG9pbnQnLCBmcm9tQ29kZVBvaW50LCAncmF3JywgcmF3XSk7XG4gICAgbWF5YmVBZGRJdGVyYXRvcihTdHJpbmcucHJvdG90eXBlLCBzdHJpbmdQcm90b3R5cGVJdGVyYXRvciwgU3ltYm9sKTtcbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsU3RyaW5nKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgc3RhcnRzV2l0aCgpIHtcbiAgICAgIHJldHVybiBzdGFydHNXaXRoO1xuICAgIH0sXG4gICAgZ2V0IGVuZHNXaXRoKCkge1xuICAgICAgcmV0dXJuIGVuZHNXaXRoO1xuICAgIH0sXG4gICAgZ2V0IGluY2x1ZGVzKCkge1xuICAgICAgcmV0dXJuIGluY2x1ZGVzO1xuICAgIH0sXG4gICAgZ2V0IHJlcGVhdCgpIHtcbiAgICAgIHJldHVybiByZXBlYXQ7XG4gICAgfSxcbiAgICBnZXQgY29kZVBvaW50QXQoKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50QXQ7XG4gICAgfSxcbiAgICBnZXQgcmF3KCkge1xuICAgICAgcmV0dXJuIHJhdztcbiAgICB9LFxuICAgIGdldCBmcm9tQ29kZVBvaW50KCkge1xuICAgICAgcmV0dXJuIGZyb21Db2RlUG9pbnQ7XG4gICAgfSxcbiAgICBnZXQgc3RyaW5nUHJvdG90eXBlSXRlcmF0b3IoKSB7XG4gICAgICByZXR1cm4gc3RyaW5nUHJvdG90eXBlSXRlcmF0b3I7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxTdHJpbmcoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxTdHJpbmc7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU3RyaW5nLmpzXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9BcnJheUl0ZXJhdG9yLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciAkX18yO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9BcnJheUl0ZXJhdG9yLmpzXCI7XG4gIHZhciAkX18wID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLFxuICAgICAgdG9PYmplY3QgPSAkX18wLnRvT2JqZWN0LFxuICAgICAgdG9VaW50MzIgPSAkX18wLnRvVWludDMyLFxuICAgICAgY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QgPSAkX18wLmNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0O1xuICB2YXIgQVJSQVlfSVRFUkFUT1JfS0lORF9LRVlTID0gMTtcbiAgdmFyIEFSUkFZX0lURVJBVE9SX0tJTkRfVkFMVUVTID0gMjtcbiAgdmFyIEFSUkFZX0lURVJBVE9SX0tJTkRfRU5UUklFUyA9IDM7XG4gIHZhciBBcnJheUl0ZXJhdG9yID0gZnVuY3Rpb24gQXJyYXlJdGVyYXRvcigpIHt9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShBcnJheUl0ZXJhdG9yLCAoJF9fMiA9IHt9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoJF9fMiwgXCJuZXh0XCIsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0b09iamVjdCh0aGlzKTtcbiAgICAgIHZhciBhcnJheSA9IGl0ZXJhdG9yLml0ZXJhdG9yT2JqZWN0XztcbiAgICAgIGlmICghYXJyYXkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0IGlzIG5vdCBhbiBBcnJheUl0ZXJhdG9yJyk7XG4gICAgICB9XG4gICAgICB2YXIgaW5kZXggPSBpdGVyYXRvci5hcnJheUl0ZXJhdG9yTmV4dEluZGV4XztcbiAgICAgIHZhciBpdGVtS2luZCA9IGl0ZXJhdG9yLmFycmF5SXRlcmF0aW9uS2luZF87XG4gICAgICB2YXIgbGVuZ3RoID0gdG9VaW50MzIoYXJyYXkubGVuZ3RoKTtcbiAgICAgIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgaXRlcmF0b3IuYXJyYXlJdGVyYXRvck5leHRJbmRleF8gPSBJbmZpbml0eTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpdGVyYXRvci5hcnJheUl0ZXJhdG9yTmV4dEluZGV4XyA9IGluZGV4ICsgMTtcbiAgICAgIGlmIChpdGVtS2luZCA9PSBBUlJBWV9JVEVSQVRPUl9LSU5EX1ZBTFVFUylcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KGFycmF5W2luZGV4XSwgZmFsc2UpO1xuICAgICAgaWYgKGl0ZW1LaW5kID09IEFSUkFZX0lURVJBVE9SX0tJTkRfRU5UUklFUylcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KFtpbmRleCwgYXJyYXlbaW5kZXhdXSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KGluZGV4LCBmYWxzZSk7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCRfXzIsIFN5bWJvbC5pdGVyYXRvciwge1xuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSksICRfXzIpLCB7fSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5SXRlcmF0b3IoYXJyYXksIGtpbmQpIHtcbiAgICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoYXJyYXkpO1xuICAgIHZhciBpdGVyYXRvciA9IG5ldyBBcnJheUl0ZXJhdG9yO1xuICAgIGl0ZXJhdG9yLml0ZXJhdG9yT2JqZWN0XyA9IG9iamVjdDtcbiAgICBpdGVyYXRvci5hcnJheUl0ZXJhdG9yTmV4dEluZGV4XyA9IDA7XG4gICAgaXRlcmF0b3IuYXJyYXlJdGVyYXRpb25LaW5kXyA9IGtpbmQ7XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xuICB9XG4gIGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFycmF5SXRlcmF0b3IodGhpcywgQVJSQVlfSVRFUkFUT1JfS0lORF9FTlRSSUVTKTtcbiAgfVxuICBmdW5jdGlvbiBrZXlzKCkge1xuICAgIHJldHVybiBjcmVhdGVBcnJheUl0ZXJhdG9yKHRoaXMsIEFSUkFZX0lURVJBVE9SX0tJTkRfS0VZUyk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgIHJldHVybiBjcmVhdGVBcnJheUl0ZXJhdG9yKHRoaXMsIEFSUkFZX0lURVJBVE9SX0tJTkRfVkFMVUVTKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGdldCBlbnRyaWVzKCkge1xuICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgfSxcbiAgICBnZXQga2V5cygpIHtcbiAgICAgIHJldHVybiBrZXlzO1xuICAgIH0sXG4gICAgZ2V0IHZhbHVlcygpIHtcbiAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9BcnJheS5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9BcnJheS5qc1wiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9BcnJheUl0ZXJhdG9yLmpzXCIpLFxuICAgICAgZW50cmllcyA9ICRfXzAuZW50cmllcyxcbiAgICAgIGtleXMgPSAkX18wLmtleXMsXG4gICAgICB2YWx1ZXMgPSAkX18wLnZhbHVlcztcbiAgdmFyICRfXzEgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiksXG4gICAgICBjaGVja0l0ZXJhYmxlID0gJF9fMS5jaGVja0l0ZXJhYmxlLFxuICAgICAgaXNDYWxsYWJsZSA9ICRfXzEuaXNDYWxsYWJsZSxcbiAgICAgIGlzQ29uc3RydWN0b3IgPSAkX18xLmlzQ29uc3RydWN0b3IsXG4gICAgICBtYXliZUFkZEZ1bmN0aW9ucyA9ICRfXzEubWF5YmVBZGRGdW5jdGlvbnMsXG4gICAgICBtYXliZUFkZEl0ZXJhdG9yID0gJF9fMS5tYXliZUFkZEl0ZXJhdG9yLFxuICAgICAgcmVnaXN0ZXJQb2x5ZmlsbCA9ICRfXzEucmVnaXN0ZXJQb2x5ZmlsbCxcbiAgICAgIHRvSW50ZWdlciA9ICRfXzEudG9JbnRlZ2VyLFxuICAgICAgdG9MZW5ndGggPSAkX18xLnRvTGVuZ3RoLFxuICAgICAgdG9PYmplY3QgPSAkX18xLnRvT2JqZWN0O1xuICBmdW5jdGlvbiBmcm9tKGFyckxpa2UpIHtcbiAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHNbMV07XG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMl07XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBpdGVtcyA9IHRvT2JqZWN0KGFyckxpa2UpO1xuICAgIHZhciBtYXBwaW5nID0gbWFwRm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgayA9IDA7XG4gICAgdmFyIGFycixcbiAgICAgICAgbGVuO1xuICAgIGlmIChtYXBwaW5nICYmICFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIGlmIChjaGVja0l0ZXJhYmxlKGl0ZW1zKSkge1xuICAgICAgYXJyID0gaXNDb25zdHJ1Y3RvcihDKSA/IG5ldyBDKCkgOiBbXTtcbiAgICAgIGZvciAodmFyICRfXzIgPSBpdGVtc1skdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eShTeW1ib2wuaXRlcmF0b3IpXSgpLFxuICAgICAgICAgICRfXzM7ICEoJF9fMyA9ICRfXzIubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgdmFyIGl0ZW0gPSAkX18zLnZhbHVlO1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgICAgICAgIGFycltrXSA9IG1hcEZuLmNhbGwodGhpc0FyZywgaXRlbSwgayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycltrXSA9IGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGsrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJyLmxlbmd0aCA9IGs7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpO1xuICAgIGFyciA9IGlzQ29uc3RydWN0b3IoQykgPyBuZXcgQyhsZW4pIDogbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICg7IGsgPCBsZW47IGsrKykge1xuICAgICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgICAgYXJyW2tdID0gdHlwZW9mIHRoaXNBcmcgPT09ICd1bmRlZmluZWQnID8gbWFwRm4oaXRlbXNba10sIGspIDogbWFwRm4uY2FsbCh0aGlzQXJnLCBpdGVtc1trXSwgayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJba10gPSBpdGVtc1trXTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXJyLmxlbmd0aCA9IGxlbjtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGZ1bmN0aW9uIG9mKCkge1xuICAgIGZvciAodmFyIGl0ZW1zID0gW10sXG4gICAgICAgICRfXzQgPSAwOyAkX180IDwgYXJndW1lbnRzLmxlbmd0aDsgJF9fNCsrKVxuICAgICAgaXRlbXNbJF9fNF0gPSBhcmd1bWVudHNbJF9fNF07XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBsZW4gPSBpdGVtcy5sZW5ndGg7XG4gICAgdmFyIGFyciA9IGlzQ29uc3RydWN0b3IoQykgPyBuZXcgQyhsZW4pIDogbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBsZW47IGsrKykge1xuICAgICAgYXJyW2tdID0gaXRlbXNba107XG4gICAgfVxuICAgIGFyci5sZW5ndGggPSBsZW47XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBmdW5jdGlvbiBmaWxsKHZhbHVlKSB7XG4gICAgdmFyIHN0YXJ0ID0gYXJndW1lbnRzWzFdICE9PSAodm9pZCAwKSA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gICAgdmFyIGVuZCA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgb2JqZWN0ID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKG9iamVjdC5sZW5ndGgpO1xuICAgIHZhciBmaWxsU3RhcnQgPSB0b0ludGVnZXIoc3RhcnQpO1xuICAgIHZhciBmaWxsRW5kID0gZW5kICE9PSB1bmRlZmluZWQgPyB0b0ludGVnZXIoZW5kKSA6IGxlbjtcbiAgICBmaWxsU3RhcnQgPSBmaWxsU3RhcnQgPCAwID8gTWF0aC5tYXgobGVuICsgZmlsbFN0YXJ0LCAwKSA6IE1hdGgubWluKGZpbGxTdGFydCwgbGVuKTtcbiAgICBmaWxsRW5kID0gZmlsbEVuZCA8IDAgPyBNYXRoLm1heChsZW4gKyBmaWxsRW5kLCAwKSA6IE1hdGgubWluKGZpbGxFbmQsIGxlbik7XG4gICAgd2hpbGUgKGZpbGxTdGFydCA8IGZpbGxFbmQpIHtcbiAgICAgIG9iamVjdFtmaWxsU3RhcnRdID0gdmFsdWU7XG4gICAgICBmaWxsU3RhcnQrKztcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBmaW5kSGVscGVyKHRoaXMsIHByZWRpY2F0ZSwgdGhpc0FyZyk7XG4gIH1cbiAgZnVuY3Rpb24gZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBmaW5kSGVscGVyKHRoaXMsIHByZWRpY2F0ZSwgdGhpc0FyZywgdHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gZmluZEhlbHBlcihzZWxmLCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgcmV0dXJuSW5kZXggPSBhcmd1bWVudHNbM10gIT09ICh2b2lkIDApID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG4gICAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KHNlbGYpO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aChvYmplY3QubGVuZ3RoKTtcbiAgICBpZiAoIWlzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9iamVjdFtpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaSwgb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gcmV0dXJuSW5kZXggPyBpIDogdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5JbmRleCA/IC0xIDogdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsQXJyYXkoZ2xvYmFsKSB7XG4gICAgdmFyICRfXzUgPSBnbG9iYWwsXG4gICAgICAgIEFycmF5ID0gJF9fNS5BcnJheSxcbiAgICAgICAgT2JqZWN0ID0gJF9fNS5PYmplY3QsXG4gICAgICAgIFN5bWJvbCA9ICRfXzUuU3ltYm9sO1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKEFycmF5LnByb3RvdHlwZSwgWydlbnRyaWVzJywgZW50cmllcywgJ2tleXMnLCBrZXlzLCAndmFsdWVzJywgdmFsdWVzLCAnZmlsbCcsIGZpbGwsICdmaW5kJywgZmluZCwgJ2ZpbmRJbmRleCcsIGZpbmRJbmRleF0pO1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKEFycmF5LCBbJ2Zyb20nLCBmcm9tLCAnb2YnLCBvZl0pO1xuICAgIG1heWJlQWRkSXRlcmF0b3IoQXJyYXkucHJvdG90eXBlLCB2YWx1ZXMsIFN5bWJvbCk7XG4gICAgbWF5YmVBZGRJdGVyYXRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YoW10udmFsdWVzKCkpLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIFN5bWJvbCk7XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbEFycmF5KTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgZnJvbSgpIHtcbiAgICAgIHJldHVybiBmcm9tO1xuICAgIH0sXG4gICAgZ2V0IG9mKCkge1xuICAgICAgcmV0dXJuIG9mO1xuICAgIH0sXG4gICAgZ2V0IGZpbGwoKSB7XG4gICAgICByZXR1cm4gZmlsbDtcbiAgICB9LFxuICAgIGdldCBmaW5kKCkge1xuICAgICAgcmV0dXJuIGZpbmQ7XG4gICAgfSxcbiAgICBnZXQgZmluZEluZGV4KCkge1xuICAgICAgcmV0dXJuIGZpbmRJbmRleDtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbEFycmF5KCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsQXJyYXk7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXkuanNcIiArICcnKTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL09iamVjdC5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9PYmplY3QuanNcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiksXG4gICAgICBtYXliZUFkZEZ1bmN0aW9ucyA9ICRfXzAubWF5YmVBZGRGdW5jdGlvbnMsXG4gICAgICByZWdpc3RlclBvbHlmaWxsID0gJF9fMC5yZWdpc3RlclBvbHlmaWxsO1xuICB2YXIgJF9fMSA9ICR0cmFjZXVyUnVudGltZSxcbiAgICAgIGRlZmluZVByb3BlcnR5ID0gJF9fMS5kZWZpbmVQcm9wZXJ0eSxcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9ICRfXzEuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICAgZ2V0T3duUHJvcGVydHlOYW1lcyA9ICRfXzEuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICAgIGlzUHJpdmF0ZU5hbWUgPSAkX18xLmlzUHJpdmF0ZU5hbWUsXG4gICAgICBrZXlzID0gJF9fMS5rZXlzO1xuICBmdW5jdGlvbiBpcyhsZWZ0LCByaWdodCkge1xuICAgIGlmIChsZWZ0ID09PSByaWdodClcbiAgICAgIHJldHVybiBsZWZ0ICE9PSAwIHx8IDEgLyBsZWZ0ID09PSAxIC8gcmlnaHQ7XG4gICAgcmV0dXJuIGxlZnQgIT09IGxlZnQgJiYgcmlnaHQgIT09IHJpZ2h0O1xuICB9XG4gIGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHZhciBwcm9wcyA9IHNvdXJjZSA9PSBudWxsID8gW10gOiBrZXlzKHNvdXJjZSk7XG4gICAgICB2YXIgcCxcbiAgICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG4gICAgICBmb3IgKHAgPSAwOyBwIDwgbGVuZ3RoOyBwKyspIHtcbiAgICAgICAgdmFyIG5hbWUgPSBwcm9wc1twXTtcbiAgICAgICAgaWYgKGlzUHJpdmF0ZU5hbWUobmFtZSkpXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IHNvdXJjZVtuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBmdW5jdGlvbiBtaXhpbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciBwcm9wcyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlKTtcbiAgICB2YXIgcCxcbiAgICAgICAgZGVzY3JpcHRvcixcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuICAgIGZvciAocCA9IDA7IHAgPCBsZW5ndGg7IHArKykge1xuICAgICAgdmFyIG5hbWUgPSBwcm9wc1twXTtcbiAgICAgIGlmIChpc1ByaXZhdGVOYW1lKG5hbWUpKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBwcm9wc1twXSk7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BzW3BdLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbE9iamVjdChnbG9iYWwpIHtcbiAgICB2YXIgT2JqZWN0ID0gZ2xvYmFsLk9iamVjdDtcbiAgICBtYXliZUFkZEZ1bmN0aW9ucyhPYmplY3QsIFsnYXNzaWduJywgYXNzaWduLCAnaXMnLCBpcywgJ21peGluJywgbWl4aW5dKTtcbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsT2JqZWN0KTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgaXMoKSB7XG4gICAgICByZXR1cm4gaXM7XG4gICAgfSxcbiAgICBnZXQgYXNzaWduKCkge1xuICAgICAgcmV0dXJuIGFzc2lnbjtcbiAgICB9LFxuICAgIGdldCBtaXhpbigpIHtcbiAgICAgIHJldHVybiBtaXhpbjtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbE9iamVjdCgpIHtcbiAgICAgIHJldHVybiBwb2x5ZmlsbE9iamVjdDtcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9PYmplY3QuanNcIiArICcnKTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL051bWJlci5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9OdW1iZXIuanNcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiksXG4gICAgICBpc051bWJlciA9ICRfXzAuaXNOdW1iZXIsXG4gICAgICBtYXliZUFkZENvbnN0cyA9ICRfXzAubWF5YmVBZGRDb25zdHMsXG4gICAgICBtYXliZUFkZEZ1bmN0aW9ucyA9ICRfXzAubWF5YmVBZGRGdW5jdGlvbnMsXG4gICAgICByZWdpc3RlclBvbHlmaWxsID0gJF9fMC5yZWdpc3RlclBvbHlmaWxsLFxuICAgICAgdG9JbnRlZ2VyID0gJF9fMC50b0ludGVnZXI7XG4gIHZhciAkYWJzID0gTWF0aC5hYnM7XG4gIHZhciAkaXNGaW5pdGUgPSBpc0Zpbml0ZTtcbiAgdmFyICRpc05hTiA9IGlzTmFOO1xuICB2YXIgTUFYX1NBRkVfSU5URUdFUiA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gIHZhciBNSU5fU0FGRV9JTlRFR0VSID0gLU1hdGgucG93KDIsIDUzKSArIDE7XG4gIHZhciBFUFNJTE9OID0gTWF0aC5wb3coMiwgLTUyKTtcbiAgZnVuY3Rpb24gTnVtYmVySXNGaW5pdGUobnVtYmVyKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKG51bWJlcikgJiYgJGlzRmluaXRlKG51bWJlcik7XG4gIH1cbiAgO1xuICBmdW5jdGlvbiBpc0ludGVnZXIobnVtYmVyKSB7XG4gICAgcmV0dXJuIE51bWJlcklzRmluaXRlKG51bWJlcikgJiYgdG9JbnRlZ2VyKG51bWJlcikgPT09IG51bWJlcjtcbiAgfVxuICBmdW5jdGlvbiBOdW1iZXJJc05hTihudW1iZXIpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIobnVtYmVyKSAmJiAkaXNOYU4obnVtYmVyKTtcbiAgfVxuICA7XG4gIGZ1bmN0aW9uIGlzU2FmZUludGVnZXIobnVtYmVyKSB7XG4gICAgaWYgKE51bWJlcklzRmluaXRlKG51bWJlcikpIHtcbiAgICAgIHZhciBpbnRlZ3JhbCA9IHRvSW50ZWdlcihudW1iZXIpO1xuICAgICAgaWYgKGludGVncmFsID09PSBudW1iZXIpXG4gICAgICAgIHJldHVybiAkYWJzKGludGVncmFsKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxOdW1iZXIoZ2xvYmFsKSB7XG4gICAgdmFyIE51bWJlciA9IGdsb2JhbC5OdW1iZXI7XG4gICAgbWF5YmVBZGRDb25zdHMoTnVtYmVyLCBbJ01BWF9TQUZFX0lOVEVHRVInLCBNQVhfU0FGRV9JTlRFR0VSLCAnTUlOX1NBRkVfSU5URUdFUicsIE1JTl9TQUZFX0lOVEVHRVIsICdFUFNJTE9OJywgRVBTSUxPTl0pO1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKE51bWJlciwgWydpc0Zpbml0ZScsIE51bWJlcklzRmluaXRlLCAnaXNJbnRlZ2VyJywgaXNJbnRlZ2VyLCAnaXNOYU4nLCBOdW1iZXJJc05hTiwgJ2lzU2FmZUludGVnZXInLCBpc1NhZmVJbnRlZ2VyXSk7XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbE51bWJlcik7XG4gIHJldHVybiB7XG4gICAgZ2V0IE1BWF9TQUZFX0lOVEVHRVIoKSB7XG4gICAgICByZXR1cm4gTUFYX1NBRkVfSU5URUdFUjtcbiAgICB9LFxuICAgIGdldCBNSU5fU0FGRV9JTlRFR0VSKCkge1xuICAgICAgcmV0dXJuIE1JTl9TQUZFX0lOVEVHRVI7XG4gICAgfSxcbiAgICBnZXQgRVBTSUxPTigpIHtcbiAgICAgIHJldHVybiBFUFNJTE9OO1xuICAgIH0sXG4gICAgZ2V0IGlzRmluaXRlKCkge1xuICAgICAgcmV0dXJuIE51bWJlcklzRmluaXRlO1xuICAgIH0sXG4gICAgZ2V0IGlzSW50ZWdlcigpIHtcbiAgICAgIHJldHVybiBpc0ludGVnZXI7XG4gICAgfSxcbiAgICBnZXQgaXNOYU4oKSB7XG4gICAgICByZXR1cm4gTnVtYmVySXNOYU47XG4gICAgfSxcbiAgICBnZXQgaXNTYWZlSW50ZWdlcigpIHtcbiAgICAgIHJldHVybiBpc1NhZmVJbnRlZ2VyO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsTnVtYmVyKCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsTnVtYmVyO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL051bWJlci5qc1wiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvcG9seWZpbGxzLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3BvbHlmaWxscy5qc1wiO1xuICB2YXIgcG9seWZpbGxBbGwgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIikucG9seWZpbGxBbGw7XG4gIHBvbHlmaWxsQWxsKFJlZmxlY3QuZ2xvYmFsKTtcbiAgdmFyIHNldHVwR2xvYmFscyA9ICR0cmFjZXVyUnVudGltZS5zZXR1cEdsb2JhbHM7XG4gICR0cmFjZXVyUnVudGltZS5zZXR1cEdsb2JhbHMgPSBmdW5jdGlvbihnbG9iYWwpIHtcbiAgICBzZXR1cEdsb2JhbHMoZ2xvYmFsKTtcbiAgICBwb2x5ZmlsbEFsbChnbG9iYWwpO1xuICB9O1xuICByZXR1cm4ge307XG59KTtcblN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9wb2x5ZmlsbHMuanNcIiArICcnKTtcbiJdfQ==
