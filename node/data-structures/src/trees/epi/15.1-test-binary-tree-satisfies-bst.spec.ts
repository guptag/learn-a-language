import { BinaryTree, IBinaryTree } from '../adt/binary-tree';
import { isBinaryTreeBSTFromInorderTraversal, isBinaryTreeBSTFromRecursion } from './15.1-test-binary-tree-satisfies-bst';

describe('is binary tree BST - inorder - success tests', () => {
  it('test1', () => {
    const binaryTree: IBinaryTree<number> = new BinaryTree(17);
    binaryTree.add(10, binaryTree.root, 'left');
    binaryTree.add(21, binaryTree.root, 'right');
    expect(isBinaryTreeBSTFromInorderTraversal(binaryTree.root)).toBeTruthy();
  });

  it('test2', () => {
    const binaryTree: IBinaryTree<number> = new BinaryTree(17);
    const l = binaryTree.add(10, binaryTree.root, 'left');
    const r = binaryTree.add(27, binaryTree.root, 'right');

    binaryTree.add(8, l, 'left');
    binaryTree.add(12, l, 'right');

    binaryTree.add(20, r, 'left');
    binaryTree.add(30, r, 'right');
    expect(isBinaryTreeBSTFromInorderTraversal(binaryTree.root)).toBeTruthy();
  });
});

describe('is binary tree BST - inorder - failure tests', () => {
  it('test1', () => {
    const binaryTree: IBinaryTree<number> = new BinaryTree(17);
    binaryTree.add(25, binaryTree.root, 'left');
    expect(isBinaryTreeBSTFromInorderTraversal(binaryTree.root)).toBeFalsy();
  });

  it('test2', () => {
    const binaryTree: IBinaryTree<number> = new BinaryTree(17);
    const l = binaryTree.add(10, binaryTree.root, 'left');
    const r = binaryTree.add(5, binaryTree.root, 'right');

    binaryTree.add(8, l, 'left');

    binaryTree.add(20, r, 'left');
    binaryTree.add(30, r, 'right');
    expect(isBinaryTreeBSTFromInorderTraversal(binaryTree.root)).toBeFalsy();
  });
});

describe('is binary tree BST - recursion - success tests', () => {
  it('test1', () => {
    const binaryTree: IBinaryTree<number> = new BinaryTree(17);
    binaryTree.add(10, binaryTree.root, 'left');
    binaryTree.add(21, binaryTree.root, 'right');
    expect(isBinaryTreeBSTFromRecursion(binaryTree.root)).toBeTruthy();
  });

  it('test2', () => {
    const binaryTree: IBinaryTree<number> = new BinaryTree(17);
    const l = binaryTree.add(10, binaryTree.root, 'left');
    const r = binaryTree.add(27, binaryTree.root, 'right');

    binaryTree.add(8, l, 'left');
    binaryTree.add(12, l, 'right');

    binaryTree.add(20, r, 'left');
    binaryTree.add(30, r, 'right');
    expect(isBinaryTreeBSTFromRecursion(binaryTree.root)).toBeTruthy();
  });
});

describe('is binary tree BST - recursion - failure tests', () => {
  it('test1', () => {
    const binaryTree: IBinaryTree<number> = new BinaryTree(17);
    binaryTree.add(25, binaryTree.root, 'left');
    expect(isBinaryTreeBSTFromRecursion(binaryTree.root)).toBeFalsy();
  });

  it('test2', () => {
    const binaryTree: IBinaryTree<number> = new BinaryTree(17);
    const l = binaryTree.add(10, binaryTree.root, 'left');
    const r = binaryTree.add(5, binaryTree.root, 'right');

    binaryTree.add(8, l, 'left');

    binaryTree.add(20, r, 'left');
    binaryTree.add(30, r, 'right');
    expect(isBinaryTreeBSTFromRecursion(binaryTree.root)).toBeFalsy();
  });
});
