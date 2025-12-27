//Дано число. Выведите в консоль первую цифру этого числа.

//Вариант 1
var num = "23";
console.log(num[0]);

//Вариант 2
var num = 23;
console.log(num.toString()[0]);

//Правильный вариант 3
var num = 654323;
while(num >= 10) {
    num = Math.floor(num / 10);
}
console.log(num);