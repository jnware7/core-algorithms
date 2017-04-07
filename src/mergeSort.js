// [10, 2, 7, 5]
// [ [10], [2], [7], [5] ]
// [ [2, 10], [5, 7] ]
// [ [2, 5, 7, 10 ] ]
// [2, 5, 7, 10 ]



export default function mergeSort(array){
  var array = array.slice()
  if(array.length < 2){
    return array.slice()
  }

  var mid = Math.floor(array.length/2 )
  var left = array.slice(0,mid)
  var right = array.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}



function merge(left,right){
    var result = []

    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
    }
  }
 return result.concat(left.slice()).concat(right.slice())

}
