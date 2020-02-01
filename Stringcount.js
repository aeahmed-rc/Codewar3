function findShort(s){
let spl = s.split(' ').map(word => word.length)
console.log(spl)
console.log(Math.min(...spl))
return Math.min(...spl)
}
//  returns the number for the shortest word in the string 
