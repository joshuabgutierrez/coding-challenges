/*
    We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

    For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
	// Get the first element and the last element of the array
	// Get how many numbers are in between
	// Equation to sum all numbers in a range
	const maxItem = Math.max(...arr);
	const minItem = Math.min(...arr);
	const numberOfItemsInBetween = (maxItem - minItem + 1) / 2;
	return numberOfItemsInBetween * (minItem + maxItem);
}

sumAll([ 1, 4 ]);
