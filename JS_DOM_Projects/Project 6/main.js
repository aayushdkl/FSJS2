
// const logos = document.querySelectorAll(".logo");

// logos.forEach(e=>{
//     e.src = `./assets/ineuron-logo.png`;
//     e.style.width = "200px";
// })

// document.querySelector(".app_price span").innerText = "$10";

let new_logo = document.querySelector(".logo");
new_logo.src = ("./assets/ineuron-logo.png");

let new_price = document.querySelector(".app_price");
let new_price2 = new_price.querySelector("span");

new_price2.innerText = ("$10");