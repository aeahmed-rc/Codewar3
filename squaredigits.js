function squareDigits(num){
console.log(num)
let number= num.toString().split('')
let arr = number.map(x => x*x).join('')
return Number(arr)
  //may the code be with you

}
