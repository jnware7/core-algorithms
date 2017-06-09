export default  function (array, element){
 var start = 0
 var end = array.length
 var middle =  Math.floor((start + end )/2)
 while(true){
   if(array[ middle ] == element){
     return middle
   }else{
     if(element < array[middle] ){
     end = middle
     }else{
     start = middle
     }
   }
  middle =  Math.floor((start + end )/2)
 }
}

//1 assign start
//2 assign end
//3 assign middle
//4 establish while condition
 //1 if element is middle return it
  //1A if element less than middle reset end
  //1B if element is greater than middle reset start
    // 2 redefine middle in new else scope
