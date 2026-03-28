let num = 30;
if (num > 500) {
    if (num > 750) {
        console.log("Number is gt 500 & 750");
    } else {
        console.log("Number is only gt 500");
    }
} else if (num > 100) {
    if (num > 250) {
        console.log("Number is gt 100 & 250");
    } else {
        console.log("Number is only gt 100");
    }
} else {
    console.log("number is lt 100");
}

// number is lt 100
// number gt 100
// error
// undefined


let lic = true
let ins = false
let hel = true

let fine = 0;

if (lic == false) fine += 500
if (ins == false) fine += 500
if (hel == false) fine += 500


console.log("Your fine is ", fine);

