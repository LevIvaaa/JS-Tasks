//Заполните массив случайными числами из промежутка от 1 до 100.

var arr = [];
for(var i = 1; i <= 100; i++){
    var random = Math.floor(Math.random() * 100) + 1;
    arr.push(random);
}
console.log(arr);