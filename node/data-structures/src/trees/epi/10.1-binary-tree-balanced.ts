
import { ITreeNode } from '../sedgewick/binarysearchtree';

interface IBalancedMetadata {
    height: number;
    isBalanced: boolean;
}

export function isBinaryTreeBalanced<T>(treeNode: ITreeNode<T>): boolean {
    return getBalancedMetadata(treeNode).isBalanced;
}

function getBalancedMetadata<T>(node: ITreeNode<T>): IBalancedMetadata {
   if (node === null) {
       return { height: 0, isBalanced: true};
   }

   const leftTreeData = getBalancedMetadata(node.left);
   if (!leftTreeData.isBalanced) {
       return { height: 0, isBalanced: false};
   }

   const rightTreeData = getBalancedMetadata(node.right);
   if (!rightTreeData.isBalanced) {
       return { height: 0, isBalanced: false };
   }

   const heightDiff = Math.abs(leftTreeData.height - rightTreeData.height);

   return { isBalanced: heightDiff <= 1, height: 1 + Math.max(leftTreeData.height, rightTreeData.height)};
}
