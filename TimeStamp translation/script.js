let nowTime = document.getElementById("now-time");
let nowTimestamp = document.getElementById("now-timestamp");
let toTime = document.getElementById("to-time");
let toTimestamp = document.getElementById("to-timestamp");
let transform1 = document.getElementById("transform1");
let transform2 = document.getElementById("transform2");
let timeShow = document.getElementById("time-show");
let timestampShow =document.getElementById("timestamp-show");

function addZero(t){
    return t > 9 ? ""+t : "0"+t;
}

setInterval(function(){
    let time_date = new Date();
    let y = time_date.getFullYear();
    let m = addZero(time_date.getMonth());
    let d = addZero(time_date.getDate());
    let h = addZero(time_date.getHours());
    let mi = addZero(time_date.getMinutes());
    let s =addZero(time_date.getSeconds());
    nowTime.innerHTML = y+"-"+m+"-"+d+" , "+h+":"+mi+":"+s;
    nowTime.innerHTML += h>=12 ? " PM" : " AM"; 
    nowTimestamp.innerHTML = Math.floor(new Date().getTime()/1000);
},false);

// 时间戳转换为时间
transform1.addEventListener("click",function(){
    let t = new Date(parseInt(toTime.value)*1000);
    let y = t.getFullYear();
    let m = t.getMonth()+1;
    let d = t.getDate();
    let h = t.getHours();
    let mi =t.getMinutes();
    let s = t.getSeconds();
    timeShow.innerHTML = y+"-"+m+"-"+d+" , "+h+":"+mi+":"+s;
    timeShow.innerHTML += h>=12 ? " PM" : " AM"; 
},false);

// 时间转换为时间戳
transform2.addEventListener("click",function(){
    timestampShow.innerHTML = Math.floor(new Date(toTimestamp.value).getTime()/1000);
},false);
