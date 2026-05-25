const { add, subtract, multiply } = require('./index');

test('add 1 + 2 equals 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 5 - 3 equals 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiply 3 * 4 equals 12', () => {
  expect(multiply(3, 4)).toBe(12);
});
