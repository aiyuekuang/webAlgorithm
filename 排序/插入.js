let _arr = [90, 17, 86, 34, 239, 54, 232];

function insert(arr) {
    let temp = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        for (let j = temp.length - 1; j >= 0; j--) {
            if (arr[i] > temp[j]) {
                temp.splice(j + 1, 0, arr[i])
                break;
            }
            if (j === 0) {
                temp.unshift(arr[i])
            }
        }
    }
    return temp;
}

console.log(insert(_arr))