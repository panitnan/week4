const fizzbuzz = require("./fizzbuzz")

test("15 % 3 and 15 % 5 expect fizzbuzz",() => {
    expect(fizzbuzz(15)).toBe("fizzbuzz")
})
test("6 % 3 expect fizz",() => {
    expect(fizzbuzz(6)).toBe("fizz")
})
test("10 % 5 expect buzz",() => {
    expect(fizzbuzz(10)).toBe("buzz")
})
test("53 can't be mod by both 3 and 5 but have 3 and 5 in it expect fizzbuzz",() => {
    expect(fizzbuzz(53)).toBe("fizzbuzz")
})
test("13 can't be mod by both 3 and 5 but have 3 in it expect fizz",() => {
    expect(fizzbuzz(13)).toBe("fizz")
})
test("58 can't be mod by both 3 and 5 but have 5 in it expect buzz",() => {
    expect(fizzbuzz(58)).toBe("buzz")
})