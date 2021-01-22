// const unsorted = [94, 72, 28, 27, 38, 83];
const b = [5, 90, 3, 9, 7, 2, 1];

const mergesort = (array) => {
    if (array.length <= 1) {
        return array;
    } else if (array.length === 2) {
        return array[0] < array[1]
            ? [array[0], array[1]]
            : [array[1], array[0]];
    } else {
        let l = [];
        let r = [];
        const leftLength =
            array.length % 2 !== 0
                ? Math.floor(array.length / 2)
                : array.length / 2;
        console.log(array);
        l = mergesort(array.slice(0, leftLength));
        r = mergesort(array.slice(leftLength, array.length));
        return merge(l, r);
    }
};

const merge = (l, r) => {
    let array = [];
    while (l[0] && r[0]) {
        if (l[0] <= r[0]) array.push(l[0]) && l.shift();
        else array.push(r[0]) && r.shift();
    }
    while (l[0]) array.push(l[0]) && l.shift();
    while (r[0]) array.push(r[0]) && r.shift();
    return array;
};

console.log(mergesort(b));
