/* Anagram checker - check that two user supplied words or
 phrases have the same number of characters*/

/* Clean Phrase for checking characters only
  -- replace diacritics in order to check a char is a char in as many non-symbol
   based languages as possible (polyfill NOT included)
  -- remove punctuation, digits, emojis and blank space
  -- split into an array in order to assure unique ASCII characters 
  do not complicate length counts */
function cleanphrase(phrase) {
  return phrase.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
               .toUpperCase()
               .replace(/[^A-Z]/g, "")
               .split('');
}

/* second check that only characters A-Z remain */
function isLetter(phrase) {
  for (var i=0; i<phrase.length; i++) {
      if (!phrase[i]>="A" && !phrase[i]<="Z") {
           console.log(phrase[i]) 
           return false;
    } 
  }
  return true;
}

function isAnagram(phrase1, phrase2) {
  var clean1 = cleanphrase(phrase1);
  if (isLetter(clean1)) {
     var clean2 = cleanphrase(phrase2);
  } else {
  	throw(phrase1 + " Contains unsupported characters");
  }
  if (isLetter(clean2)) {
    if (clean1.length === clean2.length) {
      return true
    } else {
      return false;
    }
    } else {
    throw(phrase2 + " Contains unsupported characters");
  }
}

var works = isAnagram("Neuveville-lès-Raon, France?", "France, ?Neuveville-lès-Raon");
console.log(works);
works = isAnagram("try this 🧥 👚 👕 👖 👔 👗 👙 👘 👠", "🧥 👚 👕 👖 👔 👗 👙 👘 👠 one twos");
console.log(works);
works = isAnagram("hello, world", "world hello's");
console.log(works);