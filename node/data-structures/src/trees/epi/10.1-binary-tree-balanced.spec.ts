
import { BinarySearchTree, IBinarySearchTree } from '../adt/binary-search-tree';
import { isBinaryTreeBalanced } from './10.1-binary-tree-balanced';

describe('un-balanced binary tree tests', () => {
  it('test1', () => {
    const binaryTree: IBinarySearchTree<number> =
      new BinarySearchTree<number>(5)
            .add(7)
            .add(10)
            .add(12);
    expect(isBinaryTreeBalanced(binaryTree.root)).toBeFalsy();
  });

  it('test2', () => {
    const binaryTree: IBinarySearchTree<number> =
      new BinarySearchTree<number>(27)
        .add(20)
        .add(10)
        .add(5)
        .add(2);
    expect(isBinaryTreeBalanced(binaryTree.root)).toBeFalsy();
  });

  it('test3', () => {
    const binaryTree: IBinarySearchTree<number> =
        new BinarySearchTree<number>(5)
          .add(27)
          .add(20)
          .add(30)
          .add(35);
    expect(isBinaryTreeBalanced(binaryTree.root)).toBeFalsy();
  });

  it('test4', () => {
    const binaryTree: IBinarySearchTree<number> =
        new BinarySearchTree<number>(17)
          .add(10)
          .add(5)
          .add(12)
          .add(20)
          .add(25)
          .add(19)
          .add(28)
          .add(29);
    expect(isBinaryTreeBalanced(binaryTree.root)).toBeFalsy();
  });
});

describe('balanced binary tree tests', () => {
    it('test1', () => {
      const binaryTree: IBinarySearchTree<number> =
        new BinarySearchTree<number>(17)
          .add(10)
          .add(27);
      expect(isBinaryTreeBalanced(binaryTree.root)).toBeTruthy();
    });

    it('test2', () => {
      const binaryTree: IBinarySearchTree<number> =
        new BinarySearchTree<number>(17)
            .add(10)
            .add(5)
            .add(20)
            .add(25);
      expect(isBinaryTreeBalanced(binaryTree.root)).toBeTruthy();
    });

    it('test3', () => {
      const binaryTree: IBinarySearchTree<number> =
        new BinarySearchTree<number>(17)
            .add(10)
            .add(5)
            .add(12)
            .add(20)
            .add(25)
            .add(19);
      expect(isBinaryTreeBalanced(binaryTree.root)).toBeTruthy();
    });

    it('test4', () => {
        const binaryTree: IBinarySearchTree<number> =
          new BinarySearchTree<number>(17)
            .add(10)
            .add(5)
            .add(12)
            .add(20)
            .add(25)
            .add(19)
            .add(28);
        expect(isBinaryTreeBalanced(binaryTree.root)).toBeTruthy();
      });
  });
