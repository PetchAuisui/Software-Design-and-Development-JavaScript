const calculateBMI = () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // แปลงส่วนสูงจากเซนติเมตรเป็นเมตร
    const bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = `BMI ของคุณคือ: ${bmi.toFixed(2)}`;
}
  
const greetPerson = () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    let greeting = '';
  
    if (age < 18) {
      greeting = `สวัสดีคุณ ${name}! คุณยังเด็กอยู่ครับ/ค่ะ`;
    } else if (age >= 18 && age < 60) {
      greeting = `สวัสดีคุณ ${name}! ยินดีที่ได้รู้จักครับ/ค่ะ`;
    } else {
      greeting = `สวัสดีคุณ ${name}! อายุเยอะแล้ว ขอให้สุขภาพดีนะครับ/ค่ะ`;
    }
  
    document.getElementById('greetingMessage').innerText = greeting;
  }
  
const checkPassword = () => {
    const password = document.getElementById('password').value;
    const message = password.length > 8 ? "รหัสผ่านปลอดภัย" : "รหัสผ่านต้องมีความยาวมากกว่า 8 ตัวอักษร";
    document.getElementById('passwordMessage').innerText = message;
  }
  