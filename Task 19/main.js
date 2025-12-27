//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.


//Вариант 1
/*var sum = 0

for(var i = 1; i <=100; i++){
    if(i % 2 === 0){
        sum +=i;
    }
    console.log(sum);
}*/

//Вариант 2
var sum = 0;
for(var i = 2; i <= 100; i+= 2 ){
    sum += i;
}

console.log(sum);