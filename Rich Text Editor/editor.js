let setStyle = document.getElementsByClassName("setStyle");
let textStyle = document.getElementsByClassName("textStyle");
let quote = document.getElementById("quote-left");
let link = document.getElementById("link");
let code = document.getElementById("code");
let image = document.getElementById("insertImage");
let audio = document.getElementById("audio");
let video = document.getElementById("video");

for(let i = 0; i < setStyle.length; i++){
    setStyle[i].addEventListener("click", function(e){
        document.execCommand(this.id, false, e.target.value);
    }, false);
}
for(let i = 0; i < textStyle.length; i++){
    textStyle[i].addEventListener("change", function(e){
        document.execCommand(e.target.id, false, e.target.value);
    }, false);
}

// 插入链接
link.addEventListener("click", function(e){
    document.execCommand("createLink", false, prompt());
}, false);

// TODO: 插入代码
// code.addEventListener("click", function(e){}, false);

// 插入图片
image.addEventListener("click", function(e){
    document.execCommand("insertImage", false, prompt());
}, false);

// TODO: 插入引用
// quote.addEventListener("click", function(e){}, false);

// TODO: 插入音频
// audio.addEventListener("click", function(e){}, false);

// TODO: 插入视频
// video.addEventListener("click", function(e){}, false);

// 启用提示框
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })