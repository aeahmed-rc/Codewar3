The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let cD=Date.parse(currentDate)
  let eD=Date.parse(expirationDate)
  if(enteredCode===correctCode && cD<=eD){
  return true
  }else{
  return false
  }
}
