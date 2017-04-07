
export default function binarySearch(array, number) {

let start = 0
let end = array.length

  while (true) {
    //let middle = Math.floor((start+end) / 2)
      if (array[Math.floor((start + end) / 2)] === number) {
        return Math.floor((start + end) / 2)
      } else {

        if (array[Math.floor((start + end) / 2)] > number) {
          start = 0
          end = Math.floor((start + end) / 2)
        } else {
          start = Math.floor((start + end) / 2)
        }

      }
  }

}


// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// binarySearch(numbers, 45)
// // => 8
