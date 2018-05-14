import { IGraph, IKey, StringOrNumber} from './graph';
export interface IBreadthFirstPaths {
  hasPathTo(nodeId: StringOrNumber): boolean;
  getPath(nodeId: StringOrNumber): StringOrNumber[];
}

/**
 * Implementation of the Breadth First Search
 */
export class BreadthFirstPaths<T extends IKey> implements IBreadthFirstPaths {
  private marked: Map<StringOrNumber, Boolean> = new Map();
  private queue: StringOrNumber[] = [];
  private paths: Map<StringOrNumber, StringOrNumber> = new Map();
  private sourceNodeId: StringOrNumber;

  constructor(graph: IGraph<T>, nodeId: StringOrNumber) {
    this.sourceNodeId = nodeId;
    this.paths.set(this.sourceNodeId, null);
    this.queue.push(this.sourceNodeId);
    this.bfp(graph);
  }

  hasPathTo(nodeId: StringOrNumber): boolean {
    return this.paths.has(nodeId);
  }

  getPath(nodeId: StringOrNumber): StringOrNumber[]  {
    if (!this.hasPathTo(nodeId)) { return []; }

    const path: StringOrNumber[] = [];
    let prevNodeId: StringOrNumber = nodeId;

    path.unshift(prevNodeId);
    while (prevNodeId) {
        prevNodeId = this.paths.get(prevNodeId);
        path.unshift(prevNodeId);
    }

    return path;
  }

  private bfp(graph: IGraph<T>) {
    while (this.queue.length > 0) {
      const currentNodeId: StringOrNumber = this.queue.shift();
      this.marked.set(currentNodeId, true);
      graph.adjList.get(currentNodeId).forEach((connectedNodeId: StringOrNumber) => {
        if (!this.marked.get(connectedNodeId)) {
          this.paths.set(connectedNodeId, currentNodeId);
          this.queue.push(connectedNodeId);
        }
      });
    }
  }
}
