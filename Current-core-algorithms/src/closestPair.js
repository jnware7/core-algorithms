

export default function(points) {
  if(!Array.isArray(points)){
    throw new Error('INVALID INPUT')
  }
    var point1 = null;
    var point2 = null;
    var distance = null;

    //we will loop through all of the points
    for (var i = 0; i < points.length; i++) {
        //compare this point with all of the points ahead of it in the array
        for (var j = i + 1; j < points.length; j++) {
            //compute distance using distance formula
            var currentDistance = Math.sqrt(Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2));

            //compare this with our shortest distance
            //or set it if it's the first time we run
            if (distance === null || currentDistance < distance) {
                distance = currentDistance;
                point1 = points[i];
                point2 = points[j];
            }
        }
    }

    //point1 and point2 hold the closest points
    //distance is the distance between the two points
    return {
        "point1": point1,
        "point2": point2,
        "distance": distance
    };
};
