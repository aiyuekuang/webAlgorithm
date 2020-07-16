function fb(n) {
    if (n < 2) {
        return 1
    }
    return fb(n - 1) + fb(n - 2)
}

console.log(2323,fb(4))