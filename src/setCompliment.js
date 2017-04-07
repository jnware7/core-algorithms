export default function setCompliment(arraya,arrayb){
  var newArrayB = []
  for(var i = 0; i < arrayb.length; i++){
    if(!arraya.includes(arrayb[i])){
      newArrayB.push(arrayb[i])
    }
  }
  return newArrayB
}
