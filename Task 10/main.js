//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

var num1 = 10;
var num2 = 32;

var nu1 = num1;
var nu2 = num2;

while(nu1 >= 10) {
    nu1 = Math.floor(nu1 / 10);
}

while(nu2 >= 10) {
    nu2 = Math.floor(nu2 / 10);
}

if(nu1 === nu2) {
    console.log("Первые цифры этих чисел совпадают");
} else {
    console.log("Первые цифры этих чисел не совпадают");
}