const sumThree = require('./sum-three');

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(sumThree(1, 2, 3)).toBe(6);
});