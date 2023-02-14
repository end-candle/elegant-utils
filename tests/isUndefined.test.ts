import isUndefined from '@/isUndefined';

describe('test isUndefined', () => {
  test("it's true when argument is undefined", () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });
  test("it's false when argument isn't undefined", () => {
    expect(isUndefined(2222)).toBeFalsy();
  });
});
