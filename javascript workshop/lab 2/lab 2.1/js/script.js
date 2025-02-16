let studentID = "67030351";
        let studentName = "ศิวาภัทร อุยสุย";
        let midtermScore = 40;
        let finalScore = 45;
        let totalScore = midtermScore + finalScore;
        let averageScore = (midtermScore + finalScore)/2;

        // ใช้ Object เก็บข้อมูลนักศึกษา
        const student = {
            id: studentID,
            name: studentName,
            major: "เทคโนโลยีคอมพิวเตอร์",
            gpa: 3.75
        };

        // แสดงผลข้อมูลใน HTML
        document.getElementById("studentID").innerText = student.id;
        document.getElementById("studentName").innerText = student.name;
        document.getElementById("midtermScore").innerText = midtermScore;
        document.getElementById("finalScore").innerText = finalScore;
        document.getElementById("major").innerText = student.major;
        document.getElementById("gpa").innerText = student.gpa;
        document.getElementById("totalScore").innerText = totalScore
        document.getElementById("averageScore").innerText = averageScore