
### Live Demo : [link](https://aayushdkl.github.io/dom5th_live/)

<br>

## DOM Assignments 5

<br>

### Task 1

<br>

#### Question : Add a 6th card using javascript

<br>

#### After Image

<br>

![image](./Output/DOM%20P2%20SS.png)

<br>

#### Solution

```Javascript



let catcher = document.querySelector('.nav-center');

let new_button = document.createElement('a');
new_button.innerHTML= "<a> Pro Subscription </a>";
// new_button.className = "btn";
new_button.setAttribute("class","btn");
new_button.setAttribute("href","#");
catcher.appendChild(new_button);


let selec1 = document.querySelector(".tags-container");
let childToAccess = selec1.querySelector("div");

let new_element = document.createElement("a");
new_element.innerText = ("Chinese(7)");
new_element.setAttribute("href","#");

childToAccess.appendChild(new_element);



let selector2 = document.querySelector(".recipe-gallery");
let new_el1 = document.createElement("div");
new_el1.setAttribute("class","card");
selector2.appendChild(new_el1);

let new_el2 = document.createElement("a");
new_el2.setAttribute("href","#");
new_el2.setAttribute("class","recipe-text");
new_el1.appendChild(new_el2);


let new_img = document.createElement("img");
new_img.setAttribute("src","./Output/new-img.webp");
new_img.setAttribute("class","recipe-img ");
new_el2.appendChild(new_img);


let new_h5 = document.createElement("h5");
new_h5.setAttribute("class","recipe-name");
new_h5.innerText = "Chocolate Cake";
new_el2.appendChild(new_h5);

let new_p = document.createElement("p");
new_p.setAttribute("class","recipe-disp");
new_p.innerText = "Prep : 20min | Cook : 40min";

new_el2.appendChild(new_p);

```
