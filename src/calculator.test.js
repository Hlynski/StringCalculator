const add = require('./calculator');

test("it should return 0", () => {
	expect(add("")).toBe(0);
});

test("it should be 2", () => {
	expect(add("2")).toBe(2);
});