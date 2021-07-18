// Tutorial 6 - Properties , Methods & Template Literals

const userName = "Adwait";
const greeting = "Good Morning";
console.log(userName + ' ' + greeting);

let htmlDetails = "<h1> This is h1 tag</h1>" + "<p> This is Paragraph tag </p>";
console.log(htmlDetails);
// Concatinate Function
htmlDetails = htmlDetails.concat("Concatinated using Function");
console.log(htmlDetails);
htmlDetails = htmlDetails.concat("Concatinated using Function", "Str 2");
console.log(htmlDetails);

// lenght 
console.log(htmlDetails.length);

// lowercase and uppercase
let str = "ALK sadl asdl ASd";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Indexing
let str1 = "abcdefghij";
console.log(str1[0]); // a
console.log(str1[3]); // d

// Indexof
let str2 = "My Name is Adwait"
console.log(str2.indexOf('Adwait')); // 11 (return -1 if not present)
// Note:- If there are multiple occurances than indexOf returns the 1st occurence in order to get the last occurence use lastIndexOf
let str3 = "<h1> <h2> <h3>";
console.log(str3.indexOf('<')); // 0
console.log(str3.lastIndexOf('<')); // 10

// charAt
console.log(str2.charAt(11));

// endsWith
console.log(str2.endsWith('Adwait'));
console.log(str2.endsWith('adwait'));

// includes
console.log(str2.includes('is'));

// SubString
console.log(str2.substring(11,17)); //Start Index to n-1

// Slice
console.log(str2.slice(-6)); // Adwait
console.log(str2.slice(0,2)); // My -> Start Index to n-1

// split
let arrStr2 = str2.split(' '); // ["My", "Name", "is", "Adwait"]
console.log(arrStr2);

// replace
let str4 = "my name is AB";
console.log(str4.replace('my','My'));
// Note - only Replaces the 1st occurency in the String

// Template Literals -> Introduced in ES6 Version
let country = "India";
let userId = 101;

let descHtml = `
<h1>User Description</h1>
<p>Country = '${country}' for userId = '${userId}'</p>
`

document.body.innerHTML = descHtml;
