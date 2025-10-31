const ul = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("form button");

const addItem = function(e) {
    e.preventDefault();
    // Prevent empty items from being passed in
    if (input.value == "") return;

    // Get current item
    const currentValue = input.value;
    input.value = "";

    // Create li with item and its respective delete button
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    
    span.textContent = currentValue;
    button.textContent = "Delete";
    button.addEventListener('click', (e) => {
        li.remove();
    });

    ul.appendChild(li);
    // Return cursor/text back to input
    input.focus();
};

button.addEventListener('click', (e) => addItem(e));