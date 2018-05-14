/* Operations */
// clear
// getsize
// height
// inorder
// preorder
// postorder
// add

export interface IBinaryTreeNode<T extends { toString(): string}> {
  data: T;
  left: IBinaryTreeNode<T>;
  right: IBinaryTreeNode<T>;
  parent: IBinaryTreeNode<T>;
}

export interface IBinaryTree<T extends { toString(): string}> {
  root: IBinaryTreeNode<T>;
  find(data: T): IBinaryTreeNode<T> | null;
  add(data: T, parentNode: IBinaryTreeNode<T>, direction: Direction): IBinaryTreeNode<T>;
  clear(): void;
  getSize(): number;
  height(): number;
  traverseInOrder(): IterableIterator<string>;
  traversePreOrder(): IterableIterator<string>;
  traversePostOrder(): IterableIterator<string>;
}

export type Direction = 'left' | 'right';

/**
 * Implementation of the Binary Tree data structure
 */
export class BinaryTree<T> implements IBinaryTree<T> {
  root: IBinaryTreeNode<T>;

  constructor(data?: T) {
    if (data) {
      this.createRoot(data);
    }
  }

  find(data: T): IBinaryTreeNode<T> | null {
    const findFromNode: (dataToFind: T, current: IBinaryTreeNode<T>) => IBinaryTreeNode<T>  =
      (dataToFind: T, current: IBinaryTreeNode<T>) => {
        if (!current) {
          return null;
        }

        if (current.data === dataToFind) {
          return current;
        }

        let foundNode  = findFromNode(dataToFind, current.left);
        if (foundNode) { return foundNode; }

        foundNode  = findFromNode(dataToFind, current.right);
        if (foundNode) { return foundNode; }

        return null;
      };

    return findFromNode(data, this.root);
  }

  add(data: T, parentNode: IBinaryTreeNode<T>, direction: Direction): IBinaryTreeNode<T> {
    if (!this.root && !parentNode) {
      this.createRoot(data);
      return this.root;
    }

    if (!parentNode) {
      throw Error ('parentNode shouldn\'t be null');
    }

    if ((parentNode.left && direction === 'left') ||
        (parentNode.right && direction === 'right')) {
      throw Error(`${direction}  Node already exists`);
    }

    parentNode[direction] = this.createNode(data, parentNode);

    return parentNode[direction];
  }

  clear(): void {
    this.root = null;
  }

  getSize(): number {
    return [...this.traverseInOrder()].length;
  }

  height(): number {
    const getHeightFromNode: (node: IBinaryTreeNode<T>) => number = (node: IBinaryTreeNode<T>) => {
      if (!node) { return 0; }
      return 1 + Math.max(getHeightFromNode(node.left), getHeightFromNode(node.right));
    };
    return getHeightFromNode(this.root);
  }

  *traverseInOrder(): IterableIterator<string> {
    const traverse = function* (node: IBinaryTreeNode<T>): IterableIterator<string>  {
       if (node) {
        yield* traverse(node.left);
        yield node.data.toString();
        yield* traverse(node.right);
       }
    };
    traverse(this.root);
  }

  *traversePreOrder(): IterableIterator<string> {
    const traverse = function* (node: IBinaryTreeNode<T>): IterableIterator<string>  {
      if (node) {
       yield node.data.toString();
       yield* traverse(node.left);
       yield* traverse(node.right);
      }
    };
    traverse(this.root);
  }

  *traversePostOrder(): IterableIterator<string> {
    const traverse = function* (node: IBinaryTreeNode<T>): IterableIterator<string>  {
      if (node) {
       yield* traverse(node.left);
       yield* traverse(node.right);
       yield node.data.toString();
      }
    };
    traverse(this.root);
  }

  private createRoot(data: T): void {
    if (data) {
      this.root = this.createNode(data, null);
    }
  }

  private createNode(data: T, parent: IBinaryTreeNode<T>): IBinaryTreeNode<T> {
    return {
      data: data,
      parent: parent,
      left: null,
      right: null
    };
  }
}
