<br>

## DOM Assignments 4

<br>

### Task 1

<br>

#### Question : The user change the colors from the following cash of clans characters

<br>

#### After Image

<br>

![image](./Output/DOM%20P1%20SS.png)

<br>

#### Solution

```Javascript

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



```
