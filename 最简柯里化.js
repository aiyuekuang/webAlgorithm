const curry = fn => {
    const _c = (restNum, argsList) => {
        console.log(1111,restNum)
        return restNum === 0 ?
            fn(...argsList) : x => _c(restNum - 1, [...argsList, x]);
    }

    return _c(fn.length, []);
}

function a(a, b) {
    console.log(a)
    console.log(b)
}

let aa = curry(a)
aa(1)(2)