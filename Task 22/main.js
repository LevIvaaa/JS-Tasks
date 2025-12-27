//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

var stroka = "stroka";

for(var i = stroka.length - 1; i >= 0; i--){
    console.log(stroka[i]);
}