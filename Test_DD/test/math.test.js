const mathLib = require("../src/mathLib")

test("add 20 + 30 works", ()=> {
    expect(mathLib.add(20, 30)).toBe(50)
})

test("add 2.4 + 30 works", ()=> {
    expect(mathLib.add(2.4, 30)).toBe(32.4)
})

test("sub 30 - 20 works", ()=> {
    expect(mathLib.sub(30, 20)).toBe(10)
})

test("mul 10 * 2 works", ()=> {
    expect(mathLib.mul(10, 2)).toBe(20)
})

test("pow 2**2 works", ()=> {
    expect(mathLib.pow(2, 2)).toBe(4)
})

test("div 30 / 2 works", ()=> {
    expect(mathLib.div(30, 2)).toBe(15)
})

test("mean [2, 3, 1, 3, 1] works", ()=> {
    expect(mathLib.mean([2, 3, 1, 3, 1])).toBe(2)
})