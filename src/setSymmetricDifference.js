
export default function setSymmetricDifference(array1,array2){
  var newArray=[]
  var array3 = array1.concat(array2).sort();
  
  for(var i = 0; i < array3.length; i++){
     if(array3[i] == array3[i+1]){
     i+=2

    }
      ( newArray.push(array3[i]))
  }
   return newArray
}



// setSymmetricDifference(array1,array2)
