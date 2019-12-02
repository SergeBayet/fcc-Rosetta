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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
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

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var algorithms =
  /*#__PURE__*/
  function () {
    function algorithms(params) {
      _classCallCheck(this, algorithms);

      console.log("hello from algorithms");
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
          //console.log('Appel récursif gcd(' + b + ', ' + a + ' % ' + b + ')');
          //console.log('            => gcd(' + b + ', ' + a % b + ')');
          return this.gcd(b, a % b);
        } else {
          //console.log('Résultat final b = 0  =>  ' + a);
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
      /*
      Rosetta Code: Harshad or Niven series
       The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.
       For example, 42 is a Harshad number as 42 is divisible by (4 + 2) without remainder.
       Assume that the series is defined as the numbers in increasing order.
       Implement a function to generate successive members of the Harshad sequence.
       Use it to list the first twenty members of the sequence and list the first Harshad number greater than 1000.
      */

    }, {
      key: "isHarshadOrNiven",
      value: function isHarshadOrNiven() {
        var res = {
          firstTwenty: [],
          firstOver1000: undefined
        }; // Change after this line

        var i = 1;
        var count = 1;

        while (count <= 20) {
          if (calculate(i)) {
            res.firstTwenty.push(i);
            count++;
          }

          i++;
        }

        var found = false;
        i = 1001;

        while (!found) {
          if (calculate(i)) {
            res.firstOver1000 = i;
            found = true;
          }

          i++;
        }

        function calculate(num) {
          var m = 0;
          var str = num.toString();

          for (var _i = 0; _i < str.length; _i++) {
            m += parseInt(str.charAt(_i));
          }

          if (i % m == 0) {
            return true;
          }

          return false;
        }

        return res;
      }
      /* Rosetta Code: Hash from two arrays
       Using two Arrays of equal length, create a Hash object where the elements from one array (the keys) are linked to the elements of the other (the values).
      
      */

    }, {
      key: "arrToObj",
      value: function arrToObj(keys, vals) {
        var ret = {};
        keys.forEach(function (value, key) {
          ret[value] = vals[key];
        });
        return ret;
      }
      /*
      Rosetta Code: Hash join
         An inner join is an operation that combines two data tables into one table, based on matching column values. The simplest way of implementing this operation is the nested loop join algorithm, but a more scalable alternative is the hash join algorithm.
         The "hash join" algorithm consists of two steps:
         Hash phase: Create a multimap from one of the two tables, mapping from each join column value to all the rows that contain it.
            The multimap must support hash-based lookup which scales better than a simple linear search, because that's the whole point of this algorithm.
            Ideally we should create the multimap for the smaller table, thus minimizing its creation time and memory size.
        Join phase: Scan the other table, and find matching rows by looking in the multimap created before.
         In pseudo-code, the algorithm could be expressed as follows:
         let A = the first input table (or ideally, the larger one)
        let B = the second input table (or ideally, the smaller one)
        let jA = the join column ID of table A
        let jB = the join column ID of table B
        let MB = a multimap for mapping from single values to multiple rows of table B (starts out empty)
        let C = the output table (starts out empty)
        for each row b in table B:
          place b in multimap MB under key b(jB)
        for each row a in table A:
          for each row b in multimap MB under key a(jA):
            let c = the concatenation of row a and row b
            place row c in table C
         Implement the "hash join" algorithm as a function and demonstrate that it passes the test-case listed below. The function should accept two arrays of objects and return an array of combined objects.
         Input
         A = 	
        Age 	Name
        27 	Jonah
        18 	Alan
        28 	Glory
        18 	Popeye
        28 	Alan
            B = 	
        Character 	Nemesis
        Jonah 	Whales
        Jonah 	Spiders
        Alan 	Ghosts
        Alan 	Zombies
        Glory 	Buffy
        jA = 	Name (i.e. column 1) 	jB = 	Character (i.e. column 0)
          
         Output
         A_age 	A_name 	B_character 	B_nemesis
        27 	Jonah 	Jonah 	Whales
        27 	Jonah 	Jonah 	Spiders
        18 	Alan 	Alan 	Ghosts
        18 	Alan 	Alan 	Zombies
        28 	Glory 	Glory 	Buffy
        28 	Alan 	Alan 	Ghosts
        28 	Alan 	Alan 	Zombies
         The order of the rows in the output table is not significant.
      */

    }, {
      key: "hashJoin",
      value: function hashJoin(hash1, hash2) {
        // Good luck!
        var res = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = hash1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elA = _step.value;
            console.log(elA);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = hash2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var elB = _step2.value;

                if (elA.name == elB.character) {
                  res.push({
                    A_age: elA.age,
                    A_name: elA.name,
                    B_character: elB.character,
                    B_nemesis: elB.nemesis
                  });
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return res;
      }
      /*
      Hero's formula for the area of a triangle given the length of its three sides a, b, and c is given by:
       A=sqrt(s(s−a)(s−b)(s−c))
        
       where s is half the perimeter of the triangle; that is,
       s=(a+b+c)/2.
       Heronian triangles are triangles whose sides and area are all integers.
       An example is the triangle with sides 3, 4, 5 whose area is 6 (and whose perimeter is 12).
       Note that any triangle whose sides are all an integer multiple of 3, 4, 5; such as 6, 8, 10, will also be a Heronian triangle.
       Define a Primitive Heronian triangle as a Heronian triangle where the greatest common divisor
       of all three sides is 1 (unity).
       This will exclude, for example, triangle 6, 8, 10.
       Implement a function based on Hero's formula that returns the first nth ordered triangles in an array of arrays.
      */

    }, {
      key: "heronianTriangle",
      value: function heronianTriangle(n) {
        var _this = this;

        // Good luck!
        var res = [];
        var a = 1,
            b = 1,
            c = 1;

        for (c = 1; a <= 200; c++) {
          for (b = 1; b <= c; b++) {
            for (a = 1; a <= b; a++) {
              if (this.gcd(a, this.gcd(b, c)) == 1) {
                var areaTriangle = this.area(a, b, c);

                if (areaTriangle - parseInt(areaTriangle) == 0 && areaTriangle > 0) {
                  res.push([a, b, c]);
                }
              }
            }
          }
        }

        res.sort(function (a, b) {
          return _this.area(a[0], a[1], a[2]) - _this.area(b[0], b[1], b[2]);
        });
        return res.slice(0, n);
      }
    }, {
      key: "area",
      value: function area(a, b, c) {
        var s = (a + b + c) / 2;
        var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
      }
      /*
      Rosetta Code: Hofstadter Figure-Figure sequences
       These two sequences of positive integers are defined as:
       R(1)=1 ; S(1)=2
      R(n)=R(n−1)+S(n−1),n>1.
       The sequence S(n)
      is further defined as the sequence of positive integers not present in R(n)
       .
       Sequence R
       starts:
       1, 3, 7, 12, 18, ...
       Sequence S
       starts:
       2, 4, 5, 6, 8, ...
       Create two functions named ffr and ffs that when given n return R(n) or S(n) respectively. (Note that R(1) = 1 and S(1) = 2 to avoid off-by-one errors).
       No maximum value for n should be assumed.
      */

    }, {
      key: "extendsRS",
      value: function extendsRS(n) {
        var R = [null, 1, 3];
        var S = [null, 2, 4];
        var i = 3;

        while (i <= n) {
          R[i] = R[i - 1] + S[i - 1];

          for (var j = S[S.length - 1] + 1; j < R[i]; j++) {
            if (R.indexOf(j) == -1) {
              S.push(j);
            }
          }

          i++;
        }

        return [R, S];
      }
    }, {
      key: "ffr",
      value: function ffr(n) {
        if (n == 1) return 1;
        var RS = this.extendsRS(n);
        return RS[0][n];
      }
    }, {
      key: "ffs",
      value: function ffs(n) {
        if (n == 1) return 2;
        var RS = this.extendsRS(n);
        return RS[1][n];
      }
      /*
      Rosetta Code: Hofstadter Q sequence
       The Hofstadter Q sequence is defined as:
       Q(1)=Q(2)=1,Q(n)=Q(n−Q(n−1))+Q(n−Q(n−2)),n>2.
       It is defined like the Fibonacci sequence, but whereas the next term in the Fibonacci sequence is the sum of the previous two terms, in the Q sequence the previous two terms tell you how far to go back in the Q sequence to find the two numbers to sum to make the next term of the sequence.
       Implement the Hofstadter Q Sequence equation as a function. The function should accept number, n, and return an integer.
      */

    }, {
      key: "hofstadterQ",
      value: function hofstadterQ(n) {
        // Good luck!
        var memo = [1, 1, 1];
        var Q = hQ(n);

        function hQ(n) {
          if (memo[n]) {
            return memo[n];
          } else {
            var i = hQ(n - hQ(n - 1)) + hQ(n - hQ(n - 2));
            memo[n] = i;
            return i;
          }
        }

        return Q;
      }
      /*
      Rosetta Code: Sudoku
       Write a function to solve a partially filled-in normal 9x9 Sudoku grid and return the result. The blank fields are represented by 0s. Algorithmics of Sudoku may help implement this.
       */

    }, {
      key: "solveSudoku",
      value: function solveSudoku(puzzle) {
        // Good luck!
        var solution = _toConsumableArray(puzzle);

        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var squares = [[], [], [], [], [], [], [], [], []];
        var verticals = [[], [], [], [], [], [], [], [], []];

        for (var square = 0; square < 9; square++) {
          for (var digit = 0; digit < 9; digit++) {
            var col = digit % 3 + square % 3 * 3;
            var row = Math.floor(digit / 3) + Math.floor(square / 3) * 3;
            squares[square].push(solution[row][col]);
            verticals[square].push(solution[digit][square]);
          }
        }

        var pass = 0;
        var guessIt = false;
        var cache = [];
        var resolved = false;

        while (!resolved && pass < 100) {
          console.log("pass : " + pass);
          var nDigitResolved = 0;

          var _loop = function _loop(line) {
            var _loop2 = function _loop2(_digit) {
              if (solution[line][_digit] == -1) {
                var nSquare = Math.floor(_digit / 3) + Math.floor(line / 3) * 3;
                var numberPossibilities = numbers.filter(function (x) {
                  return !~solution[line].indexOf(x);
                }).filter(function (x) {
                  return !~verticals[_digit].indexOf(x);
                }).filter(function (x) {
                  return !~squares[nSquare].indexOf(x);
                });

                if (numberPossibilities.length == 1) {
                  solution[line][_digit] = numberPossibilities[0];
                  squares[nSquare][_digit % 3 + line % 3 * 3] = numberPossibilities[0];
                  verticals[_digit][line] = numberPossibilities[0];
                  console.log("added digit: digit[" + _digit + "] line [" + line + "] : " + numberPossibilities[0] + " (" + numberPossibilities + ")");
                  nDigitResolved++;
                } else if (numberPossibilities.length == 0) {
                  console.log("not possible to add to digit[" + _digit + "] line [" + line + "]");
                  console.table(solution);
                  var lastCache = cache.length - 1;

                  while (lastCache >= 0) {
                    var ind = cache[lastCache].choice + 1;

                    if (ind > cache[lastCache].possibilities.length - 1) {
                      //console.log(ind, lastCache, cache[lastCache], cache[lastCache].possibilities.length);
                      cache.pop();
                      lastCache--;
                    } else {
                      cache[lastCache].choice = ind;
                      solution = JSON.parse(JSON.stringify(cache[lastCache].solution));
                      squares = JSON.parse(JSON.stringify(cache[lastCache].squares));
                      verticals = JSON.parse(JSON.stringify(cache[lastCache].verticals));
                      solution[cache[lastCache].line][cache[lastCache].digit] = cache[lastCache].possibilities[ind];
                      nSquare = Math.floor(cache[lastCache].digit / 3) + Math.floor(cache[lastCache].line / 3) * 3;
                      squares[nSquare][cache[lastCache].digit % 3 + cache[lastCache].line % 3 * 3] = cache[lastCache].possibilities[ind];
                      verticals[cache[lastCache].digit][cache[lastCache].line] = cache[lastCache].possibilities[ind];
                      guessIt = false;
                      console.log("Try another one : digit[" + cache[lastCache].digit + "] line[" + cache[lastCache].line + "]: " + cache[lastCache].possibilities[ind]);
                      console.table(cache[lastCache].solution);
                      nDigitResolved++;
                      break;
                    }
                  }

                  if (lastCache < 0) {
                    console.log("Invalid grid");
                    console.table(solution);
                    return {
                      v: {
                        v: false
                      }
                    };
                  }
                } else if (guessIt) {
                  // Make a choice!!!
                  // Clone the solution at this instant so we can roll back.
                  cache.push({
                    solution: JSON.parse(JSON.stringify(solution)),
                    squares: JSON.parse(JSON.stringify(squares)),
                    verticals: JSON.parse(JSON.stringify(verticals)),
                    line: line,
                    digit: _digit,
                    possibilities: numberPossibilities,
                    choice: 0
                  });
                  guessIt = false;
                  solution[line][_digit] = numberPossibilities[0];
                  squares[nSquare][_digit % 3 + line % 3 * 3] = numberPossibilities[0];
                  verticals[_digit][line] = numberPossibilities[0];
                  console.log("Try : digit[" + _digit + "] line[" + line + "]: " + numberPossibilities[0] + " (" + numberPossibilities + ")");
                  nDigitResolved++;
                }
              }
            };

            for (var _digit = 0; _digit < 9; _digit++) {
              var _ret2 = _loop2(_digit);

              if (_typeof(_ret2) === "object") return _ret2.v;
            }

            if (nDigitResolved == 0) {
              guessIt = true;
            }
          };

          for (var line = 0; line < 9; line++) {
            var _ret = _loop(line);

            if (_typeof(_ret) === "object") return _ret.v;
          }

          pass++;
          resolved = true;

          for (var i = 0; i < 9; i++) {
            if (solution[i].some(function (x) {
              return x == -1;
            })) {
              resolved = false;
              break;
            }
          }
        }

        console.log("Resolved in " + pass + " passes");
        return solution;
      }
      /*
      Rosetta Code: Sum digits of an integer
         Write a function that takes a string as a parameter. This string represents a number that can be in any base (less than 37) and return the sum of its digits.
         110 sums to 1
        123410 sums to 10
        fe16 sums to 29
        f0e16 sums to 29
       */

    }, {
      key: "sumDigits",
      value: function sumDigits(n) {
        // Good luck!
        var digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var string = n.toString().toUpperCase();
        var sum = 0;

        for (var i = 0; i < string.length; i++) {
          sum += digits.indexOf(string.charAt(i));
        }

        return sum;
      }
      /* Rosetta Code: Sum multiples of 3 and 5
       The objective is to write a function that finds the sum of all positive multiples of 3 or 5 below n.
      */

    }, {
      key: "sumMults",
      value: function sumMults(n) {
        // Good luck!
        var currentNumber = 3;
        var mul = 0;

        while (currentNumber < n) {
          if (currentNumber % 5 == 0 || currentNumber % 3 == 0) {
            mul += currentNumber;
          }

          currentNumber++;
        }

        return mul;
      }
      /*
      Sum of a series
      Task
      Sum of a series
      You are encouraged to solve this task according to the task description, using any language you may know.
       Compute the   nth   term of a series,   i.e. the sum of the   n   first terms of the corresponding sequence.
       Informally this value, or its limit when   n   tends to infinity, is also called the sum of the series, thus the title of this task.
       For this task, use:
                               S n = ∑ k = 1 n 1 k 2 {\displaystyle S_{n}=\sum _{k=1}^{n}{\frac {1}{k^{2}}}} 
                and compute   S 1000 {\displaystyle S_{1000}} 
        This approximates the   zeta function   for   S=2,   whose exact value
                               ζ ( 2 ) = π 2 6 {\displaystyle \zeta (2)={\pi ^{2} \over 6}} 
       is the solution of the Basel problem. 
      */

    }, {
      key: "sumOfASeries",
      value: function sumOfASeries(a, b) {
        // Good luck!
        var sum = 0;

        for (var i = a; i <= b; i++) {
          sum += 1 / (i * i);
        }

        return sum;
      }
      /* Rosetta Code: Sum of squares
       Write a function to find the sum of squares of an array of integers.
       */

    }, {
      key: "sumsq",
      value: function sumsq(array) {
        // Good luck!
        var sum = array.reduce(function (a, b) {
          return a + b * b;
        }, 0);
        return sum;
      }
      /* 
      Rosetta Code: Sum to 100
       Find solutions to the sum to one hundred puzzle.
       Add (insert) the mathematical operators + or ─ (plus or minus) before any of the digits in the decimal numeric string 123456789 such that the resulting mathematical expression adds up to a particular sum (in this iconic case, 100).
       Example:
       123 + 4 - 5 + 67 - 89   =   100
       Write a function that takes a number as parameter. The function should return an array containing all solutions for the given number. The solutions should be strings representing the expressions. For example: "1+23-456+78-9". Sort the array before returning it.
      */

    }, {
      key: "sumTo100",
      value: function sumTo100(n) {
        var ret = [];
        var ADD = 0,
            SUB = 1,
            JOIN = 2;
        var nexpr = 2 * Math.pow(9, 4);

        function evaluate(code) {
          var value = 0,
              number = 0,
              power = 1;

          for (var k = 9; k >= 1; k--) {
            number = power * k + number;

            switch (code % 3) {
              case ADD:
                value = value + number;
                number = 0;
                power = 1;
                break;

              case SUB:
                value = value - number;
                number = 0;
                power = 1;
                break;

              case JOIN:
                power = power * 10;
                break;
            }

            code = Math.floor(code / 3);
          }

          return value;
        }

        function format(code) {
          var s = "";
          var a = 3 * Math.pow(9, 4),
              b = a / 3;

          for (var k = 1; k <= 9; k++) {
            switch (Math.floor(code % a / b)) {
              case ADD:
                if (k > 1) s = s + "+";
                break;

              case SUB:
                s = s + "-";
                break;
            }

            a = b;
            b = Math.floor(b / 3);
            s = s + String.fromCharCode(0x30 + k);
          }

          console.log(evaluate(code) + " = " + s);
          return s;
        }

        for (var i = 0; i < nexpr; i++) {
          if (evaluate(i) == n) {
            ret.push(format(i));
          }
        }

        return ret.sort();
      }
      /*
      Rosetta Code: Word wrap
       Even today, with proportional fonts and complex layouts, there are still cases where you need to wrap text at a specified column. The basic task is to wrap a paragraph of text in a simple way.
       Write a function that can wrap this text to any number of characters. As an example, the text wrapped to 80 characters should look like the following:
       Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
      algorithm. If your language provides this, you get easy extra credit, but you
      must reference documentation indicating that the algorithm is something better
      than a simple minimum length algorithm.
       */

    }, {
      key: "wrap",
      value: function wrap(text, limit) {
        if (text.length > limit) {
          // find the last space within limit
          var edge = text.slice(0, limit).lastIndexOf(" ");

          if (edge > 0) {
            var line = text.slice(0, edge);
            var remainder = text.slice(edge + 1);
            return line + "\n" + this.wrap(remainder, limit);
          }
        }

        return text;
      }
      /*
      Rosetta Code: Y combinatorPassed
       In strict functional programming and the lambda calculus, functions (lambda expressions) don't have state and are only allowed to refer to arguments of enclosing functions. This rules out the usual definition of a recursive function wherein a function is associated with the state of a variable and this variable's state is used in the body of the function. The Y combinator is itself a stateless function that, when applied to another stateless function, returns a recursive version of the function. The Y combinator is the simplest of the class of such functions, called fixed-point combinators.
       Define the stateless Y combinator function and use it to compute factorial. The factorial(N) function is already given to you. See also:
         Jim Weirich: Adventures in Functional Programming.
       */

    }, {
      key: "YCombinator",
      value: function YCombinator() {
        Y = function Y(f) {
          return function (x) {
            return x(x);
          }(function (y) {
            return f(function (x) {
              return y(y)(x);
            });
          });
        };

        factorial = this.Y(function (f) {
          return function (n) {
            return n > 1 ? n * f(n - 1) : 1;
          };
        });
      }
      /* Project Euler: Problem 10: Summation of primes
       The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
      
      Find the sum of all the primes below n. */

    }, {
      key: "primeSummations",
      value: function primeSummations(n) {
        var primes = new Set();
        var sum = 2;

        for (var i = n - 1; i >= 2; i--) {
          if (isPrime(i)) {
            sum += i;
          }
        }

        function isPrime(number) {
          if (primes.has(number)) return true;
          var root = Math.ceil(Math.sqrt(number));

          for (var _i2 = 2; _i2 <= root; _i2++) {
            if (number % _i2 === 0) {
              return false;
            }
          }

          primes.add(number);
          return true;
        }

        return sum;
      }
      /*
      Project Euler: Problem 11: Largest product in a grid
       In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
      */

    }, {
      key: "largestGridProduct",
      value: function largestGridProduct() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[40, 17, 81, 18, 57], [74, 4, 36, 16, 29], [36, 42, 69, 73, 45], [51, 54, 69, 16, 92], [7, 97, 57, 32, 16]];
        // Good luck!
        var n = 4;
        var prod,
            max = 0; // Diagonally left

        for (var i = 0; i <= arr.length - n; i++) {
          for (var j = arr.length - 1; j >= n - 1; j--) {
            prod = arr[i][j] * arr[i + 1][j - 1] * arr[i + 2][j - 2] * arr[i + 3][j - 3];

            if (prod > max) {
              max = prod;
            }
          }
        } // Diagonally right


        for (var _i3 = 0; _i3 <= arr.length - n; _i3++) {
          for (var _j = 0; _j <= arr.length - n; _j++) {
            prod = arr[_i3][_j] * arr[_i3 + 1][_j + 1] * arr[_i3 + 2][_j + 2] * arr[_i3 + 3][_j + 3];

            if (prod > max) {
              max = prod;
            }
          }
        } // Vertical


        for (var _i4 = 0; _i4 < arr[0].length; _i4++) {
          for (var _j2 = 0; _j2 <= arr.length - n; _j2++) {
            prod = arr[_j2][_i4] * arr[_j2 + 1][_i4] * arr[_j2 + 2][_i4] * arr[_j2 + 3][_i4];

            if (prod > max) {
              max = prod;
            }
          }
        } // Horizontal


        for (var _i5 = 0; _i5 < arr.length; _i5++) {
          for (var _j3 = 0; _j3 <= arr[_i5].length - n; _j3++) {
            prod = arr[_i5][_j3] * arr[_i5][_j3 + 1] * arr[_i5][_j3 + 2] * arr[_i5][_j3 + 3];

            if (prod > max) {
              max = prod;
            }
          }
        }

        return max;
      }
      /*
      Project Euler: Problem 12: Highly divisible triangular number
       The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
       1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
       Let us list the factors of the first seven triangle numbers:
       1: 1
       3: 1, 3
       6: 1, 2, 3, 6
       10: 1, 2, 5, 10
       15: 1, 3, 5, 15
       21: 1, 3, 7, 21
       28: 1, 2, 4, 7, 14, 28
       We can see that 28 is the first triangle number to have over five divisors.
       What is the value of the first triangle number to have over n divisors?
      */

    }, {
      key: "divisibleTriangleNumber",
      value: function divisibleTriangleNumber(n) {
        // Good luck!
        var currentNumber = 1,
            nFactors = 0,
            triangleNumber;

        while (nFactors < n) {
          triangleNumber = getTriangleNumber(currentNumber); //console.log(triangleNumber);

          nFactors = getFactors(triangleNumber);
          currentNumber++;
        }

        function getTriangleNumber(n) {
          return n * (n + 1) / 2;
        }

        function getFactors(n) {
          var factors = new Set();
          var i = 1;
          var root = Math.ceil(Math.sqrt(n));

          while (i <= root) {
            // run loop i to sqrt(n)
            if (n % i == 0) {
              factors.add(i);

              if (i != n / i) {
                factors.add(n / i);
              }
            }

            i++;
          }

          return factors.size;
        }

        return triangleNumber;
      }
      /*
      Project Euler: Problem 13: Large sum
       Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
       */

    }, {
      key: "largeSum",
      value: function largeSum() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["37107287533902102798797998220837590246510135740250", "46376937677490009712648124896970078050417018260538"];

        var numbers = _toConsumableArray(arr);

        var lengthMax = numbers.reduce(function (a, b) {
          return Math.max(a, b.length);
        }, 0);
        var result = "";
        var remainder = 0;
        numbers = leading(numbers, lengthMax, "0");
        var unity = lengthMax - 1; //console.log(numbers, unity);

        while (unity >= 0) {
          var unitySum = numbers.reduce(function (a, b) {
            return a + parseInt(b.charAt(unity));
          }, 0) + remainder;
          remainder = Math.floor(unitySum / 10);
          result = unitySum.toString().substr(-1) + result;
          unity--;
        }

        if (remainder > 0) {
          result = remainder.toString() + result;
        }

        return result; // return parseInt(result.substring(0, 10));    // For freecodecamp test

        function leading(array, length, _char) {
          return array.map(function (x) {
            return (_char.repeat(length) + x).substr(-length);
          });
        }
      }
      /*
      Project Euler: Problem 14: Longest Collatz sequence
       The following iterative sequence is defined for the set of positive integers:
       n → n/2 (n is even)
       n → 3n + 1 (n is odd)
       Using the rule above and starting with 13, we generate the following sequence:
       13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
       It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
       Which starting number, under the given limit, produces the longest chain?
       NOTE: Once the chain starts the terms are allowed to go above one million. 
      */

    }, {
      key: "longestCollatzSequence",
      value: function longestCollatzSequence(limit) {
        // Good luck!
        var result = 1;
        var counter = Math.floor(limit / 2);
        var maxTerms = 0;

        while (counter <= limit) {
          var nTerms = termsCollatz(counter);

          if (nTerms > maxTerms) {
            maxTerms = nTerms;
            result = counter;
          }

          counter++;
        }

        return result;

        function termsCollatz(start) {
          var c = start;
          var nTerms = 0;

          while (c !== 1) {
            c = c % 2 == 0 ? c / 2 : 3 * c + 1;
            nTerms++;
          }

          return nTerms;
        }
      }
    }, {
      key: "latticePaths",
      value: function latticePaths(n) {
        return rFact(2 * n) / Math.pow(rFact(n), 2);

        function rFact(num) {
          if (num === 0) {
            return 1;
          } else {
            return num * rFact(num - 1);
          }
        }
      }
      /*
        Project Euler: Problem 16: Power digit sum
         215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
         What is the sum of the digits of the number 2exponent?
      */

    }, {
      key: "powerDigitSum",
      value: function powerDigitSum(exponent) {
        // Good luck!
        // Doesn't work with big numbers ...
        return Math.pow(2, exponent).toString().split("").reduce(function (a, b) {
          return a + parseInt(b);
        }, 0);
      }
    }, {
      key: "powerDigitSumBigNumber",
      value: function powerDigitSumBigNumber(exponent) {
        var self = this;

        function power2exponent(exponent) {
          if (exponent == 0) return "1";
          var temp = "2";

          for (var i = 2; i <= exponent; i++) {
            temp = self.largeSum([temp, temp]);
          }

          return temp;
        }

        return power2exponent(exponent).toString().split("").reduce(function (a, b) {
          return a + parseInt(b);
        }, 0);
      }
      /*
      Project Euler: Problem 17: Number letter counts
       If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
       If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?
       NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
      */

    }, {
      key: "numberLetterCounts",
      value: function numberLetterCounts(limit) {
        var numbers = [];

        for (var i = 1; i <= limit; i++) {
          numbers.push(this.numberToLetters(i));
        }

        numbers = numbers.join("");
        numbers = numbers.replace(/\s/g, ""); // Good luck!

        return numbers.length;
      }
    }, {
      key: "numberToLetters",
      value: function numberToLetters(n) {
        var numbers = {
          1: "one",
          2: "two",
          3: "three",
          4: "four",
          5: "five",
          6: "six",
          7: "seven",
          8: "eight",
          9: "nine",
          10: "ten",
          11: "eleven",
          12: "twelve",
          13: "thirteen",
          14: "fourteen",
          15: "fifteen",
          16: "sixteen",
          17: "seventeen",
          18: "eighteen",
          19: "nineteen",
          20: "twenty",
          30: "thirty",
          40: "forty",
          50: "fifty",
          60: "sixty",
          70: "seventy",
          80: "eighty",
          90: "ninety",
          100: "hundred",
          1000: "thousand"
        };
        var result = [];
        var nString = n.toString().split("");
        var unity = nString.length;

        for (var i = 0; i < nString.length; i++) {
          switch (unity % 3) {
            case 0:
              // Hundreds
              if (numbers[nString[i]] !== undefined) {
                result.push(numbers[nString[i]]);
                result.push("hundred");
                result.push("and");
              }

              break;

            case 2:
              // Tens
              if (numbers[nString[i] + nString[i + 1]] !== undefined) {
                result.push(numbers[nString[i] + nString[i + 1]]);
                i++;
              } else if (numbers[nString[i] + "0"] !== undefined) {
                result.push(numbers[nString[i] + "0"]);
              }

              break;

            case 1:
              // Ones
              result.push(numbers[nString[i]]);

              if (unity == 4) {
                result.push("thousand");
              }

              break;
          }

          unity--;
        } //console.log(result);


        result = result.join(" ");
        if (result.endsWith(" and ")) result = result.substr(0, result.length - 5);
        return result;
      }
      /*
      Rosetta Code: Combinations
       Given non-negative integers m and n, generate all size m combinations of the integers from 0 (zero) to n-1 in sorted order (each combination is sorted and the entire table is sorted).
       Example:
       3 comb 5 is:
       0 1 2
      0 1 3
      0 1 4
      0 2 3
      0 2 4
      0 3 4
      1 2 3
      1 2 4
      1 3 4
      2 3 4
       */

    }, {
      key: "combinations",
      value: function combinations(m, n) {
        // Good luck!
        var returnValue = [];
        var res = [];

        function comb_(pos, val) {
          if (pos < m) {
            for (var i = val; i <= n - m; i++) {
              res[pos] = pos + i;
              comb_(pos + 1, i);
            }
          } else {
            returnValue.push([].concat(res));
          }
        }

        comb_(0, 0);
        return returnValue;
      }
      /*
      Rosetta Code: Comma quibblingPassed
         Comma quibbling is a task originally set by Eric Lippert in his blog.
         Write a function to generate a string output which is the concatenation of input words from a list/sequence where:
         An input of no words produces the output string of just the two brace characters ("{}")
        An input of just one word, e.g. ["ABC"], produces the output string of the word inside the two braces, e.g. "{ABC}"
        An input of two words, e.g. ["ABC", "DEF"], produces the output string of the two words inside the two braces with the words separated by the string " and ", e.g. "{ABC and DEF}"
        An input of three or more words, e.g. ["ABC", "DEF", "G", "H"], produces the output string of all but the last word separated by ", " with the last word separated by " and " and all within braces; e.g. "{ABC, DEF, G and H}"
       */

    }, {
      key: "quibble",
      value: function quibble(words) {
        // Good luck!
        var ret = "{" + words.join(",") + "}";
        var pos = ret.lastIndexOf(",");

        if (pos !== -1) {
          ret = ret.substr(0, pos) + " and " + ret.substr(pos + 1);
        }

        return ret;
      }
      /*
      Rosetta Code: Compare a list of stringsPassed
       Given a list of arbitrarily many strings, implement a function for each of the following conditions:
         test if they are all lexically equal
        test if every string is lexically less than the one after it (i.e. whether the list is in strict ascending order)
       */

    }, {
      key: "allEqual",
      value: function allEqual(arr) {
        return arr.every(function (a) {
          return a == arr[0];
        });
      }
    }, {
      key: "azSorted",
      value: function azSorted(arr) {
        // Good luck!
        for (var i = 0; i < arr.length - 1; i++) {
          if (arr[i] >= arr[i + 1]) return false;
        }

        return true;
      }
      /*
      Rosetta Code: Emirp primes
       An emirp (prime spelled backwards) are primes that when reversed (in their decimal representation) are a different prime.
       Write a function that:
           Shows the first n emirp numbers.
          Shows the emirp numbers in a range.
          Shows the number of emirps in a range.
          Shows the nth emirp number.
       The function should accept two parameters. The first will receive n or the range as an array. The second will receive a boolean, that specifies if the function returns the emirps as an array or a single number (the number of primes in the range or the nth prime). According to the parameters the function should return an array or a number.
      */

    }, {
      key: "emirps",
      value: function emirps(n, option) {
        // Good luck!
        console.log(option);
        var primes = new Set();
        var emirps = [];
        var count = 0;
        var number = 11;

        if (typeof n == "number") {
          while (count < n) {
            var emirp = parseInt(number.toString().split("").reverse().join(""));

            if (emirp !== number && isPrime(emirp) && isPrime(number)) {
              emirps.push(number);
              count++;
            }

            number += 2;
          }
        } else {
          number = n[0] % 2 == 0 ? n[0] + 1 : n[0];
          n = n[1];

          while (number < n) {
            var _emirp = parseInt(number.toString().split("").reverse().join(""));

            if (_emirp !== number && isPrime(_emirp) && isPrime(number)) {
              emirps.push(number);
              count++;
            }

            number += 2;
          }
        }

        if (option === undefined) {
          return number - 2;
        }

        if (option) {
          return emirps;
        } else {
          return count;
        }

        function isPrime(number) {
          if (primes.has(number)) return true;
          var root = Math.ceil(Math.sqrt(number));

          for (var i = 2; i <= root; i++) {
            if (number % i === 0) {
              return false;
            }
          }

          primes.add(number);
          return true;
        }
      }
      /*
      Rosetta Code: Entropy
       Calculate the Shannon entropy H of a given input string.
       Given the discreet random variable X
      that is a string of N "symbols" (total characters) consisting of n
       different characters (n=2 for binary), the Shannon entropy of X in bits/symbol is:
       H2(X)=−∑ni=1countiNlog2(countiN)
       where counti
      is the count of character ni.
      */

    }, {
      key: "entropy",
      value: function entropy(str) {
        // Good luck!
        return _toConsumableArray(new Set(str)).map(function (chr) {
          return str.match(new RegExp(chr, "g")).length;
        }).reduce(function (sum, frequency) {
          var p = frequency / str.length;
          return sum + p * Math.log2(1 / p);
        }, 0);
      }
      /*
      Rosetta Code: Equilibrium index
         An equilibrium index of a sequence is an index into the sequence such that the sum of elements at lower indices is equal to the sum of elements at higher indices.
         For example, in a sequence A
         :
             A0=−7
         A1=1
        A2=5
        A3=2
        A4=−4
        A5=3
        A6=0
         3 is an equilibrium index, because:
             A0+A1+A2=A4+A5+A6
         6 is also an equilibrium index, because:
             A0+A1+A2+A3+A4+A5=0
         (sum of zero elements is zero)
         7 is not an equilibrium index, because it is not a valid index of sequence A
         .
         Write a function that, given a sequence, returns its equilibrium indices (if any).
         Assume that the sequence may be very long.
      */

    }, {
      key: "equilibrium",
      value: function equilibrium(a) {
        // Good luck!
        var res = [];

        for (var i = 0; i < a.length; i++) {
          var _ref = [a.slice(0, i), a.slice(i + 1)],
              left = _ref[0],
              right = _ref[1];
          var sumLeft = left.reduce(function (a, b) {
            return a + b;
          }, 0);
          var sumRight = right.reduce(function (a, b) {
            return a + b;
          }, 0);

          if (sumLeft - sumRight == 0) {
            res.push(i);
          }
        }

        return res;
      }
      /*
      Rosetta Code: Ethiopian multiplication
       Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.
       Method:
         Take two numbers to be multiplied and write them down at the top of two columns
        In the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of 1
        In the right-hand column repeatedly double the last number and write the result below. stop when you add a result in the same row as where the left hand column shows 1
        Examine the table produced and discard any row where the value in the left column is even
        Sum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together
       */

    }, {
      key: "eth_mult",
      value: function eth_mult(a, b) {
        // Good luck!
        var table = [[a, b]];

        while (a !== 1) {
          var _ref2 = [Math.floor(a / 2), b * 2];
          a = _ref2[0];
          b = _ref2[1];
          table.push([a, b]);
        }

        return table.filter(function (x) {
          return x[0] % 2 !== 0;
        }).reduce(function (sum, el) {
          return sum + el[1];
        }, 0);
      }
      /*
      Rosetta Code: Euler method
       Euler's method numerically approximates solutions of first-order ordinary differential equations (ODEs) with a given initial value. It is an explicit method for solving initial value problems (IVPs), as described in the wikipedia page.
      */

    }, {
      key: "eulersMethod",
      value: function eulersMethod(x1, y1, x2, h) {
        // Good luck!
        var x = x1,
            y = y1;

        while (x < x2 && x1 < x2 || x > x2 && x1 > x2) {
          // Calculate the next values
          y += h * cooling(y);
          x += h;
        }

        return y;

        function cooling(y) {
          return -0.07 * (y - 20);
        }
      }
      /*
      Rosetta Code: Evaluate binomial coefficients
      Write a function to calculate the binomial coefficient for the given value of n and k.
      This formula is recommended:
      (nk)=n!(n−k)!k!=n(n−1)(n−2)…(n−k+1)k(k−1)(k−2)…1
      */

    }, {
      key: "binom",
      value: function binom(n, k) {
        // Good luck!
        return rFact(n) / (rFact(n - k) * rFact(k));

        function rFact(num) {
          if (num === 0) {
            return 1;
          } else {
            return num * rFact(num - 1);
          }
        }
      }
      /*
        Rosetta Code: Execute a Markov algorithm
      
        Create an interpreter for a Markov Algorithm.
      
        Rules have the syntax:
      
        [ruleset] ::= (([comment] | [rule]) [newline]+)*
        [comment] ::= # {[any character]}
        [rule] ::= [pattern] [whitespace] -> [whitespace] [.] [replacement]
        [whitespace] ::= ([tab] | [space]) [[whitespace]]
      
        There is one rule per line.
      
        If there is a . (period) present before the [replacement], then this is a terminating rule in which case the interpreter must halt execution.
      
        A ruleset consists of a sequence of rules, with optional comments.
      */

    }, {
      key: "markov",
      value: function markov(rules, test) {
        // Good luck!
        var regex = /#.*/gm;
        var line = 0,
            pattern,
            replacement,
            terminating = false;

        while (line < rules.length) {
          if (regex.test(rules[line])) {
            console.log("coucou");
            line++;
            continue;
          }

          var _rules$line$split$map = rules[line].split(" -> ").map(function (x) {
            return x.trim();
          });

          var _rules$line$split$map2 = _slicedToArray(_rules$line$split$map, 2);

          pattern = _rules$line$split$map2[0];
          replacement = _rules$line$split$map2[1];

          if (replacement.charAt(0) == ".") {
            terminating = true;
            replacement = replacement.substr(1);
          }

          test = test.replace(pattern, replacement);
          if (terminating) break;
          line++;
        }

        return test;
      }
      /*
      Rosetta Code: Factors of an integer
       Write a function that returns the factors of a positive integer as an array.
       These factors are the positive integers by which the number being factored can be divided to yield a positive integer result.
      */

    }, {
      key: "factors",
      value: function factors(num) {
        // Good luck!
        var res = [];

        for (var i = 1; i <= num; i++) {
          if (num % i == 0) {
            res.push(i);
          }
        }

        return res;
      }
      /*
      Rosetta Code: Farey sequence
       The Farey sequence Fn of order n is the sequence of completely reduced fractions between 0 and 1 which, when in lowest terms, have denominators less than or equal to n, arranged in order of increasing size.
       The Farey sequence is sometimes incorrectly called a Farey series.
       Each Farey sequence:
           starts with the value 0, denoted by the fraction 01
       ends with the value 1, denoted by the fraction 11
      .
      */

    }, {
      key: "farey",
      value: function farey(n) {
        // Good luck!
        var fractions = this.combinations(2, n + 1);
        fractions.push([n, n]);
        fractions = fractions.filter(function (el, index) {
          for (var i = 0; i < index; i++) {
            if (el[0] / el[1] == fractions[i][0] / fractions[i][1]) {
              return false;
            }
          }

          return true;
        }).sort(function (a, b) {
          return a[0] / a[1] > b[0] / b[1];
        }).map(function (el) {
          return el[0] + "/" + el[1];
        });
        return fractions;
      }
      /*
      Rosetta Code: Fibonacci n-step number sequences
      These number series are an expansion of the ordinary Fibonacci sequence where:
         For n=2
      we have the Fibonacci sequence; with initial values [1,1] and F2k=F2k−1+F2k−2
      For n=3
      we have the tribonacci sequence; with initial values [1,1,2] and F3k=F3k−1+F3k−2+F3k−3
      For n=4
      we have the tetranacci sequence; with initial values [1,1,2,4] and F4k=F4k−1+F4k−2+F4k−3+F4k−4
      ...
      For general n>2
      we have the Fibonacci n-step sequence - Fnk; with initial values of the first n values of the (n−1)'th Fibonacci n-step sequence Fn−1k; and k'th value of this n'th sequence being Fnk=∑(n)i=1F(n)k−i
      For small values of n
      , Greek numeric prefixes are sometimes used to individually name each series.
      Fibonacci n
      -step sequences:
      n
      Series name	Values
      2	fibonacci	1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...
      3	tribonacci	1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...
      4	tetranacci	1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...
      5	pentanacci	1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...
      6	hexanacci	1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...
      7	heptanacci	1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ...
      8	octonacci	1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ...
      9	nonanacci	1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ...
      10	decanacci	1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ...
      Allied sequences can be generated where the initial values are changed: The Lucas series sums the two preceding values like the fibonacci series for n=2
      but uses [2,1]
      as its initial values.
      Write a function to generate Fibonacci n
      -step number sequences and Lucas sequences. The first parameter will be n. The second parameter will be the number of elements to be returned. The third parameter will specify whether to output the Fibonacci sequence or the Lucas sequence. If the parameter is "f" then return the Fibonacci sequence and if it is "l", then return the Lucas sequence. The sequences must be returned as an array.
      */

    }, {
      key: "fib_luc",
      value: function fib_luc(n, len, w) {
        // Good luck!
        var fib;

        if (n == 2) {
          fib = w == "f" ? [1, 1] : [2, 1];
        } else {
          fib = this.fib_luc(n - 1, n, w);
        }

        var index = n;

        while (index < len) {
          var sum = 0;

          for (var i = n; i >= 1; i--) {
            sum += fib[index - i];
          }

          fib.push(sum);
          index++;
        }

        return fib;
      }
      /*
      Rosetta Code: Fibonacci sequence
       Write a function to generate the nth Fibonacci number.
       The nth Fibonacci number is given by:
       Fn = Fn-1 + Fn-2
       The first two terms of the series are 0 and 1.
       Hence, the series is: 0, 1, 1, 2, 3, 5, 8, 13...
      */

    }, {
      key: "fibonacci",
      value: function fibonacci(n) {
        // Good luck!
        var fib = [0, 1];
        var index = 2;

        while (index < n) {
          fib.push(fib[index - 2] + fib[index - 1]);
          index++;
        }

        return fib[fib.length - 1];
      }
      /*
        Rosetta Code: Fibonacci word
      
        The Fibonacci Word may be created in a manner analogous to the Fibonacci Sequence as described here:
      
        Define  F_Word1  as  1
        Define  F_Word2  as  0
        Form   F_Word3  as  F_Word2   concatenated with  F_Word1   i.e.:  01
        Form   F_Wordn  as  F_Wordn-1  concatenated with  F_wordn-2
      
        Write a function to return the Fibonacci Words up to n. n will be provided as a parameter to the function. The function should return an array of objects. The objects should be of the form: { N: 1, Length: 1, Entropy: 0, Word: '1' }.
      */

    }, {
      key: "fibWord",
      value: function fibWord(n) {
        // Good luck!
        var words = [{
          N: 1,
          Length: 1,
          Entropy: 0,
          Word: "1"
        }, {
          N: 2,
          Length: 1,
          Entropy: 0,
          Word: "0"
        }];
        var index = 2;

        while (index <= n) {
          var str = words[index - 1].Word + words[index - 2].Word;
          var newWord = {
            N: index + 1,
            Length: str.length,
            Entropy: entropy(str),
            Word: str
          };
          words.push(newWord);
          index++;
        }

        return words;

        function entropy(str) {
          // Good luck!
          return _toConsumableArray(new Set(str)).map(function (chr) {
            return str.match(new RegExp(chr, "g")).length;
          }).reduce(function (sum, frequency) {
            var p = frequency / str.length;
            return sum + p * Math.log2(1 / p);
          }, 0);
        }
      }
      /*
      Rosetta Code: Fractran
      FRACTRAN is a Turing-complete esoteric programming language invented by the mathematician John Horton Conway.
      A FRACTRAN program is an ordered list of positive fractions P=(f1,f2,…,fm)
      , together with an initial positive integer input n
      .
      The program is run by updating the integer n
      as follows:
         for the first fraction, fi
      , in the list for which nfi is an integer, replace n with nfi
      ;
      repeat this rule until no fraction in the list produces an integer when multiplied by n
      , then halt.
      */

    }, {
      key: "fractran",
      value: function fractran(progStr) {
        // Good luck!
        var fractions = progStr.split(", ").map(function (x) {
          return x.split("/");
        });
        var sequence = [];
        var n = 2;
        var i = 0;
        var length = 0;

        while (i < fractions.length && length < 10) {
          var nFi = n * fractions[i][0] / fractions[i][1];

          if (Number.isInteger(nFi)) {
            console.log("ok -> n = ".concat(n, ", ").concat(n, " * (").concat(fractions[i][0], " / ").concat(fractions[i][1], ") = ").concat(nFi));
            sequence.push(nFi);
            n = nFi;
            i = 0;
            length++;
          } else {
            console.log("not ok -> n = ".concat(n, ", ").concat(n, " * (").concat(fractions[i][0], " / ").concat(fractions[i][1], ") = ").concat(nFi));
            i++;
          }
        }

        return sequence;
      }
      /*
        The International Bank Account Number (IBAN) is an internationally agreed means of identifying bank accounts across national borders with a reduced risk of propagating transcription errors.
       The IBAN consists of up to 34 alphanumeric characters:
           first the two-letter ISO 3166-1 alpha-2 country code
          then two check digits, and
          finally a country-specific Basic Bank Account Number (BBAN).
       The check digits enable a sanity check of the bank account number to confirm its integrity even before submitting a transaction.
      */

    }, {
      key: "isIbanValid",
      value: function isIbanValid(iban) {
        var ibanLen = {
          NO: 15,
          BE: 16,
          DK: 18,
          FI: 18,
          FO: 18,
          GL: 18,
          NL: 18,
          MK: 19,
          SI: 19,
          AT: 20,
          BA: 20,
          EE: 20,
          KZ: 20,
          LT: 20,
          LU: 20,
          CR: 21,
          CH: 21,
          HR: 21,
          LI: 21,
          LV: 21,
          BG: 22,
          BH: 22,
          DE: 22,
          GB: 22,
          GE: 22,
          IE: 22,
          ME: 22,
          RS: 22,
          AE: 23,
          GI: 23,
          IL: 23,
          AD: 24,
          CZ: 24,
          ES: 24,
          MD: 24,
          PK: 24,
          RO: 24,
          SA: 24,
          SE: 24,
          SK: 24,
          VG: 24,
          TN: 24,
          PT: 25,
          IS: 26,
          TR: 26,
          FR: 27,
          GR: 27,
          IT: 27,
          MC: 27,
          MR: 27,
          SM: 27,
          AL: 28,
          AZ: 28,
          CY: 28,
          DO: 28,
          GT: 28,
          HU: 28,
          LB: 28,
          PL: 28,
          BR: 29,
          PS: 29,
          KW: 30,
          MU: 30,
          MT: 31
        };
        iban = iban.replace(/\s/g, "");
        if (!iban.match(/^[\dA-Z]+$/)) return false;
        var len = iban.length;
        if (len != ibanLen[iban.substr(0, 2)]) return false;
        iban = iban.substr(4) + iban.substr(0, 4);

        for (var s = "", i = 0; i < len; i += 1) {
          s += parseInt(iban.charAt(i), 36);
        }

        for (var m = s.substr(0, 15) % 97, s = s.substr(15); s; s = s.substr(13)) {
          m = (m + s.substr(0, 13)) % 97;
        }

        return m == 1;
      }
      /*
        Rosetta Code: Identity matrix
      
        An identity matrix is a square matrix of size n×n
      
        , where the diagonal elements are all 1s (ones), and all the other elements are all 0s (zeroes).
      
            In=⎡⎣⎢100010001⎤⎦⎥
      
        Write a function that takes a number n as a parameter and returns the identity matrix of order n×n
      .
      */

    }, {
      key: "idMatrix",
      value: function idMatrix(n) {
        // Good luck!
        var matrix = _toConsumableArray(Array(n));

        for (var i = 0; i < n; i++) {
          matrix[i] = _toConsumableArray(Array(n));
        }

        for (var _i6 = 0; _i6 < n; _i6++) {
          for (var j = 0; j < n; j++) {
            if (_i6 == j) {
              matrix[_i6][j] = 1;
            } else {
              matrix[_i6][j] = 0;
            }
          }
        }

        return matrix;
      }
      /*
      Rosetta Code: Iterated digits squaring
       If you add the square of the digits of a Natural number (an integer bigger than zero), you always end with either 1 or 89:
       15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
      7 -> 49 -> 97 -> 130 -> 10 -> 1
       Write a function that takes a number as a parameter and returns 1 or 89 after performing the mentioned process.
      */

    }, {
      key: "iteratedSquare",
      value: function iteratedSquare(n) {
        // Good luck!
        while (n !== 1 && n !== 89) {
          var a = n.toString().split("");

          if (a[1] == undefined) {
            n = Math.pow(a[0], 2);
          } else {
            n = Math.pow(a[0], 2) + Math.pow(a[1], 2);
          }
        }

        return n;
      }
      /*
      Rosetta Code: Jaro distance
       The Jaro distance is a measure of similarity between two strings. The higher the Jaro distance for two strings is, the more similar the strings are. The score is normalized such that 0 equates to no similarity and 1 is an exact match. 
      */

    }, {
      key: "jaro",
      value: function jaro(s, t) {
        // Good luck!
        var m = 0;
        var transpositions = 0;
        var maxDistance = Math.max(s.length, t.length) / 2 - 1;

        var s_matches = _toConsumableArray(Array(s.length));

        var t_matches = _toConsumableArray(Array(t.length));

        for (var i = 0; i < s.length; i++) {
          var start = Math.max(0, i - maxDistance);
          var end = Math.min(i + maxDistance + 1, t.length);

          for (var j = start; j < end; j++) {
            if (t_matches[j]) continue;
            if (s.charAt(i) !== t.charAt(j)) continue;
            m++;
            s_matches[i] = true;
            t_matches[j] = true;
            break;
          }
        }

        if (m == 0) return 0;
        var k = 0;

        for (var _i7 = 0; _i7 < s.length; _i7++) {
          if (!s_matches[_i7]) continue;

          while (!t_matches[k]) {
            k++;
          }

          if (s.charAt(_i7) != t.charAt(k)) transpositions++;
          k++;
        }

        transpositions = transpositions / 2;
        return (m / s.length + m / t.length + (m - transpositions) / m) / 3;
      }
      /*
      Rosetta Code: JortSort
       jortSort is a sorting toolset that makes the user do the work and guarantees efficiency because you don't have to sort ever again. It was originally presented by Jenn "Moneydollars" Schiffer at the prestigious JSConf.
       jortSort should be a function that takes a single array of comparable objects as its argument. It then sorts the array in ascending order and compares the sorted array to the originally provided array. If the arrays match (i.e. the original array was already sorted), the function returns true. If the arrays do not match (i.e. the original array was not sorted), the function returns false.
      */

    }, {
      key: "jortsort",
      value: function jortsort(array) {
        // Good luck!
        for (var i = 1; i < array.length; i++) {
          if (array[i - 1] > array[i]) return false;
        }

        return true;
      }
      /*
      Josephus problem is a math puzzle with a grim description: n prisoners are standing on a circle, sequentially numbered from 0 to n−1
      .
      An executioner walks along the circle, starting from prisoner 0
      , removing every k
      -th prisoner and killing him.
      As the process goes on, the circle becomes smaller and smaller, until only one prisoner remains, who is then freed.
      For example, if there are n=5
      prisoners and k=2
      , the order the prisoners are killed in (let's call it the "killing sequence") will be 1, 3, 0, and 4, and the survivor will be #2.
      Given any n,k>0
      , find out which prisoner will be the final survivor.
      In one such incident, there were 41 prisoners and every 3rd prisoner was being killed (k=3
      ).
      Among them was a clever chap name Josephus who worked out the problem, stood at the surviving position, and lived on to tell the tale.
      Which number was he?
      */

    }, {
      key: "josephus",
      value: function josephus(n, k, s) {
        s = s | 1;

        for (var ps = [], i = n; i--;) {
          ps[i] = i;
        }

        for (var ks = [], i = --k; ps.length > s; i = (i + k) % ps.length) {
          ks.push(ps.splice(i, 1));
        }

        return ps[0] + 1;
      }
      /*
      Rosetta Code: K-d tree
       A k-d tree (short for k-dimensional tree) is a space-partitioning data structure for organizing points in a k-dimensional space. k-d trees are a useful data structure for several applications, such as searches involving a multidimensional search key (e.g. range searches and nearest neighbor searches). k-d trees are a special case of binary space partitioning trees. k-d trees are not suitable, however, for efficiently finding the nearest neighbor in high dimensional spaces. As a general rule, if the dimensionality is k, the number of points in the data, N, should be N ≫ 2k. Otherwise, when k-d trees are used with high-dimensional data, most of the points in the tree will be evaluated and the efficiency is no better than exhaustive search, and other methods such as approximate nearest-neighbor are used instead.
       Write a function to perform a nearest neighbour search using k-d tree. The function takes two parameters: an array of k-dimensional points, and a single k-dimensional point whose nearest neighbour should be returned by the function. A k-dimensional point will be given as an array of k elements.
       */

    }, {
      key: "kdNN",
      value: function kdNN(fpoints, fpoint) {
        // Good luck!
        var distances = [];
        var dimension = fpoint.length;

        for (var i = 0; i < fpoints.length; i++) {
          var d = 0;

          for (var j = 0; j < dimension; j++) {
            d += Math.pow(fpoints[i][j] - fpoint[j], 2);
            console.log(d);
          }

          d = Math.sqrt(d);
          distances.push({
            point: fpoints[i],
            distance: d
          });
        }

        distances.sort(function (a, b) {
          return a.distance > b.distance;
        });
        return distances[0].point;
      }
      /*
        A positive integer is a Kaprekar number if:
           It is 1, or,
          The decimal representation of its square may be split once into two parts consisting of positive integers which sum to the original number.
       Note that a split resulting in a part consisting purely of 0s is not valid, as 0 is not considered positive.Example
       Kaprekar numbers:
           2223 is a Kaprekar number, as 2223 * 2223 = 4941729, 4941729 may be split to 494 and 1729, and 494 + 1729 = 2223
          The series of Kaprekar numbers is known as A006886, and begins as 1, 9, 45, 55, ...
       Write a function that takes a number n
      , a base bs, and returns true if the number is a Kaprekar number for the given base. Otherwise, the function returns false.
      */

    }, {
      key: "isKaprekar",
      value: function isKaprekar(n, bs) {
        // Good luck!
        if (n == 1) return true;
        var nBaseSquared = Math.pow(n, 2).toString(bs);

        for (var i = 0; i < nBaseSquared.length; i++) {
          var left = nBaseSquared.substr(0, i);
          var right = nBaseSquared.substr(i);

          if (parseInt(left, bs) + parseInt(right, bs) == n) {
            console.log(left, right);
            return true;
          }
        }

        return false;
      }
      /*
      Rosetta Code: Knapsack problem/0-1
       The 0-1 knapsack problem is defined as follows:
       You are given an array of objects representing items to be put in a knapsack. The objects have 3 attributes: name, weight, and value. The items need to be selected so that the total weight does not exceed the maximum weight and the value is maximized.
       Write a function to solve the knapsack problem. The function is given the array of objects and the maximum weight as parameters. It should return the maximum total value possible.
      */

    }, {
      key: "knapsack2",
      value: function knapsack2(items, maxweight) {
        // Dynamic programming function
        var K = [];

        for (var i = 0; i <= items.length; i++) {
          K.push(_toConsumableArray(Array(items.length + 1)));
        }

        for (var _i8 = 0; _i8 <= items.length; _i8++) {
          for (var w = 0; w <= maxweight; w++) {
            if (_i8 == 0 || w == 0) {
              K[_i8][w] = 0;
            } else if (items[_i8 - 1].weight <= w) {
              K[_i8][w] = Math.max(items[_i8 - 1].value + K[_i8 - 1][w - items[_i8 - 1].weight], K[_i8 - 1][w]);
            } else {
              K[_i8][w] = K[_i8 - 1][w];
            }
          }
        }

        return K[items.length][maxweight];
      }
    }, {
      key: "knapsack",
      value: function knapsack(items, maxweight) {
        // Good luck!
        // Glouton function : not optimal
        var load = 0;
        var value = 0;

        for (var i = 0; i < items.length; i++) {
          items[i].ratio = items[i].value / items[i].weight;
        }

        items.sort(function (a, b) {
          return a.ratio < b.ratio;
        });
        var n = 0;

        while (n < items.length) {
          if (load + items[n].weight <= maxweight) {
            load += items[n].weight;
            value += items[n].value;
            console.log(items[n]);
          }

          n++;
        }

        console.log(load, value, maxweight - load);
        return value;
      }
      /*
      Rosetta Code: 9 billion names of God the integer
      This task is a variation of the short story by Arthur C. Clarke.
      (Solvers should be aware of the consequences of completing this task.)
      In detail, to specify what is meant by a "name":
         The integer 1 has 1 name "1".
        The integer 2 has 2 names "1+1" and "2".
        The integer 3 has 3 names "1+1+1", "2+1", and "3".
        The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".
        The integer 5 has 7 names "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".
      This can be visualized in the following form:
               1
            1   1
          1   1   1
        1   2   1   1
      1   2   2   1   1
      1   3   3   2   1   1
      Where row n
      corresponds to integer n, and each column C in row m from left to right corresponds to the number of names beginning with C.
      Optionally note that the sum of the n-th row P(n) is the integer partition function.
      Implement a function that returns the sum of the n-th row.
      */

    }, {
      key: "numberOfNames",
      value: function numberOfNames(num) {
        var cache = [[1]];

        function cumu(n) {
          var r, l, x, Aa, Mi;

          for (l = cache.length; l < n + 1; l++) {
            r = [0];

            for (x = 1; x < l + 1; x++) {
              r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
            }

            cache.push(r);
          }

          return cache[n];
        }

        function row(n) {
          var r = cumu(n),
              leArray = [],
              i;

          for (i = 0; i < n; i++) {
            leArray.push(r[i + 1] - r[i]);
          }

          return leArray;
        }

        var sum;

        for (var i = 1; i <= num; i++) {
          var r = row(i);
          console.log(r);
          sum = r.reduce(function (a, b) {
            return a + b;
          }, 0);
        }

        return sum;
      }
      /*
      Rosetta Code: Align columns
       Given a text file of many lines, where fields within a line are delineated by a single $ character, write a program that aligns each column of fields by ensuring that words in each column are separated by at least one space. Further, allow for each word in a column to be either left justified, right justified, or center justified within its column.
       */

    }, {
      key: "formatText",
      value: function formatText(input, justification) {
        // Good luck!
        var cols = 0;

        for (var i = 0; i < input.length; i++) {
          if (input[i].charAt(input[i].length - 1) == "$") {
            input[i] = input[i].substr(0, input[i].length - 1);
          }

          input[i] = input[i].split("$");

          if (input[i].length > cols) {
            cols = input[i].length;
          }
        }

        console.log(cols);

        var colsLength = _toConsumableArray(Array(cols));

        for (var _i9 = 0; _i9 < colsLength.length; _i9++) {
          var max = 0;

          for (var j = 0; j < input.length; j++) {
            console.log(input[j][_i9]);

            if (input[j][_i9] == undefined) {
              input[j].push("");
            }

            if (input[j][_i9].length > max) {
              max = input[j][_i9].length;
            }
          }

          colsLength[_i9] = max;
        }

        for (var _i10 = 0; _i10 < input.length; _i10++) {
          for (var _j4 = 0; _j4 < colsLength.length; _j4++) {
            var l = colsLength[_j4] - input[_i10][_j4].length + 1;

            switch (justification) {
              case "left":
                input[_i10][_j4] = input[_i10][_j4] + " ".repeat(l);
                break;

              case "right":
                input[_i10][_j4] = " ".repeat(l) + input[_i10][_j4];
                break;

              case "center":
                var c = 1;
                if (l % 2 == 1) c = 0;
                l = (l - 1) / 2;
                input[_i10][_j4] = " ".repeat(l + c) + input[_i10][_j4] + " ".repeat(l + 1);
                break;
            }
          }

          input[_i10] = input[_i10].join("");
        }

        console.log(colsLength);
        return input;
      }
      /*
      Rosetta Code: Sort an array of composite structures
      Write a function that takes an array of objects as a parameter. The function should sort the array according to the 'key' attribute of the objects and return the sorted array.
      */

    }, {
      key: "sortByKey",
      value: function sortByKey(arr) {
        // Good luck!
        return arr.sort(function (a, b) {
          return a.key > b.key;
        });
      }
      /*
      Rosetta Code: Sort disjoint sublist
      Given a list of values and a set of integer indices into that value list, the task is to sort the values at the given indices, but preserving the values at indices outside the set of those to be sorted.
      Make your function work with the following list of values and set of indices:
      values: [7, 6, 5, 4, 3, 2, 1, 0]
      indices(0-based): {6, 1, 7}
      Where the correct result would be:
      [7, 0, 5, 4, 3, 2, 1, 6].
      */

    }, {
      key: "sortDisjoint",
      value: function sortDisjoint(values, indices) {
        // Good luck!
        var subArr = [];
        indices.sort(function (a, b) {
          return a > b;
        });

        for (var i = 0; i < indices.length; i++) {
          subArr.push(values[indices[i]]);
        }

        subArr.sort(function (a, b) {
          return a > b;
        });

        for (var _i11 = 0; _i11 < indices.length; _i11++) {
          values[indices[_i11]] = subArr[_i11];
        }

        console.log(values);
        return values;
      }
      /*
      Rosetta Code: Sort stability
      
      When sorting records in a table by a particular column or field, a stable sort will always retain the relative order of records that have the same key.
      
      For example, in this table of countries and cities, a stable sort on the second column, the cities, would keep the US Birmingham above the UK Birmingham. (Although an unstable sort might, in this case, place the US Birmingham above the UK Birmingham, a stable sort routine would guarantee it).
      
      UK  London
      US  New York
      US  Birmingham
      UK  Birmingham
      
      Similarly, stable sorting on just the first column would generate "UK London" as the first item and "US Birmingham" as the last item (since the order of the elements having the same first word – "UK" or "US" – would be maintained).
      
      Write a function that takes a 2D array as a parameter. Each element has 2 elements similar to the above example. The function should sort the array as mentioned previously and return the sorted array.
      */

    }, {
      key: "stableSort",
      value: function stableSort(arr) {
        // Good luck!
        arr.sort(function (a, b) {
          return a[1] > b[1];
        });
        return arr;
      }
      /*
      Rosetta Code: Sort using a custom comparator
       Write a function to sort an array (or list) of strings in order of descending length, and in ascending lexicographic order for strings of equal length.
      */

    }, {
      key: "lengthSorter",
      value: function lengthSorter(arr) {
        // Good luck!
        return arr.sort(function (a, b) {
          return a.length == b.length ? a > b : a.length < b.length;
        });
      }
    }]);

    return algorithms;
  }();

  return algorithms;

})));
