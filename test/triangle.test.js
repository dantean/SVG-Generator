const Triangle = require("../lib/triangle");

const triangle = new Triangle("this is a test", "red", "blue");

describe("Triangle", () => {
    describe("properties", () => {
        it("Test text, textColor, shapeColor", () => {
            expect(triangle.text).toEqual("this is a test");
            expect(triangle.textColor).toEqual("red");
            expect(triangle.shapeColor).toEqual("blue");
        });
    });

    describe("method", () => {
        it("Test render()", () => {
            expect(triangle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polyline points="150, 18 244, 182 56, 182" fill="blue" width="300" height="200"/><text x="150" y="165" font-size="55" text-anchor="middle" fill="red">this is a test</text></svg>');
        });
    });
});
