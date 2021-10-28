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
    let shortWord = words.reduce(function(prev, item) {
        if (prev.length < item.length) {
            return prev;
        } else {
            return item;
        }
    });
    return shortWord.length;
}

function findShort(s){
    let words = s.split(' ');
    let shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest.length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));



var number = function(busStops){
  let intoBus = 0;
  let offBus = 0;
  for (let i = 0; i < busStops.length; i++) {
    for (let j = 0; j < 1; j++) {
      intoBus += busStops[i][0];
      offBus += busStops[i][1];
    }
  }
  let result = intoBus - offBus;
  if (result <= 0) {
    return 0;
  } else {
    return result;
  }
};

var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};
console.log(number([[10,0],[3,5],[5,8]]));


// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!
// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

function longest(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let difference = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x))).join('');
  return difference;
}


function getMissingElement(newArr){
  let oldArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let difference = newArr.filter(x => !oldArr.includes(x)).concat(oldArr.filter(x => !newArr.includes(x)));
  return difference[0];
}
console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]));


// Given an array of integers your solution should find the smallest integer.
function findSmallestInt(args) {
  let min = args[0];
  for (let elem of args) {
    if (elem < min) {
      min = elem;
    }
  }
  return min;
}
console.log(findSmallestInt([78,56,232,12,8]));


// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  if (num >= 0) {
    return num - (num * 2);
  } else {
    return num;
  }
}


// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.
// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.
// NOTE: Each rider travels as far as he can, but never more than 100 miles.
function riders(stations) {
  let allTrip = 0;
  let rider = 1;
  for (let elem of stations) {
    if ((allTrip + elem) >= 101) {
      allTrip = elem;
      rider++;
    } else {
      allTrip += elem;
    }
  }
  return rider;
}
console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]));


// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  let str1 = getStr(s1, s2);
  let str2 = getStr(s2, s1);
  console.log(str1, str2);
  // return str.split('').sort().join('');
} 

function getStr(s1, s2) {
  let str = '';
  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i]) || !s1.includes(s2[i])) {
      if (!str.includes(s2[i])) {
        str += s2[i];
      }
    }
  }
  return str;
} 

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));