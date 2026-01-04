// function hello(){
//     console.log("Hello There user");
// }
// setTimeout(hello,5000);

// function getData(dataid, nextdatacall){
//     setTimeout(()=>{
//         console.log("data:",dataid);
//         if(nextdatacall){
//             nextdatacall();
//         }
//     },2000)
// }
// getData(1,() => {
//     getData(2)
//     })

// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");

// })

// function getData(getvalue,setvalue){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("dataId",getvalue);
//         resolve("success");
//         if (setvalue){
//                 console.log("data",setvalue);
//             }
//         },5000);
//     });
// }

// const promise =()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am promise");
//         reject("network Error");
//     });
// };

// let getpromise=promise();
// promise.then((res)=>{
//     console.log("Promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// function Async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 1");
//             resolve("success");
//         },5000);
//     });
// }
// function Async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 2");
//             resolve("success");
//         },5000);
//     });
// }
// console.log("fetching data 1 ....");
// Async1().then((res)=>{
//     console.log("fetching data 2 ....");
//     Async2().then((res)=>{

// })
// })

// function getdata(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 4000);
//   });
// }

// getdata(1)
//   .then((res) => {
//     return getdata(2);
//   })
//   .then((res) => {
//     return getdata(3);
//   })
//   .then((res)=>{
//     console.log(res);
//   });

// async function hello(){
//     console.log("Hello!!!!!");
// }

function GetData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data",data);
            resolve(200);
        },4000);

    });
}
 // Aync-Await
//  async function getAllData(){
//     console.log("getting data 1...");
//     await GetData(1);
//     console.log("getting data 2...");
//     await GetData(2);
//     console.log("getting data 3...");
//     await GetData(3);
//  }
//  getAllData();

(async function (){
    console.log("getting data 1...");
    await GetData(1);
    console.log("getting data 2...");
    await GetData(2);
    console.log("getting data 3...");
    await GetData(3);
  })();
  ///  No need to call this function

