export interface ITreeNode<T> {
    data: T
    left: ITreeNode<T>
    right: ITreeNode<T>
}

export interface IBinaryTree<T> {
    root: ITreeNode<T>
}
