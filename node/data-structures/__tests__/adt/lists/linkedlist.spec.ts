import { ILinkedList, LinkedList } from '../../../src/adt/lists/linkedlist';

describe('linked list tests', () => {

  it('insert test with no default head', () => {
    const linkedList: ILinkedList<string> = new LinkedList();

    linkedList.insert('one');
    linkedList.insert('two');
    linkedList.insert('three');

    expect([...linkedList.print()]).toEqual(['three', 'two', 'one']);
  });

  it('insert test with default head', () => {
    const linkedList: ILinkedList<string> = new LinkedList('one');

    linkedList.insert('two');
    linkedList.insert('three');

    expect([...linkedList.print()]).toEqual(['three', 'two', 'one']);
  });

  it('delete test', () => {
    const linkedList: ILinkedList<string> = new LinkedList();

    linkedList.insert('one');
    linkedList.insert('two');
    linkedList.insert('three');
    expect([...linkedList.print()]).toEqual(['three', 'two', 'one']);

    linkedList.delete('two');
    expect([...linkedList.print()]).toEqual(['three', 'one']);

    linkedList.delete('one');
    expect([...linkedList.print()]).toEqual(['three']);

    linkedList.delete('three');
    expect([...linkedList.print()]).toEqual([]);
  });

  it('delete test 2', () => {
    const linkedList: ILinkedList<string> = new LinkedList();

    linkedList.insert('one');
    linkedList.insert('two');
    linkedList.insert('three');
    expect([...linkedList.print()]).toEqual(['three', 'two', 'one']);

    linkedList.delete('three');
    expect([...linkedList.print()]).toEqual(['two', 'one']);

    linkedList.delete('one');
    expect([...linkedList.print()]).toEqual(['two']);

    linkedList.delete('two');
    expect([...linkedList.print()]).toEqual([]);
  });

  it('find test', () => {
    const linkedList: ILinkedList<string> = new LinkedList();

    linkedList.insert('one');
    linkedList.insert('two');
    linkedList.insert('three');
    expect([...linkedList.print()]).toEqual(['three', 'two', 'one']);

    expect(linkedList.find('two').data).toBe('two');
    expect(linkedList.find('no-item')).toBe(null);

  });
});
