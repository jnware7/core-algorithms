export default function bubbleSort(array){
  var counter = array.length
  while(counter > 1) {

    for(var i = 1; i < counter; i++){
      if(array[ i -1 ] >= array[ i ]){
        var first = array[i-1]
         array[i-1] = array[i]
        array[i]= first
      }
    }
     counter--
  }
  return array

}
