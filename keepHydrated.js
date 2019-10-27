// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//
// You get given the time in hours and
// you need to return the number of litres Nathan will drink,
// rounded to the smallest value.
 // Math.floor will take value and round it down ex:11.5 =11 


function litres(time) {
let liters=time *0.5
let small=Math.floor(liters)
  return small;
}
