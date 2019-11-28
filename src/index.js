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

      let unitySum = numbers.reduce((a, b) => {
        return a + parseInt(b.charAt(unity))
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
        c = (c % 2 == 0) ? c / 2 : 3 * c + 1;
        nTerms++;
      }
      return nTerms;
    }

  }
  latticePaths(n) {
    return rFact(2 * n) / Math.pow(rFact(n), 2);
    function rFact(num) {
      if (num === 0) { return 1; }
      else { return num * rFact(num - 1); }
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
      .split('')
      .reduce((a, b) => a + parseInt(b), 0);

  }
  powerDigitSumBigNumber(exponent) {
    let self = this;
    function power2exponent(exponent) {
      if (exponent == 0) return '1';
      let temp = '2';
      for (let i = 2; i <= exponent; i++) {
        temp = self.largeSum([temp, temp]);

      }
      return temp;
    }
    return power2exponent(exponent)
      .toString()
      .split('')
      .reduce((a, b) => a + parseInt(b), 0);
  }
}
