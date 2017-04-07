export default function setIntersection(array1,array2){
  const newArray2 = []
  for(var i = 0; i < array2.length; i++){
    if(array1.includes(array2[i])){
      newArray2.push(array2[i])
    }
  }
  return newArray2
}
