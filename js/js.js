// N1 //
let blablabla = 1;
while (blablabla <= 10) {
    console.log(blablabla);
    blablabla++;
}


// N2 //
for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}


// N3 //
for (let i = 7; i <= 70; i+=7) {
    console.log(i)
}


// N4 // 
const arr = [1, 2, 3, 4, 5]
while (arr.length) {
    console.log(arr.shift())
    
}


// N5 //
let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        break;
    }
    console.log(numbers[i]);
}

// N6 //
const n = "10"
for (let i = 0; i <= n; i++) {
    console.log(i)
    if (i >= n) {
        break
    }
}


// N7 //
let f = 10
while (f <= 20) {
    if (f % 3 === 0) {
        f++
        continue
    }
    console.log(f)
    f++
}  







