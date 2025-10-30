const container = document.querySelector("#container");

// Create a <p> with red text that says 'Hey I'm red!'
const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style["color"] = "red";
container.appendChild(p);

// Create an <h3> with blue text that says 'I'm a blue h3!'
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style["color"] = "blue";
container.appendChild(h3);

// Create a <div> with a black border, pink bg-color with the following elements inside of it: h1, p
const div = document.createElement("div");
div.style["background-color"] = "pink";
div.style["border"] = "1px solid black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

// Note: doesn't seem to matter if I append child here or before I append h1 and p2 to div
container.appendChild(div);
