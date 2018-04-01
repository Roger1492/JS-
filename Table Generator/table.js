let show = document.getElementById("show");
let btn = document.getElementById("btn");
let span = document.getElementsByTagName("span")[0];
btn.addEventListener("click", function () {
    let row = document.getElementById("row");
    let column = document.getElementById("column");
    let rowval = parseInt(row.value);
    let columnval = parseInt(column.value);

    span.innerText = "生成 " + rowval + " 行 " + columnval + " 列的表格";

    if (rowval <= 2 && columnval <= 2) {
        throw new Error("行数和列数都必须至少大于2");
    } else if (rowval <= String && columnval <= String) {
        throw new Error("行数和列数不允许输入非法字符");
    } else if (rowval === "" || columnval === "") {
        throw new Error("行数和列数都必须输入数字");
    } else {
        let createTable = document.createElement("table");
        show.appendChild(createTable);

        // 生成表格的首行
        let createTr1 = document.createElement("tr");
        for (let i = 0; i < columnval; i++) {
            let createTh = document.createElement("th");
            createTr1.appendChild(createTh);
        }
        createTable.appendChild(createTr1);

        // 生成表格的第二行
        let createTr2 = document.createElement("tr");
        for (let i = 0; i < columnval; i++) {
            let createTd = document.createElement("td");
            createTr2.appendChild(createTd);
        }
        createTable.appendChild(createTr2);

        // 剩余行通过深克隆生成
        for (let i = 0; i < rowval - 2; i++) {
            let createTr3 = createTr2.cloneNode(true);
            createTable.appendChild(createTr3);
        }

        let thtd = document.querySelectorAll("th, td");
        for (let i = 0; i < thtd.length; i++) {
            thtd[i].innerText = i + 1;
        }
    }
}, false);