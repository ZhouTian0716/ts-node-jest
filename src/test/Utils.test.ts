import { toUpper } from "../app/Utils";

describe("Utils", () => {
  it("should pass", () => {
    const res = toUpper("xxx");
    expect(res).toBe("XXX");
  });
});
