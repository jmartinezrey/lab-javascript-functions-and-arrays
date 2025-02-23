// Find the maximum

var listOfNumbers = [2, 5, 4];

function maxOfTwoNumbers(number){
  console.log(Math.max(...number)); // spread operator "..."
}

maxOfTwoNumbers(listOfNumbers);

/* Another option:

listOfNumbers = [2], [5];

function maxOfTwoNumbers(listOfNumbers){
   let bigNumber = [];
  listOfNumbers.forEach(function(number) {
    bigNumber.push(Math.max(...number))
  })
   return bigNumber;
}
}
*/

// Finding Longest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(arr){ // arr = placeholder, unique per fuction 
  var longest = '';
  for(var i = 0; i < arr.length; i++){ // to loop on every element of the array 
    if(arr[i].length > longest.length) { // It compares the first element, if bigger it adds the value to 'longest'
      longest = arr[i]; 
    }
  }
  return longest; // Adds the value of the function to 'arr'
}

console.log(findLongestWord(words)); // I use the function on 'words'

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]; // = 87

function sum(arr){
  return arr.reduce(function(a,b){  // reduce puts all the numbers together, function a (acummulator),b(current value we are passing) takes the values
    return a + b; // here I sum
  }, 0); // 0 = initial value, where to start
}
  
console.log(sum(numbers));

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9]; // = 48

function avg(arr){
  return sum(arr)/arr.length; // I use the same function to sum and divide the sum by the number of elements in the array
}
  
console.log(avg(numbersAvg)); // = 6

// Array of Strings
var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

var total = 0; // where I store the value of the sum
for(var i = 0; i < wordsArr.length; i++){
    total += wordsArr[i].length; // I start from the first element and sum
} 
var average = total/wordsArr.length; 

console.log(average); // = 5.3

// OTHER OPTION 
// avg = wordsArr.join('').length / wordsArr.length     
// console.log(avg)

// Unique Arrays
var wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

var newArray = [];

function unique(one2){ // bad placeholder name, change 

for(var i = 0; i < one2.length; i++) {
  if(newArray.indexOf(one2[i]) == -1) { 
      newArray.push(one2[i]);
  }
  }
  console.log(newArray);
}
unique(wordsUnique);

// var unique = [...new Set(wordsUnique)]; New Set objetct - to return a new array with unique elements only
// console.log(unique); 

// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(words, wordtofind){
  for (var i=0; i < words.length; i++) {
      if(words[i] === wordtofind){
        console.log(wordtofind)
        return wordtofind;
      }
  }
  console.log('the word does not exist');
}

doesWordExist(wordsFind, 'hello');

// Counting Repetition
var wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

var count = []; // where I'll store the value

for(var i = 0; i < wordsCount.length; i++){
  var arr = wordsCount[i]; 
  count[arr] = count[arr] ? count[arr] + 1 : 1;  // if else - it sums every time it sees the word
}

console.log(count);

/* I wanted to do it this way but I get stucked 

var count = [];

for(var i = 0; i < wordsCount.length; i++){
  if (wordsCount[i] === count) {
      function count(arr){
        
      } += 1;
  }
  else{
    count + 1;
  }

  console.log(count);
*/

// Bonus Quest

var matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
