import isString from '@/isString';

describe('test isString', () => {
  test("it's true when argument is string", () => {
    expect(isString('undefined')).toBeTruthy();
  });
  test("it's false when argument isn't string", () => {
    expect(isString(2222)).toBeFalsy();
  });
});
