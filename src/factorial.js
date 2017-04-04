
export default function factorial(num){
 var newArray = []
  for(var i = 1; i <= num; i++){
    newArray.push(i)

  }

  return newArray.reduce(function(a,b){
    return (a * b)
  },1)
}
 // factorial(5)
