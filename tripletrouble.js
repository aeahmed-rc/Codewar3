function tripledouble(num1, num2) {

  let arr = num1.toString().split('')
  console.log(arr)
  let arrTwo = num2.toString().split('')
  console.log(arrTwo)
  if (arr === arrTwo) {
    console.log('0')
    return 0
  } else if (arr !== arrTwo) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1] && arr[i + 1] == arr[i + 2]) {
        for (let j = 0; j < arrTwo.length; j++) {
          if (arr[i] == arrTwo[j] && arrTwo[j] == arrTwo[j + 1]) {
            console.log('1')
            return 1
          }
        }
      }
  }




  }


  console.log('0')
  return 0;

}
