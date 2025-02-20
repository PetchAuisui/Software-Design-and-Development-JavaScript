const calculateBMI = () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // แปลงเป็นเมตร
    
    if (!weight || !height || height <= 0) {
        document.getElementById("result").innerText = "กรุณากรอกข้อมูลให้ถูกต้อง";
        return;
    }
    
    const bmi = weight / (height * height);
    let status = "";
    
    if (bmi < 18.5) {
        status = "ผอม";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "สมส่วน";
    } else {
        status = "อ้วน";
    }
    
    document.getElementById("result").innerText = `ค่า BMI: ${bmi.toFixed(2)} - คุณ${status}`;
}