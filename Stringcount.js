function findShort(s){
let spl = s.split(' ').map(word => word.length)
console.log(spl)
console.log(Math.min(...spl))
return Math.min(...spl)
}
// function to count the number of words in a strng.
