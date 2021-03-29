import { reArrange } from './rearrange-array-based-on-index';

describe('rearrange tests', () => {
  // Assert if setTimeout was called properly
  it('test 1', () => {
    expect(reArrange([5, 2], [1, 0])).toEqual([2, 5]);
  });

  it('test 2', () => {
    expect(reArrange([5, 2, 1], [1, 2, 0])).toEqual([1, 5, 2]);
  });

  it('test 3', () => {
    expect(
      reArrange([5, 2, 1, 4, 7, 8, 9, 1], [7, 5, 2, 1, 0, 3, 6, 4])
    ).toEqual([7, 4, 1, 8, 1, 2, 9, 5]);
  });
});
