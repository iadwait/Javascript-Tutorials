// Tutorial 2
console.log('Tut 2 - Console.log, Errors , Warnings , Debugging');
console.time('Code Execution Time');
console.log('Hello World');
console.log(30+5);
console.log(30);
console.log(true);
console.log([1,2,3,4,5]);
console.log(
    {
        name: "Adwait",
        age: "23"
    }
    );

console.table({
    name: "Adwait",
    age: "23"
});

// console.clear();
console.timeEnd('Code Execution Time');
console.assert(200<100, 'Age > 100 is not possible');
console.error('This is an Error');