// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
function evenNumbers(array, number) {
    let arr = [];
    for (let elem of array) {
      if (elem % 2 == 0) {
        arr.push(elem);
      }
    }
    let popped = [];
    for (let i = 0; i < number; i++) {
      popped.unshift(arr.pop());
    }
    return popped;
  }
// other
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);


// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s){
    let words = s.split(' ');
    let shortest = words.reduce(function(shortestWord, currentWord))
    
}
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

function findShort(s){
let words = s.split(' ');
  let shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  }, words[0]);
  return shortest;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));