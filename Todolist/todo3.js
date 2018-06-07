// version 1.1.0
// todo2.js的两个问题(FIXME 1 和FIXME 2) 暂不修复
// 添加功能：双击可以修改内容。

// FIXME: 1 注意：这个todo list的显示顺序不一定是输入的顺序
// FIXME: 2 输入的内容不能是相同的。

let add = document.getElementById("add");
let close = document.getElementsByClassName("close");
let doing = document.getElementById("doing");
let done = document.getElementById("done");
let doingNum = document.getElementById("doing-num");
let doneNum = document.getElementById("done-num");
let check = document.getElementsByClassName("check");
let context = document.getElementsByClassName("content");
let index = 100;

// 获取完成和未完成的todo数量。
function getDoingNum(e) {
    var d = doing.querySelectorAll("li").length;
    doingNum.innerHTML = d;
}
function getDoneNum(e) {
    var d = done.querySelectorAll("li").length;
    doneNum.innerHTML = d;
}

// 根据localStorage的值是true还是false，把todolist放到相应的列表中
window.onload = function () {

    for (let i = 0; i < this.localStorage.length; i++) {
        var tf = localStorage.getItem(localStorage.key(i));

        // 如果是未完成(tf==="false")，则加入到正在进行list，否则加入到已经完成list
        if (tf === "false") {
            var createLI = document.createElement("li");
            var createINPUT = document.createElement("input");
            var createSPANcontent = document.createElement("span");
            var createSPANclose = document.createElement("span");

            createINPUT.setAttribute("type", "checkbox");
            createINPUT.setAttribute("class", "checked");
            createINPUT.removeAttribute("checked");
            createSPANcontent.setAttribute("class", "content");
            createSPANclose.setAttribute("class", "close");
            createSPANcontent.innerHTML = this.localStorage.key(i);
            createSPANclose.innerHTML = "-";

            createLI.appendChild(createINPUT);
            createLI.appendChild(createSPANcontent);
            createLI.appendChild(createSPANclose);
            doing.appendChild(createLI);
        } else {
            var createLI = document.createElement("li");
            var createINPUT = document.createElement("input");
            var createSPANcontent = document.createElement("span");
            var createSPANclose = document.createElement("span");

            createINPUT.setAttribute("type", "checkbox");
            createINPUT.setAttribute("class", "checked");
            createINPUT.setAttribute("checked", "true");
            createSPANcontent.setAttribute("class", "content");
            createSPANclose.setAttribute("class", "close");
            createSPANcontent.innerHTML = this.localStorage.key(i);
            createSPANclose.innerHTML = "-";

            createLI.appendChild(createINPUT);
            createLI.appendChild(createSPANcontent);
            createLI.appendChild(createSPANclose);
            done.appendChild(createLI);
        }
    }

    //  完成和未完成的todo互换
    doing.addEventListener("click", function (e) {
        if (e.target.tagName === "INPUT") {
            var t = e.target.nextSibling.innerHTML
            localStorage.setItem(t, "true");
            e.target.setAttribute("checked", "true");
            done.appendChild(e.target.parentElement);
            getDoingNum();
            getDoneNum();
        }
    }, false);
    done.addEventListener("click", function (e) {
        if (e.target.tagName === "INPUT") {
            var t = e.target.nextSibling.innerHTML;
            localStorage.setItem(t, "false");
            e.target.removeAttribute("checked");
            doing.appendChild(e.target.parentElement);
            getDoingNum();
            getDoneNum();
        }
    }, false);

    getDoingNum();
    getDoneNum();

    // 添加todo list
    add.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) {

            // 如果输入的是空值，则什么也不做
            if (this.value === "") return;

            // 添加的todo先放入到localStorage中。
            localStorage.setItem(e.target.value, "false");

            // 先查看localStorage是否有值，如果有则创建元素，直接添加到页面。如果没有则什么也不干。
            if (localStorage.length === 0) return;
            var createLI = document.createElement("li");
            var createINPUT = document.createElement("input");
            var createSPANcontent = document.createElement("span");
            var createSPANclose = document.createElement("span");

            createINPUT.setAttribute("type", "checkbox");
            createINPUT.setAttribute("class", "checked");
            createSPANcontent.setAttribute("class", "content");
            createSPANclose.setAttribute("class", "close");
            createSPANclose.innerHTML = "-";
            createSPANcontent.innerHTML = e.target.value;

            createLI.appendChild(createINPUT);
            createLI.appendChild(createSPANcontent);
            createLI.appendChild(createSPANclose);
            doing.appendChild(createLI);
            this.value = null;

            getDoingNum();
            getDoneNum();

            // 删除选定的todo list
            for (let i = 0; i < close.length; i++) {
                close[i].addEventListener("click", function (e) {
                    localStorage.removeItem(this.previousSibling.innerHTML);
                    this.parentElement.parentElement.removeChild(this.parentElement);       // FIXME: 3 这行代码有问题,新添加的todo，在不刷新页面时，直接删会有console.log()问题,是个warn，但不影响使用。
                    getDoingNum();
                    getDoneNum();
                }, false);
            }
        }

    }, false);

    // 删除选定的todo list
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function (e) {
            localStorage.removeItem(this.previousSibling.innerHTML);
            this.parentElement.parentElement.removeChild(this.parentElement);
            getDoingNum();
            getDoneNum();
        }, false);
    }

    // TODO: 内容可以通过双击更改
    for (let i = 0; i < context.length; i++) {
        context[i].addEventListener("click", function (e) {
            e.target.setAttribute("contentEditable", "true");
            e.target.addEventListener("keypress", function(ev){
                if(ev.keyCode === 13){

                    // 如果是false，则value还设为false，如果是true，则value还设为true。
                    if(localStorage.getItem(e.target.innerHTML) === "false"){
                        localStorage.setItem(e.target.innerHTML, "true");
                    } else {
                        localStorage.setItem(e.target.innerHTML, "false");
                    }
                    console.log(context[i]);

                    e.target.setAttribute("contentEditable", "false");
                }
            }, false);
        }, false);
    }

};