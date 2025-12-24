// let heading = document.getElementById("Heading");
// console.dir(heading);
// let headings=document.getElementsByClassName("Header");
// console.dir(headings);
// let praphs=document.getElementsByTagName("p");
// console.dir(praphs);
// let Allelements=document.querySelectorAll(".Header");
// console.dir(Allelements);

// let firstelement=document.querySelector("#Heading");
// console.dir(firstelement);
// console.dir(document.body.firstChild[1]);
// let div=document.querySelector("div");
// console.dir(div);

// let heading=document.querySelector("h1");
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + "From me";
let div=document.querySelectorAll(".box");
console.log(div[0]);
let index=0;
for(el of div){
    el.innerText=`New unique value ${index}`;
    index++;
}
