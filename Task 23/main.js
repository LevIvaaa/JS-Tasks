//Дан массив с числами. Найдите сумму квадратов элементов этого массива.

var arr = [1, 2, 3, 4, 5, 6, 12];
var sum = 0;

for(var i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
}

console.log(sum);