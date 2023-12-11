

function addedNewFaq(name,description){
   let accordianWrapper = document.querySelector(".accordian-wrapper");

   let newDiv = document.createElement("div");
   newDiv.className = "accordian";
   newDiv.innerHTML = `<h3>${name}</h3>
        <p>${description}</p>`;
   
   accordianWrapper.appendChild(newDiv);

    
}

addedNewFaq("Skills","I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the Github");


let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((elem) => {
  elem.addEventListener("click", () => {
    let para = elem.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


var ul = document.querySelector("ul");
ul.children[2].innerHTML = "Project";

const accordianHeading = document.querySelectorAll(".accordian h3");
accordianHeading.forEach((element) => {
  element.style.backgroundColor = "#dadaf8";
});

const accordianParagraph = document.querySelectorAll(".accordian p");
accordianParagraph.forEach((element) => {
  element.style.backgroundColor = "#eeeeff";
});


