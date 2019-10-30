const quickSort = require('../quick-sort');

describe('Quick sort', () => {
  it('sorts an array', () => {
    const array = [5, 6, 1, 2, 3, 4]
    expect(quickSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });
})