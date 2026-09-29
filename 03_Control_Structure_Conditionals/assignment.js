const prompt = require('prompt-sync')();
// Section A

// Q 1] Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.

let num = Number(prompt("Enter a number:"))

if (num %5 === 0) {
    console.log("Divisible by 5")
}

// Q 2] Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.

let age = Number(prompt("Enter your age:"))

if (age>=60){
    console.log("Senior Citizen")
}

//Q 3] Write a program that checks if a given number is greater than 100. If yes, print “Big Number”.

let num1 = Number(prompt("Enter a number:"))

if (num1>100){
    console,log("Big Number")
}

//Q 4] Check if the temperature is less than 10. If true, print “Very Cold”.

let temp = Number(prompt("Enter the value of temperature:"))

if (temp<10){
    console.log("Very Cold")
}

//Q 5] Write a program to check if a student scored full marks (100). If yes, print “Perfect Score”.

let marks = Number(prompt("Enter your marks:"))

if (marks === 100) {
    console.log("Perfact Score")
}

//Q 6] Check if a number is negative. If it is, print “Negative Number”.

let num2 = Number(prompt("Enter a number:"))

if (num2<0) {
    console.log("Negative Number")
}

//Q 7] Write a program that checks if a user has entered an empty string. If the string is empty, print “No input provided”.

let str = prompt("Enter a sentance:")

if (str === "") {
    console.log("No input provided")
}

//Q 8] Check if a given year is divisible by 100. If yes, print “Century Year”.

let year = Number(prompt("Enter the number of Year"))

if (year %100 === 0){
    console.log("Century Year")
}

//Q 9] Write a program to check if a number is both positive and even using a single if condition. If true, print “Positive Even Number”.

let num3 = Number(prompt("Enter any number:"))

if (num3 %2 === 0  && num3>0) {
    console.log("Positive Even Number")
}

//Q 10] Check if the value of a variable marks is greater than or equal to 35 and less than or equal to 100. If true, print “Valid Marks”.

let mark = Number(prompt("Enter your marks :"))

if (mark>=35 && mark<100) {
    console.log("Valid Marks")
}

// NEW PART INCOMING
// --------------------------------------- //

// Section B

//Q 1] Write a program to check whether a number is even or odd.

let num4 = Number(prompt("Enter a number:"))

if (num4 %2 === 0) {
    console.log("Even")
}
else {
    console.log("Odd")
}

//Q 2] Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.

let Age = Number(prompt("Enter your Age:"))

if (Age >= 18) {
    console.log("Eligible")
}
else {
    console.log("Not Eligible")
}

//Q 3] Write a program that checks whether a number is positive or negative.

let num5 = Number(prompt("Enter a number:"))

if (num5 > 0) {
    console.log("Positive")
}
else {
    console.log("Negative")
}

//Q 4] Check if a student has passed or failed based on marks (pass mark = 35).

let Mark = Number(prompt("Enter your Mark:"))

if (Mark>=35) {
    console.log("Pass")
}
else {
    console.log("Fail")
}

//Q 5] Write a program to check whether a given character is an uppercase letter or not.

let chr = prompt("Enter a Letter:")

if (chr>="A" && chr<="Z") {
    console.log("Uppercase Letter")
}
else {
    console.log("Lowercase Letter")
}

//Q 6] Check if a number is divisible by 3 or not. Print appropriate messages.

let num6 = Number(prompt("Enter a number:"))

if (num6 %3 === 0) {
    console.log("Divisible by 3")
}
else {
    console.log("Not Divisible by 3")
}

//Q 7] Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password”.

let pas = prompt("Enter your password:")

if (pas === "admin123") {
    console.log("Login Successful")
}
else {
    console.log("Incorrect Password")
}

//Q 8] Check whether a given year is a leap year or not using the basic rule (divisible by 4).

let Year = Number(prompt("Enter the value of year:"))

if (Year %4 === 0 ) {
    console.log("Leap Year")
}
else {
    console.log("Non-Leap Year")
}
