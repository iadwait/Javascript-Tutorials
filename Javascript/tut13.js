// Tutorial 13 - Exercise - Fetch all links from a webpage and display only links that contains keyword "Javascript"

console.log('Tut 13');

let links = document.links;

console.log("All Links :- ");
Array.from(links).forEach(element => {
    console.log(element.href);
});

console.log("Links containing Javascript Keywords Are:-");
Array.from(links).forEach(element => {
    //Check if link contains Javascript keyword
   let strlink = element.href.toString();
   if (strlink.includes('javascript')) {
        console.log(strlink);
   } 
});
