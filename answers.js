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






function longestWord(string) {
    var longStr = string.split(" ");
    var counter = 0;
    return longStr.reduce(function(a, b) {
        
        a[b] = counter++;
    
        return a
    },{})
    };

console.log(longestWord("find the longest word"))