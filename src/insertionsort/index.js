const unsorted = [94, 72, 28, 27, 38, 83];

const insertionsort = (A) => {
    for (let i = 0; i <= A.length - 1; i++) {
        let insetionValue = A[i];
        j = i;
        while (j > 0 && A[j - 1] > insetionValue) {
            A[j] = A[j - 1];
            j--;
        }
        A[j] = insetionValue;
    }
    return A;
};

console.log(insertionsort(unsorted));
