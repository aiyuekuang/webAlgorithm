function yibu() {
  setTimeout(()=>{
    console.log(1)
  },8)

  new Promise((resolve, reject)=>{
    console.log(2)
    setImmediate(()=>{
      console.log(4)
      resolve(1)
    },9)
  }).then((data)=>{
    console.log(3)
  })
}
yibu();

