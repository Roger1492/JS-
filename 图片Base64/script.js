let baseEncode = {
    "0": "A",
    "1": "B",
    "2": "C",
    "3": "D",
    "4": "E",
    "5": "F",
    "6": "G",
    "7": "H",
    "8": "I",
    "9": "J",
    "10": "K",
    "11": "L",
    "12": "M",
    "13": "N",
    "14": "O",
    "15": "P",
    "16": "Q",
    "17": "R",
    "18": "S",
    "19": "T",
    "20": "U",
    "21": "V",
    "22": "W",
    "23": "X",
    "24": "Y",
    "25": "Z",
    "26": "a",
    "27": "b",
    "28": "c",
    "29": "d",
    "30": "e",
    "31": "f",
    "32": "g",
    "33": "h",
    "34": "i",
    "35": "j",
    "36": "k",
    "37": "l",
    "38": "m",
    "39": "n",
    "40": "o",
    "41": "p",
    "42": "q",
    "43": "r",
    "44": "s",
    "45": "y",
    "46": "u",
    "47": "v",
    "48": "w",
    "49": "x",
    "50": "y",
    "51": "z",
    "52": "0",
    "53": "1",
    "54": "2",
    "55": "3",
    "56": "4",
    "57": "5",
    "58": "6",
    "59": "7",
    "60": "8",
    "61": "9",
    "62": "+",
    "63": "/",
};
let baseDecode = {
    "A":"0",
    "B":"1",
    "C":"2",
    "D":"3",
    "E":"4",
    "F":"5",
    "G":"6",
    "H":"7",
    "I":"8",
    "J":"9",
    "K":"10",
    "L":"11",
    "M":"12",
    "N":"13",
    "O":"14",
    "P":"15",
    "Q":"16",
    "R":"17",
    "S":"18",
    "T":"19",
    "U":"20",
    "V":"21",
    "W":"22",
    "X":"23",
    "Y":"24",
    "Z":"25",
    "a":"26",
    "b":"27",
    "c":"28",
    "d":"29",
    "e":"30",
    "f":"31",
    "g":"32",
    "h":"33",
    "i":"34",
    "j":"35",
    "k":"36",
    "l":"37",
    "m":"38",
    "n":"39",
    "o":"40",
    "p":"41",
    "q":"42",
    "r":"43",
    "s":"44",
    "y":"45",
    "u":"46",
    "v":"47",
    "w":"48",
    "x":"49",
    "y":"50",
    "z":"51",
    "0":"52",
    "1":"53",
    "2":"54",
    "3":"55",
    "4":"56",
    "5":"57",
    "6":"58",
    "7":"59",
    "8":"60",
    "9":"61",
    "+":"62",
    "/":"63",
}

// base64 编码
function encode64(str) {
    let arr = [];
    let result = "";
    let bin = "";
    // 获取字符串的二进制放到arr数组中
    for (let i = 0; i < str.length; i++) {
        // let stri = str[i];    // 字符
        // let asciiOct = str[i].charCodeAt(0);  // ASCII码十进制值
        let binary = str[i].charCodeAt(0).toString(2); // 二进制值
        if (binary.length == 7) {binary = "0" + binary}
        if (binary.length == 6) {binary = "00" + binary}
        if (binary.length == 5) {binary = "000" + binary}
        if (binary.length == 4) {binary = "0000" + binary}
        if (binary.length == 3) {binary = "00000" + binary}
        if (binary.length == 2) {binary = "000000" + binary}
        if (binary.length == 1) {binary = "0000000" + binary}
        arr.push(binary)
    }
    // 合并二进制
    for (let i = 0; i < arr.length; i++) {
        bin += arr[i];
    }
    if (bin.length % 6 === 0) {
        // 再转换为十进制
        // 如果可以被整除，直接获取结果；若不能整除，加0后再除。
        for (let i = 0; i < bin.length; i += 6) {
            let binToOct = parseInt(bin.substr(i, 6), 2);
            result += baseEncode[binToOct];
        }
    } else {
        let a = bin+"0".repeat(bin.length%6*8);
        let b = [];
        for(let i = 0; i < a.length; i+=6){
            b.push(a.substring(i, i+6));
        }
        console.log(b);
        // for(let i = 0; i < b.length; i++){
        //     if(b[i] === "000000"){
        //         // console.log(b[i].replace("000000","="));
        //     }
        //     console.log(b[i]);
        // }
        
        // for (let i = 0; i < a.length; i += 6) {
        //     let binToOct = parseInt(a.substr(i, 6), 2);
        //     result += baseEncode[binToOct];
        // }
        //  把连续的6的0转换为“=”
        // console.log(a.length % 6);
    }
    console.log(result);
}
encode64("Hello!!");

// base64 解码
function decode64(str){
    
}
