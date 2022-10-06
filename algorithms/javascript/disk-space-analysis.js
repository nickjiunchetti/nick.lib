// find the maximum value, of the minimum value for each group

/*
input:
(3, [8, 2, 4, 6, 7, 9])

output:
6
*/

function segment(interval, computersSpace) {
  let winner = 0

  function getMin(arr) {
    let len = arr.length
    let min = Infinity

    while (len--) {
      min = arr[len] < min ? arr[len] : min
    }
    return min
  }

  for (let i = 0; i < computersSpace.length - interval + 1; i++) {
    const group = computersSpace.slice(i, i + interval).sort()

    const min = getMin(group)

    if (min > winner) {
      winner = min
    }
  }

  console.log(winner)
}

segment(3, [8, 2, 4, 6, 7, 9])
