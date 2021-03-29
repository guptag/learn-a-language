/**
 * Test if a binary tree is symmetric. At every node, the left tree should match the shape and data of the right tree
 */

import { IBinaryTreeNode } from '../adt/binary-tree';

export function isBinaryTreeSymmetric<T>(
    treeNode: IBinaryTreeNode<T>
): boolean {
    return checkSymmetric(treeNode.left, treeNode.right);
}

function checkSymmetric<T>(
    leftNode: IBinaryTreeNode<T>,
    rightNode: IBinaryTreeNode<T>
): boolean {
    // return true if both branches are null
    if (!leftNode && !rightNode) {
        return true;
    }

    // return false if one of the branches is null
    if (!leftNode || !rightNode) {
        return false;
    }

    return (
        leftNode.data === rightNode.data &&
        checkSymmetric(leftNode.left, rightNode.left) &&
        checkSymmetric(leftNode.right, rightNode.right)
    );
}
