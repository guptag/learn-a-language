import { DoublyLinkedList, IDoublyLinkedList } from './doublylinkedlist'

describe('double linked list tests', () => {
    it('insert test with no default head', () => {
        const linkedList: IDoublyLinkedList<string> = new DoublyLinkedList()

        linkedList.insert('one')
        linkedList.insert('two')
        linkedList.insert('three')

        expect([...linkedList.print()]).toEqual(['three', 'two', 'one'])

        expect(linkedList.head.data).toBe('three')
        expect(linkedList.head.next.data).toBe('two')
        expect(linkedList.head.next.next.data).toBe('one')

        expect(linkedList.head.previous).toBe(null)
        expect(linkedList.head.next.previous.data).toBe('three')
        expect(linkedList.head.next.next.previous.data).toBe('two')
    })

    it('insert test with default head', () => {
        const linkedList: IDoublyLinkedList<string> = new DoublyLinkedList(
            'one'
        )

        linkedList.insert('two')
        linkedList.insert('three')

        expect([...linkedList.print()]).toEqual(['three', 'two', 'one'])
    })

    it('delete test', () => {
        const linkedList: IDoublyLinkedList<string> = new DoublyLinkedList()

        linkedList.insert('one')
        linkedList.insert('two')
        linkedList.insert('three')
        expect([...linkedList.print()]).toEqual(['three', 'two', 'one'])

        linkedList.delete('two')
        expect([...linkedList.print()]).toEqual(['three', 'one'])

        linkedList.delete('one')
        expect([...linkedList.print()]).toEqual(['three'])

        linkedList.delete('three')
        expect([...linkedList.print()]).toEqual([])
    })

    it('delete test 2', () => {
        const linkedList: IDoublyLinkedList<string> = new DoublyLinkedList()

        linkedList.insert('one')
        linkedList.insert('two')
        linkedList.insert('three')
        expect([...linkedList.print()]).toEqual(['three', 'two', 'one'])

        linkedList.delete('three')
        expect([...linkedList.print()]).toEqual(['two', 'one'])

        linkedList.delete('one')
        expect([...linkedList.print()]).toEqual(['two'])

        linkedList.delete('two')
        expect([...linkedList.print()]).toEqual([])
    })

    it('find test', () => {
        const linkedList: IDoublyLinkedList<string> = new DoublyLinkedList()

        linkedList.insert('one')
        linkedList.insert('two')
        linkedList.insert('three')
        expect([...linkedList.print()]).toEqual(['three', 'two', 'one'])

        expect(linkedList.find('two').data).toBe('two')
        expect(linkedList.find('no-item')).toBe(null)
    })
})
