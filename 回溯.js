let combinationSum2 = function (candidates, target) {

    let item = [], path = [];
    candidates = candidates.sort(function (a, b) {
        return a - b
    })
    GG(candidates, target, target, item, path, 0)
    return item

    function GG(candidates, target, remain, item, path, start) {
        if (remain < 0)
            return;
        if (remain === 0) {
            path = path.slice()
            item.push(path);
        } else {
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1])
                    continue;
                path.push(candidates[i])
                GG(candidates, target, remain - candidates[i], item, path, i + 1)
                path.pop()
            }
        }
    }
};

console.log(combinationSum2([1, 2, 3, 4, 5, 6], 10))