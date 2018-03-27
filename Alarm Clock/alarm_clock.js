let currentTime = document.getElementById("currentTime");
let setTime = document.getElementById("setTime");
let setHour = document.getElementById("setHour");
let setMinute = document.getElementById("setMinute");
let setbtn = document.getElementById("setbtn");

// 实时显示当前时间
setInterval(function () {
    currentTime.innerHTML = new Date();
}, false);

// 设置闹铃
setbtn.addEventListener("click", function () {
    // console.log("当前时间的小时："+today_hour + " - 分钟：" + today_minute);
    // console.log("设定时间的小时："+setHour.value +  " - 分钟：" + setMinute.value);
    // console.log(typeof today_hour);
    // console.log(typeof today_minute);
    // console.log(typeof setHour.value);
    // console.log(typeof  setMinute.value);

    //  当前时间的小时和分钟与设定的时间的小时和分钟都相等时，闹铃响起。
    setInterval(function () {
        setTime.innerHTML = setHour.value + ":" + setMinute.value;
        let todayTime = new Date();
        let today_hour = todayTime.getHours();
        let today_minute = todayTime.getMinutes();
        if (today_hour === parseInt(setHour.value) && today_minute === parseInt(setMinute.value)) {
            console.log("响起");
        }
    }, 1000)

}, false);