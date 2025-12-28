//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

var arr = ["index.html", "martin.css", "abcde.html"];
var newArr = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i].endsWith(".html")){
        newArr.push(arr[i])
    }
}
console.log(newArr);