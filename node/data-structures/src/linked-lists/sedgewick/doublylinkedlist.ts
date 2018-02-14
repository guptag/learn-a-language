
export interface INode<T extends { toString(): string}> {
  data: T;
  next: INode<T>;
  previous: INode<T>;
}

export interface IDoublyLinkedList<T> {
  head: INode<T>;
  find(item: T): INode<T> | null;
  insert(item: T): void;
  delete(item: T): void;
  print(): IterableIterator<string>;
}

    /**
     * Doubly Linked List Implementation
     */
export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  head: INode<T>;

  constructor(data?: T) {
      if (data) {
          this.head = {
          data: data,
          next: null,
          previous: null
          };
      }
  }

  find (data: T): INode<T> | null {
      let iterator: INode<T> = this.head;

      while (iterator) {
      if (iterator.data === data)  {
          return iterator;
      }
      iterator = iterator.next;
      }

      return null;
  }

  /**
   * Inserts new node at the beginning of the list
   */
  insert(data: T): void {
    const newNode: INode<T> = {
      data: data,
      next: this.head,
      previous: null
    };

    // set up the new node as previous to current head
    if (this.head) {
      this.head.previous = newNode;
    }

    // change head reference to new node
    this.head = newNode;
  }

  delete(data: T): void {
    if (this.head && this.head.data === data) {
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      }
      return;
    }

    let current: INode<T> = this.head.next;
    while (current) {
      if (current.data === data)  {
          current.previous.next = current.next;
          if (current.next) {
            current.next.previous = current.previous;
          }
          return;
      }
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
