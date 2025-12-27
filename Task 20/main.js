//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

var sum = 0;

for(var i = 1; i <= 100; i += 2){
    sum += i;
    console.log(sum);
}

/*var sum = 0;
for(var i = 0; i <= 100; i++){
    if(i % 2 !== 0) {
        sum += i;
        console.log(i);
    }
}*/