export type ICompare<T> = (a: T, b: T) => number

function defaultCompare<T>(a: T, b: T): number {
    if (a < b) {
        return -1
    } else if (a === b) {
        return 0
    } else {
        return 1
    }
}

export function quickSort<T>(list: T[], compareFn?: ICompare<T>) {
    if (!list) {
        return
    }
    quickSortInternal(list, 0, list.length - 1, compareFn)
}

function quickSortInternal<T>(
    list: T[],
    begin: number,
    end: number,
    compareFn?: ICompare<T>
) {
    compareFn = compareFn || defaultCompare
    const partitionIndex = getPartitionIndex(list, begin, end, compareFn)
    quickSortInternal(list, 0, partitionIndex, compareFn)
    quickSortInternal(list, partitionIndex + 1, list.length - 1, compareFn)
}

function getPartitionIndex<T>(
    list: T[],
    begin: number,
    end: number,
    compareFn?: ICompare<T>
): number {
    let i = begin
    let j = end + 1
    const compareTo = list[i]

    while (true) {
        while (compareFn(list[++i], compareTo) < 0) {
            if (i >= end) {
                break
            }
        }
        while (compareFn(list[--j], compareTo) > 0) {
            if (j <= begin) {
                break
            }
        }

        if (i >= j) {
            break
        }

        swap(list, i, j)
    }

    swap(list, begin, j)

    return j
}

function swap<T>(list: T[], index1: number, index2: number) {
    if (index1 >= list.length || index2 >= list.length) {
        return
    }

    const temp = list[index1]
    list[index1] = list[index2]
    list[index2] = temp
}
