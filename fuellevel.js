const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft) >= distanceToPump ? true :false
};
// params: distance=number, mpg=how many miles for each gallon,how muh fuel left
// return true if enough fuel to get yo to pump
// ex: 50,25,2 = true, fuelLeft=2, mpg=25 2*25=>dist return true
// psuedo: if mpg *fuellef are higher then the ditanc thn we good 
