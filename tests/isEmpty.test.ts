import isEmpty from '@/isEmpty';

describe('test isEmpty', () => {
  test("it's false when argument is 0", () => {
    expect(isEmpty(0)).toBeFalsy();
  });
  test("it's true when argument is null", () => {
    expect(isEmpty(null)).toBeTruthy();
  });
  test("it's true when argument is {}", () => {
    expect(isEmpty({})).toBeTruthy();
  });
  test("it's true when argument is undefined", () => {
    expect(isEmpty({})).toBeTruthy();
  });
  test("it's true when argument is empty string", () => {
    expect(isEmpty('')).toBeTruthy();
  });
});
