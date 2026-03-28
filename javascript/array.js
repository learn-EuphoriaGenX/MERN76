let nums = [1, 2, 3, 4, 5];
// nums[2] = 90;
// console.log(nums[2]);

// nums.push(19)
// nums.pop()
// nums.unshift(156)
// nums.shift()
// console.log(nums.at(2));
// console.log(Array.isArray(nums));
// console.log(nums[2]);

// console.log(nums.slice(1, 3));
// console.log(nums.slice(1, 4));
// console.log(nums.slice(1, 50));


let arr = [1, 2, 3, 4, 5, 6] // 6,5,4,3,2,1
console.log(arr);

let i = 0;
let j = arr.length - 1;

while (i < j) {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;

}

console.log(arr);


