
// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present
// in the array (true means present).


function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var num = 0;

  for(var i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;

  return num;
}

or return arrrayOfSheep.filter(Boolean).length
