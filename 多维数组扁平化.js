let arr = [[0],[2,3,4],1,[1,[2,3]]];
let result = Array.from(arr.toString()).filter((data,i)=>{
    return data !== ","
})

console.log(result)

