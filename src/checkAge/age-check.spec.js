import ageCheck from "./age-check.js";

describe("ageCheck", () => {
  it('returns a String "Error: no age" if called ageCheck()', () => {
    const result = ageCheck();
    expect(result).toBe("Error: no age");
  });
  it('returns a String "Too young" if called ageCheck(0)', () => {
    const result = ageCheck(0);
    expect(result).toBe("Too young");
  });
  it('returns a String "Too young" if called ageCheck(9)', () => {
    const result = ageCheck(9);
    expect(result).toBe("Too young");
  });
  it('returns a String "Too young" if called ageCheck(15)', () => {
    const result = ageCheck(15);
    expect(result).toBe("Too young");
  });
});
