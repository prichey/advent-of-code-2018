const p2 = require('./p2');

describe('p2', () => {
  test('e1', () => {
    expect(p2(`+1, -1`)).toBe(0);
  });

  test('e2', () => {
    expect(p2(`+3, +3, +4, -2, -4`)).toBe(10);
  });

  test('e3', () => {
    expect(p2(`-6, +3, +8, +5, -6`)).toBe(5);
  });

  test('e4', () => {
    expect(p2(`+7, +7, -2, -7, -4`)).toBe(14);
  });
});
