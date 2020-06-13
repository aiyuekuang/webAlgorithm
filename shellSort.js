let _arr = [90, 17, 86, 34, 239,43,656,8978, 54, 458];

function shellSort(arr = _arr) {
    let len = arr.length;
    let o= 2;
    for (let gap = Math.floor(len / o); gap > 0; gap = Math.floor(gap / o)) {
        for (let i = gap; i < len; i++) {
            let current = arr[i]
            let j = i;
            while (j - gap >= 0 && arr[j] < arr[j - gap]) {
                arr[i] = arr[j - gap]
                j = [j - gap]
            }
            arr[j] = current
        }
    }
    return arr;
}

console.log(shellSort())

