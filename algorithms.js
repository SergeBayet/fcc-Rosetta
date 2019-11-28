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
          return Math.max(a.length, b.length);
        }, 0);
        console.log(lengthMax);
        var result = "";
        var remainder = 0;
        numbers = leading(numbers, lengthMax, "0");
        var pointer = lengthMax - 1;
        console.log(numbers, pointer);

        while (pointer >= 0) {
          for (var i = 0; i < numbers.length - 1; i++) {
            var _ref = [numbers[i].charAt(pointer), numbers[i + 1].charAt(pointer)],
                a = _ref[0],
                b = _ref[1];
            var x = parseInt(a) + parseInt(b) + remainder;
            console.log(i);
            result = x.toString().substr(-1) + result;
            remainder = Math.floor(x / 10);
          }

          pointer--;
        }

        if (remainder > 0) {
          result = remainder.toString() + result;
        }

        return parseInt(result.substring(0, 10));

        function leading(array, length, _char) {
          return array.map(function (x) {
            return (_char.repeat(length) + x).substr(-length);
          });
        }
      }
    }]);

    return algorithms;
  }();

  return algorithms;

})));
