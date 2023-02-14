import isNil from '@/isNil';

describe('test isFunction', () => {
  test("it's true when argument is null", () => {
    expect(isNil(null)).toBeTruthy();
  });
  test("it's true when argument is undefined", () => {
    expect(isNil(undefined)).toBeTruthy();
  });
  test("it's false when argument isn't undefined or null", () => {
    expect(isNil(2222)).toBeFalsy();
  });
});
