function Book(value = 100) {
    this.title = "小红帽"
    this.price = value
    this.print = function () {
        return this.title
    }
    this.getPrice = function () {
        return this.price
    }
}

let a = new Book();
console.log(a.print())

function myNew(fun) {

    let obj = {
        __proto__: fun.prototype
    };

    //获取构造函数
    fun.apply(obj,[].slice.call(arguments,1))
    return obj
}

let b = myNew(Book, 300,566)

console.log(111,b)
console.log(222,b.getPrice())
