let str="Hello Programmer";
let str2='Hi';
// console.log(str.length)
// for(let i=0;i<=str.length;i++){
//     console.log(str[i]);
// }

// Template Literals
// let obj={
//     item:"pen",
//     price:10,
// };
// let output=`the cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output)

// //escape character
// console.log(" Hello \n Programmer.."); // the \n and \t are counted as a single character while doing string length
// console.log(" Hello \t Programmer..");

// let string="Hello and Welcome Welcome Welcome    ";
// console.log(string.toUpperCase())
// console.log(string.toLowerCase())
// console.log(string.trim())// the whitespaces are removed 

// more string methods in javascript
let example="This is a string.";
let add_to_string="This is a added part";
string_slice=example.slice(0,8);
string_concat=example.concat(add_to_string);
string_replace=example.replace("is","are");
string_charAt=example.charAt(0);
console.log(string_slice);
console.log(string_concat);
console.log(string_replace);
console.log(string_charAt);