//Дано число. Выведите количество цифр в этом числе.

var num = 100;

var counter = 0;

var temp = num;

while(temp > 0) {
    temp = Math.floor(temp / 10);
    counter++;
}

console.log("Количество чисел: " + counter);