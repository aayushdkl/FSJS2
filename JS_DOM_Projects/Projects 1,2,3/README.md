## DOM Assignments 1

<br>

### Task 1

<br>

#### Question : The user to append a new element in the navigation menu named "Hire me" after the projects.

<br>

#### After Image :

<br>

![image](./firstAssignmentImage/task1Output.png)

<br>

#### Solution :

```Javascript
    //1.Katai kei kura add grna parexa vaney yo use grni
//esley element select garyo
let selector = document.querySelector("ul");

//ya chai k chai add grnu paryo tyo add grney
let to_add = document.createElement("li");
to_add.innerHTML = "<a>Hire Me</a>";

//yo chai select gareko rw add garney lai combine garyo
selector.appendChild(to_add);
```

<br>

### Task 2

<br>

#### Question : The user to change the search input placeholder text to "search" ==> "Search my projects"

<br>

#### After Image :

<br>

![image](./firstAssignmentImage/task2Output.png)

<br>

#### Solution :

```Javascript
    //2.katai kei kura change grna xa vaney chai yo use grney
    let selector2 = document.querySelector("input");
    selector2.placeholder = "Search My Project";
```

<br>

### Task 3

<br>

#### Question : The user to change the "a freelancer " to "an employee"and also change the company name to "iNeuron intelligence Pvt Ltd" in hero text section

<br>

#### After Image :

<br>

![image](./firstAssignmentImage/task3Output.png)

<br>

#### Solution :

```Javascript
    //selector
let selector3 = document.querySelector("p");

//toadd
let to_add2= `
<h1>Hello, I am a <span>Web Developer</span></h1>
        <p>
          I am an aspiring <span>Full Stack JavaScript Developer</span>,
          <br />who is currently working as <span>an Employee</span> for <br />
          <span>iNeuron Intelligence Pvt Ltd.</span>.
        </p>
`;

selector3.innerHTML = to_add2;
```

<br>

### Task 4

<br>

#### Question : The user to change the hero avtar image to new avatar image

<br>

#### After Image :

<br>

![image](./firstAssignmentImage/task4Output.png)

<br>

#### Solution :

```Javascript
    //selector 
    let selector4 = document.querySelector("img");
    //combine
    selector4.src = "./FB_IMG_1678989022988.jpg";
```

<br>

### Task 5

<br>

#### Question : The user to append a new btn element in the hero-right-section-btns class btn named "Support me"

<br>

#### After Image :

<br>

![image](./firstAssignmentImage/task5Output.png)

<br>

#### Solution :

```Javascript
    //selector
let selector5 = document.querySelector(".hero-right-section-btns");

// to add
let to_add3 = document.createElement("button");

to_add3.textContent ="Support Me";


//combine
selector5.appendChild(to_add3);
```

<br>

## DOM Assignments 2

<br>

### Task 1

<br>

#### Question : The user write the faq section javascript code

<br>

#### After Image

<br>

![image](./secondAssignmentImage/task1Output.png)

<br>

#### Solution

```Javascript
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
```

<br>

### Task 2

<br>

#### Question : The user append a new faq child in the faq section faq child name "Skills"

<br>

#### After Image

<br>

![image](./secondAssignmentImage/task2Output.png)

<br>

#### Solution

```Javascript

    function addedNewFaq(name,description){
    let accordianWrapper = document.querySelector(".accordian-wrapper");

    let newDiv = document.createElement("div");
    newDiv.className = "accordian";
    newDiv.innerHTML = `<h3>${name}</h3>
            <p>${description}</p>`;

    accordianWrapper.appendChild(newDiv);


    }

    addedNewFaq("Skills","I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the Github");

```

<br>

## DOM Assignments 3

<br>

### Task 1

<br>

#### Question : The user input the form and you display in the output form

<br>

#### After Image

<br>

![image](./thirdAssignmentImage/task1Output.png)

<br>

#### Solution

```Javascript

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

```
