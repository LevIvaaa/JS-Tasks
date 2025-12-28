//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

var arr = [23, 12, 223, 2, 3, 4];
var sum = 0;

for(var i = 0; i < arr.length; i++) {
    sum += Math.sqrt(arr[i]);
}

console.log(sum)