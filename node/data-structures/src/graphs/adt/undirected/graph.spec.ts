import { Graph, IGraph } from './graph';

interface IAirport {
    id: string;
    name: string;
}

describe('graph tests', () => {
    it('can create graph with string nodes', () => {
        const graph: IGraph<string> = new Graph(['a', 'b', 'c']);
        expect(graph.nodes.length).toEqual(3);
        expect(graph.nodes[0]).toEqual('a');
        expect(graph.nodes[1]).toEqual('b');
        expect(graph.nodes[2]).toEqual('c');
    });

    it('can create graph with integer nodes', () => {
        const graph: IGraph<number> = new Graph([1, 2, 3]);
        expect(graph.nodes.length).toEqual(3);
        expect(graph.nodes[0]).toEqual(1);
        expect(graph.nodes[1]).toEqual(2);
        expect(graph.nodes[2]).toEqual(3);
    });

    it('can create graph with custom nodes', () => {
        const jfk: IAirport = { id: 'JFK', name: 'JFK Intl Airport' };
        const sea: IAirport = { id: 'SEA', name: 'Seattle Intl Airport' };
        const graph: IGraph<IAirport> = new Graph([jfk, sea]);
        expect(graph.nodes.length).toEqual(2);
        expect(graph.nodes[0]).toEqual(jfk);
        expect(graph.nodes[1]).toEqual(sea);
    });

    it('connected nodes are set correctly', () => {
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

        expect(graph.getConnectedNodes(jfk).length).toEqual(4);
        expect(graph.getConnectedNodes(jfk)).toEqual(
            expect.arrayContaining([mco, atl, phx, lax])
        );

        expect(graph.getConnectedNodes(sea).length).toEqual(2);
        expect(graph.getConnectedNodes(sea)).toEqual(
            expect.arrayContaining([mco, lax])
        );

        expect(graph.getConnectedNodes(mco).length).toEqual(3);
        expect(graph.getConnectedNodes(mco)).toEqual(
            expect.arrayContaining([jfk, sea, ord])
        );

        expect(graph.getConnectedNodes(hou).length).toEqual(1);
        expect(graph.getConnectedNodes(hou)).toEqual(
            expect.arrayContaining([ord])
        );

        expect(graph.getConnectedNodes(atl).length).toEqual(1);
        expect(graph.getConnectedNodes(atl)).toEqual(
            expect.arrayContaining([jfk])
        );

        expect(graph.getConnectedNodes(phx).length).toEqual(1);
        expect(graph.getConnectedNodes(phx)).toEqual(
            expect.arrayContaining([jfk])
        );

        expect(graph.getConnectedNodes(ord).length).toEqual(2);
        expect(graph.getConnectedNodes(ord)).toEqual(
            expect.arrayContaining([mco, hou])
        );

        expect(graph.getConnectedNodes(lax).length).toEqual(2);
        expect(graph.getConnectedNodes(lax)).toEqual(
            expect.arrayContaining([sea, jfk])
        );

        expect(graph.getConnectedNodes(den).length).toEqual(0);
        expect(graph.getConnectedNodes(den)).toEqual(
            expect.arrayContaining([])
        );
    });

    it('degree, maximum and average degrees are calculated correctly', () => {
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

        expect(graph.getDegree(jfk)).toEqual(4);
        expect(graph.getMaximumDegree()).toEqual(4);
        expect(graph.getAverageDegree()).toEqual(16 / 9);
    });

    it('can count self loops correctly', () => {
        const graph: IGraph<number> = new Graph(
            [1, 2, 3, 4],
            [
                [1, 1],
                [2, 2],
                [2, 3],
                [1, 4],
            ]
        );
        expect(graph.getSelfLoopCount()).toEqual(2);
    });

    it('can print the graph correctly', () => {
        const graph: IGraph<number> = new Graph(
            [1, 2, 3, 4],
            [
                [1, 1],
                [2, 2],
                [2, 3],
                [1, 4],
            ]
        );
        expect([...graph.print()].join(' ')).toEqual(
            '[1] -> 1 4; [2] -> 2 3; [3] -> 2; [4] -> 1;'
        );
    });

    it('throws error for duplicate nodes', () => {
        expect(() => new Graph([1, 1, 3, 4])).toThrow();
    });

    it('throws error for edges with invalid nodes', () => {
        expect(() => new Graph([1, 2, 3, 4], [[3, 5]])).toThrow();
    });
});
