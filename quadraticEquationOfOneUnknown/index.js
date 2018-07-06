let btn = document.getElementsByTagName("button")[0];
let result1 = document.getElementsByClassName("result1")[0];
let result2 = document.getElementsByClassName("result2")[0];
let r = document.getElementsByClassName("r")[0];
let variable = document.getElementsByClassName("variable");

for(let i = 0; i < variable.length; i++){
    variable[i].addEventListener("focus", function(e){
        this.innerHTML = "";
        // console.log(this);
    }, false);
}

btn.addEventListener("click", function (e) {
    let a = parseInt(document.getElementsByClassName("variable")[0].innerHTML);
    let b = parseInt(document.getElementsByClassName("variable")[1].innerHTML);
    let c = parseInt(document.getElementsByClassName("variable")[2].innerHTML);

    let delta = b * b - 4 * a * c;
    let sdelta = Math.sqrt(delta);
    if (delta < 0) {
        r.innerHTML = "delta 小于0， 此方程无解";
    } else if (delta = 0) {
        r.innerHTML = "delta 等于0， 此方程有两个相等的解";
        let r1 = (-b - Math.sqrt(delta)) / 2 * a;
        result1.innerHTML = r1;
    } else {
        r.innerHTML = "delta 大于0， 此方程有两个不相等的解";
        let r1 = ((-b) + sdelta) / (2 * a);
        let r2 = ((-b) - sdelta) / (2 * a);
        result1.innerHTML = r1;
        result2.innerHTML = r2;
    }
}, false);