// let bold = document.getElementById("bold");
// bold.addEventListener("click", function(){
//     document.execCommand("bold", false, "");
// }, false);

let inp = document.getElementsByTagName("input");
for(let i = 0; i < inp.length; i++){
    inp[i].addEventListener("click", function(){
        document.execCommand(this.id, false, "");
    }, false);
}