// // sinlge line comment
// // declaring variables
// // global scope
// var a = 1;

// let b = 2;

// //const cannot reassign value
// // const cannot redeclare variable

// const c = 3;

// alert(a + b);

// data types:
// let a = 10;

// console.log(typeof a);
// let firstname = "Bikal";
// let surname = "rai";
// let test;

// // prompt("Enter your name:");

// console.log(firstname);

// console.log(null);
// console.log("This is a test");

// operators
// arithmetic operators: +, - , /, *, %, **
let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

let c = a - b;
console.log(c);

//logical operators: &&, || , !

// true and true = true
//true and false = false
// false and false = false

//true or true = true
//true or false = true
//false or false = false

let isLoggedIn = true;
let isSuperUser = true;
let t = isLoggedIn && isSuperUser;
let test = false || true;
console.log(t);
console.log(test);
console.log(!true);

//typeof keyword
console.log(typeof isSuperUser);

//conditional
if (10 > 12) {
    console.log(typeof b);
} else {
    console.log(typeof isLoggedIn);
}

//if / else if / else

// array
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(arr[0]);

//objects
let obj = {
    firstName: "Bikal",
    lastName: "Rai",
};

// obj["keyname"]
console.log(obj["firstName"]);
console.log(obj.lastName);

const person = {
    name: "Tom",
    age: 22,
    birthYear: 1990,
    hasDrivingLicense: true,
    friends: ["Dick", "Harry", "Sally"],

    calcAge: function () {
        console.log(`Age is ${2022 - this.birthYear}`);
    },
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.birthYear);
console.log(person.hasDrivingLicense);
console.log(person["friends"]);
console.log(person["calcAge"]());
