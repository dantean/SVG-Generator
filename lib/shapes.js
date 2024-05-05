class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    render() {
        return new Error("The child must create it's own logo shape")
    }
}

module.exports = Shapes;