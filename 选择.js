let _arr = [90, 17, 86, 34, 239, 54, 232];

function selectionSort(arr = _arr) {
    let len = arr.length;
    let minIndex, temp;

    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}


console.log(selectionSort())