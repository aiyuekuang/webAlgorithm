function main(str) {
    let result = 1;
    let strs = ""
    let len = str.length
    for (let i = 0; i < len; i++) {
        let spacStr = str.charAt(i)
        let index = strs.indexOf(spacStr)
        if (index === -1) {
            strs += spacStr
            result = result < strs.length ? strs.length : result
        } else {
            strs = strs.substr(index+1)+spacStr
        }
    }
    console.log(strs)
    return result
}

console.log(main("bbbwewe"))