const stupidSort = (A) => {
    const isSorted = () => {
        for (let i = 0; i < A.length - 1; i++) {
            if (A[i] > A[i + 1]) return false;
        }
        return true;
    };

    while (!isSorted()) {
        const a = Math.floor(Math.random() * A.length);
        const b = Math.floor(Math.random() * A.length);
        [A[a], A[b]] = [A[b], A[a]];
    }
    return A;
};

const unsorted = [94, 72, 28, 27, 38, 83];

console.log(stupidSort(unsorted));
