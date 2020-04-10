function digitize(n) {
let str = n.toString()
console.log(str)
let sp = str.split('').reverse()
console.log(sp)
return sp.map( x => Number(x))

}
// params: number
// return: the numbers reversed and in an array
// ex: 123 return [3,2,1]
// psudo :get the numbers to be placeed into an array reverse them so that last number is first
// and then return that
