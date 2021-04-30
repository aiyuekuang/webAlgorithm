let _arr = [90, 17, 86, 34, 239, 54, 232];

function selectionSort(arr = _arr) {
    let temp = null
    for (let i =0;i<arr.length;i++){
        for (let j = i;j<arr.length;j++){
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


console.log(selectionSort())