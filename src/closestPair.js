export default function closestpair(points) {

let shortestDistance = null
let shortestpoint1 = null
let shortestpoint2 = null

for (let i = 0; i < points.length; i++) {
  let mainPoint = points[i]
  for (let j = i + 1; j < points.length; j++) {
  let comparePoint = points[j]

  let xDistance = Math.abs(mainPoint[0] - comparePoint[0])
  let yDistance = Math.abs(mainPoint[1] - comparePoint[1])

  let currentDistance = Math.sqrt( (xDistance*xDistance) + (yDistance*yDistance) )

    if (shortestDistance === null) {
      shortestDistance = currentDistance
      shortestpoint1 = mainPoint
      shortestpoint2 = comparePoint
    } else if (currentDistance < shortestDistance) {
      shortestDistance = currentDistance
      shortestpoint1 = mainPoint
      shortestpoint2 = comparePoint
    }

  }
}

return [shortestpoint1, shortestpoint2]

}
