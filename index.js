function giaiPT() {
    var a = parseInt(document.getElementById('soA').value);
    var b = parseInt(document.getElementById('soB').value);
    var c = parseInt(document.getElementById('soC').value);
    var delta;
    delta = b * b - 4 * a * c;
    var x1, x2, x;
    var text;
    if (delta < 0) {
        text = 'Phuong trinh vo nghiem';
    } else {
        if (delta == 0) {
            x = -b / (2 * a);
            text = 'PT co mot nghiem =' + x;
        } else {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            text =
                'Phuong trinh co hai nghiem x1 = ' +
                x1.toFixed(2) +
                ' va ' +
                'x2 = ' +
                x2.toFixed(2);
        }
    }
    document.getElementById('ketQua1').value = text;
}
function soNT() {
    var n = parseInt(document.getElementById('soN').value);
    var dem = 0, text2;
    var i = 1;
    if (n > 1) {
        for (i = 1; i <= n; i++) {
            if (n % i == 0) {
                dem++;
            }
        }
        if (dem == 2) {
            text2 = 'So ' + n + ' la so nguyen to';
        } else {
            text2 = 'So ' + n + ' khong phai la so nguyen to';
        }
    } else {
        text2 = 'So ' + n + ' khong phai la so nguyen to ( n > 1)';
    }
    document.getElementById('ketQua2').value = text2;
}