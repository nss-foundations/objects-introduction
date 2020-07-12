describe("Student properties are created", () => {
    test("Correct properties are on student object", () => {
        expect(testFunction())
            .toMatchObject(
                { name: "Jeremy Landy", location: "Phoenix, AR", gender: "male", age: 31 }
            )
    })
})
