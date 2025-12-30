// const student={
//     fullName : "AADARSH GHIMRE",
//     marks:90,
//     printMarks: function(){
//         console.log("marks =",this.marks);//this implies student.marks
//     },

// };

// const employee={
//     calcSal() {
//      console.log("salary is 10000");
//     },
// };

// const karanArjun={
//     salary:90000,
//     calcSal(){
//         console.log("salary is 90000");
//     },
// };

// karanArjun.__proto__=employee;

// class Toyotacar{
//     constructor(brand){
//         console.log("Creating new object");
//         this.brand =brand;
//     }
//     start(){
//         console.log("The car is starting ");
//     }
//     stop(){
//         console.log("The car is stopping...");
//     }
   
// }

// let fortuner = new Toyotacar("fortuner");

class parent{
    hello(){
        console.log("hello");
    }
}
class child extends parent{

}
let chill = new child();