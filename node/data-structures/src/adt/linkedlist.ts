
export interface INode<T extends { toString(): string}> {
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

export class LinkedList<T> implements ILinkedList<T> {
  head: INode<T>;

  constructor(head?: INode<T>) {
      if (head) {
        this.head = head; 
      }
  }

  find (data: T): INode<T> | null {
    let iterator: INode<T> = this.head

    while (iterator) {
      if (this.head.data === data)  {
        return this.head;
      }
      iterator = this.head.next;
    }

    return null;
  }

  insert(data: T): void {
     let newNode: INode<T> = {
       data: data,
       next: this.head
     };
     this.head = newNode;
  }

  delete(data: T): void {
    let iterator: INode<T> = this.head

    while (iterator && iterator.next) {
      if (iterator.next.data === data)  {
        iterator.next = iterator.next.next ? iterator.next.next : null;
        break;
      }

      iterator = iterator.next;
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