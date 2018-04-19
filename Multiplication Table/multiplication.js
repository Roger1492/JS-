let number = document.getElementById("number");
let btn = document.getElementById("btn");
let clear = document.getElementById("clear");

function getMultiplication(){
    let createTable = document.createElement("table");
    document.body.appendChild(createTable);
    let num = parseInt(number.innerText);

    for (let i = 1; i < num + 1; i++) {
        let createTr = document.createElement("tr");
        createTable.appendChild(createTr);
        for (let j = 1; j < num + 1; j++) {
            let createTd = document.createElement("td");
            createTr.appendChild(createTd);
            createTd.innerText = i + "*" + j + "=" + i * j;
        }
    }
}

btn.addEventListener("click", function () {
    let t = document.getElementsByTagName("table")[0];
    getMultiplication();
}, false);

clear.addEventListener("click", function(e){
    let table = document.getElementsByTagName("table")[0];
    table.remove();
}, false);