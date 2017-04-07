export default function collatzConjecture(num){
  var newArray = []
  if(num === 1){
    return newArray.push(1)
  } else if(num){
    newArray.push(num)
  }
  while(num !== 1){
    if(num % 2 === 0){
      num = num/2
      newArray.push(num)
    }else if (num % 2 !== 0){
      num = ((3 * num) + 1)
      newArray.push(num)
    }
  }
  return newArray
}
// collatzConjecture(7)
// => [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
