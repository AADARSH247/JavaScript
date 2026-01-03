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