// let totalInternet = 25;
// let noOfFamilymembers = 5;
// totalInternet /= noOfFamilymembers;
// console.log(`Internet pack per family member is ${totalInternet}GB`)


// let playlistIndex=150;
// let noOfSong=250;
// noOfSong %= playlistIndex;
// console.log(noOfSong)

// console.log(7==7); //true
// console.log(7!=7); //false
// console.log(7==70); //flase
// // EDGE CASE
// console.log(7=="07"); //true
// console.log(0==false); //true

// Different types → always false
// // console.log(0 === false);        // false
// // console.log("" === false);       // false
// // console.log("0" === 0);          // false
// // console.log(null === undefined); // false
// // console.log([] === 0);           // false
// // console.log([] === false);       // false

// // NaN is not equal to anything, including itself
// // console.log(NaN === NaN);        // false
// // console.log(NaN == NaN);         // false


// // == => only Values:
// // === => Values + Data type:


// let scannedProductId="#1203566"
// let storedProductId="#1203566"
// console.log((scannedProductId===storedProductId))


// let selectedPaymentMethod ="Cash"
// let savedPaymentMethod ="UPI"
// let isMatch = (selectedPaymentMethod===savedPaymentMethod)
// console.log(isMatch)


// let currentDeviceType="IOS"
// let registeredDeviceType="Andriod"
// let isSame=(currentDeviceType===registeredDeviceType)
// console.log("Does the device type is same?",isSame)

// // true = 1
// // false = 0
// // null = 0
// // undefined = NaN
// // []=0
// // {}=NaN

// let roomTemperature=23;
// let comfortableTemperature=24;
// let isACOn= roomTemperature>comfortableTemperature;
// console.log("Is it okay to turn on AC??", isACOn)


// let expectedTime=18;
// let actualTime=15;
// let withInTime=expectedTime>actualTime;
// console.log("Is delivery arrived before expected time??",withInTime)

// let workingHours=7;
// let requiredWorkingHour=8;
// console.log("Is he working Overtime??", workingHours>requiredWorkingHour)
// console.log("Does he completing his workhours??", workingHours>=requiredWorkingHour)

// let email=true;
// let phoneNumber=true;
// let verified= email && phoneNumber;
// console.log(verified)

// let recentUser=false;
// let oldUser=true;
// let showBanner=recentUser||oldUser;
// console.log(showBanner)



// // let roomTemperature = 30;
// // let requiredTemperature = 24;
// // let isTemperature = roomTemperature>requiredTemperature;
// // console.log("Is the Room temperature is same=>",isTemperature)


// // let employeeWorkinghours = 9;
// // let actuallWorkinghours = 8;
// // let WorkingHours = employeeWorkinghours>=actuallWorkinghours;
// // console.log("The actual Time is:",WorkingHours)


// // let uploadedSize = 9;
// // let actuallSize = 8;
// // let Work= employeeWorkinghours>=actuallWorkinghours;
// // console.log("The actual Time is:",Work)

// // let emailVerified=true;
// // let phoneVerified=true;
// // let isVerified = emailVerified && phoneVerified;
// // console.log(`Is the user verified? ${isVerified}`);

// // let newUser=true;
// // let hasNotPurchased=false;
// // let isBought = newUser || hasNotPurchased;
// // console.log(`Special offer applicable? :${isBought}`);


// // 1. Logical  &&

// //Que 1
// //// let Username=admin;
// // //let Password="1234";
// // //let isSame = Username==admin && Password=="1234";
// // //console.log(`Do the credentials match? :${isSame}`);

// //Que 2
// // let isLoggedIn=true;
// // let hasPermission=true;
// // let isPermitted = isLoggedIn && hasPermission;
// // console.log(`Is the user permitted? :${isPermitted}`);

// //Que 3
// // let isStock=true;
// // let price=800;
// // let isbought = isStock && price==800;
// // console.log(`Is the item bought? :${isbought}`);

// //Que 4
// // let studentMarks=75;
// // let studentAttendance=80;
// // let iseligible = studentMarks==75 && studentAttendance==80;
// // console.log(`Is the student eligible? :${iseligible}`);

// //Que5
// // let isWeekend=true;
// // let isHoliday=false;
// // let isparty = isWeekend && isHoliday;
// // console.log(`Is it party time? :${isparty}`);

// //Que 6
// let a = 0;
// let b = false;
// console.log(a == b);// true

// //Que 7
// let x = "";
// let y = false;
// console.log(x == y);//true

// //Que 8
// let p = "0";
// let q = 0;
// console.log(p == q);//true

// //Que 9
// let m = [];
// let n = 0;
// console.log(m == n);//false

// //Que 10
// let val1 = [];
// let val2 = false;
// console.log(val1 == val2);//false


// // 2. Logical //
// //Que 1
// // let passwordCorrect = true;
// // let otpValid = false;
// // let isallowed = passwordCorrect || otpValid;
// // console.log(`Is the user allowed? :${isallowed}`);

// //Que 2
// // let age = 16;
// // let height = 155;
// // let isEntryallowed = age >= 18 || height >= 150;
// // console.log(`Is the Student eligible for entry? :${isEntryallowed}`);

// //Que 3
// // let emailGiven = true;
// // let phoneGiven = false;
// // let isFormValid = emailGiven || phoneGiven;
// // console.log(`Is the form valid? :${isFormValid}`);

// //Que 4
// // let score = 900;
// // let timeBonus = true;
// // let isGameLevel = score >= 1000 && timeBonus;
// // console.log(`Is the game level complete? :${isGameLevel}`);

// //Que 5
// // let isBanned = false;
// // let timeBonus = true;
// // let isGameLevel = score >= 1000 && timeBonus;
// // console.log(`Is the game level complete? :${isGameLevel}`);




// // Quick Tips
// // Always prefer === over ==
// // Use curly braces {} even for single-line statements
// // Order of conditions matters in else if
// // Use switch for exact value matching
// // Use ternary only for simple decisions

// let x=99;
// let y=++x;
// console.log(x,y)
// let name = "Alice";
// let age = 25;
// let isActive = true;

// console.log(typeof name);    // "string"
// console.log(typeof age);     // "number"
// console.log(typeof isActive); // "boolean"

// // Basic types
// console.log(typeof 123);         // "number"
// console.log(typeof "hello");     // "string"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"

// // Known quirk: typeof null is "object" (historical bug)
// console.log(typeof null);        // "object"

// // Objects and arrays both show as "object"
// console.log(typeof {});          // "object"
// console.log(typeof []);          // "object"

// // Functions show as "function"
// console.log(typeof function(){});// "function"

// // NaN and Infinity are still numbers
// console.log(typeof NaN);         // "number"
// console.log(typeof Infinity);    // "number"






// console.log(a - b);   // 5  ("10" → 10)
// console.log(a * b);   // 50 ("10" → 10)
// console.log(a / b);   // 2  ("10" → 10)