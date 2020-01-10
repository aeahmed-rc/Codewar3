function divide(weight){
for (let i = 1 ; i < weight ; i++){
  for( let j = 1; j < weight; j++){
 if(j+i === weight){
    if(j % 2 ===0 && i % 2 ===0){
  return true
  }else{
  return false
   }
 }
}

}
}

// param: numbers 1 to 100
// return: a boolen true or false
// ex: weight=4 can be 1+3 or 2+2
// weight=2 cn be 1+1 so out come of division are not even return false
// psudo: what two numbers added together to make w and are they bpth divisible by two. loop
// loop through numbers from 1 to w and if they add up to w and can be divisible
// by 2 then return true
