//Заполните массив четными числами из промежутка от 1 до 100.

var arr = [];
for(var i = 2; i <= 100; i += 2) {
    arr.push(i);
}

console.log(arr);