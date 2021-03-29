import { ITreeNode } from './adt/binaryTree';
import { BalanceTreeUtil } from './tree';

describe('BalanceTree Tests', () => {
    it('simple test', () => {
        const tree: ITreeNode<number> = {
            data: 10,
            left: null,
            right: null,
        };
        expect(BalanceTreeUtil.isBalanced(tree)).toBeTruthy();
    });

    it('unbalanced test', () => {
        const tree: ITreeNode<number> = {
            data: 10,
            left: {
                data: 2,
                left: {
                    data: 5,
                    left: null,
                    right: {
                        data: 6,
                        left: {
                            data: 10,
                            left: {
                                data: 12,
                                left: null,
                                right: null,
                            },
                            right: null,
                        },
                        right: null,
                    },
                },
                right: null,
            },
            right: {
                data: 4,
                left: {
                    data: 7,
                    left: {
                        data: 8,
                        left: null,
                        right: null,
                    },
                    right: null,
                },
                right: null,
            },
        };
        expect(BalanceTreeUtil.isBalanced(tree)).toBeFalsy();
    });
});
