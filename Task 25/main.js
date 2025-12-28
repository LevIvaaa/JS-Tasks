//Дан массив с числами. Найдите сумму положительных элементов этого массива.

var arr = [12, -123, -32, 2, 5, -12];
var sum = 0;

for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum += arr[i];
    }
}

console.log(sum)