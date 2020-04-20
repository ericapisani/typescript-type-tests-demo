import { add } from "../src/index";

describe("add", () => {
  it("evaluates to true", () => {
    expect(true).toBe(true);
  });

  it("returns the addition of 2 numbers", () => {
    expect(add(4, 2)).toEqual(6);
  });

  it("returns a concatenated string", () => {
    expect(add("foo", "bar")).toEqual("foobar");
  });
});
