import { IGraph, IKey, StringOrNumber} from './graph';
export interface IDepthFirstSearch {
  isMarked(nodeId: StringOrNumber): boolean;
  getCount(): number;
}

/**
 * Implementation of the Depth First Search
 */
export class DepthFirstSearch<T extends IKey> implements IDepthFirstSearch {
  private marked: Map<StringOrNumber, Boolean> = new Map();
  private count: number = 0;

  constructor(graph: IGraph<T>, nodeId: StringOrNumber) {
    this.marked.set(nodeId, true);
    this.dfs(graph, nodeId);
  }

  isMarked(nodeId: StringOrNumber): boolean {
    return this.marked.has(nodeId);
  }

  getCount(): number {
    return this.count;
  }

  private dfs(graph: IGraph<T>, nodeId: StringOrNumber) {
    graph.adjList.get(nodeId).forEach((connectedNodeId: StringOrNumber) => {
      if (!this.marked.has(connectedNodeId)) {
        this.marked.set(connectedNodeId, true);
        this.count++;
        this.dfs(graph, connectedNodeId);
      }
    });
  }
}
