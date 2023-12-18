
### Live Demo : [link](https://aayushdkl.github.io/dom_proj6/)

<br>

## DOM Assignments 6

<br>

### Task 1

<br>

#### Question : change the logo to ineuron logo and also change the price 4 to 10 dollar

<br>

#### After Image

<br>

![image](./Output/DOM%20P3%20SS-1.png)
![image](./Output/DOM%20P3%20SS-2.png)

<br>

#### Solution

```Javascript

let new_logo = document.querySelector(".logo");
new_logo.src = ("./assets/ineuron-logo.png");

let new_price = document.querySelector(".app_price");
let new_price2 = new_price.querySelector("span");

new_price2.innerText = ("$10");

```
