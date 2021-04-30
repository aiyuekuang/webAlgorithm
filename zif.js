function findOther(s, t) {
    let sArr = s.split("");
    let tArr = t.split("")
    for (let i = 0; i < tArr.length; i++) {
        for (let t = 0; t < sArr.length; t++) {
            if(sArr[t] === tArr[i]){
                tArr[i] = null
                sArr[t] = null
            }
        }
    }
    return tArr.filter((data,i)=>{
        return data !== null
    }).reduce((pre,next)=>pre+next);
}

console.log(1111,findOther("abcd","abcda"))