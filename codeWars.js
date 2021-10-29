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
const evenNumber = (array, number) => array.filter(item => item % 2 === 0).slice(-number);


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


// // Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// function longest(s1, s2) {
//   let str1 = getStr(s1, s2);
//   let str2 = getStr(s2, s1);
//   console.log(str1.length, str2.length);
// //   if (str1.length > str2.length) {
// //     return getStr(str2, str1).split('').sort().join('');
// //   } else {
// //     return getStr(str1, str2).split('').sort().join('');
// //   }
// } 

// function getStr(s1, s2) {
//   let str = '';
//   for (let i = 0; i < s2.length; i++) {
//     if (s1.includes(s2[i]) || !s1.includes(s2[i])) {
//       if (!str.includes(s2[i])) {
//         str += s2[i];
//       }
//     }
//   }
//   return str;
// } 

// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twiceOld = dadYearsOld - sonYearsOld * 2;
  if (twiceOld > 0) {
    return twiceOld; 
  } else {
    return sonYearsOld * 2 - dadYearsOld;
  }
}
function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}


// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
function arrayPlusArray(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
  return (flower1 % 2 == 0 && flower2 % 2 != 0) || (flower2 % 2 == 0 && flower1 % 2 != 0);   
}
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1;
}


// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
function expressionMatter(a, b, c) {
  let arr = [];
  arr.push(a + b + c);
  arr.push(a * (b + c));
  arr.push(a * b * c);
  arr.push(a + b * c);
  arr.push((a + b) * c);
  let max = arr[0];
  
  for (let elem of arr) {
    if (elem > max) {
      max = elem;
    }
  }
  return max;
}
console.log(expressionMatter(1, 1, 1));

function expressionMatter(a, b, c) {
  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}


// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
function otherAngle(a, b) {
  return 180 - (a + b);
}


// Move all exclamation marks to the end of the sentence
function remove(str) {
  let arr = str.split('');
  let remove = [];
  for (let i = 0; arr.includes('!'); i++) {
    if (arr[i] == '!') {
      remove.push(arr.splice(i, 1));
    }
  }
  return arr.concat(remove).join('');
}
console.log(remove("Hi! Hi!! Hi!"));

function usdcny(usd) {
  let yuan = usd * 6.75;
  return yuan + ' Chinese Yuan';
}
console.log(usdcny(15));
