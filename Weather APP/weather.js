let city = document.getElementById("city");
let btn = document.getElementById("btn");
let nowLocate = document.getElementById("now-locate");
let nowDate = document.getElementById("now-date");
let nowTemp = document.getElementById("now-temp");
let dayWeek = document.getElementsByClassName("day-week");
let dayDate = document.getElementsByClassName("day-date");
let dayType = document.getElementsByClassName("day-type");
let dayTemp = document.getElementsByClassName("day-temp");
let imgs = document.getElementsByTagName("img");

// 1 获取Yahoo天气的JSON文件
function getAJAX() {
    let url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + city.value + "%2C%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let datas = JSON.parse(xhr.response);
            nowLocate.innerText = datas.query.results.channel.location.city + ", " + datas.query.results.channel.location.country;
            for (let i = 0; i < 5; i++) {
                let lowtemp = parseInt(datas.query.results.channel.item.forecast[i].low);
                let hightemp = parseInt(datas.query.results.channel.item.forecast[i].high);
                dayWeek[i].innerText = datas.query.results.channel.item.forecast[i].day;
                dayDate[i].innerText = datas.query.results.channel.item.forecast[i].date;
                dayType[i].innerText = datas.query.results.channel.item.forecast[i].text;
                dayTemp[i].innerText = Math.round(toC(lowtemp)) + "℃ ~ " + Math.round(toC(hightemp)) + "℃";
                imgs[i].src = "http://l.yimg.com/a/i/us/we/52/" + datas.query.results.channel.item.forecast[i].code + ".gif";
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

city.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        getAJAX();
    }
}, false);
btn.addEventListener("click", function () {
    getAJAX();
}, false);

// 2 获取今天的日期和星期几
let nowtime = new Date();
let todayMonth = nowtime.getMonth();
let todayDay = nowtime.getDate();
let todayWeek = nowtime.getDay();

// 小于10的数字前面添加0
function addZero(n) {
    return n <= 9 ? "0" + n : "" + n;
}

// 2.1 Sunday - Saturday : 0 - 6
function getWeek() {
    let x;
    switch (todayWeek) {
        case 0:
            x = "星期天";
            break;
        case 1:
            x = "星期一";
            break;
        case 2:
            x = "星期二";
            break;
        case 3:
            x = "星期三";
            break;
        case 4:
            x = "星期四";
            break;
        case 5:
            x = "星期五";
            break;
        case 6:
            x = "星期六";
            break;
        default:
            console.log("wrong week");
    }
    return x;
}
nowDate.innerText = (addZero(todayMonth + 1)) + "月" + addZero(todayDay) + "日 " + getWeek();

// 3 摄氏度和华氏度转换
function toC(n) {
    return (n - 32) / 1.8;
}

function toF(n) {
    return (n * 1.8) + 32;
}