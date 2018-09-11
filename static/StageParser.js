const requiredKeys = ['positionX', 'positionY', 'width', 'height', 'color'];
const identityTransformation = (v, _verticalShift) => v;
window.getObstacles = (stage) => {
    let obstacles = window[`stage${stage}obstacles`];
    // obstacle config contains Y-coordinate relative to that previous obstacle
    // so we accumulate the values to get absolute Y-coordinates.
    let cumulativeYShift = 0;
    obstacles.forEach(rawObstacle => (cumulativeYShift = rawObstacle[1] = cumulativeYShift + rawObstacle[1]))
    obstacles = obstacles.map(rawObstacle => ({
        positionX: rawObstacle[0],
        positionY: rawObstacle[1],
        width: rawObstacle[2],
        height: rawObstacle[3],
        color: rawObstacle[4],
        transformations: rawObstacle[5] || {}
    }));
    obstacles.forEach(({ transformations }) =>
        requiredKeys.forEach(key => transformations[key] = transformations[key] || identityTransformation));

    return obstacles;
}
