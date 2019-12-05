const selectionSort = array => {
    let len = array.length

    for (let i = 0; i < len; i++) {
        let min = i

        for (let j = i + 1; j < len; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }

        if (min !== i) {
            let tmp = array[i];

            array[i] = array[min];
            array[min] = tmp;
        }
    }

    return array;
}

module.exports = {
    selectionSort
}