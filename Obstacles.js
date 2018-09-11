class Obstacles {
    constructor(obstaclesArray, speed, revertSpeed) {
       this.data = obstaclesArray.map(obstacleItem => new Obstacle(obstacleItem))
    }

    render(ObstaclesNumber){
        for(let counter = 0;counter < ObstaclesNumber ;counter++){
            const obstacle = this.data[counter];
            if(obstacle.positionY >= - obstacle.height && obstacle.positionY < keepAliveCanvas.height + obstacle.height){
                obstacle.render()
            }
        }
    }

    update(ObstaclesNumber, verticalShift) {
        for(let counter = 0;counter < ObstaclesNumber;counter++) {
            this.data[counter].update(verticalShift)
        }
    }
}