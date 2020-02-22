// Given the sum and gcd of two numbers, return those two numbers in ascending order.
// If the numbers do not exist, return -1, (or return NULL in C).
// GCD sum



function solve(s,g){
let num=s-g
let arr = [g]
if(num + g === s && num % g === 0 && s % g === 0){
arr.push(num)
return arr
} else{
return -1
}
