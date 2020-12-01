function index(array, n){
let num=0;
let square=-1;
for (let i = 0;i<=array.length;i++){
num++
console.log(num)
if (num === n){
 square=Math.sqrt(array[i])
console.log(square)
}
 return square
}
}
[1,2,3]
//loop through the array everytime it loops increase number so we know how many loops it took
//then
n=2 so at 3 take that number an square it
