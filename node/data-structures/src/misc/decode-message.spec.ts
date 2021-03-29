import { decodeMessage } from './decode-message'

describe('decodeMessage', () => {
    // Assert if setTimeout was called properly
    it('decodes message correctly', () => {
        const code: string[][] = [
            ['I', 'B', 'C', 'A', 'K', 'E', 'A'],
            ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
            ['G', 'H', 'O', 'E', 'L', 'A', 'D'],
        ]
        expect(decodeMessage(code)).toBe('IROCKED')
    })
})
