console.time("Count to 1 Billion");

let count = 0;
for (let i = 0; i < 1000000000; i++) {
    count++;
}

console.timeEnd("Count to 1 Billion");
