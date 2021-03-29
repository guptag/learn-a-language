import { DepthFirstSearch, IDepthFirstSearch } from './depthfirstsearch';
import { Graph, IGraph } from './graph';

interface IAirport {
  id: string;
  name: string;
}

describe('dfs tests', () => {
  it('dfs detects when connections exist', () => {
    const jfk: IAirport = { id: 'JFK', name: 'JFK Intl Airport' };
    const sea: IAirport = { id: 'SEA', name: 'Seattle Intl Airport' };
    const ord: IAirport = { id: 'ORD', name: 'ORD Intl Airport' };
    const phx: IAirport = { id: 'PHX', name: 'PHX Intl Airport' };
    const atl: IAirport = { id: 'ATL', name: 'ATL Intl Airport' };
    const lax: IAirport = { id: 'LAX', name: 'LAX Intl Airport' };
    const mco: IAirport = { id: 'MCO', name: 'MCO Intl Airport' };
    const hou: IAirport = { id: 'HOU', name: 'HOU Intl Airport' };
    const den: IAirport = { id: 'DEN', name: 'DEN Intl Airport' };
    const graph: IGraph<IAirport> = new Graph(
      [jfk, sea, ord, phx, atl, lax, mco, hou, den],
      [
        ['JFK', 'MCO'],
        ['ORD', 'HOU'],
        ['JFK', 'ATL'],
        ['JFK', 'PHX'],
        ['SEA', 'MCO'],
        ['SEA', 'LAX'],
        ['LAX', 'JFK'],
        ['MCO', 'ORD'],
      ]
    );

    const dfs: IDepthFirstSearch = new DepthFirstSearch(graph, jfk.id);
    expect(dfs.isMarked(sea.id)).toBeTruthy();
    expect(dfs.isMarked(ord.id)).toBeTruthy();
    expect(dfs.isMarked(phx.id)).toBeTruthy();
    expect(dfs.isMarked(atl.id)).toBeTruthy();
    expect(dfs.isMarked(lax.id)).toBeTruthy();
    expect(dfs.isMarked(mco.id)).toBeTruthy();
    expect(dfs.isMarked(hou.id)).toBeTruthy();
    expect(dfs.isMarked(den.id)).not.toBeTruthy();
    expect(dfs.getCount()).toEqual(7);
  });

  it('dfs detects when no connections exist', () => {
    const jfk: IAirport = { id: 'JFK', name: 'JFK Intl Airport' };
    const sea: IAirport = { id: 'SEA', name: 'Seattle Intl Airport' };
    const ord: IAirport = { id: 'ORD', name: 'ORD Intl Airport' };
    const phx: IAirport = { id: 'PHX', name: 'PHX Intl Airport' };
    const atl: IAirport = { id: 'ATL', name: 'ATL Intl Airport' };
    const lax: IAirport = { id: 'LAX', name: 'LAX Intl Airport' };
    const mco: IAirport = { id: 'MCO', name: 'MCO Intl Airport' };
    const hou: IAirport = { id: 'HOU', name: 'HOU Intl Airport' };
    const den: IAirport = { id: 'DEN', name: 'DEN Intl Airport' };
    const graph: IGraph<IAirport> = new Graph(
      [jfk, sea, ord, phx, atl, lax, mco, hou, den],
      [
        ['JFK', 'MCO'],
        ['ORD', 'HOU'],
        ['JFK', 'ATL'],
        ['JFK', 'PHX'],
        ['SEA', 'MCO'],
        ['SEA', 'LAX'],
        ['LAX', 'JFK'],
        ['MCO', 'ORD'],
      ]
    );

    const dfs: IDepthFirstSearch = new DepthFirstSearch(graph, den.id);
    expect(dfs.isMarked(sea.id)).not.toBeTruthy();
    expect(dfs.isMarked(ord.id)).not.toBeTruthy();
    expect(dfs.isMarked(phx.id)).not.toBeTruthy();
    expect(dfs.isMarked(atl.id)).not.toBeTruthy();
    expect(dfs.isMarked(lax.id)).not.toBeTruthy();
    expect(dfs.isMarked(mco.id)).not.toBeTruthy();
    expect(dfs.isMarked(hou.id)).not.toBeTruthy();
    expect(dfs.isMarked(jfk.id)).not.toBeTruthy();
    expect(dfs.getCount()).toEqual(0);
  });

  it('dfs detects connections when no cycles exist', () => {
    const graph: IGraph<number> = new Graph(
      [1, 2, 3, 4],
      [
        [1, 2],
        [2, 3],
        [3, 4],
      ]
    );
    const dfs: IDepthFirstSearch = new DepthFirstSearch(graph, 2);
    expect(dfs.isMarked(1)).toBeTruthy();
    expect(dfs.isMarked(2)).toBeTruthy();
    expect(dfs.isMarked(3)).toBeTruthy();
    expect(dfs.isMarked(4)).toBeTruthy();
    expect(dfs.getCount()).toEqual(3);
  });

  it('dfs detects connections when cycles exist', () => {
    const graph: IGraph<number> = new Graph(
      [1, 2, 3, 4],
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 2],
      ]
    );
    const dfs: IDepthFirstSearch = new DepthFirstSearch(graph, 2);
    expect(dfs.isMarked(1)).toBeTruthy();
    expect(dfs.isMarked(2)).toBeTruthy();
    expect(dfs.isMarked(3)).toBeTruthy();
    expect(dfs.isMarked(4)).toBeTruthy();
    expect(dfs.getCount()).toEqual(3);
  });
});
