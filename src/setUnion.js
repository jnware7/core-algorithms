export default function setUnion(aArray,bArray){
  var newArrayB = []
for(var i = 0; i < bArray.length; i++){
  if(!aArray.includes(bArray[i])){
    newArrayB.push(bArray[i])
  }
}
var cArray = aArray.concat(newArrayB)
return cArray.sort()

}
