const unsorted = [94, 72, 28, 27, 38, 83];

const oddEvenSort = (A) => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < A.length - 1; i += 2) {
            if (A[i] > A[i + 1]) {
                [A[i], A[i + 1]] = [A[i + 1], A[i]];
                sorted = false;
            }
        }
        for (let i = 0; i < A.length - 1; i += 2) {
            if (A[i] > A[i + 1]) {
                [A[i], A[i + 1]] = [A[i + 1], A[i]];
                sorted = false;
            }
        }
    }
    return A;
};

console.log(oddEvenSort(unsorted));
