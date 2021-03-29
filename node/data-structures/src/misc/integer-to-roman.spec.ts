import { integerToRomanOne } from './integer-to-roman'

describe('integerToRomanOne', () => {
    // Assert if setTimeout was called properly
    it('integer to roman tests', () => {
        expect(integerToRomanOne(3456)).toBe('MMMCDLVI')
        expect(integerToRomanOne(2199)).toBe('MMCXCIX')
        expect(integerToRomanOne(1011)).toBe('MXI')
        expect(integerToRomanOne(3998)).toBe('MMMCMXCVIII')
        expect(integerToRomanOne(999)).toBe('CMXCIX')
        expect(integerToRomanOne(0)).toBe('')
    })
})
