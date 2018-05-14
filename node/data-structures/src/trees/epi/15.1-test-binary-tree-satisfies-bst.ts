/**
 * Test if a binary tree satisfies BST property
 *  - The value of a node (at every level) should be greater than or equal to
 *     all nodes in the left tree and less than all the nodes in the right tree
 *
 * Several approaches to solve this problem
 *  - Inorder traversal path should be in sorted order
 *  - Use dst at every node to check that all nodes in the
 *       left tree < Current Node < all nodes in the right tree (very inefficient as we repeat the same operations several times)
 *  - Calculate Min value of the left branch and max value of the right branch and
 *
 */

import { IBinaryTreeNode } from '../adt/binary-tree';

export function isBinaryTreeBSTFromInorderTraversal<T>(root: IBinaryTreeNode<T>): boolean {
  const inorderTraversal = function* (node: IBinaryTreeNode<T>): IterableIterator<T>  {
    if (node) {
      yield* inorderTraversal(node.left);
      yield node.data;
      yield* inorderTraversal(node.right);
    }
  };
  const traversedList: T[] = Array.from(inorderTraversal(root));

  let isBST: boolean = true;
  traversedList.forEach((dataItem: T, index: number) => {
    if (index > 0 && isBST && dataItem < traversedList[index - 1]) {
      isBST = false;
    }
  });

  return isBST;
}

export function isBinaryTreeBSTFromRecursion<T>(root: IBinaryTreeNode<T>): boolean {
   // Checks if a condition is satisfied for the entire tree
   const doesTreeSatisfyCondition: (node: IBinaryTreeNode<T>, compareFn: (data: T) => boolean) => boolean =
    (node: IBinaryTreeNode<T>, compareFn: (data: T) => boolean) => {
        if (!node) {
          return true;
        }

        if (!compareFn(node.data)) {
          return false;
        }

        return doesTreeSatisfyCondition(node.left, compareFn) && doesTreeSatisfyCondition(node.right, compareFn);
    };

   // Checks if all nodes in the left tree <= root value < all nodes in the right AND
    // recursively verifies this for left and right nodes
   const isTreeBST: (node: IBinaryTreeNode<T>) => boolean = (node: IBinaryTreeNode<T>): boolean => {
      if (node.left && !doesTreeSatisfyCondition(node.left, (childNodeData: T) => childNodeData <= node.data)) {
        return false;
      }

      if (node.right && !doesTreeSatisfyCondition(node.right, (childNodeData: T) => childNodeData > node.data)) {
        return false;
      }

      return ((node.left && isTreeBST(node.left)) || true) && ((node.right && isTreeBST(node.right)) || true);
   };

   return isTreeBST(root);
}
