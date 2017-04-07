export default function isConnectedGraph(graph) {

  for (let key in graph) {

   for(let prop in graph){
    if(graph[prop].includes(key)) {
      for(let i = 0; i < graph[prop].length; i++) {
        if(!(graph[key].includes(graph[prop][i]))) {
         graph[key].push(graph[prop][i])
        }
        if(!(graph[key].includes(prop))) {
          graph[key].push(prop)
        }
      }
    }
   }
  }

  let allProps = []
  for(let properties in graph) {
    allProps.push(properties)
  }

  for(let i = 0; i < allProps.length; i++) {


  for(let property in graph) {
  if (!(graph[property].includes(allProps[i]))) {
    return false
  }
  }

  }
  return true

}


// const graphA = {
//   'a': ['b', 'c'],
//   'b': ['a', 'd'],
//   'c': ['a', 'd'],
//   'd': ['b', 'c'],
// }
// isConnectedGraph(graphA)
// // => true

// const graphB = {
//   'a': ['b'],
//   'b': ['a'],
//   'c': ['d'],
//   'd': ['c'],
// }
// isConnectedGraph(graphB)
// // => false
