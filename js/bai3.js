/*
 * Khối 1: Input
 * tigiaUSD, tienUSD
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính
 * + tienVND = tienUSD * tigiaUSD
 * 
 * Khối 3: Output
 * tienVND
 */

function quydoiVND(){

    var tigiaUSD = document.getElementById("inputUSD").value;
    var tienUSD = document.getElementById("inputTienUSD").value;

    var tienVND = tienUSD * tigiaUSD;

    document.getElementById("Result").innerHTML = "Số tiền là: " +tienVND.toLocaleString() +" VND";
}

document.getElementById("btnCalc").onclick = quydoiVND;