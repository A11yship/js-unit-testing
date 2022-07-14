import ageCheck from "./age-check.js";

describe("ageCheck", () => {
  it('returns a String "Error: no age" if called ageCheck()', () => {
    const result = ageCheck();
    expect(result).toBe("Error: no age");
  });
});
