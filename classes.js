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

// class parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class child extends parent{

// }
// let chill = new child();

// class person{
//     constructor(name){
        
//         this.species = "homo sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat ");
//     }
// }
// class engineering extends person{
//     constructor(name){
//         super(name); // to invoke parent class constructor 
//     }
//     work(){
//         super.eat();
//          console.log("solve problem, build somethings");
//     }
// }
// // class Doctor extends person{
// //     work(){
// //          console.log("Treat Patients");
// //     }
// // }
// let aadarsh = new engineering("aadarsh");
let DATA="secret website data";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("some website data");
    }
};
let user1=new user("aadarsh","aadarshghimre2@gmail.com");
let user2=new user("hellna","hellna3@gmail.com");

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA="some new value ";
    }
}

let admin1=new admin("admin","admin@gmail.com");