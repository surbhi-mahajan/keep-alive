const W = window.innerWidth;
const H = window.innerHeight;

// Connection radius
const connectionRadius = 105;


// Node Configuration
let nodeRadius = 18

// Nodes Dimension
window.nodesConfig_1 = [
    {
        color: "rgb(255,0,0)",
        radius: nodeRadius,
        angle: 180
    },
    {
        color: "rgb(0,191,255)",
        radius: nodeRadius,
        angle: 0
    }
]

window.nodesConfig_2 = [
    {
        color: "rgb(0,191,255)",
        radius: nodeRadius,
        angle: 0
    },
    {
        color: "rgb(255,0,0)",
        radius: nodeRadius,
        angle: 180
    }
]

window.nodesConfig_3 = [
    {
        color: "rgb(255,0,0)",
        radius: nodeRadius,
        angle: 120
    },
    {
        color: "rgb(0,191,255)",
        radius: nodeRadius,
        angle: 240
    },
    {
        color: "lawngreen",
        radius: nodeRadius,
        angle: 360
    }
]

// Speed of rotating nodes
const stageSpeed = 4

const reverseSpeed = 25
