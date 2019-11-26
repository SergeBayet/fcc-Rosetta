/*!
 * Copyright (c) 2019 Serge Bayet
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.algorithms = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var inherits;

  if (typeof Object.create === 'function') {
    inherits = function inherits(ctor, superCtor) {
      // implementation from standard node.js 'util' module
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }

  var inherits$1 = inherits;

  /**
   * Echos the value of a value. Trys to print the value out
   * in the best way possible given the different types.
   *
   * @param {Object} obj The object to print out.
   * @param {Object} opts Optional options object that alters the output.
   */

  /* legacy: obj, showHidden, depth, colors*/

  function inspect(obj, opts) {
    // default options
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    }; // legacy...

    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];

    if (isBoolean(opts)) {
      // legacy...
      ctx.showHidden = opts;
    } else if (opts) {
      // got an "options" object
      _extend(ctx, opts);
    } // set default options


    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  } // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

  inspect.colors = {
    'bold': [1, 22],
    'italic': [3, 23],
    'underline': [4, 24],
    'inverse': [7, 27],
    'white': [37, 39],
    'grey': [90, 39],
    'black': [30, 39],
    'blue': [34, 39],
    'cyan': [36, 39],
    'green': [32, 39],
    'magenta': [35, 39],
    'red': [31, 39],
    'yellow': [33, 39]
  }; // Don't use 'blue' not visible on cmd.exe

  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
  };

  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];

    if (style) {
      return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }

  function stylizeNoColor(str, styleType) {
    return str;
  }

  function arrayToHash(array) {
    var hash = {};
    array.forEach(function (val, idx) {
      hash[val] = true;
    });
    return hash;
  }

  function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);

      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }

      return ret;
    } // Primitive types cannot have properties


    var primitive = formatPrimitive(ctx, value);

    if (primitive) {
      return primitive;
    } // Look up the keys of the object.


    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);

    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    } // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    } // Some type of object without properties can be shortcutted.


    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }

      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }

      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }

      if (isError(value)) {
        return formatError(value);
      }
    }

    var base = '',
        array = false,
        braces = ['{', '}']; // Make Array say that they are Array

    if (isArray(value)) {
      array = true;
      braces = ['[', ']'];
    } // Make functions say that they are functions


    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    } // Make RegExps say that they are RegExps


    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    } // Make dates with properties first say the date


    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    } // Make error with message first say the error


    if (isError(value)) {
      base = ' ' + formatError(value);
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
      output = keys.map(function (key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }

    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }

  function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }

    if (isNumber(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

    if (isNull(value)) return ctx.stylize('null', 'null');
  }

  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }

  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];

    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
      } else {
        output.push('');
      }
    }

    keys.forEach(function (key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
      }
    });
    return output;
  }

  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
      value: value[key]
    };

    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }

    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }

    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }

        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function (line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function (line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }

    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }

      name = JSON.stringify('' + key);

      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }

    return name + ': ' + str;
  }

  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function (prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);

    if (length > 60) {
      return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    }

    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  } // NOTE: These type checking functions intentionally don't use `instanceof`
  // because it is fragile and can be easily faked with `Object.create()`.


  function isArray(ar) {
    return Array.isArray(ar);
  }
  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }
  function isNull(arg) {
    return arg === null;
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isString(arg) {
    return typeof arg === 'string';
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }
  function isObject(arg) {
    return _typeof(arg) === 'object' && arg !== null;
  }
  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }
  function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
  }
  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function _extend(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;

    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }

    return origin;
  }

  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var _functionsHaveNames;

  function functionsHaveNames() {
    if (typeof _functionsHaveNames !== 'undefined') {
      return _functionsHaveNames;
    }

    return _functionsHaveNames = function () {
      return function foo() {}.name === 'foo';
    }();
  }
  // new assert.AssertionError({ message: message,
  //                             actual: actual,
  //                             expected: expected })

  var regex = /\s*function\s+([^\(\s]*)\s*/; // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js

  function getName(func) {
    if (!isFunction(func)) {
      return;
    }

    if (functionsHaveNames()) {
      return func.name;
    }

    var str = func.toString();
    var match = str.match(regex);
    return match && match[1];
  }
  function AssertionError(options) {
    this.name = 'AssertionError';
    this.actual = options.actual;
    this.expected = options.expected;
    this.operator = options.operator;

    if (options.message) {
      this.message = options.message;
      this.generatedMessage = false;
    } else {
      this.message = getMessage(this);
      this.generatedMessage = true;
    }

    var stackStartFunction = options.stackStartFunction || fail;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, stackStartFunction);
    } else {
      // non v8 browsers so we can have a stacktrace
      var err = new Error();

      if (err.stack) {
        var out = err.stack; // try to strip useless frames

        var fn_name = getName(stackStartFunction);
        var idx = out.indexOf('\n' + fn_name);

        if (idx >= 0) {
          // once we have located the function frame
          // we need to strip out everything before it (and its line)
          var next_line = out.indexOf('\n', idx + 1);
          out = out.substring(next_line + 1);
        }

        this.stack = out;
      }
    }
  } // assert.AssertionError instanceof Error

  inherits$1(AssertionError, Error);

  function truncate(s, n) {
    if (typeof s === 'string') {
      return s.length < n ? s : s.slice(0, n);
    } else {
      return s;
    }
  }

  function inspect$1(something) {
    if (functionsHaveNames() || !isFunction(something)) {
      return inspect(something);
    }

    var rawname = getName(something);
    var name = rawname ? ': ' + rawname : '';
    return '[Function' + name + ']';
  }

  function getMessage(self) {
    return truncate(inspect$1(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect$1(self.expected), 128);
  } // At present only the three keys mentioned above are used and
  // understood by the spec. Implementations or sub modules can pass
  // other keys to the AssertionError's constructor - they will be
  // ignored.
  // 3. All of the following functions must throw an AssertionError
  // when a corresponding condition is not met, with a message that
  // may be undefined if not provided.  All assertion methods provide
  // both the actual and expected values to the assertion error for
  // display purposes.


  function fail(actual, expected, message, operator, stackStartFunction) {
    throw new AssertionError({
      message: message,
      actual: actual,
      expected: expected,
      operator: operator,
      stackStartFunction: stackStartFunction
    });
  } // EXTENSION! allows for well behaved errors defined elsewhere.

  var algorithms =
  /*#__PURE__*/
  function () {
    function algorithms(params) {
      _classCallCheck(this, algorithms);

      console.log('hello from algorithms');
    }
    /*
    Rosetta Code: Gray code
    	Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.
    	This is a useful encoding for reducing hardware data hazards with values that change rapidly and/or connect to slower hardware as inputs.
    	It is also useful for generating inputs for Karnaugh maps in order from left to right or top to bottom.
    */


    _createClass(algorithms, [{
      key: "gray",
      value: function gray(enc, number) {
        if (enc) {
          // number XOR SHR(number)
          return number ^ number >> 1;
        } else {
          var ret = number;

          while (number = number >> 1) {
            ret = ret ^ number;
          }

          return ret;
        }
      }
      /* Rosetta Code: Greatest common divisor
      	Write a function that returns the greatest common divisor of two integers. 
      
      */

    }, {
      key: "gcd",
      value: function gcd(a, b) {
        if (b > 0) {
          console.log('Appel récursif gcd(' + b + ', ' + a + ' % ' + b + ')');
          console.log('            => gcd(' + b + ', ' + a % b + ')');
          return this.gcd(b, a % b);
        } else {
          console.log('Résultat final b = 0  =>  ' + a);
          return a;
        }
      }
      /*
      Rosetta Code: Greatest subsequential sum
      	Given a sequence of integers, find a continuous subsequence which maximizes the sum of its elements, that is, the elements of no other single subsequence add up to a value larger than this one.
      	An empty subsequence is considered to have the sum of 0 ; thus if all elements are negative, the result must be the empty sequence.
      */

    }, {
      key: "maximumSubsequence",
      value: function maximumSubsequence(population) {
        var ret = [];
        var startIndex = 0;
        var endIndex = 0;
        var max = 0;

        for (var i = 0; i < population.length; i++) {
          var k = 0;

          for (var j = i; j < population.length; j++) {
            k += population[j];

            if (k > max) {
              max = k;
              startIndex = i;
              endIndex = j;
            }
          }
        }

        ret = population.slice(startIndex, endIndex + 1);
        return ret;
      }
      /*
      Rosetta Code: Hailstone sequence
      	The Hailstone sequence of numbers can be generated from a starting positive integer, n by:
          If n is 1 then the sequence ends
         If n is even then the next n of the sequence = n/2
         If n is odd then the next n of the sequence = (3 * n) + 1
      	The (unproven) Collatz conjecture is that the hailstone sequence for any starting number always terminates.
      	The hailstone sequence is also known as hailstone numbers (because the values are usually subject to multiple descents and ascents like hailstones in a cloud), or as the Collatz sequence.
      
         Create a routine to generate the hailstone sequence for a number
         Use the routine to show that the hailstone sequence for the number 27 has 112 elements starting with 27, 82, 41, 124 and ending with 8, 4, 2, 1
         Show the number less than 100,000 which has the longest hailstone sequence together with that sequence's length. (But don't show the actual sequence!)
      	*/

    }, {
      key: "hailstoneSequence",
      value: function hailstoneSequence() {
        var res27; // Good luck!

        res27 = calculate(27);
        var number,
            max = 0;

        for (var i = 1; i <= 100000; i++) {
          var l = calculate(i);

          if (l.length > max) {
            max = l.length;
            number = i;
          }
        }

        function calculate(n) {
          var sequence = []; //let index 

          while (n > 1) {
            sequence.push(n);

            if (n % 2 === 0) {
              n = n / 2;
            } else {
              n = 3 * n + 1;
            }
          }

          sequence.push(1);
          return sequence;
        }

        return [_toConsumableArray(res27.slice(0, 4).concat([8, 4, 2, 1])), [max, number]];
      }
      /*
      Rosetta Code: Happy numbers
      	A happy number is defined by the following process:
      	Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.
      	Implement a function that returns true if the number is happy, or false if not.
      */

    }, {
      key: "happy",
      value: function happy(number) {
        var cycle = [];

        while (number !== 1 && !cycle[number]) {
          cycle[m] = true;
          var m = 0;
          var str = number.toString();

          for (var i = 0; i < str.length; i++) {
            m += Math.pow(str.charAt(i), 2);
          }
          number = m;
          console.log(number);
        }

        if (cycle[number]) {
          return false;
        }

        return true;
      }
    }]);

    return algorithms;
  }();

  return algorithms;

})));
