import { closestToZero } from "../closestToZero";

test("spec-one", () => {
  expect(closestToZero([8, 5, 10])).toBe(5);
});

test("spec-two", () => {
  expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1);
});

test("spec-two", () => {
  expect(closestToZero([8, 2, 3, -2])).toBe(2);
});

test("edge-one", () => {
  expect(closestToZero(undefined)).toBe(0);
});

test("edge-two", () => {
  expect(closestToZero([])).toBe(0);
});

test("edge-three", () => {
  expect(closestToZero([42])).toBe(42);
});

test("edge-four", () => {
  expect(closestToZero([-1, 0, 1])).toBe(0);
});

test("edge-five", () => {
  expect(closestToZero([-1, 0, 0, 0, 0, 0, 1])).toBe(0);
});

test("edge-six", () => {
  expect(
    closestToZero([
      -36,
      -53,
      36,
      -7,
      -42,
      87,
      -14,
      -85,
      -49,
      61,
      61,
      88,
      64,
      29,
      -87,
      61,
      -67,
      47,
      -88,
      13,
      -39,
      -66,
      46,
      -49,
      -29,
      -37,
      54,
      -45,
      24,
      84,
      29,
      -75,
      -48,
      -39,
      85,
      57,
      30,
      8,
      -89,
      -52,
      41,
      -19,
      87,
      -71,
      -53,
      -97,
      93,
      48,
      -21,
      -31,
      -64,
      -13,
      62,
      -50,
      61,
      -63,
      67,
      80,
      30,
      -79,
      -16,
      73,
      78,
      -68,
      -54,
      93,
      -34,
      -66,
      15,
      89,
      -20,
      -9,
      -75,
      82,
      40,
      -90,
      -57,
      7,
      10,
      10,
      -10,
      -99,
      -99,
      -45,
      66,
      -93,
      90,
      -44,
      53,
      6,
      -64,
      8,
      15,
      -68,
      37,
      79,
      32,
      -63,
      23,
      18
    ])
  ).toBe(6);
});