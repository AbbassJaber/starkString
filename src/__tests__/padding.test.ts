//Prepare test
import starkString from "..";

//persian char
test("Padding de", () => {
  expect(starkString(`12.3456`).toDecimalPrecision(3).toString()).toBe(`12.3`);
  expect(starkString(`123456`).toDecimalPrecision(3).toString()).toBe(`123456`);
});
