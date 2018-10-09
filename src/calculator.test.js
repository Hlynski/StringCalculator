const add = require('./calculator');

test("it should return 0 from an empty string", () => {
	expect(add("")).toBe(0);
});

test("it should return 2", () => {
	expect(add("2")).toBe(2);
});

test("it should add the 2 numbers and return the sum", () => {
	expect(add("1,2")).toBe(3);
});