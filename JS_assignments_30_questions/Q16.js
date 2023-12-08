// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let month = 'march';

if (["September", "October", "November"].includes(month)) {
  console.log("The season is Autumn.");
} else if (["December", "January", "February"].includes(month)) {
  console.log("The season is Winter.");
} else if (["March", "April", "May"].includes(month)) {
  console.log("The season is Spring.");
} else if (["June", "July", "August"].includes(month)) {
  console.log("The season is Summer.");
} else {
  console.log("Invalid input. Please enter a valid month.");
}


//Simple logic for a single season:
//Just use this and then use it for all the seasons using else if conditions
if(['january','february','march','april'].includes(month))
{
    console.log(`${month} has spring season`);
}