function getDivisorsCnt(n){
  let count =0
  for (let i =1 ; i <=n ; i++){
    if ( n % i ===0){
      count ++
    }
  }
  return count
}
// param : number
// return: how many divisors there are so every divisor increase a count by 1
// ex: n =4 divisors are 1,2,4 so count =3
// psuedo; loop through numbers from 1 to n use if statement check if divisible and increase count if it is
