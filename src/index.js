import { ifError } from "assert";

const version = '1.0.0';

export default class algorithms {
  constructor(params) {
    console.log('hello from algorithms');
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
    }
    else {
      let ret = number;
      while (number = number >> 1) {
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
      return (this.gcd(b, a % b));
    }
    else {
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

    let number, max = 0;
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
        }
        else {
          n = 3 * n + 1;
        }
      }
      sequence.push(1)
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
      };
      number = m;

      console.log(number);
    }
    if (cycle[number]) {
      return false;
    }

    return true
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
      };
      if (i % m == 0) {
        return true

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
          })
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

            if ((areaTriangle - parseInt(areaTriangle) == 0) && areaTriangle > 0) {

              res.push([a, b, c]);
            }

          }
        }
      }
    }
    res.sort((a, b) => (this.area(a[0], a[1], a[2]) - this.area(b[0], b[1], b[2])));
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
}

