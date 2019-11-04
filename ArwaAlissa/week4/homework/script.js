console.log("JS connected"); // this to check that our script is connected to out HTML

var body = document.querySelector("body"); // query select body 
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
body.style = "font-family: Arial, sans-serif;";
// console.log(body);
// change the backgroundColor to a color of your choice
body.style.backgroundColor = "#A1C3D1";
//OR:
// body.style = "background-color: rgb(204,255,229);";

var nickname = document.querySelector("#nickname");// qurey select the ID nickname
//add some value to nickname Hint: innerHTML
// console.log(nickname);
nickname.innerHTML = "Arwa";
// query select favorites byID
var favorites = document.querySelector("#favorites");
favorites.innerHTML = "coding";
// query select hometown byID
var hometown = document.querySelector("#hometown");
hometown.innerHTML = "Riyadh";

// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL
nickname.style.color = "#B39BC8";
favorites.style.color = "#F172A1";
hometown.style.color = "#E64398";


// https://www.w3schools.com/jsref/prop_style_color.asp