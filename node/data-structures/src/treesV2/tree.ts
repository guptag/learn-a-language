// Checks if the binary tree is balanced
// A balanced tree is such that the heights of the

import { ITreeNode } from './adt/binaryTree'

// two subtrees of any node never differ by more than one
class BalanceTreeUtil {
    static isBalanced<T>(root: ITreeNode<T>): boolean {
        if (root === null) {
            return true
        }

        const heightDifference = Math.abs(
            BalanceTreeUtil.getHeight(root.left) -
                BalanceTreeUtil.getHeight(root.right)
        )

        if (heightDifference > 1) {
            return false
        } else {
            return (
                BalanceTreeUtil.isBalanced(root.left) &&
                BalanceTreeUtil.isBalanced(root.right)
            )
        }
    }

    private static getHeight<T>(node: ITreeNode<T>): number {
        if (node === null) {
            return 0
        }

        return Math.max(
            BalanceTreeUtil.getHeight(node.left),
            BalanceTreeUtil.getHeight(node.right)
        )
    }
}

/*class BalanceTreeUtilOptimized {
  public static isBalanced<T>(root: TreeNode<T>): boolean {}

  private static getHeight() {}
}*/

export { BalanceTreeUtil }
