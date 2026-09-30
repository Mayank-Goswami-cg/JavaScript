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




// 3. IF ELSE IF...ELSE

// //1.
// let month = Number(prompt("Enter the month:"))

// if (month==12 || month==1 || month==2){
//     console.log("winter")
// }else if (month==3 || month ==4 || month==5){
//     console.log("Summer")
// }else if (month==6 || month==7 || month==8){
//     console.log("Monsoon")
// }else if(month==9 || month==10 || month==11){
//     console.log("Autumn")
// }else{
//     console.log("Invalid Month")
// }


// //2
// let income = Number(prompt("Enter the income:"))

// if (income<300000){
//     console.log("No Tax")
// }else if (income>=300000 && income<=700000){
//     console.log("5% Tax")
// }else if (income>=700000 && income<=1000000){
//     console.log("10% Tax")
// }else if (income<=1000000){
//     console.log("15% Tax")
// }

//3
// let marks = Number(prompt("Enter the marks:"))

// if (marks>=90 && marks<=100){
//     console.log("Outsanding")
// }else if (marks>=70 && marks<=89){
//     console.log("Good")
// }else if (marks>=40 && marks<=69){
//     console.log("Average")
// }else if (marks<40){
//     console.log("Fail")
// }else{
//     console.log("Invalid Marks")
// }

//4
// let speed = Number(prompt("Enter the speed:"))

// if (speed>=80){
//     console.log("Fast")
// }else if (speed>=40 && speed<=80){
//     console.log("Normal")
// }else if (speed>=0 && speed<40){
//     console.log("Slow")
// }else{
//     console.log("Invalid speed")
// }

//5
// let height = Number(prompt("Enter the height:"))

// if (height>=170){
//     console.log("Tall")
// }else if (height>=150 && height<=170){
//     console.log("Average")
// }else if (height>=0 && height<150){
//     console.log("Short")
// }else{
//     console.log("Invalid Heghit")
// }


//6
// let day = Number(prompt("Enter the day:"))

// if (day>=1 && day<=5){
//     console.log("Weekday")
// }else if (day>=6 && day<=7){
//     console.log("Weekend")
// }else{
//     console.log("Invalid Input")
// }

//7
// let units = Number(prompt("Enter electricity units:"));
// let bill;

// if (units <= 50) {
//     bill = units * 2;
// } else if (units <= 150) {
//     bill = units * 4;
// } else {
//     bill = units * 6;
// }

// console.log("Total Electricity Bill = ₹" + bill);

//8
// let attendance = Number(prompt("Enter attendance percentage:"));

// if (attendance >= 90) {
//     console.log("Excellent");
// } else if (attendance >= 75) {
//     console.log("Good");
// } else if (attendance >= 50) {
//     console.log("Satisfactory");
// } else {
//     console.log("Poor");
// }

//9
// let mark1 = Number(prompt("Enter first subject mark:"));
// let mark2 = Number(prompt("Enter second subject mark:"));
// let mark3 = Number(prompt("Enter third subject mark:"));

// if (mark1 >= mark2 && mark1 >= mark3) {
//     console.log("Highest mark: " + mark1);
// } else if (mark2 >= mark1 && mark2 >= mark3) {
//     console.log("Highest mark: " + mark2);
// } else {
//     console.log("Highest mark: " + mark3);
// }

//10
// let num = Number(prompt("Enter a number:"));

// if (num === 0) {
//     console.log("Zero");
// } else if (num > 0 && num % 2 === 0) {
//     console.log("Positive Even");
// } else if (num > 0 && num % 2 !== 0) {
//     console.log("Positive Odd");
// } else if (num < 0 && num % 2 === 0) {
//     console.log("Negative Even");
// } else {
//     console.log("Negative Odd");
// }

//D.Nested if

//1
// let num = Number(prompt("Enter a number:"));

// if (num > 10) {
//     if (num % 3 === 0) {
//         console.log("Number is greater than 10 and divisible by 3");
//     } else {
//         console.log("Number is greater than 10 but not divisible by 3");
//     }
// } else {
//     console.log("Number is not greater than 10");
// }

