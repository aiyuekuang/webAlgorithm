function sum(n) {
    if (n > 10) {
        return 0
    }
    return n + sum(n + 1)
}

let total = sum(4)
console.log(total)


let _arr = [90, 17, 86, 34, 239, 54, 232];

function quick(arr) {
    if(arr.length <= 1){
        return arr
    }

    let midIndex = Math.floor(arr.length / 2);
    let midValue = arr.splice(midIndex, 1)[0]

    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quick(left), midValue, ...quick(right)]

}

console.log(quick(_arr))