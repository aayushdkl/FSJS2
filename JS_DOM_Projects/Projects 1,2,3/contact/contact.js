const inputName = document.querySelector(".userName")
const inputEmail = document.querySelector(".userEmail")
const inputMessage = document.querySelector(".userMessage")
const outputName = document.querySelector(".enterName")
const outputEmail = document.querySelector(".enterMail")
const outputMessage = document.querySelector(".enterMessage")

window.localStorage.setItem("inputName",inputName.value)

const btns = document.querySelectorAll("button")


btns[2].addEventListener("click",(event)=>{   
    outputName.value = inputName.value;
    outputEmail.value = inputEmail.value;
    outputMessage.value = inputMessage.value;
    event.preventDefault()
})

btns[1].addEventListener("click",(event)=>{
    outputName.value = "";
    outputEmail.value = "";
    outputMessage.value = "";
    event.preventDefault()
})

document.querySelector(".enterName").placeholder = "FSJS 2.0";
document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".enterMessage").placeholder = "Hello World";
document.querySelector(".userName").placeholder = "FSJS 2.0";
document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".userMessage").placeholder = "Hello World";

