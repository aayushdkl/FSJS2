function color_changer(color_1){
    let arr_1 = Array.from(document.querySelectorAll(".clash-card__unit-stats"));
    let arr_2 = Array.from(document.querySelectorAll(".one-third.no-border"));

    for (let i in arr_1) {
        arr_1[i].style.backgroundColor = color_1[i];
        arr_1[i].style.color = "#fff";
        arr_2[i].style.color = "#fff";
    }
}

 let colors = ["#bd7c2f","#d04976","#de7b09","#71a32a","#309eff"];
 color_changer(colors);

//Made and done by Aayush Dhakal
//Make sure to follow me on social media handles





