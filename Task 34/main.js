//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

var arr = ["http://google.com", "https://site.com", "http://example.com"];
var newArr = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i].startsWith("http://")){
        newArr.push(arr[i]);
    }
}

console.log(newArr);