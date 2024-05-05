const fs = require("fs");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");
import inquirer from 'inquirer';

const questions = [
    {
        type: "input",
        message: "Enter logo text",
        name: "logoText"
    },
    {
        type: "input",
        message: "Enter text color",
        name: "textColor"
    },
    {
        type: "list",
        message: "Choose a shape",
        name: "shape",
        choices: ["circle", "square", "triangle"]
    },
    {
        type: "input",
        message: "Enter shape color",
        name: "shapeColor"
    },
];

inquirer.prompt(questions)
.then(data => {
    if(data.shape === "circle") {
        const circle = new Circle(data.logoText, data.textColor, data.shapeColor)
        fs.writeFile("./examples/circle.svg", circle.render(), err => {
            console.log("Logo Successfully Created!")
        })
    }else if(data.shape === "square") {
        const square = new Square(data.logoText, data.textColor, data.shapeColor)
        fs.writeFile("./examples/square.svg", square.render(), err => {
            console.log("Logo Successfully Created!")
        })

    }else {
        const triangle = new Triangle(data.logoText, data.textColor, data.shapeColor)
        fs.writeFile("./examples/triangle.svg", triangle.render(), err => {
            console.log("Logo Successfully Created!")
        })
    }
})