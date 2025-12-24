let btn1=document.querySelector("#btm1");

// btm1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);

// }
// let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("You are inside div");
// }

btm1.addEventListener("click",(evt)=>{
    console.log("button 1 was clicked---handler 1");
});

btm1.addEventListener("click",()=>{
    console.log("button 2 was clicked---handler 2");
}); 

const handler3 = ()=>{
    console.log("button 2 was clicked---handler 3");
};

btm1.addEventListener("click",handler3);

btm1.addEventListener("click",()=>{
    console.log("button 2 was clicked---handler 4");
}); 

btm1.removeEventListener("click",handler3);