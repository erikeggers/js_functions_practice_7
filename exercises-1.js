/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(number1, number2){
    if (number1 > number2) {
      return number1;
    } else {
      return number2;
    }
}

console.log(max(6, 3)); // => 6

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(6, 3, 8)); // => 8

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  var vowels = ['a','e','i','o','u'];
  if (vowels.indexOf(char) !== -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel('o'));

// function isVowel(char) {
//   if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//     return true;
//   }else{
//     return false;
//   }
// }


// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){
  // var vowels = ['a','e','i','o','u'];
  var splitWord = phrase.split('');
  var result = '';

  splitWord.forEach(function (char){
    if (isVowel(char) || char == " ") {
      result += char;
    } else {
      char = char + 'o' + char;
      result += char;
    }
});
  return result;
}

console.log(translate('this is fun'));
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers){
    var sum = 0;
    numbers.forEach(function(number){
      sum += number;
    });
    return sum;
}

console.assert(sum([5, 10, 20, 100]) == 135, 'sum');
console.log(sum([5, 10, 20, 100]) == 135);

function multiply(numbers){
    var multiply = 1;
    numbers.forEach(function(number){
      multiply *= number;
    });
    return multiply;
    //...
}

console.log(multiply([1, 2, 3, 4]) == 24);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(word){
    return word.split('').reverse().join('');
}


console.log(reverse('jag testar'));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var max = 0;
  words.forEach(function(word) {
    if (word.split('').length > max) {
      max = word.split('').length
    }
  });
  return max;
}

console.log(findLongestWord(['Helloooooooo', 'Good', 'Cat', 'Dog']));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
