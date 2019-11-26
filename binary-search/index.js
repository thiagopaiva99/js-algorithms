const binarySearch = (list, item) => {
  let low = 0
  let mid
  let guess
  let high = list.length - 1

  while (low <= high) {
    mid = (low + high)

    guess = list[mid]

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}