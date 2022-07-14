import greet from "./greet.js";

describe("greet", () => {
  it('returns a String "Hello Hannah!" if called greet("Hannah")', () => {
    const result = greet("Hannah");
    expect(result).toBe("Hello Hannah!");
  });
});
