const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("when its true", () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith("yes");
  });

  it("when its fail", () => {
    check(() => false, onSuccess, onFail);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onSuccess).toBeCalledTimes(0);
  });
});
