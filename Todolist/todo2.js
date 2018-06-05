// 注意：这个todo list的现实顺序不一定是输入的顺序

let add = document.getElementById("add");
let close = document.getElementsByClassName("close");
let doing = document.getElementById("doing");
let done = document.getElementById("done");
let doingNum = document.getElementById("doing-num");
let doneNum = document.getElementById("done-num");
let check = document.getElementsByClassName("check");

// 获取完成和未完成的todo数量。
function getDoingNum(e) {
    var d = doing.querySelectorAll("li").length;
    doingNum.innerHTML = d;
}
function getDoneNum(e) {
    var d = done.querySelectorAll("li").length;
    doneNum.innerHTML = d;
}

// FIXME: 输入新的todo后所有的todo都会跑到正在进行中。这个BUG，要修复

// 根据localStorage的值是true还是false，把todolist放到相应的列表中
window.onload = function () {
    for (let i = 0; i < this.localStorage.length; i++) {
        var tf = localStorage.getItem(localStorage.key(i));
        // 如果是未完成是，则加入到正在进行list，否则加入到已经完成list
        if (tf === "false") {
            // console.log(tf);
            var createLI = document.createElement("li");
            var createINPUT = document.createElement("input");
            var createSPANcontent = document.createElement("span");
            var createSPANclose = document.createElement("span");

            createINPUT.setAttribute("type", "checkbox");
            createINPUT.setAttribute("class", "checked");
            createSPANcontent.setAttribute("class", "content");
            createSPANclose.setAttribute("class", "close");
            createSPANcontent.innerHTML = this.localStorage.key(i);
            createSPANclose.innerHTML = "-";

            createLI.appendChild(createINPUT);
            createLI.appendChild(createSPANcontent);
            createLI.appendChild(createSPANclose);
            doing.appendChild(createLI);
        } else {
            // console.log(tf);
            var createLI = document.createElement("li");
            var createINPUT = document.createElement("input");
            var createSPANcontent = document.createElement("span");
            var createSPANclose = document.createElement("span");

            createINPUT.setAttribute("type", "checkbox");
            createINPUT.setAttribute("class", "checked");
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

    // 删除选定的todo list
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function (e) {
            localStorage.removeItem(this.previousSibling.innerHTML);
            this.parentElement.parentElement.removeChild(this.parentElement);
            getDoingNum();
            getDoneNum();
        }, false);
    }

    getDoingNum();
    getDoneNum();

};

// 添加todo list
add.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {

        // 如果输入的是空值，则什么也不做
        if (this.value === "") return;

        // 删除所有的 todolist
        var list = document.querySelectorAll("li");
        for (let i = 0; i < list.length; i++) {
            list[i].parentElement.removeChild(list[i]);
        }

        // 添加的todo先放入到localStorage中。
        localStorage.setItem(e.target.value, "false");

        // 先查看localStorage是否有值，如果有则创建元素，直接添加到页面。如果没有则什么也不干。
        if (localStorage.length === 0) return;
        for (let i = 0; i < localStorage.length; i++) {
            var createLI = document.createElement("li");
            var createINPUT = document.createElement("input");
            var createSPANcontent = document.createElement("span");
            var createSPANclose = document.createElement("span");

            createINPUT.setAttribute("type", "checkbox");
            createINPUT.setAttribute("class", "checked");
            createSPANcontent.setAttribute("class", "content");
            createSPANclose.setAttribute("class", "close");
            createSPANclose.innerHTML = "-";
            createSPANcontent.innerHTML = localStorage.key(i);

            createLI.appendChild(createINPUT);
            createLI.appendChild(createSPANcontent);
            createLI.appendChild(createSPANclose);
            doing.appendChild(createLI);
            this.value = null;
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

        // 删除选定的todo list
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener("click", function (e) {
                localStorage.removeItem(this.previousSibling.innerHTML);
                this.parentElement.parentElement.removeChild(this.parentElement);
                getDoingNum();
                getDoneNum();
            }, false);
        }

        getDoingNum();
        getDoneNum();

    }
}, false);