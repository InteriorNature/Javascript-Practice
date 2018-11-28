/* Find most frequently occuring character in a string
English language only*/

function makeTableCounts(array1) {
	/*create a key, values table where values are number of occurences of the key*/
	return array1.reduce((dict, i) => {
	      if (!dict[i]) {
		    dict[i] = 0;
	      } 
	      dict[i]++;
	      return dict;
          }, {});
}

function getMaxKey(dict) {
	/*apply max from Math library on the values of keys*/
	/* I had to look this up - ECMAScript 2015 is used rather than 
	the 2017 method for extracting an array from dictionary Values*/
	values = Object.keys(dict).map(key => dict[key]);
	max = Math.max(...values);
	/*find first key with max value*/
    for (key in dict) {
    	if (dict[key] == max) {
          return key;
    	}
    }
}

/*convert string to an array after get rid of all symbols, punctuation, blank spaces, etc.*/
function convertEnglishStrToArray(str) {
    return str.toUpperCase().replace(/[^A-Z]/g,'').split('');
}

function findMaxChar(str) {
	const array1 = convertEnglishStrToArray(str);
	const dict = makeTableCounts(array1);
	return getMaxKey(dict);
}

var TheChar = findMaxChar("world hello's_");
console.log(TheChar);
TheChar = findMaxChar("");
console.log(TheChar);
TheChar = findMaxChar("try this 👗 👙 👘 👠, 👗 👙 👘 👠, 👗 👙 👘 👠 one two's______");
console.log(TheChar);
