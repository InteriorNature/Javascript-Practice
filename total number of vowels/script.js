/* global, case-insensitive mode, find ANY between the brackets*/
function regexpBuildGlobalAny(str) {
    return new RegExp("["+ str + "]",'gi');
};

/*trims leading and trailing spaces only*/
function cleanString(str) {
    return str.toLowerCase().trim();
}

function FindAllMatches(str1, str2) {
	str1 = cleanString(str1);
	str2 = cleanString(str2);
	regex = regexpBuildGlobalAny(str2);
	var matches = str1.match(regex);
	return matches ? matches.length : 0;
}

var counts = FindAllMatches("Hello, Worldly World", "aeiou");
console.log(counts);
var counts = FindAllMatches("Hello, Worldly World", "aei ou");
console.log(counts);
var counts = FindAllMatches("Neuveville-lès-Raon, France?", "è?");
console.log(counts);
var counts = FindAllMatches("try this 🧥 👚 👕 👗 👙 🧥 👘 👠", "🧥");
console.log(counts);