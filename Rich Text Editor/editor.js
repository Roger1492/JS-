let setFontStyle = document.getElementById("setFontStyle").querySelectorAll("button");
let setJustify = document.getElementById("setJustify").querySelectorAll("button");
let lists = document.getElementById("lists").querySelectorAll("button");
let textStyle = document.getElementsByClassName("textStyle");
let quote = document.getElementById("quote").querySelectorAll("button");
let link = document.getElementById("link");
let unlink = document.getElementById("unlink");
let image = document.getElementById("insertImage");

// 设置字体的样式，粗体，斜体，下划线等
for (let i = 0; i < setFontStyle.length; i++) {
    setFontStyle[i].addEventListener("click", function (e) {
        document.execCommand(this.id, false, "");
    }, false);
}

// 设置对齐方式
for(let i = 0; i < setJustify.length; i++){
    setJustify[i].addEventListener("click", function(e){
        document.execCommand(this.id, false, "");
    }, false);
}

// 设置列表和下标
for(let i = 0; i < lists.length; i++){
    lists[i].addEventListener("click", function(e){
        document.execCommand(this.id, false, "");
    }, false);
}

// 设置引用
for(let i = 0; i < quote.length; i++){
    quote[i].addEventListener("click", function(e){
        // document.execCommand(this.id, false, "");
    }, false);
}

// 设置使用哪种字体,背景色，字体颜色，标题大小，字体大小
for(let i = 0; i < textStyle.length; i++){
    textStyle[i].addEventListener("change", function(e){
        document.execCommand(e.target.id, false, e.target.value);
    }, false);
}

// 插入链接
link.addEventListener("click", function(e){
    let url = prompt();
    document.execCommand("createLink", false, url);
}, false);

// 取消链接
unlink.addEventListener("click", function(e){
    document.execCommand("unlink", false, "");
}, false);

// 插入图片
image.addEventListener("click", function(e){
    let img = prompt();
    document.execCommand("insertImage", false, img);
}, false);