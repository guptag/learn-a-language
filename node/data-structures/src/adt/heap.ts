/* Operations */
// initialize(arr[], min | max)
// insert
// extract
// peek

export enum HeapType {
    Min,
    Max
}

export interface IHeap<T extends { toString(): string}> {
  queue: T[];
  insert(data: T): void;
  extract(): T | undefined;
  peek(): T | undefined;
  clear(): void;
}

export type ICompare<T> =  (a: T, b: T) => number;

function defaultCompare<T>(a: T, b: T): number {
  if (a < b) { return -1; }
  else if (a === b) { return 0; }
  else { return 1; }
}

/**
 * Implementation of the Heap data structure
 */
export class Heap<T> implements IHeap<T> {
  queue: T[] = [];
  compareFn: ICompare<T> = defaultCompare;
  heapType: HeapType;

  constructor(items: T[], type: HeapType, nodeCompare: ICompare<T>) {
    this.compareFn = nodeCompare;
    this.heapType = type;

    items.forEach((item : T) => {
      this.insert(item);
    });

  }

  insert(data: T): void {
    this.queue.push(data);
    this.bubbleUp(this.queue.length - 1);
  }

  extract(): T | undefined {
    if (this.queue.length === 0) {
      return undefined;
    }

    if (this.queue.length === 1) {
      const node = this.queue[0];
      this.clear();
      return node;
    }

    const rootNode = this.queue[0]; // extract the root node
    this.queue[0] = this.queue.pop(); // put last item at the top
    this.bubbleDown(0); // bubble down the checks

    return rootNode;

  }

  clear(): void {
    this.queue = [];
  }

  peek(): T | undefined {
    return this.queue[0] || undefined;
  }

  private bubbleUp(index: number): void {
    if (index === 0) { return; }

    const parent = this.getParent(index);
    const parentIndex = this.getParentIndex(index);
    const current = this.queue[index];

    if (parent === undefined || parentIndex === undefined) { return; }

    if ((this.heapType === HeapType.Min && this.compareFn(parent, current) > 0) ||
        (this.heapType === HeapType.Max && this.compareFn(parent, current) < 0)) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  private bubbleDown(index: number): void {
    if (index === this.queue.length - 1) { return; }

    const current = this.queue[index];
    const firstChild = this.getFirstChild(index);
    const firstChildIndex = this.getFirstChildIndex(index);

    if (firstChild === undefined || firstChildIndex === undefined) { return; }

    if ((this.heapType === HeapType.Min && this.compareFn(current, firstChild) > 0) ||
        (this.heapType === HeapType.Max && this.compareFn(current, firstChild) < 0)) {
      this.swap(index, firstChildIndex);
      this.bubbleDown(firstChildIndex);
    }
  }

  private getFirstChild(index: number): T | undefined {
    const childIndex = 2 * index + 1;
    return childIndex < this.queue.length ? this.queue[2 * index + 1] : undefined;
  }

  private getFirstChildIndex(index: number): number | undefined {
    return 2 * index + 1;
  }

  private getParent(index: number): T | undefined {
    const parentIndex = Math.floor(index / 2);
    return parentIndex < this.queue.length ? this.queue[Math.floor(index / 2)] : undefined;
  }

  private getParentIndex(index: number): number | undefined {
    return Math.floor(index / 2);
  }

  private swap(index1: number, index2: number) {
    if ((index1 >= this.queue.length) ||
        (index2 >= this.queue.length)) { return; }

    const temp = this.queue[index1];
    this.queue[index1] = this.queue[index2];
    this.queue[index2] = temp;
  }
}
