//1.Katai kei kura add grna parexa vaney yo use grni
//esley element select garyo
let selector = document.querySelector("ul");

//ya chai k chai add grnu paryo tyo add grney 
let to_add = document.createElement("li");
to_add.innerHTML = "<a>Hire Me</a>";

//yo chai select gareko rw add garney lai combine garyo
selector.appendChild(to_add);


//2.katai kei kura change grna xa vaney chai yo use grney
let selector2 = document.querySelector("input");
selector2.placeholder = "Search My Project";



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



//selector 
let selector4 = document.querySelector("img");
//combine
selector4.src = "./FB_IMG_1678989022988.jpg";


//selector
let selector5 = document.querySelector(".hero-right-section-btns");

// to add
let to_add3 = document.createElement("button");

to_add3.textContent ="Support Me";


//combine
selector5.appendChild(to_add3);
