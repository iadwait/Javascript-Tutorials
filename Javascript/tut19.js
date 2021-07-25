// Tutorial 19 - Exercise 1 Solution

//  Exercise - Fetch all links from a webpage and display only links that contains some keyword eg- python 

let searchBy = 'python';
let links = document.links;
let arrSearchByLinks = [];

console.log("Links containing " + searchBy + " Keywords Are:-");
Array.from(links).forEach(element => {
    //Check if link contains Javascript keyword
   let strlink = element.href.toString();
   if (strlink.includes(searchBy)) {
        arrSearchByLinks.push(strlink);
        // console.log(strlink);
   } 
});

console.log(arrSearchByLinks);
