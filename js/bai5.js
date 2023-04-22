/*
 * Khối 1: Input
 * soNhap
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính
 * 
 * Tách số thứ 1: soThu1 = soNhap/10
 * Tách số thứ 2: soThu2 = soNhap%10
 * + tongKySo = soThu1 + soThu2
 * 
 * Khối 3: Output
 * tongKySo
 */

function tinhKySo(){

    var soNhap = document.getElementById("inputSo").value;

    var soThu1 = Math.floor(soNhap/10);
    var soThu2 = soNhap%10;

    var tongKySo = soThu1 + soThu2;
    
    // var tongKySo = Number(soThu1) + Number(soThu2);

    document.getElementById("Result").innerHTML = "Tổng ký số là: " + tongKySo;

}

document.getElementById("btnCalc").onclick = tinhKySo;