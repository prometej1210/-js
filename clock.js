function Time(){

var pm = "";//Переменная до полудня и после
var h, m, s = "";//Добавление нулей перед часами, минутами, секундами
var c = ":";//Переменная точек

var date= new Date();
var hours = date.getHours();//Получаю часы
var min = date.getMinutes();//получаю минуты
var sec = date.getSeconds();//получаю секунды

//Условие замены pm на am
if (hours <= 12)pm = "AM ";
else {pm = "PM "; hours -= 12;}

//Условия добавление нулей пред числом, если меньше 10
if (hours < 10) h = "0"; else h = "";
if (min < 10) m = "0"; else m = "";
if (sec < 10) s= "0"; else s = "";

//Условие мигания точек
if (sec%2 == 0)c = " ";
else c = ":";

//Результат в DOM выношу
    document.getElementById("pm").innerHTML = pm;
    document.getElementById("hours").innerHTML = h + hours;
    document.getElementById("point").innerHTML = c;
    document.getElementById("minutes").innerHTML = m + min;
    document.getElementById("point2").innerHTML = c;
    document.getElementById("seconds").innerHTML = s + sec;
    setTimeout ("Time()",1000);//Обновление каждую секунду

}
