// // Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// function evenNumbers(array, number) {
//     let arr = [];
//     for (let elem of array) {
//       if (elem % 2 == 0) {
//         arr.push(elem);
//       }
//     }
//     let popped = [];
//     for (let i = 0; i < number; i++) {
//       popped.unshift(arr.pop());
//     }
//     return popped;
//   }
// // other
// const evenNumber = (array, number) => array.filter(item => item % 2 === 0).slice(-number);


// // Simple, given a string of words, return the length of the shortest word(s).
// // String will never be empty and you do not need to account for different data types.

// function findShort(s){
//     let words = s.split(' ');
//     let shortWord = words.reduce(function(prev, item) {
//         if (prev.length < item.length) {
//             return prev;
//         } else {
//             return item;
//         }
//     });
//     return shortWord.length;
// }

// function findShort(s){
//     let words = s.split(' ');
//     let shortest = words.reduce((shortestWord, currentWord) => {
//         return currentWord.length < shortestWord.length ? currentWord : shortestWord;
//     }, words[0]);
//     return shortest.length;
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));



// var number = function(busStops){
//   let intoBus = 0;
//   let offBus = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     for (let j = 0; j < 1; j++) {
//       intoBus += busStops[i][0];
//       offBus += busStops[i][1];
//     }
//   }
//   let result = intoBus - offBus;
//   if (result <= 0) {
//     return 0;
//   } else {
//     return result;
//   }
// };

// var number = function(busStops){
//   var totalPeople = 0;
//   for (var i=0; i<busStops.length; i++) {
//     totalPeople += busStops[i][0];
//     totalPeople -= busStops[i][1];
//   }
//   return totalPeople;
// };
// console.log(number([[10,0],[3,5],[5,8]]));


// // Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!
// // Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
// // Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// function longest(s1, s2) {
//   let arr1 = s1.split('');
//   let arr2 = s2.split('');
//   let difference = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x))).join('');
//   return difference;
// }


// function getMissingElement(newArr){
//   let oldArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let difference = newArr.filter(x => !oldArr.includes(x)).concat(oldArr.filter(x => !newArr.includes(x)));
//   return difference[0];
// }
// console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]));


// // Given an array of integers your solution should find the smallest integer.
// function findSmallestInt(args) {
//   let min = args[0];
//   for (let elem of args) {
//     if (elem < min) {
//       min = elem;
//     }
//   }
//   return min;
// }
// console.log(findSmallestInt([78,56,232,12,8]));


// // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// function makeNegative(num) {
//   if (num >= 0) {
//     return num - (num * 2);
//   } else {
//     return num;
//   }
// }


// // Kata Task
// // stations is a list/array of distances (miles) from one station to the next along the Pony Express route.
// // Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.
// // NOTE: Each rider travels as far as he can, but never more than 100 miles.
// function riders(stations) {
//   let allTrip = 0;
//   let rider = 1;
//   for (let elem of stations) {
//     if ((allTrip + elem) >= 101) {
//       allTrip = elem;
//       rider++;
//     } else {
//       allTrip += elem;
//     }
//   }
//   return rider;
// }
// console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]));


// // // Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// // function longest(s1, s2) {
// //   let str1 = getStr(s1, s2);
// //   let str2 = getStr(s2, s1);
// //   console.log(str1.length, str2.length);
// // //   if (str1.length > str2.length) {
// // //     return getStr(str2, str1).split('').sort().join('');
// // //   } else {
// // //     return getStr(str1, str2).split('').sort().join('');
// // //   }
// // } 

// // function getStr(s1, s2) {
// //   let str = '';
// //   for (let i = 0; i < s2.length; i++) {
// //     if (s1.includes(s2[i]) || !s1.includes(s2[i])) {
// //       if (!str.includes(s2[i])) {
// //         str += s2[i];
// //       }
// //     }
// //   }
// //   return str;
// // } 

// // console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

// // Your function takes two arguments:
// // current father's age (years)
// // current age of his son (years)
// // Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   let twiceOld = dadYearsOld - sonYearsOld * 2;
//   if (twiceOld > 0) {
//     return twiceOld; 
//   } else {
//     return sonYearsOld * 2 - dadYearsOld;
//   }
// }
// function twiceAsOld(a, b) {
//   return a>2*b ? a-2*b : 2*b-a;
// }


// // I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// function arrayPlusArray(arr1, arr2) {
//   let arr = arr1.concat(arr2);
//   let sum = 0;
//   for (let elem of arr) {
//     sum += elem;
//   }
//   return sum;
// }

// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }


// // Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// // Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// function lovefunc(flower1, flower2){
//   return (flower1 % 2 == 0 && flower2 % 2 != 0) || (flower2 % 2 == 0 && flower1 % 2 != 0);   
// }
// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1;
// }


// // Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// // In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// function expressionMatter(a, b, c) {
//   let arr = [];
//   arr.push(a + b + c);
//   arr.push(a * (b + c));
//   arr.push(a * b * c);
//   arr.push(a + b * c);
//   arr.push((a + b) * c);
//   let max = arr[0];
  
//   for (let elem of arr) {
//     if (elem > max) {
//       max = elem;
//     }
//   }
//   return max;
// }
// console.log(expressionMatter(1, 1, 1));

// function expressionMatter(a, b, c) {
//   return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
// }


// // You are given two interior angles (in degrees) of a triangle.
// // Write a function to return the 3rd.
// function otherAngle(a, b) {
//   return 180 - (a + b);
// }


