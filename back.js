let a = [];
index = 0;
while (index < 5) {
    let number = Math.floor(Math.random() * 5 + 1);
    if (a.length === 0) {
        a.push(number);
        index++;
    } else {
        let st = a.find((value) => {
            return value === number;
        });
        if (!st) {
            index++;
            a.push(number);
        }
    }
}
console.log(a);
