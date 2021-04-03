const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubCruiser";
    const e = new Engineer("Chad", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Chad", 1, "test@test.com", "GitHubCruiser");
    expect(e.getRole()).toBe(testValue);
  });
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubCruiser";
    const e = new Engineer("Chad", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });