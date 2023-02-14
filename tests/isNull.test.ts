import isNull from '@/isNull';

describe('test isNull', () => {
  test("it's true when argument is null", () => {
    expect(isNull(null)).toBeTruthy();
  });
  test("it's false when argument isn't null", () => {
    expect(isNull(2222)).toBeFalsy();
  });
});
