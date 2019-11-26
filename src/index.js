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
}

