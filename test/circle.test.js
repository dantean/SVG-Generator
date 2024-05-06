const Circle = require("../lib/circle");

const circle = new Circle("this is a test", "red", "blue");

describe("Circle", () => {
    describe("properties", () => {
        it("Test text, textColor, shapeColor", () => {
            expect(circle.text).toEqual("this is a test");
            expect(circle.textColor).toEqual("red");
            expect(circle.shapeColor).toEqual("blue");
        });
    });

    describe("method", () => {
        it("Test render()", () => {
            expect(circle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">this is a test</text></svg>');
        });
    });
});
