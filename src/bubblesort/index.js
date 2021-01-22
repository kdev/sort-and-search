const unsorted = [94, 72, 28, 27, 38, 83];

const bubblesort = (A) => {
    for (let n = A.length; n > 1; --n) {
        for (let i = 0; i < n - 1; ++i) {
            if (A[i] > A[i + 1]) [A[i], A[i + 1]] = [A[i + 1], A[i]];
        }
    }
    return A;
};

console.log(bubblesort(unsorted));
