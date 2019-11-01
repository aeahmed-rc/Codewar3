
// Find the Integral
function integrate(coefficient, exponent) {
  let ex=exponent+1
  let coeff=coefficient/ex
let int= `${coeff}x^${ex}`
  return int.toString()
}
