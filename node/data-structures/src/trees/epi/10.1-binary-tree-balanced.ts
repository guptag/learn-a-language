/**
 * Implement a function to check if a binary tree is balanced. A tree is balanced if the heights of the two subtrees of any node
 * never differ by more than one.
 *
 * Bruteforce:
 *  At every level, recursively get the height of the tree for both the nodes and determine whether the tree is balanced or not.
 *  This approach calculates the height of the same nodes repeatedly.
 *
 * Optimized:
 *   When checking the height of the tree, also do the diff and return the state along with the height
 *
 */

import { IBinaryTreeNode } from '../adt/binary-tree';

interface ITreeHeight {
    height: number;
    isBalanced: boolean;
}

export function isBinaryTreeBalanced<T>(treeNode: IBinaryTreeNode<T>): boolean {
    return getHeight(treeNode).isBalanced;
}

function getHeight<T>(node: IBinaryTreeNode<T>): ITreeHeight {
   if (node === null) {
       return { height: 0, isBalanced: true};
   }

   const leftTreeData = getHeight(node.left);
   if (!leftTreeData.isBalanced) {
       return { height: 0, isBalanced: false};
   }

   const rightTreeData = getHeight(node.right);
   if (!rightTreeData.isBalanced) {
       return { height: 0, isBalanced: false };
   }

   const heightDiff = Math.abs(leftTreeData.height - rightTreeData.height);

   return { isBalanced: heightDiff <= 1, height: 1 + Math.max(leftTreeData.height, rightTreeData.height)};
}
