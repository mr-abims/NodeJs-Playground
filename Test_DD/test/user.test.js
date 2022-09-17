const user = require("../src/user")


test("User object is returned properly", ()=> {
    const userObj = user.getUserDetails()
    expect(userObj.firstname).toBe("Johnson")
    expect(userObj.lastname).toBe("Olawale")
    expect(userObj).toHaveProperty("age")
    expect(userObj.age).toBe(24)
    expect(userObj.height).toBeLessThan(150)
})