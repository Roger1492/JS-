let add = document.getElementById("add");
let close = document.getElementsByClassName("close");
let doing = document.getElementById("doing");
let done = document.getElementById("done");
let doingNum = document.getElementById("doing-num");
let doneNum = document.getElementById("done-num");
let check = document.getElementsByClassName("check");


function addTodo(e){
    var createLi = document.createElement("li");
    var createInput = document.createElement("input");
    var createSpanContent = document.createElement("span");
    var createSpanClose = document.createElement("span");
    createInput.setAttribute("type", "checkbox");
    createSpanContent.innerHTML = e.target.value;
    createLi.appendChild(createInput);
    createLi.appendChild(createSpanContent);
    createLi.appendChild(createSpanClose);
    doing.appendChild(createLi);
}

function doNum(e){
    let doing_Num = doing.querySelectorAll("li");
    let done_Num = doneNum.querySelectorAll("li");
    doingNum.innerHTML = doing_Num.length;
    doneNum.innerHTML = done_Num.length;
}

doing.addEventListener("click", function(e){
    
}, false);

add.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        addTodo(e);
        doNum(e);
    }
}, false);