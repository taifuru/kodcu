function updateClock() {
    var now = new Date();
    
    var saat = now.getHours();
    var dakika = now.getMinutes();
    var saniye = now.getSeconds();
    
    var gun = now.getDate();
    var ay = now.getMonth() + 1;
    var yil = now.getFullYear();

    document.getElementById('saat').innerHTML = saat + ':' + dakika + ':' + saniye;
    document.getElementById('tarih').innerHTML = gun + '/' + ay + '/' + yil;
}
setInterval(updateClock, 1000);
updateClock();