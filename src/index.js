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
      console.log('Appel récursif gcd(' + b + ', ' + a + ' % ' + b + ')');
      console.log('            => gcd(' + b + ', ' + a % b + ')');
      return (this.gcd(b, a % b));
    }
    else {
      console.log('Résultat final b = 0  =>  ' + a);
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

}

