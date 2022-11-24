let userName = prompt("İsminizi Giriniz");

document.getElementById("prompt").innerHTML = userName;

const date1 = new Date();
document.getElementById("date").innerHTML = date1.toDateString("tr-TR");
