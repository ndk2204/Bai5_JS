/*
 * Khối 1: Input
 * chieuDai, chieuRong
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính
 * + chuVi = chieuDai*2 + chieuRong*2
 * + dienTich = chieuDai * chieuRong
 * 
 * Khối 3: Output
 * chuVi, dienTich
 */

function tinhHCN(){

    var chieuDai = document.getElementById("inputDai").value;
    var chieuRong = document.getElementById("inputRong").value;

    var chuVi = chieuDai*2 + chieuRong*2;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("Result").innerHTML = 
    "Chu vi là: " + chuVi + "<br> Diện tích là: " + dienTich;

}

document.getElementById("btnCalc").onclick = tinhHCN;