const unsorted = [94, 72, 28, 27, 38, 83];

const selectionsort = (A) => {
    let max = A.length - 1;
    let nextValue = A[max];
    for (let i = max - 1; i >= 0; i--) {
        if (A[i] > nextValue) {
            nextValue = A[i];
        }
    }
    while (max > 0 && A[max] === nextValue) max--;

    while (max > 0) {
        let value = nextValue;
        nextValue = A[max];
        for (let i = max - 1; i >= 0; i--) {
            if (A[i] === value) {
                [A[i], A[max]] = [A[max], A[i]];
                max--;
            } else if (A[i] > nextValue) {
                nextValue = A[i];
            }
        }
        while (max > 0 && A[max] === nextValue) max--;
    }
    return A;
};

console.log(selectionsort(unsorted));
