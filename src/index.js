const version = "1.0.0";

export default class algorithms {
  constructor(params) {
    console.log("hello from algorithms");
  }
  /*
  Rosetta Code: Gray code

	Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.

	This is a useful encoding for reducing hardware data hazards with values that change rapidly and/or connect to slower hardware as inputs.

	It is also useful for generating inputs for Karnaugh maps in order from left to right or top to bottom.
	*/
  gray(enc, number) {
    if (enc) {
      // number XOR SHR(number)

      return number ^ (number >> 1);
    } else {
      let ret = number;
      while ((number = number >> 1)) {
        ret = ret ^ number;
      }
      return ret;
    }
  }

  /* Rosetta Code: Greatest common divisor

	Write a function that returns the greatest common divisor of two integers. 
	
	*/

  gcd(a, b) {
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

  maximumSubsequence(population) {
    let ret = [];
    let startIndex = 0;
    let endIndex = 0;
    let max = 0;
    for (let i = 0; i < population.length; i++) {
      let k = 0;
      for (let j = i; j < population.length; j++) {
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
  hailstoneSequence() {
    let res = [];
    let res27;
    // Good luck!

    res27 = calculate(27);

    let number,
      max = 0;
    for (let i = 1; i <= 100000; i++) {
      let l = calculate(i);
      if (l.length > max) {
        max = l.length;
        number = i;
      }
    }

    function calculate(n) {
      let sequence = [];
      //let index
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
    return [[...res27.slice(0, 4).concat([8, 4, 2, 1])], [max, number]];
  }

  /*
	Rosetta Code: Happy numbers

	A happy number is defined by the following process:

	Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.

	Implement a function that returns true if the number is happy, or false if not.
	*/
  happy(number) {
    let cycle = [];

    while (number !== 1 && !cycle[number]) {
      cycle[m] = true;
      let m = 0;
      let str = number.toString();
      for (let i = 0; i < str.length; i++) {
        m += str.charAt(i) ** 2;
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
  isHarshadOrNiven() {
    const res = {
      firstTwenty: [],
      firstOver1000: undefined
    };
    // Change after this line
    let i = 1;
    let count = 1;
    while (count <= 20) {
      if (calculate(i)) {
        res.firstTwenty.push(i);
        count++;
      }
      i++;
    }
    let found = false;
    i = 1001;
    while (!found) {
      if (calculate(i)) {
        res.firstOver1000 = i;
        found = true;
      }
      i++;
    }

    function calculate(num) {
      let m = 0;
      let str = num.toString();
      for (let i = 0; i < str.length; i++) {
        m += parseInt(str.charAt(i));
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

  arrToObj(keys, vals) {
    let ret = {};
    keys.forEach((value, key) => {
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
  hashJoin(hash1, hash2) {
    // Good luck!
    let res = [];
    for (let elA of hash1) {
      console.log(elA);
      for (let elB of hash2) {
        if (elA.name == elB.character) {
          res.push({
            A_age: elA.age,
            A_name: elA.name,
            B_character: elB.character,
            B_nemesis: elB.nemesis
          });
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
  heronianTriangle(n) {
    // Good luck!
    let res = [];
    let count = 1;
    let a = 1,
      b = 1,
      c = 1;
    for (c = 1; a <= 200; c++) {
      for (b = 1; b <= c; b++) {
        for (a = 1; a <= b; a++) {
          if (this.gcd(a, this.gcd(b, c)) == 1) {
            let areaTriangle = this.area(a, b, c);

            if (
              areaTriangle - parseInt(areaTriangle) == 0 &&
              areaTriangle > 0
            ) {
              res.push([a, b, c]);
            }
          }
        }
      }
    }
    res.sort(
      (a, b) => this.area(a[0], a[1], a[2]) - this.area(b[0], b[1], b[2])
    );
    return res.slice(0, n);
  }

  area(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
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

  extendsRS(n) {
    let R = [null, 1, 3];
    let S = [null, 2, 4];
    let i = 3;
    while (i <= n) {
      R[i] = R[i - 1] + S[i - 1];

      for (let j = S[S.length - 1] + 1; j < R[i]; j++) {
        if (R.indexOf(j) == -1) {
          S.push(j);
        }
      }
      i++;
    }
    return [R, S];
  }
  ffr(n) {
    if (n == 1) return 1;
    let RS = this.extendsRS(n);
    return RS[0][n];
  }

  ffs(n) {
    if (n == 1) return 2;
    let RS = this.extendsRS(n);
    return RS[1][n];
  }
  /*
  Rosetta Code: Hofstadter Q sequence

  The Hofstadter Q sequence is defined as:

  Q(1)=Q(2)=1,Q(n)=Q(n−Q(n−1))+Q(n−Q(n−2)),n>2.

  It is defined like the Fibonacci sequence, but whereas the next term in the Fibonacci sequence is the sum of the previous two terms, in the Q sequence the previous two terms tell you how far to go back in the Q sequence to find the two numbers to sum to make the next term of the sequence.

  Implement the Hofstadter Q Sequence equation as a function. The function should accept number, n, and return an integer.
  */
  hofstadterQ(n) {
    // Good luck!

    let memo = [1, 1, 1];
    let Q = hQ(n);
    function hQ(n) {
      if (memo[n]) {
        return memo[n];
      } else {
        let i = hQ(n - hQ(n - 1)) + hQ(n - hQ(n - 2));
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
  solveSudoku(puzzle) {
    // Good luck!
    let solution = [...puzzle];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let squares = [[], [], [], [], [], [], [], [], []];
    let verticals = [[], [], [], [], [], [], [], [], []];

    for (let square = 0; square < 9; square++) {
      for (let digit = 0; digit < 9; digit++) {
        let col = (digit % 3) + (square % 3) * 3;
        let row = Math.floor(digit / 3) + Math.floor(square / 3) * 3;
        squares[square].push(solution[row][col]);
        verticals[square].push(solution[digit][square]);
      }
    }
    let pass = 0;
    let guessIt = false;
    let cache = [];
    let resolved = false;
    while (!resolved && pass < 100) {
      console.log("pass : " + pass);
      let nDigitResolved = 0;
      for (let line = 0; line < 9; line++) {
        for (let digit = 0; digit < 9; digit++) {
          if (solution[line][digit] == -1) {
            let nSquare = Math.floor(digit / 3) + Math.floor(line / 3) * 3;

            let numberPossibilities = numbers
              .filter(x => !~solution[line].indexOf(x))
              .filter(x => !~verticals[digit].indexOf(x))
              .filter(x => !~squares[nSquare].indexOf(x));

            if (numberPossibilities.length == 1) {
              solution[line][digit] = numberPossibilities[0];
              squares[nSquare][(digit % 3) + (line % 3) * 3] =
                numberPossibilities[0];
              verticals[digit][line] = numberPossibilities[0];
              console.log(
                "added digit: digit[" +
                digit +
                "] line [" +
                line +
                "] : " +
                numberPossibilities[0] +
                " (" +
                numberPossibilities +
                ")"
              );
              nDigitResolved++;
            } else if (numberPossibilities.length == 0) {
              console.log(
                "not possible to add to digit[" +
                digit +
                "] line [" +
                line +
                "]"
              );
              console.table(solution);
              let lastCache = cache.length - 1;

              while (lastCache >= 0) {
                let ind = cache[lastCache].choice + 1;
                if (ind > cache[lastCache].possibilities.length - 1) {
                  //console.log(ind, lastCache, cache[lastCache], cache[lastCache].possibilities.length);
                  cache.pop();
                  lastCache--;
                } else {
                  cache[lastCache].choice = ind;
                  solution = JSON.parse(
                    JSON.stringify(cache[lastCache].solution)
                  );
                  squares = JSON.parse(
                    JSON.stringify(cache[lastCache].squares)
                  );
                  verticals = JSON.parse(
                    JSON.stringify(cache[lastCache].verticals)
                  );
                  solution[cache[lastCache].line][cache[lastCache].digit] =
                    cache[lastCache].possibilities[ind];
                  nSquare =
                    Math.floor(cache[lastCache].digit / 3) +
                    Math.floor(cache[lastCache].line / 3) * 3;
                  squares[nSquare][
                    (cache[lastCache].digit % 3) +
                    (cache[lastCache].line % 3) * 3
                  ] = cache[lastCache].possibilities[ind];
                  verticals[cache[lastCache].digit][cache[lastCache].line] =
                    cache[lastCache].possibilities[ind];
                  guessIt = false;
                  console.log(
                    "Try another one : digit[" +
                    cache[lastCache].digit +
                    "] line[" +
                    cache[lastCache].line +
                    "]: " +
                    cache[lastCache].possibilities[ind]
                  );
                  console.table(cache[lastCache].solution);
                  nDigitResolved++;
                  break;
                }
              }
              if (lastCache < 0) {
                console.log("Invalid grid");
                console.table(solution);
                return false;
              }
            } else if (guessIt) {
              // Make a choice!!!
              // Clone the solution at this instant so we can roll back.

              cache.push({
                solution: JSON.parse(JSON.stringify(solution)),
                squares: JSON.parse(JSON.stringify(squares)),
                verticals: JSON.parse(JSON.stringify(verticals)),
                line: line,
                digit: digit,
                possibilities: numberPossibilities,
                choice: 0
              });

              guessIt = false;
              solution[line][digit] = numberPossibilities[0];
              squares[nSquare][(digit % 3) + (line % 3) * 3] =
                numberPossibilities[0];
              verticals[digit][line] = numberPossibilities[0];
              console.log(
                "Try : digit[" +
                digit +
                "] line[" +
                line +
                "]: " +
                numberPossibilities[0] +
                " (" +
                numberPossibilities +
                ")"
              );
              nDigitResolved++;
            }
          }
        }
        if (nDigitResolved == 0) {
          guessIt = true;
        }
      }
      pass++;
      resolved = true;
      for (let i = 0; i < 9; i++) {
        if (solution[i].some(x => x == -1)) {
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

  sumDigits(n) {
    // Good luck!
    let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let string = n.toString().toUpperCase();
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      sum += digits.indexOf(string.charAt(i));
    }
    return sum;
  }
  /* Rosetta Code: Sum multiples of 3 and 5

  The objective is to write a function that finds the sum of all positive multiples of 3 or 5 below n.
  */
  sumMults(n) {
    // Good luck!
    let currentNumber = 3;
    let mul = 0;
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
  sumOfASeries(a, b) {
    // Good luck!
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum += 1 / (i * i);
    }
    return sum;
  }

  /* Rosetta Code: Sum of squares

  Write a function to find the sum of squares of an array of integers.

  */

  sumsq(array) {
    // Good luck!
    let sum = array.reduce((a, b) => a + b * b, 0);
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
  sumTo100(n) {
    let ret = [];
    const ADD = 0,
      SUB = 1,
      JOIN = 2;

    const nexpr = 2 * Math.pow(9, 4);

    function evaluate(code) {
      let value = 0,
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
      let s = "";
      let a = 3 * Math.pow(9, 4),
        b = a / 3;

      for (var k = 1; k <= 9; k++) {
        switch (Math.floor((code % a) / b)) {
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
  wrap(text, limit) {
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
  YCombinator() {
    Y = f => (x => x(x))(y => f(x => y(y)(x)));

    factorial = this.Y(function (f) {
      return function (n) {
        return n > 1 ? n * f(n - 1) : 1;
      };
    });
  }

  /* Project Euler: Problem 10: Summation of primes

  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
  
  Find the sum of all the primes below n. */

  primeSummations(n) {
    let primes = new Set();
    let sum = 2;
    for (let i = n - 1; i >= 2; i--) {
      if (isPrime(i)) {
        sum += i;
      }
    }

    function isPrime(number) {
      if (primes.has(number)) return true;
      let root = Math.ceil(Math.sqrt(number));
      for (let i = 2; i <= root; i++) {
        if (number % i === 0) {
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

  largestGridProduct(
    arr = [
      [40, 17, 81, 18, 57],
      [74, 4, 36, 16, 29],
      [36, 42, 69, 73, 45],
      [51, 54, 69, 16, 92],
      [7, 97, 57, 32, 16]
    ]
  ) {
    // Good luck!

    const n = 4;
    let prod,
      max = 0;
    // Diagonally left

    for (let i = 0; i <= arr.length - n; i++) {
      for (let j = arr.length - 1; j >= n - 1; j--) {
        prod =
          arr[i][j] * arr[i + 1][j - 1] * arr[i + 2][j - 2] * arr[i + 3][j - 3];

        if (prod > max) {
          max = prod;
        }
      }
    }

    // Diagonally right

    for (let i = 0; i <= arr.length - n; i++) {
      for (let j = 0; j <= arr.length - n; j++) {
        prod =
          arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] * arr[i + 3][j + 3];
        if (prod > max) {
          max = prod;
        }
      }
    }

    // Vertical

    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j <= arr.length - n; j++) {
        prod = arr[j][i] * arr[j + 1][i] * arr[j + 2][i] * arr[j + 3][i];
        if (prod > max) {
          max = prod;
        }
      }
    }

    // Horizontal

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j <= arr[i].length - n; j++) {
        prod = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
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

  divisibleTriangleNumber(n) {
    // Good luck!
    let currentNumber = 1,
      nFactors = 0,
      triangleNumber;
    while (nFactors < n) {
      triangleNumber = getTriangleNumber(currentNumber);
      //console.log(triangleNumber);
      nFactors = getFactors(triangleNumber);

      currentNumber++;
    }

    function getTriangleNumber(n) {
      return (n * (n + 1)) / 2;
    }
    function getFactors(n) {
      let factors = new Set();
      let i = 1;
      let root = Math.ceil(Math.sqrt(n));

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

  largeSum(
    arr = [
      "37107287533902102798797998220837590246510135740250",
      "46376937677490009712648124896970078050417018260538"
    ]
  ) {
    let numbers = [...arr];
    let lengthMax = numbers.reduce((a, b) => Math.max(a, b.length), 0);
    let result = "";
    let remainder = 0;
    numbers = leading(numbers, lengthMax, "0");
    let unity = lengthMax - 1;
    //console.log(numbers, unity);
    while (unity >= 0) {
      let unitySum =
        numbers.reduce((a, b) => {
          return a + parseInt(b.charAt(unity));
        }, 0) + remainder;
      remainder = Math.floor(unitySum / 10);
      result = unitySum.toString().substr(-1) + result;
      unity--;
    }
    if (remainder > 0) {
      result = remainder.toString() + result;
    }
    return result;
    // return parseInt(result.substring(0, 10));    // For freecodecamp test
    function leading(array, length, char) {
      return array.map(x => (char.repeat(length) + x).substr(-length));
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
  longestCollatzSequence(limit) {
    // Good luck!

    let result = 1;
    let counter = Math.floor(limit / 2);
    let maxTerms = 0;
    while (counter <= limit) {
      let nTerms = termsCollatz(counter);
      if (nTerms > maxTerms) {
        maxTerms = nTerms;
        result = counter;
      }
      counter++;
    }
    return result;
    function termsCollatz(start) {
      let c = start;
      let nTerms = 0;
      while (c !== 1) {
        c = c % 2 == 0 ? c / 2 : 3 * c + 1;
        nTerms++;
      }
      return nTerms;
    }
  }
  latticePaths(n) {
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
  powerDigitSum(exponent) {
    // Good luck!
    // Doesn't work with big numbers ...
    return Math.pow(2, exponent)
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
  }
  powerDigitSumBigNumber(exponent) {
    let self = this;
    function power2exponent(exponent) {
      if (exponent == 0) return "1";
      let temp = "2";
      for (let i = 2; i <= exponent; i++) {
        temp = self.largeSum([temp, temp]);
      }
      return temp;
    }
    return power2exponent(exponent)
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
  }
  /*
  Project Euler: Problem 17: Number letter counts

  If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

  If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

  NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
  */

  numberLetterCounts(limit) {
    let numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(this.numberToLetters(i));
    }
    numbers = numbers.join("");
    numbers = numbers.replace(/\s/g, "");

    // Good luck!
    return numbers.length;
  }
  numberToLetters(n) {
    let numbers = {
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
    let result = [];
    let nString = n.toString().split("");
    let unity = nString.length;

    for (let i = 0; i < nString.length; i++) {
      switch (unity % 3) {
        case 0: // Hundreds
          if (numbers[nString[i]] !== undefined) {
            result.push(numbers[nString[i]]);
            result.push("hundred");
            result.push("and");
          }

          break;
        case 2: // Tens
          if (numbers[nString[i] + nString[i + 1]] !== undefined) {
            result.push(numbers[nString[i] + nString[i + 1]]);
            i++;
          } else if (numbers[nString[i] + "0"] !== undefined) {
            result.push(numbers[nString[i] + "0"]);
          }
          break;
        case 1: // Ones
          result.push(numbers[nString[i]]);
          if (unity == 4) {
            result.push("thousand");
          }
          break;
      }
      unity--;
    }
    //console.log(result);
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
  combinations(m, n) {
    // Good luck!
    let returnValue = [];
    let res = [];
    function comb_(pos, val) {
      if (pos < m) {
        for (let i = val; i <= n - m; i++) {
          res[pos] = pos + i;
          comb_(pos + 1, i);
        }
      } else {
        returnValue.push([...res]);
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
  quibble(words) {
    // Good luck!
    let ret = "{" + words.join(",") + "}";
    let pos = ret.lastIndexOf(",");
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
  allEqual(arr) {
    return arr.every(a => a == arr[0]);
  }

  azSorted(arr) {
    // Good luck!
    for (let i = 0; i < arr.length - 1; i++) {
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
  emirps(n, option) {
    // Good luck!
    console.log(option);
    let primes = new Set();
    let emirps = [];
    let count = 0;
    let number = 11;
    if (typeof n == "number") {
      while (count < n) {
        let emirp = parseInt(
          number
            .toString()
            .split("")
            .reverse()
            .join("")
        );
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
        let emirp = parseInt(
          number
            .toString()
            .split("")
            .reverse()
            .join("")
        );
        if (emirp !== number && isPrime(emirp) && isPrime(number)) {
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
      let root = Math.ceil(Math.sqrt(number));
      for (let i = 2; i <= root; i++) {
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
  entropy(str) {
    // Good luck!

    return [...new Set(str)]
      .map(chr => {
        return str.match(new RegExp(chr, "g")).length;
      })
      .reduce((sum, frequency) => {
        let p = frequency / str.length;
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

  equilibrium(a) {
    // Good luck!
    let res = [];
    for (let i = 0; i < a.length; i++) {
      let [left, right] = [a.slice(0, i), a.slice(i + 1)];
      let sumLeft = left.reduce((a, b) => a + b, 0);
      let sumRight = right.reduce((a, b) => a + b, 0);
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
  eth_mult(a, b) {
    // Good luck!
    let table = [[a, b]];
    while (a !== 1) {
      [a, b] = [Math.floor(a / 2), b * 2];
      table.push([a, b]);
    }
    return table
      .filter(x => x[0] % 2 !== 0)
      .reduce((sum, el) => sum + el[1], 0);
  }
  /*
  Rosetta Code: Euler method

  Euler's method numerically approximates solutions of first-order ordinary differential equations (ODEs) with a given initial value. It is an explicit method for solving initial value problems (IVPs), as described in the wikipedia page.
  */
  eulersMethod(x1, y1, x2, h) {
    // Good luck!
    let [x, y] = [x1, y1];

    while ((x < x2 && x1 < x2) || (x > x2 && x1 > x2)) {
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
  binom(n, k) {
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
  markov(rules, test) {
    // Good luck!
    const regex = /#.*/gm;
    let line = 0,
      pattern,
      replacement,
      terminating = false;

    while (line < rules.length) {
      if (regex.test(rules[line])) {
        console.log("coucou");
        line++;
        continue;
      }

      [pattern, replacement] = rules[line].split(" -> ").map(x => x.trim());

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
  factors(num) {
    // Good luck!
    let res = [];
    for (let i = 1; i <= num; i++) {
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
  farey(n) {
    // Good luck!
    let fractions = this.combinations(2, n + 1);
    fractions.push([n, n]);
    fractions = fractions
      .filter((el, index) => {
        for (let i = 0; i < index; i++) {
          if (el[0] / el[1] == fractions[i][0] / fractions[i][1]) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        return a[0] / a[1] > b[0] / b[1];
      })
      .map(el => el[0] + "/" + el[1]);

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
  fib_luc(n, len, w) {
    // Good luck!
    let fib;
    if (n == 2) {
      fib = w == "f" ? [1, 1] : [2, 1];
    } else {
      fib = this.fib_luc(n - 1, n, w);
    }

    let index = n;
    while (index < len) {
      let sum = 0;
      for (let i = n; i >= 1; i--) {
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
  fibonacci(n) {
    // Good luck!
    let fib = [0, 1];
    let index = 2;
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

  fibWord(n) {
    // Good luck!
    let words = [
      { N: 1, Length: 1, Entropy: 0, Word: "1" },
      { N: 2, Length: 1, Entropy: 0, Word: "0" }
    ];
    let index = 2;
    while (index <= n) {
      let str = words[index - 1].Word + words[index - 2].Word;
      let newWord = {
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

      return [...new Set(str)]
        .map(chr => {
          return str.match(new RegExp(chr, "g")).length;
        })
        .reduce((sum, frequency) => {
          let p = frequency / str.length;
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
  fractran(progStr) {
    // Good luck!
    let fractions = progStr.split(", ").map(x => x.split("/"));

    let sequence = [];
    let n = 2;
    let i = 0;
    let length = 0;
    while (i < fractions.length && length < 10) {
      let nFi = (n * fractions[i][0]) / fractions[i][1];

      if (Number.isInteger(nFi)) {
        console.log(
          `ok -> n = ${n}, ${n} * (${fractions[i][0]} / ${fractions[i][1]}) = ${nFi}`
        );
        sequence.push(nFi);
        n = nFi;
        i = 0;
        length++;
      } else {
        console.log(
          `not ok -> n = ${n}, ${n} * (${fractions[i][0]} / ${fractions[i][1]}) = ${nFi}`
        );
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
  isIbanValid(iban) {
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
    for (var s = "", i = 0; i < len; i += 1) s += parseInt(iban.charAt(i), 36);
    for (var m = s.substr(0, 15) % 97, s = s.substr(15); s; s = s.substr(13))
      m = (m + s.substr(0, 13)) % 97;
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
  idMatrix(n) {
    // Good luck!
    let matrix = [...Array(n)];
    for (var i = 0; i < n; i++) {
      matrix[i] = [...Array(n)];
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i == j) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 0;
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
  iteratedSquare(n) {
    // Good luck!
    while (n !== 1 && n !== 89) {
      let a = n.toString().split("");
      if (a[1] == undefined) {
        n = a[0] ** 2;
      } else {
        n = a[0] ** 2 + a[1] ** 2;
      }
    }
    return n;
  }

  /*
  Rosetta Code: Jaro distance

  The Jaro distance is a measure of similarity between two strings. The higher the Jaro distance for two strings is, the more similar the strings are. The score is normalized such that 0 equates to no similarity and 1 is an exact match. 
  */

  jaro(s, t) {
    // Good luck!
    let m = 0;
    let transpositions = 0;
    let maxDistance = Math.max(s.length, t.length) / 2 - 1;
    let s_matches = [...Array(s.length)];
    let t_matches = [...Array(t.length)];
    for (let i = 0; i < s.length; i++) {
      let start = Math.max(0, i - maxDistance);
      let end = Math.min(i + maxDistance + 1, t.length);
      for (let j = start; j < end; j++) {
        if (t_matches[j]) continue;
        if (s.charAt(i) !== t.charAt(j)) continue;
        m++;

        s_matches[i] = true;
        t_matches[j] = true;
        break;
      }
    }

    if (m == 0) return 0;
    let k = 0;
    for (let i = 0; i < s.length; i++) {
      if (!s_matches[i]) continue;
      while (!t_matches[k]) k++;
      if (s.charAt(i) != t.charAt(k)) transpositions++;
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
  jortsort(array) {
    // Good luck!
    for (let i = 1; i < array.length; i++) {
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
  josephus(n, k, s) {
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
  kdNN(fpoints, fpoint) {
    // Good luck!
    let distances = [];
    let dimension = fpoint.length;
    for (let i = 0; i < fpoints.length; i++) {
      let d = 0;
      for (let j = 0; j < dimension; j++) {
        d += Math.pow(fpoints[i][j] - fpoint[j], 2);
        console.log(d);
      }
      d = Math.sqrt(d);
      distances.push({
        point: fpoints[i],
        distance: d
      });
    }
    distances.sort((a, b) => a.distance > b.distance);
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

  isKaprekar(n, bs) {
    // Good luck!
    if (n == 1) return true;

    let nBaseSquared = (n ** 2).toString(bs);

    for (let i = 0; i < nBaseSquared.length; i++) {
      let left = nBaseSquared.substr(0, i);
      let right = nBaseSquared.substr(i);

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
  knapsack2(items, maxweight) {
    // Dynamic programming function
    let K = [];
    for (let i = 0; i <= items.length; i++) {
      K.push([...Array(items.length + 1)]);
    }
    for (let i = 0; i <= items.length; i++) {
      for (let w = 0; w <= maxweight; w++) {
        if (i == 0 || w == 0) {
          K[i][w] = 0;
        } else if (items[i - 1].weight <= w) {
          K[i][w] = Math.max(
            items[i - 1].value + K[i - 1][w - items[i - 1].weight],
            K[i - 1][w]
          );
        } else {
          K[i][w] = K[i - 1][w];
        }
      }
    }
    return K[items.length][maxweight];
  }
  knapsack(items, maxweight) {
    // Good luck!
    // Glouton function : not optimal
    let load = 0;
    let value = 0;
    for (let i = 0; i < items.length; i++) {
      items[i].ratio = items[i].value / items[i].weight;
    }
    items.sort((a, b) => a.ratio < b.ratio);

    let n = 0;

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
  numberOfNames(num) {
    let cache = [[1]];
    function cumu(n) {
      var r, l, x, Aa, Mi;

      for (l = cache.length; l < n + 1; l++) {
        r = [0];
        for (x = 1; x < l + 1; x++) {
          r.push(
            r[r.length - 1] +
            (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[
            (Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi
            ]
          );
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
    let sum;
    for (let i = 1; i <= num; i++) {
      let r = row(i);
      console.log(r);
      sum = r.reduce((a, b) => a + b, 0);
    }
    return sum;
  }
  /*
  Rosetta Code: Align columns

  Given a text file of many lines, where fields within a line are delineated by a single $ character, write a program that aligns each column of fields by ensuring that words in each column are separated by at least one space. Further, allow for each word in a column to be either left justified, right justified, or center justified within its column.

  */
  formatText(input, justification) {
    // Good luck!
    let cols = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i].charAt(input[i].length - 1) == "$") {
        input[i] = input[i].substr(0, input[i].length - 1);
      }
      input[i] = input[i].split("$");
      if (input[i].length > cols) {
        cols = input[i].length;
      }
    }
    console.log(cols);
    let colsLength = [...Array(cols)];
    for (let i = 0; i < colsLength.length; i++) {
      let max = 0;
      for (let j = 0; j < input.length; j++) {
        console.log(input[j][i]);
        if (input[j][i] == undefined) {
          input[j].push("");
        }
        if (input[j][i].length > max) {
          max = input[j][i].length;
        }
      }
      colsLength[i] = max;
    }
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < colsLength.length; j++) {
        let l = colsLength[j] - input[i][j].length + 1;
        switch (justification) {
          case "left":
            input[i][j] = input[i][j] + " ".repeat(l);
            break;
          case "right":
            input[i][j] = " ".repeat(l) + input[i][j];
            break;
          case "center":
            let c = 1;
            if (l % 2 == 1) c = 0;
            l = (l - 1) / 2;
            input[i][j] = " ".repeat(l + c) + input[i][j] + " ".repeat(l + 1);
            break;
            break;
          default:
            break;
        }
      }
      input[i] = input[i].join("");
    }
    console.log(colsLength);
    return input;
  }
  /*
  Rosetta Code: Sort an array of composite structures

Write a function that takes an array of objects as a parameter. The function should sort the array according to the 'key' attribute of the objects and return the sorted array.
  */
  sortByKey(arr) {
    // Good luck!

    return arr.sort((a, b) => (a.key > b.key));

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
  sortDisjoint(values, indices) {
    // Good luck!
    let subArr = [];
    indices.sort((a, b) => a > b);

    for (let i = 0; i < indices.length; i++) {
      subArr.push(values[indices[i]]);
    }
    subArr.sort((a, b) => a > b);

    for (let i = 0; i < indices.length; i++) {
      values[indices[i]] = subArr[i];
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
  stableSort(arr) {
    // Good luck!
    arr.sort((a, b) => a[1] > b[1]);
    return arr;
  }
  /*
  Rosetta Code: Sort using a custom comparator

  Write a function to sort an array (or list) of strings in order of descending length, and in ascending lexicographic order for strings of equal length.
  */
  lengthSorter(arr) {
    // Good luck!

    return arr.sort((a, b) => a.length == b.length ? a > b : a.length < b.length);
  }
  /*
  Rosetta Code: Split a character string based on change of character

Split a (character) string into comma (plus a blank) delimited strings based on a change of character (left to right). Blanks should be treated as any other character (except they are problematic to display clearly). The same applies to commas. For instance, the string:

"gHHH5YY++///\"

should be split as:

["g", "HHH", "5", "YY", "++", "///", "\" ];
*/
  split(str) {
    // Good luck!
    let arr = [];
    let currentString = str.charAt(0);
    for (let i = 1; i < str.length; i++) {

      if (str.charAt(i) !== str.charAt(i - 1)) {
        arr.push(currentString)
        currentString = str.charAt(i);
      }
      else {
        currentString += str.charAt(i);
      }
    }
    if (currentString != '') {
      arr.push(currentString);
    }
    return arr;
  }
  /*
  Rosetta Code: Cut a rectangle

A given rectangle is made from m × n squares. If m and n are not both odd, then it is possible to cut a path through the rectangle along the square edges such that the rectangle splits into two connected pieces with the same shape (after rotating one of the pieces by 180°). All such paths for 2 × 2 and 4 × 3 rectangles are shown below.

Write a function that calculates the number of different ways to cut an m × n rectangle.
  */
  cutRectangle(w, h) {
    // Good luck!
    if (w % 2 == 1 && h % 2 == 1) {
      return false;
    }
    let rect = ('0'.repeat(h)).split('').map(x => x.repeat(w).split(''));
    let nSquares = w * h / 2;
    console.table(rect);
    console.log(nSquares);
    let possibilities = Math.pow(2, nSquares) - 1;
    console.log(possibilities);
    let mask = '1'.repeat(nSquares) + '0'.repeat(nSquares - 1)
    console.log(permut(mask));
    function permut(string) {
      if (string.length < 2) return string; // This is our break condition

      var permutations = []; // This array will hold our permutations

      for (var i = 0; i < string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
          continue;           // skip it this time

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
          permutations.push(char + subPermutation)

      }
      return permutations;
    }
  }
  /*
  Rosetta Code: Sorting algorithms/Bogosort
  
  Bogosort a list of numbers.
  
  Bogosort simply shuffles a collection randomly until it is sorted.
  
  "Bogosort" is a perversely inefficient algorithm only used as an in-joke.
  
  Its average run-time is O(n!) because the chance that any given shuffle of a set will end up in sorted order is about one in n factorial, and the worst case is infinite since there's no guarantee that a random shuffling will ever produce a sorted sequence.
  
  Its best case is O(n) since a single pass through the elements may suffice to order them.
  
  Pseudocode:
  
  while not InOrder(list) do
    Shuffle(list)
  done
  
  */
  bogosort(v) {
    // Good luck!
    let a = [...v].sort((a, b) => a > b);
    console.log(v, a);
    while (!sorted()) {
      v.sort((a, b) => Math.random() > 0.5 ? a < b : a > b);
    }
    function sorted() {
      for (let i = 0; i < v.length; i++) {
        if (v[i] !== a[i]) {
          return false;
        }
      }
      return true;
    }
    return v;
  }
  /*
  Rosetta Code: Stern-Brocot sequence

For this task, the Stern-Brocot sequence is to be generated by an algorithm similar to that employed in generating the Fibonacci sequence.

    The first and second members of the sequence are both 1:
        1, 1
    Start by considering the second member of the sequence
    Sum the considered member of the sequence and its precedent, (1 + 1) = 2, and append it to the end of the sequence:
        1, 1, 2
    Append the considered member of the sequence to the end of the sequence:
        1, 1, 2, 1
    Consider the next member of the series, (the third member i.e. 2)
    GOTO 3 
  */
  sternBrocot(num) {
    // Good luck!
    function f(n) {
      return n < 2 ? n : (n & 1) ? f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1)) : f(Math.floor(n / 2));
    }

    var n;
    for (n = 1; f(n) != num; n++);
    return n;
  }
  /*
  Rosetta Code: Last Friday of each month

Write a function that returns the date of the last Friday of a given month for a given year.

  */
  lastFriday(year, month) {
    let i = 31;
    let event = new Date(year + "-" + month + "-31");
    //console.log(event);
    while (checkIfDateNotValid(event)) {
      i--;
      event = new Date(year + "-" + month + "-" + i);
    }
    let day = 0;

    while (day !== 5) {
      if (event.setDate(i)) {
        day = event.getDay();
      }
      i--;
    }
    return ++i;
    function checkIfDateNotValid(d) {
      try {
        var d = new Date(d);
        return !(d.getTime() === d.getTime()); //NAN is the only type which is not equal to itself.
      } catch (e) {
        return true;
      }

    }
  }
}
