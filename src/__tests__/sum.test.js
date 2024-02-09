import { sum } from "../components/Sum";

test("Sum function which should retrun the sum of two inputted params", () => {
  const result = sum(3, 4);
  //assertion
  expect(result).toBe(7);
});
