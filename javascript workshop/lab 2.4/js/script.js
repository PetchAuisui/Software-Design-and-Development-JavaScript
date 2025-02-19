function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        document.getElementById("bmiResult").innerText = "BMI ของคุณคือ: " + bmi.toFixed(2);
    } else {
        document.getElementById("bmiResult").innerText = "กรุณากรอกข้อมูลให้ถูกต้อง";
    }
}

function greetUser() {
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let message = "สวัสดี " + name + "! ";
    
    if (age < 12) {
        message += "คุณยังเป็นเด็กน้อยอยู่เลย!";
    } else if (age < 20) {
        message += "คุณเป็นวัยรุ่นไฟแรง!";
    } else {
        message += "คุณเป็นผู้ใหญ่แล้ว ดูแลสุขภาพด้วยนะ!";
    }
    document.getElementById("greeting").innerText = message;
}

function checkPassword() {
    let password = document.getElementById("password").value;
    if (password.length > 8) {
        document.getElementById("passwordResult").innerText = "รหัสผ่านปลอดภัย";
    } else {
        document.getElementById("passwordResult").innerText = "รหัสผ่านต้องมีมากกว่า 8 ตัวอักษร";
    }
}