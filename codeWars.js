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
// // ??alculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
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
// function descendingOrder(n){
//   let a = String(n).split('').sort().reverse().join('');
//   return Number(a);
// }
// console.log(descendingOrder(12345));
// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''));
// }


// // The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// function century(year) {
//   return Math.ceil(year / 100);
// }


// // In this Kata we are passing a number (n) into a function.
// // Your code will determine if the number passed is even (or not).
// // The function needs to return either a true or false.
// // Numbers may be positive or negative, integers or floats.
// // Floats are considered UNeven for this kata.
// function testEven(n) {
//   return n % 2 == 0;
// }



// function remove(s){
//   for (let i = 0; s[s.length - 1] == '!'; i++) {
//     if (s[i] == '!' && i == s.length - 1) {
//       s = s.slice(0, i);
//     }
//   }
//   return s;
// }

// // let s = 'Hi!!!';
// // s = s.slice(0, 4);
// // console.log(s.length);

// console.log(remove("Hi!!!"));



// function isVow(arr){
//   let a = 97,
//       e = 101,
//       i = 105,
//       o = 111,
//       u = 117;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] == a) {
//       arr[j] = 'a';
//     } else if (arr[j] == e) {
//       arr[j] = 'e';
//     } else if (arr[j] == i) {
//       arr[j] = 'i';
//     } else if (arr[j] == o) {
//       arr[j] = 'o';
//     } else if (arr[j] == u) {
//       arr[j] = 'u';
//     }
//   }
//   return arr;
// }

// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));


// // Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// // It should remove all values from list a, which are present in list b keeping their order.
// function arrayDiff(a, b) {
//   let uArr = [];
  
//   if (a.length == 0) {
//     return []
//   }
  
//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1) {
//       uArr.push(a[i]);
//     }
//   }
  
//    for (let i = 0; i < b.length; i++) {
//     if (a.indexOf(b[i]) === -1) {
//       uArr.push(b[i]);
//     }
//   }
//   return uArr;
// }

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

// function lastDigit(n, d) {
//   let arr = String(n).split('').map(Number);
//   if (d > arr.length) {
//     return arr;
//   } else if (d <= 0) {
//     return [];
//   } else {
//     let pop = [];
//     for (let i = 0; i < d; i++) {
//       pop.unshift(arr.pop());
//     }
//     return pop;
//   } 
// }
// console.log(lastDigit(123, 2));


// // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// function boolToWord( bool ){
//   if (bool == true) {
//     return 'Yes';
//   } else {
//     return 'No';
//   }
// }



// function createPhoneNumber(arr){
//   return '(' + String(arr[0]) + String(arr[1]) + String(arr[2]) + ')' + ' ' + String(arr[3]) + String(arr[4]) + String(arr[5]) + '-' + String(arr[6]) + String(arr[7]) + String(arr[8]) + String(arr[9]);
// }

// function createPhoneNumber(numbers){
//   let format = "(xxx) xxx-xxxx";
  
//   for(let i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }


// // We need a function that can transform a number into a string.
// // What ways of achieving this do you know?
// function numberToString(num) {
//   return String(num);
// }


// // Very simple, given a number, find its opposite.
// function opposite(number) {
//   return number - (number * 2);
// }


// // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function even_or_odd(number) {
//   if (number % 2 == 0) {
//     return 'Even';
//   } else {
//     return 'Odd'; 
//   }
// }


// // Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).
// // For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// // The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum([1, 3, 4, 6], 10));



// // The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:
// // You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

