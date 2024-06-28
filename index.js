//console.log("Siema");
//window.alert("Stronke sobie robie");
//window.alert("Lubie pizze");

//comment
/*let username;
let age = 22;
let price = 10.99;
let students = 30;
students +=2;

console.log(`${students}`);
console.log(`Jestem ${username}`);
console.log(`Mam ${age} lat`);

// input

username = window.prompt("Jaki masz nick?");
console.log(username);*/

//const

const pi = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value; 
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}