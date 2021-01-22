const unsorted = [94, 72, 28, 27, 38, 83];

const quicksort = (l, r) => {
    l = l ?? 0;
    r = r ?? unsorted.length - 1;
    if (l < r) {
        let splitter = split(l, r);
        quicksort(l, splitter - 1);
        quicksort(splitter + 1, r);
    }
    return unsorted;
};

const split = (l, r) => {
    let i = l;
    let j = r - 1;
    let pivot = unsorted[r];

    while (i < j) {
        while (i < r && unsorted[i] < pivot) {
            i++;
        }

        while (j > l && unsorted[j] >= pivot) {
            j--;
        }
        if (i < j) {
            [unsorted[i], unsorted[j]] = [unsorted[j], unsorted[i]];
        }
    }

    if (unsorted[i] > pivot) {
        [unsorted[i], unsorted[r]] = [unsorted[r], unsorted[i]];
    }
    return i;
};

console.log(quicksort());
