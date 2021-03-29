export type ICompare<T> = (a: T, b: T) => number;

function defaultCompare<T>(a: T, b: T): number {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
}

export function mergeSort<T>(list: T[], compareFn?: ICompare<T>) {
  compareFn = compareFn || defaultCompare;
  if (!list) {
    return;
  }
  sort(list, 0, list.length - 1, compareFn);
}

function sort<T>(
  list: T[],
  begin: number,
  end: number,
  compareFn?: ICompare<T>
) {
  if (begin <= end) {
    return;
  }

  const mid = begin + Math.floor((end - begin) / 2);

  sort(list, begin, mid, compareFn);
  sort(list, mid + 1, end, compareFn);
  merge(list, begin, mid, end, compareFn);
}

function merge<T>(
  list: T[],
  begin: number,
  mid: number,
  end: number,
  compareFn?: ICompare<T>
): void {
  const list1: T[] = [];
  const list2: T[] = [];

  for (let i = begin; i <= mid; ++i) {
    list1.push(list[i]);
  }

  for (let i = mid + 1; i <= end; ++i) {
    list2.push(list[i]);
  }

  let list1Index = 0;
  let list2Index = 0;

  for (let i = begin; i <= end; ++i) {
    if (list1Index >= list1.length) {
      list[i] = list2[list2Index++];
    } else if (list2Index >= list2.length) {
      list[i] = list1[list1Index++];
    } else {
      list[i] =
        compareFn(list1[list1Index], list2[list2Index]) < 0
          ? list1[list1Index++]
          : list2[list2Index++];
    }
  }
}
