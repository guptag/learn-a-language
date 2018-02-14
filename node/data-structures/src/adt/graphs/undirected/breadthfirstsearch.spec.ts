import { BreadthFirstSearch, IBreadthFirstSearch } from '../../../../src/adt/graphs/undirected/breadthfirstsearch';
import { Graph, IGraph } from '../../../../src/adt/graphs/undirected/graph';

interface IAirport {
  id: string;
  name: string;
}

describe('bfs tests', () => {

  it('bfs detects when connections exist', () => {
    const jfk: IAirport = {id: 'JFK', name: 'JFK Intl Airport' };
    const sea: IAirport = {id: 'SEA', name: 'Seattle Intl Airport' };
    const ord: IAirport = {id: 'ORD', name: 'ORD Intl Airport' };
    const phx: IAirport = {id: 'PHX', name: 'PHX Intl Airport' };
    const atl: IAirport = {id: 'ATL', name: 'ATL Intl Airport' };
    const lax: IAirport = {id: 'LAX', name: 'LAX Intl Airport' };
    const mco: IAirport = {id: 'MCO', name: 'MCO Intl Airport' };
    const hou: IAirport = {id: 'HOU', name: 'HOU Intl Airport' };
    const den: IAirport = {id: 'DEN', name: 'DEN Intl Airport' };
    const graph: IGraph<IAirport> = new Graph(
      [jfk, sea, ord, phx, atl, lax, mco, hou, den],
      [
        ['JFK', 'MCO'], ['ORD', 'HOU'], ['JFK', 'ATL'], ['JFK', 'PHX'],
        ['SEA', 'MCO'], ['SEA', 'LAX'], ['LAX', 'JFK'], ['MCO', 'ORD']
      ]
    );

    const bfs: IBreadthFirstSearch = new BreadthFirstSearch(graph, jfk.id);
    expect(bfs.isMarked(sea.id)).toBeTruthy();
    expect(bfs.isMarked(ord.id)).toBeTruthy();
    expect(bfs.isMarked(phx.id)).toBeTruthy();
    expect(bfs.isMarked(atl.id)).toBeTruthy();
    expect(bfs.isMarked(lax.id)).toBeTruthy();
    expect(bfs.isMarked(mco.id)).toBeTruthy();
    expect(bfs.isMarked(hou.id)).toBeTruthy();
    expect(bfs.isMarked(den.id)).not.toBeTruthy();
    expect(bfs.getCount()).toEqual(7);
  });

  it('bfs detects when no connections exist', () => {
    const jfk: IAirport = {id: 'JFK', name: 'JFK Intl Airport' };
    const sea: IAirport = {id: 'SEA', name: 'Seattle Intl Airport' };
    const ord: IAirport = {id: 'ORD', name: 'ORD Intl Airport' };
    const phx: IAirport = {id: 'PHX', name: 'PHX Intl Airport' };
    const atl: IAirport = {id: 'ATL', name: 'ATL Intl Airport' };
    const lax: IAirport = {id: 'LAX', name: 'LAX Intl Airport' };
    const mco: IAirport = {id: 'MCO', name: 'MCO Intl Airport' };
    const hou: IAirport = {id: 'HOU', name: 'HOU Intl Airport' };
    const den: IAirport = {id: 'DEN', name: 'DEN Intl Airport' };
    const graph: IGraph<IAirport> = new Graph(
      [jfk, sea, ord, phx, atl, lax, mco, hou, den],
      [
        ['JFK', 'MCO'], ['ORD', 'HOU'], ['JFK', 'ATL'], ['JFK', 'PHX'],
        ['SEA', 'MCO'], ['SEA', 'LAX'], ['LAX', 'JFK'], ['MCO', 'ORD']
      ]
    );

    const bfs: IBreadthFirstSearch = new BreadthFirstSearch(graph, den.id);
    expect(bfs.isMarked(sea.id)).not.toBeTruthy();
    expect(bfs.isMarked(ord.id)).not.toBeTruthy();
    expect(bfs.isMarked(phx.id)).not.toBeTruthy();
    expect(bfs.isMarked(atl.id)).not.toBeTruthy();
    expect(bfs.isMarked(lax.id)).not.toBeTruthy();
    expect(bfs.isMarked(mco.id)).not.toBeTruthy();
    expect(bfs.isMarked(hou.id)).not.toBeTruthy();
    expect(bfs.isMarked(jfk.id)).not.toBeTruthy();
    expect(bfs.getCount()).toEqual(0);
  });

  it('bfs detects connections when no cycles exist', () => {
    const graph: IGraph<number> = new Graph(
      [1, 2, 3, 4],
      [
        [1, 2], [2, 3], [3, 4]
      ]
    );
    const bfs: IBreadthFirstSearch = new BreadthFirstSearch(graph, 2);
    expect(bfs.isMarked(1)).toBeTruthy();
    expect(bfs.isMarked(2)).toBeTruthy();
    expect(bfs.isMarked(3)).toBeTruthy();
    expect(bfs.isMarked(4)).toBeTruthy();
    expect(bfs.getCount()).toEqual(3);
  });

  it('bfs detects connections when cycles exist', () => {
    const graph: IGraph<number> = new Graph(
      [1, 2, 3, 4],
      [
        [1, 2], [2, 3], [3, 4], [4, 2]
      ]
    );
    const bfs: IBreadthFirstSearch = new BreadthFirstSearch(graph, 2);
    expect(bfs.isMarked(1)).toBeTruthy();
    expect(bfs.isMarked(2)).toBeTruthy();
    expect(bfs.isMarked(3)).toBeTruthy();
    expect(bfs.isMarked(4)).toBeTruthy();
    expect(bfs.getCount()).toEqual(3);
  });

});