// function missingNo(nums) {
//   nums.sort(function(a, b) {
//     return a - b;
//   });
//   if (!nums.includes(0)) {
//     return 0;
//   } 
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + 1 !== nums[i + 1]) {
//       return nums[i] + 1;
//     }
//   }
// }


// let arr1 = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16];
// console.log(missingNo(arr1));
// missingNo =(n)=> {
//   for(i=0;i<=100;i++) {
//     if(!n.includes(i)) {
//       return i;
//     }
//   }
// }


// // Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// function greet(name){
//   return 'Hello, ' + name + ' how are you doing today?'
// }


// // Write a function called repeatStr which repeats the given string string exactly n times.
// function repeatStr (n, s) {
//   return s.repeat(n);
// }


// // Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// function removeExclamationMarks(s) {
//   return s.replace(/!/g, '');
// }
// console.log(removeExclamationMarks("Hello World!!"));


// // Your task is to create a function that does four basic mathematical operations.
// // The function should take three arguments - operation(string/char), value1(number), value2(number).
// // The function should return result of numbers after applying the chosen operation.
// function basicOp(op, a, b) {
//   return (op === '+') ? (a + b) : (op === '-') ? (a - b) : (op === '*') ? (a * b) : (op === '/') ? (a / b) : 'not find';
// }
// console.log(basicOp('+', 1, 5));


// // You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg == fuelLeft || distanceToPump / mpg < fuelLeft;


// function diffBig2(arr) {
//   arr.sort(function(a, b) {
//     return a - b;
//   });
//   return arr[arr.length -1] - arr[arr.length - 2];
// }


// console.log(diffBig2([2, 1]));


// function stray(arr) {
//   if (arr[0] != arr[1]) {
//     return arr[0];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
// }

// function stray(numbers){
//   for (var i in numbers){
//      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//   }
// }
// console.log(stray([8, 17, 17, 17, 17, 17, 17]));


// function strong(n) {
//   let arr = String(n).split('').map(Number);
//   let sum = 0;
//   for (let elem of arr) {
//     sum += fl(elem);
//   }
//   return (sum == n) ? "STRONG!!!!" : "Not Strong !!";
// }


// function fl(n) {
// return n ? n * fl(n - 1) : 1;
// }
// console.log(strong(93));


// function onlyLetters(str) {
//   let w = str.replace(/[a-z]/g, "");
//   return w;
// }

// console.log("'that's a pie$ce o_f p#ie!");


// // You get an array of numbers, return the sum of all of the positives ones.
// function positiveSum(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//     if (elem > 0) {
//       sum += elem;
//     }
//   }
//   return sum;
// }

// console.log(positiveSum([1,2,3,4,5]));

// function positiveSum (arr) {
//   return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
// }


// // Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?
// var FilterString = function(value) {
//   let str = '';
//   for (let i = 0; i < value.length; i++) {
//     if (!isNaN(Number(value[i]))) {
//       str += value[i];
//     }    
//   }
//   return Number(str);
// }
// console.log(FilterString("a1b2c3"));


// // Complete the solution so that it reverses the string passed into it.
// let solution = (str) => str.split('').reverse().join('');


// // JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// function getEvenNumbers(arr){
//   return arr.filter(elem => (elem % 2 == 0));
// }

// // let getEvenNumbers = arr => arr.filter(elem => (elem % 2 == 0));


// function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
//   let month = 0;
//   let total = startPriceOld;
//   if (startPriceOld >= startPriceNew) {
//     return [month, total - startPriceNew];
//   }
//   while (total <= startPriceNew) {
//     total += savingperMonth;
//     total -= startPriceOld * percentLossByMonth / 100;

//     startPriceNew -= startPriceNew * percentLossByMonth / 100;
//     startPriceOld -= startPriceOld * percentLossByMonth / 100;

//     month++;

//     if (month % 2 !== 0) {
//       percentLossByMonth += 0.5;
//     }
//   }
//   return [month, Math.round(total - startPriceNew)];
// }

// console.log(nbMonths(2000, 8000, 1000, 1.5));


// // Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// function doubleChar(str) {
//   return str.split('').map(el => {
//     return el = el + el;
//   }).join('');
// } 
// console.log(doubleChar('Adidas'));

// // const doubleChar = (str) => str.split("").map(c => c + c).join("");


// // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// const summation = num => {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(summation(8));


// // Use variables to find the sum of the goals Messi scored in 3 competitions
// const laLigaGoals = 43;
// const championsLeagueGoals = 10;
// const copaDelReyGoals = 5;

// let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;



// John is a worker, his job is to remove screws from a machine. There are 2 types of screws: slotted (-) and cross (+). John has two screwdrivers, one for each type of screw.
// The input will be a (non-empty) string of screws, e.g. : "---+++"
// When John begins to work, he stands at the first screw, with the correct screwdriver in his hand, and another in his tool kit. He works from left to right, removing every screw. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.
// Each action takes a set amount of time:
// remove one screw : 1 second
// move to the next screw: 1 second
// switch screwdrivers: 5 seconds
// Your task is to return the total time taken to remove all the screws, in seconds.
// function sc(screws) {
//   let time = 1;
//   let arr = screws.split('');
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       time += 7;
//     } else {
//       time += 2;
//     }
//   }
//   return time;
// }

// console.log(sc("-+-+-----------"));



// // Your task is to write a function maskify, which changes all but the last four characters into '#'.
// function maskify(cc) {
//   if (cc.length < 5) {
//     return cc;
//   }
//   let arr = cc.split('');
//   for (let i = 0; i < arr.length - 4; i ++) {
//     arr[i] = '#';
//   } 
//   return arr.join('');
// }
// console.log(maskify('556364607935616'));

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }


// function spinWords(str){
//   let arr = str.split(' ');
//   if (arr.length === 1) {
//     if (str.length > 4) {
//       return str.split('').reverse().join('');
//     } else {
//       return str;
//     }
//   }

//   return arr.map(function(elem) {
//     if (elem.length > 4) {
//       return elem.split('').reverse().join('');
//     } else {
//       return elem;
//     }
//   }).join(' ');
// }

// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }


// // Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.
// const remainder = (a, b) => a > b ? a % b : b % a; 


// // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// const removeChar = str => str.slice(1, str.length - 1);
// console.log(removeChar('eloquent'));


// // You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// // Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// const updateLight = current => current === 'green' ? current = 'yellow' : current === 'yellow' ? current = 'red' : current = 'green';



// function getCount(str) {
//   let vowelsCount = 0;
//   let arrStr = str.split('');
//   let volwes = ['a', 'e', 'i', 'o', 'u'];
//   arrStr.forEach(el => {
//     for (let i = 0; i < volwes.length; i++) {
//       if (el === volwes[i]) {
//         vowelsCount++;
//         console.log(el);
//       }
//     }
//   });
//   return vowelsCount;
// }
// console.log(getCount("o a kak ushakov lil vo kashu kakao"));

// // function getCount(str) {
// //   var vowelsCount = 0;
// //   var vowels = ["a","e","i","o","u"];
// //   for(var i = 0;i < str.length;i++){
// //     for(var j=0;j<vowels.length;j++){
// //       if(str[i] === vowels[j]){
// //         vowelsCount++;
// //       }
// //     }
// //   }
  
// //   return vowelsCount;
// // }



// // function makeString(s){
// //   let result = '';
// //   s.split(' ').forEach(el => {
// //     result += el.slice(0, 1);
// //   });
// //   return result;
// // }
// // console.log(makeString("sees eyes xray yoat"));

// // const makeString = s => s.split(' ').map(x => x[0]).join('')


// // You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.
// function diffBig2(arr) {
//   let newArr = [];
//   newArr.push(arr.splice(arr.indexOf(maxDigit(arr)), 1));
//   newArr.push(arr.splice(arr.indexOf(maxDigit(arr)), 1));
//   return newArr[0][0] - newArr[1][0];
// }
// console.log(diffBig2([13, 3, 66]));

// function maxDigit(arr) {
//   let max = arr[0];
//   for (let elem of arr) {
//     if (elem > max) {
//       max = elem;
//     }
//   }
//   return max;
// }

// // const diffBig2 = arr => {
// //   let max = Math.max(...arr);
// //   arr.splice(arr.indexOf(max), 1);
// //   return max - Math.max(...arr);
// // }

// // Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// const sumStr = (a, b) => String(Number(a) + Number(b));
// console.log(sumStr('', 10));


// // Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.
// // Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.
// function elevatorDistance(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if ((arr[i] - arr[i + 1]) < 0) {
//       sum -= (arr[i] - arr[i + 1]);
//     } else if ((arr[i] - arr[i + 1]) > 0) {
//       sum += (arr[i] - arr[i + 1]);
//     } else {
//       sum += 0;
//     }
//   }
//   return sum;
// }

// function elevatorDistance(array) {
//   var distance = 0;
//   for (var i = 0; i < array.length - 1; i++) {
//     distance += Math.abs(array[i] - array[i + 1]);
//   }
//   return distance;
// }



// // Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// // Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// // Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
// const areEquallyStrong = (yL, yR, fL, fR) => ((yL == fL) || (yL == fR)) && ((yR == fL) || (yR == fR)) && ((yL + yR) == (fR + fL));
// console.log(areEquallyStrong(13, 13, 13, 5));

// // let areEquallyStrong = (a,b,c,d) => a==c && b==d || a==d && b==c;


// // Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// // Write a function which takes a list of strings and returns each line prepended by the correct number.
// // The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// let number = (arr) => {
//   return arr.map((el, i) => {
//      return el = (i + 1) + ': ' + el;
//    });
//  }



// //  In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// //  make as few changes as possible.
// //  if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// function solve(s){
//   if (s.match(/[a-z]/g).length === s.length) {
//     return s;
//   } else if (s.match(/[A-Z]/g).length > s.length / 2) {
//     return s.toUpperCase();
//   } else {
//     return s.toLowerCase();
//   }
// }
// console.log(solve('code'));


// function last(x){
//   return x.split(' ').map(el => revStr(el)).sort().map(el => revStr(el));
// }
// console.log(last('man i need a taxi up to ubud'));

// function revStr(el) {
//   return el.split('').reverse().join('');
// }



// function last(x) {
//   let arr = [];
//   x.split(' ').reduce((prev, current) => {
    
//   });
// }


// function square(number){
//   let arr = [1];
//   let el = 1;
//   for (let i = 1; i < 64; i++) {
//     arr.push(el += el);
//   }
//   return arr[number - 1];
// }
// console.log(square(5));

// function square(n){
//   return Math.pow(2,n-1);
// }

const num = 5;
let str = '';
for (let i = 1; i <= num; i++) {
    if (i > 1) {
        str += '<br>';
    }
    for (let j = 1; j <= num; j++) {
        str += '+';
    }
}
console.log(str);