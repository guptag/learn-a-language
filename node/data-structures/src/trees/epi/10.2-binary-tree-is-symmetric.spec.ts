import { BinaryTree, IBinaryTree } from '../adt/binary-tree'
import { isBinaryTreeSymmetric } from './10.2-binary-tree-is-symmetric'

describe('non-symmetric binary tree tests', () => {
    it('test1', () => {
        const binaryTree: IBinaryTree<number> = new BinaryTree(17)
        binaryTree.add(10, binaryTree.root, 'left')
        expect(isBinaryTreeSymmetric(binaryTree.root)).toBeFalsy()
    })

    it('test2', () => {
        const binaryTree: IBinaryTree<number> = new BinaryTree(17)
        const l = binaryTree.add(10, binaryTree.root, 'left')
        const r = binaryTree.add(10, binaryTree.root, 'right')

        binaryTree.add(15, l, 'left')
        binaryTree.add(20, r, 'right')
        expect(isBinaryTreeSymmetric(binaryTree.root)).toBeFalsy()
    })
})

describe('symmetric binary tree tests', () => {
    it('test1', () => {
        const binaryTree: IBinaryTree<number> = new BinaryTree(17)
        binaryTree.add(10, binaryTree.root, 'left')
        binaryTree.add(10, binaryTree.root, 'right')
        expect(isBinaryTreeSymmetric(binaryTree.root)).toBeTruthy()
    })

    it('test2', () => {
        const binaryTree: IBinaryTree<number> = new BinaryTree(17)
        const l = binaryTree.add(10, binaryTree.root, 'left')
        const r = binaryTree.add(10, binaryTree.root, 'right')

        binaryTree.add(15, l, 'left')
        binaryTree.add(20, l, 'right')

        binaryTree.add(15, r, 'left')
        binaryTree.add(20, r, 'right')
        expect(isBinaryTreeSymmetric(binaryTree.root)).toBeTruthy()
    })
})
