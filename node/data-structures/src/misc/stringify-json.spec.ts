import { stringifyJson } from './stringify-json'

/*
    JSON.stringify({a:'b', c: { f: 45}, d: [3,4,5]})
    "{"a":"b","c":{"f":45},"d":[3,4,5]}"

    JSON.stringify({a:'b', c: { f: 45}, d: [3,4,5], e: undefined})
    "{"a":"b","c":{"f":45},"d":[3,4,5]}"

    JSON.stringify({a:'b', c: { f: 45}, d: [3,4,5], e: null})
    "{"a":"b","c":{"f":45},"d":[3,4,5],"e":null}"
*/

describe('stringfiyJson tests', () => {
    // Assert if setTimeout was called properly
    it('test 1', () => {
        expect(stringifyJson({ a: 'b', c: { f: 45 }, d: [3, 4, 5] })).toEqual(
            `{"a":"b","c":{"f":45},"d":[3,4,5]}`
        )
    })

    it('test 2', () => {
        expect(
            stringifyJson({ a: 'b', c: { f: 45 }, d: [3, 4, 5], e: undefined })
        ).toEqual(`{"a":"b","c":{"f":45},"d":[3,4,5]}`)
    })

    it('test 3', () => {
        expect(
            stringifyJson({ a: 'b', c: { f: 45 }, d: [3, 4, 5], e: null })
        ).toEqual(`{"a":"b","c":{"f":45},"d":[3,4,5],"e":null}`)
    })
})
