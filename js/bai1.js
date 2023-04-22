/*
 * Khối 1: Input
 * luongNgay, soNgay
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính
 * + tongLuong = luongNgay * soNgay
 * 
 * Khối 3: Output
 * tongLuong
 */

function tinhLuong(){

    var luongNgay = document.getElementById("inputLuong").value;
    var soNgay = document.getElementById("inputSoNgay").value;

    var tongLuong = luongNgay * soNgay;

    document.getElementById("Result").innerHTML = "Tiền lương là: " +tongLuong.toLocaleString();
}

document.getElementById("btnCalc").onclick = tinhLuong;