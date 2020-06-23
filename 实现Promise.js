function Promise(fun) {
    let successArr = [], failArr = [];

    this.then = function (callBack) {
        successArr.push(callBack);
        failArr.push(callBack);
        return this;
    }

    function reject(data) {
        failArr.forEach((callback) => {
            callback(data)
        })
    }

    function resolve(data) {
        successArr.forEach((callback) => {
            callback(data)
        })
    }

    fun(resolve, reject)
}


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log(22222)
    },3000)
}).then(()=>{
    console.log(3333)
}).then(()=>{
    console.log(5555)
})