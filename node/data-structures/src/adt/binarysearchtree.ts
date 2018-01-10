/* Operations */
// search
// findMinimum
// clear
// getsize
// height
// inorder
// preorder
// postorder
// add
// remove
     // test case - delete node with no child nodes
     // test case - delete node with one child node
     // test case - delete node with two child nodes

export type ITreeNodeCompare<T> =  (a: T, b: T) => number;

export interface ITreeNode<T extends { toString(): string}> {
  data: T;
  left: ITreeNode<T>;
  right: ITreeNode<T>;
  parent: ITreeNode<T>;
}

export interface ITree<T extends { toString(): string}> {
  root: ITreeNode<T>;
  find(data: T): ITreeNode<T> | null;
  add(data: T): void;
  remove(node: ITreeNode<T>): void;
  clear(): void;
  getSize(): number;
  height(): number;
  traverseInOrder(): IterableIterator<string>;
  traversePreOrder(): IterableIterator<string>;
  traversePostOrder(): IterableIterator<string>;
}

export type ICompare<T> =  (a: T, b: T) => number;

function defaultCompare<T>(a: T, b: T): number {
  if (a < b) { return -1; }
  else if (a === b) { return 0; }
  else { return 1; }
}

/**
 * Implementation of the Binary Search Tree data structure
 */
export class BinarySearchTree<T> implements ITree<T> {
  root: ITreeNode<T>;
  compareFn: ICompare<T> = defaultCompare;

  constructor(data?: T, compareFn?: ICompare<T>) {
    if (data) {
      this.createRoot(data);
    }

    if (compareFn) {
      this.compareFn = compareFn;
    }
  }

  find(data: T): ITreeNode<T> | null {
    const findFromNode: (dataToFind: T, current: ITreeNode<T>) => ITreeNode<T>  = (dataToFind: T, current: ITreeNode<T>) => {
      if (!parent) {
        return null;
      } else {
        const compareVal: number = this.compareFn(dataToFind, current.data);
        if (compareVal === 0) { return current; }
        else if (compareVal < 0) { return findFromNode(dataToFind, current.left); }
        else { return findFromNode(dataToFind, current.right); }
      }
    };
    return findFromNode(data, this.root);
  }

  add(data: T): void {
    if (!this.root) {
      this.createRoot(data);
      return;
    }

    this.addToNode(data, this.root);
  }

  remove(node: ITreeNode<T>): void {
    console.log(node);
  }

  clear(): void {
    this.root = null;
  }

  getSize(): number {
    return [...this.traverseInOrder()].length;
  }

  height(): number {
    const getHeightFromNode: (node: ITreeNode<T>) => number = (node: ITreeNode<T>) => {
      if (!node) { return 0; }
      return 1 + Math.max(getHeightFromNode(node.left), getHeightFromNode(node.right));
    };
    return getHeightFromNode(this.root);
  }

  *traverseInOrder(): IterableIterator<string> {
    const traverse = function* (node: ITreeNode<T>): IterableIterator<string>  {
       if (node) {
        yield* traverse(node.left);
        yield node.data.toString();
        yield* traverse(node.right);
       }
    };
    traverse(this.root);
  }

  *traversePreOrder(): IterableIterator<string> {
    const traverse = function* (node: ITreeNode<T>): IterableIterator<string>  {
      if (node) {
       yield node.data.toString();
       yield* traverse(node.left);
       yield* traverse(node.right);
      }
    };
    traverse(this.root);
  }

  *traversePostOrder(): IterableIterator<string> {
    const traverse = function* (node: ITreeNode<T>): IterableIterator<string>  {
      if (node) {
       yield* traverse(node.left);
       yield* traverse(node.right);
       yield node.data.toString();
      }
    };
    traverse(this.root);
  }

  private addToNode(data: T, parent: ITreeNode<T>) {
    if (this.compareFn(data, parent.data) <= 0) {
      if (parent.left) {
        this.addToNode(data, parent.left);
      } else {
        parent.left = this.createNode(data, parent);
      }
    } else {
      if (parent.right) {
        this.addToNode(data, parent.right);
      } else {
        parent.right = this.createNode(data, parent);
      }
    }
  }

  private createRoot(data: T): void {
    if (data) {
      this.root = this.createNode(data, null);
    }
  }

  private createNode(data: T, parent: ITreeNode<T>): ITreeNode<T> {
    return {
      data: data,
      parent: parent,
      left: null,
      right: null
    };
  }
}
