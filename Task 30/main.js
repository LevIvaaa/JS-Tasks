//Дано некоторое число: 12345 Найдите сумму цифр этого числа.

var num = 12345;
var sum = 0;

while(num > 0){
    var digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}

console.log(sum);