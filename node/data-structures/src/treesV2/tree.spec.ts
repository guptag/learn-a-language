import { ITreeNode } from "./adt/binaryTree";
import { BalanceTreeUtil } from "./tree";

test("BalanceTree Tests", () => {
  const tree: ITreeNode<number> = {
    data: 10,
    left: null,
    right: null
  };
  expect(BalanceTreeUtil.isBalanced(tree)).toBeTruthy();
});
