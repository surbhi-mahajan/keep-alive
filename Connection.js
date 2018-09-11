class Connection {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX
        this.centerY = centerY
        this.radius = radius
    }

    render() {
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
    }
}