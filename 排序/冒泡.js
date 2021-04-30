let _arr = [90, 17, 86, 34, 239, 54, 232];

function bubble(arr) {
    let temp = null;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


console.log(bubble(_arr))