function checkEvenOdd() {
    let num = document.getElementById("numberInput").value;
    let result = (num % 2 === 0) ? "เลขคู่" : "เลขคี่";
    document.getElementById("result1").innerText = `ผลลัพธ์: ${result}`;
}

function multiplicationTable() {
    let result2 = "<b>แม่ 2</b><br>";
    for (let i = 1; i <= 12; i++) {
        result2 += `2 x ${i} = ${2 * i}<br>`;
    }
    document.getElementById("result2").innerHTML = result2;
    
    let result3 = "<b>แม่ 3</b><br>";
    let j = 1;
    while (j <= 12) {
        result3 += `3 x ${j} = ${3 * j}<br>`;
        j++;
    }
    document.getElementById("result3").innerHTML = result3;
}

function countdown() {
    let result = "";
    for (let i = 10; i >= 1; i--) {
        result += i + " ";
    }
    document.getElementById("result4").innerText = result;
}

function checkAge() {
    let age = document.getElementById("ageInput").value;
    let stage = "";
    if (age >= 0 && age <= 12) {
        stage = "วัยเด็ก";
    } else if (age >= 13 && age <= 19) {
        stage = "วัยรุ่น";
    } else if (age >= 20) {
        stage = "วัยผู้ใหญ่";
    } else {
        stage = "กรุณาป้อนอายุที่ถูกต้อง";
    }
    document.getElementById("result5").innerText = `ช่วงวัย: ${stage}`;
}