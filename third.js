// for(let i=1;i<=6;i++){
//     console.log("Hello Good morning.....")
// }
// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }
// let i=0;
// do{
//     console.log("I=",i);
//     i++;
// }while (i<=5);


/// for -0f loop
// let str="Good Morning...";
// let size_of_string=0;
// for(let i of str){ // iterator -> character
//     console.log(i);
//     size_of_string++;
// }

// console.log("string size=",size_of_string);


//for -in loop
// let student={
//     name:"Rahul Kumar",
//     age:20,
//     cgpa: 7.9,
//     isPass: true,
// };

// for(let i in student){
//     console.log("key=",i,"value=",student[i]);
// }
// Practice QN 1

// for(let i=2;i<=100;i=i+2){
//     console.log(i);
// }


//Practice No 2

let game_number=90;
let userNum=prompt("Guess the game number:");
while(userNum != game_number){
   let userNum=prompt("You entered wrong number guess again:")
} 
console.log("Congratulations!!! You Entered the right number:")