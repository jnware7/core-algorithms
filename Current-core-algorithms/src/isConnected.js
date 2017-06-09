
// export default function(graph){
//   if(!typeof(graph) == Object ){
//     throw new Error('INVALID INPUT')
//   }
//   var visited = [];
//   var vert = Object.keys(graph);
//   var edges = Object.values(graph);
//
//   for(var i = 0; i < vert.length; i++){
//     for(var j = 0; j < 2; j++){
//         // console.log(vert[i])
//       if(!visited.includes(vert[i])){
//         visited.push(vert[i])
//         console.log(visited)
//       }
//     }
//   }
//
//   if( visited.toString() == vert.toString() ){
//     return true
//   }
//   return false
// }
export default function(graph) {
  if(!typeof(graph) == Object ){
     throw new Error('INVALID INPUT')
   }
  let stack = []
  let allNodes = Object.keys(graph)
  let startingNode = allNodes[0]
    let visited = [startingNode]
    stack = stack.concat(graph[startingNode])

  console.log('before stack::', stack)
  while( stack.length > 0 ) {
    console.log('stack::', stack)
    let nodeToVisit = stack.pop()
    console.log('nodeToVisit', nodeToVisit)
    if(!visited.includes(nodeToVisit)) {
      visited.push(nodeToVisit)
      stack = stack.concat(graph[nodeToVisit])
    }
  }
  console.log('visited', visited)
   console.log('allNodes', allNodes)

   if(visited.sort().toString() == allNodes.sort().toString()){
     return true
   }
   return false
}
//
// const graphA = {
//   'a': ['b', 'c'],
//   'b': ['a', 'd'],
//   'c': ['a', 'd'],
//   'd': ['b', 'c'],
// }
// isConnected(graphA)
