function sumDigits(number) {
let abs = Math.abs(number)
let array = [...abs+''].map(n => +n)
let sum =0
array.forEach(el =>{
sum = sum +el
})
// for (let i = 0 ; i<array.length-1 ; i++){
//  sum= sum + array[i]



// }
return sum


}
// para= number
// can be negative but we want positive
// return the numbers added to each other first digit + second digit
// ex: 10 = 1 +0 =1
// 23 = 2 + 3= 5
// 45 = 4 + 5= 9
// psuedo: first i want to make sure the numbers are absolute
// take first digit  and add it to second digit split them form array
// add the digits in the array together take sum and return it
