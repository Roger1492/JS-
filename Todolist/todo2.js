let add = document.getElementById("add");
let close = document.getElementsByClassName("close");
let doing = document.getElementById("doing");
let done = document.getElementById("done");
let doingNum = document.getElementById("doing-num");
let doneNum = document.getElementById("done-num");
let check = document.getElementsByClassName("check");

// 添加一条todo list
add.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        let arr = [];
        let addVal = e.target.value;
        let obj = {"title":addVal,"done":"true"};
        arrs = arr.push(obj);
        // localStorage.todo = JSON.stringify(arr);
        console.log(arrs);
        // let createLi = document.createElement("li");
        // let createInput = document.createElement("input");
        // let createPa = document.createElement("span");
        // let createClose = document.createElement("span");
        // createInput.setAttribute("type","checkbox");
        // createInput.setAttribute("class", "check");
        // createPa.setAttribute("class", "pa");
        // createClose.setAttribute("class", "close");
        // createClose.innerText = "-";
        // doing.appendChild(createLi);
        // createLi.appendChild(createInput);
        // createLi.appendChild(createPa);
        // createLi.appendChild(createClose);
        // e.target.value = null;
    }
}, false);