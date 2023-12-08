// Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.


let my_date = new Date();
console.log(my_date.toString());
console.log(my_date.toDateString());
console.log(my_date.toISOString());
console.log(my_date.toJSON());
console.log(my_date.toLocaleDateString());
console.log(my_date.toLocaleString());
console.log(my_date.toTimeString());
console.log(typeof my_date);


let my_date2 = new Date(2003,7,31)
console.log(my_date2.toString());
console.log(my_date2.getDate());
console.log(my_date2.getDay());
console.log(my_date2.getHours());








