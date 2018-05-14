import { IGraph, IKey, StringOrNumber} from './graph';
export interface IBreadthFirstSearch {
  isMarked(nodeId: StringOrNumber): boolean;
  getCount(): number;
}

/**
 * Implementation of the Breadth First Search
 */
export class BreadthFirstSearch<T extends IKey> implements IBreadthFirstSearch {
  private marked: Map<StringOrNumber, Boolean> = new Map();
  private queue: StringOrNumber[] = [];
  private count: number = 0;

  constructor(graph: IGraph<T>, nodeId: StringOrNumber) {
    this.marked.set(nodeId, true);
    this.queue.push(nodeId);
    this.bfs(graph);
  }

  isMarked(nodeId: StringOrNumber): boolean {
    return this.marked.has(nodeId);
  }

  getCount(): number {
    return this.count;
  }

  private bfs(graph: IGraph<T>) {
    while (this.queue.length > 0) {
      const currentNodeId: StringOrNumber = this.queue.shift();

      if (!this.marked.get(currentNodeId)) {
        this.marked.set(currentNodeId, true);
        this.count++;
      }

      graph.adjList.get(currentNodeId).forEach((connectedNodeId: StringOrNumber) => {
        if (!this.marked.get(connectedNodeId)) {
          this.queue.push(connectedNodeId);
        }
      });
    }
  }
}
