let add = document.getElementById("add");
let todo = document.getElementById("todo");

add.addEventListener("click", function () {
    let createDiv = document.createElement("div");
    let createClose = document.createElement("span");
    let createInput = document.createElement("input");

    createDiv.setAttribute("class", "list");
    createClose.setAttribute("class", "close");
    createInput.setAttribute("type", "text");
    createClose.innerHTML = "X";

    createDiv.appendChild(createClose);
    createDiv.appendChild(createInput);
    todo.appendChild(createDiv);
}, false);