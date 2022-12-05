import { LIFO } from "./tdd";

describe("lifo test", () => {
  let arr;

  beforeEach(() => {
    arr = [1];
  });

  test("push test", () => {
    LIFO(arr, "push", 2);
    expect(arr[1]).toBe(2);
  });

  test("pop test", () => {
    LIFO(arr, "pop");
    expect(arr[0]).toEqual(1);
  });
});
