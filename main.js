let connection = null;
let stage = null;

let rightPressed = false;
let leftPressed = false;

let totalLevels = 3

function render() {
    ctx.clearRect(0, 0, keepAliveCanvas.width, keepAliveCanvas.height);
    ctx.fillStyle = `rgb(0,0,0)`;
    ctx.fillRect(0, 0, keepAliveCanvas.width, keepAliveCanvas.height);
    connection.render()
    stage.render()
}

function update() {
    if (rightPressed) {
        stage.clockWise()
    }
    if (leftPressed) {
        stage.antiClockWise()
    }
    stage.update()
}

function loop() {
    if (stage.levelCompleted) {
        document.getElementById('keep-alive-canvas').style.display = "none";
        if (levelCounter < totalLevels) {
            document.getElementById(`${levelCounter}_levelText`).style.display = "block";
            document.getElementById(`${levelCounter}_level_score`).innerHTML = stage.score;
            setTimeout(() => {
                document.getElementById(`${levelCounter}_levelText`).style.display = "none";
                levelCounter++;
                // starting new level
                start(levelCounter)
            }, 1000)
        }
        else {
            // When all levels are completed
            document.getElementById(`endGameText`).style.display = "block";
            document.getElementById(`${levelCounter}_level_score`).innerHTML = stage.score;
        }
        return;
    }
    else if (!stage.life) {
        document.getElementById('keep-alive-canvas').style.display = "none";
        document.getElementsByClassName(`gameOver`)[0].style.display = "block";
        return;
    }
    requestAnimationFrame(loop);
    render()
    update()
    document.getElementsByClassName(`info`)[0].style.display = "block";
    document.getElementById(`score`).innerHTML = `${stage.score}`;
    document.getElementById(`life`).innerHTML = `${stage.life}`;
}

function init() {
    connection = new Connection(keepAliveCanvas.width / 2, keepAliveCanvas.height - 200, connectionRadius);
    let nodes = new Nodes(connection, window[`nodesConfig_${levelCounter}`])
    let obstacles = new Obstacles(getObstacles(levelCounter))
    stage = new Stage(connection, nodes, obstacles, stageSpeed, reverseSpeed)
    loop()
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

window.keepAliveCanvas = document.getElementById("keep-alive-canvas");
window.ctx = keepAliveCanvas.getContext("2d");
window.keepAliveCanvas.width = W;
window.keepAliveCanvas.height = H;

function start(level) {
    document.getElementById('menu').style.display = "none";
    document.getElementById('keep-alive-canvas').style.display = "block";
    window.levelCounter = level;
    init();
}

function restart() {
    location.reload();
}