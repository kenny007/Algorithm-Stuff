// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(boxes) {
  boxes.forEach((element, i) => {
    boxes.forEach((el, j) => {
      console.log(boxes[i], boxes[j]);
    })
  });
}

logAllPairsOfArray(boxes);