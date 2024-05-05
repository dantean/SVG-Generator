const Shapes = require("./shapes");

class Triangle extends Shapes{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polyline points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" width="300" height="200"/><text x="150" y="165" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = Triangle;