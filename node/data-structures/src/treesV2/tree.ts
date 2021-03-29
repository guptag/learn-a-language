import { ITreeNode } from './adt/binaryTree';

// Checks if the binary tree is balanced
// A balanced tree is such that the heights of the
// two subtrees of any node never differ by more than one
class BalanceTreeUtil {
  static isBalanced<T>(root: ITreeNode<T>): boolean {
    if (root === null) {
      return true;
    }

    const heightDifference = Math.abs(
      BalanceTreeUtil.getHeight(root.left) -
        BalanceTreeUtil.getHeight(root.right)
    );

    if (heightDifference > 1) {
      return false;
    } else {
      return (
        BalanceTreeUtil.isBalanced(root.left) &&
        BalanceTreeUtil.isBalanced(root.right)
      );
    }
  }

  private static getHeight<T>(node: ITreeNode<T>): number {
    if (node === null) {
      return 0;
    }

    const height =
      1 +
      Math.max(
        BalanceTreeUtil.getHeight(node.left),
        BalanceTreeUtil.getHeight(node.right)
      );

    return height;
  }
}

// Checks if the binary tree is balanced
// A balanced tree is such that the heights of the
// two subtrees of any node never differ by more than one
class BalanceTreeUtilOptimized {
  public static isBalanced<T>(root: ITreeNode<T>): boolean {
    return this.checkHeight(root) !== -1;
  }

  private static checkHeight<T>(node: ITreeNode<T>): number {
    if (node === null) {
      return 0;
    }

    const leftHeight = this.checkHeight(node.left);
    if (leftHeight === -1) {
      return -1;
    }

    const rightHeight = this.checkHeight(node.right);
    if (rightHeight === -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    } else {
      return (
        1 + Math.max(this.checkHeight(node.left), this.checkHeight(node.right))
      );
    }
  }
}

export { BalanceTreeUtil, BalanceTreeUtilOptimized };
