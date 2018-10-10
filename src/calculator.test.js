const add = require('./calculator');
const throws = require("assert");
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
	throws(add("-1, 2"),/Negetives not allowed: -1/);
});
test("it should throw an error exception", () => {
	throws(add("-1, 2, -3"),/Negetives not allowed: -1, -3/);
});

test("it should ignore the 1000 and just return the single number ", () => {
	expect(add("12, 1000")).toBe(12);
});

test("it should ignore the numbers bigger then 1000 and just return the numbers ", () => {
	expect(add("12, 24, 48, 72, 100, 1000, 10000")).toBe(256);
});


