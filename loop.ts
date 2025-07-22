/*1. make an array, and array keyvalue is -- name, age, with the help of map function arrange this array in decressing manner. */ 

interface user {
    names: string;
    age: number;
}

const names : string[] = ["chandra", "papa", "shalu", "bittoo"];
const age : number[] = [30,66,40,35];


// combine using map 
 
const users: user[] = names.map((name, index) => ({
    name,
    age: age[index]
}));

const users1: user[] = names.map((name, index) => ({
    name,
    age: age[index]
}));
// console.log(users)
const sortedUsers1 = users.sort((a, b) => b.age - a.age);
const sortedUsers2 = users1.sort((a,b) => a.age - b.age);

console.log(sortedUsers1); // descending
console.log(sortedUsers2); // ascending
