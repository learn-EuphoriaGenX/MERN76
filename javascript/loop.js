
// let n = 4
// let line = ""
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         line += "*"
//     }
//     console.log(line);
//     line = ""
// }

// 

let i = 1;
while (i < 10) {
    if (i == 3) {
        i++;
        continue;
    }
    console.log(i);
    if (i == 5) {
        break
    }
    i++;
}



n = 100
do {
    console.log(n);
    n--;
} while (n < 100)