// // Move all exclamation marks to the end of the sentence
// function remove(str) {
//   let arr = str.split('');
//   let remove = [];
//   for (let i = 0; arr.includes('!'); i++) {
//     if (arr[i] == '!') {
//       remove.push(arr.splice(i, 1));
//     }
//   }
//   return arr.concat(remove).join('');
// }
// console.log(remove("Hi! Hi!! Hi!"));

// function usdcny(usd) {
//   let yuan = usd * 6.75;
//   return yuan.toFixed(2) + ' Chinese Yuan';
// }
// console.log(usdcny(2708));


// // After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// // You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// // Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// // Write a code that gives out the total amount for different days(d).
// function rentalCarCost(d) {
//   if (d >= 1 && d < 3) {
//     return 40 * d;
//   } else if (d >= 3 && d < 7) {
//     return 40 * d - 20;
//   } else {
//     return 40 * d - 50;
//   }
// }

// return (d >= 1 && d < 3) ? 40 * d : (d >= 3 && d < 7) ? 40 * d - 20 : 40 * d - 50;


// // Write a function to split a string and convert it into an array of words
// function stringToArray(string){
//   let arr = string.split(' ');
//   return arr;
// }


// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n){
  let a = String(n).split('').sort().reverse().join('');
  return Number(a);
}
console.log(descendingOrder(12345));
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''));
}


// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
function century(year) {
  return Math.ceil(year / 100);
}


// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this kata.
function testEven(n) {
  return n % 2 == 0;
}



function remove(s){
  for (let i = 0; s[s.length - 1] == '!'; i++) {
    if (s[i] == '!' && i == s.length - 1) {
      s = s.slice(0, i);
    }
  }
  return s;
}

// let s = 'Hi!!!';
// s = s.slice(0, 4);
// console.log(s.length);

console.log(remove("Hi!!!"));



function isVow(arr){
  let a = 97,
      e = 101,
      i = 105,
      o = 111,
      u = 117;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == a) {
      arr[j] = 'a';
    } else if (arr[j] == e) {
      arr[j] = 'e';
    } else if (arr[j] == i) {
      arr[j] = 'i';
    } else if (arr[j] == o) {
      arr[j] = 'o';
    } else if (arr[j] == u) {
      arr[j] = 'u';
    }
  }
  return arr;
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
  let uArr = [];
  
  if (a.length == 0) {
    return []
  }
  
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      uArr.push(a[i]);
    }
  }
  
   for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      uArr.push(b[i]);
    }
  }
  return uArr;
}

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function lastDigit(n, d) {
  let arr = String(n).split('').map(Number);
  if (d > arr.length) {
    return arr;
  } else if (d <= 0) {
    return [];
  } else {
    let pop = [];
    for (let i = 0; i < d; i++) {
      pop.unshift(arr.pop());
    }
    return pop;
  } 
}
console.log(lastDigit(123, 2));


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  if (bool == true) {
    return 'Yes';
  } else {
    return 'No';
  }
}



function createPhoneNumber(arr){
  return '(' + String(arr[0]) + String(arr[1]) + String(arr[2]) + ')' + ' ' + String(arr[3]) + String(arr[4]) + String(arr[5]) + '-' + String(arr[6]) + String(arr[7]) + String(arr[8]) + String(arr[9]);
}

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  
  for(let i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}


// We need a function that can transform a number into a string.
// What ways of achieving this do you know?
function numberToString(num) {
  return String(num);
}


// Very simple, given a number, find its opposite.
function opposite(number) {
  return number - (number * 2);
}


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd'; 
  }
}


// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 3, 4, 6], 10));



// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:
// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });
  if (!nums.includes(0)) {
    return 0;
  } 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      return nums[i] + 1;
    }
  }
}


let arr1 = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16];
console.log(missingNo(arr1));
missingNo =(n)=> {
  for(i=0;i<=100;i++) {
    if(!n.includes(i)) {
      return i;
    }
  }
}


// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
  return 'Hello, ' + name + ' how are you doing today?'
}


// Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr (n, s) {
  return s.repeat(n);
}


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
console.log(removeExclamationMarks("Hello World!!"));


// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(op, a, b) {
  return (op === '+') ? (a + b) : (op === '-') ? (a - b) : (op === '*') ? (a * b) : (op === '/') ? (a / b) : 'not find';
}
console.log(basicOp('+', 1, 5));


// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg == fuelLeft || distanceToPump / mpg < fuelLeft;


function diffBig2(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr[arr.length -1] - arr[arr.length - 2];
}


console.log(diffBig2([2, 1]));


function stray(arr) {
  if (arr[0] != arr[1]) {
    return arr[0];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
}

function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}
console.log(stray([8, 17, 17, 17, 17, 17, 17]));


function strong(n) {
  let arr = String(n).split('').map(Number);
  let sum = 0;
  for (let elem of arr) {
    sum += fl(elem);
  }
  return (sum == n) ? "STRONG!!!!" : "Not Strong !!";
}


function fl(n) {
return n ? n * fl(n - 1) : 1;
}
console.log(strong(93));


function onlyLetters(str) {
  let w = str.replace(/[a-z]/g, "");
  return w;
}

console.log("'that's a pie$ce o_f p#ie!");

function positiveSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    if (elem > 0) {
      sum += elem;
    }
  }
  return sum;
}

console.log(positiveSum([1,2,3,4,5]));