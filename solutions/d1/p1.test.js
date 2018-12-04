const p1 = require('./p1');

describe('p1', () => {
  test('e1', () => {
    expect(p1(`+1, +1, +1`)).toBe(3);
  });

  test('e2', () => {
    expect(p1(`+1, +1, -2`)).toBe(0);
  });

  test('e3', () => {
    expect(p1(`-1, -2, -3`)).toBe(-6);
  });
});
