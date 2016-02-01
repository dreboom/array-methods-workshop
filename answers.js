// exercise 1 - Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.

var numbers = [1, -2, 4, -1]

numbers.forEach(function(number) {
    if (number > 0) {
        console.log(number);
    }
});

// exercise 2 - write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers

var positiveNumbers = numbers.filter(function(number) {
    return number > 0;
})

console.log(positiveNumbers);

// exercise 3 - Write a function called filterArray that takes an array AND a function as arguments. Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.

function fun(num){
    return num > 0
}

var q3 = function(array, funNum) {
    return array.filter(fun);
}

console.log(q3(numbers, fun));

// exercise 4 - Write a function called longestWord that takes a string as argument, and returns the longest word in the string.

function longestWord(string) {
    var longStr = string.split(" ");
    return longStr.reduce(function(a, b){
        if( a.length>b.length){
            return a
        } else return b
    })
    };

console.log(longestWord("find the longest word"))

// exercise 5 - Write a function called countVowels that takes a string and returns the number of vowels in the string.

var vowels = ["a", "e", "i" , "o" , "u"];

function countVowels(string) {
    var splitString = string.split("");
    var v_count = 1;

    return splitString.reduce(function(a,b) { //a represents the object, b represents the letters in the sentence
        if (vowels.indexOf(b) > -1) {
            a.count = v_count;
            v_count++;
        } else if(!a.count){
            a.count = 0;
        }
        return a;
        
    },{});
}
      
console.log(countVowels("find all the vowels in this sentence - should be 13"));


// exercise 6 - Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, and a property lowest containing the lowest number, using Array.prototype.reduce.

var moreNumbers = [1, 4, -3, 12, 300];

var seperatedNumbers = {
    highest: -Infinity,
    lowest: Infinity
};


function highLow(arr) {
    var someCode = arr.reduce(function(a, b) {
        if (a.lowest > b) {
            a.lowest = b;
        }

        if (a.highest < b) {
            a.highest = b;
        }

        return a;
    }, seperatedNumbers);

    return someCode;
}


console.log(highLow(moreNumbers))


/*

function longestWord(string) {
    var longStr = string.split(" ");
    var counter = 0;
    return longStr.reduce(function(a, b) {
        
        a[b] = counter++;
    
        return a
    },{})
    };

console.log(longestWord("find the longest word"))

*/

