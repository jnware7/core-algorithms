function mergeSort (array){
  if(!Array.isArray(array)){
    throw new Error('INVALID INPUT')
  }
  // var array = array.slice()
  if(array.length < 2){
    return array
  }else{
    var mid = Math.floor(array.length/2)
    var L = array.slice(0, mid)
    var R = array.slice(mid, array.length)

  }
  console.log('return L & R',L,R)
  return merge(mergeSort(L),mergeSort(R))
}

function merge(L, R){
  var final = [];
//pointers keep track of iterations
  // var Lpointer = 0;
  // var Rpointer = 0;
  // while(L.length != Lpointer && R.length != Rpointer){
  while(L.length && R.length ){

       if(L[0] > R[0]){
         final.push(R[0])
         R.shift()
          // Rpointer ++
    }else{
      final.push(L[0])
      L.shift()
      // Lpointer ++
    }
  }
  while(R.length){
    final.push(R[0])
    R.shift()
  }
  while(L.length){
    final.push(L[0])
    L.shift()
  }
  return final
}
export default mergeSort
