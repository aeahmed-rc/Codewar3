function index(array, n){
let num=1;
let square;
for (let i = 0;i<array.length-1;i++){
num++
if (num === n){
square=Math.sqrt(array[i])
console.log(square)
} else if (n > array.length){
return -1
}


}
}
