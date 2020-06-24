
function chuanzhi(obj) {
    obj.name = "aaa"
    obj = new Object();
    obj.name = "bbb"
    return obj;
}

let zz = new Object();
chuanzhi(zz)
console.log(111,zz.name)