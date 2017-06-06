
export default  function(array){
    var size = array.length;
  while(size > 1){
    for(var i = 1; i < size; i++){
      if(array[i-1] >= array[i]){
       var start = array[i-1]
       array[i-1]= array[i]
       array[i] = start
      }
    }
    size --
  }
 return array
 }


 // var array = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
 // bubbleSort(array)
