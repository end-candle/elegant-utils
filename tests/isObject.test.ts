import isObject from '@/isObject';

describe('test isObject', () => {
  test("it's true when argument is object", () => {
    expect(isObject({})).toBeTruthy();
  });
  test("it's false when argument is function", () => {
    expect(isObject(() => void 0)).toBeFalsy();
  });
  test("it's false when argument is null", () => {
    expect(isObject(null)).toBeFalsy();
  });
});
