// map
// filter
// reduce

let nums = [1, 2, 3, 4, 5] // 2,4,9,16, 25
function squre(n) {
    return n * n
}
nums = nums.map(squre)
console.log(nums);


let arr = [12, 345, 23, 67, 56, 78, 80, -9,]
function g50(n) {
    return n > 50
}
let variable = arr.filter(g50)
console.log(variable);

let a = [1, 2, 3, 4, 5, 6]
function sum(a, b) {
    return a + b
}
let ans = a.reduce(sum, 100)
console.log(ans);



