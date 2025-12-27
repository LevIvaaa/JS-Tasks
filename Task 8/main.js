//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

var num = 23;

var last = num % 10;

var first = num;
while(first >= 10) {
    first = Math.floor(first / 10);
}

var sum = first + last;
console.log("Сумма первой и последней цифры: " + sum);