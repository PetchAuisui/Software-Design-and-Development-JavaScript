function calculateAverage() {
    let score1 = parseFloat(document.getElementById("score1").value) || 0;
    let score2 = parseFloat(document.getElementById("score2").value) || 0;
    let score3 = parseFloat(document.getElementById("score3").value) || 0;
    
    let average = (score1 + score2 + score3) / 3;
    document.getElementById("averageResult").innerText = "คะแนนเฉลี่ย: " + average.toFixed(2);
}


function calculateVAT() {
    let productName = document.getElementById("productName").value;
    let productPrice = parseFloat(document.getElementById("productPrice").value) || 0;

    let vat = productPrice * 0.07;
    let totalPrice = productPrice + vat;

    document.getElementById("vatResult").innerText = 
        `สินค้า: ${productName}\nราคาสินค้า: ${productPrice.toFixed(2)} บาท\nVAT 7%: ${vat.toFixed(2)} บาท\nราคารวม: ${totalPrice.toFixed(2)} บาท`;
}
