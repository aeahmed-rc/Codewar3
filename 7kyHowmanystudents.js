// T.T.T.26: How many students have finished all the homework



function howMany(students,finished,unfinish){
let arr=finished
// arr.push(finished)
console.log(arr)
let one=students-unfinish

let two= one-arr[0]
let three=arr[1]-two
// return three

if(three>=0){
return three
}else {
return -1
}


}
