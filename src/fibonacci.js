export default function fibonacci(nthPosition){
  var newArray = [0,1]
  for(var i = 0; i < nthPosition - 2 ; i++){
    newArray.push(newArray[i] + newArray[ i + 1 ])
  }
  return newArray
}

// fibonacci(10)
// => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
