// let modechange = document.querySelector("#modechange");
// let body = document.querySelector("body");
// let currmode="light";
// modechange.addEventListener("click",()=>{
//     console.log("You are trying to change the theme");
//     if(currmode==="light"){
//         currmode="dark";
//         body.classList.remove("light");
//         body.classList.add("dark");
//     }else{
//         currmode="light";
//         body.classList.remove("dark");
//         body.classList.add("light");
//     }
//     console.log(currmode);
// });
function simulateClick() {
  // Get the element to send a click event
  const cb = document.getElementById("checkbox");

  // Create a synthetic click MouseEvent
  let evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // Send the event to the checkbox element
  cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener("click", simulateClick);