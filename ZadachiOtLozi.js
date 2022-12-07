//Реализовать свой редьюз
function reduce(arr, cb) {
    let acc = 0;
    let count = 0;
    while (count < arr.length) {
        acc = cb(acc, arr[count], count, arr);
        count++;
    }
    return acc;
}

const test = reduce([1, 2, 3, 4], (acc, element) => acc + element);

console.log(test);
