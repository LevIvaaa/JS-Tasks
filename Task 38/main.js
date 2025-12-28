//Дано некоторое число: 12345 Выведите в консоль все его символы с конца.

var num = 12345;
while(num > 0){
    var digit = num % 10;
    num = Math.floor(num / 10);
    console.log(digit);
}