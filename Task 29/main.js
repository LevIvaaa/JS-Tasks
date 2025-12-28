//Дано некоторое число: 12345 Переверните его: 54321

var num = 12345;
var reversed = 0;

while(num > 0){
    var digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(reversed)