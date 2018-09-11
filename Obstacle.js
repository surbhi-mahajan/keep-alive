class Obstacle {
    constructor(dimension) {
        let { positionX, positionY, width, height, color, transformations } = dimension;
        this.baseState = {
            positionX, positionY, width, height, color
        };
        this.transformations = transformations;
        this.update();
    }

    render() {
        ctx.beginPath();
        ctx.rect(this.positionX, this.positionY, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(verticalShift) {
        for(let key in this.baseState) {
            this[key] = this.transformations[key](this.baseState[key], verticalShift);
        }
        this.positionY += verticalShift;
    }

}