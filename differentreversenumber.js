function digitize(n) {
let str = n.toString()
console.log(str)
let sp = str.split('').reverse()
console.log(sp)
return sp.map( x => parseInt(x))

  //code here
}
