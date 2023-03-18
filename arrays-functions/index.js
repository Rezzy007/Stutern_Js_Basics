// Question 1
// Differences between mutating array methods and non-mutating array methods in JavaScript.
// Mutating array methods make changes to the elements in the original array while non-mutating array
// methods do not modify the original array when applied, it returns a new array instead. 
// Examples of mutating array methods are: array.splice(), array.push(), array.unshift(), array.pop(), array.shift()
// using array.push() in the example below
const list1 = [1, 2, 3];
list1.push(4);
console.log(list1);

// Examples of non-mutating array methods are: array.concat(), array.filter(), array.slice(), array.map(), array.reduce()
// using array.concat() in the example below
const array1 = [1, 2, 3, 4, 5];
const array2 = array1.concat(6);
console.log(array1);
console.log(array2)


// Question 2
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
//  (a) Add 'Kotlin' to the end of the array
languages.push('Kotlin');
console.log(languages);

//  (b) Add 'Java' after ‘Ruby’
languages.splice(3, 0, 'Java');
console.log(languages);

//  (c) Remove the first item in the array
languages.shift();
console.log(languages);

//  (d) Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages);

//  (e) Replace 'PHP' with 'Go' and 'Rust'
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);


// Question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit(fruit));
//  The value of fruit after calling the function 'changeFruit' is [ 'apple', 'mango', 'orange' ]


// Question 4
let numbers = [2, 4, 6, 8, 10];
maxNum = (numbers) => {
    let num = Math.max(...numbers);
    return num;
}
console.log('The maximum value is', maxNum(numbers));


// Question 5
const numArray = [2, 4, 6];
valTimesIndex = (numArray) => {
    for (let i in numArray) {
        console.log(numArray[i] * i);
    }
}
valTimesIndex(numArray);