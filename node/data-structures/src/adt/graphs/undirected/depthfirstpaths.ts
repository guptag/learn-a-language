
import { IGraph, IKey, StringOrNumber} from './graph';
export interface IDepthFirstPaths {
  hasPathTo(nodeId: StringOrNumber): boolean;
  getPath(nodeId: StringOrNumber): StringOrNumber[];
}

/**
 * Implementation of the Depth First Paths
 */
export class DepthFirstPaths<T extends IKey> implements IDepthFirstPaths {
  private marked: Map<StringOrNumber, Boolean> = new Map();
  private paths: Map<StringOrNumber, StringOrNumber> = new Map();
  private sourceNodeId: StringOrNumber;

  constructor(graph: IGraph<T>, nodeId: StringOrNumber) {
    this.sourceNodeId = nodeId;
    this.paths.set(this.sourceNodeId, null);
    this.dfp(graph, this.sourceNodeId);
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

  private dfp(graph: IGraph<T>, nodeId: StringOrNumber) {
    graph.adjList.get(nodeId).forEach((connectedNodeId: StringOrNumber) => {
      if (!this.marked.has(connectedNodeId)) {
        this.marked.set(connectedNodeId, true);
        this.paths.set(connectedNodeId, nodeId);
        this.dfp(graph, connectedNodeId);
      }
    });
  }
}
