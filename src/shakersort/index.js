const unsorted = [94, 72, 28, 27, 38, 83];

const shakersort = (A) => {
    let start = -1;
    let end = A.length - 2;
    let swapped;
    do {
        swapped = false;
        start++;
        for (let i = start; i <= end; i++) {
            if (A[i] > A[i + 1]) {
                [A[i], A[i + 1]] = [A[i + 1], A[i]];
                swapped = true;
            }
        }
        if (swapped === false) break;
        swapped = false;
        end--;
        for (let i = end; i >= start; i--) {
            if (A[i] > A[i + 1]) {
                [A[i], A[i + 1]] = [A[i + 1], A[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return A;
};

console.log(shakersort(unsorted));
