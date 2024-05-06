import fs from 'fs';
import Circle from './lib/circle.js';
import Square from './lib/square.js';
import Triangle from './lib/triangle.js';
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
    if (data.shape === "circle") {
        const circle = new Circle(data.logoText, data.textColor, data.shapeColor);
        fs.writeFile("./output/circle.svg", circle.render(), err => {
            if (err) {
                console.error("Error creating file:", err);
            } else {
                console.log("Logo Successfully Created!");
            }
        });
    } else if (data.shape === "square") {
        const square = new Square(data.logoText, data.textColor, data.shapeColor);
        fs.writeFile("./output/square.svg", square.render(), err => {
            if (err) {
                console.error("Error creating file:", err);
            } else {
                console.log("Logo Successfully Created!");
            }
        });
    } else {
        const triangle = new Triangle(data.logoText, data.textColor, data.shapeColor);
        fs.writeFile("./output/triangle.svg", triangle.render(), err => {
            if (err) {
                console.error("Error creating file:", err);
            } else {
                console.log("Logo Successfully Created!");
            }
        });
    }
});
