const { multiply } = require("../main");

test("4 * 5 = 20", () => {
  expect(multiply(4, 5)).toBe(20);
});
