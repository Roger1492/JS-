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
        let addVal = e.target.value;
        let createLi = document.createElement("li");
        let createInput = document.createElement("input");
        let createPa = document.createElement("span");
        let createClose = document.createElement("span");
        createInput.setAttribute("type","checkbox");
        createInput.setAttribute("class", "check");
        createPa.setAttribute("class", "pa");
        createPa.innerText = addVal;
        createClose.setAttribute("class", "close");
        createClose.innerText = "-";
        doing.appendChild(createLi);
        createLi.appendChild(createInput);
        createLi.appendChild(createPa);
        createLi.appendChild(createClose);
        changeNum();
        e.target.value = null;
    }
}, false);

// 改变正在进行和已经完成的todo的数值
function changeNum(){
    let doingLi = doing.getElementsByTagName("li");
    let doneLi = done.getElementsByTagName("li");
    doingNum.innerText = doingLi.length;
    doneNum.innerText = doneLi.length;
}
        
// 正在进行和已经完成的todo在点击后相互转化,动态添加的事件，使用事件委托的方式实现。
doing.addEventListener("click", function(e){
    if(e.target.tagName === "INPUT"){
        e.target.setAttribute("checked", "true");
        e.target.setAttribute("class", "checked");
        done.appendChild(e.target.parentNode.cloneNode(true));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        changeNum();
    }
}, false);
done.addEventListener("click", function(e){
    if(e.target.tagName === "INPUT"){
        e.target.setAttribute("class", "check");
        doing.appendChild(e.target.parentNode.cloneNode(true));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        changeNum();
    }
}, false);

// 正在进行和已经完成的todo删除,动态添加的事件，使用事件委托的方式实现。
doing.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        changeNum();
    }
}, false);
done.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        changeNum();
    }
}, false);