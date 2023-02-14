import isArray from '@/isArray';

describe('test isArray', () => {
  test("it's true when argument is array", () => {
    expect(isArray([0, 1])).toBeTruthy();
  });
  test("it's false when argument isn't array", () => {
    expect(isArray(2222)).toBeFalsy();
  });
});
