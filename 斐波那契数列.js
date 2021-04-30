function fb(n) {
    if (n < 2) {
        return 1
    } else {
        return fb(n - 1) + fb(n - 2)
    }
}

console.log(232, fb(2))