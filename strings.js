// Write out a function that takes one parameter called phrase

// Inside this function you should be able to return true if the reversed phrase is the same as the supplied phrase.

// madam im adam  return true
// racecar return true
// apple return false

// Write some units tests on strings.test.js

export function isPalindrome(phrase) {
  let noSpaceOriginalPhrase = phrase.replaceAll(" ", "").toLowerCase();

  let combinedReversedPhrase = noSpaceOriginalPhrase
    .split("")
    .reverse()
    .join("");

  return noSpaceOriginalPhrase === combinedReversedPhrase ? true : false;
}

console.log(isPalindrome("madam im adam"));

let myArray = [1, 2, 3, 4];

console.log(myArray.reverse());

// Longer Version:
// function isPalindrome(phrase) {
//     let noSpaceOriginalPhrase = phrase.replaceAll(" ", "");
//     console.log(noSpaceOriginalPhrase)
//     let splitLetters = noSpaceOriginalPhrase.split("");
//     let reversedLetters = splitLetters.reverse();
//     let combinedReversedPhrase = reversedLetters.join("");

//     return noSpaceOriginalPhrase === combinedReversedPhrase ? true : false;
//   }
