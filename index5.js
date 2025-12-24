// function myFunction(){
//     console.log("Welcome to the programming world");
//     console.log("We are learning JS");
// }

// myFunction();
// myFunction();

// function myFunction(name){
// function myFunction(name){
//     console.log(name);
// }
// myFunction("Ram");

// arrow function

// const arrowSum=(a,b)=>{
//     console.log(a+b);
// };

// function vowelCount(word) {
//   let count = 0;
//   for (char of word) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// vowelCount("hello my sons..");

// const vowelCount = (word) => {
//   let count = 0;
//   for (char of word) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// vowelCount("hello my sons..");

// let arr=[1,2,3,5,5,6];
// arr.forEach(function printVal(val,idx,arr){
//     console.log(val,idx,arr);
// });


// let array=[1,2,10,4,50,69]

// // let newarray=array.map((val)=>{
// //     return val;
// // });
// // console.log(newarray);
// // array.forEach((val)=>{
// //     console.log(val*val);
// // });
// // let newArray=array.filter( (val)=>{
// //     return val%2===0;
// // });
// // console.log(newArray);
// const output=array.reduce((result,current)=>{
//     return result>current? result: current;
// });
// console.log(output);



//practice questions 
// let array=[70,89,90,91,98,78,69];

// const output=array.filter((cur)=>{
//     return cur>=90;
// });
// console.log(output);
let value=prompt("Enter a value:");
let arr=[];
for(let i=1;i<=value;i++){
    arr[i-1]=i;
}
console.log(arr);

let output=arr.reduce((pre,curr)=>{
    return pre+curr;
});
console.log(output);

let product=arr.reduce((pre,curr)=>{
    return pre*curr;
});
console.log("product of all elements=",product);