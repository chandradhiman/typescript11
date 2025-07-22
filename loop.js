/*1. make an array, and array keyvalue is -- name, age, with the help of map function arrange this array in decressing manner. */
var names = ["chandra", "papa", "shalu", "bittoo"];
var age = [30, 66, 40, 35];
// combine using map 
var users = names.map(function (name, index) { return ({
    name: name,
    age: age[index]
}); });
var users1 = names.map(function (name, index) { return ({
    name: name,
    age: age[index]
}); });
// console.log(users)
var sortedUsers1 = users.sort(function (a, b) { return b.age - a.age; });
var sortedUsers2 = users1.sort(function (a, b) { return a.age - b.age; });
console.log(sortedUsers1); // descending
console.log(sortedUsers2); // ascending
