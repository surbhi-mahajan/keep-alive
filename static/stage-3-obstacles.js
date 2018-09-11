// Initial positions of moving blocks in format [positionX, diffPositionY, width, height, color]
// diffPositionY represents how far up the current obstacle is from the last one
let { sqrt } = Math
window.stage3obstacles = [
// Easy section
    [
        (W) / 2 - 0.25 * 105, -60, 0.5 * 105, 30, "rgb(255,0,0)"
    ], [
        (W) / 2 - (1.5 * 105 + 105 / sqrt(2)), -8 * 60, 1.5 * 105, 30, "rgb(0,191,255)"
    ], [
        (W) / 2 - 0.25 * 105, -8 * 60, 0.5 * 105, 30, "lawngreen"
    ], [
        (W) / 2 - (1.5 * 105 + 105 / sqrt(2)), -8 * 60, 1.5 * 105, 30, "rgb(0,191,255)"
    ], [
        (W) / 2 + (105 * sqrt(2)/ 2), -0 * 60, 1.5 * 105, 30, "lawngreen"
    ],
// Tricky block
    [
        (W) / 2 + 25, -9 * 60, 2 * 105, 30, "rgb(255,0,0)"
    ],
// Vertical block
    [
        (W) / 2 - 15, -8 * 60, 30, 2 * 105, "rgb(255,0,0)"
    ],
// Continued clockwise rotations
    [
        (W) / 2, -6 * 60, 1.5 * 105, 30, "rgb(0,191,255)"
    ], [
        (W) / 2, -6 * 60, 1.5 * 105, 30, "lawngreen"
    ], [
        (W) / 2, -6 * 60, 1.5 * 105, 30, "rgb(255,0,0)"
    ], [
        (W) / 2, -6 * 60, 1.5 * 105, 30, "lawngreen"
    ],
// Continued counter-clockwise rotations
    [
        (W) / 2 - (0.5 * 105 + 105 / sqrt(2)), -6 * 60, 1.5 * 105, 30, "rgb(255,0,0)"
    ], [
        (W) / 2 - (0.5 * 105 + 105 / sqrt(2)), -6 * 60, 1.5 * 105, 30, "lawngreen"
    ], [
        (W) / 2 - (0.5 * 105 + 105 / sqrt(2)), -6 * 60, 1.5 * 105, 30, "rgb(0,191,255)"
    ], [
        (W) / 2 - (0.5 * 105 + 105 / sqrt(2)), -6 * 60, 1.5 * 105, 30, "lawngreen"
    ],
// Alternating rotations
    [
        (W) / 2, -6 * 60, 1.5 * 105, 30, "rgb(0,191,255)"
    ], [
        (W) / 2 - (0.5 * 105 + 105 / sqrt(2)), -6 * 60, 1.5 * 105, 30, "rgb(255,0,0)"
    ], [
        (W) / 2, -6 * 60, 1.5 * 105, 30, "rgb(0,191,255)"
    ], [
        (W) / 2 - (0.5 * 105 + 105 / sqrt(2)), -6 * 60, 1.5 * 105, 30, "rgb(255,0,0)"
    ],
// Square obstacle sections
    [
        (W) / 2 - 105 - 30, -9 * 60, 60, 60, "lawngreen"
    ], [
        (W) / 2 + 105 - 30, -0 * 60, 60, 60, "rgb(255,0,0)"
    ], [
        (W) / 2 - 30, -8.5 * 60, 60, 60, "rgb(0,191,255)"
    ], [
        (W) / 2 - 105 - 30, -8.5 * 60, 60, 60, "lawngreen"
    ], [
        (W) / 2 + 105 - 30, -0 * 60, 60, 60, "rgb(0,191,255)"
    ], [
        (W) / 2 - 30, -8.5 * 60, 60, 60, "lawngreen"
    ],
// Gate obstacle
    [
        (W) / 2 + 50, -8.5 * 60, 2 * 105, 30, "rgb(0,191,255)"
    ], [
        (W) / 2 - 50 - 2 * 105, -0 * 60, 2 * 105, 30, "rgb(255,0,0)"
    ],
// Gate obstacle
    [
        (W) / 2 + 50, -8.5 * 60, 2 * 105, 30, "lawngreen"
    ], [
        (W) / 2 - 50 - 2 * 105, -0 * 60, 2 * 105, 30, "rgb(255,0,0)"
    ],
// Gate obstacle
    [
        (W) / 2 + 50, -8.5 * 60, 2 * 105, 30, "rgb(0,191,255)"
    ], [
        (W) / 2 - 50 - 2 * 105, -0 * 60, 2 * 105, 30, "lawngreen"
    ]];
