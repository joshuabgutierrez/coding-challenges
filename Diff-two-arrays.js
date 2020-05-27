/*
    Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
	const mergedArr = [ ...arr1, ...arr2 ];
	const newArr = mergedArr.filter((item) => {
		if (arr1.includes(item) && arr2.includes(item)) {
			return false;
		}
		return item;
	});
	return newArr;
}

diffArray([ 1, 2, 3, 5 ], [ 1, 2, 3, 4, 5 ]);
diffArray(
	[ 'diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub' ],
	[ 'diorite', 'andesite', 'grass', 'dirt', 'dead shrub' ]
);
