import { ITreeNode } from "./adt/binaryTree";
import { BalanceTreeUtil } from "./tree";

describe('BalanceTree Tests', () => {
  it('simple test', () => {
        const tree: ITreeNode<number> = {
        data: 10,
        left: null,
        right: null
    };
    expect(BalanceTreeUtil.isBalanced(tree)).toBeTruthy();
  });
});

