//Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

var arr = [1.456, 2.125, 3.32, 4.1, 5.34];
var newArr = arr.map(function(num){
    return Number(num.toFixed(1));
});
console.log(newArr);