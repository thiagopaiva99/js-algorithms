const binarySearch = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = low + high
    let guess = list[mid]

    if (guess === item)
      return mid

    guess > item
        ? high = mid - 1
        : low = mid + 1
  }

  return null
}