const hoge = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(hoge.sum(1, 2)).toBe(3);
});