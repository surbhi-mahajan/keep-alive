class Stage {
    constructor(connection, nodes, obstacles, speed, reverseSpeed) {
        this.connection  = connection;
        this.nodes = nodes;
        this.obstacles = obstacles;
        this.nodeCollided = -1;
        this.obstacleCollided = -1;
        this.rotationShift = 0;
        this.verticalShift = 0;
        this.totalDistance = 0;
        this.totalRotated = 0;
        this.speed = speed || 4;
        this.reverseSpeed = reverseSpeed || 20;
        this.timer = (new Date()).getTime() / 1000;
        this.scoreCounter = 0;
        this.lifeCounter = 4;
    }
    // Stage when all passed obstacles are reverted back
    get startState() {
        return !this.verticalShift
    }

    get score() {
        return this.scoreCounter;
    }

    get life() {
        return this.lifeCounter
    }

    get levelCompleted() {
        let lastObstacle = this.obstacles.data[this.obstacles.data.length - 1]
        return lastObstacle.positionY > keepAliveCanvas.height + lastObstacle.height
    }

    // collision stage when node and obstacle is collided
    get collisionState() {
        return this.obstacleCollided !== -1 && this.nodeCollided !== -1
    }

    // Stage when all passed obstacles are reverting
    get revertState() {
        return this.obstacleCollided !== -1
    }

    getCircleRectHitStatus(circle, rect) {
        const cx= this.connection.centerX + this.connection.radius * Math.cos(circle.newAngle * Math.PI / 180)
        const cy=this.connection.centerY + this.connection.radius * Math.sin(circle.newAngle * Math.PI/ 180)
        return collisionDetection(cx,cy,circle.radius,rect.positionX, rect.positionY,rect.width, rect.height)
    }

    detectCollision(obstacles, nodes) {
        for(let counter=0;counter < obstacles.data.length;counter++) {
            const obstacle = obstacles.data[counter]
            for(let nodeCounter = 0; nodeCounter < nodes.data.length; nodeCounter++){
                let node = nodes.data[nodeCounter]
                if(node.color != obstacle.color) {
                    let status = this.getCircleRectHitStatus(node, obstacle)
                    if(status) {
                        this.nodeCollided = nodeCounter;
                        this.obstacleCollided = counter;
                        return;
                    }
                }
            }
        }
    }
    // Node reverse speed is calculated from vertical reverse speed.
    get nodeReverseSpeed() {
        let steps = this.totalDistance / this.reverseSpeed
        return this.totalRotated / steps
    }

    update() {
        if(this.startState) {
            this.nodeCollided = -1;
            this.obstacleCollided = -1;
            this.scoreCounter = 0;
            this.timer = (new Date()).getTime() / 1000;
        }
        // when all obstacles are moving forward
        if(!this.revertState) {
            let tick = (new Date()).getTime() / 1000
            if(tick - this.timer > 1) {
                this.scoreCounter++;
                this.timer = tick;
            }
            this.verticalShift += this.speed
            this.obstacles.update(this.obstacles.data.length, this.verticalShift)
            this.detectCollision(this.obstacles,this.nodes)
        }
        else {
            // when all obstacles are reverting back
            if(this.collisionState) {
                if(this.nodes.data[this.nodeCollided].initialState) {
                    this.nodeCollided = -1;
                }
                else {
                    this.totalDistance = this.verticalShift;
                    this.totalRotated = this.rotationShift;
                }
            }
            this.verticalShift -= this.reverseSpeed
            if(this.verticalShift <= 0) {
                this.lifeCounter--;
                this.verticalShift = 0
            }
            this.rotationShift -= this.nodeReverseSpeed
            this.nodes.update(this.rotationShift)
            this.obstacles.update(this.obstacleCollided + 1, this.verticalShift)
        }
    }


    render() {
        ctx.lineWidth = 3
        ctx.strokeStyle = 'rgb(255, 255, 255)';
        for(let i=0; i < this.lifeCounter; i++) {
            ctx.beginPath()
            ctx.arc(this.connection.centerX, this.connection.centerY + 30, (i + 1) * this.connection.radius / 8 , -3*Math.PI/4, - Math.PI/4)
            ctx.stroke()
            ctx.closePath()
        }

        ctx.strokeStyle = 'rgb(255,0,0)';
        for(let i= this.lifeCounter; i < 4; i++) {
            ctx.beginPath()
            ctx.arc(this.connection.centerX, this.connection.centerY + 30, (i + 1) * this.connection.radius / 8 , -3*Math.PI/4, - Math.PI/4)
            ctx.stroke()
            ctx.closePath()
        }

        if(!this.revertState) {
            this.nodes.render()
            this.obstacles.render(this.obstacles.data.length)
        }
        else {
            if(this.collisionState) {
                this.nodes.destroy(this.nodeCollided)
            }
            else {
                this.nodes.render()
            }
            this.obstacles.render(this.obstacleCollided + 1)
        }
    }

    // Method to rotate nodes clockwise by pressing right arrow key
    clockWise() {
        if(!this.revertState) {
            this.rotationShift += this.speed
            this.nodes.update(this.rotationShift)
        }
    }
    // Method to rotate nodes antiClockWise by pressing left arrow key
    antiClockWise() {
        if(!this.revertState) {
            this.rotationShift -= this.speed;
            this.nodes.update(this.rotationShift)
        }
    }
}