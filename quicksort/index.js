const quicksort = array => {
    const smaller = [] 
    const larger = []

	if (array.length <= 1) {
		return array
    }

    const [pivot] = array
	
	for (let i = 1; i < array.length; i++) { 
		if (array[i] < pivot) {
            smaller.push(array[i])
        }

		if (array[i] >= pivot) {
            larger.push(array[i])
        }
    }
    
	return quicksort(smaller).concat(pivot, quicksort(larger))
}

module.exports = {
    quicksort
}