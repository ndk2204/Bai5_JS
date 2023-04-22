/*
 * Khối 1: Input
 * so1, so2, so3, so4, so5
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính
 * + tinhTB = (so1 + so2 + so3 + so4 + so5)/5
 * 
 * Khối 3: Output
 * tinhTB
 */

function tinhTB(){

    var so1 = document.getElementById("inputSo1").value;
    var so2 = document.getElementById("inputSo2").value;
    var so3 = document.getElementById("inputSo3").value;
    var so4 = document.getElementById("inputSo4").value;
    var so5 = document.getElementById("inputSo5").value;

    var tinhTB = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5))/5;

    document.getElementById("Result").innerHTML = "Giá trị trung bình là: " + tinhTB;
}

document.getElementById("btnCalc").onclick = tinhTB;