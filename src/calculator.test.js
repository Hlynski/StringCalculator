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

test("it should add the random total of numbers and return the sum", () => {
	expect(add("1,2,6,3,7")).toBe(19);
});

test("it should add the numbers without reading the sign ", () => {
	expect(add("1\n2, 3")).toBe(6);
});

test("it should throw an error exception", () => {
	expect(function(){add("-1, 2")}).toThrow("Negetives not allowed: -1");
});
