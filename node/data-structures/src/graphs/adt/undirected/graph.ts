export type StringOrNumber = string | number

export interface ID {
    id: StringOrNumber
}

// Nodes can be strings or integers or objects with property id
export type IKey = StringOrNumber | ID

/*
  let g:IGraph<string> = new Graph(
    ['a', 'b', 'c'],  // nodes
    [                 // edges
      ['a', 'b'],
      ['a', 'c']
    ]);

    OR

  let g1:IGraph<string> = new Graph(
    [1, 2, 3],
    [
      [1, 2],
      [2, 3],
      [1, 3]
    ]);

    OR

  export interface INode {
    id: string | number;
    name: string;
  }
  let g:IGraph<INode> = new Graph([
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'}
  ],
  [
    [1, 2],
    [2, 3],
    [1, 3]
  ]);
*/
export interface IGraph<T extends IKey> {
    nodes: T[]
    adjList: Map<StringOrNumber, Set<StringOrNumber>>
    addNode(node: T): void
    addEdge(nodeOneId: StringOrNumber, nodeTwoId: StringOrNumber): void
    getConnectedNodes(node: T): T[]
    getDegree(node: T): number
    getMaximumDegree(): number
    getAverageDegree(): number
    getSelfLoopCount(): number
    print(): IterableIterator<string>
}

/**
 * Graph Implementation
 */
export class Graph<T extends IKey> implements IGraph<T> {
    nodes: T[] = []
    adjList: Map<StringOrNumber, Set<StringOrNumber>> = new Map()

    constructor(nodesList?: T[], edgeList?: StringOrNumber[][]) {
        nodesList && nodesList.forEach((node: T) => this.addNode(node))

        edgeList &&
            edgeList.forEach((keys: StringOrNumber[]) => {
                if (keys.length === 2) {
                    this.addEdge(keys[0], keys[1])
                }
            })
    }

    addNode(node: T): void {
        if (!this.adjList.has(this.getId(node))) {
            this.nodes.push(node)
            this.adjList.set(this.getId(node), new Set<StringOrNumber>())
        } else {
            throw Error(`Node with ${this.getId(node)} already exists`)
        }
    }

    addEdge(nodeOneId: StringOrNumber, nodeTwoId: StringOrNumber): void {
        if (this.adjList.has(nodeOneId) && this.adjList.has(nodeTwoId)) {
            this.adjList.get(nodeOneId).add(nodeTwoId)
            this.adjList.get(nodeTwoId).add(nodeOneId)
        } else {
            const missingIds: string = !this.adjList.has(nodeOneId)
                ? nodeOneId.toString()
                : !this.adjList.has(nodeTwoId)
                ? nodeTwoId.toString()
                : `${(nodeOneId.toString(), nodeTwoId.toString())}`
            throw Error(`Graph doesn't the node(s) with id(s) ${missingIds}`)
        }
    }

    getConnectedNodes(node: T): T[] {
        if (!this.adjList.has(this.getId(node))) {
            return []
        }

        const connectedNodeIds = this.adjList.get(this.getId(node))
        return this.nodes.filter((nodeToFilter: T) =>
            connectedNodeIds.has(this.getId(nodeToFilter))
        )
    }

    getDegree(node: T): number {
        if (!this.adjList.has(this.getId(node))) {
            return 0
        }

        return this.adjList.get(this.getId(node)).size
    }

    getMaximumDegree(): number {
        if (this.adjList.size === 0) {
            return 0
        }

        let maxDegree = 0
        for (const [_, value] of this.adjList) {
            if (value.size > maxDegree) {
                maxDegree = value.size
            }
        }

        return maxDegree
    }

    getAverageDegree(): number {
        if (this.adjList.size === 0) {
            return 0
        }

        let avgDegree = 0
        for (const [_, value] of this.adjList) {
            avgDegree += value.size
        }

        return avgDegree / this.adjList.size
    }

    getSelfLoopCount(): number {
        if (this.adjList.size === 0) {
            return 0
        }

        let selfLoops = 0
        for (const [key, value] of this.adjList) {
            if (value.has(key)) {
                selfLoops++
            }
        }

        return selfLoops
    }

    *print(): IterableIterator<string> {
        if (this.adjList.size === 0) {
            return ''
        }

        for (const [key, value] of this.adjList) {
            yield `[${key}] -> ${[...value].join(' ')}; `.trim()
        }
    }

    private getId(node: IKey): StringOrNumber {
        // tslint:disable-next-line no-any no-unsafe-any
        return (<ID>node).id !== undefined
            ? (<any>node).id
            : this.isNumber(node)
            ? node
            : node.toString()
    }

    // tslint:disable-next-line no-any
    private isNumber(n: any): boolean {
        // tslint:disable-next-line no-unsafe-any
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
}