//2
// let age = Number(prompt("Enter your age:"));
// let voterID = prompt("Do you have a voter ID? (yes/no)");

// if (age >= 18) {
//     if (voterID === "yes") {
//         console.log("Can Vote");
//     } else {
//         console.log("Cannot Vote - No Voter ID");
//     }
// } else {
//     console.log("Cannot Vote - Under 18");
// }

//3
// let marks = Number(prompt("Enter marks:"));

// if (marks >= 40) {
//     if (marks >= 80) {
//         console.log("Passed with Distinction");
//     } else {
//         console.log("Passed");
//     }
// } else {
//     console.log("Failed");
// }

//4
// let correctPIN = 1234;
// let pin = Number(prompt("Enter PIN:"));
// let balance = 10000;

// if (pin === correctPIN) {
//     let withdrawal = Number(prompt("Enter withdrawal amount:"));

//     if (withdrawal <= balance) {
//         balance = balance - withdrawal;
//         console.log("Withdrawal Successful");
//         console.log("Remaining Balance: ₹" + balance);
//     } else {
//         console.log("Insufficient Balance");
//     }
// } else {
//     console.log("Incorrect PIN");
// }

//5
// let year = Number(prompt("Enter a year:"));

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("Leap Year");
//         } else {
//             console.log("Not a Leap Year");
//         }
//     } else {
//         console.log("Leap Year");
//     }
// } else {
//     console.log("Not a Leap Year");
// }

//6
// let email = prompt("Enter your email:");

// if (email.includes("@")) {
//     if (email.endsWith(".com")) {
//         if (email.length > 10) {
//             console.log("Valid Email");
//         } else {
//             console.log("Email length is too short");
//         }
//     } else {
//         console.log("Email must end with .com");
//     }
// } else {
//     console.log("Email must contain @");
// }

//7
// let cartTotal = Number(prompt("Enter cart total:"));
// let premium = prompt("Are you a premium member? (yes/no)");
// let discount;
// let finalAmount;

// if (cartTotal >= 1000) {
//     if (premium === "yes") {
//         discount = cartTotal * 0.20;
//     } else {
//         discount = cartTotal * 0.10;
//     }

//     finalAmount = cartTotal - discount;

//     console.log("Discount: ₹" + discount);
//     console.log("Final Amount: ₹" + finalAmount);
// } else {
//     console.log("No discount");
//     console.log("Final Amount: ₹" + cartTotal);
// }

//8
// let num = Number(prompt("Enter a number:"));

// if (num > 0) {
//     if (num % 2 === 0) {
//         if (num % 4 === 0) {
//             console.log("Positive Even and Divisible by 4");
//         } else {
//             console.log("Positive Even but not Divisible by 4");
//         }
//     } else {
//         console.log("Positive Odd");
//     }
// } else {
//     console.log("Number is not positive");
// }

//9
// let age = Number(prompt("Enter your age:"));
// let degree = prompt("Do you have a graduation degree? (yes/no)");
// let experience = Number(prompt("Enter years of experience:"));

// if (age >= 21 && age <= 30) {
//     if (degree === "yes") {
//         if (experience >= 2) {
//             console.log("Eligible for Interview");
//         } else {
//             console.log("Not Eligible - Less than 2 years experience");
//         }
//     } else {
//         console.log("Not Eligible - No Graduation Degree");
//     }
// } else {
//     console.log("Not Eligible - Age must be between 21 and 30");
// }

//10
// let present = prompt("Is the student present? (yes/no)");
// let internalMarks = Number(prompt("Enter internal marks:"));
// let externalMarks = Number(prompt("Enter external marks:"));

// if (present === "yes") {
//     if (internalMarks >= 30) {
//         if (externalMarks >= 35) {
//             console.log("Eligible for Final Exam");
//         } else {
//             console.log("Not Eligible - External marks are less than 35");
//         }
//     } else {
//         console.log("Not Eligible - Internal marks are less than 30");
//     }
// } else {
//     console.log("Not Eligible - Student is absent");
// }