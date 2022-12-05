const Calculator = require("../calculator");

describe("calculator", () => {
  let car;
  beforeEach(() => {
    cal = new Calculator();
  });

  test("inits 0", () => {
    expect(cal.value).toBe(0);
  });

  test("set", () => {
    cal.set(2);
    expect(cal.value).toBe(2);
  });

  test("clear", () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  test("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  test("over 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrowError("Value can not be greater than 100");
  });
});
