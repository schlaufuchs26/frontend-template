import { describe, expect, test } from "bun:test";

// Example: test pure logic extracted from the counter app
function increment(n: number): number {
  return n + 1;
}

describe("counter logic", () => {
  test("increment increases value by 1", () => {
    expect(increment(0)).toBe(1);
    expect(increment(5)).toBe(6);
  });

  test("increment is pure", () => {
    const input = 3;
    expect(increment(input)).toBe(4);
    expect(input).toBe(3); // original unchanged
  });
});
