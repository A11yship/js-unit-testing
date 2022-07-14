import greet from "./greet.js";

describe("greet", () => {
  it('returns a String "Hello Hannah!" if called greet("Hannah")', () => {
    const result = greet("Hannah");
    expect(result).toBe("Hello Hannah!");
  });
  it('returns a String "Hello stranger!" if called greet()', () => {
    const result = greet();
    expect(result).toBe("Hello stranger!");
  });
  it('returns a String "Hello Coach!" if called greet(Alex)', () => {
    const result = greet("Alex");
    expect(result).toBe("Hello Coach!");
  });
  it('returns a String "Hello Coach!" if called greet(CJ)', () => {
    const result = greet("CJ");
    expect(result).toBe("Hello Coach!");
  });
});
