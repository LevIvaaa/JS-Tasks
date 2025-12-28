//Дано некоторое число: 12345 Получите массив цифр этого числа.

var num = 12345;
var arr = [];
while(num > 0){
    var sum = num % 10;

    arr.push(sum);

    num = Math.floor(num / 10);
}

arr.reverse();

console.log(arr);