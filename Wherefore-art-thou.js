/*
    Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

*/

function whatIsInAName(collection, source) {
	// Get the keys from source object
	const sourceKeys = Object.keys(source);
	// Filter the collection array
	const answer = collection.filter((object) => {
		for (let key of sourceKeys) {
			if (!object.hasOwnProperty(key) || object[key] !== source[key]) {
				return false;
			}
		}
		return true;
	});
	return answer;
}

whatIsInAName([ { apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ], { apple: 1, bat: 2 });
