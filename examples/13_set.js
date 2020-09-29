const set = new Set([1, 2, 3, 3, 3, 4, 5, 5])

set.add(7).add(8).add(8)
// console.log(set)
// console.log(set.has(5))
// console.log(set.size)
// console.log(set.delete(8))
// console.log(set.clear())

// ======================== EXAMPLES

function uniqueValues(arr) {
  return [...new Set(arr)]
  // return Array.from(new Set(arr))
}

console.log(uniqueValues([1,2,2,2,3,4,4,4,4,5]))