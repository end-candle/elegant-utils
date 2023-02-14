import isFunction from '@/isFunction';

describe('test isFunction', () => {
  test("it's true when argument is function", () => {
    expect(isFunction(() => void 0)).toBeTruthy();
  });
  test("it's false when argument isn't function", () => {
    expect(isFunction(2222)).toBeFalsy();
  });
});
