const { PI, sin } = Math;
window.stage2obstacles = [
// Left side blocks in Simple harmonic motion in X
[
    (W) / 2 - 2 * 105, -PI * 60, 2 * 105 - 50, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => x + 100 * Math.sin(vShift / 60) }
], [
    (W) / 2 - 2 * 105, -2 * PI * 60, 2 * 105 - 50, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => x + 100 * Math.sin(vShift / 60 + PI / 3) }
],
// Right side blocks in Simple harmonic motion in X
[
    (W) / 2 + 52, -2 * PI * 60, 2 * 105 - 50, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => x + 100 * Math.sin(- vShift / 60)}
], [
    (W) / 2 + 52, -2 * PI * 60, 2 * 105 - 50, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => x + 100 * Math.sin(-(vShift / 60 + PI / 3)) }
],
// Square block oscilating in both X & Y
[
    (W) / 2 - 40, -2 * PI * 60, 105, 60, "rgb(255,255,255)",
    {
        positionX: (x, vShift) => x + 50 * Math.sin(vShift / 60),
        positionY: (y, vShift) => y + 50 * Math.sin(vShift / 60)
    }
],
// small blocks moving horizontally to the right
[
    0, -2 * PI * 60, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (2 * vShift + x).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (2 * vShift + x + W / 4).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (2 * vShift + x + W / 2).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (2 * vShift + x + 3 * W / 4).mod(W) }
],
// small blocks moving horizontally to the left
[
    0, -2 * PI * 60, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (- 2 * vShift + x).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (- 2 * vShift + x + W / 4).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (- 2 * vShift + x + W / 2).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (- 2 * vShift + x + 3 * W / 4).mod(W) }
],
// small blocks moving horizontally to the right
[
    0, -2 * PI * 60, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (1.5 * vShift + x).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (1.5 * vShift + x + W / 4).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (1.5 * vShift + x + W / 2).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (1.5 * vShift + x + 3 * W / 4).mod(W) }
],
// small blocks moving horizontally to the left
[
    0, -2 * PI * 60, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (- 1.5 * vShift + x).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (- 1.5 * vShift + x + W / 4).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (- 1.5 * vShift + x + W / 2).mod(W) }
],
[
    0, 0, 30, 30, "rgb(255,255,255)",
    { positionX: (x, vShift) => (- 1.5 * vShift + x + 3 * W / 4).mod(W) }
]]
