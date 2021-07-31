// Tutorial 24 - Date Object - Date and Time in Javascript
console.log("Tut 24");


// Create Date Object and get date and time
let today = new Date();
console.log(today); // Sat Jul 31 2021 08:43:57 GMT+0530 (India Standard Time)
console.log(typeof today); // object

// Assign Other Date - format MM DD YYYY
let otherDate = new Date('6-5-1998 01:20:00'); // Fri Jun 05 1998 01:20:00 GMT+0530 (India Standard Time)
otherDate = new Date('June 20 1997'); // Fri Jun 20 1997 00:00:00 GMT+0530 (India Standard Time)
otherDate = new Date('12/31/2020'); // Thu Dec 31 2020 00:00:00 GMT+0530 (India Standard Time)
console.log(otherDate);

// Get Day
let day = today.getDay();
console.log(day); // 6 (for saturday start from sunday with index 0)

// Get Date
let date = today.getDate();
console.log(date); // 31 - gives Date from that complete date

// Get Minutes
let minutes = today.getMinutes();
console.log(minutes); // 55 - gives minutes from that date

// Get Hours
let hours = today.getHours();
console.log(hours); // 8 - Returns hours from date provided

// Get Seconds
let seconds = today.getSeconds();
console.log(seconds); // 58 - Returns Seconds from date provided

// Get Month
let month = today.getMonth();
console.log(month); // 6 for July - Count Start from 0 - Jan, 1 - feb ....

// Get Timestamp
let timeStamp = today.getTime();
console.log(timeStamp); // 1627702191887 - Time Stamp since 1 Jan 1970
// timeStamp = today.getMilliseconds();

// Set Date,Month,Year,Min,Sec,Hours
console.log(today); // Sat Jul 31 2021 09:03:15 GMT+0530 (India Standard Time)
today.setDate(05);
console.log(today); // Mon Jul 05 2021 09:03:15 GMT+0530 (India Standard Time)
today.setMonth(1);
console.log(today); // Fri Feb 05 2021 09:04:14 GMT+0530 (India Standard Time)
today.setFullYear(1998);
console.log(today); // Thu Feb 05 1998 09:05:25 GMT+0530 (India Standard Time)
today.setHours(1);
today.setMinutes(2);
today.setSeconds(3);
console.log(today); // Thu Feb 05 1998 01:02:03 GMT+0530 (India Standard Time)

// All About Dates
// Link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date