export interface INode<T extends { toString(): string }> {
    data: T;
    next: INode<T>;
}

export interface ILinkedList<T> {
    head: INode<T>;
    find(item: T): INode<T> | null;
    insert(item: T): void;
    delete(item: T): void;
    print(): IterableIterator<string>;
}

/**
 * Linked List Implementation
 */
export class LinkedList<T> implements ILinkedList<T> {
    head: INode<T>;

    constructor(data?: T) {
        if (data) {
            this.head = {
                data: data,
                next: null,
            };
        }
    }

    find(data: T): INode<T> | null {
        let iterator: INode<T> = this.head;

        while (iterator) {
            if (iterator.data === data) {
                return iterator;
            }
            iterator = iterator.next;
        }

        return null;
    }

    insert(data: T): void {
        const newNode: INode<T> = {
            data: data,
            next: this.head,
        };
        this.head = newNode;
    }

    delete(data: T): void {
        if (this.head && this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current: INode<T> = this.head.next;
        let previous: INode<T> = this.head;

        while (current) {
            if (current.data === data) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    *print(): IterableIterator<string> {
        let iterator: INode<T> = this.head;

        while (iterator) {
            yield iterator.data.toString();
            iterator = iterator.next;
        }
    }
}
