document.getElementById('btn3').onclick = function() {
    let timeNow = new Date().toLocaleTimeString('th-TH');
    alert('เวลาปัจจุบัน: ' + timeNow);
};


function showText() {
    let text = document.getElementById('textBox').value;
    document.getElementById('output').innerText = "ข้อความที่ป้อน: " + text;
};