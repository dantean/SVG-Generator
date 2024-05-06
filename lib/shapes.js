class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error("The child must create its own logo shape");
    }
}

module.exports = Shapes;
