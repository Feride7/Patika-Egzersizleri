name = prompt("Lütfen Adınızı Giriniz...");

let date = new Date()
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var minute = date.getMinutes();
var seconds = date.getSeconds();
var milliSecond = date.getMilliseconds();
var time = ` ${day} / ${month}  / ${year} - ${hour} :${minute} : ${seconds}`

text = document.querySelector(".text").innerHTML = ` 
<h2>KODLUYORUZ</h2><strong>
<strong>Merhaba, ${name}!  Hoşgeldin!<br><br>
${time}
<br><br>
Javascript Bölümünün İlk Ödevi</strong>`